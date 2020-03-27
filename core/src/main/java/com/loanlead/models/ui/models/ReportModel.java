package com.loanlead.models.ui.models;

import java.time.LocalDateTime;

public class ReportModel extends UiModel {
    private Integer id;
    private String customer;
    private String stage;
    private String status;
    private LocalDateTime actionedAt;
    private String user;
    private String[] branches;
    private String comment;

    public ReportModel() {

    }

    public ReportModel(Integer id, String customer, String stage, String status, LocalDateTime actionedAt, String user, String[] branches, String comment) {
        this.id = id;
        this.customer = customer;
        this.stage = stage;
        this.status = status;
        this.actionedAt = actionedAt;
        this.user = user;
        this.branches = branches;
        this.comment = comment;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public String getStage() {
        return stage;
    }

    public void setStage(String stage) {
        this.stage = stage;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getActionedAt() {
        return actionedAt;
    }

    public void setActionedAt(LocalDateTime actionedAt) {
        this.actionedAt = actionedAt;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String[] getBranches() {
        return branches;
    }

    public void setBranches(String[] branches) {
        this.branches = branches;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
