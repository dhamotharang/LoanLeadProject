package com.loanlead.services;

import com.loanlead.auth.RoleRepository;
import com.loanlead.auth.UserRepository;
import com.loanlead.auth.entities.Role;
import com.loanlead.auth.entities.User;
import com.loanlead.models.Report;
import com.loanlead.models.Branch;
import com.loanlead.models.Loan;
import com.loanlead.models.ui.models.ReportFormModel;
import com.loanlead.repositories.ReportRepository;
import com.loanlead.repositories.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class LoanService {
    private ReportRepository reportRepository;
    private LoanRepository loanRepository;

    @Autowired
    public LoanService(ReportRepository reportRepository, LoanRepository loanRepository) {
        this.reportRepository = reportRepository;
        this.loanRepository = loanRepository;
    }

    public List<Loan> mainPageLoans(Integer itemsPerPage, Integer page) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        Page<Loan> loans = loanRepository.mainPageLoans(pageable);
        return loans.getContent();
    }

    public Integer mainPageLoansCount() {
        return loanRepository.mainPageLoansCount();
    }

    public Loan find(Integer id) {
        return loanRepository.findById(id).orElse(null);
    }

    public Loan save(Loan loan) {
        loan = this.loanRepository.save(loan);
        return loan;
    }

    public List<Loan> findLoans(ReportFormModel reportFormModel) {
        Pageable pageable = PageRequest.of(reportFormModel.getPage(), reportFormModel.getItemsPerPage());
        Page<Loan> loans;

        if (reportFormModel.getReportType().startsWith("running")) {
            loans = loanRepository.findRunningLoans(reportFormModel.getStartDate(), reportFormModel.getEndDate(), pageable);
        } else if (reportFormModel.getReportType().startsWith("user")) {
            loans = loanRepository.findPendingByUserLoans(reportFormModel.getEntityId(), reportFormModel.getStartDate(), reportFormModel.getEndDate(), pageable);
        } else if (reportFormModel.getReportType().startsWith("branch")) {
            loans = loanRepository.findPendingByBranchLoans(reportFormModel.getEntityId(), reportFormModel.getStartDate(), reportFormModel.getEndDate(), pageable);
        } else if (reportFormModel.getReportType().startsWith("stage")) {
            loans = loanRepository.findPendingByMovementStageLoans(reportFormModel.getEntityId(), reportFormModel.getStartDate(), reportFormModel.getEndDate(), pageable);
        } else {
            loans = loanRepository.findLoans(reportFormModel.getReportType(), reportFormModel.getStartDate(), reportFormModel.getEndDate(), pageable);
        }
        return loans.getContent();
    }

    public Integer findLoanReportsCount(ReportFormModel reportFormModel) {
        if (reportFormModel.getReportType().startsWith("running")) {
            return loanRepository.findRunningLoansCount(reportFormModel.getStartDate(), reportFormModel.getEndDate());
        } else if (reportFormModel.getReportType().startsWith("user")) {
            return loanRepository.findPendingByUserLoansCount(reportFormModel.getEntityId(), reportFormModel.getStartDate(), reportFormModel.getEndDate());
        } else if (reportFormModel.getReportType().startsWith("branch")) {
            return loanRepository.findPendingByBranchLoansCount(reportFormModel.getEntityId(), reportFormModel.getStartDate(), reportFormModel.getEndDate());
        } else if (reportFormModel.getReportType().startsWith("stage")) {
            return loanRepository.findPendingByMovementStageLoansCount(reportFormModel.getEntityId(), reportFormModel.getStartDate(), reportFormModel.getEndDate());
        } else {
            return loanRepository.findLoansReportsCount(reportFormModel.getReportType(), reportFormModel.getStartDate(), reportFormModel.getEndDate());
        }
    }

    public List<Loan> findLoansByCustomerId(Integer customerId) {
        return loanRepository.findLoansByCustomerId(customerId);
    }

    public void receiveLoan(Loan loan, User receivedBy) {
        loanRepository.receiveLoan(loan.getId(), receivedBy.getId());

        Report report = new Report();
        report.setLoan(loan);
        report.setStatus("Received");
        report.setComment("Loan received");
        report.setActionedBy(receivedBy);
    }

    public Integer findLoansCount(String status) {
        if (status.equals("Running")) {
            return loanRepository.findRunningLoansCount();
        } else {
            return loanRepository.findLoansCount(status);
        }
    }

    public List<Loan> receivedLoans(User user) {
        Set<Integer> roleIds = user.getRoles().stream().map(Role::getId).collect(Collectors.toSet());
        Set<Integer> branchIds = user.getBranches().stream().map(Branch::getId).collect(Collectors.toSet());
        return loanRepository.findReceivedLoansByStageAndBranch(roleIds, branchIds);
    }

    public List<Loan> forwardedLoans(User user) {
        Set<Integer> roleIds = user.getRoles().stream().map(Role::getId).collect(Collectors.toSet());
        Set<Integer> branchIds = user.getBranches().stream().map(Branch::getId).collect(Collectors.toSet());
        return loanRepository.findForwardedLoansByStageAndBranch(roleIds, branchIds);
    }
}