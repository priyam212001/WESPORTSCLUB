package com.wesportsclub.wsc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;
import com.wesportsclub.wsc.model.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment,Integer>{

}

