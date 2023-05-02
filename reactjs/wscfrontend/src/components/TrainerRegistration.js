import {  useState } from "react";

import axios from "axios";

function TrainerRegister() {
  
    const [trainer_id, setTrainerId] = useState("");
    const [trainer_name, setTrainername] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [course_id, setCourseId] = useState("");
    const [course_name, setCourseName] = useState("");
    const [password, setPassword] = useState("");
  

    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/trainer/save", {
          trainer_id:trainer_id,
          trainer_name:trainer_name,
          phone:phone,
          email: email,
          course_id:course_id,
          course_name:course_name,
          password: password,
          });
          alert("Trainer Registation Successfully");

        } catch (err) {
          alert(err);
        }
      }
  
    return (
    <div>
    <div class="container mt-4" >
    <div class="card">
            <h1>ADD TRAINER</h1>
    
    <form>
    <div class="form-group">
          <label>Trainer Id</label>
          <input type="text"  class="form-control" id="trainer_id" placeholder="Enter Id"
          
          value={trainer_id}
          onChange={(event) => {
            setTrainerId(event.target.value);
          }}
          />

        </div>

        <div class="form-group">
          <label>Trainer name</label>
          <input type="text"  class="form-control" id="trainer_name" placeholder="Enter Name"
          
          value={trainer_name}
          onChange={(event) => {
            setTrainername(event.target.value);
          }}
          />
          </div>
         <div class="form-group">
          <label>Phone</label>
          <input type="text"  class="form-control" id="phone" placeholder="Enter Phone"
          
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
          />

        
        </div>

        <div class="form-group">
          <label>Email</label>
          <input type="text"  class="form-control" id="email" placeholder="Enter Email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
 
        </div>

        <div class="form-group">
          <label>Course Id</label>
          <input type="text"  class="form-control" id="course_id" placeholder="Enter Course Id"
          
          value={course_id}
          onChange={(event) => {
            setCourseId(event.target.value);
          }}
          
          />
 
        </div>

        <div class="form-group">
          <label>Course Name</label>
          <input type="text"  class="form-control" id="course_name" placeholder="Enter Course Name"
          
          value={course_name}
          onChange={(event) => {
            setCourseName(event.target.value);
          }}
          
          />
 
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>

        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
       
      </form>
    </div>
    </div>
    <footer>
        <p>&copy; 2023 My Webpage. All rights reserved.</p>
      </footer>
     </div>
    );
  }
  
  export default TrainerRegister;