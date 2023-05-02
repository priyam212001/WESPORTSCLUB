package com.wesportsclub.wsc.model;
import javax.persistence.*;

@Entity
@Table(name="trainer")
public class Trainer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int trainer_id;
	
	@Column(name="trainer_name")
	private String trainer_name;
	
	@Column(name="phone")
	private String phone;
	
	@Column(name="email")
	private String email;
	
	@Column(name="password")
	private String password;
	
	@Column(name="course_id")
	private int course_id;
	
	@Column(name="course_name")
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Trainer(int trainer_id, String trainer_name, String phone, String email, int course_id,
			String course_name, String password) {
		
		this.trainer_id = trainer_id;
		this.trainer_name = trainer_name;
		this.phone = phone;
		this.email = email;
		
		this.course_id = course_id;
		this.course_name = course_name;
		this.password = password;
	}
	
	public Trainer() {
		
	}
	@Override
	public String toString() {
		return "Trainer [trainer_id=" + trainer_id + ", trainer_name=" + trainer_name + ", phone=" + phone + ", email="
				+ email + ", password=" + password + ", course_id=" + course_id + ", course_name=" + course_name + "]";
	}
	
}
