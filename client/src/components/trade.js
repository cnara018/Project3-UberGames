import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Jumbotron from 'react-bootstrap/Jumbotron'


class Trade extends Component {
  render() {
    return(
      
      <div>

        <Jumbotron style={{ textAlign: 'center' }}>

          <h1>TRADE LISTINGS</h1>
          <p>
            Join the only community of gamers where buyers and sellers have an opportunity
            to negotiate for a better price on any pre-owned merchandise related to gaming.
        </p>
          
        </Jumbotron>

      </div>

    )
  }
}

export default Trade;