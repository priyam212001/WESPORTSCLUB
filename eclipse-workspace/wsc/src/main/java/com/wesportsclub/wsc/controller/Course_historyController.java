package com.wesportsclub.wsc.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.wesportsclub.wsc.model.Course_history;
import com.wesportsclub.wsc.repository.Course_historyRepository;


import java.util.List;

@RestController
@RequestMapping("/course_history")
@CrossOrigin
public class Course_historyController {
	 
	@Autowired
	private Course_historyRepository historyrepo;
	
	
	@PostMapping
    public Course_history add(@RequestBody Course_history course_history){
        return historyrepo.save(course_history);
    }

    @GetMapping
    public List<Course_history> list(){
        return historyrepo.findAll();
    }
}
