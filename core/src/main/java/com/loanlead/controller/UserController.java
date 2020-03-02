package com.loanlead.controller;

import com.loanlead.auth.UserService;
import com.loanlead.auth.entities.User;
import com.loanlead.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.data.domain.Page;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.Validator;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.regex.Pattern;

@Controller
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private EntityService entityService;

    @Autowired
    private BranchService branchService;

    @Autowired
    private LoanService loanService;

    @Autowired
    private Validator validator;

    @Autowired
    private Environment environment;

    @ModelAttribute("users")
    public Page<User> populateEntities() {
        return this.userService.findAll();
    }

    @GetMapping("/users")
    public String users(Model model) {
        model.addAttribute("users", userService.findAll());

        return "admin/users";
    }

    @GetMapping("/edit_profile/{userId}")
    public String editProfileForm(@PathVariable String userId, Model model) {
        User userToEdit = this.userService.find(userId);
        model.addAttribute("user", userToEdit);
        model.addAttribute("entities", entityService.findAll());
        model.addAttribute("branches", branchService.findAll());

        return "admin/edit_profile";
    }

    @GetMapping("/user_form")
    public String userFormCreate(Model model, Authentication authentication, HttpServletRequest request) {
        if (request.isUserInRole("ROLE_ADMIN")) {
            model.addAttribute("user", new User());
            model.addAttribute("entities", entityService.findAll());
            model.addAttribute("branches", branchService.findAll());

            return "admin/user_form";
        } else {
            //model.addAttribute("user", ((UserPrincipal)authentication.getPrincipal()).getUser());

            return "user/update_profile";
        }
    }

    @GetMapping("/user_form/{userId}")
    public String userForm(@PathVariable String userId, Model model) {
        User userToEdit = this.userService.find(userId);
        model.addAttribute("user", userToEdit);
        model.addAttribute("entities", entityService.findAll());
        model.addAttribute("branches", branchService.findAll());

        return "admin/user_form";
    }

    @GetMapping("/user")
    public String findUser(@RequestParam("userId") String userId, Model model) {
        if (userId != null) {
            User user = userService.find(userId);

            if (user != null) {
                model.addAttribute("users", Collections.singletonList(user));
            } else {
                model.addAttribute("users", new ArrayList<User>());
            }
        } else {
            model.addAttribute("users", userService.findAll());
        }

        return "admin/users";
    }

    @PostMapping("/user")
    public String postingUser(@RequestParam("file") MultipartFile file, @Valid User user, BindingResult bindingResult, Model model, HttpServletRequest request, Authentication authentication) throws IOException {
        if (file != null && file.getContentType() != null && file.getContentType().contains("image")) {
            file.transferTo(new File(environment.getProperty("loanlead.images.location") + "/" + file.getOriginalFilename()));

            user.setPicturePath("/images/" + file.getOriginalFilename());
        } else if (user.getPicturePath() == null){
            user.setPicturePath("/images/no_picture.png");
        }

//        if (!userService.isEmployeeIdUnique(user.getEmployeeId()) && !userService.findUserByEmployeeId(user.getEmployeeId()).getId().equals(user.getId()) && !((UserPrincipal) authentication.getPrincipal()).getUser().getId().equals(user.getId())) {
//            bindingResult.rejectValue("employeeId", "form.isNotUnique","Field is not unique");
//        }

        if (!Pattern.compile("^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])).{8,}").matcher(user.getPassword()).matches()) {
            bindingResult.rejectValue("password", "form.doesNotMatchPattern","Field doesn't matches pattern");
        }

        if (user.getId() != null && !user.getEmployeeId().equals("") && !userService.isEmployeeIdUnique(user.getEmployeeId()) && !userService.findUserByEmployeeId(user.getEmployeeId()).getId().equals(user.getId())) {
            bindingResult.rejectValue("employeeId", "form.isNotUnique","Field is not unique");
        }

//        if (!user.getPhoneNumber1().equals("")) {
//            if (!Pattern.compile("07[0-9]{8}").matcher(user.getPhoneNumber1()).matches()) {
//                bindingResult.rejectValue("phoneNumber1", "form.doesNotMatchPattern", "Field does not match pattern");
//            } else if ((!phoneNumberService.isUnique(user.getPhoneNumber1()) && (user.getId() != null && userService.findUserByPhoneNumber1(user.getPhoneNumber1()) != null && !userService.findUserByPhoneNumber1(user.getPhoneNumber1()).getId().equals(user.getId())))) {
//                bindingResult.rejectValue("phoneNumber1", "form.isNotUnique", "Field is not unique");
//            }
//        }
//
//        if (!user.getPhoneNumber2().equals("")) {
//            if (!Pattern.compile("07[0-9]{8}").matcher(user.getPhoneNumber2()).matches()) {
//                bindingResult.rejectValue("phoneNumber2", "form.doesNotMatchPattern", "Field does not match pattern");
//            } else if (((!phoneNumberService.isUnique(user.getPhoneNumber2()) || user.getPhoneNumber1().equals(user.getPhoneNumber2())) && (user.getId() != null && userService.findUserByPhoneNumber2(user.getPhoneNumber2()) != null && !userService.findUserByPhoneNumber2(user.getPhoneNumber2()).getId().equals(user.getId())))) {
//                bindingResult.rejectValue("phoneNumber2", "form.isNotUnique","Field is not unique");
//            }
//        }

        if (bindingResult.hasErrors()) {
            model.addAttribute("user", user);
            model.addAttribute("entities", entityService.findAll());
            model.addAttribute("branches", branchService.findAll());

            return "admin/user_form";
        }

        if (user.getId() == null) {
            user.setStatus("offline");
            user.setNewlyCreated(true);
        }

//        if (user.getId() != null && user.getId().equals(((UserPrincipal) authentication.getPrincipal()).getUser().getId())) {
//            ((UserPrincipal) authentication.getPrincipal()).setUser(this.userService.save(user));
//        } else {
//            this.userService.save(user);
//        }

        model.addAttribute("users", userService.findAll());

        return "admin/users";
    }

    @PostMapping("/edit_profile")
    public String editingProfile(@RequestParam("file") MultipartFile file, @Valid User user, BindingResult bindingResult, Model model, Authentication authentication) throws IOException {
        if (file != null && file.getContentType() != null && file.getContentType().contains("image")) {
            file.transferTo(new File(environment.getProperty("loanlead.images.location") + "/" + file.getOriginalFilename()));

            user.setPicturePath("/images/" + file.getOriginalFilename());
        } else if (user.getPicturePath() == null){
            user.setPicturePath("/images/no_picture.png");
        }

//        if (!userService.isEmployeeIdUnique(user.getEmployeeId()) && !((UserPrincipal) authentication.getPrincipal()).getUser().getId().equals(user.getId())) {
//            bindingResult.rejectValue("employeeId", "form.isNotUnique","Field is not unique");
//        }

        if (!Pattern.compile("^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])).{8,}").matcher(user.getPassword()).matches()) {
            bindingResult.rejectValue("password", "form.doesNotMatchPattern","Field doesn't matches pattern");
        }

        if (user.getEmployeeId().equals("") || (userService.findUserByEmployeeId(user.getEmployeeId()) != null && !userService.findUserByEmployeeId(user.getEmployeeId()).getId().equals(user.getId()) && !userService.isEmployeeIdUnique(user.getEmployeeId()))) {
            bindingResult.rejectValue("employeeId", "form.isEmpty","Field is empty");
        }

        if (user.getFullName().equals("")) {
            bindingResult.rejectValue("fullName", "form.isEmpty","Field is empty");
        }

        if (user.getEmail().equals("")) {
            bindingResult.rejectValue("email", "form.isEmpty","Field is empty");
        }

//        if (!Pattern.compile("07[0-9]{8}").matcher(user.getPhoneNumber1()).matches()) {
//            bindingResult.rejectValue("phoneNumber1", "form.doesNotMatchPattern", "Field does not match pattern");
//        } else if ((!phoneNumberService.isUnique(user.getPhoneNumber1()) && userService.findUserByPhoneNumber1(user.getPhoneNumber1()) != null && !userService.findUserByPhoneNumber1(user.getPhoneNumber1()).getId().equals(user.getId()))) {
//            bindingResult.rejectValue("phoneNumber1", "form.isNotUnique","Field is not unique");
//        }
//
//        if (!Pattern.compile("07[0-9]{8}").matcher(user.getPhoneNumber2()).matches()) {
//            bindingResult.rejectValue("phoneNumber2", "form.doesNotMatchPattern", "Field does not match pattern");
//        } else if ((!phoneNumberService.isUnique(user.getPhoneNumber2()) && userService.findUserByPhoneNumber2(user.getPhoneNumber2()) != null && !userService.findUserByPhoneNumber2(user.getPhoneNumber2()).getId().equals(user.getId())) || user.getPhoneNumber1().equals(user.getPhoneNumber2())) {
//            bindingResult.rejectValue("phoneNumber2", "form.isNotUnique","Field is not unique");
//        }

        User currentlySavedUser = userService.find(user.getEmployeeId());

        if (currentlySavedUser.isNewlyCreated() && currentlySavedUser.getPassword().equals(user.getPassword())) {
            bindingResult.rejectValue("password", "form.changeFieldRequirement", "Please, change data in this field");
        }

        if (currentlySavedUser.isNewlyCreated() && currentlySavedUser.getFullName().equals(user.getFullName())) {
            bindingResult.rejectValue("fullName", "form.changeFieldRequirement", "Please, change data in this field");
        }

        if (currentlySavedUser.isNewlyCreated() && currentlySavedUser.getEmployeeId().equals(user.getEmployeeId())) {
            bindingResult.rejectValue("employeeId", "form.changeFieldRequirement", "Please, change data in this field");
        }
//
//        if (currentlySavedUser.isNewlyCreated() && currentlySavedUser.getPhoneNumber1().equals(user.getPhoneNumber1())) {
//            bindingResult.rejectValue("phoneNumber1", "form.changeFieldRequirement", "Please, change data in this field");
//        }
//
//        if (currentlySavedUser.isNewlyCreated() && currentlySavedUser.getPhoneNumber2().equals(user.getPhoneNumber2())) {
//            bindingResult.rejectValue("phoneNumber2", "form.changeFieldRequirement", "Please, change data in this field");
//        }

        if (bindingResult.hasErrors()) {
            model.addAttribute("user", user);

            return "admin/edit_profile";
        }

        user.setNewlyCreated(false);

//        if (user.getId() != null && user.getId().equals(((UserPrincipal) authentication.getPrincipal()).getUser().getId())) {
//            this.userService.save(user);
//            ((UserPrincipal) authentication.getPrincipal()).setUser(this.userService.find(user.getId()));
//        } else {
//            this.userService.save(user);
//        }

        return "redirect:/home";
    }

    @PostMapping("/deleteUsers")
    public String deleteUsers(@RequestParam("deleteUserId") Integer[] userIds, Model model) {
//        if (userIds.length > 1) {
//            this.userService.deleteAllByIds(userIds);
//        } else {
//            this.userService.deleteById(userIds[0]);
//        }

        model.addAttribute("users", this.userService.findAll());

        return "admin/users";
    }

    @GetMapping("/api/users")
    @ResponseBody
    public Page<User> getUsers() {
        return userService.findAll();
    }

    @GetMapping("/api/users/forwarded")
    @ResponseBody
    public Page<User> getForwardedUsers() {
        return userService.findForwardedUsers();
    }
}
