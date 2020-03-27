package com.loanlead.models;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.validator.constraints.Email;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.io.Serializable;
import java.time.LocalDateTime;

@javax.persistence.Entity
@Table(name = "entities")
public class Entity extends EntityModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @Column(name = "short_name")
    @NotNull(message = "This field has to be not empty")
    private String shortName;

    @Column(name = "box_number")
    @NotNull(message = "This field has to be not empty")
    private String boxNumber;

    @Column(name = "plot_number")
    @NotNull(message = "This field has to be not empty")
    private String plotNumber;

    @Column(name = "branches_number")
    @NotNull(message = "This field has to be not empty")
    @Pattern(regexp = "\\d+", message = "Phone number must be valid")
    private String branchesNumber;
    private String description;

    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    public Entity() {

    }

    public Entity(String name, @NotNull(message = "This field has to be not empty") String shortName, @NotNull(message = "This field has to be not empty") String boxNumber, @NotNull(message = "This field has to be not empty") String plotNumber, @NotNull(message = "This field has to be not empty") @Pattern(regexp = "\\d+", message = "Phone number must be valid") String branchesNumber, @NotNull(message = "This field has to be not empty") @Pattern(regexp = "\\w*", message = "Description must be valid") String description, LocalDateTime createdAt) {
        this.name = name;
        this.shortName = shortName;
        this.boxNumber = boxNumber;
        this.plotNumber = plotNumber;
        this.branchesNumber = branchesNumber;
        this.description = description;
        this.createdAt = createdAt;
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

    public String getShortName() {
        return shortName;
    }

    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    public String getBoxNumber() {
        return boxNumber;
    }

    public void setBoxNumber(String boxNumber) {
        this.boxNumber = boxNumber;
    }

    public String getPlotNumber() {
        return plotNumber;
    }

    public void setPlotNumber(String plotNumber) {
        this.plotNumber = plotNumber;
    }

    public String getBranchesNumber() {
        return branchesNumber;
    }

    public void setBranchesNumber(String branchesNumber) {
        this.branchesNumber = branchesNumber;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
