package com.management.user.controller;

import com.management.user.entity.User;
import com.management.user.service.UserService;
import com.management.user.service.UserServiceLocal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

//Spring Boot -> DispatcherServlet

/**
 * <li>1. Otvorimo browser ... http://localhost:8080/</li>
 * <li>2. HTTP GET ->  http://localhost:8080/</lI>
 * <lI>3. UserController -> viewUsers</lI>
 * <li>4. viewUsers -> userService</li>
 * <li>5. viewUsers -> List<User>  model </li>
 * <li>6. model -> listUsers</li>
 */
@Controller
public class UserController {

    @Autowired
    private UserServiceLocal userService;

    @GetMapping("/")
    public String viewUsers(Model model){
        List<User> userList = userService.getAllUsers();
        model.addAttribute("listUsers", userList);
        return "index";
    }

    @GetMapping("/showNewUserForm")
    public String showNewUserForm(Model model){
        User user = new User();
        model.addAttribute("ourUser", user);
        return "new_user";
    }

    @PostMapping("/saveUser")
    public String saveUser(@ModelAttribute("ourUser") User user){
        userService.saveUser(user);
        return "redirect:/";
    }
}
