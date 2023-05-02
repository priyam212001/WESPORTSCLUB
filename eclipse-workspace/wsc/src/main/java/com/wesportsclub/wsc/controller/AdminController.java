package com.wesportsclub.wsc.controller;

import com.wesportsclub.wsc.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000/")


public class AdminController {
	 @Autowired
	    private AdminService adminService;
	    @PostMapping("/login")
	    public String login(@RequestParam(name = "email") String username,@RequestParam(name = "password") String password){
	    	int id = adminService.login_id(username, password);
	        return "{'id':" + id + ", 'role' : 'admin'}";
	    }

}
