package com.loanlead.controller;

import com.loanlead.auth.AuthRole;
import com.loanlead.services.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

//TODO Remake everything
@Controller
public class MainController {
    @Autowired
    private LoanService loanService;

    @GetMapping("/home")
    public String home(Authentication authentication, Model model) {
//        if (authentication.getAuthorities().contains(AuthRole.ADMIN.name())) {
//            return "admin/home";
//        } else {
//            List<String> loanTypes = Arrays.asList(null, "rejected", "deferred", "approved", "disbursed", "running");
//
//            for (String loanType: loanTypes) {
//                String loansCountString = "loansCount";
//                String key = loanType != null ? loanType + StringUtils.capitalize(loansCountString) : loansCountString;
//                model.addAttribute(key, loanService.findLoansCount(StringUtils.capitalize(loanType)));
//            }
//
//            model.addAttribute("currentDateTime", LocalDateTime.now());
//
//            return "user/home";
//        }
        return null;
    }
}
