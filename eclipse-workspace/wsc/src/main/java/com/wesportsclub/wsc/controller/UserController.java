package com.wesportsclub.wsc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.wesportsclub.wsc.dto.TrainerLoginMesage;
import com.wesportsclub.wsc.dto.UserLoginDTO;
import com.wesportsclub.wsc.dto.UserRegisDTO;
import com.wesportsclub.wsc.model.User;
import com.wesportsclub.wsc.repository.UserRepository;
import com.wesportsclub.wsc.service.UserService;

@RestController

@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserService userservice;
	
	@PostMapping("/usersave")
    public String saveUser(@RequestBody UserRegisDTO userDTO) {
    	String id=userservice.addUser(userDTO);
    	return id;
    }
	
	@PostMapping(value="/userlogin")
	public ResponseEntity<?> UserLogin(@RequestBody UserLoginDTO userloginDTO){
		TrainerLoginMesage loginMessage=userservice.loginUser(userloginDTO);
		return ResponseEntity.ok(loginMessage);
	}
	
	
	@Autowired
	private UserRepository  userrepo;
	
	@GetMapping("/usergetall")
    public List<User> list(){
        return userrepo.findAll();
    }
}
