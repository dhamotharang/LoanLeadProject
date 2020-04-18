package com.loanlead.controller;

import com.loanlead.auth.CustomUserDetails;
import com.loanlead.auth.RoleService;
import com.loanlead.auth.UserService;
import com.loanlead.auth.UserServiceImpl;
import com.loanlead.auth.entities.User;
import com.loanlead.models.Branch;
import com.loanlead.models.Loan;
import com.loanlead.models.Report;
import com.loanlead.models.ui.ModelEntityMapper;
import com.loanlead.models.ui.models.LoanModel;
import com.loanlead.models.ui.models.ReportFormModel;
import com.loanlead.models.ui.models.ReportModel;
import com.loanlead.services.LoanService;
import com.loanlead.services.ReportService;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping(ReportController.PREFIX + "/loans")
public class LoanController {
    private LoanService loanService;
    private UserService userService;
    private ReportService reportService;
    private RoleService roleService;
    private ModelEntityMapper mapper;

    @Value("${api.key}")
    private String apiKey;

    @Value("${domain}")
    private String domain;

    @Autowired
    public LoanController(LoanService loanService, UserService userService, ModelEntityMapper mapper, ReportService reportService, RoleService roleService) {
        this.loanService = loanService;
        this.userService = userService;
        this.reportService = reportService;
        this.roleService = roleService;
        this.mapper = mapper;
    }

    @GetMapping("/{loanId}")
    public ResponseEntity<LoanModel> find(@PathVariable Integer loanId) {
        return ResponseEntity.of(Optional.of(mapper.toModel(loanService.find(loanId), LoanModel.class)));
    }

    @GetMapping("/forwarded")
    public ResponseEntity<List<LoanModel>> forwardedLoans(Authentication authentication) {
        User user = ((CustomUserDetails) authentication.getPrincipal()).getUser();
        List<Loan> loans = loanService.forwardedLoans(user);
        return ResponseEntity.of(Optional.of(loans.stream().map(loan -> mapper.toModel(loan, LoanModel.class)).collect(Collectors.toList())));
    }

    @GetMapping("/received")
    public ResponseEntity<List<LoanModel>> receivedLoans(Authentication authentication) {
        User user = ((CustomUserDetails) authentication.getPrincipal()).getUser();
        List<Loan> loans = loanService.receivedLoans(user);
        return ResponseEntity.of(Optional.of(loans.stream().map(loan -> mapper.toModel(loan, LoanModel.class)).collect(Collectors.toList())));
    }

    @PostMapping
    public ResponseEntity<LoanModel> save(@RequestBody LoanModel loanModel, Authentication authentication) {
        Loan loan = mapper.toEntity(loanModel, Loan.class);
        if (loan.getId() != null) {
            if (loan.getStatus().equals("Forwarded")) {
                loan.setStagedAt(LocalDateTime.now());
                if (loan.getTypeChanged() != null && loan.getTypeChanged()) {
                    loan.setRole(roleService.find(loan.getDeferStage()));
                    loan.setTypeChanged(null);
                    loan.setDeferStage(null);
                }
            } else if (loan.getDeferStage() != null) {
                loan.setTypeChanged(typeChanged(loan, loanService.find(loan.getId())));
            }
        } else {
            loan.setRole(roleService.find(1));
        }
        loan.setUser(((CustomUserDetails) authentication.getPrincipal()).getUser());
        loan = loanService.save(loan);

        reportService.save(loan.toReport());
        if (loan.getStatus().equals("Forwarded")) {
            try {
                sendNotification(loan);
            } catch (UnirestException e) {
                e.printStackTrace();
            }
        }
        return ResponseEntity.of(Optional.of(mapper.toModel(loan, LoanModel.class)));
    }

    @GetMapping("/receive/{loanId}")
    public ResponseEntity<LoanModel> receiveLoan(@PathVariable("loanId") Integer loanId, Authentication authentication) {
        loanService.receiveLoan(loanService.find(loanId), userService.findUserByEmployeeId(authentication.getName()));
        return ResponseEntity.of(Optional.of(mapper.toModel(loanService.find(loanId), LoanModel.class)));
    }

