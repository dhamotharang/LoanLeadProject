package com.loanlead.controller;

import org.springframework.context.annotation.Profile;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class LoginController {

    private static final String LOGIN_HTML = "/login/login.html";

    @GetMapping("/login")
    public String login() {
        return "redirect:/login/";
    }

    @GetMapping("/login/")
    public String loginWithBase() {
        return LOGIN_HTML;
    }

    @PostMapping("/perform_login")
    public String submit() {
        return LOGIN_HTML;
    }

    @GetMapping("/login/logout")
    public String logoutPage(Model model, HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        model.addAttribute("logout", true);
        return LOGIN_HTML;
    }

    @GetMapping("/login/error")
    public String login(Model model) {
        model.addAttribute("loginError", true);
        return LOGIN_HTML;
    }
}
