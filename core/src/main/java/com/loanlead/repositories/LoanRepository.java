package com.loanlead.repositories;

import com.loanlead.auth.entities.Role;
import com.loanlead.models.Branch;
import com.loanlead.models.Report;
import com.loanlead.models.Loan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.Set;

@Repository
public interface LoanRepository extends PagingAndSortingRepository<Loan, Integer> {
    @Query("SELECT l FROM Loan l WHERE l.createdAt BETWEEN :minDate AND :maxDate AND l.status NOT IN ('Disbursed', 'Rejected')")
    public Page<Loan> findInTimeRange(@Param("minDate") LocalDateTime minDate, @Param("maxDate") LocalDateTime maxDate, Pageable pageable);

    @Query("SELECT l FROM Loan l WHERE l.role.id < 12 AND l.createdAt BETWEEN :minDate AND :maxDate")
    public Page<Loan> findRunningLoans(@Param("minDate") LocalDateTime minDate, @Param("maxDate") LocalDateTime maxDate, Pageable pageable);

    @Query("SELECT l FROM Loan l WHERE l.customer = :customerId")
    public Page<Loan> findLoansByCustomerId(@Param("customerId") Integer customerId, Pageable pageable);

    @Query("SELECT a FROM Report a, Loan l WHERE l.id = a.loan.id AND l.createdAt BETWEEN :minDate AND :maxDate ORDER BY a.loan, a.createdAt")
    public Page<Report> findComprehensiveInTimeRange(@Param("minDate") LocalDateTime minDate, @Param("maxDate") LocalDateTime maxDate, Pageable pageable);

    @Query(nativeQuery = true, value = "SELECT * FROM loans l WHERE l.status NOT IN ('Rejected', 'Disbursed') ORDER BY l.created_at ASC")
    public Page<Loan> mainPageLoans(Pageable pageable);

    @Query(value = "SELECT * FROM loans AS l WHERE l.status = :status AND l.created_at BETWEEN :minDate AND :maxDate",
            countQuery = "SELECT count(*) FROM loans AS l WHERE l.status = :status AND l.created_at BETWEEN :minDate AND :maxDate",
            nativeQuery = true
    )
    public Page<Loan> findLoans(@Param("status") String status, @Param("minDate") LocalDateTime minDate, @Param("maxDate") LocalDateTime maxDate, Pageable pageable);

    @Query("SELECT l FROM Loan l WHERE l.user = :entityId AND l.createdAt BETWEEN :minDate AND :maxDate")
    public Page<Loan> findPendingByUserLoans(@Param("entityId") Integer entityId, @Param("minDate") LocalDateTime minDate, @Param("maxDate") LocalDateTime maxDate, Pageable pageable);

    @Query(nativeQuery = true, value = "SELECT l.* FROM loans as l, users as u WHERE l.actioned_by = users_branches.employee_id AND users_branches.branch_name = branches.name AND branches.id = :entityId AND l.created_at BETWEEN :minDate AND :maxDate")
    public Page<Loan> findPendingByBranchLoans(@Param("entityId") Integer entityId, @Param("minDate") LocalDateTime minDate, @Param("maxDate") LocalDateTime maxDate, Pageable pageable);

    @Query("SELECT l FROM Loan l WHERE l.role = :entityId AND l.createdAt BETWEEN :minDate AND :maxDate")
    public Page<Loan> findPendingByMovementStageLoans(@Param("entityId") Integer entityId, @Param("minDate") LocalDateTime minDate, @Param("maxDate") LocalDateTime maxDate, Pageable pageable);

    @Query("SELECT l FROM Loan l WHERE l.role = :role AND l.status NOT IN ('Disbursed', 'Rejected')")
    public Page<Loan> findLoansByStage(@Param("role") String role, Pageable pageable);

    @Query("SELECT DISTINCT l FROM Loan l WHERE l.role = :role AND l.status IN ('Forwarded', 'Deferred')")
    public Page<Loan> findForwardedLoansByStage(@Param("role") String role, Pageable pageable);

