package com.loanlead.controller;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.loanlead.auth.UserService;
import com.loanlead.auth.UserServiceImpl;
import com.loanlead.models.Loan;
import com.loanlead.models.LoanProduct;
import com.loanlead.services.CustomerService;
import com.loanlead.services.LoanProductService;
import com.loanlead.services.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public Loan postLoan(@Valid Loan loan, BindingResult bindingResult, Authentication authentication) {
        LoanProduct loanProduct = loanProductService.find(loan.getLoanProduct().getId());

        if (loanProduct.getMaxAmount() < loan.getAmount()) {
            bindingResult.rejectValue("amount", "form.isBiggerThanCanBe","Field is bigger than it can be");
        }

        if (loanProduct.getMaxAmount() < loan.getTenure()) {
            bindingResult.rejectValue("tenure", "form.isBiggerThanCanBe","Field is bigger than it can be");
        }

        loan.setUser(userService.findUserByEmployeeId(authentication.getName()));
        return loanService.save(loan);
    }

    @PostMapping("/forward")
    public Loan forwardLoan(@RequestParam("loanId") Integer loanId, @RequestParam("comment") String comment, Authentication authentication) {
        loanService.forwardLoanById(loanService.find(loanId), comment, userService.findUserByEmployeeId(authentication.getName()));
        return loanService.find(loanId);
    }

    @PostMapping("/{action}/{loanId}")
    public Loan approveLoan(@PathVariable("action") String action,
                              @PathVariable("loanId") Integer loanId,
                              @RequestParam(value = "comment", required = false) String comment,
                              Authentication authentication)
    {
        if (comment == null) {
            comment = "Loan " + this.mapActionStatuses.get(action);
        }

        loanService.updateStatus(loanService.find(loanId), this.mapActionStatuses.get(action), userService.findUserByEmployeeId(authentication.getName()), comment);
        return loanService.find(loanId);
    }

    @PostMapping("/defer")
    public Loan postDeferLoan(@RequestParam("loanId") Integer loanId, @RequestParam("stage") Integer nextStage, @RequestParam("comment") String comment, Authentication authentication) {
        loanService.deferLoan(loanService.find(loanId), nextStage, userService.findUserByEmployeeId(authentication.getName()), comment);
        return loanService.find(loanId);
    }

    @GetMapping("/receive/{loanId}")
    public Loan receiveLoan(@PathVariable("loanId") Integer loanId, Authentication authentication) {
        loanService.receiveLoan(loanService.find(loanId), userService.findUserByEmployeeId(authentication.getName()));
        return loanService.find(loanId);
    }

    @GetMapping("/api/loans/{type}")
    @ResponseBody
    public List<Loan> loansReport(
            @PathVariable("type") String type,
            @RequestParam(name = "minDate") LocalDateTime startDate,
            @RequestParam(name = "maxDate") LocalDateTime endDate,
            @RequestParam(name = "entityId") Integer entityId,
            @RequestParam(name = "itemsPerPage") Integer itemsPerPage,
            @RequestParam(name = "page") Integer page)
    {
        if (startDate == null) {
            startDate = LoanService.MIN_DATE;
        }

        if (endDate == null) {
            endDate = LoanService.MAX_DATE;
        }

        if (itemsPerPage == null) {
            itemsPerPage = UserServiceImpl.DEFAULT_ITEMS_PER_PAGE;
        }

        if (page == null) {
            page = UserServiceImpl.DEFAULT_PAGE;
        }

        if (entityId == null) {
            return loanService.findLoans(type, startDate, endDate, itemsPerPage, page);
        } else {
            return loanService.findLoans(type, entityId, startDate, endDate, itemsPerPage, page);
        }
    }

    @GetMapping("/api/customer/{customerId}/loans")
    @ResponseBody
    public List<Loan> customersLoans(@PathVariable("customerId") Integer customerId) {
        return loanService.findLoansByCustomerId(customerId);
    }

    @GetMapping("/api/main/loans")
    @ResponseBody
    public List<Loan> mainPageLoans() {
        return loanService.mainPageLoans();
    }
}