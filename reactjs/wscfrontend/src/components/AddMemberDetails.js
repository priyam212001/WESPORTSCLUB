import React,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import { Link , useParams } from 'react-router-dom';
import MemberService from '../services/MemberService'

const AddMemberDetails = () => {

    
    const [cus_name, setCusName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [course_id, setCourseId] = useState('')
    const [course_name, setCourseName] = useState('')
    const [eq_id, setEqId] = useState('')
    const [trainer_id, setTrainerId] = useState('')

    const navigate= useNavigate();

    const saveorUpdateMember=(e) =>{
        e.preventDefault();
    
        const member={cus_id,cus_name,email,phone,password,course_id,course_name,eq_id,trainer_id}
    
        if(cus_id){
          MemberService.updateMember(cus_id,member).then((response) =>{
            alert("SUCCESSFULLY UPDATED");
          }).catch(error =>{
            console.log(error);
          })
        }
        else{
            MemberService.addMember(member).then((response) =>{
    
            console.log(response.data)
            navigate('/payment');
          }).catch(error =>{
            console.log(error)
          })
        }}
const {cus_id}=useParams();

      useEffect(() => {
        
        MemberService.getMemberById(cus_id).then((response) =>{
        setCusName(response.data.cus_name)
        setEmail(response.data.email)
        setPhone(response.data.phone)
        setPassword(response.data.password)
        setCourseId(response.data.course_id)
        setCourseName(response.data.course_name)
        setEqId(response.data.eq_id)
        setTrainerId(response.data.trainer_id)
        
      }).catch(error =>{
        console.log(error);
      })
        
      }, [])
    
      const title =() => {
        if(cus_id){
          return <h2 className="text-center">Update MEMBER</h2>
        }
        else{
          return <h2 className="text-center">Add MEMBER</h2>
        }
      }     


      return (
        <div>
           <div id="backgroundimage"></div>
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
                      <label className="form-label">CUSTOMER NAME:</label>
                      <input
                      type="text"
                      placeholder="Enter NAME"
                      name="cus_name"
                      className="form-control"
                      value={cus_name}
                      onChange={(e) => setCusName(e.target.value)}></input>
                    </div>
    
                    
                    <div className="form-group mb-2">
                      <label className="form-label">EMAIL:</label>
                      <input
                      type="text"
                      placeholder="Enter email"
                      name="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
    
                    <div className="form-group mb-2">
                      <label className="form-label">PHONE:</label>
                      <input
                      type="text"
                      placeholder="Enter phone"
                      name="phone"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}></input>
                    </div>

                    <div className="form-group mb-2">
                      <label className="form-label">PASSWORD:</label>
                      <input
                      type="text"
                      placeholder="Enter password"
                      name="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}></input>
                    </div>

                    <div className="form-group mb-2">
                      <label className="form-label">COURSE ID:</label>
                      <input
                      type="text"
                      placeholder="Enter course_id"
                      name="course_id"
                      className="form-control"
                      value={course_id}
                      onChange={(e) => setCourseId(e.target.value)}></input>
                    </div>

                    <div className="form-group mb-2">
                      <label className="form-label">COURSE NAME:</label>
                      <input
                      type="text"
                      placeholder="Enter course_name"
                      name="course_name"
                      className="form-control"
                      value={course_name}
                      onChange={(e) => setCourseName(e.target.value)}></input>
                    </div>

                    <div className="form-group mb-2">
                      <label className="form-label">EQUIPMENT ID:</label>
                      <input
                      type="text"
                      placeholder="Enter EQUIPMENT ID"
                      name="eq_id"
                      className="form-control"
                      value={eq_id}
                      onChange={(e) => setEqId(e.target.value)}></input>
                    </div>

                    <div className="form-group mb-2">
                      <label className="form-label">TRAINER ID:</label>
                      <input
                      type="text"
                      placeholder="Enter trainer_id"
                      name="trainer_id"
                      className="form-control"
                      value={trainer_id}
                      onChange={(e) => setTrainerId(e.target.value)}></input>
                    </div>
    
    
                    <button className="btn btn-success" onClick={(e) => saveorUpdateMember(e)}>PAYMENT</button>
                     <Link to="/home" className="btn btn-danger">Cancel</Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )

}

export default AddMemberDetails;