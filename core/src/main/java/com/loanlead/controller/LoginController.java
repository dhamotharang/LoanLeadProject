package com.loanlead.controller;

import com.loanlead.auth.RoleRepository;
import com.loanlead.auth.UserService;
import com.loanlead.auth.entities.Role;
import com.loanlead.auth.entities.User;
import com.loanlead.models.Branch;
import com.loanlead.models.ui.UserModel;
import com.loanlead.services.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashSet;
import java.util.Set;

@Controller
public class LoginController {

    private final RoleRepository roleRepository;
    private final BranchService branchService;
    private final UserService userService;

    private static final String LOGIN_HTML = "/login/login.html";

    @Autowired
    public LoginController(RoleRepository roleRepository, BranchService branchService, UserService userService) {
        this.roleRepository = roleRepository;
        this.branchService = branchService;
        this.userService = userService;
    }

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

    @GetMapping("/sign-up")
    public String signUpForm(Model model) {
        model.addAttribute("roles", roleRepository.findAll());
        model.addAttribute("branches", branchService.findAll());

        return "/sign-up/sign_up.html";
    }

    @PostMapping("/sign-up")
    public String signUp(@RequestBody UserModel userModel, Model model, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return signUpForm(model);
        }

        Set<Role> roles = new HashSet<>();
        for (String role: userModel.getRoles()) {
            roles.add(roleRepository.findByName(role));
        }

        Set<Branch> branches = new HashSet<>();
        for (String branch: userModel.getBranches()) {
            branches.add(branchService.find(branch));
        }

        User user = new User();
        user.setEmployeeId(userModel.getEmployeeId());
        user.setPassword(userModel.getPassword());
        user.setBranches(branches);
        user.setRoles(roles);
        user.setFullName(userModel.getFullName());
        user.setEmail(userModel.getEmail());
        return login();
    }
}
