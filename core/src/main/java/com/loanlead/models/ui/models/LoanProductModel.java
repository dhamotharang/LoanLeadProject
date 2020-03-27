package com.loanlead.models.ui.models;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class LoanProductModel extends UiModel {
    private Integer id;
    private String loanProduct;
    private Integer maxAmount;
    private Integer maxTenure;
    private Integer timeThreshold;

    public LoanProductModel() {}

    public LoanProductModel(Integer id, String loanProduct, Integer maxAmount, Integer maxTenure, Integer timeThreshold) {
        this.id = id;
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
