package com.wesportsclub.wsc.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.wesportsclub.wsc.dto.TrainerLoginMesage;
import com.wesportsclub.wsc.dto.UserLoginDTO;
import com.wesportsclub.wsc.dto.UserRegisDTO;
import com.wesportsclub.wsc.model.User;
import com.wesportsclub.wsc.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
    private PasswordEncoder passwordEncoder;
	
	@Override
	public String addUser(UserRegisDTO userDTO) {
		User user=new User(
				userDTO.getId(),
				userDTO.getUser_name(),
				userDTO.getName(),
				userDTO.getEmail(),
				userDTO.getPhone(),
				
				this.passwordEncoder.encode(userDTO.getPassword())
				);
		userRepository.save(user);
		
		return user.getName();
	}
	UserRegisDTO userDTO;

	@Override
	public TrainerLoginMesage loginUser(UserLoginDTO userloginDTO) {
		User user = userRepository.findByEmail(userloginDTO.getEmail());
        if (user != null) {
            String password = userloginDTO.getPassword();
            String encodedPassword = user.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> employee = userRepository.findOneByEmailAndPassword(userloginDTO.getEmail(), encodedPassword);
                if (employee.isPresent()) {
                    return new TrainerLoginMesage("Login Success", true);
                } else {
                    return new TrainerLoginMesage("Login Failed", false);
                }
            } else {
 
                return new TrainerLoginMesage("password Not Match", false);
            }
        }else {
            return new TrainerLoginMesage("Email not exits", false);
        }
	}

}
