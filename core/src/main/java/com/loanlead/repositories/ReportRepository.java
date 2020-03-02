package com.loanlead.repositories;

import com.loanlead.models.Report;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface ReportRepository extends PagingAndSortingRepository<Report, Integer> {
    @Query("SELECT a FROM Report a WHERE a.loan = :loanId")
    Page<Report> findAllByLoanId(@Param("loanId") Integer loanId, Pageable pageable);

    @Query("SELECT a FROM Report a, Loan l WHERE l.id = a.loan AND l.createdAt BETWEEN :minDate AND :maxDate ORDER BY a.loan, a.createdAt")
    Page<Report> findAllOrderByLoanId(@Param("minDate") LocalDateTime minDate, @Param("maxDate") LocalDateTime maxDate, Pageable pageable);
}
