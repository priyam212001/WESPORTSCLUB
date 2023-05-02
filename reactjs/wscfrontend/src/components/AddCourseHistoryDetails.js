import React,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import { Link , useParams } from 'react-router-dom';
import CourseHistoryService from '../services/CourseHistoryService';

const AddCourseHistoryDetails = () => {

    const [cus_id, setCustomerId] = useState('')
    const [course_id, setCourseId] = useState('')
    const [register_date, setRegisterDate] = useState('')
    const [pay_id, setPayId] = useState('')

    const navigate= useNavigate();

  const saveorUpdateCourseHistory=(e) =>{
    e.preventDefault();

    const course_history={reserve_id,cus_id,course_id,register_date,pay_id}

    
    CourseHistoryService.addCourseHistory(course_history).then((response) =>{

        console.log(response.data)
        navigate('/coursehistorydetails');
      }).catch(error =>{
        console.log(error)
      })
     
  }
  const {reserve_id}=useParams();

  const title =() => {
    if(reserve_id){
      return <h2 className="text-center">Update Equipment</h2>
    }
    else{
      return <h2 className="text-center">Add Course History</h2>
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
                  <label className="form-label">Customer Id:</label>
                  <input
                  type="text"
                  placeholder="Enter customer id"
                  name="cus_id"
                  className="form-control"
                  value={cus_id}
                  onChange={(e) => setCustomerId(e.target.value)}></input>
                </div>

                
                <div className="form-group mb-2">
                  <label className="form-label">Course Id:</label>
                  <input
                  type="text"
                  placeholder="Enter course id"
                  name="course_id"
                  className="form-control"
                  value={course_id}
                  onChange={(e) => setCourseId(e.target.value)}></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Register Date:</label>
                  <input
                  type="text"
                  placeholder="Enter Register Date"
                  name="register_date"
                  className="form-control"
                  value={register_date}
                  onChange={(e) => setRegisterDate(e.target.value)}></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Payment Id:</label>
                  <input
                  type="text"
                  placeholder="Enter payment id"
                  name="pay_id"
                  className="form-control"
                  value={pay_id}
                  onChange={(e) => setPayId(e.target.value)}></input>
                </div>


                <button className="btn btn-success" onClick={(e) => saveorUpdateCourseHistory(e)}>Submit</button>
                 <Link to="/coursehistorydetails" className="btn btn-danger">Cancel</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default AddCourseHistoryDetails;