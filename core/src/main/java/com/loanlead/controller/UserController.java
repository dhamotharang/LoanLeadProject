package com.loanlead.controller;

import com.loanlead.auth.CustomUserDetails;
import com.loanlead.auth.LoggedUsersMap;
import com.loanlead.auth.UserService;
import com.loanlead.auth.UserServiceImpl;
import com.loanlead.auth.entities.User;
import com.loanlead.models.Customer;
import com.loanlead.models.PhoneNumber;
import com.loanlead.models.ui.ModelEntityMapper;
import com.loanlead.models.ui.models.UserModel;
import com.loanlead.services.BranchService;
import com.loanlead.services.EntityService;
import com.loanlead.services.PhoneNumberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.File;
import java.io.IOException;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@RestController
@RequestMapping(ReportController.PREFIX + "/users")
public class UserController {
    private UserService userService;
    private PhoneNumberService phoneNumberService;
    private LoggedUsersMap loggedUsersMap;
    private ModelEntityMapper mapper;

    @Autowired
    public UserController(UserService userService, PhoneNumberService phoneNumberService, LoggedUsersMap loggedUsersMap, ModelEntityMapper mapper) {
        this.userService = userService;
        this.phoneNumberService = phoneNumberService;
        this.loggedUsersMap = loggedUsersMap;
        this.mapper = mapper;
    }

    @GetMapping
    public ResponseEntity<List<UserModel>> users(@RequestParam(value = "itemsPerPage", required = false) Integer itemsPerPage, @RequestParam(value = "page", required = false) Integer page) {
        if (itemsPerPage == null) {
            itemsPerPage = UserServiceImpl.DEFAULT_ITEMS_PER_PAGE;
        }

        if (page == null) {
            page = UserServiceImpl.DEFAULT_PAGE;
        }

        List<User> users = userService.findAll(page, itemsPerPage).toList();
        return ResponseEntity.of(Optional.of(users.stream().map(user -> mapper.toModel(user, UserModel.class)).collect(Collectors.toList())));
    }

    @GetMapping("/unique")
    public ResponseEntity<UserModel> isUnique(@RequestParam("fieldName") String name, @RequestParam("value") String value) {
        return ResponseEntity.of(Optional.ofNullable(mapper.toModel(userService.findByFieldName(name, value), UserModel.class)));
    }

    @GetMapping("/count")
    public ResponseEntity<Integer> usersCount() {
        return ResponseEntity.of(Optional.of(userService.findCount()));
    }

    @GetMapping("/new")
    public ResponseEntity<List<UserModel>> newUsers(@RequestParam(value = "itemsPerPage", required = false) Integer itemsPerPage, @RequestParam(value = "page", required = false) Integer page) {
        if (itemsPerPage == null) {
            itemsPerPage = UserServiceImpl.DEFAULT_ITEMS_PER_PAGE;
        }

        if (page == null) {
            page = UserServiceImpl.DEFAULT_PAGE;
        }

        List<User> newUsers = userService.findNewAll(page, itemsPerPage).toList();
        return ResponseEntity.of(Optional.of(newUsers.stream().map(user -> mapper.toModel(user, UserModel.class)).collect(Collectors.toList())));
    }

    @GetMapping("/new/count")
    public ResponseEntity<Integer> newUsersCount() {
        return ResponseEntity.of(Optional.of(userService.findNewCount()));
    }

    @GetMapping("/all")
    public ResponseEntity<List<UserModel>> findAll() {
        return users(Integer.MAX_VALUE, 0);
    }

    @PostMapping("/approve/{id}")
    public ResponseEntity<Integer> approveUser(@PathVariable Integer id) {
        return ResponseEntity.of(Optional.of(userService.approveUser(id)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserModel> findUser(@PathVariable Integer id) {
        return ResponseEntity.of(Optional.of(mapper.toModel(userService.find(id), UserModel.class)));
    }

    @GetMapping("/current_user")
    public ResponseEntity<UserModel> findCurrentUser(Authentication authentication) {
        return ResponseEntity.of(Optional.of(mapper.toModel(((CustomUserDetails) authentication.getPrincipal()).getUser(), UserModel.class)));
    }

    @PostMapping("/delete")
    public void delete(@RequestParam("ids") Integer[] ids) {
        userService.deleteAllByIds(ids);
    }

    @PostMapping
    public ResponseEntity<UserModel> save(@RequestParam(value = "file", required = false) MultipartFile file, @Valid @ModelAttribute UserModel userModel) throws IOException {
        User user = mapper.toEntity(userModel, User.class);
        if (file != null) {
            user.setPicturePath(saveImage(file));
        }
        user.setPhoneNumber(phoneNumberService.save(user.getPhoneNumber()));
        return ResponseEntity.of(Optional.of(mapper.toModel(userService.save(user), UserModel.class)));
    }

    @GetMapping("/forwarded")
    public ResponseEntity<List<UserModel>> getForwardedUsers() {
        List<User> users = userService.findForwardedUsers().toList();
        return ResponseEntity.of(Optional.of(users.stream().map(user -> mapper.toModel(user, UserModel.class)).collect(Collectors.toList())));
    }

    @GetMapping("/logged")
    public ResponseEntity<List<UserModel>> getLoggedInUsers() {
        Collection<User> users = loggedUsersMap.getUsers();
        return ResponseEntity.of(Optional.of(users.stream().map(user -> mapper.toModel(user, UserModel.class)).collect(Collectors.toList())));
    }

    public String saveImage(MultipartFile image) throws IOException {
        if (image.getContentType() != null && image.getContentType().contains("image")) {
            File imagesDirectory;
            if (!(imagesDirectory = new File("ui/images")).exists()) {
                imagesDirectory.mkdirs();
            }

            File destination = new File(imagesDirectory.getAbsolutePath() + "/" + image.getOriginalFilename());
            image.transferTo(destination);
            return "/images/" + image.getOriginalFilename();
        } else {
            return "/images/no_picture.png";
        }
    }
}
