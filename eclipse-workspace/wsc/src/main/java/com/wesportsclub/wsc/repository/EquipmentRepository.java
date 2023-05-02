package com.wesportsclub.wsc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.wesportsclub.wsc.model.Equipment;

@Repository
public interface EquipmentRepository extends JpaRepository<Equipment,Integer>{

	

}