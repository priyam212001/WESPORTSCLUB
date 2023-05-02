package com.wesportsclub.wsc.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.wesportsclub.wsc.model.Admin;
import com.wesportsclub.wsc.repository.AdminRepository;


@Service
public class AdminServiceImpl implements AdminService{
	@Autowired
	private AdminRepository adminRepository;

	 @Override
	 public int login_id(String username,String password) {
	        List<Admin> list =  adminRepository.findAll();
	        int id = -1;
	        for(Admin a:list) {
	        	if(a.getEmail().equals(username) && a.getPassword().equals(password)) {
	        		
	        		id = a.getAdmin_id();
	        	}
	        }
	        return id;
	        
	    }
}