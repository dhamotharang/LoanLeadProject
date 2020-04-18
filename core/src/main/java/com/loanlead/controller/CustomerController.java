package com.loanlead.controller;

import com.loanlead.auth.UserServiceImpl;
import com.loanlead.models.Customer;
import com.loanlead.models.Loan;
import com.loanlead.models.ui.ModelEntityMapper;
import com.loanlead.models.ui.models.CustomerModel;
import com.loanlead.services.CustomerService;
import com.loanlead.services.LoanService;
import com.loanlead.services.PhoneNumberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;


//TODO Remake everything
@RestController
@RequestMapping(ReportController.PREFIX + "/customers")
public class CustomerController {
    private CustomerService customerService;
    private PhoneNumberService phoneNumberService;
    private LoanService loanService;
    private ModelEntityMapper mapper;

    @Autowired
    public CustomerController(CustomerService customerService, PhoneNumberService phoneNumberService, LoanService loanService, ModelEntityMapper mapper) {
        this.customerService = customerService;
        this.phoneNumberService = phoneNumberService;
        this.loanService = loanService;
        this.mapper = mapper;
    }

    @GetMapping
    public ResponseEntity<List<CustomerModel>> findAll(@RequestParam(value = "page", required = false) Integer page, @RequestParam(value = "itemsPerPage", required = false) Integer itemsPerPage) {
        if (page == null) {
            page = UserServiceImpl.DEFAULT_PAGE;
        }

        if (itemsPerPage == null) {
            itemsPerPage = UserServiceImpl.DEFAULT_ITEMS_PER_PAGE;
        }

        List<Customer> customers = customerService.findAll(page, itemsPerPage);
        List<CustomerModel> customerModels = customers.stream().map(customer -> mapper.toModel(customer, CustomerModel.class)).collect(Collectors.toList());
        return ResponseEntity.of(Optional.of(customerModels));
    }

    @GetMapping("/count")
    public ResponseEntity<Integer> entitiesCount() {
        return ResponseEntity.of(Optional.of(customerService.findCount()));
    }

    @GetMapping("/unique")
    public ResponseEntity<Customer> isUnique(@RequestParam("fieldName") String name, @RequestParam("value") String value) {
        Customer customer;
        if (name.equals("phoneNumber")) {
            customer = customerService.findCustomerByPhoneNumber(value);
        } else if (name.equals("optionalPhoneNumber")) {
            customer = customerService.findCustomerByOptionalPhoneNumber(value);
        } else {
            customer = customerService.findByFieldName(name, value);
        }
        return ResponseEntity.of(Optional.ofNullable(customer));
    }

    @GetMapping("/all")
    public ResponseEntity<List<CustomerModel>> getAllCustomers() {
        return findAll(0, Integer.MAX_VALUE);
    }

    @PostMapping
    public ResponseEntity<CustomerModel> save(@RequestBody CustomerModel customerModel) {
        Customer customer = mapper.toEntity(customerModel, Customer.class);
        customer.setPhoneNumber(phoneNumberService.save(customer.getPhoneNumber()));
        return ResponseEntity.of(Optional.of(mapper.toModel(this.customerService.save(customer), CustomerModel.class)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerModel> findCustomer(@PathVariable Integer id) {
        return ResponseEntity.of(Optional.of(mapper.toModel(this.customerService.find(id), CustomerModel.class)));
    }

    @PostMapping("/delete")
    public void delete(@RequestParam("ids") Integer[] ids) {
        customerService.deleteAllByIds(ids);
    }
}
