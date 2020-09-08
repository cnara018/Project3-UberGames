import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './homepage';
import Login from './login';
import Signup from './signup';
import Profile from './profile';
import TermsOfService from './termsofservice';
import Listings from './listings';
import Search from './listings-search';
import Shop from './shop';
import Trade from './trade';


const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/listings" component={Listings} />
    <Route path="/trade" component={Trade} />
    <Route path="/shop" component={Shop} />
    <Route path="/search" component={Search} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/profile" component={Profile} />
    <Route path="/termsofservice" component={TermsOfService} />
   
  </Switch>
)

export default Main;