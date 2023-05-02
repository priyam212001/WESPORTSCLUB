import React,{useState, useEffect} from 'react'
import CourseSerice from '../services/CourseSerice'
import {useNavigate} from 'react-router-dom';
import { Link , useParams } from 'react-router-dom';

const AddCoursedetails = () => {

  
  const [course_name, setCourseName] = useState('')
  const [schedule, setSchedule] = useState('')
  const [price, setPrice] = useState('')
  const [start_date, setStartDate] = useState('')
  const [stop_date, setStopDate] = useState('')

  const navigate= useNavigate();



  const saveorUpdateCourse=(e) =>{
    e.preventDefault();

    const course={course_id,course_name,schedule,price,start_date,stop_date}

    if(course_id){
      CourseSerice.updateCourse(course_id,course).then((response) =>{
        navigate('/coursedetails');
      }).catch(error =>{
        console.log(error);
      })
    }
    else{
      CourseSerice.addCourse(course).then((response) =>{

        console.log(response.data)
        navigate('/coursedetails');
      }).catch(error =>{
        console.log(error)
      })
    }

    
  }

//updation onlyyy----------------
  const {course_id}=useParams();

  useEffect(() => {
    
  CourseSerice.getCourseById(course_id).then((response) =>{
    setCourseName(response.data.course_name)
    setSchedule(response.data.schedule)
    setPrice(response.data.price)
    setStartDate(response.data.start_date)
    setStopDate(response.data.stop_date)
  }).catch(error =>{
    console.log(error);
  })
    
  }, [])
  

  const title =() => {
    if(course_id){
      return <h2 className="text-center">Update Course</h2>
    }
    else{
      return <h2 className="text-center">Add Course</h2>
    }
  }

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
           {
            title()
           }
            <div className="card-body">
              <form>
                
 

               
                <div className="form-group mb-2">
                  <label className="form-label">Course Name:</label>
                  <input
                  type="text"
                  placeholder="Enter Course Name"
                  name="course_name"
                  className="form-control"
                  value={course_name}
                  onChange={(e) => setCourseName(e.target.value)}></input>
                </div>

                
                <div className="form-group mb-2">
                  <label className="form-label">Schedule:</label>
                  <input
                  type="text"
                  placeholder="Enter Schedule"
                  name="schedule"
                  className="form-control"
                  value={schedule}
                  onChange={(e) => setSchedule(e.target.value)}></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Price:</label>
                  <input
                  type="text"
                  placeholder="Enter Price"
                  name="price"
                  className="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Start Date:</label>
                  <input
                  type="text"
                  placeholder="Enter Start Date"
                  name="start_date"
                  className="form-control"
                  value={start_date}
                  onChange={(e) => setStartDate(e.target.value)}></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Stop Date:</label>
                  <input
                  type="text"
                  placeholder="Enter Stop Date"
                  name="stop_date"
                  className="form-control"
                  value={stop_date}
                  onChange={(e) => setStopDate(e.target.value)}></input>
                </div>

                <button className="btn btn-success" onClick={(e) => saveorUpdateCourse(e)}>Submit</button>
                 <Link to="/coursedetails" className="btn btn-danger">Cancel</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCoursedetails