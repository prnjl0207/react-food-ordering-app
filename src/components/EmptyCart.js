import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();

  const handleSeeRestroClick = () => {
    navigate("/");
  };
  return (
    <div className="py-6">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
        alt="empty cart image"
        className="w-[271px] h-[256px] my-4 mx-auto"
      />
      <div className="my-2 font-semibold">Your cart is empty</div>
      <div className="my-2 text-gray-700">
        You can go to home page to view more restaurants
      </div>
      <button
        className="my-2 p-2 text-white rounded-md bg-orange-600 border border-orange-700"
        onClick={handleSeeRestroClick}
      >
        See restaurants near you
      </button>
    </div>
  );
};

export default EmptyCart;
