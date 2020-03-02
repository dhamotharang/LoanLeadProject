package com.loanlead.services;

import com.loanlead.models.Report;
import com.loanlead.repositories.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ReportService {
    @Autowired
    private ReportRepository reportRepository;

    public Report save(Report report) {
        return reportRepository.save(report);
    }

    public Report find(Integer id) {
        return reportRepository.findById(id).orElse(new Report());
    }

    public Page<Report> findAll(Integer page, Integer itemsPerPage) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        return reportRepository.findAll(pageable);
    }

    public Page<Report> findAllByLoanId(Integer loanId, Integer page, Integer itemsPerPage) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        return reportRepository.findAllByLoanId(loanId, pageable);
    }

    public Page<Report> findAllSortByLoanId(LocalDateTime minDate, LocalDateTime maxDate, Integer page, Integer itemsPerPage) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        return reportRepository.findAllOrderByLoanId(minDate, maxDate, pageable);
    }
}
