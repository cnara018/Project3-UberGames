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
            Join the only community of gamers where buyers and sellers have an opportunity
            to negotiate for a better price on any pre-owned merchandise related to gaming.
        </p>
        </Jumbotron>

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
    <Button variant="primary">Shop</Button>
  </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
    <Card.Title>Game Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Shop</Button>
  </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
    <Card.Title>Game Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Shop</Button>
  </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
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
    <Button variant="primary">Shop</Button>
  </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
    <Card.Title>Game Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Shop</Button>
  </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
    <Card.Title>Game Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Shop</Button>
  </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
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
    <Button variant="primary">Shop</Button>
  </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
    <Card.Title>Game Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Shop</Button>
  </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
    <Card.Title>Game Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Shop</Button>
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