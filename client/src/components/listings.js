import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button'
import axios from "axios";


/*  beginning of #1
// this.state = {
//   trade: 'false',
//   price: '$60.00',
//   conditionofgame: 'new',
//   gamedescription: 'Breath of the Wild is an action-adventure game set in an open world where players are tasked with exploring the kingdom of Hyrule while controlling Link.',
//   developer: 'Nintendo EPD',
//   esrbrating: 'E10+',
//   genre: 'Action-adventure',
//   platform: 'Nintendo Switch',
//   gamename: 'The Legend of Zelda: Breath of the Wild',
//   imageurl: 'teshttps://d2skuhm0vrry40.cloudfront.net/2017/articles/1/8/7/8/8/7/0/148430785862.jpg/EG11/thumbnail/598x968/format/jpg/quality/85t9',
//   UserId: 1
// }
end of #1 */ 


/*  beginning of #2
    trade: 'false',
      price: '$60.00',
      conditionofgame: 'new',
      gamedescription: 'This deluxe version of the Pikmin 3 game includes new side-story missions featuring Olimar and Louie, the ability to play Story mode with a friend.',
      developer: 'Monolith Soft, Nintendo Entertainment Analysis & Development',
      esrbrating: 'E10+',
      genre: 'Action- Real-time strategy',
      platform: 'Nintendo Switch',
      gamename: 'Pikmin 3 Deluxe',
      imageurl: 'https://images-na.ssl-images-amazon.com/images/I/71WYCvNFm1L._AC_SY445_.jpg',
      UserId: 1
    }
end of #2 */ 


/*  beginning of #3
// this.state = {
//   trade: 'false',
//   price: '$40.00',
//   conditionofgame: 'used',
//   gamedescription: 'Mario Kart 8 Deluxe is a racing game for the Nintendo Switch, and the first Mario game overall for the console. It is a port in the Mario Kart series, being a port of Mario Kart 8 from the Wii U.',
//   developer: 'Nintendo',
//   esrbrating: 'N/A',
//   genre: 'Racing',
//   platform: 'Nintendo Switch',
//   gamename: 'Mario Kart 8 Deluxe',
//   imageurl: 'https://vignette.wikia.nocookie.net/mariokart/images/9/9b/MK8_Deluxe_-_Box_NA.png/revision/latest/top-crop/width/360/height/450?cb=20170704085016',
//   UserId: 1
// }
end of #3 */ 


/*  beginning of #4
/   this.state = {
      trade: 'true',
      price: 'N/A',
      conditionofgame: 'used',
      gamedescription: 'Outwit family and friends as you race across the board to collect the most stars in the original four-player* Mario Party series board game mode.',
      developer: 'Nintendo',
      esrbrating: 'E',
      genre: 'Party',
      platform: 'Nintendo Switch',
      gamename: 'Super Mario Party',
      imageurl: 'https://target.scene7.com/is/image/Target/GUEST_0c8a0d59-dd86-43f3-a98a-b0d6439972ab?wid=488&hei=488&fmt=pjpeg',
      UserId: 1
    }
end of #4 */ 


/*  beginning of #5
  this.state = {
      trade: 'true',
      price: 'N/A',
      conditionofgame: 'used',
      gamedescription: 'Gaming icons clash in the ultimate showdown you can play anytime, anywhere when a new entry in the Super Smash Bros.',
      developer: 'Sora Ltd., Nintendo Entertainment Planning & Development, BANDAI NAMCO Studios',
      esrbrating: 'E10+',
      genre: 'Fighting',
      platform: 'Nintendo Switch',
      gamename: 'Super Smash Bros Ultimate ',
      imageurl: 'https://target.scene7.com/is/image/Target/GUEST_b26ea68d-b0c3-4f30-a67a-4182b17841f3?wid=488&hei=488&fmt=pjpeg',
      UserId: 1
    }
end of #5 */ 


/*  beginning of #6
 this.state = {
      trade: 'true',
      price: 'N/A',
      conditionofgame: 'used',
      gamedescription: 'Escape to a deserted island and create your own paradise as you explore, create, and customize.',
      developer: 'Nintendo, Nintendo Entertainment Planning & Development',
      esrbrating: 'E10+',
      genre: 'Simulation',
      platform: 'Nintendo Switch',
      gamename: 'Animal Crossing: New Horizons',
      imageurl: 'https://static.raru.co.za/cover/2018/09/17/6901059-l.jpg?v=1583396069',
      UserId: 1
    }
end of #6 */ 


