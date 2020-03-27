package com.loanlead.auth;


import com.loanlead.auth.entities.User;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpSessionBindingEvent;
import javax.servlet.http.HttpSessionBindingListener;

@Component
public class CustomHttpSessionBindingListener implements HttpSessionBindingListener {
    private UserService userService;
    private String username;
    private LoggedUsersMap loggedUsersMap;

    public CustomHttpSessionBindingListener(String username, LoggedUsersMap loggedUsersMap, UserService userService) {
        this.username = username;
        this.loggedUsersMap = loggedUsersMap;
        this.userService = userService;
    }

    public CustomHttpSessionBindingListener() {
    }

    @Override
    public void valueBound(HttpSessionBindingEvent event) {
        CustomHttpSessionBindingListener user = (CustomHttpSessionBindingListener) event.getValue();
        User userEntity = userService.findUserByEmployeeId(user.getUsername());

        if (userEntity != null) {
            loggedUsersMap.addUser(userEntity);
        }
    }

    @Override
    public void valueUnbound(HttpSessionBindingEvent event) {
        CustomHttpSessionBindingListener user = (CustomHttpSessionBindingListener) event.getValue();
        loggedUsersMap.removeUser(user.getUsername());
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public LoggedUsersMap getLoggedUsersMap() {
        return loggedUsersMap;
    }

    public void setLoggedUsersMap(LoggedUsersMap loggedUsersMap) {
        this.loggedUsersMap = loggedUsersMap;
    }

    public UserService getUserService() {
        return userService;
    }

    public void setUserService(UserService userService) {
        this.userService = userService;
    }
}
