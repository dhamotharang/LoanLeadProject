package com.loanlead.repositories;

import com.loanlead.models.PhoneNumber;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PhoneNumberRepository extends JpaRepository<PhoneNumber, Integer> {
    @Query("SELECT p FROM PhoneNumber p WHERE :phoneNumber IN (p.firstPhoneNumber, p.secondPhoneNumber)")
    PhoneNumber getExisting(@Param("phoneNumber") String phoneNumber);
}
