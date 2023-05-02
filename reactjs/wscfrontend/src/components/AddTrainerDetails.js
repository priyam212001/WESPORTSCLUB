import React,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import { Link , useParams } from 'react-router-dom';
import TrainerService from '../services/TrainerService';


const AddTrainerDetails = () => {

    const [trainer_name, setTrainerName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [course_id, setCourseId] = useState('')
    const [course_name, setCourseName] = useState('')

  const navigate= useNavigate();

  const saveorUpdateTrainer=(e) =>{
    e.preventDefault();

    const trainer={trainer_id,trainer_name,phone,email,course_id,course_name}

    if(trainer_id){
        TrainerService.updateTrainer(trainer_id,trainer).then((response) =>{
          navigate('/trainerdetails');
        }).catch(error =>{
          console.log(error);
        })
      }
      else{
        TrainerService.addTrainer(trainer).then((response) =>{
  
          console.log(response.data)
          navigate('/trainerdetails');
        }).catch(error =>{
          console.log(error)
        })
      }

}

const {trainer_id}=useParams();

  useEffect(() => {
    
    TrainerService.getTrainerById(trainer_id).then((response) =>{
    setTrainerName(response.data.trainer_name)
    setPhone(response.data.phone)
    setEmail(response.data.email)
    setCourseId(response.data.course_id)
    setCourseName(response.data.course_name)
    
  }).catch(error =>{
    console.log(error);
  })
    
  }, [])

  const title =() => {
    if(trainer_id){
      return <h2 className="text-center">Update Trainer</h2>
    }
    else{
      return <h2 className="text-center">Add Trainer</h2>
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
                  <label className="form-label">Trainer Name:</label>
                  <input
                  type="text"
                  placeholder="Enter name"
                  name="trainer_name"
                  className="form-control"
                  value={trainer_name}
                  onChange={(e) => setTrainerName(e.target.value)}></input>
                </div>

                
                <div className="form-group mb-2">
                  <label className="form-label">Phone:</label>
                  <input
                  type="text"
                  placeholder="Enter phone number"
                  name="phone"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Email:</label>
                  <input
                  type="text"
                  placeholder="Enter email"
                  name="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}></input>
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
                  <label className="form-label">Course Name:</label>
                  <input
                  type="text"
                  placeholder="Enter course name"
                  name="course_name"
                  className="form-control"
                  value={course_name}
                  onChange={(e) => setCourseName(e.target.value)}></input>
                </div>


                <button className="btn btn-success" onClick={(e) => saveorUpdateTrainer(e)}>Submit</button>
                 <Link to="/trainerdetails" className="btn btn-danger">Cancel</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default AddTrainerDetails;