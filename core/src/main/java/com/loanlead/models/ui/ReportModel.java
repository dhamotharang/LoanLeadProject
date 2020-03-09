package com.loanlead.models.ui;

import java.time.LocalDateTime;

public class ReportModel {
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private Integer entityId;
    private Integer itemsPerPage;
    private Integer page;

    public ReportModel() {

    }

    public ReportModel(LocalDateTime startDate, LocalDateTime endDate, Integer entityId, Integer itemsPerPage, Integer page) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.entityId = entityId;
        this.itemsPerPage = itemsPerPage;
        this.page = page;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
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

    public ReportModel setDefaultStartDate(LocalDateTime startDate) {
        if (this.startDate == null) {
            setStartDate(startDate);
        }
        return this;
    }

    public ReportModel setDefaultEndDate(LocalDateTime endDate) {
        if (this.endDate == null) {
            setEndDate(endDate);
        }
        return this;
    }

    public ReportModel setDefaultEntityId(Integer entityId) {
        if (this.entityId == null) {
            setEntityId(entityId);
        }
        return this;
    }

    public ReportModel setDefaultItemsPerPage(Integer itemsPerPage) {
        if (this.itemsPerPage == null) {
            setItemsPerPage(itemsPerPage);
        }
        return this;
    }

    public ReportModel setDefaultPage(Integer page) {
        if (this.page == null) {
            setPage(page);
        }
        return this;
    }
}
