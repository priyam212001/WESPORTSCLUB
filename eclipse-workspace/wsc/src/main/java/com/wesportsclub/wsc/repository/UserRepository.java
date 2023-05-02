package com.wesportsclub.wsc.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.wesportsclub.wsc.model.User;

@EnableJpaRepositories
@Repository
public interface UserRepository extends JpaRepository<User,Integer>{

	User findByEmail(String email);

	Optional<User> findOneByEmailAndPassword(String email, String encodedPassword);

}
