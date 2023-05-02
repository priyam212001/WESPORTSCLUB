import React,{Component} from "react";
 import './style1.css';
class Home extends Component{
render(){
    return(
        <div >
         <div id="backgroundimage"></div>
      <header>
        <nav>
          <ul>
            <li><a href="/home">HOME</a></li>
            <li><a href="/courses">COURSES</a></li>
            <li><a href="/trainers">TRAINERS</a></li>
            <a href="/addmemberdetails" target="_blank" rel="noopener noreferrer">
            <button>Enroll Now</button>
            </a>
          </ul>
          
        </nav>
      </header>
      <main>
        
        <h1 className="text-center">Welcome to WESPORTSCLUB!</h1>
        <br></br>
        <p><b>'Sport' means all forms of physical activity which, through casual or organised participation, aim at expressing or improving physical fitness and mental wellbeing, forming social relationships or obtaining results in competition at all levels.</b></p>
<br></br>
       <p><b>WeSportsClub is a site in which you can explore different courses with experienced trainer.We provide a best training with friendy environment to make sure everybody will be healthy and fit and enjoy their life to the fullest.</b></p>
      </main>

      <footer>
        <p>&copy; 2023 My Webpage. All rights reserved.</p>
      </footer>
    </div>
    );
}
}
export default Home;