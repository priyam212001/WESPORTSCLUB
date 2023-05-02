package com.wesportsclub.wsc.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.wesportsclub.wsc.model.Member;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member,Integer>{

	

}
