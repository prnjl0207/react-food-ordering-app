import ListItems from "./ListItems";
import { useState } from "react";

const ResCategory = ({ listData }) => {
  const [showList, setShowList] = useState(listData);
  const clickHandler = (index) => {
    const resCatFilteredListItems = listData.map((elem, i) => {
      if (i === index) {
        elem.isShow = !elem?.isShow;
      }
      return elem;
    });
    setShowList(resCatFilteredListItems);
  };
  return (
    <div>
      {showList?.map((res, index) => (
        <div
          key={res?.card?.card?.title}
          className=" w-6/12 mx-auto border-b-[16px] border-gray-300 pb-6"
        >
          <div
            className="flex justify-between pt-4 cursor-pointer"
            onClick={() => clickHandler(index)}
          >
            <div className="font-bold text-center">
              {res?.card?.card?.title} ({res?.card?.card?.itemCards.length})
            </div>
            {res.isShow === true ? (
              <div>
                <img
                  className="w-6"
                  src="https://cdn0.iconfinder.com/data/icons/mobile-basic-vol-1/32/Chevron_Up-1024.png"
                  alt="chevron up image"
                />
              </div>
            ) : (
              <div>
                <img
                  className="w-6"
                  src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-1024.png"
                  alt="chevron down image"
                />
              </div>
            )}
          </div>
          {res?.isShow && <ListItems items={res?.card?.card?.itemCards} />}
        </div>
      ))}
    </div>
  );
};

export default ResCategory;
