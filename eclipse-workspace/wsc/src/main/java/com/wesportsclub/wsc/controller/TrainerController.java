package com.wesportsclub.wsc.controller;

import com.wesportsclub.wsc.Exception.ResourseNotFoundExeption;
import com.wesportsclub.wsc.dto.TrainerLoginDTO;
import com.wesportsclub.wsc.dto.TrainerLoginMesage;
import com.wesportsclub.wsc.dto.TrainerRegisDTO;
import com.wesportsclub.wsc.model.Trainer;
import com.wesportsclub.wsc.repository.TrainerRepository;
import com.wesportsclub.wsc.service.TrainerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/trainer")
@CrossOrigin("*")
public class TrainerController {
	 @Autowired
	    private TrainerService trainerService;

	   
	    
	    @PostMapping("/save")
	    public String saveTrainer(@RequestBody TrainerRegisDTO trainerDTO) {
	    	String id=trainerService.addTrainer(trainerDTO);
	    	return id;
	    }
	    
	    @PostMapping(value="/login")
		public ResponseEntity<?> trainerUser(@RequestBody TrainerLoginDTO trainerloginDTO){
			TrainerLoginMesage loginMessage=trainerService.loginTrainer(trainerloginDTO);
			return ResponseEntity.ok(loginMessage);
		}
	    
	    
	    
	    
	    @Autowired
	    private TrainerRepository  trainerrepo;
	    
	    @PostMapping
	    public Trainer add(@RequestBody Trainer trainer){
	        return trainerrepo.save(trainer);
	    }

	    @GetMapping
	    public List<Trainer> list(){
	        return trainerrepo.findAll();
	    }
	    
	    @GetMapping("/{trainer_id}")
		public ResponseEntity<Trainer> getTrainerById(@PathVariable int trainer_id) {
	    	Trainer trainer = trainerrepo.findById(trainer_id)
					.orElseThrow(() -> new ResourseNotFoundExeption("Trainer not exist with id :" + trainer_id));
			return ResponseEntity.ok(trainer);
		}
	    
	    @PutMapping("/{trainer_id}")
		public ResponseEntity<Trainer> updateTrainer(@PathVariable int trainer_id, @RequestBody Trainer trainerDetails){
	    	Trainer trainer = trainerrepo.findById(trainer_id)
					.orElseThrow(() -> new ResourseNotFoundExeption("Trainer not exist with id :" + trainer_id));
			
	    	trainer.setTrainer_name(trainerDetails.getTrainer_name());
	    	trainer.setPhone(trainerDetails.getPhone());
	    	trainer.setEmail(trainerDetails.getEmail());
	    	trainer.setPassword(trainerDetails.getPassword());
	    	trainer.setCourse_id(trainerDetails.getCourse_id());
	    	trainer.setCourse_name(trainerDetails.getCourse_name());
	    	
			
	    	Trainer updatedtrainer = trainerrepo.save(trainer);
			return ResponseEntity.ok(updatedtrainer);
		}
	    
	    @DeleteMapping("/{trainer_id}")
		public ResponseEntity<HttpStatus> deleteTrainer(@PathVariable int trainer_id){
	    	Trainer trainer = trainerrepo.findById(trainer_id)
					.orElseThrow(() -> new ResourseNotFoundExeption("Trainer not exist with id :" + trainer_id));
			
	    	trainerrepo.delete(trainer);
			
			
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	    
}
