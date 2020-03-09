package com.loanlead.controller;

import com.loanlead.models.Customer;
import com.loanlead.models.Loan;
import com.loanlead.services.CustomerService;
import com.loanlead.services.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;


//TODO Remake everything
@RestController
@RequestMapping(ReportController.PREFIX + "/customers")
public class CustomerController {
    private CustomerService customerService;
    private LoanService loanService;

    @Autowired
    public CustomerController(CustomerService customerService, LoanService loanService) {
        this.customerService = customerService;
        this.loanService = loanService;
    }

    @PostMapping
    public ResponseEntity<Customer> save(@RequestBody Customer customer, Authentication authentication) {
        String documentType = customer.getDocumentType();
        String document = customer.getDocument();

//        if (!document.isEmpty() &&
//                (!customerService.isDocumentUnique(document) ||
//                ((documentType.equalsIgnoreCase("national id") && !Pattern.compile("[a-zA-Z0-9]{14}").matcher(document).matches()) ||
//                    (documentType.equalsIgnoreCase("driving permit") && !Pattern.compile("[0-9]{13}").matcher(document).matches()) ||
//                        (documentType.equalsIgnoreCase("passport") && !Pattern.compile("B[0-9]{7}").matcher(document).matches())))) {
//            if (customer.getId() != null && !customerService.getCustomerByDocument(customer.getDocument()).getId().equals(customer.getId())) {
//                bindingResult.rejectValue("document", "form.doesNotMatchPattern", "Document doesn't match pattern");
//            }
//        }
//
//        if (bindingResult.hasErrors()) {
//            return "user/customer_form";
//        }

        return ResponseEntity.of(Optional.of(this.customerService.save(customer)));
    }

    @GetMapping("/{customerId}")
    public ResponseEntity<Customer> findCustomer(@PathVariable Integer customerId) {
        return ResponseEntity.of(Optional.of(this.customerService.find(customerId)));
    }

    @DeleteMapping
    public void deleteCustomers(@RequestParam Integer[] customerIds) {
        this.customerService.deleteAllByIds(customerIds);
    }

    @GetMapping("/{customerId}/loans/count")
    public ResponseEntity<Integer> getCustomerLoansCount(@PathVariable Integer customerId) {
        return ResponseEntity.of(Optional.of(customerService.getCustomerLoansCount(customerId)));
    }

    @GetMapping("/{customerId}/loans")
    public ResponseEntity<List<Loan>> customersLoans(@PathVariable Integer customerId) {
        return ResponseEntity.of(Optional.of(loanService.findLoansByCustomerId(customerId)));
    }
}
