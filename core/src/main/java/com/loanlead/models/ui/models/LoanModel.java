package com.loanlead.models.ui.models;

import com.loanlead.auth.entities.Role;

import java.time.LocalDateTime;
import java.util.List;

public class LoanModel extends UiModel {
    private Integer id;
    private String type;
    private Integer amount;
    private Integer tenure;
    private String status;
    private String comment;
    private Boolean typeChanged;
    private LocalDateTime receiveTimestamp;
    private LocalDateTime createdAt;
    private LocalDateTime stagedAt;
    private Integer deferStage;
    private String customer;
    private LoanProductModel loanProduct;
    private UserModel user;
    private Role role;
    private List<String> securityTypes;

    public LoanModel() {}

    public LoanModel(Integer id, String type, Integer amount, Integer tenure, String status, String comment, Boolean typeChanged, LocalDateTime receiveTimestamp, LocalDateTime createdAt, LocalDateTime stagedAt, Integer deferStage, String customer, LoanProductModel loanProduct, UserModel user, Role role, List<String> securityTypes) {
        this.id = id;
        this.type = type;
        this.amount = amount;
        this.tenure = tenure;
        this.status = status;
        this.comment = comment;
        this.typeChanged = typeChanged;
        this.receiveTimestamp = receiveTimestamp;
        this.createdAt = createdAt;
        this.stagedAt = stagedAt;
        this.deferStage = deferStage;
        this.customer = customer;
        this.loanProduct = loanProduct;
        this.user = user;
        this.role = role;
        this.securityTypes = securityTypes;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Integer getTenure() {
        return tenure;
    }

    public void setTenure(Integer tenure) {
        this.tenure = tenure;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Boolean getTypeChanged() {
        return typeChanged;
    }

    public void setTypeChanged(Boolean typeChanged) {
        this.typeChanged = typeChanged;
    }

    public LocalDateTime getReceiveTimestamp() {
        return receiveTimestamp;
    }

    public void setReceiveTimestamp(LocalDateTime receiveTimestamp) {
        this.receiveTimestamp = receiveTimestamp;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getStagedAt() {
        return stagedAt;
    }

    public void setStagedAt(LocalDateTime stagedAt) {
        this.stagedAt = stagedAt;
    }

    public Integer getDeferStage() {
        return deferStage;
    }

    public void setDeferStage(Integer deferStage) {
        this.deferStage = deferStage;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public LoanProductModel getLoanProduct() {
        return loanProduct;
    }

    public void setLoanProduct(LoanProductModel loanProduct) {
        this.loanProduct = loanProduct;
    }

    public UserModel getUser() {
        return user;
    }

    public void setUser(UserModel user) {
        this.user = user;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public List<String> getSecurityTypes() {
        return securityTypes;
    }

    public void setSecurityTypes(List<String> securityTypes) {
        this.securityTypes = securityTypes;
    }
}
