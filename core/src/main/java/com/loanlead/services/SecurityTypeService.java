package com.loanlead.services;

import com.loanlead.models.SecurityType;
import com.loanlead.repositories.SecurityTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SecurityTypeService {
    @Autowired
    private SecurityTypeRepository securityTypeRepository;

    public SecurityType findBySecurityType(String securityType) {
        return this.securityTypeRepository.findBySecurityType(securityType);
    }
}
