import ListItems from "./ListItems";
import { useState } from "react";

const ResCategory = ({ listData }) => {
  const [showList, setShowList] = useState(false);
  return (
    <div>
      {listData?.map((res) => (
        <div key={res?.card?.card?.title} className=" w-6/12 mx-auto">
          <div className="flex justify-between pt-4">
            <div className="font-bold text-center">
              {res?.card?.card?.title} ({res?.card?.card?.itemCards.length})
            </div>
            <div>⬇️</div>
          </div>
          {/* {showItems && <ListItems items={res?.card?.card?.itemCards} />} */}
          <ListItems items={res?.card?.card?.itemCards} />
        </div>
      ))}
    </div>
  );
};

export default ResCategory;
