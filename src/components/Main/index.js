import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import components
import Shows from "../../containers/Shows";
import SingleShows from "../../containers/SingleShows";

// routes
const Main=props => (
    <Switch>

        {/* when on the deafult page, loads the "Shows" component */}
        <Route exact path="/" component={ Shows }/>

        {/* When a show name is clicked, route to the show's page via its ID */}
        <Route path="/shows/:id" component ={ SingleShows }/>

    </Switch>
);

export default Main;