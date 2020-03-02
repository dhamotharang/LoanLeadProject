package com.loanlead.excel;

import com.loanlead.auth.UserService;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.ss.util.CellUtil;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

// TODO Remake everything
@Component
public class UserExcelManager {
    @Autowired
    private UserService userService;

    @Autowired
    private Environment env;

    private String fileName = "userDetails.xlsx";
    private static UserExcelManager classInstance;
    private String[] excelColumns;
    private String excelColumnsString;
    private int loanCode;

    public static UserExcelManager getInstance() {
        if (UserExcelManager.classInstance == null) {
            UserExcelManager.classInstance = new UserExcelManager();
        }

        return UserExcelManager.classInstance;
    }

    private UserExcelManager() {
        this.excelColumnsString = "ID,Username,Name,Contact Nr. 1,Email";
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
            Sheet loanSheet = workbook.createSheet("Users");
            loanSheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 4));

            String titleContent = "Users";

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
//        List<User> users = userService.findAll();
//
//        if (!users.isEmpty()) {
//            for (int i = 0; i < users.size(); i++) {
//                Row row = sheet.createRow(i + 2);
//                User user = users.get(i);
//
//                row.createCell(0).setCellValue(user.getId());
//                row.createCell(1).setCellValue(user.getUsername());
//                row.createCell(2).setCellValue(user.getFullName());
//                row.createCell(3).setCellValue(user.getPhoneNumber1());
//                row.createCell(4).setCellValue(user.getEmail());
//            }
//        }
    }
}
