package com.loanlead.models;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Entity;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "document_type")
    private String documentType;

    @NotNull(message = "This field has to be not empty")
    private String document;

    @NotNull(message = "This field has to be not empty")
    private String name;

    @NotNull(message = "This field has to be not empty")
    private String email;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "phone_numbers_id", insertable = false, updatable = false)
    private PhoneNumber phoneNumber;

    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    public Customer() {

    }

    public Customer(String documentType, @NotNull(message = "This field has to be not empty") String document, @NotNull(message = "This field has to be not empty") String name, @NotNull(message = "This field has to be not empty") String email, PhoneNumber phoneNumber, LocalDateTime createdAt) {
        this.documentType = documentType;
        this.document = document;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.createdAt = createdAt;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDocumentType() {
        return documentType;
    }

    public void setDocumentType(String documentType) {
        this.documentType = documentType;
    }

    public String getDocument() {
        return document;
    }

    public void setDocument(String document) {
        this.document = document;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public PhoneNumber getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(PhoneNumber phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
