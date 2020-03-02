package com.loanlead.repositories;

import com.loanlead.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    @Modifying
    @Query("DELETE FROM Customer b WHERE b.id IN :ids")
    @Transactional
    void deleteCustomersByIds(@Param("ids") Set<Integer> ids);

    @Query("SELECT c FROM Customer c WHERE c.document = :document")
    public Customer findByDocument(@Param("document") String document);

    @Query("SELECT c FROM Customer c WHERE c.phoneNumber = :phoneNumber")
    public Customer findByPhoneNumber(@Param("phoneNumber") String phoneNumber);

    @Query("SELECT COUNT(l) FROM Loan l WHERE l.customer = :customerId")
    public Integer findCustomerLoansCount(@Param("customerId") Integer customerId);

    @Query("SELECT c FROM Customer c WHERE c.document = :document")
    public Customer findCustomerByDocument(@Param("document") String document);
}
