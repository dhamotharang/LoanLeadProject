package com.loanlead.auth;

import com.loanlead.auth.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.stream.Collectors;

@Component
public class LoggedUsersMap {
    @Autowired
    private UserService userService;

    public Map<String, User> loggedUsers;

    public LoggedUsersMap() {
        loggedUsers = new HashMap<>();
    }

    public Collection<User> getUsers() {
        return loggedUsers.values();
    }

    public void setUsers(List<User> users) {
        this.loggedUsers.clear();
        users.forEach(this::addUser);
    }

    public void addUser(User user) {
        userService.userLoggedIn(user.getEmployeeId());
        loggedUsers.put(user.getEmployeeId(), user);
    }

    public void removeUser(String username) {
        userService.userLoggedOut(username);
        loggedUsers.remove(username);
    }
}
