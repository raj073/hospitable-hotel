import { createBrowserRouter } from "react-router-dom";
import Home from "../../Component/Home/Home";
import Main from "../../Layout/Main";
import AddRoom from "../../Pages/AddRoom/AddRoom";
import RoomDetails from "../../Pages/RoomDetails/RoomDetails";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import CartItem from "../../Pages/Cart/CartItem/CartItem";
import Checkout from "../../Pages/Checkout/Checkout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: <CartItem></CartItem>,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
