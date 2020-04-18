package com.loanlead.repositories;

import com.loanlead.models.Customer;
import com.loanlead.models.Loan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer>, JpaSpecificationExecutor {
    @Modifying
    @Query("DELETE FROM Customer b WHERE b.id IN :ids")
    @Transactional
    void deleteCustomersByIds(@Param("ids") Set<Integer> ids);

    @Query("SELECT c FROM Customer c ORDER BY c.createdAt DESC")
    Page<Customer> findAll(Pageable pageable);

    @Query("SELECT c FROM Customer c WHERE c.document = :document")
    public Customer findByDocument(@Param("document") String document);

    @Query("SELECT c FROM Customer c WHERE c.phoneNumber = :phoneNumber")
    public Customer findByPhoneNumber(@Param("phoneNumber") String phoneNumber);

    @Query("SELECT c FROM Customer c WHERE c.document = :document")
    public Customer findCustomerByDocument(@Param("document") String document);

    @Query("SELECT COUNT(c) FROM Customer c")
    public Integer findCount();

    @Query("SELECT c FROM Customer c WHERE c.phoneNumber.id IN (SELECT p.id FROM PhoneNumber p WHERE :phoneNumber IN (p.phoneNumber, p.optionalPhoneNumber))")
    public Customer findCustomerByPhoneNumber(@Param("phoneNumber") String phoneNumber);
}
