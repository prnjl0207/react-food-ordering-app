import ListItems from "./ListItems";
const ResCategory = ({ listData }) => {
  return (
    <div>
      {listData?.map((res) => (
        <div
          key={res?.card?.card?.title}
          className="border border-black px-10 w-9/12 mx-auto"
        >
          <div className="flex justify-between">
            <div className="font-bold">
              {res?.card?.card?.title} ({res?.card?.card?.itemCards.length})
            </div>
            <div>⬇️</div>
          </div>
          <ListItems items={res?.card?.card?.itemCards} />
        </div>
      ))}
    </div>
  );
};

export default ResCategory;
