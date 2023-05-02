import React, {Component} from 'react';
import {Row,Col,Card, CardText, CardBody, CardTitle, CardSubtitle, CardLink} from 'reactstrap';
class TrainersHome extends Component{
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
          <h1 className="text-center">COURSES DETAILS</h1>
          <br></br>
  
          <Row>
            <Col>
            
          <Card style={{width: '15rem'}}>
    <CardBody>
      <CardTitle tag="h5">
        PRIYAM MISHRA
      </CardTitle>
     
    </CardBody>
    
    <CardBody>
      <CardText>
      Priyam Mishra is a yoga trainer who is passionate about helping individuals achieve physical and spiritual well-being through the practice of yoga.Priyam has honed her skills in various forms of yoga, including Hatha yoga, Vinyasa yoga, and Ashtanga yoga.
      
      </CardText>
      <h5>Trainer id:9</h5>
      <CardLink href="https://www.linkedin.com/in/priyam-mishra-31843a205/">
        Linkedln
      </CardLink>
    </CardBody>
  </Card>
  </Col>
  <Col>
  <Card style={{width: '15rem'}}>
    <CardBody >
      <CardTitle tag="h5">
        KHUSHI MISHRA
      </CardTitle>
     
    </CardBody>
    <CardBody >
      <CardText>
      Khushi Mishra is a professional gymnastic trainer with years of experience in coaching and training athletes. She is known for her exceptional skills in teaching various gymnastic disciplines, including artistic gymnastics, rhythmic gymnastics, and acrobatic gymnastics.
      </CardText>
      <h5>Trainer id:10</h5>
      <CardLink href="https://www.linkedin.com/in/khushi-mishra-a0524b253/">
      Linkedln
      </CardLink>
    </CardBody>
  </Card>
  </Col>
  <Col>
  <Card style={{width: '15rem'}}>
    <CardBody >
      <CardTitle tag="h5">
        GAUTAM GUPTA
      </CardTitle>
     
    </CardBody>
    
    <CardBody >
      <CardText>
      Gautam Gupta is a highly skilled and experienced Zumba trainer who is passionate about helping people achieve their fitness goals. He has been a Zumba instructor for over a decade and has trained hundreds of people of all ages and fitness levels.
      </CardText>
      <h5>Trainer id:55</h5>
      <CardLink href="https://www.linkedin.com/in/gautam-g-960545118/">
      Linkedln
      </CardLink>
    </CardBody>
  </Card>
  </Col>
  
  
  </Row>
        </main>
  
        <footer>
          <p>&copy; 2023 My Webpage. All rights reserved.</p>
        </footer>
      </div>
      );
}
}

export default TrainersHome;