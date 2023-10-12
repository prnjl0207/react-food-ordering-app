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
        <div key={res?.card?.card?.title} className=" w-6/12 mx-auto">
          <div
            className="flex justify-between pt-4 cursor-pointer"
            onClick={() => clickHandler(index)}
          >
            <div className="font-bold text-center">
              {res?.card?.card?.title} ({res?.card?.card?.itemCards.length})
            </div>
            <div>⬇️</div>
          </div>
          {res?.isShow && <ListItems items={res?.card?.card?.itemCards} />}
        </div>
      ))}
    </div>
  );
};

export default ResCategory;
