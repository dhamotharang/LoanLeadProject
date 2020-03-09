package com.loanlead.auth;

public enum AuthRole {
    ADMIN,
    APPLICATION,
    BRANCH_APPROVAL,
    BRANCH_EXIT,
    CREDIT_ANALYSIS,
    DISBURSEMENT,
    HEAD_OFFICE_APPROVAL,
    HEAD_OFFICE_ENTRY,
    LEGAL_REVIEW,
    LOAN_ADMINISTRATION_ENTRY,
    LOAN_ADMINISTRATION_EXIT,
    LOAN_ADMINISTRATION_VERIFICATION,
    REGIONAL_APPROVAL;

    public String role() {
        return "ROLE_" + super.name();
    }
}
