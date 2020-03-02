package com.loanlead.auth;


import com.loanlead.auth.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface UserService {
    User findUserByEmployeeId(String employeeId);

    Page<User> findAll();
    Page<User> findAll(Integer page, Integer itemsPerPage);

    User find(String employeeId);
    User save(User user);
    User update(User user);
    void delete(User user);
    void deleteById(String id);
    void deleteAllByIds(String[] ids);

    void userLoggedIn(String username);
    void userLoggedOut(String username);

    Page<User> getOnlineUsers();
    Page<User> getOnlineUsers(Integer page, Integer itemsPerPage);

    boolean isEmployeeIdUnique(String employeeId);
    boolean isAlreadyLoggedIn(String s);
    boolean isUniquePhoneNumber(String phoneNumber);

    Page<User> findForwardedUsers();
    Page<User> findForwardedUsers(Integer page, Integer pageable);
}