import { LOGO_URL } from "../utils/constants";
import "../styles.scss";

const Header = () => {
  const currentCity = JSON.parse(localStorage.getItem("data"))
    .data?.cards?.filter((res) => res?.card?.card?.id === "meta_data")
    .map((res) => res?.card?.card?.citySlug)[0];
  console.log("current", currentCity);
  return (
    <div className="header-container">
      <div className="logo-city">
        <img src={LOGO_URL} alt="logo" />
        <div className="city-name">Current City is : {currentCity}</div>
      </div>

      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
