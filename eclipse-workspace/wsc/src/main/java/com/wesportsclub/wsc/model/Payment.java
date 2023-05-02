package com.wesportsclub.wsc.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="payment")
public class Payment {

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private String pay_id;

@Column(name = "amount")
private int amount;

@Column(name = "cus_id")
private int cus_id;

@Column(name = "method")
private String method;

@Column(name = "register_date")
private Date register_date;


public int getAmount() {
	return amount;
}
public void setAmount(int amount) {
	this.amount = amount;
}
public int getCus_id() {
	return cus_id;
}
public void setCus_id(int cus_id) {
	this.cus_id = cus_id;
}
public String getMethod() {
	return method;
}
public void setMethod(String method) {
	this.method = method;
}


public String getPay_id() {
	return pay_id;
}
public void setPay_id(String pay_id) {
	this.pay_id = pay_id;
}
public Date getRegister_date() {
	return register_date;
}
public void setRegister_date(Date register_date) {
	this.register_date = register_date;
}
public Payment() {
	
}
@Override
public String toString() {
	return "Payment [pay_id=" + pay_id + ", amount=" + amount + ", cus_id=" + cus_id + ", method=" + method
			+ ", register_date=" + register_date + "]";
}
public Payment(String pay_id, int amount, int cus_id, String method, Date register_date) {
	
	this.pay_id = pay_id;
	this.amount = amount;
	this.cus_id = cus_id;
	this.method = method;
	this.register_date = register_date;
}


}
