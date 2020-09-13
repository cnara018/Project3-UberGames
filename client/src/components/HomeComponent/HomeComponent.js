import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import PostComponent from '../PostComponent/PostComponent';
import axios from "axios";


class Home extends Component {

    constructor(props){
        super(props);
        this.state={
            city:{
                islamabad:'0',
                rawalpindi:'0'
            },
            for:{
                sale:'0',
                rent:'0'
            }
        }
    }
    componentWillMount() {
        axios.get("http://localhost:5000/api/post/count/Playstation")
            .then((response) => {
                this.setState({
                    city:{
                        ...this.state.city,
                        islamabad: response.data
                    }
                },()=>{
                    console.log(this.state)
                })
            }).catch((error) => {
        });
        axios.get("http://localhost:5000/api/post/count/Xbox")
            .then((response) => {
                this.setState({
                    city:{
                        ...this.state.city,
                        rawalpindi: response.data
                    }
                },()=>{
                    console.log(this.state)
                })
            }).catch((error) => {
        });
        axios.get("http://localhost:5000/api/post/count/condition/New")
            .then((response) => {
                this.setState({
                    for:{
                        ...this.state.for,
                        sale: response.data
                    }
                },()=>{
                    console.log(this.state)
                })
            }).catch((error) => {
        });
        axios.get("http://localhost:5000/api/post/count/condition/Used")
            .then((response) => {
                this.setState({
                    for:{
                        ...this.state.for,
                        rent: response.data
                    }
                },()=>{
                    console.log(this.state)
                })
            }).catch((error) => {
        });
    }

    
    render() {
        return (
          <div> 
                 <Jumbotron fluid ID="main" style={{ textAlign: 'center' }}>
                    <h2 style={{ color: "white" }}>WELCOME TO UBERGAMES</h2>
                    <h6 style={{ color: "white" }}>A community of gamers aiming to build the greatest
                    resource for buying and selling video games. </h6>
                 </Jumbotron>
    
            <Container fluid>
                <CardDeck>
                <Card className="bg-dark text-white">
                    <Card.Img src="https://cdn.mos.cms.futurecdn.net/MMwRCjVEaoJPP4dBBugWFY.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white">
                    <Card.Img src="https://i.pcmag.com/imagery/lineups/06PiprC5eiYhlpaNS6N0sbP-1.1569492872.fit_lim.size_1200x630.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white">
                    <Card.Img src="https://fullsync.co.uk/wp-content/uploads/2020/03/Video-game-Controllers.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                    </Card.ImgOverlay>
                </Card>
                </CardDeck>
            </Container>
         </div>
        )
      }
}

export default Home;