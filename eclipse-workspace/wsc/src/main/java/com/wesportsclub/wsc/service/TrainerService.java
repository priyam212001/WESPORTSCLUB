package com.wesportsclub.wsc.service;

import com.wesportsclub.wsc.dto.TrainerLoginDTO;
import com.wesportsclub.wsc.dto.TrainerLoginMesage;
import com.wesportsclub.wsc.dto.TrainerRegisDTO;

public interface TrainerService {

	String addTrainer(TrainerRegisDTO trainerDTO);

	TrainerLoginMesage loginTrainer(TrainerLoginDTO trainerloginDTO);

}
