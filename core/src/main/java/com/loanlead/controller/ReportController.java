package com.loanlead.controller;

import com.loanlead.auth.UserService;
import com.loanlead.auth.UserServiceImpl;
import com.loanlead.auth.entities.User;
import com.loanlead.excel.*;
import com.loanlead.services.ReportService;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.FileInputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.Month;
import java.util.List;

@RestController
@RequestMapping(ReportController.PREFIX)
public class ReportController {
    static final String PREFIX = "/api";
    private ReportService reportService;

    private ReportsExcelManager reportsExcelManager;
    private LoggedUserExcelManager loggedUserExcelManager;
    private AuditExcelManager auditExcelManager;
    private RoleExcelManager roleExcelManager;
    private UserExcelManager userExcelManager;
    private LoanProductExcelManager loanProductExcelManager;
    private UserService userService;

    @Autowired
    public ReportController(ReportsExcelManager reportsExcelManager, LoggedUserExcelManager loggedUserExcelManager, AuditExcelManager auditExcelManager, RoleExcelManager roleExcelManager, UserExcelManager userExcelManager, LoanProductExcelManager loanProductExcelManager, UserService userService, ReportService reportService) {
        this.reportsExcelManager = reportsExcelManager;
        this.loggedUserExcelManager = loggedUserExcelManager;
        this.auditExcelManager = auditExcelManager;
        this.roleExcelManager = roleExcelManager;
        this.userExcelManager = userExcelManager;
        this.loanProductExcelManager = loanProductExcelManager;
        this.userService = userService;
        this.reportService = reportService;
    }

    @GetMapping("/logged_users")
    @ResponseBody
    public List<User> getLoggedInUsers(@RequestParam("page") Integer page, @RequestParam("itemsPerPage") Integer itemsPerPage) {
        return userService.getOnlineUsers(page, itemsPerPage).getContent();
    }

    @GetMapping("/report")
    public void report(
            @RequestParam(name = "reportType", required = false)
                    String reportType,
            @RequestParam(value = "entityId", required = false)
                    Integer entityId,
            @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
            @RequestParam(name = "minDate", required = false)
                    LocalDateTime startDate,
            @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
            @RequestParam(name = "maxDate", required = false)
                    LocalDateTime endDate,
            HttpServletResponse response
    ) throws IOException, ServletException {
        startDate = startDate == null ? LocalDateTime.of(2018, Month.JANUARY, 1, 1, 1, 1) : startDate;
        endDate = endDate == null ? LocalDateTime.now() : endDate;

        reportsExcelManager.setReportType(reportType);
        reportsExcelManager.setEntityId(entityId);
        reportsExcelManager.setMinDate(startDate);
        reportsExcelManager.setMaxDate(endDate);
        reportsExcelManager.createTable();

        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-Disposition", "attachment; filename=" + reportType + ".xlsx");

        ServletOutputStream out = response.getOutputStream();
        out.write(IOUtils.toByteArray(new FileInputStream(reportsExcelManager.getFilePath())));
        out.flush();
        out.close();
    }

    @GetMapping("/logged_user/report")
    public void getUserReport(HttpServletResponse response) throws IOException {
        loggedUserExcelManager.createTable();

        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-Disposition", "attachment; filename=loggedUsers.xlsx");

        ServletOutputStream out = response.getOutputStream();
        out.write(IOUtils.toByteArray(new FileInputStream(loggedUserExcelManager.getFilePath())));
        out.flush();
        out.close();
    }

    @GetMapping("/audit/report/{loanId}")
    public void getAuditReport(@PathVariable("loanId") Integer loanId, HttpServletResponse response) throws IOException {
        auditExcelManager.setLoanCode(loanId);
        auditExcelManager.createTable();

        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-Disposition", "attachment; filename=auditing.xlsx");

        ServletOutputStream out = response.getOutputStream();
        out.write(IOUtils.toByteArray(new FileInputStream(auditExcelManager.getFilePath())));
        out.flush();
        out.close();
    }

    @GetMapping("/role/report")
    public void getRolesReport(HttpServletResponse response) throws IOException {
        roleExcelManager.createTable();

        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-Disposition", "attachment; filename=roleDetails.xlsx");

        ServletOutputStream out = response.getOutputStream();
        out.write(IOUtils.toByteArray(new FileInputStream(roleExcelManager.getFilePath())));
        out.flush();
        out.close();
    }

    @GetMapping("/user/report")
    public void getUsersReport(HttpServletResponse response) throws IOException {
        userExcelManager.createTable();

        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-Disposition", "attachment; filename=userDetails.xlsx");

        ServletOutputStream out = response.getOutputStream();
        out.write(IOUtils.toByteArray(new FileInputStream(userExcelManager.getFilePath())));
        out.flush();
        out.close();
    }

    @GetMapping("/loan_threshold/report")
    public void getLoanProductReport(HttpServletResponse response) throws IOException {
        loanProductExcelManager.createTable();

        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-Disposition", "attachment; filename=loanProductDetails.xlsx");

        ServletOutputStream out = response.getOutputStream();
        out.write(IOUtils.toByteArray(new FileInputStream(loanProductExcelManager.getFilePath())));
        out.flush();
        out.close();
    }

    @GetMapping("/audit/{loanId}")
    @ResponseBody
    public String getLoans(@PathVariable("loanId") Integer loanId,
                           @RequestParam("page") Integer page,
                           @RequestParam("itemsPerPage") Integer itemsPerPage
    ) {
        if (page == null) {
            page = UserServiceImpl.DEFAULT_PAGE;
        }

        if (itemsPerPage == null) {
            itemsPerPage = UserServiceImpl.DEFAULT_ITEMS_PER_PAGE;
        }

        reportService.findAllByLoanId(loanId, page, itemsPerPage);

        return "user/auditing";
    }
}
