import React from "react";
import StandardRooms from "../Home/StandardRooms/StandardRooms";
import PremiumRooms from "../../Component/Home/PremiumRooms/PremiumRooms";

const Home = () => {
  return (
    <div className="container mt-5 mb-5">
      <StandardRooms></StandardRooms>
      <PremiumRooms></PremiumRooms>
    </div>
  );
};

export default Home;
