import React, { Component } from 'react';

// section imports
import './App.css';
import Main from '../../components/Main';

// for API fetching
import 'whatwg-fetch';


// material UI imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends Component {
      render() {
        return (
          <div className="App">
              <AppBar position="static" >
                  <Toolbar >
                      <Typography variant="title" color="inherit" style={{flex:1}} align="center">
                          TV Shows
                      </Typography>
                  </Toolbar>
              </AppBar>
              <Main />

          </div>
        );
      }
}

export default App;
