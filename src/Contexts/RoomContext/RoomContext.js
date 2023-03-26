import { createContext, useEffect, useState } from "react";

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  //Room State
  const [rooms, setRooms] = useState([]);

  //fetch Room

  useEffect(() => {
    const fetchRoom = async () => {
      const response = await fetch("hotel.json");
      const data = await response.json();
      setRooms(data);
    };
    fetchRoom();
  });

  return (
    <RoomContext.Provider value={{ rooms }}>{children}</RoomContext.Provider>
  );
};

export default RoomProvider;
