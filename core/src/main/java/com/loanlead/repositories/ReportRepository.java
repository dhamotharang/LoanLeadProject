package com.loanlead.repositories;

import com.loanlead.models.Report;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Repository
public interface ReportRepository extends PagingAndSortingRepository<Report, Integer>, JpaSpecificationExecutor {
    @Query("SELECT a FROM Report a WHERE a.loan.id = :loanId")
    Page<Report> findAllByLoanId(@Param("loanId") Integer loanId, Pageable pageable);

    @Query("SELECT COUNT(a) FROM Report a WHERE a.loan.id = :loanId")
    Integer findAllByLoanIdCount(@Param("loanId") Integer loanId);

    @Query(nativeQuery = true, value = "SELECT * FROM reports WHERE loan_id IN (SELECT id FROM loans WHERE created_at BETWEEN :minDate AND :maxDate) ORDER BY loan_id, actioned_at")
    Page<Report> findAllOrderByLoanId(@Param("minDate") LocalDate minDate, @Param("maxDate") LocalDate maxDate, Pageable pageable);

    @Query(nativeQuery = true, value = "SELECT COUNT(*) FROM reports WHERE loan_id IN (SELECT id FROM loans WHERE created_at BETWEEN :minDate AND :maxDate) ORDER BY loan_id, actioned_at")
    Integer findAllOrderByLoanIdCount(@Param("minDate") LocalDate minDate, @Param("maxDate") LocalDate maxDate);
}
