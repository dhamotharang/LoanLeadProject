package com.loanlead.auth;

import com.loanlead.auth.entities.User;
import com.loanlead.models.PhoneNumber;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Set;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>, JpaSpecificationExecutor {
    @Modifying
    @Query("DELETE FROM User b WHERE b.id IN :ids")
    @Transactional
    void deleteUsersByIds(@Param("ids") Set<Integer> ids);

    @Query("SELECT u FROM User u WHERE u.employeeId = :employeeId")
    User findUserByEmployeeId(@Param("employeeId") String employeeId);

    @Query("SELECT u FROM User u WHERE u.employeeId = :employeeId AND u.status = 'online'")
    User findLoggedInUser(@Param("employeeId") String employeeId);

    @Modifying
    @Query("UPDATE User u SET u.statusChangeTimestamp = current_timestamp, u.status = :status WHERE u.employeeId = :employeeId")
    @Transactional
    void updateStatus(@Param("employeeId") String employeeId, @Param("status") String status);

    @Query("SELECT u FROM User u WHERE u.status = 'online'")
    Page<User> findOnlineUsers(Pageable pageable);

    @Query("SELECT u FROM User u WHERE u.phoneNumber.id IN (SELECT p.id FROM PhoneNumber p WHERE :phoneNumber IN (p.phoneNumber, p.optionalPhoneNumber))")
    User findUserByPhoneNumber(@Param("phoneNumber") String phoneNumber);

    @Query("SELECT DISTINCT u FROM User u, Loan l WHERE u.employeeId = l.user AND l.status = 'Forwarded'")
    Page<User> findForwardedUsers(Pageable pageable);

    @Query("SELECT u FROM User u WHERE u.newlyCreated = false")
    Page<User> findAll(Pageable pageable);

    @Query("SELECT COUNT(u) FROM User u WHERE u.newlyCreated = false ")
    Integer findCount();

    @Query("SELECT u FROM User u WHERE u.newlyCreated = true")
    Page<User> findNew(Pageable pageable);

    @Query("SELECT COUNT(u) FROM User u WHERE u.newlyCreated = true")
    Integer findNewCount();

    @Modifying
    @Query("UPDATE User u SET u.newlyCreated = false WHERE u.id = :id")
    @Transactional
    Integer approveUser(@Param("id") Integer id);

    @Query(nativeQuery = true, value = "SELECT * FROM users where id IN (SELECT user_id FROM users_roles WHERE role_id = :roleId) AND id IN (SELECT user_id FROM users_branches WHERE branch_id IN :branchIds)")
    List<User> findByRoleIdAndBranchIds(@Param("roleId") Integer roleId, @Param("branchIds") List<Integer> branchIds);
}
