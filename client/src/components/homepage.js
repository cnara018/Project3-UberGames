//Homepage
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../puppy1.jpg';
import logo2 from '../puppy2.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



class HomePage extends Component {
  render() {
    return(

      <Container fluid="lg">
      <Row>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Row>
      
    </Container>

      
  
  
  

      
      
//       <div style={{width: '100%', margin: 'auto'}}>
//         <Grid className="landing-grid">
//           <Cell col={12}>
//           <Jumbotron>
//   <h1>Hello, world!</h1>
//   <p>
//     This is a simple hero unit, a simple jumbotron-style component for calling
//     extra attention to featured content or information.
//   </p>

// </Jumbotron>
//             <img
//               src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
//               alt="avatar"
//               className="avatar-img"
//               />

//             <div className="banner-text">
//               <h1>Full Stack Web Developer</h1>

//             <hr/>

//           <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

//         <div className="social-links">

//           {/* LinkedIn */}
//           <a href="http://google.com" rel="noopener noreferrer" target="_blank">
//             <i className="fa fa-linkedin-square" aria-hidden="true" />
//           </a>

//           {/* Github */}
//           <a href="http://google.com" rel="noopener noreferrer" target="_blank">
//             <i className="fa fa-github-square" aria-hidden="true" />
//           </a>

//           {/* Freecodecamp */}
//           <a href="http://google.com" rel="noopener noreferrer" target="_blank">
//             <i className="fa fa-free-code-camp" aria-hidden="true" />
//           </a>

//           {/* Youtube */}
//           <a href="http://google.com" rel="noopener noreferrer" target="_blank">
//             <i className="fa fa-youtube-square" aria-hidden="true" />
//           </a>

//         </div>
//             </div>
//           </Cell>
//         </Grid>
//       </div>
    )
  }
}

export default HomePage;
