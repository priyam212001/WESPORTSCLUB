import React,{Component} from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Row,Col,Card, CardText, CardBody, CardTitle, CardSubtitle, CardLink} from 'reactstrap';
class AdminHome extends Component{
render(){
    return(
        <div>
           <div id="backgroundimage"></div>
          <header>
        <nav>
 <h1 className="text-center">ADMIN ACCESS PAGE</h1>
 </nav>
 </header>
 <main>
<Row>
  <Col>
  <Card
  style={{
    width: '18rem'
  }}>
  <CardBody>
    <CardTitle tag="h5">
     USER DETAILS
    </CardTitle>
  </CardBody>
  
  <CardBody>
    <CardLink href="/userdetails">
      Click here
    </CardLink>
  </CardBody>
</Card>
 
</Col>

<Col>
  <Card
  style={{
    width: '18rem'
  }}>
  <CardBody>
    <CardTitle tag="h5">
     TRAINER DETAILS
    </CardTitle>
  </CardBody>
  
  <CardBody>
    <CardLink href="/trainerdetails">
    Click here
    </CardLink>
  </CardBody>
</Card>
 
</Col>

<Col>
  <Card
  style={{
    width: '18rem'
  }}>
  <CardBody>
    <CardTitle tag="h5">
     COURSE DETAILS
    </CardTitle>
  </CardBody>
  
  <CardBody>
    <CardLink href="/coursedetails">
    Click here
    </CardLink>
  </CardBody>
</Card>
 
</Col>

<Col>
  <Card
  style={{
    width: '18rem'
  }}>
  <CardBody>
    <CardTitle tag="h5">
     EQUIPMENT DETAILS
    </CardTitle>
  </CardBody>
  
  <CardBody>
    <CardLink href="/equipmentdetails">
    Click here
    </CardLink>
  </CardBody>
</Card>
 
</Col>

</Row>
<br></br>
<br></br>
<Row>
<Col>
  <Card
  style={{
    width: '18rem'
  }}>
  <CardBody>
    <CardTitle tag="h5">
       COURSE HISTORY DETAILS
    </CardTitle>
  </CardBody>
  
  <CardBody>
    <CardLink href="/coursehistorydetails">
    Click here
    </CardLink>
  </CardBody>
</Card>
 
</Col>

{/* <Col>
  <Card
  style={{
    width: '18rem'
  }}>
  <CardBody>
    <CardTitle tag="h5">
       PAYMENT DETAILS
    </CardTitle>
  </CardBody>
  
  <CardBody>
    <CardLink href="/paymentdetails">
    Click here
    </CardLink>
  </CardBody>
</Card>
 
</Col> */}

<Col>
  <Card
  style={{
    width: '18rem'
  }}>
  <CardBody>
    <CardTitle tag="h5">
       MEMBER DETAILS
    </CardTitle>
  </CardBody>
  
  <CardBody>
    <CardLink href="/memberdetails">
    Click here
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
export default AdminHome;