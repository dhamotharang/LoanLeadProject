package com.loanlead.services;

import com.loanlead.auth.UserService;
import com.loanlead.auth.UserServiceImpl;
import com.loanlead.models.Customer;
import com.loanlead.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public List<Customer> findAll() {
        return findAll(UserServiceImpl.DEFAULT_PAGE, UserServiceImpl.DEFAULT_ITEMS_PER_PAGE);
    }

    public List<Customer> findAll(Integer page, Integer itemsPerPage) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        return customerRepository.findAll(pageable).getContent();
    }

    public Customer find(int id) {
        return customerRepository.findById(id).orElse(null);
    }

    public Integer getCustomerLoansCount(Integer customerId) {
        return customerRepository.findCustomerLoansCount(customerId);
    }

    public Customer getCustomerByDocument(String document) {
        return customerRepository.findCustomerByDocument(document);
    }

    public Customer save(Customer customer) {
        return this.customerRepository.save(customer);
    }

    public void delete(Customer customer) {
        this.customerRepository.delete(customer);
    }

    public void deleteById(int id) {
        this.customerRepository.deleteById(id);
    }

    public void deleteAllByIds(Integer[] ids) {
        this.customerRepository.deleteCustomersByIds(new HashSet<>(Arrays.asList(ids)));
    }

    public boolean isDocumentUnique(String document) {
        return customerRepository.findByDocument(document) == null;
    }
    
    public boolean isUniquePhoneNumber(String phoneNumber) {
        return customerRepository.findByPhoneNumber(phoneNumber) == null;
    }
}
