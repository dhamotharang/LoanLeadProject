package com.loanlead.excel;

import com.loanlead.models.Loan;
import com.loanlead.models.Report;
import com.loanlead.models.ui.models.ReportFormModel;
import com.loanlead.services.LoanService;
import com.loanlead.services.ReportService;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.ss.util.CellUtil;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

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
    private String excelColumnsString;
    private ReportFormModel reportFormModel;

    public String getFilePath() {
        return "excel/" + this.fileName;
    }

    public void setReportFormModel(ReportFormModel reportFormModel) {
        this.reportFormModel = reportFormModel;
        this.fileName = reportFormModel.getReportType() + ".xlsx";
        if (reportFormModel.getReportType().equals("comprehensive")) {
            excelColumnsString = "Id,Customer,Stage,Status,Actioned At,User,Branch,Comment";
        } else {
            excelColumnsString = "Id,Customer,Type,Tenure,Amount,Stage,Status,User,Branch,Stage At,Created At,Comment";
        }
    }

    public ByteArrayInputStream createTable() {
        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Workbook workbook = new XSSFWorkbook();
            Sheet loanSheet = workbook.createSheet(this.reportFormModel.getReportType());
            if (reportFormModel.getReportType().equals("comprehensive")) {
                loanSheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 8));
            } else {
                loanSheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 11));
            }

            String titleContent = "";

            if (this.reportFormModel.getReportType().equalsIgnoreCase("comprehensive")) {
                titleContent = "Comprehensive Report";
            } else if (this.reportFormModel.getReportType().equalsIgnoreCase("running")) {
                titleContent = "List of loans Running Report";
            } else if (this.reportFormModel.getReportType().equalsIgnoreCase("forwarded")) {
                titleContent = "List of loans Forwarded Report";
            } else if (this.reportFormModel.getReportType().equalsIgnoreCase("rejected")) {
                titleContent = "List of loans Rejected Report";
            } else if (this.reportFormModel.getReportType().equalsIgnoreCase("deferred")) {
                titleContent = "List of loans Deferred Report";
            } else if (this.reportFormModel.getReportType().equalsIgnoreCase("disbursed")) {
                titleContent = "List of loans Disbursed Report";
            } else if (this.reportFormModel.getReportType().equalsIgnoreCase("stage")) {
                titleContent = "Loans pending by Movement Stage";
            } else if (this.reportFormModel.getReportType().equalsIgnoreCase("user")) {
                titleContent = "Loans pending by User";
            } else if (this.reportFormModel.getReportType().equalsIgnoreCase("branch")) {
                titleContent = "Loans pending by Branch";
            }

            String[] excelColumns = excelColumnsString.split(",");

            Row title = loanSheet.createRow(0);
            Cell titleCell = title.createCell(0);
            CellUtil.setAlignment(titleCell, HorizontalAlignment.CENTER);
            titleCell.setCellValue(titleContent);

            Row headersRow = loanSheet.createRow(1);

            for (int i = 0; i < excelColumns.length; i++) {
                Cell cell = headersRow.createCell(i);
                cell.setCellValue(excelColumns[i]);
            }

            this.setSheetData(loanSheet);

            workbook.write(out);
            return new ByteArrayInputStream(out.toByteArray());
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    private void setSheetData(Sheet sheet) {
        if (reportFormModel.getReportType().equals("comprehensive")) {
            List<Report> auditingDetails = reportService.findAllSortByLoanId(reportFormModel).getContent();

            for (Report auditing : auditingDetails) {
                Row row = sheet.createRow(auditingDetails.indexOf(auditing) + 2);

                row.createCell(0).setCellValue(auditing.getId());
                row.createCell(1).setCellValue(auditing.getLoan().getCustomer().getName());
                row.createCell(2).setCellValue(auditing.getActionedBy().getRoles().iterator().next().getDisplayName());
                row.createCell(3).setCellValue(auditing.getStatus());
                row.createCell(4).setCellValue(formatDateTime(auditing.getActionedAt()));
                row.createCell(5).setCellValue(auditing.getActionedBy().getFullName());
                row.createCell(6).setCellValue(auditing.getActionedBy().getBranches().iterator().next().getName());
                row.createCell(7).setCellValue(auditing.getComment());
            }
        } else {
            List<Loan> loansDetails = loanService.findLoans(reportFormModel);

            for (Loan loan : loansDetails) {
                Row row = sheet.createRow(loansDetails.indexOf(loan) + 2);

                row.createCell(0).setCellValue(loan.getId());
                row.createCell(1).setCellValue(loan.getCustomer().getName());
                row.createCell(2).setCellValue(loan.getType());
                row.createCell(3).setCellValue(loan.getTenure());
                row.createCell(4).setCellValue(amountModify(loan.getAmount().toString()));
                row.createCell(5).setCellValue(loan.getRole().getDisplayName());
                row.createCell(6).setCellValue(loan.getStatus());
                row.createCell(7).setCellValue(loan.getUser().getFullName());
                row.createCell(8).setCellValue(loan.getUser().getBranches().iterator().next().getName());
                row.createCell(9).setCellValue(formatDateTime(loan.getStagedAt()));
                row.createCell(10).setCellValue(formatDateTime(loan.getCreatedAt()));
                row.createCell(11).setCellValue(loan.getComment());
            }
        }
    }

    private String formatDateTime(LocalDateTime dateTime) {
        return ((dateTime.getDayOfMonth() < 10) ? '0' + String.valueOf(dateTime.getDayOfMonth()) : String.valueOf(dateTime.getDayOfMonth())) +
                '/' + ((dateTime.getMonth().getValue() < 10) ? '0' + (dateTime.getMonth().getValue() + 1) : (dateTime.getMonth().getValue() + 1)) +
                '/' + dateTime.getYear() +
                ' ' + ((dateTime.getHour() < 10) ? '0' + dateTime.getHour() : dateTime.getHour()) +
                ':' + ((dateTime.getMinute() < 10) ? '0' + dateTime.getMinute() : dateTime.getMinute()) +
                ':' + ((dateTime.getSecond() < 10) ? '0' + dateTime.getSecond() : dateTime.getSecond());
    }

    private String amountModify(String amount) {
        return amount.replaceAll("\\B(?=(\\d{3})+(?!\\d))", ",");
    }
}
