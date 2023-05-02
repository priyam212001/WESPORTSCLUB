import React,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import { Link , useParams } from 'react-router-dom';
import EquipmentService from '../services/EquipmentService';

const AddEquipmentDetails = () => {

  const [eq_status, setEqStatus] = useState('')
  const [eq_name, setEqName] = useState('')
  const [sport_type, setSportType] = useState('')

  const navigate= useNavigate();

  const saveorUpdateEquipment=(e) =>{
    e.preventDefault();

    const equipment={eq_id,eq_status,eq_name,sport_type}

    if(eq_id){
      EquipmentService.updateEquipment(eq_id,equipment).then((response) =>{
        navigate('/equipmentdetails');
      }).catch(error =>{
        console.log(error);
      })
    }
    else{
        EquipmentService.addEquipment(equipment).then((response) =>{

        console.log(response.data)
        navigate('/equipmentdetails');
      }).catch(error =>{
        console.log(error)
      })
    }

    
  }
  
  
  const {eq_id}=useParams();

  useEffect(() => {
    
    EquipmentService.getEquipmentById(eq_id).then((response) =>{
    setEqStatus(response.data.eq_status)
    setEqName(response.data.eq_name)
    setSportType(response.data.sport_type)
    
  }).catch(error =>{
    console.log(error);
  })
    
  }, [])

  const title =() => {
    if(eq_id){
      return <h2 className="text-center">Update Equipment</h2>
    }
    else{
      return <h2 className="text-center">Add Equipment</h2>
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
                  <label className="form-label">Equipment Status:</label>
                  <input
                  type="text"
                  placeholder="Enter Equipment Status"
                  name="eq_status"
                  className="form-control"
                  value={eq_status}
                  onChange={(e) => setEqStatus(e.target.value)}></input>
                </div>

                
                <div className="form-group mb-2">
                  <label className="form-label">Equipment Name:</label>
                  <input
                  type="text"
                  placeholder="Enter Equipment Name"
                  name="eq_name"
                  className="form-control"
                  value={eq_name}
                  onChange={(e) => setEqName(e.target.value)}></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Sport Type:</label>
                  <input
                  type="text"
                  placeholder="Enter Sport Type"
                  name="sport_type"
                  className="form-control"
                  value={sport_type}
                  onChange={(e) => setSportType(e.target.value)}></input>
                </div>


                <button className="btn btn-success" onClick={(e) => saveorUpdateEquipment(e)}>Submit</button>
                 <Link to="/equipmentdetails" className="btn btn-danger">Cancel</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default AddEquipmentDetails;