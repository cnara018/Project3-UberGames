import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from 'react-bootstrap/Button'

import Jumbotron from 'react-bootstrap/Jumbotron'





class Listings extends Component {
  render() {
    return (

      <div>

      <Jumbotron style={{ textAlign: 'center' }}>

        <h1>SHOP LISTINGS</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

      <Container fluid>

      <Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>

        

      </Container>

      

      </div>
    









    )
  }
}

export default Listings;