import "./styles.scss";
import { useState, useEffect, useContext } from "react";
import UserCoordinates from "./utils/UserCoordinates";
import Applayout from "./components/Applayout";

export default function App() {
  const [userLat, setUserLat] = useState(0);
  const [userLong, setUserLong] = useState(0);

  const { long, lat } = useContext(UserCoordinates);

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
  }

  return (
    <>
      <UserCoordinates.Provider value={{ long: userLong, lat: userLat }}>
        <Applayout />
      </UserCoordinates.Provider>
    </>
  );
}
