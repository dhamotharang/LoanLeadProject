package com.loanlead.controller;

import com.loanlead.auth.UserService;
import com.loanlead.auth.UserServiceImpl;
import com.loanlead.auth.entities.User;
import com.loanlead.services.BranchService;
import com.loanlead.services.EntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;

@RestController
@RequestMapping(ReportController.PREFIX + "/users")
public class UserController {
    private UserService userService;
    private EntityService entityService;
    private BranchService branchService;
    private Environment environment;

    @Autowired
    public UserController(UserService userService, EntityService entityService, BranchService branchService, Environment environment) {
        this.userService = userService;
        this.branchService = branchService;
        this.entityService = entityService;
        this.environment = environment;
    }

    @GetMapping
    public ResponseEntity<List<User>> users(@RequestParam(value = "itemsPerPage", required = false) Integer itemsPerPage, @RequestParam(value = "page", required = false) Integer page) {
        if (itemsPerPage == null) {
            itemsPerPage = UserServiceImpl.DEFAULT_ITEMS_PER_PAGE;
        }

        if (page == null) {
            page = UserServiceImpl.DEFAULT_PAGE;
        }

        return ResponseEntity.of(Optional.of(userService.findAll(itemsPerPage, page).toList()));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<User> findUser(@PathVariable String userId) {
        return ResponseEntity.of(Optional.of(userService.find(userId)));
    }

    @GetMapping("/current_user")
    public ResponseEntity<User> findCurrentUser(Authentication authentication) {
        return ResponseEntity.of(Optional.of((User) authentication.getPrincipal()));
    }

    @PostMapping
    public ResponseEntity<User> save(@RequestParam("file") MultipartFile file, @RequestBody User user, HttpServletRequest request, Authentication authentication) throws IOException {
        if (file != null && file.getContentType() != null && file.getContentType().contains("image")) {
            file.transferTo(new File(environment.getProperty("loanlead.images.location") + "/" + file.getOriginalFilename()));

            user.setPicturePath("/images/" + file.getOriginalFilename());
        } else if (user.getPicturePath() == null) {
            user.setPicturePath("/images/no_picture.png");
        }

//        if (!userService.isEmployeeIdUnique(user.getEmployeeId()) && !userService.findUserByEmployeeId(user.getEmployeeId()).getId().equals(user.getId()) && !((UserPrincipal) authentication.getPrincipal()).getUser().getId().equals(user.getId())) {
//            bindingResult.rejectValue("employeeId", "form.isNotUnique","Field is not unique");
//        }

//        if (!Pattern.compile("^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])).{8,}").matcher(user.getPassword()).matches()) {
//            bindingResult.rejectValue("password", "form.doesNotMatchPattern", "Field doesn't matches pattern");
//        }
//
//        if (user.getId() != null && !user.getEmployeeId().equals("") && !userService.isEmployeeIdUnique(user.getEmployeeId()) && !userService.findUserByEmployeeId(user.getEmployeeId()).getId().equals(user.getId())) {
//            bindingResult.rejectValue("employeeId", "form.isNotUnique", "Field is not unique");
//        }

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

//        if (bindingResult.hasErrors()) {
//            model.addAttribute("user", user);
//            model.addAttribute("entities", entityService.findAll());
//            model.addAttribute("branches", branchService.findAll());
//
//            return "admin/user_form";
//        }

        if (user.getId() == null) {
            user.setStatus("offline");
            user.setNewlyCreated(true);
        }

//        if (user.getId() != null && user.getId().equals(((UserPrincipal) authentication.getPrincipal()).getUser().getId())) {
//            ((UserPrincipal) authentication.getPrincipal()).setUser(this.userService.save(user));
//        } else {
//            this.userService.save(user);
//        }

        return ResponseEntity.of(Optional.of(userService.save(user)));
    }

    @PostMapping("/edit_profile")
    public String editingProfile(@RequestParam("file") MultipartFile file, @Valid User user, BindingResult bindingResult, Model model, Authentication authentication) throws IOException {
        if (file != null && file.getContentType() != null && file.getContentType().contains("image")) {
            file.transferTo(new File(environment.getProperty("loanlead.images.location") + "/" + file.getOriginalFilename()));

            user.setPicturePath("/images/" + file.getOriginalFilename());
        } else if (user.getPicturePath() == null) {
            user.setPicturePath("/images/no_picture.png");
        }

//        if (!userService.isEmployeeIdUnique(user.getEmployeeId()) && !((UserPrincipal) authentication.getPrincipal()).getUser().getId().equals(user.getId())) {
//            bindingResult.rejectValue("employeeId", "form.isNotUnique","Field is not unique");
//        }

        if (!Pattern.compile("^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])).{8,}").matcher(user.getPassword()).matches()) {
            bindingResult.rejectValue("password", "form.doesNotMatchPattern", "Field doesn't matches pattern");
        }

        if (user.getEmployeeId().equals("") || (userService.findUserByEmployeeId(user.getEmployeeId()) != null && !userService.findUserByEmployeeId(user.getEmployeeId()).getId().equals(user.getId()) && !userService.isEmployeeIdUnique(user.getEmployeeId()))) {
            bindingResult.rejectValue("employeeId", "form.isEmpty", "Field is empty");
        }

        if (user.getFullName().equals("")) {
            bindingResult.rejectValue("fullName", "form.isEmpty", "Field is empty");
        }

        if (user.getEmail().equals("")) {
            bindingResult.rejectValue("email", "form.isEmpty", "Field is empty");
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

    @DeleteMapping
    public void deleteUsers(@RequestParam("userIds") String[] userIds) {
        userService.deleteAllByIds(userIds);
    }

    @GetMapping("/forwarded")
    public ResponseEntity<List<User>> getForwardedUsers() {
        return ResponseEntity.of(Optional.of(userService.findForwardedUsers().toList()));
    }

    @GetMapping("/logged_users")
    public ResponseEntity<List<User>> getLoggedInUsers(@RequestParam(value = "page", required = false) Integer page, @RequestParam(value = "itemsPerPage", required = false) Integer itemsPerPage) {
        if (page == null) {
            page = UserServiceImpl.DEFAULT_PAGE;
        }

        if (itemsPerPage == null) {
            itemsPerPage = UserServiceImpl.DEFAULT_ITEMS_PER_PAGE;
        }

        return ResponseEntity.of(Optional.of(userService.getOnlineUsers(page, itemsPerPage).toList()));
    }
}
