package com.loanlead.models;

import com.loanlead.auth.entities.Role;
import com.loanlead.auth.entities.User;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Entity;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "loans")
public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer amount;
    private Integer tenure;
    private String status;
    private String comment;

    @Column(name = "type_changed")
    private Boolean typeChanged;

    @Column(name = "receive_timestamp")
    private LocalDateTime receiveTimestamp;

    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "defer_stage")
    private Integer deferStage;

    @Column(name = "staged_at")
    private LocalDateTime stagedAt;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "customer_id", insertable = false, updatable = false)
    private Customer customer;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "loan_product", insertable = false, updatable = false)
    private LoanProduct loanProduct;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "actioned_by", insertable = false, updatable = false)
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "stage", insertable = false, updatable = false)
    private Role role;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "loans_security_types",
            joinColumns = @JoinColumn(name = "loan_id"),
            inverseJoinColumns = @JoinColumn(name = "security_type_id"))
    private List<SecurityType> securityTypes;

    public Loan() {}

    public Loan(Integer amount, Integer tenure, String status, String comment, Boolean typeChanged, LocalDateTime receiveTimestamp, LocalDateTime createdAt, Integer deferStage, LocalDateTime stagedAt, Customer customer, LoanProduct loanProduct, User user, Role role, List<SecurityType> securityTypes) {
        this.amount = amount;
        this.tenure = tenure;
        this.status = status;
        this.comment = comment;
        this.typeChanged = typeChanged;
        this.receiveTimestamp = receiveTimestamp;
        this.createdAt = createdAt;
        this.deferStage = deferStage;
        this.stagedAt = stagedAt;
        this.customer = customer;
        this.loanProduct = loanProduct;
        this.user = user;
        this.role = role;
        this.securityTypes = securityTypes;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Integer getTenure() {
        return tenure;
    }

    public void setTenure(Integer tenure) {
        this.tenure = tenure;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Boolean getTypeChanged() {
        return typeChanged;
    }

    public void setTypeChanged(Boolean typeChanged) {
        this.typeChanged = typeChanged;
    }

    public LocalDateTime getReceiveTimestamp() {
        return receiveTimestamp;
    }

    public void setReceiveTimestamp(LocalDateTime receiveTimestamp) {
        this.receiveTimestamp = receiveTimestamp;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Integer getDeferStage() {
        return deferStage;
    }

    public void setDeferStage(Integer deferStage) {
        this.deferStage = deferStage;
    }

    public LocalDateTime getStagedAt() {
        return stagedAt;
    }

    public void setStagedAt(LocalDateTime stagedAt) {
        this.stagedAt = stagedAt;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public LoanProduct getLoanProduct() {
        return loanProduct;
    }

    public void setLoanProduct(LoanProduct loanProduct) {
        this.loanProduct = loanProduct;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public List<SecurityType> getSecurityTypes() {
        return securityTypes;
    }

    public void setSecurityTypes(List<SecurityType> securityTypes) {
        this.securityTypes = securityTypes;
    }
}
