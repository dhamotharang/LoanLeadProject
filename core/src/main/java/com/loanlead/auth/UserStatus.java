package com.loanlead.auth;

public enum UserStatus {
    ONLINE("online"), OFFLINE("offline");
    private String value;

    UserStatus(String value) {
        this.value = value;
    }

    public String value() {
        return value;
    }
}
