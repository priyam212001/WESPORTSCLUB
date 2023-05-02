import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './style1.css';
import { NavLink } from 'react-router-dom';
import { Dropdown, MenuItem, DropdownButton } from "react-bootstrap";

function Welcome (){
   
        return(
            <div >
                <header>
                <nav >
                    <h1 className="text-center">WELCOME TO WESPORTSCLUB</h1>
                    
                </nav>

                </header>
                
                <div>
                <Link to="/userlogin" className="btn btn-secondary mb-2" style ={{marginLeft:"10px"}}>USER LOGIN</Link>
       
       <Link to="/adminlogin" className="btn btn-secondary mb-2" style ={{marginLeft:"10px"}}>ADMIN LOGIN</Link>
      
       <Link to="/trainerlogin1" className="btn btn-secondary mb-2" style ={{marginLeft:"10px"}}>TRAINER LOGIN</Link>
       
        
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fastly.picsum.photos/id/390/5000/3333.jpg?hmac=jfPnf5lKwFZthmYxvh83OBt2rGq9hzp4YP67285wJ2o"
          alt="First slide"
          height= "572px" 
        />
        <Carousel.Caption>
          <h3>Billie Jean King</h3>
          <p>"Champions keep playing until they get it right."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fastly.picsum.photos/id/442/1909/1262.jpg?hmac=x2Y_bIJcLoz2hP7l1F8uZcrAC0eMggHKccKwVgXW7mM"
          alt="Second slide"
          height= "572px" 
          
        />

        <Carousel.Caption>
          <h3>Steve Jobs</h3>
          <p>"The only way to do great work is to love what you do." </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fastly.picsum.photos/id/445/4256/2819.jpg?hmac=99qT1IPidZrzaXTgG1ixRRVwElWXUlNepU2k692G44c"
          alt="Third slide"
          height= "570px" 
        />

        <Carousel.Caption>
          <h3> Jimmy Johnson</h3>
          <p>
          "The difference between ordinary and extraordinary is that little extra."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
          
         <footer>
        <p>&copy; 2023 My Webpage. All rights reserved.</p>
      </footer>

                
            </div>



        );
    }


export default Welcome;

