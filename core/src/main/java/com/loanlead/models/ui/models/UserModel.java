package com.loanlead.models.ui.models;

import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

public class UserModel extends UiModel {
    private Integer id;

    @NotNull(message = "Employee id must not be null")
    @NotEmpty(message = "Employee id must not be empty")
    private String employeeId;

    @NotNull(message = "Password must not be null")
    @NotEmpty(message = "Password must not be empty")
    private String password;

    @Size(min = 1, message = "Branches count must be more than 0")
    private String[] branches;

    @Size(min = 1, message = "Roles count must be more than 0")
    private String[] roles;

    @NotNull(message = "First Phone Number must not be null")
    @NotEmpty(message = "First Phone Number must not be empty")
    private String phoneNumber;
    private String optionalPhoneNumber;

    @NotNull(message = "Full name must not be null")
    @NotEmpty(message = "Full name must not be empty")
    private String fullName;

    @NotNull(message = "Email must not be null")
    @NotEmpty(message = "Email must not be empty")
    @Email(message = "Email must be valid")
    private String email;

    @DateTimeFormat(pattern = "yyyy-MM-ddTHH-mm-ss")
    private LocalDateTime createdAt;
    private String picturePath;

    public UserModel() {
        roles = new String[]{};
        branches = new String[]{};
    }

    public UserModel(Integer id, @NotNull(message = "Employee id must not be null") @NotEmpty(message = "Employee id must not be empty") String employeeId, @NotNull(message = "Password must not be null") @NotEmpty(message = "Password must not be empty") String password, @Size(min = 1, message = "Branches count must be more than 0") String[] branches, @Size(min = 1, message = "Roles count must be more than 0") String[] roles, @NotNull(message = "First Phone Number must not be null") @NotEmpty(message = "First Phone Number must not be empty") String phoneNumber, String optionalPhoneNumber, @NotNull(message = "Full name must not be null") @NotEmpty(message = "Full name must not be empty") String fullName, @NotNull(message = "Email must not be null") @NotEmpty(message = "Email must not be empty") @Email(message = "Email must be valid") String email, LocalDateTime createdAt, String picturePath) {
        this.id = id;
        this.employeeId = employeeId;
        this.password = password;
        this.branches = branches;
        this.roles = roles;
        this.phoneNumber = phoneNumber;
        this.optionalPhoneNumber = optionalPhoneNumber;
        this.fullName = fullName;
        this.email = email;
        this.createdAt = createdAt;
        this.picturePath = picturePath;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String[] getBranches() {
        return branches;
    }

    public void setBranches(String[] branches) {
        this.branches = branches;
    }

    public String[] getRoles() {
        return roles;
    }

    public void setRoles(String[] roles) {
        this.roles = roles;
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

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public String getPicturePath() {
        return picturePath;
    }

    public void setPicturePath(String picturePath) {
        this.picturePath = picturePath;
    }
}
