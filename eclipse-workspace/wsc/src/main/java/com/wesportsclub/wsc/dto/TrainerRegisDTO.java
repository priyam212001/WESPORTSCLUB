package com.wesportsclub.wsc.dto;

public class TrainerRegisDTO {

private int trainer_id;
private String trainer_name;
private String phone;
private String email;
private String password;
private int course_id;
private String course_name;
public int getTrainer_id() {
	return trainer_id;
}
public void setTrainer_id(int trainer_id) {
	this.trainer_id = trainer_id;
}
public String getTrainer_name() {
	return trainer_name;
}
public void setTrainer_name(String trainer_name) {
	this.trainer_name = trainer_name;
}
public String getPhone() {
	return phone;
}
public void setPhone(String phone) {
	this.phone = phone;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
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
public String getCourse_name() {
	return course_name;
}
public void setCourse_name(String course_name) {
	this.course_name = course_name;
}
public TrainerRegisDTO(int trainer_id, String trainer_name, String phone, String email, String password, int course_id,
		String course_name) {
	
	this.trainer_id = trainer_id;
	this.trainer_name = trainer_name;
	this.phone = phone;
	this.email = email;
	this.password = password;
	this.course_id = course_id;
	this.course_name = course_name;
}

@Override
public String toString() {
	return "TrainerRegisDTO{"+
             "trainer_id="+trainer_id+
             ",trainer_name='" + trainer_name +'\''+
             ",phone='" +phone +'\''+
             ",email='"+email +'\''+
             ",course_id='"+course_id+'\''+
             ",course_name='"+course_name+'\''+
             ", password='" + password + '\'' +
             '}';
}


}
