package com.loanlead.auth;


import com.loanlead.auth.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface UserService {
    User findUserByEmployeeId(String employeeId);

    Page<User> findAll();
    Page<User> findAll(Integer page, Integer itemsPerPage);
    Integer findCount();

    Page<User> findNewAll();
    Page<User> findNewAll(Integer page, Integer itemsPerPage);
    Integer findNewCount();

    Integer approveUser(Integer id);

    User find(Integer id);
    User save(User user);
    User update(User user);
    void delete(User user);
    void deleteById(Integer id);
    void deleteAllByIds(Integer[] ids);

    void userLoggedIn(String username);
    void userLoggedOut(String username);

    Page<User> getOnlineUsers();
    Page<User> getOnlineUsers(Integer page, Integer itemsPerPage);

    boolean isEmployeeIdUnique(String employeeId);
    boolean isAlreadyLoggedIn(String s);
    boolean isUniquePhoneNumber(String phoneNumber);

    Page<User> findForwardedUsers();
    Page<User> findForwardedUsers(Integer page, Integer pageable);
    User findByFieldName(String fieldName, String value);
    List<User> findByRoleIdAndBranchIds(Integer roleId, List<Integer> branchIds);
}