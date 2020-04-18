package com.loanlead.controller;

import com.loanlead.UrlAuthenticationSuccessHandler;
import com.loanlead.auth.CustomUserDetails;
import com.loanlead.auth.UserService;
import com.loanlead.auth.UserServiceImpl;
import com.loanlead.auth.entities.User;
import com.loanlead.models.ui.ModelEntityMapper;
import com.loanlead.models.ui.models.UserModel;
import com.loanlead.services.PhoneNumberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import javax.validation.Valid;
import java.io.File;
import java.io.IOException;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping(ReportController.PREFIX + "/users")
public class UserController {
    private UserService userService;
    private PhoneNumberService phoneNumberService;
    private ModelEntityMapper mapper;
    private UrlAuthenticationSuccessHandler authenticationSuccessHandler;

    @Autowired
    public UserController(UserService userService, PhoneNumberService phoneNumberService, ModelEntityMapper mapper, UrlAuthenticationSuccessHandler authenticationSuccessHandler) {
        this.userService = userService;
        this.phoneNumberService = phoneNumberService;
        this.mapper = mapper;
        this.authenticationSuccessHandler = authenticationSuccessHandler;
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
    public ResponseEntity<User> isUnique(@RequestParam("fieldName") String name, @RequestParam("value") String value) {
        User user;
        if (name.equals("phoneNumber")) {
            user = userService.findUserByPhoneNumber(value);
        } else if (name.equals("optionalPhoneNumber")) {
            user = userService.findUserByOptionalPhoneNumber(value);
        } else {
            user = userService.findByFieldName(name, value);
        }
        return ResponseEntity.of(Optional.ofNullable(user));
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

    @PostMapping("/approve")
    public ResponseEntity<UserModel> approveUser(@RequestBody UserModel userModel) {
        userService.approveUser(mapper.toEntity(userModel, User.class));
        return ResponseEntity.of(Optional.of(userModel));
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
    public ResponseEntity<UserModel> save(@RequestParam(value = "file", required = false) MultipartFile file, @Valid @ModelAttribute UserModel userModel, Authentication authentication) throws IOException {
        User user = mapper.toEntity(userModel, User.class);
        if (file != null) {
            user.setPicturePath(saveImage(file));
        }
        user.setPhoneNumber(phoneNumberService.save(user.getPhoneNumber()));

        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        user = userService.save(user);

        if (userDetails.getUser().getId().equals(user.getId())) {
            userDetails.setUser(user);
        }

        return ResponseEntity.of(Optional.of(mapper.toModel(user, UserModel.class)));
    }

    @GetMapping("/forwarded")
    public ResponseEntity<List<UserModel>> getForwardedUsers() {
        List<User> users = userService.findForwardedUsers().toList();
        return ResponseEntity.of(Optional.of(users.stream().map(user -> mapper.toModel(user, UserModel.class)).collect(Collectors.toList())));
    }

    @GetMapping("/logged")
    public ResponseEntity<List<UserModel>> getLoggedInUsers() {
        List<User> users = userService.getOnlineUsers(0, Integer.MAX_VALUE).getContent();
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

    @PostMapping("/logout/{employeeId}")
    public ResponseEntity<List<UserModel>> logoutUser(@PathVariable String employeeId) {
        userService.userLoggedOut(employeeId);

        if (authenticationSuccessHandler.getUserSessions().containsKey(employeeId)) {
            authenticationSuccessHandler.getUserSessions().get(employeeId).invalidate();
            authenticationSuccessHandler.getUserSessions().remove(employeeId);
            return ResponseEntity.of(Optional.of(userService.getOnlineUsers(0, Integer.MAX_VALUE).getContent().stream().map(user -> mapper.toModel(user, UserModel.class)).collect(Collectors.toList())));
        } else {
            throw new RuntimeException("This session is not open");
        }
    }
}
