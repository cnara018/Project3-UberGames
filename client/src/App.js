//Navbar & Footer
import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (

      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" style={{backgroundColor: 'black'}} title={<Link style={{textDecoration: 'none', color: 'white',}} to="/">UberGames</Link>} scroll>
            <Navigation>
                <Link to="/login">Login</Link>
                <Link to="/listings">Listings</Link>
                <Link to="/news">News</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/termsofservice">T.O.S.</Link>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
