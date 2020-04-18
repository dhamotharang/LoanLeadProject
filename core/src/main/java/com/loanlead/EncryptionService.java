package com.loanlead;

import com.loanlead.auth.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class EncryptionService {
    private UserService userService;

    @Autowired
    EncryptionService(UserService userService) {
        this.userService = userService;
    }

    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    }
}
