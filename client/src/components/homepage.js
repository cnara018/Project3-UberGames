//Homepage
import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'




class HomePage extends Component {
  render() {
    return (


      <div>

        <Jumbotron fluid ID="main" style={{ textAlign: 'center' }}>

          <h2 style={{ color: "white" }}>WELCOME TO UBERGAMES</h2>
          <p style={{ color: "white" }}>
            A community of gamers aiming to build the greatest
          resource for buying and selling video games. </p>

        </Jumbotron>

<Container fluid>

        <CardDeck>

          <Card className="bg-dark text-white">
            <Card.Img src="https://cdn.mos.cms.futurecdn.net/MMwRCjVEaoJPP4dBBugWFY.jpg" alt="Card image" />
            <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            </Card.ImgOverlay>
          </Card>

          <Card className="bg-dark text-white">
            <Card.Img src="https://i.pcmag.com/imagery/lineups/06PiprC5eiYhlpaNS6N0sbP-1.1569492872.fit_lim.size_1200x630.jpg" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
            </Card.ImgOverlay>
          </Card>

          <Card className="bg-dark text-white">
            <Card.Img src="https://fullsync.co.uk/wp-content/uploads/2020/03/Video-game-Controllers.jpg" alt="Card image" />
            <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            </Card.ImgOverlay>
          </Card>

        </CardDeck>


    



      </Container>

      </div>


    )
  }
}

export default HomePage;
