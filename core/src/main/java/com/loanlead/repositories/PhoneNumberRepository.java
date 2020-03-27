package com.loanlead.repositories;

import com.loanlead.models.PhoneNumber;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PhoneNumberRepository extends JpaRepository<PhoneNumber, Integer>, JpaSpecificationExecutor {
    PhoneNumber findByPhoneNumber(@Param("optionalPhoneNumber") String phoneNumber);
    PhoneNumber findByOptionalPhoneNumber(@Param("optionalPhoneNumber") String optionalPhoneNumber);

    @Query("SELECT p FROM PhoneNumber p WHERE :phoneNumber IN (p.phoneNumber, p.optionalPhoneNumber)")
    PhoneNumber getExisting(@Param("phoneNumber") String phoneNumber);
}
