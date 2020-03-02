package com.loanlead.auth;

import com.loanlead.auth.entities.Role;
import com.loanlead.auth.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserServiceImpl implements UserService {
    public static final Integer DEFAULT_PAGE = 1;
    public static final Integer DEFAULT_ITEMS_PER_PAGE = 20;

    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public Page<User> findAll() {
        return findAll(DEFAULT_PAGE, DEFAULT_ITEMS_PER_PAGE);
    }

    @Override
    public Page<User> findAll(Integer page, Integer itemsPerPage) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        return userRepository.findAll(pageable);
    }

    @Override
    public User find(String employeeId) {
        return this.userRepository.findById(employeeId).orElse(null);
    }

    @Override
    public User save(User user) {
        return this.userRepository.save(user);
    }

    @Override
    public User update(User user) {
        return this.userRepository.save(user);
    }

    @Override
    public void delete(User user) {
        this.userRepository.delete(user);
    }

    @Override
    public void deleteById(String id) {
        this.userRepository.deleteById(id);
    }

    @Override
    public void deleteAllByIds(String[] ids) {
        this.userRepository.deleteUsersByIds(Arrays.asList(ids));
    }

    @Override
    public void userLoggedIn(String username) {
        this.userRepository.updateStatus(username, UserStatus.ONLINE.value());
    }

    @Override
    public void userLoggedOut(String username) {
        this.userRepository.updateStatus(username, UserStatus.OFFLINE.value());
    }

    @Override
    public Page<User> getOnlineUsers() {
        return getOnlineUsers(DEFAULT_PAGE, DEFAULT_ITEMS_PER_PAGE);
    }

    @Override
    public Page<User> getOnlineUsers(Integer page, Integer itemsPerPage) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        return userRepository.findOnlineUsers(pageable);
    }

    @Override
    public boolean isEmployeeIdUnique(String employeeId) {
        return userRepository.findUserByEmployeeId(employeeId) == null;
    }

    @Override
    public User findUserByEmployeeId(String employeeId) {
        return userRepository.findUserByEmployeeId(employeeId);
    }

    @Override
    public boolean isAlreadyLoggedIn(String s) {
        return userRepository.findLoggedInUser(s) != null;
    }

    @Override
    public boolean isUniquePhoneNumber(String phoneNumber) {
        return userRepository.findUserByPhoneNumber(phoneNumber) == null;
    }

    @Override
    public Page<User> findForwardedUsers() {
        return findForwardedUsers(DEFAULT_PAGE, DEFAULT_ITEMS_PER_PAGE);
    }

    @Override
    public Page<User> findForwardedUsers(Integer page, Integer itemsPerPage) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        return userRepository.findForwardedUsers(pageable);
    }

}
