package com.loanlead.models;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "security_types")
public class SecurityType extends EntityModel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull(message = "Security type must be defined")
    @Column(name = "security_type")
    private String securityType;

    public SecurityType() {}

    public SecurityType(@NotNull(message = "Security type must be defined") String securityType) {
        this.securityType = securityType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSecurityType() {
        return securityType;
    }

    public void setSecurityType(String securityType) {
        this.securityType = securityType;
    }
}
