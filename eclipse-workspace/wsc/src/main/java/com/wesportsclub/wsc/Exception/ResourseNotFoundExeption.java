package com.wesportsclub.wsc.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class ResourseNotFoundExeption extends RuntimeException{

	private static final long serialVersionUID=1L;
	public ResourseNotFoundExeption(String message) {
		super(message);
	}
}
