import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom';

function TrainerLogin() {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/trainer/login", {
            email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.message === "Email not exits") 
             {
               alert("Email not exits");
             } 
             else if(res.data.message === "Login Success")
             { 
                
                navigate('/memberdetails');
             } 
              else 
             { 
                alert("Incorrect Email and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }

 
         catch (err) {
          alert(err);
        }
      
      }
   
   
   
   
   
   
    return (
       <>
		<head>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Admin</title>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
		</head>
		<body>
			<section class="login">
				<div class="login_box">
					<div class="left">
						
						<div class="contact">
							<form action="" method="POST">
								<h3>SIGN IN</h3>
								<input type="text" placeholder="E-mail" value={email}
				  onChange={(event) => {
					setEmail(event.target.value);
				  }}/>
								<input type="password" placeholder="Password" value={password}
					onChange={(event) => {
					  setPassword(event.target.value);
					}}/>
								<button class="submit" onClick={login}>SUBMIT</button>
                <p class="extralink">Don't have Account? Please register: <Link  href="#" to="/trainerregistration">CLICK HERE</Link></p>
							</form>
						</div>
					</div>
					<div class="right">
						<div class="right-text">
							<h2>WELCOME TRAINER</h2>
							<h5>WESPORTSCLUB</h5>
						</div>
						
					</div>
				</div>
			</section>
		</body>
		</>
    );
  }
  
  export default TrainerLogin;