import React, { Component } from 'react';

// import components
import ShowsList from '../../components/ShowsList';
import Intro from '../../components/Intro';
import Card from '../../components/UI/Card';

// import material UI
import TextField from '@material-ui/core/TextField';

class Shows extends Component {
  state = {
    shows: [],
    showsName: '',
    isFetching: false,
    importantText: '',
  };

  // when search input changes
  onShowsInputChange = (e) => {
    this.setState({ showsName: e.target.value, isFetching: true });
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then((response) => response.json())
      .then((json) => this.setState({ shows: json, isFetching: false }));

    // Log each time search results change, from user input
    console.log('Searching shows!');
  };

  // the searching part itself
  render() {
    const { shows, showsName, isFetching, importantText } = this.state;
    return (
      <div>
        {/* intro appears above search */}
        <Intro message={'Search for a show you like!'} />

        <div>
          <TextField
            id='search'
            label='Search for Shows!'
            type='search'
            margin='normal'
            value={showsName}
            onChange={this.onShowsInputChange}
            helperText={importantText}
          />
        </div>

        <div>
          {/* type in the search form to start searching */}
          {!isFetching && shows.length === 0 && showsName.trim() === '' && (
            <p> Enter your search above! </p>
          )}

          {/* show list of shows matching search input */}
          {!isFetching && <ShowsList list={this.state.shows} />}

          {/* no search results, try again */}
          {!isFetching && shows.length === 0 && showsName.trim() !== '' && (
            <p> No search results... perhaps you mispelled something? </p>
          )}
        </div>

        {/* text below the list */}
        <p>Click a show from the list to see its information.</p>
      </div>
    );
  }
}

export default Shows;
