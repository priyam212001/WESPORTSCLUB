import React,{useState,useEffect} from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import CourseSerice from "../services/CourseSerice";
const CourseDetails =() =>{
    
    const [course,setCourse]=useState([])
useEffect(() => {
  
    getAllCourse();
  
}, [])


const getAllCourse =() =>{
    CourseSerice.getAllCourse().then((response) =>{
        setCourse(response.data)
        console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
}

const deleteCourse =(courseId) =>{
    CourseSerice.deleteCourse(courseId).then((response) =>{
        getAllCourse();

    }).catch(error =>{
        console.log(error);
    })
}


        return (
            <div className="container">
                 <h2 className="text-center">Course List</h2>
                 <Link to="/addcoursedetails" className="btn btn-primary mb-2">Add Course</Link>
                 <br></br>
                 <table className = "table table-striped table-bordered">
                 
                    <thead>
                        <tr>
                          <th> COURSE ID</th>
                           <th> COURSE NAME</th>
                           <th> SCHEDULE</th>
                           <th>PRICE</th>
                           <th>START_DATE</th>
                           <th>STOP_DATE</th>
                           <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                         {
                       course.map(
                                  course => 
                            <tr key = {course.course_id}>
                                <td>{course.course_id}</td>
                                 <td> { course.course_name} </td>   
                                 <td> {course.schedule}</td>
                                    <td> {course.price}</td>
                                    <td> {course.start_date}</td>
                                 <td> {course.stop_date}</td>
                                 <td>
                                    <Link className="btn btn-info" to={`/edit-course/${course.course_id}`}>Update</Link>
                                    <button className="btn btn-danger"  onClick={() => deleteCourse(course.course_id)}
                                    style ={{marginLeft:"10px"}}>Delete</button>
                                 </td>
                 
                             </tr>
        )
    }
</tbody>
</table>
<Link to="/adminhome" className="btn btn-primary mb-2">BACK</Link>
<footer>
        <p>&copy; 2023 My Webpage. All rights reserved.</p>
      </footer>
                 </div>


        );
    
}
export default CourseDetails;