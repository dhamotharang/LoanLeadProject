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
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayInputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Controller
@RequestMapping(ReportController.PREFIX + "/reports")
public class ReportController {
    static final String PREFIX = "/api";
    private ReportService reportService;

    private ReportsExcelManager reportsExcelManager;
    private LoggedUserExcelManager loggedUserExcelManager;
    private AuditExcelManager auditExcelManager;
    private UserExcelManager userExcelManager;
    private LoanProductExcelManager loanProductExcelManager;
    private ModelEntityMapper mapper;

    @Autowired
    public ReportController(ReportsExcelManager reportsExcelManager, LoggedUserExcelManager loggedUserExcelManager, AuditExcelManager auditExcelManager, UserExcelManager userExcelManager, LoanProductExcelManager loanProductExcelManager, ModelEntityMapper mapper, ReportService reportService) {
        this.reportsExcelManager = reportsExcelManager;
        this.loggedUserExcelManager = loggedUserExcelManager;
        this.auditExcelManager = auditExcelManager;
        this.userExcelManager = userExcelManager;
        this.loanProductExcelManager = loanProductExcelManager;
        this.reportService = reportService;
        this.mapper = mapper;
    }

    @GetMapping("/logged")
    public void getUserReport(HttpServletResponse response) throws IOException {
        response.setContentType("application/octet-stream");
        response.setHeader("Content-Disposition", "attachment; filename=loggedUsers.xlsx");

        ByteArrayInputStream stream = loggedUserExcelManager.createTable();
        IOUtils.copy(stream, response.getOutputStream());
    }

    @GetMapping("/report")
    public void getAuditReport(
            @RequestParam("loanId") Integer loanId,
            @RequestParam(value = "page", required = false) Integer page,
            @RequestParam(value = "itemsPerPage", required = false) Integer itemsPerPage,
            HttpServletResponse response
    ) throws IOException {
        response.setContentType("application/octet-stream");
        response.setHeader("Content-Disposition", "attachment; filename=auditing.xlsx");

        auditExcelManager.setLoanCode(loanId);
        auditExcelManager.setPage(page);
        auditExcelManager.setItemsPerPage(itemsPerPage);
        ByteArrayInputStream stream = auditExcelManager.createTable();
        IOUtils.copy(stream, response.getOutputStream());
    }

    @GetMapping("/user")
    public void getUsersReport(HttpServletResponse response) throws IOException {
        response.setContentType("application/octet-stream");
        response.setHeader("Content-Disposition", "attachment; filename=userDetails.xlsx");

        ByteArrayInputStream stream = userExcelManager.createTable();
        IOUtils.copy(stream, response.getOutputStream());
    }

    @GetMapping("/loan-product")
    public void getLoanProductReport(HttpServletResponse response) throws IOException {
        response.setContentType("application/octet-stream");
        response.setHeader("Content-Disposition", "attachment; filename=loanProductDetails.xlsx");

        ByteArrayInputStream stream = loanProductExcelManager.createTable();
        IOUtils.copy(stream, response.getOutputStream());
    }

    @ResponseBody
    @GetMapping("/{loanId}")
    public ResponseEntity<List<ReportModel>> getLoans(@PathVariable Integer loanId,
                                                      @RequestParam("page") Integer page,
                                                      @RequestParam("itemsPerPage") Integer itemsPerPage
    ) {
        List<Report> reports = reportService.findAllByLoanId(loanId, page, itemsPerPage).getContent();
        return ResponseEntity.of(Optional.of(reports.stream().map(report -> mapper.toModel(report, ReportModel.class)).collect(Collectors.toList())));
    }

    @ResponseBody
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
        response.setContentType("application/octet-stream");
        response.setHeader("Content-Disposition", "attachment; filename=" + reportType + ".xlsx");

        reportsExcelManager.setReportFormModel(toReportModel(startDate, endDate, reportType, entityId, itemsPerPage, page));
        ByteArrayInputStream stream = reportsExcelManager.createTable();
        IOUtils.copy(stream, response.getOutputStream());
    }

    private ReportFormModel toReportModel(LocalDate startDate, LocalDate endDate, String reportType, Integer entityId, Integer itemsPerPage, Integer page) {
        return new ReportFormModel(startDate, endDate, reportType, entityId, itemsPerPage, page);
    }
}
