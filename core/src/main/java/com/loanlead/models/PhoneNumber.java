package com.loanlead.models;

import javax.persistence.*;
import javax.persistence.Entity;

@Entity
@Table(name = "phone_numbers")
public class PhoneNumber extends EntityModel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "optional_phone_number")
    private String optionalPhoneNumber;

    public PhoneNumber() {
    }

    public PhoneNumber(String phoneNumber, String optionalPhoneNumber) {
        this.phoneNumber = phoneNumber;
        this.optionalPhoneNumber = optionalPhoneNumber;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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
}
