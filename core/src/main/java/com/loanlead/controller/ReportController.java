package com.loanlead.controller;

import com.loanlead.auth.UserService;
import com.loanlead.auth.UserServiceImpl;
import com.loanlead.excel.*;
import com.loanlead.models.Report;
import com.loanlead.models.ui.ModelEntityMapper;
import com.loanlead.models.ui.models.ReportFormModel;
import com.loanlead.models.ui.models.ReportModel;
import com.loanlead.services.ReportService;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.FileInputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping(ReportController.PREFIX + "/reports")
public class ReportController {
    static final String PREFIX = "/api";
    private ReportService reportService;

    private ReportsExcelManager reportsExcelManager;
    private LoggedUserExcelManager loggedUserExcelManager;
    private AuditExcelManager auditExcelManager;
    private RoleExcelManager roleExcelManager;
    private UserExcelManager userExcelManager;
    private LoanProductExcelManager loanProductExcelManager;
    private ModelEntityMapper mapper;

    @Autowired
    public ReportController(ReportsExcelManager reportsExcelManager, LoggedUserExcelManager loggedUserExcelManager, AuditExcelManager auditExcelManager, RoleExcelManager roleExcelManager, UserExcelManager userExcelManager, LoanProductExcelManager loanProductExcelManager, ModelEntityMapper mapper, ReportService reportService) {
        this.reportsExcelManager = reportsExcelManager;
        this.loggedUserExcelManager = loggedUserExcelManager;
        this.auditExcelManager = auditExcelManager;
        this.roleExcelManager = roleExcelManager;
        this.userExcelManager = userExcelManager;
        this.loanProductExcelManager = loanProductExcelManager;
        this.reportService = reportService;
        this.mapper = mapper;
    }

    @GetMapping("/logged")
    public void getUserReport(HttpServletResponse response) throws IOException {
        loggedUserExcelManager.createTable();

        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-Disposition", "attachment; filename=loggedUsers.xlsx");

        ServletOutputStream out = response.getOutputStream();
        out.write(IOUtils.toByteArray(new FileInputStream(loggedUserExcelManager.getFilePath())));
        out.flush();
        out.close();
    }

    @GetMapping("/report")
    public void getAuditReport(
            @RequestParam("loanId") Integer loanId,
            @RequestParam(value = "page", required = false) Integer page,
            @RequestParam(value = "itemsPerPage", required = false) Integer itemsPerPage,
            HttpServletResponse response
    ) throws IOException {
        auditExcelManager.setLoanCode(loanId);
        auditExcelManager.setPage(page);
        auditExcelManager.setItemsPerPage(itemsPerPage);
        auditExcelManager.createTable();

        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-Disposition", "attachment; filename=auditing.xlsx");

        ServletOutputStream out = response.getOutputStream();
        out.write(IOUtils.toByteArray(new FileInputStream(auditExcelManager.getFilePath())));
        out.flush();
        out.close();
    }

    @GetMapping("/role")
    public void getRolesReport(HttpServletResponse response) throws IOException {
        roleExcelManager.createTable();

        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-Disposition", "attachment; filename=roleDetails.xlsx");

        ServletOutputStream out = response.getOutputStream();
        out.write(IOUtils.toByteArray(new FileInputStream(roleExcelManager.getFilePath())));
        out.flush();
        out.close();
    }

    @GetMapping("/user")
    public void getUsersReport(HttpServletResponse response) throws IOException {
        userExcelManager.createTable();

        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-Disposition", "attachment; filename=userDetails.xlsx");

        ServletOutputStream out = response.getOutputStream();
        out.write(IOUtils.toByteArray(new FileInputStream(userExcelManager.getFilePath())));
        out.flush();
        out.close();
    }

    @GetMapping("/loan-product")
    public void getLoanProductReport(HttpServletResponse response) throws IOException {
        loanProductExcelManager.createTable();

        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-Disposition", "attachment; filename=loanProductDetails.xlsx");

        ServletOutputStream out = response.getOutputStream();
        out.write(IOUtils.toByteArray(new FileInputStream(loanProductExcelManager.getFilePath())));
        out.flush();
        out.close();
    }

    @GetMapping("/{loanId}")
    public ResponseEntity<List<ReportModel>> getLoans(@PathVariable Integer loanId,
                                                      @RequestParam(value = "page", required = false) Integer page,
                                                      @RequestParam(value = "itemsPerPage", required = false) Integer itemsPerPage
    ) {
        if (page == null) {
            page = UserServiceImpl.DEFAULT_PAGE;
        }

        if (itemsPerPage == null) {
            itemsPerPage = UserServiceImpl.DEFAULT_ITEMS_PER_PAGE;
        }

        List<Report> reports = reportService.findAllByLoanId(loanId, page, itemsPerPage).getContent();
        return ResponseEntity.of(Optional.of(reports.stream().map(report -> mapper.toModel(report, ReportModel.class)).collect(Collectors.toList())));
    }

    @GetMapping("/{loanId}/count")
    public ResponseEntity<Integer> getLoansCount(@PathVariable Integer loanId) {
        return ResponseEntity.of(Optional.of(reportService.findAllByLoanIdCount(loanId)));
    }

    @GetMapping("/specific")
    public void report(
            @RequestParam("startDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate,
            @RequestParam("reportType") String reportType,
            @RequestParam(value = "entityId", required = false) Integer entityId,
            @RequestParam("itemsPerPage") Integer itemsPerPage,
            @RequestParam("page") Integer page,
            HttpServletResponse response
    ) throws IOException {
        reportsExcelManager.setReportFormModel(toReportModel(startDate, endDate, reportType, entityId, itemsPerPage, page));
        reportsExcelManager.createTable();

        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-Disposition", "attachment; filename=" + reportType + ".xlsx");

        ServletOutputStream out = response.getOutputStream();
        out.write(IOUtils.toByteArray(new FileInputStream(reportsExcelManager.getFilePath())));
        out.flush();
        out.close();
    }

    private ReportFormModel toReportModel(LocalDate startDate, LocalDate endDate, String reportType, Integer entityId, Integer itemsPerPage, Integer page) {
        return new ReportFormModel(startDate, endDate, reportType, entityId, itemsPerPage, page);
    }
}
