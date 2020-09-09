import React, { Component } from 'react';
// import { Grid, Cell } from 'react-mdl';
// import Education from './education';
import axios from "axios";
// import { response } from 'express';
// import Experience from './experience';
// import Skills from './skills';
import { Grid, Cell } from 'react-mdl';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'

// var $password = ('test2');
// var $username = ('test');
// var user = {
//   username: $username,
//   password: $password
// };

class Trade extends Component {
constructor(){
  super();
  this.state = {
    username: 'Pool',
    password: 'dead'
  }
}
handleChange = event => {
  this.setState({  [event.target.name]: event.target.value});
}
  handleSubmit = event =>{
    event.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    axios.post('/api/users/new', {user}).then( (response) => {
          console.log(response.data);
        }, (error) =>{
          console.log(error);
        });;
  }
  // test(){
  //   axios.post('/api/users/new', {
  //     username: 'test',
  //     password: 'test2'
  //   }).then( (response) => {
  //     console.log(response.data);
  //   }, (error) =>{
  //     console.log(error);
  //   });
  // };
  render() {
    // return (
    //   <div>
    //     <form onSubmit={this.handleSubmit}>
    //       <label>
    //         Person Name:
    //         <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
    //         <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
    //       </label>
    //       <button type="submit">Add</button>
    //     </form>
    //     </div>
    //     )
    return(
      
      <div>

        <Jumbotron style={{ textAlign: 'center', backgroundColor: 'transparent'}}>

          <h1>TRADE LISTINGS</h1>
          <p>
            Looking for some trade deals? This is the place you want to be.
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
    <Button variant="primary">Trade</Button>
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
    <Button variant="primary">Trade</Button>
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
    <Button variant="primary">Trade</Button>
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
    <Button variant="primary">Trade</Button>
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
    <Button variant="primary">Trade</Button>
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
    <Button variant="primary">Trade</Button>
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
    <Button variant="primary">Trade</Button>
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
    <Button variant="primary">Trade</Button>
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
    <Button variant="primary">Trade</Button>
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

export default Trade;