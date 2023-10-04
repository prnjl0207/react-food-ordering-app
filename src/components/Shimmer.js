const Shimmer = () => {
  const count = 8;
  return (
    <div className="res-container">
      <div className="input-container">
        <input type="search" />
        <button>Search top rated</button>
      </div>
      <div className="res-cards-container"></div>
    </div>
  );
};

export default Shimmer;
