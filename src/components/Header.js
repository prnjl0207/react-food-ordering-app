import { LOGO_URL } from "../utils/constants";
import "../styles.scss";

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="logo-city">
        <img src={LOGO_URL} alt="logo" />
        <div className="city-name">Current City is {props.currentCity}</div>
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
