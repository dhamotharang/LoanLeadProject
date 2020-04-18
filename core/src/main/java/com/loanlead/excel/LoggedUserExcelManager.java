package com.loanlead.excel;

import com.loanlead.auth.UserService;
import com.loanlead.auth.entities.User;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.ss.util.CellUtil;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@Component
public class LoggedUserExcelManager {
    @Autowired
    private UserService userService;

    public String getFilePath() {
        return "excel/logged.xlsx";
    }

    public ByteArrayInputStream createTable() {
        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Workbook workbook = new XSSFWorkbook();
            Sheet loanSheet = workbook.createSheet("Logged Users");
            loanSheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 7));

            String titleContent = "Logged Users";

            String excelColumnsString = "ID,Employee Id,Name,Phone Number,Email,Branch,Log In Timestamp,Status";
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
            System.out.println("IOException in ReportsExcelManager");
            return null;
        }
    }

    private void setSheetData(Sheet sheet) {
        List<User> users = userService.getOnlineUsers(0, Integer.MAX_VALUE).getContent();

        if (!users.isEmpty()) {
            for (int i = 0; i < users.size(); i++) {
                Row row = sheet.createRow(i + 2);
                User user = users.get(i);

                row.createCell(0).setCellValue(user.getId());
                row.createCell(1).setCellValue(user.getEmployeeId());
                row.createCell(2).setCellValue(user.getFullName());
                row.createCell(3).setCellValue(user.getPhoneNumber().getPhoneNumber());
                row.createCell(4).setCellValue(user.getEmail());
                row.createCell(5).setCellValue(user.getBranches().iterator().next().getName());
                row.createCell(6).setCellValue(formatDateTime(user.getStatusChangeTimestamp()));
                row.createCell(7).setCellValue(user.getStatus());
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
