package com.loanlead.models;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.validator.constraints.Email;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.io.Serializable;
import java.time.LocalDateTime;

@javax.persistence.Entity
@Table(name = "branches")
public class Branch implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Id
    private String name;

    @NotNull(message = "This field has to be not empty")
    private String type;

    @NotNull(message = "This field has to be not empty")
    private String district;

    @NotNull(message = "This field has to be not empty")
    private String town;

    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "entity_name", insertable = false, updatable = false)
    private Entity entity;

    public Branch() {
    }

    public Branch(String name, @NotNull(message = "This field has to be not empty") String type, @NotNull(message = "This field has to be not empty") String district, @NotNull(message = "This field has to be not empty") String town, LocalDateTime createdAt, Entity entity) {
        this.name = name;
        this.type = type;
        this.district = district;
        this.town = town;
        this.createdAt = createdAt;
        this.entity = entity;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Entity getEntity() {
        return entity;
    }

    public void setEntity(Entity entity) {
        this.entity = entity;
    }
}
