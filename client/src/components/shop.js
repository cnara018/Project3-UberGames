import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Nav from 'react-bootstrap/Nav'


class Shop extends Component {
  render() {
    return (

      <div>

        <Jumbotron style={{ textAlign: 'center' }}>

          <h1>SHOP LISTINGS</h1>
          <p>
            Join the only community of gamers where buyers and sellers have an opportunity
            to negotiate for a better price on any pre-owned merchandise related to gaming.
        </p>
          
        </Jumbotron>

      </div>

    )
  }
}

export default Shop;