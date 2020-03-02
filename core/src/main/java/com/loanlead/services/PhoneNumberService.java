package com.loanlead.services;

import com.loanlead.repositories.PhoneNumberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhoneNumberService {
    @Autowired
    private PhoneNumberRepository phoneNumberRepository;

    public boolean isUnique(String phoneNumber) {
        return phoneNumberRepository.getExisting(phoneNumber) == null;
    }
}
