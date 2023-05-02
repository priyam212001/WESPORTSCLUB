package com.wesportsclub.wsc;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;



@SpringBootApplication(exclude=SecurityAutoConfiguration.class)
public class WscApplication {

	public static void main(String[] args) {
		SpringApplication.run(WscApplication.class, args);
	}

	

}
