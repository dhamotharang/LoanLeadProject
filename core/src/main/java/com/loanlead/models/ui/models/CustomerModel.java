package com.loanlead.models.ui.models;

import java.time.LocalDateTime;
import java.util.List;

public class CustomerModel extends UiModel {
    private Integer id;
    private String name;
    private String document;
    private String documentType;
    private String phoneNumber;
    private String optionalPhoneNumber;
    private LocalDateTime createdAt;
    private List<LoanModel> loans;

    public CustomerModel() {}

    public CustomerModel(Integer id, String name, String document, String documentType, String phoneNumber, String optionalPhoneNumber, LocalDateTime createdAt, List<LoanModel> loans) {
        this.id = id;
        this.name = name;
        this.document = document;
        this.documentType = documentType;
        this.phoneNumber = phoneNumber;
        this.optionalPhoneNumber = optionalPhoneNumber;
        this.createdAt = createdAt;
        this.loans = loans;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDocument() {
        return document;
    }

    public void setDocument(String document) {
        this.document = document;
    }

    public String getDocumentType() {
        return documentType;
    }

    public void setDocumentType(String documentType) {
        this.documentType = documentType;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getOptionalPhoneNumber() {
        return optionalPhoneNumber;
    }

    public void setOptionalPhoneNumber(String optionalPhoneNumber) {
        this.optionalPhoneNumber = optionalPhoneNumber;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public List<LoanModel> getLoans() {
        return loans;
    }

    public void setLoans(List<LoanModel> loans) {
        this.loans = loans;
    }
}
