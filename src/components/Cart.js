import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../Redux/cartSlice";
import { RESTRO_IMG_URL } from "../utils/constants";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div className="w-6/12 mx-auto">
      {cartItems.length != 0 ? (
        <div>
          <h4 className="py-6 font-medium">Your Cart Items </h4>
          {cartItems.map((item) => {
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
                  <button
                    className="removeItem absolute border-red-900 bg-red-600 rounded-lg text-white w-20 top-[88%] left-[25%]"
                    onClick={() => handleRemoveItem(item)}
                  >
                    Remove -
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <EmptyCart />
      )}

      {/* <div>
        {cartItems.map((item) => {
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
                <button
                  className="removeItem absolute border-red-900 bg-red-600 rounded-lg text-white w-20 top-[88%] left-[25%]"
                  onClick={() => handleRemoveItem(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Cart;
