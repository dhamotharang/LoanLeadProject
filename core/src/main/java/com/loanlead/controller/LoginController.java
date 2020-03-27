package com.loanlead.controller;

import com.loanlead.auth.ResourceLoader;
import com.loanlead.auth.RoleService;
import com.loanlead.auth.UserService;
import com.loanlead.auth.UserStatus;
import com.loanlead.auth.entities.Role;
import com.loanlead.auth.entities.User;
import com.loanlead.models.Branch;
import com.loanlead.models.ui.ModelEntityMapper;
import com.loanlead.models.ui.models.UserModel;
import com.loanlead.services.BranchService;
import com.loanlead.services.PhoneNumberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.File;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

@Controller
public class LoginController {
    private ModelEntityMapper mapper;
    private final RoleService roleService;
    private final BranchService branchService;
    private final PhoneNumberService phoneNumberService;
    private final UserService userService;
    private Environment environment;

    private static final String LOGIN_HTML = "/login/login.html";
    private static final String SIGNUP_HTML = "/sign-up/sign_up.html";

    @Autowired
    public LoginController(RoleService roleService, BranchService branchService, UserService userService, ModelEntityMapper mapper, PhoneNumberService phoneNumberService, Environment environment) {
        this.roleService = roleService;
        this.branchService = branchService;
        this.userService = userService;
        this.mapper = mapper;
        this.phoneNumberService = phoneNumberService;
        this.environment = environment;
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
        model.addAttribute("user", new UserModel());
        model.addAttribute("roles", roleService.findAll());
        model.addAttribute("branches", branchService.findAll());
        return SIGNUP_HTML;
    }

    @PostMapping("/sign-up")
    public String signUp(@RequestParam(value = "file", required = false) MultipartFile file, @Valid @ModelAttribute("user") UserModel userModel, BindingResult bindingResult, Model model) throws IOException {
        User user = mapper.toEntity(userModel, User.class);
        if (userService.findUserByEmployeeId(user.getEmployeeId()) != null) {
            bindingResult.rejectValue("employeeId", "unique.message", "Field is not unique");
        }

        if (bindingResult.hasErrors() | !phoneNumberService.isUnique(user.getPhoneNumber(), bindingResult)) {
            model.addAttribute("user", userModel);
            model.addAttribute("roles", roleService.findAll());
            model.addAttribute("branches", branchService.findAll());
            return SIGNUP_HTML;
        }

        user.setPhoneNumber(phoneNumberService.save(user.getPhoneNumber()));
        user.setStatus(UserStatus.OFFLINE.value());
        user.setNewlyCreated(true);

        if (file != null && file.getContentType() != null && file.getContentType().contains("image")) {
            File imagesDirectory;
            if (!(imagesDirectory = new File("ui/images")).exists()) {
                imagesDirectory.mkdirs();
            }

            File destination = new File(imagesDirectory.getAbsolutePath() + "/" + file.getOriginalFilename());
            file.transferTo(destination);
            user.setPicturePath("/images/" + file.getOriginalFilename());
        } else if (user.getPicturePath() == null){
            user.setPicturePath("/images/no_picture.png");
        }

        userService.save(user);
        return loginWithBase();
    }
}
