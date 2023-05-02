package com.wesportsclub.wsc.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;

@RestController
@RequestMapping("/api/payment")
public class PaymentGatewayController {
	
	 @PostMapping("/charge")
	   public String chargeCard(@RequestParam String token, @RequestParam int amount) throws StripeException {
	      Stripe.apiKey = "YOUR_SECRET_API_KEY";
	      Map<String, Object> params = new HashMap<>();
	      params.put("amount", amount);
	      params.put("currency", "usd");
	      params.put("description", "Test Charge");
	      params.put("source", token);
	      Charge charge = Charge.create(params);
	      return charge.toJson();
	   }
}
