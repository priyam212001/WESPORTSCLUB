package com.wesportsclub.wsc.controller;

import com.wesportsclub.wsc.Exception.ResourseNotFoundExeption;
import com.wesportsclub.wsc.model.Course;
import com.wesportsclub.wsc.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/course")
@CrossOrigin("*")
public class CourseController {
	 
	 
	 @Autowired
	 private CourseRepository courserepository;
	 
	 	@PostMapping
	    public Course add(@RequestBody Course course){
	        return courserepository.save(course);
	    }

	    @GetMapping
	    public List<Course> list(){
	        return courserepository.findAll();
	    }
	    

	    
	    @GetMapping("/{course_id}")
		public ResponseEntity<Course> getCourseById(@PathVariable int course_id) {
			Course course = courserepository.findById(course_id)
					.orElseThrow(() -> new ResourseNotFoundExeption("Course not exist with id :" + course_id));
			return ResponseEntity.ok(course);
		}
	    
	    @PutMapping("/{course_id}")
		public ResponseEntity<Course> updateCourse(@PathVariable int course_id, @RequestBody Course courseDetails){
	    	Course course = courserepository.findById(course_id)
					.orElseThrow(() -> new ResourseNotFoundExeption("Course not exist with id :" + course_id));
			
			course.setCourse_name(courseDetails.getCourse_name());
			course.setSchedule(courseDetails.getSchedule());
			course.setPrice(courseDetails.getPrice());
			course.setStart_date(courseDetails.getStart_date());
			course.setStop_date(courseDetails.getStop_date());
			
			Course updatedcourse = courserepository.save(course);
			return ResponseEntity.ok(updatedcourse);
		}
	    
	    
	 // delete course rest api
		@DeleteMapping("/{course_id}")
		public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable int course_id){
			Course course = courserepository.findById(course_id)
					.orElseThrow(() -> new ResourseNotFoundExeption("Course not exist with id :" + course_id));
			
			courserepository.delete(course);
			
			
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	    
}
