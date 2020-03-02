package com.loanlead.controller;

import com.loanlead.models.Customer;
import com.loanlead.services.CustomerService;
import com.loanlead.services.LoanService;
import com.loanlead.services.PhoneNumberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.regex.Pattern;


//TODO Remake everything
@Controller
public class CustomerController {
    @Autowired
    private CustomerService customerService;
    
    @Autowired
    private PhoneNumberService phoneNumberService;

    @Autowired
    private LoanService loanService;

    @GetMapping("/customers")
    public String getCustomersPage(Model model) {
        model.addAttribute("customers", customerService.findAll());

        return "user/customers";
    }
    
    @GetMapping("/customer_form")
    public String customerFormCreate(Model model) {
        model.addAttribute("customer", new Customer());

        return "user/customer_form";
    }

    @GetMapping("/customer_form/{customerId}")
    public String customerForm(@PathVariable Integer customerId, Model model) {
        Customer customerToEdit = this.customerService.find(customerId);
        model.addAttribute("customer", customerToEdit);

        return "user/customer_form";
    }

    @PostMapping("/customer")
    public String postingCustomer(@Valid Customer customer, BindingResult bindingResult, Model model, Authentication authentication) throws IOException {
        String documentType = customer.getDocumentType();
        String document = customer.getDocument();

        if (!document.isEmpty() &&
                (!customerService.isDocumentUnique(document) ||
                ((documentType.equalsIgnoreCase("national id") && !Pattern.compile("[a-zA-Z0-9]{14}").matcher(document).matches()) ||
                    (documentType.equalsIgnoreCase("driving permit") && !Pattern.compile("[0-9]{13}").matcher(document).matches()) ||
                        (documentType.equalsIgnoreCase("passport") && !Pattern.compile("B[0-9]{7}").matcher(document).matches())))) {
            if (customer.getId() != null && !customerService.getCustomerByDocument(customer.getDocument()).getId().equals(customer.getId())) {
                bindingResult.rejectValue("document", "form.doesNotMatchPattern", "Document doesn't match pattern");
            }
        }

        if (bindingResult.hasErrors()) {
            return "user/customer_form";
        }

        this.customerService.save(customer);
        model.addAttribute("customers", customerService.findAll());

        return "user/customers";
    }
    
    @GetMapping("/customer")
    public String findCustomer(@RequestParam("customerId") Integer customerId, Model model) {
        if (customerId != null) {
            Customer customer = customerService.find(customerId);

            if (customer != null) {
                model.addAttribute("customers", Collections.singletonList(customer));
            } else {
                model.addAttribute("customers", new ArrayList<Customer>());
            }
        } else {
            model.addAttribute("customers", customerService.findAll());
        }

        return "user/customers";
    }
    
    @PostMapping("/deleteCustomers")
    public String deleteCustomers(@RequestParam("deleteCustomerId") Integer[] customerIds, Model model) {
        if (customerIds.length > 1) {
            this.customerService.deleteAllByIds(customerIds);
        } else {
            this.customerService.deleteById(customerIds[0]);
        }

        model.addAttribute("customers", this.customerService.findAll());

        return "user/customers";
    }

    @GetMapping("api/customer/loans/count")
    @ResponseBody
    public Integer getCustomerLoansCount(@RequestParam("customerId") Integer customerId) {
        return customerService.getCustomerLoansCount(customerId);
    }
}
