package com.wesportsclub.wsc.service;

import com.wesportsclub.wsc.dto.TrainerLoginMesage;
import com.wesportsclub.wsc.dto.UserLoginDTO;
import com.wesportsclub.wsc.dto.UserRegisDTO;

public interface UserService {

	String addUser(UserRegisDTO userDTO);

	TrainerLoginMesage loginUser(UserLoginDTO userloginDTO);

}
