import React, { Component } from 'react';
// import { Grid, Cell } from 'react-mdl';
// import Education from './education';
import axios from "axios";
// import { response } from 'express';
// import Experience from './experience';
// import Skills from './skills';

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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
            <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default Trade;