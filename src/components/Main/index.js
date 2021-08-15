import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import components
import Shows from '../../containers/Shows';
import SingleShows from '../../containers/SingleShows';

// routes
const Main = (props) => (
  <Switch>
    {/* When on the deafult page, loads the "Shows" component */}
    <Route exact path='/' component={Shows} />

    {/* Favorites route */}
    <Route exact path='/favorites' />

    {/* When a show name is clicked, route to the show's info page using its ID */}
    <Route path='/shows/:id' component={SingleShows} />
  </Switch>
);

export default Main;
