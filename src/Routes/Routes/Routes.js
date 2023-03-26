import { createBrowserRouter } from "react-router-dom";
import Home from "../../Component/Home/Home";
import Main from "../../Layout/Main";
import AddRoom from "../../Pages/AddRoom/AddRoom";
import RoomDetails from "../../Pages/RoomDetails/RoomDetails";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import Cart from "../../Pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/addroom",
        element: <AddRoom></AddRoom>,
      },
      {
        path: "/room/:id",
        element: <RoomDetails></RoomDetails>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);

export default router;
