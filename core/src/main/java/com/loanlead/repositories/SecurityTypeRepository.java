package com.loanlead.repositories;

import com.loanlead.models.SecurityType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SecurityTypeRepository extends JpaRepository<SecurityType, Integer> {
    SecurityType findBySecurityType(String securityType);
}
