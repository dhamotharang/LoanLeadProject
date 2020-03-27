package com.loanlead.controller;

import com.loanlead.services.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequestMapping(ReportController.PREFIX + "/main")
public class MainController {
    private LoanService loanService;

    @Autowired
    public MainController(LoanService loanService) {
        this.loanService = loanService;
    }

    @GetMapping("/count")
    public ResponseEntity<Map<String, Integer>> home() {
        List<String> loanTypes = Arrays.asList("Rejected", "Deferred", "Approved", "Disbursed", "Running");
        Map<String, Integer> result = new HashMap<>();
        for (String loanType: loanTypes) {
            result.put(StringUtils.uncapitalize((loanType == null ? ""  : loanType) + "LoansCount"), loanService.findLoansCount(loanType));
        }
        return ResponseEntity.of(Optional.of(result));
    }
}
