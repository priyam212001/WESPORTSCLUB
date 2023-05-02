package com.wesportsclub.wsc.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.wesportsclub.wsc.model.Payment;
import com.wesportsclub.wsc.repository.PaymentRepository;


import java.util.List;

@RestController
@RequestMapping("/payment")
@CrossOrigin("*")
public class PaymentController {
	 @Autowired
	    private PaymentRepository paymentrepo;
	 
	 @GetMapping
	    public List<Payment> list(){
	        return paymentrepo.findAll();
	    }
}
