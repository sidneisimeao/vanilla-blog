import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Container from "react-bulma-components/lib/components/container"
import Columns from 'react-bulma-components/lib/components/columns';

import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';

const PrimaryLayout = () => (
  <div className="main-content">
    <Container>
      <Columns className="is-mobile is-centered">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Redirect to='/' />
        </Switch>
      </Columns>
    </Container>
  </div>
);

export default PrimaryLayout;