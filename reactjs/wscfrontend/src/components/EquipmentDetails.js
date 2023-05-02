import React,{useState,useEffect} from "react";
import EquipmentService from '../services/EquipmentService';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

const EquipmentDetails =() =>{
    const [equipment,setEquipment]=useState([])
    useEffect(() => {
      
        getAllEquipment();
      
    }, [])

const getAllEquipment =() =>{
        EquipmentService.getAllEquipment().then((response) =>{
            setEquipment(response.data)
            console.log(response.data);
            }).catch(error => {
                console.log(error);
            })
    }
    
    
    const deleteEquipment =(equipmentId) =>{
        EquipmentService.deleteEquipment(equipmentId).then((response) =>{
            getAllEquipment();
    
        }).catch(error =>{
            console.log(error);
        })
    }
    
    return (
        <div className="container">
             <h2 className="text-center">Equipment List</h2>
             <Link to="/addequipmentdetails" className="btn btn-primary mb-2">Add Equipment</Link>
             <br></br>
             <table className = "table table-striped table-bordered">
             
                <thead>
                    <tr>
                      <th>Equipment ID</th>
                       <th>Equipment STATUS</th>
                       <th>Equipment NAME</th>
                       <th>SPORT TYPE</th>
                       <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                     {
                   equipment.map(
                    equipment => 
                        <tr key = {equipment.eq_id}>
                            <td> {equipment.eq_id}</td>
                            <td>{equipment.eq_status}</td>
                             <td> { equipment.eq_name} </td>   
                             <td> {equipment.sport_type}</td>
                                
                                
                             <td>
                                <Link className="btn btn-info" to={`/edit-equipment/${equipment.eq_id}`}>Update</Link>
                                <button className="btn btn-danger"  onClick={() => deleteEquipment(equipment.eq_id)}
                                style ={{marginLeft:"10px"}}>Delete</button>
                             </td>
             
                         </tr>
    )
}
</tbody>
</table>
<Link to="/adminhome" className="btn btn-primary mb-2">BACK</Link>
  

             </div>


    );

}
export default EquipmentDetails;