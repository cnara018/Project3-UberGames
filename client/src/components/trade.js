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

    {/* <Button variant="primary">Buy</Button> */}
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

    {/* <Button variant="primary">Buy</Button> */}
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

    {/* <Button variant="primary">Buy</Button> */}
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