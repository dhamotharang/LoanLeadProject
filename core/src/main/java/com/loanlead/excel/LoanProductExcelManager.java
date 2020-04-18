package com.loanlead.excel;

import com.loanlead.models.LoanProduct;
import com.loanlead.services.LoanProductService;
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
import java.util.List;

@Component
public class LoanProductExcelManager {
    @Autowired
    private LoanProductService loanProductService;

    @Autowired
    private Environment env;

    private String fileName = "loanProductDetails.xlsx";
    private static LoanProductExcelManager classInstance;
    private String[] excelColumns;
    private String excelColumnsString;

    public static LoanProductExcelManager getInstance() {
        if (LoanProductExcelManager.classInstance == null) {
            LoanProductExcelManager.classInstance = new LoanProductExcelManager();
        }

        return LoanProductExcelManager.classInstance;
    }

    private LoanProductExcelManager() {
        this.excelColumnsString = "ID,Type,Amount,Tenure,Time Threshold";
    }

    public String getFilePath() {
        return this.env.getProperty("loanlead.excel.location") + "/" + this.fileName;
    }

    public ByteArrayInputStream createTable() {
        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Workbook workbook = new XSSFWorkbook();
            Sheet loanSheet = workbook.createSheet("Loan Thresholds");
            loanSheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 5));

            String titleContent = "Loan Thresholds";

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
            e.printStackTrace();
            return null;
        }
    }

    private void setSheetData(Sheet sheet) {
        List<LoanProduct> loanProducts = loanProductService.findAll();

        if (!loanProducts.isEmpty()) {
            for (int i = 0; i < loanProducts.size(); i++) {
                Row row = sheet.createRow(i + 2);
                LoanProduct loanProduct = loanProducts.get(i);

                row.createCell(0).setCellValue(loanProduct.getId());
                row.createCell(1).setCellValue(loanProduct.getLoanProduct());
                row.createCell(1).setCellValue(amountModify(loanProduct.getMaxAmount().toString()));
                row.createCell(2).setCellValue(loanProduct.getMaxTenure());
                row.createCell(4).setCellValue(loanProduct.getTimeThreshold());
            }
        }
    }

    private String amountModify(String amount) {
        return amount.replaceAll("\\B(?=(\\d{3})+(?!\\d))", ",");
    }
}
