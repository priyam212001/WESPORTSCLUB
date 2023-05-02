import React, {Component} from 'react';
import {Row,Col,Card, CardText, CardBody, CardTitle, CardSubtitle, CardLink} from 'reactstrap';
class CoursesHome extends Component{
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
      YOGA
    </CardTitle>
   
  </CardBody>
  <img
    alt="Card cap"
    src="https://fastly.picsum.photos/id/65/4912/3264.jpg?hmac=uq0IxYtPIqRKinGruj45KcPPzxDjQvErcxyS1tn7bG0"
    width="100%"
  />
  <CardBody>
    <CardText>
    (YOH-guh) An ancient system of practices used to balance the mind and body through exercise, meditation (focusing thoughts), and control of breathing and emotions.
    </CardText>
    <CardLink href="https://medlineplus.gov/ency/patientinstructions/000876.htm#:~:text=Yoga%20is%20a%20practice%20that,exercise%20or%20to%20reduce%20stress.">
      Card Link
    </CardLink>
  </CardBody>
</Card>
</Col>
<Col>
<Card style={{width: '15rem'}}>
  <CardBody >
    <CardTitle tag="h5">
      SWIMMING
    </CardTitle>
   
  </CardBody>
  <img
    alt="Card cap"
    src="https://fastly.picsum.photos/id/74/4288/2848.jpg?hmac=q02MzzHG23nkhJYRXR-_RgKTr6fpfwRgcXgE0EKvNB8"
    width="100%"
  />
  <CardBody >
    <CardText>
    Swimming is an activity that involves moving through the water using your arms and legs. One of the best ways to cool off on a hot summer day is swimming in a cold lake or pool.
    </CardText>
    <CardLink href="https://www.vocabulary.com/dictionary/swimming">
      Card Link
    </CardLink>
  </CardBody>
</Card>
</Col>
<Col>
<Card style={{width: '15rem'}}>
  <CardBody >
    <CardTitle tag="h5">
      ZUMBA
    </CardTitle>
   
  </CardBody>
  <img
    alt="Card cap"
    src="https://fastly.picsum.photos/id/158/4836/3224.jpg?hmac=Gu_3j3HxZgR74iw1sV0wcwlnSZSeCi7zDWLcjblOp_c"
    width="100%"
  />
  <CardBody >
    <CardText>
    Zumba's most well-known program is its namesake class, Zumba it help to improve cardiovascular fitness while also enhancing balance, coordination, agility, and to some degree.
    </CardText>
    <CardLink href="https://www.verywellfit.com/zumba-pros-cons-and-how-it-works-4688722">
      Card Link
    </CardLink>
  </CardBody>
</Card>
</Col>

<Col>
<Card style={{width: '15rem'}}>
  <CardBody >
    <CardTitle tag="h5">
      POWER LIFTING
    </CardTitle>
   
  </CardBody>
  <img
    alt="Card cap"
    src="https://fastly.picsum.photos/id/355/5000/3360.jpg?hmac=_CS8fJBk6AVblS9aD-lcrZtxTImqe7wndqOH0PdQ7P8"
    width="100%"
  />
  <CardBody >
    <CardText>
    Powerlifting is an individual sport where the goal is to lift the most amount of weight possible in the squat, bench press, and deadlift in a specific weight and age category.
    </CardText>
    <CardLink href="https://powerliftingtechnique.com/what-is-powerlifting/">
      Card Link
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

export default CoursesHome;