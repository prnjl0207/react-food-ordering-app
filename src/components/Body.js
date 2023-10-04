import Restaurant from "./Restaurant";

const Body = (props) => {
  return (
    <div className="body-container">
      <Restaurant restroList={props.restaurantList[0]} />
    </div>
  );
};

export default Body;
