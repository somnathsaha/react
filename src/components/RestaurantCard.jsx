import { Link } from 'react-router-dom';
const RestaurantCard = (props) => {
  // console.log(props.restaurant.info);
  const { name, cuisines, avgRatingString, sla, cloudinaryImageId, id } = props.restaurant.info;
  return (
    <Link to={`menu/${id}`}>
      <div className="rest-card">
        <img
          className="rest-card-image"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        ></img>
        <h1>{name}</h1>
        <h4>{cuisines.join()}</h4>
        <h4>Rating {avgRatingString}</h4>
        <h4>{sla.deliveryTime} mins</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
