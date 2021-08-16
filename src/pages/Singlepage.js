import { useEffect, useContext } from "react";

// context imports
import ShowsContext from "../context/shows/showsContext";

// component imports
import Loader from "../components/Loader";

const Singlepage = ({ match }) => {
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);

  useEffect(() => {
    getSingleShow(match.params.id);
    // eslint-disable-next-line
  }, []);

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="singleshow">
          <img
            src={
              singleShow.image
                ? // if it has an image
                  singleShow.image.medium
                : // if it doesn't have an image
                  "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
            }
            alt={singleShow.name}
          />
          {/* info for show's page */}
          <div className="singleshow__info">
            <h1>{singleShow.name}</h1>
            {singleShow.genres &&
              singleShow.genres.map((genre) => (
                <span key={genre} className="singleshow__genre">
                  {genre}
                </span>
              ))}
            <p>
              <strong>Status:</strong> {singleShow.status && singleShow.status}
            </p>
            <p>
              <strong>Average Rating:</strong>{" "}
              {singleShow.rating ? singleShow.rating.average : "(no rating)"}
            </p>
            <p>
              <strong>Offical Website:</strong>{" "}
              {singleShow.officalSite ? (
                <a
                  href={singleShow.officalSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  {singleShow.officalSite}
                </a>
              ) : (
                "(no official site)"
              )}
            </p>
            <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Singlepage;
