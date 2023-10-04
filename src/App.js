import "./styles.scss";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { RESTAURANT_LISTING_URL } from "./utils/constants";
import { useState, useEffect } from "react";

export default function App() {
  const [userLat, setUserLat] = useState(0);
  const [userLong, setUserLong] = useState(0);
  const [wholeData, setWholeData] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const [currentCity, setCurrentCity] = useState("");

  useEffect(() => {
    userGeoLocation();
  }, [userLat, userLong]);

  const userLocation = navigator.geolocation;

  function userGeoLocation() {
    if (userLocation) {
      userLocation.getCurrentPosition(success);
    } else {
      ("The geolocation API is not supported by your browser.");
    }
  }

  function success(data) {
    setUserLat(data.coords.latitude);
    setUserLong(data.coords.longitude);
    if (userLat && userLong) {
      fetchData();
    }
  }

  const fetchData = async () => {
    let newarr = [];
    const response = await fetch(
      RESTAURANT_LISTING_URL +
        "lat=" +
        userLat +
        "&lng=" +
        userLong +
        "&page_type=DESKTOP_WEB_LISTING",
    );
    let actualData = await response.json();
    setWholeData(actualData);
    const updatedRestList = actualData.data.cards
      .filter((resp) => resp.card.card.id === "restaurant_grid_listing")
      .map((res) => res?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurantList(updatedRestList);
    let currCity = actualData.data.cards
      .filter((resp) => resp.card.card.id === "meta_data")
      .map((res) => res.card.card.citySlug)[0];
    setCurrentCity(currCity);
  };

  return (
    <div className="App">
      <Header currentCity={currentCity} />
      <Body />
      <Footer />
    </div>
  );
}
