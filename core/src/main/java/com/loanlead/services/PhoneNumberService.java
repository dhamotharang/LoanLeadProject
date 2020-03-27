package com.loanlead.services;

import com.loanlead.models.PhoneNumber;
import com.loanlead.repositories.PhoneNumberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;

@Service
public class PhoneNumberService {
    @Autowired
    private PhoneNumberRepository phoneNumberRepository;

    public PhoneNumber find(Integer id) {
        return phoneNumberRepository.findById(id).orElse(null);
    }

    public PhoneNumber save(PhoneNumber phoneNumber) {
        return phoneNumberRepository.save(phoneNumber);
    }

    public PhoneNumber findByPhoneNumber(String phoneNumber) { return phoneNumberRepository.findByPhoneNumber(phoneNumber);}

    public PhoneNumber findByOptionalPhoneNumber(String phoneNumber) { return phoneNumberRepository.findByOptionalPhoneNumber(phoneNumber);}

    public boolean isUnique(PhoneNumber phoneNumber, BindingResult result) {
        if (phoneNumberRepository.getExisting(phoneNumber.getPhoneNumber()) != null) {
            result.rejectValue("phoneNumber", "unique.message", "Phone number is not unique");
            return false;
        }
        if (phoneNumber.getOptionalPhoneNumber() != null && !phoneNumber.getOptionalPhoneNumber().equals("") && phoneNumberRepository.getExisting(phoneNumber.getOptionalPhoneNumber()) != null) {
            result.rejectValue("optionalPhoneNumber", "unique.message", "Optional phone number is not unique");
            return false;
        }
        return true;
    }
}
