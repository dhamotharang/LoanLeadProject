package com.loanlead.repositories;

import com.loanlead.auth.entities.Role;
import com.loanlead.models.Branch;
import com.loanlead.models.Report;
import com.loanlead.models.Loan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Repository
public interface LoanRepository extends JpaRepository<Loan, Integer>, JpaSpecificationExecutor {
    @Query(nativeQuery = true, value = "SELECT * FROM loans AS l WHERE l.status <> 'Disbursed' AND l.created_at BETWEEN :minDate AND :maxDate")
    public Page<Loan> findRunningLoans(@Param("minDate") LocalDate minDate, @Param("maxDate") LocalDate maxDate, Pageable pageable);

    @Query(nativeQuery = true, value = "SELECT * FROM loans WHERE loans.customer_id = :customerId")
    public List<Loan> findLoansByCustomerId(@Param("customerId") Integer customerId);

    @Query(nativeQuery = true, value = "SELECT * FROM loans AS l WHERE l.status NOT IN ('Rejected', 'Disbursed') ORDER BY l.created_at ASC")
    public Page<Loan> mainPageLoans(Pageable pageable);

    @Query(nativeQuery = true, value = "SELECT COUNT(*) FROM loans AS l WHERE l.status NOT IN ('Rejected', 'Disbursed') ORDER BY l.created_at ASC")
    public Integer mainPageLoansCount();

    @Query(value = "SELECT * FROM loans AS l WHERE l.status = :status AND l.created_at BETWEEN :minDate AND :maxDate", nativeQuery = true)
    public Page<Loan> findLoans(@Param("status") String status, @Param("minDate") LocalDate minDate, @Param("maxDate") LocalDate maxDate, Pageable pageable);

    @Query(value = "SELECT COUNT(*) FROM loans AS l WHERE l.status = :status AND l.created_at BETWEEN :minDate AND :maxDate", nativeQuery = true)
    public Integer findLoansReportsCount(@Param("status") String status, @Param("minDate") LocalDate minDate, @Param("maxDate") LocalDate maxDate);

    @Query(nativeQuery = true, value = "SELECT * FROM loans AS l WHERE l.actioned_by = :entityId AND l.created_at BETWEEN :minDate AND :maxDate")
    public Page<Loan> findPendingByUserLoans(@Param("entityId") Integer entityId, @Param("minDate") LocalDate minDate, @Param("maxDate") LocalDate maxDate, Pageable pageable);

    @Query(nativeQuery = true, value = "SELECT COUNT(*) FROM loans AS l WHERE l.actioned_by = :entityId AND l.created_at BETWEEN :minDate AND :maxDate")
    public Integer findPendingByUserLoansCount(@Param("entityId") Integer entityId, @Param("minDate") LocalDate minDate, @Param("maxDate") LocalDate maxDate);

    @Query(nativeQuery = true, value = "SELECT * FROM loans AS l WHERE l.actioned_by IN (SELECT user_id FROM users_branches WHERE branch_id = :entityId) AND l.created_at BETWEEN :minDate AND :maxDate")
    public Page<Loan> findPendingByBranchLoans(@Param("entityId") Integer entityId, @Param("minDate") LocalDate minDate, @Param("maxDate") LocalDate maxDate, Pageable pageable);

    @Query(nativeQuery = true, value = "SELECT COUNT(*) FROM loans AS l WHERE l.actioned_by IN (SELECT user_id FROM users_branches WHERE branch_id = :entityId) AND l.created_at BETWEEN :minDate AND :maxDate")
    public Integer findPendingByBranchLoansCount(@Param("entityId") Integer entityId, @Param("minDate") LocalDate minDate, @Param("maxDate") LocalDate maxDate);

    @Query(nativeQuery = true, value = "SELECT * FROM loans AS l WHERE l.stage = :entityId AND l.created_at BETWEEN :minDate AND :maxDate")
    public Page<Loan> findPendingByMovementStageLoans(@Param("entityId") Integer entityId, @Param("minDate") LocalDate minDate, @Param("maxDate") LocalDate maxDate, Pageable pageable);

    @Query(nativeQuery = true, value = "SELECT COUNT(*) FROM loans AS l WHERE l.stage = :entityId AND l.created_at BETWEEN :minDate AND :maxDate")
    public Integer findPendingByMovementStageLoansCount(@Param("entityId") Integer entityId, @Param("minDate") LocalDate minDate, @Param("maxDate") LocalDate maxDate);

    @Query(nativeQuery = true, value = "SELECT * FROM loans as l WHERE l.stage IN :roles AND l.actioned_by IN (SELECT user_id FROM users_branches WHERE branch_id IN :branches) AND l.status IN ('Forwarded', 'Deferred')")
    public List<Loan> findForwardedLoansByStageAndBranch(@Param("roles") Set<Integer> roles, @Param("branches") Set<Integer> branches);

    @Query(nativeQuery = true, value = "SELECT * FROM loans as l WHERE l.stage IN :roles AND l.actioned_by IN (SELECT user_id FROM users_branches WHERE branch_id IN :branches) AND l.status NOT IN ('Forwarded', 'Rejected', 'Deferred', 'Disbursed') ORDER BY l.receive_timestamp DESC")
    public List<Loan> findReceivedLoansByStageAndBranch(@Param("roles") Set<Integer> roles, @Param("branches") Set<Integer> branches);

    @Modifying
    @Query("UPDATE Loan l SET l.user.id = :receivedBy, l.status = 'Received', l.receiveTimestamp = current_timestamp WHERE l.id = :id")
    @Transactional
    public void receiveLoan(@Param("id") Integer loanId, @Param("receivedBy") Integer receivedBy);

    @Query("SELECT COUNT(l) FROM Loan l WHERE l.status = :status")
    public Integer findLoansCount(@Param("status") String status);

    @Query("SELECT COUNT(l) FROM Loan l WHERE l.status <> 'Disbursed'")
    public Integer findRunningLoansCount();

    @Query(nativeQuery = true, value = "SELECT COUNT(*) FROM loans AS l WHERE l.status <> 'Disbursed' AND l.created_at BETWEEN :startDate AND :endDate")
    public Integer findRunningLoansCount(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);
}