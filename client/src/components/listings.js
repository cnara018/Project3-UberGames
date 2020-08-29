import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'




class Listings extends Component {
  render() {
    return(

      <Container fluid>
       
       <Row>
    <Col>1 of 3</Col>

    <Col xs={6}>
    
    <Form.Row>
    <Form.Label column="lg" lg={2}>
      
      <Button variant="secondary" size="lg" active>
Button
  </Button>
  
    </Form.Label>

    <Col>
      <Form.Control size="lg" type="text" placeholder="Large text" />
    </Col>

  </Form.Row>
    
    </Col>
    
    <Col>3 of 3</Col>
  </Row>
 
</Container>

    
      

    )
  }
}

export default Listings;