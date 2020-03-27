package com.loanlead.models.ui.models;

import java.time.LocalDate;

public class ReportFormModel extends UiModel {
    private LocalDate startDate;
    private LocalDate endDate;
    private String reportType;
    private Integer entityId;
    private Integer itemsPerPage;
    private Integer page;

    public ReportFormModel() {

    }

    public ReportFormModel(LocalDate startDate, LocalDate endDate, String reportType, Integer entityId, Integer itemsPerPage, Integer page) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.reportType = reportType;
        this.entityId = entityId;
        this.itemsPerPage = itemsPerPage;
        this.page = page;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public String getReportType() {
        return reportType;
    }

    public void setReportType(String reportType) {
        this.reportType = reportType;
    }

    public Integer getEntityId() {
        return entityId;
    }

    public void setEntityId(Integer entityId) {
        this.entityId = entityId;
    }

    public Integer getItemsPerPage() {
        return itemsPerPage;
    }

    public void setItemsPerPage(Integer itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
    }

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }
}
