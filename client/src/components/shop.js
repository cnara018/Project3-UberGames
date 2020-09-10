import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'




class Shop extends Component {
  render() {
    return (

      <div>

        <Jumbotron style={{ textAlign: 'center', backgroundColor: 'transparent'}}>

          <h1>SHOP LISTINGS</h1>
          <p>
            Search far and wide for games you've been wanting to get your hands on.
        </p>
        </Jumbotron>

        <div className="container">

    <CardDeck>

  <Card>
    <Card.Img variant="top" src="https://www.mobygames.com/images/covers/l/172541-new-super-mario-bros-wii-wii-front-cover.jpg" alt="not image available"/>
    <Card.Body>
    <Card.Title> Game Name</Card.Title>
    <Card.Text>
    Genre:
    </Card.Text>

    <Card.Text>
    Platform:
    </Card.Text>

    <Card.Text>
    Developer:
    </Card.Text>

    <Card.Text>
    Esrb rating:
    </Card.Text>

    <Card.Text>
    Price:
    </Card.Text>

    <Card.Text>
    Condition: 
    </Card.Text>

    <Card.Text>
      Description: A React component for displaying different types of images, 
      including network images, static resources, temporary local images, and 
      images from local disk, such as the camera roll.This example shows fetching 
      and displaying an image from local storage as well as one from network 
      and even from data provided in the 'data:' uri scheme.

    </Card.Text>

    <Button variant="primary">Buy</Button>
  </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src="https://vignette.wikia.nocookie.net/videogamehistory/images/7/7d/SuperMarioBrosWii.png/revision/latest?cb=20091202214104" alt="not image available"/>
    <Card.Body>
    <Card.Title> Game Name</Card.Title>
    <Card.Text>
    Genre:
    </Card.Text>

    <Card.Text>
    Platform:
    </Card.Text>

    <Card.Text>
    Developer:
    </Card.Text>

    <Card.Text>
    Esrb rating:
    </Card.Text>

    <Card.Text>
    Price
    </Card.Text>

    <Card.Text>
    Condition 
    </Card.Text>

    <Card.Text>
      Description:A React component for displaying different types of images, 
      including network images, static resources, temporary local images, and images from local disk, such as the camera roll.
      This example shows fetching and displaying an image from local storage as well as one from network and even from data provided in the 'data:' uri scheme.
    </Card.Text>

    <Button variant="primary">Buy</Button>
  </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src="https://images.nintendolife.com/games/wiiu/new_super_mario_bros_u/cover_large.jpg" alt="not image available"/>
    <Card.Body>
    <Card.Title> Game Name</Card.Title>
    <Card.Text>
    Genre:
    </Card.Text>

    <Card.Text>
    Platform:
    </Card.Text>

    <Card.Text>
    Developer:
    </Card.Text>

    <Card.Text>
    Esrb rating:
    </Card.Text>

    <Card.Text>
    Price:
    </Card.Text>

    <Card.Text>
    Condition: 
    </Card.Text>

    <Card.Text>
      Description:A React component for displaying different types of images, 
      including network images, static resources, temporary local images, and images from local disk, such as the camera roll.
      This example shows fetching and displaying an image from local storage as well as one from network and even from data provided in the 'data:' uri scheme.
    </Card.Text>

    <Button variant="primary">Buy</Button>
  </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  
</CardDeck>



  </div>

      </div>

    )
  }
}

export default Shop;