import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext/CartContext";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

const Cart = ({ cart }) => {
  const { roomAmount, removeFromCart, increaseAmount, decreaseAmount, total } =
    useContext(CartContext);
  const { _id, category, title, description, rating, price, image, amount } =
    cart;

  if (!cart) {
    return (
      <div className="container" style={{ marginTop: "100px" }}>
        <h1>There is no Room in the Shopping Cart</h1>
      </div>
    );
  }

  return (
    <>
      <div className="row px-2 py-4 bg-white border rounded mt-4">
        <div className="col-md-3 mt-1">
          <img
            className="img-fluid img-responsive rounded product-image h-100"
            src={image}
            alt="Hotel Room"
          />
        </div>
        <div className="col-md-3 mt-1">
          <h5>{title}</h5>
        </div>
        <div className="col-md-3 mt-1">
          <div className="btn-group" role="group" aria-label="Quantity">
            <button
              onClick={() => decreaseAmount(_id)}
              type="button"
              className="btn btn-outline-danger fw-bold me-1 rounded-0"
            >
              -
            </button>
            <button
              type="button"
              className="btn btn-light fw-bold me-1 rounded-0"
            >
              {amount}
            </button>
            <button
              onClick={() => increaseAmount(_id)}
              type="button"
              className="btn btn-outline-primary fw-bold rounded-0"
            >
              +
            </button>
          </div>
        </div>
        <div className="align-items-center align-content-center col-md-3 border-left mt-1">
          <div className="d-flex flex-row align-items-center">
            <h4 className="mr-1 text-info">Room Price: $ {price}</h4>
          </div>
          <div className="d-flex flex-row align-items-center mt-3">
            <h4 className="mr-1 text-primary">
              Sub Total: ${" "}
              {`${parseFloat(parseFloat(price) * parseFloat(amount)).toFixed(
                2
              )}`}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
