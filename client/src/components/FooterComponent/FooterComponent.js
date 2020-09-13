import React from 'react';
import { Link } from 'react-router-dom';
import {  Navigation} from 'react-mdl';

const Footer = props => (

   <div className="header-color" style={{backgroundColor: 'black'}} title={<Link style={{textDecoration: 'none', color: 'white',}} to="/">UberGames</Link>}>
        <Navigation>
            <Link to="/termsofservice" style={{textDecoration: 'none', color: 'white' ,  margin: "auto" }}>Terms of Service &copy; 2020 </Link>
        </Navigation>
    </div>
);

export default Footer;