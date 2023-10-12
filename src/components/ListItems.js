const ListItems = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item?.card?.info?.id}>
            <div>
              {item?.card?.info?.name} - {item?.card?.info?.price / 100}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
