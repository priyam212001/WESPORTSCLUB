import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom';
import CourseHistoryService from "../services/CourseHistoryService";

const CourseHistoryDetails =() =>{

    const [course_history,setCourseHistory]=useState([])
    useEffect(() => {
      
        getAllCourseHistory();
      
    }, [])

const getAllCourseHistory =() =>{
        CourseHistoryService.getAllCourseHistory().then((response) =>{
            setCourseHistory(response.data)
            console.log(response.data);
            }).catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="container">
             <h2 className="text-center">Course History List</h2>
             <Link to="/addcoursehistorydetails" className="btn btn-primary mb-2">Add Course History</Link>
             <br></br>
             <table className = "table table-striped table-bordered">
             
                <thead>
                    <tr>
                      <th>RESERVE ID</th>
                       <th>CUSTOMER ID</th>
                       <th>COURSE ID</th>
                       <th>REGISTER DATE</th>
                       <th>PAY ID</th>
                    </tr>
                </thead>
                <tbody>
                     {
                   course_history.map(
                    course_history => 
                        <tr key = {course_history.reserve_id}>
                            <td> {course_history.reserve_id}</td>
                            <td>{course_history.cus_id}</td>
                             <td> { course_history.course_id} </td>   
                             <td> {course_history.register_date}</td>
                             <td> {course_history.pay_id}</td>  
                                
                             
             
                         </tr>
    )
}
</tbody>
</table>
<Link to="/adminhome" className="btn btn-primary mb-2">BACK</Link>
             </div>


    );


}
export default CourseHistoryDetails;