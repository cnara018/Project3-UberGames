import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


class Profile extends Component {
  render() {
    return (

      <div className="container">
        <br></br>

        <Container>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.pngitem.com/pimgs/m/97-970805_cartoon-face-with-glasses-hd-png-download.png" />
                <Card.Body>
                  <Card.Title>Bob Bush</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                </Card.Body>
              </Card>

            </Col> 
            
            <Col xs={6}>
            <Card body>
            Contact Information
            <br></br>
            <br></br>
            Email:
            <br></br>
            <br></br>
            Phone:
            </Card>

            <br></br>
            <Card body>
            <br></br>
            Sells or Trade activity
            <br></br>
            <br></br>
            Seller ranking
            <br></br>
            <br></br>
            News Feed
            </Card>
            
            </Col>

            <Col></Col>
            
          </Row>

        </Container>

      </div>

    )
  }
}

export default Profile;