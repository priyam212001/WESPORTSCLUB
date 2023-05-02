package com.wesportsclub.wsc.model;
import java.sql.Date;

import javax.persistence.*;
@Entity
@Table(name="course")
public class Course {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int course_id;
	
	@Column(name = "course_name")
	private String course_name;
	
	@Column(name = "schedule")
	private String schedule;
	
	@Column(name = "price")
	private int price;
	
	@Column(name = "start_date")
	private Date start_date;
	
	@Column(name = "stop_date")
	private Date stop_date;
	
	public Course() {
		
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
	public String getSchedule() {
		return schedule;
	}
	public void setSchedule(String schedule) {
		this.schedule = schedule;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public Date getStart_date() {
		return start_date;
	}
	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}
	public Date getStop_date() {
		return stop_date;
	}
	public void setStop_date(Date stop_date) {
		this.stop_date = stop_date;
	}
	@Override
	public String toString() {
		return "Course [course_id=" + course_id + ", course_name=" + course_name + ", schedule=" + schedule + ", price="
				+ price + ", start_date=" + start_date + ", stop_date=" + stop_date + "]";
	}
	public Course(int course_id, String course_name, String schedule, int price, Date start_date, Date stop_date) {
		
		this.course_id = course_id;
		this.course_name = course_name;
		this.schedule = schedule;
		this.price = price;
		this.start_date = start_date;
		this.stop_date = stop_date;
	}
	
	
	
}
