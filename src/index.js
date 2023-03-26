import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./Contexts/AuthProvider";
import RoomProvider from "./Contexts/RoomContext/RoomContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartProvider from "./Contexts/CartContext/CartContext";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RoomProvider>
    <CartProvider>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </QueryClientProvider>
      </React.StrictMode>
    </CartProvider>
  </RoomProvider>
);
