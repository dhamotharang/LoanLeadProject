package com.loanlead.models.ui;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class UserModel {
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
    private String firstPhoneNumber;

    @NotNull(message = "Second Phone Number must not be null")
    @NotEmpty(message = "Second Phone Number must not be empty")
    private String secondPhoneNumber;

    @NotNull(message = "Full name must not be null")
    @NotEmpty(message = "Full name must not be empty")
    private String fullName;

    @NotNull(message = "Email must not be null")
    @NotEmpty(message = "Email must not be empty")
    @Email(message = "Email must be valid")
    private String email;

    public UserModel(String employeeId, String password, String[] branches, String[] roles, String firstPhoneNumber, String secondPhoneNumber, String fullName, String email) {
        this.employeeId = employeeId;
        this.password = password;
        this.branches = branches;
        this.roles = roles;
        this.firstPhoneNumber = firstPhoneNumber;
        this.secondPhoneNumber = secondPhoneNumber;
        this.fullName = fullName;
        this.email = email;
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

    public String getFirstPhoneNumber() {
        return firstPhoneNumber;
    }

    public void setFirstPhoneNumber(String firstPhoneNumber) {
        this.firstPhoneNumber = firstPhoneNumber;
    }

    public String getSecondPhoneNumber() {
        return secondPhoneNumber;
    }

    public void setSecondPhoneNumber(String secondPhoneNumber) {
        this.secondPhoneNumber = secondPhoneNumber;
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
}
