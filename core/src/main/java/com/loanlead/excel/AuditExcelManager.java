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

import java.io.FileOutputStream;
import java.io.IOException;


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

    public static AuditExcelManager getInstance() {
        if (AuditExcelManager.classInstance == null) {
            AuditExcelManager.classInstance = new AuditExcelManager();
        }

        return AuditExcelManager.classInstance;
    }

    private AuditExcelManager() {
        this.excelColumnsString = "ID,Branch,Status,Date,Actioned By,Comment";
    }

    public String getFilePath() {
        return this.env.getProperty("loanlead.excel.location") + "/" + this.fileName;
    }

    public void setLoanCode(int loanCode) {
        this.loanCode = loanCode;
    }

    public void createTable() {
        try (FileOutputStream out = new FileOutputStream(this.env.getProperty("loanlead.excel.location") + "/" + this.fileName)) {
            Workbook workbook = new XSSFWorkbook();
            Sheet loanSheet = workbook.createSheet("Audit Details");
            loanSheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 5));

            String titleContent = "Audit Details";

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
            System.out.println("IOException in ReportsExcelManager");
        }
    }

    private void setSheetData(Sheet sheet) {
        Page<Report> auditings = reportService.findAllByLoanId(loanCode, 1, 1000);

//        if (!auditings.isEmpty()) {
//            for (int i = 0; i < auditings.getSize(); i++) {
//                Row row = sheet.createRow(i + 2);
//                Report auditing = auditings.get(i);
//
//                row.createCell(0).setCellValue(auditing.getId());
//                row.createCell(1).setCellValue(auditing.getRole().getDisplayName());
//                row.createCell(2).setCellValue(auditing.getStatus());
//                row.createCell(3).setCellValue(auditing.getCreatedAt().toString().replace('T', ' '));
//                row.createCell(4).setCellValue(auditing.getUser().getBranch().getName());
//                row.createCell(5).setCellValue(auditing.getUser().getFullName());
//                row.createCell(6).setCellValue(auditing.getComment());
//            }
//        }
    }
}
