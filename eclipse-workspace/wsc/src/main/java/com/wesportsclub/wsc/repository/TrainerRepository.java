package com.wesportsclub.wsc.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import com.wesportsclub.wsc.model.Trainer;

@EnableJpaRepositories
@Repository
public interface TrainerRepository extends JpaRepository<Trainer,Integer>{
	Optional<Trainer> findOneByEmailAndPassword(String email, String password);
	 
    Trainer findByEmail(String email);
	
}

