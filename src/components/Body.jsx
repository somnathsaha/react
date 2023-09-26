import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './shimmer';

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [serachText, setSearchText] = useState('');
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6150956&lng=88.4185765&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    setOriginalData(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return originalData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="searh-filter-container">
        <div className="search">
          <input
            type="text"
            value={serachText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filterRes = originalData.filter((restaurant) =>
                restaurant.info.name.toLowerCase().includes(serachText.toLowerCase())
              );
              setRestaurantList(filterRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            onClick={() => {
              setRestaurantList(restaurantList.filter((restaurant) => restaurant.info.avgRating > 4.2));
            }}
          >
            Filter Top Rated Restruant
          </button>
        </div>
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
