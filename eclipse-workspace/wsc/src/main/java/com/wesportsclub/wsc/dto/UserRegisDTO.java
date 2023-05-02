package com.wesportsclub.wsc.dto;

public class UserRegisDTO {

private int id;
private String user_name;
private String name;
private String email;
private String phone;
private String password;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getUser_name() {
	return user_name;
}
public void setUser_name(String user_name) {
	this.user_name = user_name;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
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
public UserRegisDTO(int id, String user_name, String name, String email, String phone, String password) {
	
	this.id = id;
	this.user_name = user_name;
	this.name = name;
	this.email = email;
	this.phone = phone;
	this.password = password;
}
@Override
public String toString() {
	return "UserRegisDTO [id=" + id + ", user_name=" + user_name + ", name=" + name + ", email=" + email + ", phone="
			+ phone + ", password=" + password + "]";
}


}
