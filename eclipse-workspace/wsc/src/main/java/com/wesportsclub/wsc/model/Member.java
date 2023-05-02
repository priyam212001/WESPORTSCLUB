package com.wesportsclub.wsc.model;
import javax.persistence.*;
@Entity
@Table(name="member")
public class Member {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private int cus_id;

@Column(name = "cus_name")
private String cus_name;

@Column(name = "email")
private String email;

@Column(name = "phone")
private String phone;

@Column(name = "password")
private String password;

@Column(name = "course_id")
private int course_id;

public String getCus_name() {
	return cus_name;
}

public void setCus_name(String cus_name) {
	this.cus_name = cus_name;
}

public String getCourse_name() {
	return course_name;
}

public void setCourse_name(String course_name) {
	this.course_name = course_name;
}

@Column(name="course_name")
private String course_name;

@Column(name = "eq_id")
private int eq_id;

@Column(name = "trainer_id")
private int trainer_id;

public int getCus_id() {
	return cus_id;
}

public void setCus_id(int cus_id) {
	this.cus_id = cus_id;
}

public String getName() {
	return cus_name;
}

public void setName(String cus_name) {
	this.cus_name = cus_name;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getPhone() {
	return phone;
}

public void setPhone(String phone) {
	this.phone = phone;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public int getCourse_id() {
	return course_id;
}

public void setCourse_id(int course_id) {
	this.course_id = course_id;
}

public int getEq_id() {
	return eq_id;
}

public void setEq_id(int eq_id) {
	this.eq_id = eq_id;
}

public int getTrainer_id() {
	return trainer_id;
}

public void setTrainer_id(int trainer_id) {
	this.trainer_id = trainer_id;
}

public Member() {
	
}

@Override
public String toString() {
	return "Member [cus_id=" + cus_id + ", cus_name=" + cus_name + ", email=" + email + ", phone=" + phone
			+ ", password=" + password + ", course_id=" + course_id + ", course_name=" + course_name + ", eq_id="
			+ eq_id + ", trainer_id=" + trainer_id + "]";
}

public Member(int cus_id, String cus_name, String email, String phone, String password, int course_id,
		String course_name, int eq_id, int trainer_id) {
	
	this.cus_id = cus_id;
	this.cus_name = cus_name;
	this.email = email;
	this.phone = phone;
	this.password = password;
	this.course_id = course_id;
	this.course_name = course_name;
	this.eq_id = eq_id;
	this.trainer_id = trainer_id;
}



}
