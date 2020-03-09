package com.loanlead.auth;

import com.loanlead.auth.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class SecurityService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String employeeId) {
        User user = userRepository.findUserByEmployeeId(employeeId);
        if (user != null) {
            return user;
        } else {
            throw new UsernameNotFoundException("Specified user was not found");
        }
    }
}