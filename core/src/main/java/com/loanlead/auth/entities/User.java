package com.loanlead.auth.entities;

import com.loanlead.models.Branch;
import com.loanlead.models.PhoneNumber;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.validator.constraints.Email;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Set;

@Entity
@Table(name = "users")
public class User implements UserDetails {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Id
    @Column(name = "employee_id")
    private String employeeId;

    @NotNull(message = "Password is empty")
    private String password;

    @Column(name = "full_name")
    private String fullName;

    @Email(message = "Email must be valid")
    private String email;

    @Column(name = "picture_path")
    private String picturePath;

    private String status;

    @Column(name = "newly_created")
    private boolean newlyCreated;

    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "status_change_timestamp")
    private LocalDateTime statusChangeTimestamp;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "phone_numbers_id", insertable = false, updatable = false)
    private PhoneNumber phoneNumber;

    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinTable(
            name = "users_branches",
            joinColumns = @JoinColumn(name = "employee_id"),
            inverseJoinColumns = @JoinColumn(name = "branch_name"))
    private Set<Branch> branches;

    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinTable(
            name = "users_roles",
            joinColumns = @JoinColumn(name = "employee_id"),
            inverseJoinColumns = @JoinColumn(name = "role_name"))
    private Set<Role> roles;

    public User() {

    }

    public User(Integer id, String employeeId, @NotNull(message = "Password is empty") String password, String fullName, @Email(message = "Email must be valid") String email, String picturePath, String status, boolean newlyCreated, LocalDateTime createdAt, LocalDateTime updatedAt, LocalDateTime statusChangeTimestamp, PhoneNumber phoneNumber, Set<Branch> branches, Set<Role> roles) {
        this.id = id;
        this.employeeId = employeeId;
        this.password = password;
        this.fullName = fullName;
        this.email = email;
        this.picturePath = picturePath;
        this.status = status;
        this.newlyCreated = newlyCreated;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.statusChangeTimestamp = statusChangeTimestamp;
        this.phoneNumber = phoneNumber;
        this.branches = branches;
        this.roles = roles;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles;
    }

    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return employeeId;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPicturePath() {
        return picturePath;
    }

    public void setPicturePath(String picturePath) {
        this.picturePath = picturePath;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public boolean isNewlyCreated() {
        return newlyCreated;
    }

    public void setNewlyCreated(boolean newlyCreated) {
        this.newlyCreated = newlyCreated;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public LocalDateTime getStatusChangeTimestamp() {
        return statusChangeTimestamp;
    }

    public void setStatusChangeTimestamp(LocalDateTime statusChangeTimestamp) {
        this.statusChangeTimestamp = statusChangeTimestamp;
    }

    public PhoneNumber getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(PhoneNumber phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Set<Branch> getBranches() {
        return branches;
    }

    public void setBranches(Set<Branch> branches) {
        this.branches = branches;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public static UserBuilder builder(){
        return new UserBuilder();
    }

    public static class UserBuilder {
        private Integer id;
        private String employeeId;
        private String password;
        private String fullName;
        private String email;
        private String picturePath;
        private String status;
        private boolean newlyCreated;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private LocalDateTime statusChangeTimestamp;
        private PhoneNumber phoneNumber;
        private Set<Branch> branches;
        private Set<Role> roles;

        public UserBuilder id(Integer id) {
            this.id = id;
            return this;
        }

        public UserBuilder employeeId(String employeeId) {
            this.employeeId = employeeId;
            return this;
        }

        public UserBuilder password(String password) {
            this.password = password;
            return this;
        }

        public UserBuilder fullName(String fullName) {
            this.fullName = fullName;
            return this;
        }

        public UserBuilder email(String email) {
            this.email = email;
            return this;
        }

        public UserBuilder picturePath(String picturePath) {
            this.picturePath = picturePath;
            return this;
        }

        public UserBuilder status(String status) {
            this.status = status;
            return this;
        }

        public UserBuilder newlyCreated(boolean newlyCreated) {
            this.newlyCreated = newlyCreated;
            return this;
        }

        public UserBuilder createdAt(LocalDateTime createdAt) {
            this.createdAt = createdAt;
            return this;
        }

        public UserBuilder updatedAt(LocalDateTime updatedAt) {
            this.updatedAt = updatedAt;
            return this;
        }

        public UserBuilder statusChangeTimestamp(LocalDateTime statusChangeTimestamp) {
            this.statusChangeTimestamp = statusChangeTimestamp;
            return this;
        }

        public UserBuilder phoneNumber(PhoneNumber phoneNumber) {
            this.phoneNumber = phoneNumber;
            return this;
        }

        public UserBuilder branches(Set<Branch> branches) {
            this.branches = branches;
            return this;
        }

        public UserBuilder roles(Set<Role> roles) {
            this.roles = roles;
            return this;
        }

        public User build() {
            return new User(id, employeeId, password, fullName, email, picturePath, status, newlyCreated, createdAt, updatedAt, statusChangeTimestamp, phoneNumber, branches, roles);
        }
    }
}