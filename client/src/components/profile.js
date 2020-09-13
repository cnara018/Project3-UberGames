import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'



class Profile extends Component {
  render() {
    return(
      <div>

      <Jumbotron style={{ textAlign: 'center', backgroundColor: 'transparent'}}>

        <h1>My Profile</h1>

        <Card>
  <Card.Img  style={{ width: '18rem', margin: 'auto'}} variant="top" src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg" />
<Card.Body>
  <Card.Title>John Doe</Card.Title>
  <Card.Text>
    Email contact: Johndoerulez@gmail.com
    <br></br>
    Phone Number: (123) - 123 - 1234
  </Card.Text>
  <Button variant="primary">Edit Profile Image</Button>
</Card.Body>
</Card>
       
      </Jumbotron>

      

  

      

</div>


    )
  }
}

export default Profile;