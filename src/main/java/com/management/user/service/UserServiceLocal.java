package com.management.user.service;

import com.management.user.entity.User;

import java.util.List;

public interface UserServiceLocal {

    List<User> getAllUsers();

    void saveUser(User user);

}
