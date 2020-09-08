//Homepage
import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'


class HomePage extends Component {
  render() {
    return(

      <div>
      <Jumbotron style={{ textAlign: 'center' }}>

          <h1>WELCOME TO UBERGAMES</h1>
          <p>
          A community of gamers aiming to build the greatest 
          resource for buying and selling video games. </p>
          
        </Jumbotron>

        <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>

        </div>

      
  
  
  

      
      
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
