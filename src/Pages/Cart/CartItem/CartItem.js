import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../Contexts/CartContext/CartContext";
import Cart from "../Cart";
import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = () => {
  const { cart, total, clearAllCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container" style={{ marginTop: "100px" }}>
        <div>
          <div className="d-flex justify-content-between">
            <h2 className="fw-bold mb-2 text-uppercase">
              Shopping Cart ({cart.length}) <br />
            </h2>
            <Link to={"/"}>
              <button type="button" className="btn btn-outline-primary">
                Continue Shopping
              </button>
            </Link>
          </div>
          <div className="border border-2 border-info mt-4"></div>
        </div>
        <h1 className="text-center mt-3">
          There is no Room in the Shopping Cart
        </h1>
        <p className="text-center mt-2 fs-4 fw-bold">Keep Shopping</p>
      </div>
    );
  } else
    return (
      <div className="container" style={{ marginTop: "100px" }}>
        <div>
          <div className="d-flex justify-content-between">
            <h2 className="fw-bold mb-2 text-uppercase">
              Shopping Cart ({cart.length}) <br />
            </h2>
            <Link to={"/"}>
              <button type="button" className="btn btn-outline-primary">
                Continue Shopping
              </button>
            </Link>
          </div>
          <div className="border border-2 border-info mt-4"></div>
        </div>
        {cart.map((cart) => (
          <Cart key={cart._id} cart={cart}></Cart>
        ))}
        <div className="px-2 py-4 bg-white border rounded mt-4 d-flex justify-content-between">
          <Link>
            <button
              onClick={clearAllCart}
              type="button"
              className="btn btn-danger"
            >
              Clear All Cart
            </button>
          </Link>
          <div className="shadow-lg px-4 py-3">
            <h1 className="fw-bold text-success fs-4">
              Total Price: $ {parseFloat(total).toFixed(2)}
            </h1>
          </div>
          <Link to={"/checkout"}>
            <button type="button" className="btn btn-primary">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    );
};

export default CartItem;
