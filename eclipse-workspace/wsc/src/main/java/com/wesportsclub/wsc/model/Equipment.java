package com.wesportsclub.wsc.model;
import javax.persistence.*;
@Entity
@Table(name="equipment")
public class Equipment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int eq_id;
	
	@Column(name = "eq_status")
	private String eq_status;
	
	@Column(name = "eq_name")
	private String eq_name;
	
	@Column(name = "sport_type")
	private String sport_type;
	
	public Equipment() {
		
	}
	public int getEq_id() {
		return eq_id;
	}
	public void setEq_id(int eq_id) {
		this.eq_id = eq_id;
	}
	public String getEq_status() {
		return eq_status;
	}
	public void setEq_status(String eq_status) {
		this.eq_status = eq_status;
	}
	public String getEq_name() {
		return eq_name;
	}
	public void setEq_name(String eq_name) {
		this.eq_name = eq_name;
	}
	public String getSport_type() {
		return sport_type;
	}
	public void setSport_type(String sport_type) {
		this.sport_type = sport_type;
	}
	public Equipment(int eq_id, String eq_status, String eq_name, String sport_type) {
	
		this.eq_id = eq_id;
		this.eq_status = eq_status;
		this.eq_name = eq_name;
		this.sport_type = sport_type;
	}
	@Override
	public String toString() {
		return "Equipment [eq_id=" + eq_id + ", eq_status=" + eq_status + ", eq_name=" + eq_name + ", sport_type="
				+ sport_type + "]";
	}
	
	
	
}
