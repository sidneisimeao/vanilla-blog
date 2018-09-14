import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';

const PrimaryLayout  = () => (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/about' component={AboutPage}/>
      <Redirect to='/' />
    </Switch> 
);

export default PrimaryLayout;