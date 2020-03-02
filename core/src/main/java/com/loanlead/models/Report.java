package com.loanlead.models;

import com.loanlead.auth.entities.User;
import javax.persistence.Entity;
import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "reports")
public class Report {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String status;
    private String comment;

    @Column(name = "actioned_at")
    private LocalDateTime createdAt;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "loan_id", insertable = false, updatable = false)
    private Loan loan;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "actioned_by", insertable = false, updatable = false)
    private User actionedBy;

    public Report() {

    }

    public Report(String status, String comment, LocalDateTime createdAt, Loan loan, User actionedBy) {
        this.status = status;
        this.comment = comment;
        this.createdAt = createdAt;
        this.loan = loan;
        this.actionedBy = actionedBy;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Loan getLoan() {
        return loan;
    }

    public void setLoan(Loan loan) {
        this.loan = loan;
    }

    public User getActionedBy() {
        return actionedBy;
    }

    public void setActionedBy(User actionedBy) {
        this.actionedBy = actionedBy;
    }
}
