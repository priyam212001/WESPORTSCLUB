package com.wesportsclub.wsc.controller;

import com.wesportsclub.wsc.model.Member;
import com.wesportsclub.wsc.repository.MemberRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/member")
@CrossOrigin("*")
public class MemberController {
	
	 
	 @Autowired
	 private MemberRepository memberrepo;
	 
	 @GetMapping
	    public List<Member> list(){
	        return memberrepo.findAll();
	    }
	 
	 @PostMapping
	    public Member add(@RequestBody Member member){
	        return memberrepo.save(member);
	    }
}
