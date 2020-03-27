package com.loanlead.models;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "loan_products")
public class LoanProduct extends EntityModel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "loan_product")
    private String loanProduct;

    @NotNull(message = "Max amount must be defined")
    @Column(name = "max_amount")
    private Integer maxAmount;

    @NotNull(message = "Max tenure must be defined")
    @Column(name = "max_tenure")
    private Integer maxTenure;

    @NotNull(message = "Time threshold must be defined")
    @Column(name = "time_threshold")
    private Integer timeThreshold;

    public LoanProduct() {

    }

    public LoanProduct(@NotNull(message = "Loan product must be defined") String loanProduct, @NotNull(message = "Max amount must be defined") Integer maxAmount, @NotNull(message = "Max tenure must be defined") Integer maxTenure, @NotNull(message = "Time threshold must be defined") Integer timeThreshold) {
        this.loanProduct = loanProduct;
        this.maxAmount = maxAmount;
        this.maxTenure = maxTenure;
        this.timeThreshold = timeThreshold;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLoanProduct() {
        return loanProduct;
    }

    public void setLoanProduct(String loanProduct) {
        this.loanProduct = loanProduct;
    }

    public Integer getMaxAmount() {
        return maxAmount;
    }

    public void setMaxAmount(Integer maxAmount) {
        this.maxAmount = maxAmount;
    }

    public Integer getMaxTenure() {
        return maxTenure;
    }

    public void setMaxTenure(Integer maxTenure) {
        this.maxTenure = maxTenure;
    }

    public Integer getTimeThreshold() {
        return timeThreshold;
    }

    public void setTimeThreshold(Integer timeThreshold) {
        this.timeThreshold = timeThreshold;
    }
}
