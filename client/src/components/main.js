import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './homepage';
import Listings from './listings';
import Login from './login';
import News from './news';
import Profile from './profile';
import TermsOfService from './termsofservice';


const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/listings" component={Listings} />
    <Route path="/login" component={Login} />
    <Route path="/news" component={News} />
    <Route path="/profile" component={Profile} />
    <Route path="/termsofservice" component={TermsOfService} />
  </Switch>
)

export default Main;