import React, { Component } from 'react';

// section imports
import './App.css';
import Main from '../../components/Main';
import Card from '../UI/Card';

// for API fetching
import "whatwg-fetch";

// material UI imports
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            {/* TV Show Search text on toolbar */}
            <Typography
              variant='title'
              color='inherit'
              style={{ flex: 1 }}
              align='center'
            >
              TV Show Search
            </Typography>

            {/* Favorites text on toolbar */}
            <Typography
              variant='title'
              color='inherit'
              style={{ flex: 1 }}
              align='center'
            >
              Favorites
            </Typography>
          </Toolbar>
        </AppBar>
        <Main />
      </div>
    );
  }
}

export default App;
