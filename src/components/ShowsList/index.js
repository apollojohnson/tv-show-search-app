import React from 'react';
import { Link } from 'react-router-dom';

// import material UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ShowsListItem = ({ shows }) => (
  // connecting show to show's page
  <Link to={`/shows/${shows.show.id}`}>
    <ListItem button>
      <ListItemText primary={shows.show.name} />
    </ListItem>
  </Link>
);

// when show is clicked
const ShowsList = (props) => {
  return (
    // styling the result when the show is clicked on
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <List component='nav'>
        {props.list.map((shows) => (
          <ShowsListItem shows={shows} key={shows.show.id} />
        ))}
      </List>
    </div>
  );
};

export default ShowsList;
