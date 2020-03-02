package com.loanlead.auth;

import com.loanlead.auth.entities.User;
import com.loanlead.models.PhoneNumber;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Repository
public interface UserRepository extends PagingAndSortingRepository<User, String> {
    @Modifying
    @Query("DELETE FROM User b WHERE b.id IN :ids")
    @Transactional
    void deleteUsersByIds(@Param("ids") List<String> ids);

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

    @Query("SELECT u FROM User u, PhoneNumber p WHERE u.phoneNumber.id = p.id AND :phoneNumber IN (p.firstPhoneNumber, p.secondPhoneNumber)")
    User findUserByPhoneNumber(@Param("phoneNumber") String phoneNumber);

    @Query("SELECT DISTINCT u FROM User u, Loan l WHERE u.employeeId = l.user AND l.status = 'Forwarded'")
    Page<User> findForwardedUsers(Pageable pageable);
}
