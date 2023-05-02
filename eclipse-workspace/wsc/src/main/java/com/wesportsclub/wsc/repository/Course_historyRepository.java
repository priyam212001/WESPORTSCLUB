package com.wesportsclub.wsc.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wesportsclub.wsc.model.Course_history;

@Repository
public interface Course_historyRepository extends JpaRepository<Course_history,Integer>{

}