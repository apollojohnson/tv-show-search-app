// imports
import { useReducer } from "react";
import axios from "axios";

// context imports
import ShowsContext from "./showsContext";
import ShowsReducer from "./showsReducer";

import {
  SEARCH_SHOWS,
  SET_SINGLE_SHOW,
  CLEAR_SINGLE_SHOW,
  SET_LOADING,
} from "../types";

const ShowsState = (props) => {
  const initialState = {
    shows: [],
    singleShow: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(ShowsReducer, initialState);

  const searchShows = async (searchTerm) => {
    dispatch({ type: SET_LOADING });

    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );

    // log data to console as array
    console.log("Shows containing:", searchTerm);
    console.log(data);

    // tried to show names in console with this:
    // const showNames = [
    //   {showsname : {data}}
    // ];

    // showNames.map(getShowNames);

    // function getShowNames(item) {
    //   return [item.showsname];
    // }

    // console.log(data.map(function(showNames){
    //   return {key:showNames}
    // }));

    // also tried with this:
    // console.log(data.name.sort((a, b) => a.name > b.name));

    // calls back
    dispatch({
      type: SEARCH_SHOWS,
      payload: data,
    });
  };

  const getSingleShow = async (id) => {
    dispatch({
      type: SET_LOADING,
    });

    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);

    // log individual show's name and data to console when clicked
    console.log("Looking at:", data.name);
    console.log(data);

    dispatch({
      type: SET_SINGLE_SHOW,
      payload: data,
    });
  };

  const clearSingleShow = () => {
    dispatch({
      type: CLEAR_SINGLE_SHOW,
    });
  };

  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        singleShow: state.singleShow,
        loading: state.loading,
        searchShows,
        getSingleShow,
        clearSingleShow,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsState;
