import { useContext } from "react";

// import context
import ShowsContext from "../context/shows/showsContext";

// import components
import Searchbar from "../components/Searchbar";
import Loader from "../components/Loader";
import ListItem from "../components/ListItem";

const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;

  return (
    <div className="homepage">
      <Searchbar />
      {loading ? (
        <Loader />
      ) : (
        <div className="homepage__list">
          {shows.map((item) => (
            <ListItem
              key={item.show.id}
              id={item.show.id}
              image={
                item.show.image
                  ? // show's image
                    item.show.image.medium
                  : // for when show has no image
                    "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
              }
              name={item.show.name}
              rating={
                item.show.rating.average
                  ? // show's average rating
                    item.show.rating.average
                  : // for when show has no rating
                    "(no rating)"
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
