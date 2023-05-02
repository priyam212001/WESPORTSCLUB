import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom';
import UserService from "../services/UserService";

const UserDetails =() =>{

    const [user,setUser]=useState([])
    useEffect(() => {
      
        getAllUser();
      
    }, [])

const getAllUser =() =>{
        UserService.getAllUser().then((response) =>{
            setUser(response.data)
            console.log(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            
        <div className="container">
            
             <h2 className="text-center">User List</h2>
             
             <br></br>
             <table className = "table table-striped table-bordered">
             
                <thead>
                    <tr>
                      <th>ID</th>
                       <th>USER NAME</th>
                       <th>NAME</th>
                       <th>EMAIL</th>
                       <th>PHONE</th>
                       
                    </tr>
                </thead>
                <tbody>
                     {
                   user.map(
                    user => 
                        <tr key = {user.id}>
                             <td>{user.id}</td>
                            <td> {user.user_name}</td>
                            <td>{user.name}</td>
                             <td> { user.email} </td>   
                             <td> {user.phone}</td>
                            
                                
                                
                             
             
                         </tr>
    )
}
</tbody>
</table>
<Link to="/adminhome" className="btn btn-primary mb-2">BACK</Link>

             </div>

             </div>
    );  

}
export default UserDetails;   