package com.loanlead.models;

import com.loanlead.auth.entities.Role;
import com.loanlead.auth.entities.User;
import javax.persistence.Entity;
import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "reports")
public class Report extends EntityModel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String status;
    private String comment;

    @Column(name = "actioned_at")
    private LocalDateTime actionedAt;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "loan_id")
    private Loan loan;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "actioned_by")
    private User actionedBy;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "stage")
    private Role role;

    public Report() {
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

    public LocalDateTime getActionedAt() {
        return actionedAt;
    }

    public void setActionedAt(LocalDateTime createdAt) {
        this.actionedAt = createdAt;
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

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
