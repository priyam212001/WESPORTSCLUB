package com.wesportsclub.wsc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.wesportsclub.wsc.model.Course;


@Repository
public interface CourseRepository extends JpaRepository<Course,Integer>{

	

}