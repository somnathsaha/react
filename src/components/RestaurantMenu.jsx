import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './shimmer';

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  useEffect(() => {
    fetData();
  }, []);

  const fetData = async () => {
    const menu = await (
      await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.6150956&lng=88.4185765&restaurantId=${id}`
      )
    ).json();
    setRestaurantDetails(menu);
  };
  if (restaurantDetails === null) return <Shimmer />;
  const { name, cuisines } = restaurantDetails?.data?.cards[0].card?.card?.info;
  const { itemCards } = restaurantDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
  return (
    <div>
      <h2>{name}</h2>
      <h3>{cuisines.join()}</h3>
      <h3>Menu</h3>
      <ul>
        <li>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