    @GetMapping("/comprehensive/report")
    public ResponseEntity<List<ReportModel>> comprehensiveReport(
            @RequestParam("startDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate,
            @RequestParam("reportType") String reportType,
            @RequestParam(value = "entityId", required = false) Integer entityId,
            @RequestParam("itemsPerPage") Integer itemsPerPage,
            @RequestParam("page") Integer page
    ) {
        List<Report> reports = reportService.findAllSortByLoanId(toReportModel(startDate, endDate, reportType, entityId, itemsPerPage, page)).getContent();
        return ResponseEntity.of(Optional.of(reports.stream().map(report -> mapper.toModel(report, ReportModel.class)).collect(Collectors.toList())));
    }

    @GetMapping("/comprehensive/report/count")
    public ResponseEntity<Integer> comprehensiveReportCount(
            @RequestParam("startDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate,
            @RequestParam("reportType") String reportType,
            @RequestParam(value = "entityId", required = false) Integer entityId,
            @RequestParam("itemsPerPage") Integer itemsPerPage,
            @RequestParam("page") Integer page
    ) {
        return ResponseEntity.of(Optional.of(reportService.findAllSortByLoanIdCount(toReportModel(startDate, endDate, reportType, entityId, itemsPerPage, page))));
    }

    @GetMapping("/reports")
    public ResponseEntity<List<LoanModel>> loansReport(
            @RequestParam("startDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate,
            @RequestParam("reportType") String reportType,
            @RequestParam(value = "entityId", required = false) Integer entityId,
            @RequestParam("itemsPerPage") Integer itemsPerPage,
            @RequestParam("page") Integer page
    ) {
        List<Loan> loans = loanService.findLoans(toReportModel(startDate, endDate, reportType, entityId, itemsPerPage, page));
        return ResponseEntity.of(Optional.of(loans.stream().map(loan -> mapper.toModel(loan, LoanModel.class)).collect(Collectors.toList())));
    }

    @GetMapping("/reports/count")
    public ResponseEntity<Integer> loanReportsCount(
            @RequestParam("startDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate,
            @RequestParam("reportType") String reportType,
            @RequestParam(value = "entityId", required = false) Integer entityId,
            @RequestParam("itemsPerPage") Integer itemsPerPage,
            @RequestParam("page") Integer page
    ) {
        return ResponseEntity.of(Optional.of(loanService.findLoanReportsCount(toReportModel(startDate, endDate, reportType, entityId, itemsPerPage, page))));
    }

    @GetMapping("/main")
    public ResponseEntity<List<LoanModel>> mainPageLoans(@RequestParam(value = "itemsPerPage", required = false) Integer itemsPerPage, @RequestParam(value = "page", required = false) Integer page) {
        if (page == null) {
            page = UserServiceImpl.DEFAULT_PAGE;
        }
        if (itemsPerPage == null) {
            itemsPerPage = UserServiceImpl.DEFAULT_ITEMS_PER_PAGE;
        }

        return ResponseEntity.of(Optional.of(loanService.mainPageLoans(itemsPerPage, page).stream().map(loan -> mapper.toModel(loan, LoanModel.class)).collect(Collectors.toList())));
    }

    @GetMapping("/main/count")
    public ResponseEntity<Integer> mainPageLoansCount() {
        return ResponseEntity.of(Optional.of(loanService.mainPageLoansCount()));
    }

    private ReportFormModel toReportModel(LocalDate startDate, LocalDate endDate, String reportType, Integer entityId, Integer itemsPerPage, Integer page) {
        return new ReportFormModel(startDate, endDate, reportType, entityId, itemsPerPage, page);
    }

    private boolean typeChanged(Loan loan, Loan savedLoan) {
        return (!savedLoan.getType().equals(loan.getType()))
        || (savedLoan.getAmount() <= 3000000 && loan.getAmount() > 3000000)
        ||  (savedLoan.getAmount() > 3000000 && savedLoan.getAmount() <= 10000000 && (loan.getAmount() < 3000000 || loan.getAmount() > 10000000))
        || (savedLoan.getAmount() > 10000000 && loan.getAmount() <= 10000000);
    }

    private void sendNotification(Loan loan) throws UnirestException {
        List<User> users = userService.findByRoleIdAndBranchIds(loan.getRole().getId(), loan.getUser().getBranches().stream().map(Branch::getId).collect(Collectors.toList()));

        for (User user: users) {
            HttpResponse<JsonNode> request = Unirest.post("https://api.mailgun.net/v3/" + domain + "/messages")
                    .basicAuth("api", apiKey)
                    .queryString("from", "Loanlead Stat Solutions")
                    .queryString("to", user.getEmail())
                    .queryString("subject", "Loan forwarded")
                    .queryString("text", "Loan with id (" + loan.getId() + ") from customer " + loan.getCustomer().getName() + " was forwarded to your branch.")
                    .asJson();

            System.out.println(request.getStatus() + ": " + request.getStatusText());
        }
    }
}