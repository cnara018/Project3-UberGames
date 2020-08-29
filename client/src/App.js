import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">UberGames</Link>} scroll>
            <Navigation>
                <Link to="/listings">Listings</Link>
                <Link to="/login">Login</Link>
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
