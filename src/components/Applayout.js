import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Applayout;
