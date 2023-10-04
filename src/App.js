import "./styles.scss";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { RESTAURANT_LISTING_URL } from "./utils/constants";
import { useState, useEffect } from "react";

export default function App() {
  const [userLat, setUserLat] = useState(0);
  const [userLong, setUserLong] = useState(0);

  useEffect(() => {
    userGeoLocation();
  }, [setUserLat, setUserLong]);

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
    console.log("before fetch fn", userLat);
    fetchData();
  }

  const fetchData = async () => {
    console.log("inside fetch top", userLat);
    const data = await fetch(
      RESTAURANT_LISTING_URL +
        "lat=" +
        userLat +
        "&lng=" +
        userLong +
        "&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log("data is ", json);
  };

  return (
    <div className="App">
      <Header userLat={userLat} userLong={userLong} />
      <Body />
      <Footer />
    </div>
  );
}