class Listings extends Component {
  constructor() {
    super();
    this.state = {
      trade: '',
      price: '',
      conditionofgame: '',
      gamedescription: '',
      developer: '',
      esrbrating: '',
      genre: '',
      platform: '',
      gamename: '',
      imageurl: '',
      UserId: 1
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();
    const user = {
      trade: this.state.trade,
      price: this.state.price,
      conditionofgame: this.state.conditionofgame,
      gamedescription: this.state.gamedescription,
      developer: this.state.developer,
      esrbrating: this.state.esrbrating,
      genre: this.state.genre,
      platform: this.state.platform,
      gamename: this.state.gamename,
      imageurl: this.state.imageurl,
      UserId: this.state.UserId
    };
    axios.post('/api/posts/new', { user }).then((response) => {
      console.log(response.data);
    }, (error) => {
      console.log(error);
    });;
  }

  render() {
    return (
      <div>
        <Jumbotron style={{ textAlign: 'center', backgroundColor: 'transparent' }}>
          <h1>ADD LISTING</h1>
          <p>
            Got something you want to trade or sell? Tell us a bit about it.
        </p>
        </Jumbotron>

        <Container>
  <Row>
    <Col></Col>
    
    <Col xs={6}>
    <div className="center">
              <form onSubmit={this.handleSubmit}>
              <label>
                Person Name:
                <br></br>
                <br></br>
                <input type="text" name="trade" value={this.state.trade} onChange={this.handleChange} placeholder="trade"/>
                <br></br>
                <input type="text" name="price" value={this.state.price} onChange={this.handleChange} placeholder="price"/>
                <br></br>
                <input type="text" name="conditionofgame" value={this.state.conditionofgame} onChange={this.handleChange} placeholder="conditionofgame"/>
                <br></br>
                <input type="text" name="gamedescription" value={this.state.gamedescription} onChange={this.handleChange} placeholder="gamedescription"/>
                <br></br>
                <input type="text" name="developer" value={this.state.developer} onChange={this.handleChange} placeholder="developer"/>
                <br></br>
                <input type="text" name="esrbrating" value={this.state.esrbrating} onChange={this.handleChange} placeholder="esrbrating"/>
                <br></br>
                <input type="text" name="genre" value={this.state.genre} onChange={this.handleChange} placeholder="genre"/>
                <br></br>
                <input type="text" name="platform" value={this.state.platform} onChange={this.handleChange} placeholder="platform"/>
                <br></br>
                <input type="text" name="gamename" value={this.state.gamename} onChange={this.handleChange} placeholder="gamename"/>
                <br></br>
                <input type="text" name="imageurl" value={this.state.imageurl} onChange={this.handleChange} placeholder="imageurl"/>
                <br></br>
                <input type="text" name="UserId" value={this.state.UserId} onChange={this.handleChange}/>
              </label>
              <br></br>
              <button type="submit">Add</button>
            </form>
            </div>

            </Col>

    <Col></Col>

  </Row>
  </Container>
        
        {/* <div className="container">
          <div className="center">
            <form onSubmit={this.handleSubmit}>
              <label>
                Person Name:
                <br></br>
                <input type="text" name="trade" value={this.state.trade} onChange={this.handleChange} placeholder="trade"/>
                <br></br>
                <input type="text" name="price" value={this.state.price} onChange={this.handleChange} placeholder="price"/>
                <br></br>
                <input type="text" name="conditionofgame" value={this.state.conditionofgame} onChange={this.handleChange} placeholder="conditionofgame"/>
                <br></br>
                <input type="text" name="gamedescription" value={this.state.gamedescription} onChange={this.handleChange} placeholder="gamedescription"/>
                <br></br>
                <input type="text" name="developer" value={this.state.developer} onChange={this.handleChange} placeholder="developer"/>
                <br></br>
                <input type="text" name="esrbrating" value={this.state.esrbrating} onChange={this.handleChange} placeholder="esrbrating"/>
                <br></br>
                <input type="text" name="genre" value={this.state.genre} onChange={this.handleChange} placeholder="genre"/>
                <br></br>
                <input type="text" name="platform" value={this.state.platform} onChange={this.handleChange} placeholder="platform"/>
                <br></br>
                <input type="text" name="gamename" value={this.state.gamename} onChange={this.handleChange} placeholder="gamename"/>
                <br></br>
                <input type="text" name="imageurl" value={this.state.imageurl} onChange={this.handleChange} placeholder="imageurl"/>
                <br></br>
                <input type="text" name="UserId" value={this.state.UserId} onChange={this.handleChange}/>
              </label>
              <br></br>
              <button type="submit">Add</button>
            </form>
          </div>
        </div> */}
        <br></br>
        <br></br>
      </div>





    )
  }
}

export default Listings;
