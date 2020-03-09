package com.loanlead.controller;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.loanlead.auth.UserService;
import com.loanlead.auth.UserServiceImpl;
import com.loanlead.models.Loan;
import com.loanlead.models.LoanProduct;
import com.loanlead.models.ui.ReportModel;
import com.loanlead.services.CustomerService;
import com.loanlead.services.LoanProductService;
import com.loanlead.services.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping(ReportController.PREFIX + "/loans")
public class LoanController {
    private LoanService loanService;
    private LoanProductService loanProductService;
    private CustomerService customerService;
    private UserService userService;
    private Map<String, String> mapActionStatuses;

    @PostConstruct
    public void init() {
        this.mapActionStatuses = new HashMap<>();
        this.mapActionStatuses.put("reject", "Rejected");
        this.mapActionStatuses.put("forward", "Forwarded");
        this.mapActionStatuses.put("receive", "Received");
        this.mapActionStatuses.put("approve", "Approved");
        this.mapActionStatuses.put("disburse", "Disbursed");
        this.mapActionStatuses.put("defer", "Deferred");
    }

    @Autowired
    public void setLoanService(LoanService loanService) {
        this.loanService = loanService;
    }

    @Autowired
    public void setLoanProductService(LoanProductService loanProductService) {
        this.loanProductService = loanProductService;
    }

    @Autowired
    public void setCustomerService(CustomerService customerService) {
        this.customerService = customerService;
    }

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<Loan> postLoan(@RequestBody Loan loan, Authentication authentication) {
        LoanProduct loanProduct = loanProductService.find(loan.getLoanProduct().getId());

//        if (loanProduct.getMaxAmount() < loan.getAmount()) {
//            bindingResult.rejectValue("amount", "form.isBiggerThanCanBe","Field is bigger than it can be");
//        }
//
//        if (loanProduct.getMaxAmount() < loan.getTenure()) {
//            bindingResult.rejectValue("tenure", "form.isBiggerThanCanBe","Field is bigger than it can be");
//        }

        loan.setUser(userService.findUserByEmployeeId(authentication.getName()));
        return ResponseEntity.of(Optional.of(loanService.save(loan)));
    }

    @PostMapping("/forward")
    public ResponseEntity<Loan> forwardLoan(@RequestParam("loanId") Integer loanId, @RequestParam("comment") String comment, Authentication authentication) {
        loanService.forwardLoanById(loanService.find(loanId), comment, userService.findUserByEmployeeId(authentication.getName()));
        return ResponseEntity.of(Optional.of(loanService.find(loanId)));
    }

    @PostMapping("/{action}/{loanId}")
    public ResponseEntity<Loan> approveLoan(@PathVariable("action") String action,
                              @PathVariable("loanId") Integer loanId,
                              @RequestParam(value = "comment") String comment,
                              Authentication authentication)
    {
        if (comment == null) {
            comment = "Loan " + this.mapActionStatuses.get(action);
        }

        loanService.updateStatus(loanService.find(loanId), this.mapActionStatuses.get(action), userService.findUserByEmployeeId(authentication.getName()), comment);
        return ResponseEntity.of(Optional.of(loanService.find(loanId)));
    }

    @PostMapping("/defer")
    public ResponseEntity<Loan> postDeferLoan(@RequestParam("loanId") Integer loanId, @RequestParam("stage") Integer nextStage, @RequestParam("comment") String comment, Authentication authentication) {
        loanService.deferLoan(loanService.find(loanId), nextStage, userService.findUserByEmployeeId(authentication.getName()), comment);
        return ResponseEntity.of(Optional.of(loanService.find(loanId)));
    }

    @GetMapping("/receive/{loanId}")
    public ResponseEntity<Loan> receiveLoan(@PathVariable("loanId") Integer loanId, Authentication authentication) {
        loanService.receiveLoan(loanService.find(loanId), userService.findUserByEmployeeId(authentication.getName()));
        return ResponseEntity.of(Optional.of(loanService.find(loanId)));
    }

    @GetMapping("/api/loans/{type}")
    public ResponseEntity<List<Loan>> loansReport(
            @PathVariable("type") String type,
            @RequestBody ReportModel reportModel)
    {
        reportModel
                .setDefaultStartDate(LoanService.MIN_DATE)
                .setDefaultEndDate(LoanService.MAX_DATE)
                .setDefaultItemsPerPage(UserServiceImpl.DEFAULT_ITEMS_PER_PAGE)
                .setDefaultPage(UserServiceImpl.DEFAULT_PAGE);

        if (reportModel.getEntityId() == null) {
            return ResponseEntity.of(Optional.of(loanService.findLoans(type, reportModel.getStartDate(), reportModel.getEndDate(), reportModel.getItemsPerPage(), reportModel.getPage())));
        } else {
            return ResponseEntity.of(Optional.of(loanService.findLoans(type, reportModel.getEntityId(), reportModel.getStartDate(), reportModel.getEndDate(), reportModel.getItemsPerPage(), reportModel.getPage())));
        }
    }

    @GetMapping("/main")
    public ResponseEntity<List<Loan>> mainPageLoans() {
        return ResponseEntity.of(Optional.of(loanService.mainPageLoans()));
    }
}