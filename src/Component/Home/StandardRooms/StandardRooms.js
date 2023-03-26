import React, { useContext } from "react";
import { RoomContext } from "../../../Contexts/RoomContext/RoomContext";
import Loader from "../../Loader/Loader";
import StandardRoom from "../StandardRoom/StandardRoom";

const StandardRooms = () => {
  const { rooms } = useContext(RoomContext);
  //Room Filter
  const filteredStandardRooms = rooms.filter((room) => {
    return room.type === "Standard Room";
  });

  if (!filteredStandardRooms) {
    return <Loader></Loader>;
  }

  return (
    <div className="container mt-10 mb-5">
      <div className="d-flex justify-content-center row">
        <div className="col-md-10">
          <div>
            <h2 className="fw-bold mt-5 mb-2 text-uppercase">
              Standard Room <br />
            </h2>
            <div className="border border-2 border-info mt-4"></div>
          </div>
          {filteredStandardRooms.map((standardRooms) => {
            return (
              <StandardRoom
                standardRooms={standardRooms}
                key={standardRooms._id}
              ></StandardRoom>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StandardRooms;
