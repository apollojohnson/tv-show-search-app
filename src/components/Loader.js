// spinner import
import spinner from "./spinner.gif";

// loading icon for while the app is fetching API data
const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading your search results..." />
    </div>
  );
};

export default Loader;
