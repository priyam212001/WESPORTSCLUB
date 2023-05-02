package com.wesportsclub.wsc.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.wesportsclub.wsc.dto.TrainerLoginDTO;
import com.wesportsclub.wsc.dto.TrainerLoginMesage;
import com.wesportsclub.wsc.dto.TrainerRegisDTO;
import com.wesportsclub.wsc.model.Trainer;
import com.wesportsclub.wsc.repository.TrainerRepository;

@Service
public class TrainerServiceImpl implements TrainerService{

	@Autowired
    private TrainerRepository  trainerrepo;
	
	@Autowired
    private PasswordEncoder passwordEncoder;
	
	@Override
	public String addTrainer(TrainerRegisDTO trainerDTO) {
		Trainer trainer=new Trainer(
				trainerDTO.getTrainer_id(),
				trainerDTO.getTrainer_name(),
				trainerDTO.getPhone(),
				trainerDTO.getEmail(),
				trainerDTO.getCourse_id(),
				trainerDTO.getCourse_name(),
				this.passwordEncoder.encode(trainerDTO.getPassword())
				);
		trainerrepo.save(trainer);
		return trainer.getTrainer_name();
	}
TrainerRegisDTO trainerDTO;
	@Override
	public TrainerLoginMesage loginTrainer(TrainerLoginDTO trainerloginDTO) {
		Trainer trainer = trainerrepo.findByEmail(trainerloginDTO.getEmail());
        if (trainer != null) {
            String password = trainerloginDTO.getPassword();
            String encodedPassword = trainer.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Trainer> employee = trainerrepo.findOneByEmailAndPassword(trainerloginDTO.getEmail(), encodedPassword);
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
