import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { RESTAURANT_DETAILS_API } from "../utils/constants";
import UserCoordinates from "../utils/UserCoordinates";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
  const resId = useParams();
  const { long, lat } = useContext(UserCoordinates);
  const [resInfo, setresInfo] = useState(null);
  const [listData, setListData] = useState(null);
  useEffect(() => {
    fetchRestMenu();
  }, []);

  const fetchRestMenu = async () => {
    const data = await fetch(
      RESTAURANT_DETAILS_API +
        "lat=" +
        lat +
        "&lng=" +
        long +
        "&restaurantId=" +
        resId.id,
    );
    const response = await data.json();
    setresInfo(response);
    const filterListData =
      response?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (card) => {
          return (
            card.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
        },
      );
    setListData(filterListData);
  };
  return (
    <div className=" bg-gray-200">
      <h4>{resInfo?.data?.cards[0]?.card?.card?.info?.name}</h4>
      <div>
        {resInfo?.data?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
      </div>
      <div>{resInfo?.data?.cards[0]?.card?.card?.info?.locality}</div>
      <div>{resInfo?.data?.cards[0]?.card?.card?.info?.avgRating}</div>
      <div>{resInfo?.data?.cards[0]?.card?.card?.info?.totalRatingsString}</div>
      <div>{resInfo?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</div>
      <div>
        {resInfo?.data?.cards[0]?.card?.card?.info?.sla.deliveryTime} MINS
      </div>

      <ResCategory listData={listData} />
    </div>
  );
};

export default RestaurantMenu;
