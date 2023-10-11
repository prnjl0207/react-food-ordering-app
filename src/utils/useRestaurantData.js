import { useState, useEffect, useContext } from "react";
import UserCoordinates from "./UserCoordinates";
import { RESTAURANT_LISTING_URL } from "./constants";

const useRestaurantData = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const { long, lat } = useContext(UserCoordinates);

  useEffect(() => {
    if (long && lat) {
      fetchData();
    }
  }, [long, lat]);

  const fetchData = async () => {
    const response = await fetch(
      RESTAURANT_LISTING_URL +
        "lat=" +
        lat +
        "&lng=" +
        long +
        "&page_type=DESKTOP_WEB_LISTING",
    );
    let actualData = await response.json();
    setRestaurantData(actualData.data);
  };
  return restaurantData;
};

export default useRestaurantData;
