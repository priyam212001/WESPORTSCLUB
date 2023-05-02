package com.wesportsclub.wsc.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.wesportsclub.wsc.Exception.ResourseNotFoundExeption;
import com.wesportsclub.wsc.model.Equipment;
import com.wesportsclub.wsc.repository.EquipmentRepository;
import java.util.List;


@RestController
@RequestMapping("/equipment")
@CrossOrigin("*")
public class EquipmentController {
	 
	
	@Autowired
	private EquipmentRepository  equipmentrepository;
	
	@PostMapping
    public Equipment add(@RequestBody Equipment equipment){
        return equipmentrepository.save(equipment);
    }

    @GetMapping
    public List<Equipment> list(){
        return equipmentrepository.findAll();
    }
    
    @GetMapping("/{eq_id}")
	public ResponseEntity<Equipment> getEquipmentById(@PathVariable int eq_id) {
    	Equipment equipment = equipmentrepository.findById(eq_id)
				.orElseThrow(() -> new ResourseNotFoundExeption("Equipment not exist with id :" + eq_id));
		return ResponseEntity.ok(equipment);
	}
    
    @PutMapping("/{eq_id}")
	public ResponseEntity<Equipment> updateEquipment(@PathVariable int eq_id, @RequestBody Equipment equipmentDetails){
    	Equipment equipment = equipmentrepository.findById(eq_id)
				.orElseThrow(() -> new ResourseNotFoundExeption("Equipment not exist with id :" + eq_id));
		
    	equipment.setEq_status(equipmentDetails.getEq_status());
    	equipment.setEq_name(equipmentDetails.getEq_name());
    	equipment.setSport_type(equipmentDetails.getSport_type());
    	
		
    	Equipment updatedequipment = equipmentrepository.save(equipment);
		return ResponseEntity.ok(updatedequipment);
	}
    
    @DeleteMapping("/{eq_id}")
	public ResponseEntity<HttpStatus> deleteEquipment(@PathVariable int eq_id){
    	Equipment equipment = equipmentrepository.findById(eq_id)
				.orElseThrow(() -> new ResourseNotFoundExeption("Equipment not exist with id :" + eq_id));
		
    	equipmentrepository.delete(equipment);
		
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
