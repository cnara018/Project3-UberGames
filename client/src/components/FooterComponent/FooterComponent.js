import React from 'react';
import {NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {  Navigation} from 'react-mdl';
//import TermsOfService from 'termsofservice';

const Footer = props => (

   <div className="header-color" style={{backgroundColor: 'black'}} title={<Link style={{textDecoration: 'none', color: 'white',}} to="/">UberGames</Link>}>
        <Navigation>
            <NavLink to="/termsofservice" style={{textDecoration: 'none', color: 'white' ,  margin: "auto" }}>Terms of Service &copy; 2020 </NavLink>
        </Navigation>
    </div>
);

export default Footer;