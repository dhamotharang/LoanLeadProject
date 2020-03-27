package com.loanlead.models.ui.models;

import java.time.LocalDateTime;

public class BranchModel extends UiModel {
    private Integer id;
    private String entityName;
    private String name;
    private String type;
    private String district;
    private String town;
    private LocalDateTime createdAt;

    public BranchModel() {}

    public BranchModel(Integer id, String entityName, String name, String type, String district, String town, LocalDateTime createdAt) {
        this.id = id;
        this.entityName = entityName;
        this.name = name;
        this.type = type;
        this.district = district;
        this.town = town;
        this.createdAt = createdAt;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEntityName() {
        return entityName;
    }

    public void setEntityName(String entityName) {
        this.entityName = entityName;
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
}
