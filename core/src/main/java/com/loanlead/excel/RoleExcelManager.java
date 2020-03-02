package com.loanlead.excel;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.ss.util.CellUtil;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

@Component
public class RoleExcelManager {
    @Autowired
    private Environment env;

    private String fileName = "roleDetails.xlsx";
    private static RoleExcelManager classInstance;
    private String[] excelColumns;
    private String excelColumnsString;
    private int loanCode;

    public static RoleExcelManager getInstance() {
        if (RoleExcelManager.classInstance == null) {
            RoleExcelManager.classInstance = new RoleExcelManager();
        }

        return RoleExcelManager.classInstance;
    }

    private RoleExcelManager() {
        this.excelColumnsString = "ID,Display Name,Enable sending sms";
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
            Sheet loanSheet = workbook.createSheet("Roles");
            loanSheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 2));

            String titleContent = "Roles";

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
//        List<Role> roles = roleService.findAll();
//
//        if (!roles.isEmpty()) {
//            for (int i = 0; i < roles.size(); i++) {
//                Row row = sheet.createRow(i + 2);
//                Role role = roles.get(i);
//
//                row.createCell(0).setCellValue(role.getId());
//                row.createCell(1).setCellValue(role.getDisplayName());
//                row.createCell(4).setCellValue(role.getSendingSms());
//            }
//        }
    }
}
