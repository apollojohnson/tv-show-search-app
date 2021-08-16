import { Link } from "react-router-dom";

// results that appear after search is clicked
const ListItem = ({ image, name, rating, id }) => {
  return (
    // click this to bring up the show's page:
    <Link to={`/singleshow/${id}`} className="listitem">

      {/* image, name, and rating appear in search items */}
      <img src={image} alt={name} />
      <div className="listitem__info">
        <h4 className="info__name">{name}</h4>
        <h4 className="info__rating">{rating}</h4>
        {/* <h4 className="info__genres">{genres}</h4> */}
      </div>
    </Link>
  );
};

export default ListItem;
