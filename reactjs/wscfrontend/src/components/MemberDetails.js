import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom';
import MemberService from "../services/MemberService";

const MemberDetails =() =>{
    const [member,setMember]=useState([])
    useEffect(() => {
      
        getAllMember();
      
    }, [])

const getAllMember =() =>{
        MemberService.getAllMember().then((response) =>{
            setMember(response.data)
            console.log(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="container">
            <div id="backgroundimage"></div>
             <h2 className="text-center">LIST OF STUDENTS MANAGED BY RESPECTIVE TRAINER</h2>
            
             <br></br>
             <table className = "table table-striped table-bordered">
             
                <thead>
                    <tr>
                      <th>Customer ID</th>
                       <th>Customer Name</th>
                       <th>Email</th>
                       <th>Phone</th>
                       <th>Course Id</th>
                       <th>Course Name</th>
                       <th>Equipment Id</th>
                       <th>Trainer Id</th>
                    </tr>
                </thead>
                <tbody>
                     {
                   member.map(
                    member => 
                        <tr key = {member.cus_id}>
                            <td> {member.cus_id}</td>
                            <td> {member.cus_name}</td>
                            <td> {member.email}</td>
                            <td> {member.phone}</td>
                            <td> {member.course_id}</td>
                            <td> {member.course_name}</td>
                            <td> {member.eq_id}</td>
                            <td> {member.trainer_id}</td>
                                
                                
             
                         </tr>
    )
}
</tbody>
</table>
<Link to="/" className="btn btn-primary mb-2">BACK</Link>

             </div>


    );  
    
}
export default MemberDetails;