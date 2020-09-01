import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';


class Post extends Component {
  render() {
    return(

      <div>

        <Jumbotron style={{ textAlign: 'center' }}>

          <h1>ADD NEW LISTING</h1>
          <p>
            Join the only community of gamers where buyers and sellers have an opportunity
            to negotiate for a better price on any pre-owned merchandise related to gaming.
        </p>

          <InputGroup className="mb-2">
            <FormControl 
              placeholder="Search Games"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />

            <InputGroup.Append>
              <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
          </InputGroup>

        </Jumbotron>

        <Container fluid>
          <Container>
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

export default Post;