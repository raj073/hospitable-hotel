import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../../../Contexts/RoomContext/RoomContext";
import PremiumRoom from "../PremiumRoom/PremiumRoom";

const PremiumRooms = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();

  //Room Filter
  const filteredPremiumRooms = rooms.filter((room) => {
    return room.category === "Premium Room";
  });
  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-center row">
        <div className="col-md-10">
          <div>
            <h2 className="fw-bold mb-2 text-uppercase">
              Premium Room <br />
            </h2>
            <div className="border border-2 border-info mt-4"></div>
          </div>
          {filteredPremiumRooms.map((premiumRooms) => {
            return (
              <PremiumRoom
                premiumRooms={premiumRooms}
                key={premiumRooms._id}
              ></PremiumRoom>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PremiumRooms;
