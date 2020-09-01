import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
// import Education from './education';
// import Experience from './experience';
// import Skills from './skills';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'


class Post extends Component {
  render() {
    return(
      
<Container fluid>
      
       
      <Row>
   <Col>1 of 3</Col>

   <Col xs={6}>
   
   <div>

   <div>
 <br></br>
 <h1>ADD NEW LISTING</h1>


 <InputGroup className="mb-3">
   <FormControl
     placeholder="Recipient's username"
     aria-label="Recipient's username"
     aria-describedby="basic-addon2"
   />
   <InputGroup.Append>
     <Button variant="outline-secondary">Button</Button>
   </InputGroup.Append>
 </InputGroup>

</div>

</div>

   </Col>
   
   <Col>3 of 3</Col>
 </Row>

</Container>





    )
  }
}

export default Post;