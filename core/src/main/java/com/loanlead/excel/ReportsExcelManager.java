package com.loanlead.excel;

import com.loanlead.services.ReportService;
import com.loanlead.services.LoanService;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.ss.util.CellUtil;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDateTime;

// TODO Remake everything
@Component
public class ReportsExcelManager {
    @Autowired
    private Environment env;

    @Autowired
    private LoanService loanService;

    @Autowired
    private ReportService reportService;

    private static ReportsExcelManager classInstance;
    private String fileName;
    private String[] excelColumns;
    private String excelColumnsString;
    private Integer entityId;
    private LocalDateTime minDate;
    private LocalDateTime maxDate;

    public void setMinDate(LocalDateTime minDate) {
        this.minDate = minDate;
    }

    public void setMaxDate(LocalDateTime maxDate) {
        this.maxDate = maxDate;
    }

    private String reportType;

    public static ReportsExcelManager getInstance() {
        if (ReportsExcelManager.classInstance == null) {
            ReportsExcelManager.classInstance = new ReportsExcelManager();
        }

        return ReportsExcelManager.classInstance;
    }

    public String getFilePath() {
        return this.env.getProperty("loanlead.excel.location") + "/" + this.fileName;
    }

    public void setReportType(String reportType) {
        this.reportType = reportType;
        this.fileName = reportType + ".xlsx";

        if (reportType.equals("comprehensive")) {
            excelColumnsString = "Id,Customer,Stage,Status,Report Timestamp,User,Branch,Comment";
        } else {
            excelColumnsString = "Id,Customer,Type,Tenure,Amount,Stage,Status,User,Branch,Stage At,Create dAt,Comment";
        }
    }

    public void setEntityId(Integer entityId) {
        this.entityId = entityId;
    }

    public void createTable() {
        try (FileOutputStream out = new FileOutputStream(this.env.getProperty("loanlead.excel.location") + "/" + this.fileName)) {
            Workbook workbook = new XSSFWorkbook();
            Sheet loanSheet = workbook.createSheet(this.reportType);
            loanSheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 10));

            String titleContent = "";

            if (this.reportType.equalsIgnoreCase("comprehensive")) {
                titleContent = "Comprehensive Report";
            } else if (this.reportType.equalsIgnoreCase("running")) {
                titleContent = "List of loans Running Report";
            } else if (this.reportType.equalsIgnoreCase("forwarded")) {
                titleContent = "List of loans Forwarded Report";
            } else if (this.reportType.equalsIgnoreCase("rejected")) {
                titleContent = "List of loans Rejected Report";
            } else if (this.reportType.equalsIgnoreCase("deferred")) {
                titleContent = "List of loans Deferred Report";
            } else if (this.reportType.equalsIgnoreCase("disbursed")) {
                titleContent = "List of loans Disbursed Report";
            } else if (this.reportType.equalsIgnoreCase("pendingByMovementStage")) {
                titleContent = "Loans pending by Movement Stage";
            } else if (this.reportType.equalsIgnoreCase("pendingByUser")) {
                titleContent = "Loans pending by User";
            } else if (this.reportType.equalsIgnoreCase("pendingByBranch")) {
                titleContent = "Loans pending by Branch";
            } else if (this.reportType.equalsIgnoreCase("forwardedByUser")) {
                titleContent = "Loans Forwarded by User";
            } else if (this.reportType.equalsIgnoreCase("users")) {
            	titleContent = "Logged users";
            }

            this.excelColumns = excelColumnsString.split(",");

            Row title = loanSheet.createRow(0);
            Cell titleCell = title.createCell(0);
            CellUtil.setAlignment(titleCell, HorizontalAlignment.CENTER);
            titleCell.setCellValue(titleContent);

            Row headersRow = loanSheet.createRow(1);

            for (int i = 0; i < this.excelColumns.length; i++) {
                Cell cell = headersRow.createCell(i);
                cell.setCellValue(this.excelColumns[i]);
            }

            this.setSheetData(loanSheet);

            workbook.write(out);
        } catch (IOException e) {
            System.out.println("IOException in ReportsExcelManager: " + e.getMessage());
        }
    }

    private void setSheetData(Sheet sheet) {
//        if (reportType.equals("comprehensive")) {
//            List<Report> auditingDetails = auditingService.findAllSortByLoanId(minDate, maxDate);
//
//            for (Report auditing: auditingDetails) {
//                Row row = sheet.createRow(auditingDetails.indexOf(auditing) + 2);
//
//                row.createCell(0).setCellValue(auditing.getId());
//                row.createCell(1).setCellValue(auditing.getLoan().getCustomer().getName());
//                row.createCell(2).setCellValue(auditing.getRole().getDisplayName());
//                row.createCell(3).setCellValue(auditing.getStatus());
//                row.createCell(4).setCellValue(auditing.getCreatedAt().toString().replace('T', ' '));
//                row.createCell(5).setCellValue(auditing.getUser().getFullName());
//                row.createCell(6).setCellValue(auditing.getUser().getBranch().getName());
//                row.createCell(7).setCellValue(auditing.getComment());
//            }
//        } else {
//            List<Loan> loansDetails = loanService.findLoans(this.reportType, this.entityId, this.minDate, this.maxDate);
//
//            for (Loan loan: loansDetails) {
//                Row row = sheet.createRow(loansDetails.indexOf(loan) + 2);
//
//                row.createCell(0).setCellValue(loan.getId());
//                row.createCell(1).setCellValue(loan.getCustomer().getName());
//                row.createCell(2).setCellValue(loan.getType());
//                row.createCell(3).setCellValue(loan.getTenure());
//                row.createCell(4).setCellValue(loan.getAmount());
//                row.createCell(5).setCellValue(loan.getRole().getDisplayName());
//                row.createCell(6).setCellValue(loan.getStatus());
//                row.createCell(7).setCellValue(loan.getUser().getFullName());
//                row.createCell(8).setCellValue(loan.getUser().getBranch().getName());
//                row.createCell(9).setCellValue(loan.getStageTimestamp().toString().replace('T', ' '));
//                row.createCell(10).setCellValue(loan.getCreatedAt().toString().replace('T', ' '));
//                row.createCell(11).setCellValue(loan.getComment());
//            }
//        }
    }
}
