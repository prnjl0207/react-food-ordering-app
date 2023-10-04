import RestaurantCard from "./RestaurantCard";

const Restaurant = (props) => {
  let restaurantList = props.restroList;
  return (
    <div className="res-container">
      <div className="input-container">
        <input type="search" />
        <button>Search top rated</button>
      </div>
      <div className="res-cards-container">
        {restaurantList?.map((restro) => {
          if (props?.restroList) {
            return (
              <RestaurantCard key={restro.info.id} restroDetails={restro} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Restaurant;
