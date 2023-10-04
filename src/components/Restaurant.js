import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Restaurant = (props) => {
  let restaurantList = props.restroList;
  return (
    <div className="res-container">
      <div className="input-container">
        <input type="search" />
        <button>Search top rated</button>
      </div>
      <div className="res-cards-container">
        {restaurantList?.length > 0 ? (
          restaurantList.map((restro) => {
            return (
              <RestaurantCard key={restro.info.id} restroDetails={restro} />
            );
          })
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Restaurant;
