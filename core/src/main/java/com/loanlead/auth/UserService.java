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

    Page<User> findNewAll(Integer page, Integer itemsPerPage);
    Integer findNewCount();

    User approveUser(User user);

    User find(Integer id);
    User save(User user);
    void delete(User user);
    void deleteAllByIds(Integer[] ids);

    void userLoggedIn(String username);
    void userLoggedOut(String username);

    Page<User> getOnlineUsers(Integer page, Integer itemsPerPage);

    Page<User> findForwardedUsers();
    Page<User> findForwardedUsers(Integer page, Integer pageable);
    User findByFieldName(String fieldName, String value);
    List<User> findByRoleIdAndBranchIds(Integer roleId, List<Integer> branchIds);

    User findUserByPhoneNumber(String phoneNumber);
    User findUserByOptionalPhoneNumber(String optionalPhoneNumber);
}