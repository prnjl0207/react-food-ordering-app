import { RESTRO_IMG_URL } from "../utils/constants";

const ListItems = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="text-left flex justify-between items-center border-gray-400 border-b-2 py-6 last:border-b-0"
          >
            <div>
              {item?.card?.info?.name}
              <div>
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </div>
            </div>
            <div className="w-[118px] h-[96px] relative">
              {item?.card?.info?.imageId && (
                <img
                  className="rounded-lg w-[100%] h-[100%]"
                  src={RESTRO_IMG_URL + item?.card?.info?.imageId}
                  alt="restaurant image"
                />
              )}
              <button className="addItem absolute border-gray-300 bg-white rounded-lg text-green-600 w-14 top-[88%] left-[25%]">
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
