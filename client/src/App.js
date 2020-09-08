//Navbar & Footer
import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content, Footer } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (

      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" style={{backgroundColor: '#1C2C54'}} title={<Link style={{textDecoration: 'none', color: 'white',}} to="/">UberGames</Link>} scroll>
            <Navigation>
                <Link to="/shop">Shop</Link>
                <Link to="/trade">Trade</Link>
                <Link to="/listings">Listings</Link>
                <Link to="/profile">My Profile</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>

        <Footer className="header-color" style={{backgroundColor: '#1C2C54'}} title={<Link style={{textDecoration: 'none', color: 'white',}} to="/">UberGames</Link>} scroll>
            <Navigation>
            
                <Link to="/termsofservice" style={{textDecoration: 'none', color: 'white' ,  margin: "auto" }}>Terms of Service &copy; 2020 </Link>
            </Navigation>
        </Footer>

    </Layout>
</div>

    );
  }
}

export default App;
