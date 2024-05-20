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

  let filterListData = [];
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
    console.log("restro menus", response);
    setresInfo(response);
    let restroMenuCards = response?.data?.cards?.filter(
      (res) => res?.groupedCard,
    );

    let filterListData =
      restroMenuCards[0].groupedCard.cardGroupMap?.REGULAR?.cards?.filter(
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
    <div className="text-center py-8">
      <div className="flex justify-between w-6/12 mx-auto text-left">
        <div>
          <div className="font-bold">
            {resInfo?.data?.cards[0]?.card?.card?.info?.name}
          </div>
          <div className="text-base text-gray-500">
            {resInfo?.data?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
          </div>
          <div className="text-base text-gray-500">
            {resInfo?.data?.cards[0]?.card?.card?.info?.locality}
          </div>
        </div>

        <div className="border border-gray-400 border-solid rounded-md p-1">
          <div className="flex items-center border-b-2 border-gray-300 pb-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              role="img"
              aria-hidden="true"
              strokecolor="rgba(2, 6, 12, 0.92)"
              fillcolor="rgba(2, 6, 12, 0.92)"
            >
              <circle
                cx="10"
                cy="10"
                r="9"
                fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
              ></circle>
              <path
                d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                fill="white"
              ></path>
              <defs>
                <linearGradient
                  id="StoreRating20_svg__paint0_linear_32982_71567"
                  x1="10"
                  y1="1"
                  x2="10"
                  y2="19"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#21973B"></stop>
                  <stop offset="1" stopColor="#128540"></stop>
                </linearGradient>
              </defs>
            </svg>

            <span className="pl-2">
              {resInfo?.data?.cards[0]?.card?.card?.info?.avgRating}
            </span>
          </div>
          <div className="pt-1">
            {resInfo?.data?.cards[0]?.card?.card?.info?.totalRatingsString}
          </div>
        </div>
      </div>

      <div className="flex mx-auto w-6/12 my-8 font-medium text-base">
        <div className="flex items-center">
          <svg
            className="RestaurantTimeCost_icon__8UdT4"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <circle
              r="8.35"
              transform="matrix(-1 0 0 1 9 9)"
              stroke="#3E4152"
              strokeWidth="1.3"
            ></circle>
            <path
              d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
              fill="#3E4152"
            ></path>
          </svg>
          <span className="pl-2">
            {resInfo?.data?.cards[0]?.card?.card?.info?.sla?.deliveryTime} MINS
          </span>
        </div>
        <div className="flex items-center pl-4">
          <svg
            className="RestaurantTimeCost_icon__8UdT4"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <circle
              cx="9"
              cy="9"
              r="8.25"
              stroke="#3E4152"
              strokeWidth="1.5"
            ></circle>
            <path
              d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
              fill="#3E4152"
            ></path>
          </svg>
          <span className="pl-2">
            {resInfo?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}
          </span>
        </div>
      </div>

      {listData && <ResCategory listData={listData} />}
    </div>
  );
};

export default RestaurantMenu;
