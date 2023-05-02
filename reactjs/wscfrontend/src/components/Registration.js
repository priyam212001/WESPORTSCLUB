import axios  from "axios";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./userlogin.css"
function Registration(){
    const [id, setId] = useState("");
    const [user_name, setUserName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function save(event){
        event.preventDefault();
        try{
            console.log(id,user_name,name,email,phone,password);
            await axios.post("http://localhost:8080/usersave",
            {
            id : id,
            user_name : user_name,
            name : name,
            email : email,
            phone : phone,
            password : password
        });
            navigate('/userlogin')
           
        }
        catch(err){
            alert("User Registration failed");
        }
    }
    return (

<>
         <head>
             <meta charset="UTF-8" />
             <meta http-equiv="X-UA-Compatible" content="IE=edge" />
             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
             <title>Register</title>
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
         </head>
         <body>
             <section class="login">
                 <div class="login_box">
                     <div class="left">
                         
                         <div class="contact">
                             <form action="" method="POST">
                                 <h3>REGISTER</h3>
                                
              <input type="text"  class="form-control" id="id" placeholder="Enter Id"
              
              value={id}
              onChange={(event) => {
                setId(event.target.value);
              }}
              />
     
              <input type="text"  class="form-control" id="user_name" placeholder="Enter User Name"
              
              value={user_name}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
              />
           
              <input type="text"  class="form-control" id="name" placeholder="Enter Name"
              
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              />
        
              <input type="text"  class="form-control" id="email" placeholder="Enter Email"
              
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              
              />
             
              <input type="text"  class="form-control" id="phone" placeholder="Enter Phone"
              
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
              
              />
            
                <input type="password"  class="form-control" id="password" placeholder="Enter Password"
                
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                
                />

                                 <button class="submit" onClick={save}>SUBMIT</button>
                                 <p class="extralink">Already Have Account? Please Login: <Link  href="#" to="/userlogin">CLICK HERE</Link></p>
                             </form>
                         </div>
                     </div>
                     <div class="right">
                         <div class="right-text">
                             <h2>MEMBER</h2>
                             <h5>WESPORTSCLUB</h5>
                         </div>
                         
                     </div>
                 </div>
             </section>
         </body>
         </>
        );
}

export default Registration;