package com.wesportsclub.wsc.model;
import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name="course_history")
public class Course_history {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private int reserve_id;

@Column(name = "cus_id")
private int cus_id;

@Column(name = "course_id")
private int course_id;

@Column(name = "register_date")
private Date register_date;

@Column(name = "pay_id")
private String pay_id;

public int getReserve_id() {
	return reserve_id;
}
public void setReserve_id(int reserve_id) {
	this.reserve_id = reserve_id;
}
public int getCus_id() {
	return cus_id;
}
public void setCus_id(int cus_id) {
	this.cus_id = cus_id;
}
public int getCourse_id() {
	return course_id;
}
public void setCourse_id(int course_id) {
	this.course_id = course_id;
}

public Date getRegister_date() {
	return register_date;
}
public void setRegister_date(Date register_date) {
	this.register_date = register_date;
}
public String getPay_id() {
	return pay_id;
}
public void setPay_id(String pay_id) {
	this.pay_id = pay_id;
}
public Course_history() {
	
}
@Override
public String toString() {
	return "Course_history [reserve_id=" + reserve_id + ", cus_id=" + cus_id + ", course_id=" + course_id
			+ ", register_date=" + register_date + ", pay_id=" + pay_id + "]";
}
public Course_history(int reserve_id, int cus_id, int course_id, Date register_date, String pay_id) {
	
	this.reserve_id = reserve_id;
	this.cus_id = cus_id;
	this.course_id = course_id;
	this.register_date = register_date;
	this.pay_id = pay_id;
}


}
