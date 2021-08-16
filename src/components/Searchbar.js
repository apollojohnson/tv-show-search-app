// react imports
import { useState, useContext } from "react";

// component imports
import Alert from "./Alert";

// context imports
import AlertsContext from "../context/alerts/alertsContext";
import ShowsContext from "../context/shows/showsContext";

// search bar things
const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const showsContext = useContext(ShowsContext);
  const { searchShows } = showsContext;

  const { alert, setAlert } = useContext(AlertsContext);

  const onSearchHandler = (e) => {
    e.preventDefault();

    // alert that pops up from an empty search
    if (searchTerm === "") {
      setAlert(
        "No text entered... Please enter something to search!",
        "danger"
      );
    } else {
      searchShows(searchTerm);
    }
  };

  return (
    <div className="searchbar">
      {alert ? <Alert message={alert.message} type={alert.type} /> : null}

      {/* search form */}
      <form className="searchbar__form">
        <input
          type="text"
          placeholder="Search for a Show!"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* search button */}
        <button className="btn btn-block" onClick={onSearchHandler}>
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
