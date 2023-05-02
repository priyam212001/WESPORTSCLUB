import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom';
import TrainerService from "../services/TrainerService";

const TrainerDetails =() =>{
 
    const [trainer,setTrainer]=useState([])
    useEffect(() => {
      
        getAllTrainer();
      
    }, [])

    const getAllTrainer =() =>{
        TrainerService.getAllTrainer().then((response) =>{
            setTrainer(response.data)
            console.log(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    const deleteTrainer =(trainerId) =>{
        TrainerService.deleteTrainer(trainerId).then((response) =>{
            getAllTrainer();
    
        }).catch(error =>{
            console.log(error);
        })
    } 


    return (
        <div className="container">
             <h2 className="text-center">Trainer List</h2>
             
             <br></br>
             <table className = "table table-striped table-bordered">
             
                <thead>
                    <tr>
                      <th>Trainer ID</th>
                      <th>Trainer NAME</th>
                       <th>Phone</th>
                       <th>Email</th>
                       <th>Course Id</th>
                       <th>Course Name</th>
                       <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                     {
                   trainer.map(
                    trainer => 
                        <tr key = {trainer.trainer_id}>
                            <td> {trainer.trainer_id}</td>
                            <td> {trainer.trainer_name}</td>
                            <td>{trainer.phone}</td>
                             <td> { trainer.email} </td>   
                             <td> {trainer.course_id}</td>
                             <td> {trainer.course_name}</td>
                                
                                
                             <td>
                                <Link className="btn btn-info" to={`/edit-trainer/${trainer.trainer_id}`}>Update</Link>
                                <button className="btn btn-danger"  onClick={() => deleteTrainer(trainer.trainer_id)}
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

export default TrainerDetails;