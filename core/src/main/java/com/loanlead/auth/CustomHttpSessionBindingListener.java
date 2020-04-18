package com.loanlead.auth;


import com.loanlead.auth.entities.User;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpSessionBindingEvent;
import javax.servlet.http.HttpSessionBindingListener;

public class CustomHttpSessionBindingListener implements HttpSessionBindingListener {
    private UserService userService;
    private String username;

    public CustomHttpSessionBindingListener(String username, UserService userService) {
        this.username = username;
        this.userService = userService;
    }

    @Override
    public void valueBound(HttpSessionBindingEvent event) {
        CustomHttpSessionBindingListener user = (CustomHttpSessionBindingListener) event.getValue();
        User userEntity = userService.findUserByEmployeeId(user.getUsername());

        if (userEntity != null) {
            userService.userLoggedIn(userEntity.getEmployeeId());
        }
    }

    @Override
    public void valueUnbound(HttpSessionBindingEvent event) {
        CustomHttpSessionBindingListener user = (CustomHttpSessionBindingListener) event.getValue();
        User userEntity = userService.findUserByEmployeeId(user.getUsername());

        if (userEntity != null) {
            userService.userLoggedOut(userEntity.getEmployeeId());
        }
    }

    public String getUsername() {
        return username;
    }
}
