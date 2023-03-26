import { createContext, useEffect, useState } from "react";
import Loader from "../../Component/Loader/Loader";

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  //Room State
  const [rooms, setRooms] = useState([]);

  //fetch Room

  useEffect(() => {
    const fetchRoom = async () => {
      const response = await fetch(
        "https://hospitable-hotel-server.vercel.app/hotelroom"
      );
      const data = await response.json();
      setRooms(data);
    };
    fetchRoom();
  });

  if (!rooms) {
    return <Loader></Loader>;
  }

  return (
    <RoomContext.Provider value={{ rooms }}>{children}</RoomContext.Provider>
  );
};

export default RoomProvider;
