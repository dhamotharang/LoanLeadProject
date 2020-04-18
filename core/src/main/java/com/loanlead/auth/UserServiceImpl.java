package com.loanlead.auth;

import com.loanlead.auth.entities.Role;
import com.loanlead.auth.entities.User;
import com.loanlead.models.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.*;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {
    public static final Integer DEFAULT_PAGE = 0;
    public static final Integer DEFAULT_ITEMS_PER_PAGE = 20;

    private UserRepository userRepository;
    private RoleService roleService;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, RoleService roleService, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.roleService = roleService;
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
    public Integer findCount() {
        return userRepository.findCount();
    }

    @Override
    public Page<User> findNewAll(Integer page, Integer itemsPerPage) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        return userRepository.findNew(pageable);
    }

    @Override
    public Integer findNewCount() {
        return userRepository.findNewCount();
    }

    @Override
    public User approveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User find(Integer id) {
        return this.userRepository.findById(id).orElse(null);
    }

    @Override
    public User save(User user) {
        return this.userRepository.save(user);
    }

    @Override
    public void delete(User user) {
        this.userRepository.delete(user);
    }

    @Override
    public void deleteAllByIds(Integer[] ids) {
        this.userRepository.deleteUsersByIds(new HashSet<>(Arrays.asList(ids)));
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
    public Page<User> getOnlineUsers(Integer page, Integer itemsPerPage) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        return userRepository.findOnlineUsers(pageable);
    }

    @Override
    public User findUserByEmployeeId(String employeeId) {
        return userRepository.findUserByEmployeeId(employeeId);
    }

    public User findByFieldName(String name, String value) {return (User) userRepository.findOne(byColumnNameAndValue(name, value)).orElse(null); }

    @Override
    public List<User> findByRoleIdAndBranchIds(Integer roleId, List<Integer> branchIds) {
        return userRepository.findByRoleIdAndBranchIds(roleId, branchIds);
    }

    @Override
    public User findUserByPhoneNumber(String phoneNumber) {
        return userRepository.findUserByPhoneNumber(phoneNumber);
    }

    @Override
    public User findUserByOptionalPhoneNumber(String optionalPhoneNumber) {
        if (optionalPhoneNumber == null || optionalPhoneNumber.equals("")) {
            return null;
        }
        return userRepository.findUserByPhoneNumber(optionalPhoneNumber);
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

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User user = userRepository.findUserByEmployeeId(s);
        if (user != null && user.getStatus().equals(UserStatus.OFFLINE.value()) && !user.isNewlyCreated()) {
            return new CustomUserDetails(user);
        } else {
            throw new UsernameNotFoundException("Specified user was not found");
        }
    }

    private static Specification<User> byColumnNameAndValue(String columnName, String value) {
        return (Root<User> root, CriteriaQuery<?> query, CriteriaBuilder builder) -> builder.equal(root.<String>get(columnName), value);
    }
}
