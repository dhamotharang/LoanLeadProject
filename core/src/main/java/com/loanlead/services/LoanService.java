package com.loanlead.services;

import com.loanlead.auth.UserServiceImpl;
import com.loanlead.auth.entities.Role;
import com.loanlead.auth.entities.User;
import com.loanlead.models.Report;
import com.loanlead.models.Branch;
import com.loanlead.models.Loan;
import com.loanlead.repositories.ReportRepository;
import com.loanlead.repositories.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class LoanService {
    public static final LocalDateTime MIN_DATE = LocalDateTime.of(2019, 1, 1, 1, 1, 1);
    public static final LocalDateTime MAX_DATE = LocalDateTime.now();

    @Autowired
    private ReportRepository reportRepository;

    @Autowired
    private LoanRepository loanRepository;

    public List<Loan> mainPageLoans() {
        return mainPageLoans(UserServiceImpl.DEFAULT_PAGE, UserServiceImpl.DEFAULT_ITEMS_PER_PAGE);
    }

    public List<Loan> mainPageLoans(Integer itemsPerPage) {
        return mainPageLoans(itemsPerPage, 1);
    }

    public List<Loan> mainPageLoans(Integer itemsPerPage, Integer page) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        Page<Loan> loans = loanRepository.mainPageLoans(pageable);
        return loans.getContent();
    }

    public Loan find(Integer id) {
        return loanRepository.findById(id).orElse(null);
    }

    public Loan save(Loan loan) {
        String status = loan.getId() != null ? "Edited" : "Created";

        Loan createdLoan = this.loanRepository.save(loan);

        Report report = new Report();
        report.setLoan(loan);
        report.setStatus(status);
        report.setComment("Loan created");
        report.setActionedBy(loan.getUser());
        reportRepository.save(report);

        return createdLoan;
    }

    public List<Loan> findLoansByCustomerId(Integer customerId) {
        return findLoansByCustomerId(customerId, UserServiceImpl.DEFAULT_PAGE, UserServiceImpl.DEFAULT_ITEMS_PER_PAGE);
    }

    public List<Loan> findLoansByCustomerId(Integer customerId, Integer itemsPerPage, Integer page) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        Page<Loan> loans = loanRepository.findLoansByCustomerId(customerId, pageable);
        return loans.getContent();
    }

    public List<Loan> findLoans(String reportType, LocalDateTime minDate, LocalDateTime maxDate, Integer itemsPerPage, Integer page) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        Page<Loan> loans = loanRepository.findLoans(reportType, minDate, maxDate, pageable);
        return loans.getContent();
    }

    public List<Loan> findLoans(String reportType, Integer entityId, LocalDateTime minDate, LocalDateTime maxDate, Integer itemsPerPage, Integer page) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        if (reportType.startsWith("pendingByUser")) {
            return loanRepository.findPendingByUserLoans(entityId, minDate, maxDate, pageable).getContent();
        } else if (reportType.startsWith("pendingByBranch")) {
            return loanRepository.findPendingByBranchLoans(entityId, minDate, maxDate, pageable).getContent();
        } else if (reportType.startsWith("pendingByMovementStage")) {
            return loanRepository.findPendingByMovementStageLoans(entityId, minDate, maxDate, pageable).getContent();
        }
        return new ArrayList<>();
    }

    public List<Loan> findRunningLoans() {
        return findRunningLoans(MIN_DATE, MAX_DATE);
    }

    public List<Loan> findRunningLoans(LocalDateTime minDate, LocalDateTime maxDate) {
        return findRunningLoans(minDate, maxDate, UserServiceImpl.DEFAULT_PAGE, UserServiceImpl.DEFAULT_ITEMS_PER_PAGE);
    }

    public List<Loan> findRunningLoans(LocalDateTime minDate, LocalDateTime maxDate, Integer itemsPerPage, Integer page) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        return loanRepository.findRunningLoans(minDate, maxDate, pageable).getContent();
    }

    public List<Loan> findLoansAtHeadOffice() {
        return findLoansAtHeadOffice(UserServiceImpl.DEFAULT_PAGE, UserServiceImpl.DEFAULT_ITEMS_PER_PAGE);
    }

    public List<Loan> findLoansAtHeadOffice(Integer itemsPerPage, Integer page) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        return loanRepository.findLoansAtHeadOffice(pageable).getContent();
    }

    public void forwardLoanById(Loan loan, String comment, User forwardedBy) {
        int nextStage;

//        if (loan.getType().equalsIgnoreCase("Deduction At Source")) {
//            if (loan.getStage() == 1) {
//                nextStage = 3;
//            } else if (loan.getStage() == 3) {
//                nextStage = 5;
//            } else if (loan.getStage() == 5) {
//                nextStage = 9;
//            } else {
//                nextStage = loan.getStage() + 1;
//            }
//        } else {
//            if (Integer.valueOf(loan.getAmount()) < 3000000) {
//                if (loan.getStage() < 3) {
//                    nextStage = loan.getStage() + 1;
//                } else if (loan.getStage() == 3) {
//                    nextStage = 5;
//                } else if (loan.getStage() == 5) {
//                    nextStage = 8;
//                } else {
//                    nextStage = loan.getStage() + 1;
//                }
//            } else if (Integer.valueOf(loan.getAmount()) < 1000000) {
//                if (loan.getStage() < 5) {
//                    nextStage = loan.getStage() + 1;
//                } else if (loan.getStage() == 5) {
//                    nextStage = 8;
//                } else {
//                    nextStage = loan.getStage() + 1;
//                }
//            } else {
//                nextStage = loan.getStage() + 1;
//            }
//        }
//
//        loanRepository.forwardLoanById(nextStage, loan.getId(), forwardedBy, comment);
//
//        loan.setStage(nextStage);
//
//        reportRepository.save(new Report(
//                loan.getId(),
//                "Forwarded",
//                nextStage,
//                comment,
//                loan.getStagedBy()
//        ));
    }

    public void setComment(Integer loanId, String comment) {
        loanRepository.updateCommentById(loanId, comment);
    }

    public void deferLoan(Loan loan, Integer stage, User deferredBy, String comment) {
        loanRepository.deferLoan(loan.getId(), stage, comment);

        Report report = new Report();
        report.setLoan(loan);
        report.setStatus("Deferred");
        report.setComment(comment);
        report.setActionedBy(deferredBy);
        reportRepository.save(report);
    }

    public void updateStatus(Loan loan, String status, User updatedBy, String comment) {
        loanRepository.updateStatusById(status, loan.getId(), comment);

        Report report = new Report();
        report.setLoan(loan);
        report.setStatus(status);
        report.setComment(comment);
        report.setActionedBy(updatedBy);
        reportRepository.save(report);
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
        try {
            Method countReceiveMethod = loanRepository.getClass().getMethod("find" + StringUtils.capitalize(status) + "LoansCount");
            return (Integer) countReceiveMethod.invoke(loanRepository);
        } catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException e) {
            return 0;
        }
    }

    public List<Loan> findLoansByStageAndBranch(String type, Set<Role> roles, Set<Branch> branches) {
        return findLoansByStageAndBranch(type, roles, branches, UserServiceImpl.DEFAULT_PAGE, UserServiceImpl.DEFAULT_ITEMS_PER_PAGE);
    }

    public List<Loan> findLoansByStageAndBranch(String type, Set<Role> roles, Set<Branch> branches, Integer itemsPerPage, Integer page) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        Set<String> roleIds = roles.stream().map(Role::getName).collect(Collectors.toSet());
        Set<String> branchIds = branches.stream().map(Branch::getName).collect(Collectors.toSet());
        branchIds.add("ROLE_APPLICATION");

        switch (type) {
            case "forwarded":
                return loanRepository.findForwardedLoansByStageAndBranch(roleIds, branchIds, pageable).getContent();
            case "received":
                return loanRepository.findReceivedLoansByStageAndBranch(roleIds, branchIds, pageable).getContent();
            default:
                return new ArrayList<>();
        }
    }

    public Integer findMinIdForDisbursed() {
        return loanRepository.findMinIdForDisbursedLoans();
    }

    public Integer findMaxIdForDisbursed() {
        return loanRepository.findMaxIdForDisbursedLoans();
    }
}