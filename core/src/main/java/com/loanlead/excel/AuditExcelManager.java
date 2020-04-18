package com.loanlead.excel;

import com.loanlead.models.Report;
import com.loanlead.services.ReportService;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.ss.util.CellUtil;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;


// TODO Remake getting data
@Component
public class AuditExcelManager {
    @Autowired
    private ReportService reportService;

    @Autowired
    private Environment env;

    private String fileName = "auditDetails.xlsx";
    private static AuditExcelManager classInstance;
    private String[] excelColumns;
    private String excelColumnsString;
    private int loanCode;
    private int page;
    private int itemsPerPage;

    public static AuditExcelManager getInstance() {
        if (AuditExcelManager.classInstance == null) {
            AuditExcelManager.classInstance = new AuditExcelManager();
        }

        return AuditExcelManager.classInstance;
    }

    private AuditExcelManager() {
        this.excelColumnsString = "ID,Branch,Status,Date,User,Branch,Comment";
    }

    public String getFilePath() {
        return "excel/" + this.fileName;
    }

    public void setLoanCode(int loanCode) {
        this.loanCode = loanCode;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public void setItemsPerPage(int itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
    }

    public ByteArrayInputStream createTable() {
        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Workbook workbook = new XSSFWorkbook();
            Sheet loanSheet = workbook.createSheet("Audit Details");
            loanSheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 6));

            String titleContent = "Auditing";

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
            return new ByteArrayInputStream(out.toByteArray());
        } catch (IOException e) {
            System.out.println("IOException in ReportsExcelManager");
            return null;
        }
    }

    private void setSheetData(Sheet sheet) {
        List<Report> auditings = reportService.findAllByLoanId(loanCode, page, itemsPerPage).getContent();

        if (!auditings.isEmpty()) {
            for (int i = 0; i < auditings.size(); i++) {
                Row row = sheet.createRow(i + 2);
                Report auditing = auditings.get(i);

                row.createCell(0).setCellValue(auditing.getId());
                row.createCell(1).setCellValue(auditing.getRole().getDisplayName());
                row.createCell(2).setCellValue(auditing.getStatus());
                row.createCell(3).setCellValue(formatDateTime(auditing.getActionedAt()));
                row.createCell(4).setCellValue(auditing.getActionedBy().getBranches().iterator().next().getName());
                row.createCell(5).setCellValue(auditing.getActionedBy().getFullName());
                row.createCell(6).setCellValue(auditing.getComment());
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
}
