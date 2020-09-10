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

      <div className="container">
      <InputGroup className="mb-2">
          <FormControl 
            placeholder="Search for your listings"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />

          <InputGroup.Append>
            <Button variant="outline-secondary">Search</Button>
          </InputGroup.Append>
        </InputGroup>

        </div>

      <br></br>

      <div className="container">

      <CardDeck>
<Card>
  <Card.Img variant="top" src="holder.js/100px160" />
<Card.Body>
  <Card.Title>Game Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="primary">Edit my Listing</Button>
</Card.Body>
</Card>

<Card>
  <Card.Img variant="top" src="holder.js/100px160" />
  <Card.Body>
  <Card.Title>Game Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="primary">Edit my Listing</Button>
</Card.Body>
</Card>

<Card>
  <Card.Img variant="top" src="holder.js/100px160" />
  <Card.Body>
  <Card.Title>Game Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="primary">Edit my Listing</Button>
</Card.Body>
</Card>
</CardDeck>

<br></br>

<CardDeck>
<Card>
  <Card.Img variant="top" src="holder.js/100px160" />
  <Card.Body>
  <Card.Title>Game Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="primary">Edit my Listing</Button>
</Card.Body>
</Card>

<Card>
  <Card.Img variant="top" src="holder.js/100px160" />
  <Card.Body>
  <Card.Title>Game Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="primary">Edit my Listing</Button>
</Card.Body>
</Card>

<Card>
  <Card.Img variant="top" src="holder.js/100px160" />
  <Card.Body>
  <Card.Title>Game Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="primary">Edit my Listing</Button>
</Card.Body>
</Card>

</CardDeck>
<br></br>
</div>

</div>


    )
  }
}

export default Profile;