    @Query(nativeQuery = true, value = "SELECT DISTINCT l.* FROM loans as l, users as u WHERE l.stage IN :roles AND l.actioned_by = users_branches.employee_id AND users_branches.branch_name IN :branches AND l.status IN ('Forwarded', 'Deferred')")
    public Page<Loan> findForwardedLoansByStageAndBranch(@Param("roles") Set<String> roles, @Param("branches") Set<String> branches, Pageable pageable);

    @Query(nativeQuery = true, value = "SELECT l.* FROM loans as l, users as u WHERE l.stage IN :roles AND l.actioned_by = users_branches.employee_id AND users_branches.branch_name IN :branches AND l.status NOT IN ('Forwarded', 'Rejected', 'Deferred', 'Disbursed') ORDER BY l.receive_timestamp DESC")
    public Page<Loan> findReceivedLoansByStageAndBranch(@Param("roles") Set<String> roles, @Param("branches") Set<String> branches, Pageable pageable);

    @Query("SELECT l FROM Loan l WHERE l.role.id > 4 AND l.status NOT IN ('Rejected', 'Deferred', 'Disbursed') ORDER BY l.receiveTimestamp DESC")
    public Page<Loan> findLoansAtHeadOffice(Pageable pageable);

    @Query("SELECT l FROM Loan l WHERE l.role.id = :role AND l.status NOT IN ('Forwarded', 'Rejected', 'Deferred', 'Disbursed') ORDER BY l.receiveTimestamp DESC")
    public Page<Loan> findReceivedLoansByStage(@Param("role") Integer roleId, Pageable pageable);

    @Modifying
    @Query("UPDATE Loan l SET l.status = :status, l.comment = :comment WHERE l.id = :id")
    @Transactional
    public void updateStatusById(@Param("status") String status, @Param("id") Integer id, @Param("comment") String comment);

    @Modifying
    @Query("UPDATE Loan l SET l.user = :receivedBy, l.status = 'Received', l.receiveTimestamp = current_timestamp WHERE l.id = :id")
    @Transactional
    public void receiveLoan(@Param("id") Integer loanId, @Param("receivedBy") Integer receivedBy);

    @Modifying
    @Query("UPDATE Loan l SET l.comment = :comment WHERE l.id = :id")
    @Transactional
    public void updateCommentById(@Param("id") Integer id, @Param("comment") String comment);

    @Modifying
    @Query("UPDATE Loan l SET l.status = 'Deferred', l.role.id = :stage, l.comment = :comment WHERE l.id = :id")
    @Transactional
    public void deferLoan(@Param("id") Integer loanId, @Param("stage") Integer stage, @Param("comment") String comment);

    @Modifying
    @Query("UPDATE Loan l SET l.user = :stagedBy, l.role.id = :stage, l.status = 'Forwarded', l.stagedAt = current_timestamp, l.comment = :comment WHERE l.id = :id")
    @Transactional
    public void forwardLoanById(@Param("stage") Integer stage, @Param("id") Integer id, @Param("stagedBy") Integer forwardedBy, @Param("comment") String comment);

    @Query("SELECT COUNT(l) FROM Loan l WHERE l.status <> :status")
    public Integer findLoansCount(@Param("status") String status);

    @Query("SELECT l FROM Loan l WHERE l.user = :userId AND l.status = 'Forwarded' AND l.createdAt BETWEEN :minDate AND :maxDate")
    public Page<Loan> findForwardedByUser(@Param("userId") Integer userId, @Param("minDate") LocalDateTime minDate, @Param("maxDate") LocalDateTime maxDate, Pageable pageable);

    @Query("SELECT max(l.id) FROM Loan l WHERE l.role.id = 12")
    public Integer findMaxIdForDisbursedLoans();

    @Query("SELECT min(l.id) FROM Loan l WHERE l.role.id = 12")
    public Integer findMinIdForDisbursedLoans();
}