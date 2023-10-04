import { RESTRO_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <div className="image-wrapper">
        <img
          src={RESTRO_IMG_URL + props.restroDetails.info.cloudinaryImageId}
          alt="restaurant image"
        />
      </div>
      <div className="text-wrapper">
        <div>{props.restroDetails.info.name}</div>
        <div>{props.restroDetails.info.avgRating}</div>
        <div>
          {props.restroDetails.info.cuisines
            .map((cuisines) => cuisines)
            .join(",")}
        </div>
        <div>{props.restroDetails.info.locality}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
