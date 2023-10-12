import { RESTRO_IMG_URL } from "../utils/constants";

const ListItems = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="text-left flex justify-between items-center border-gray-400 border-b-2 py-6 last:border-b-0"
          >
            <div>
              {item?.card?.info?.isVeg ? (
                <img
                  className="w-4 pb-2"
                  src="https://openclipart.org/image/800px/304248"
                  alt="veg icon image"
                />
              ) : (
                <img
                  className="w-4 pb-2"
                  src="https://pbs.twimg.com/media/FS8Q1ZZaIAAfDvc?format=jpg&name=360x360"
                  alt="veg icon image"
                />
              )}
              <div>{item?.card?.info?.name}</div>
              <div>
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </div>
              <div className="text-sm text-slate-500 pr-[5%] pt-[1%]">
                {item?.card?.info?.description}
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
