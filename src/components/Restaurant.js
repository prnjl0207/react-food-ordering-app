import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useRestaurantData from "../utils/useRestaurantData";
import { useState, useEffect } from "react";

const Restaurant = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const restaurantData = useRestaurantData();

  useEffect(() => {
    if (restaurantData) {
      let filteredRestroList = restaurantData?.cards
        ?.filter((resp) => resp.card.card.id === "restaurant_grid_listing")[0]
        .card?.card?.gridElements?.infoWithStyle?.restaurants.map((res) => res);
      setRestaurantList(filteredRestroList);
    }
  }, [restaurantData]);

  return (
    <div className="res-container">
      {/* <div className="input-container">
        <input
          type="search"
          aria-labelledby="search"
          placeholder="Enter restaurant name"
        />
        <button>Search top rated restaurants</button>
      </div> */}
      <div className="res-cards-container">
        {restaurantList?.length > 0 ? (
          restaurantList.map((restro) => {
            return (
              <RestaurantCard key={restro.info.id} restroDetails={restro} />
            );
          })
        ) : (
          <>
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
          </>
        )}
      </div>
    </div>
  );
};

export default Restaurant;
