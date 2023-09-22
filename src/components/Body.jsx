import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './shimmer';

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6150956&lng=88.4185765&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    setRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div>
        <button
          onClick={() => {
            setRestaurantList(restaurantList.filter((restaurant) => restaurant.info.avgRating > 4.2));
          }}
        >
          Filter Top Rated Restruant
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setRestaurantList(restaurantList);
          }}
        >
          Reset
        </button>
      </div>
      <div className="rest-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
