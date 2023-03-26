import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext/CartContext";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const {
    cart,
    roomAmount,
    removeFromCart,
    clearAllCart,
    increaseAmount,
    decreaseAmount,
    total,
  } = useContext(CartContext);
  console.log(cart, roomAmount);

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div>
        <h2 className="fw-bold mb-2 text-uppercase">
          Shopping Cart ({cart.length}) <br />
        </h2>
        <div className="border border-2 border-info mt-4"></div>
      </div>
      <table id="cart" className="table table-hover table-condensed">
        <thead>
          <tr>
            <th style={{ width: "50%" }}>Product</th>
            <th style={{ width: "10%" }}>Price</th>
            <th style={{ width: "15%" }}>Quantity</th>
            <th style={{ width: "15%" }} className="text-center">
              Subtotal
            </th>
            <th style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((room) => (
            <tr key={cart._id}>
              <td data-th="Product">
                <div className="row">
                  <div className="col-sm-2 hidden-xs">
                    <img
                      src={room.image}
                      alt="..."
                      className="img-responsive w-100"
                    />
                  </div>
                  <div className="col-sm-10">
                    <h4 className="fs-5" style={{ marginLeft: "0px" }}>
                      {room.title}
                    </h4>
                    {/* <p>{room.description}</p> */}
                  </div>
                </div>
              </td>
              <td data-th="Price">${room.price}</td>
              <td data-th="Quantity">
                <div className="btn-group" role="group" aria-label="Quantity">
                  <button
                    onClick={() => decreaseAmount(cart._id)}
                    type="button"
                    className="btn btn-outline-danger fw-bold me-1 rounded-0"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    className="btn btn-light fw-bold me-1 rounded-0"
                  >
                    {room.amount}
                  </button>
                  <button
                    onClick={() => increaseAmount(cart._id)}
                    type="button"
                    className="btn btn-outline-primary fw-bold rounded-0"
                  >
                    +
                  </button>
                </div>
              </td>
              <td data-th="Subtotal" className="text-center">
                ${" "}
                {`${parseFloat(
                  parseFloat(room.price) * parseFloat(room.amount)
                ).toFixed(2)}`}
              </td>
              <td className="actions" data-th="">
                <button
                  className="btn btn-sm"
                  onClick={() => removeFromCart(cart._id)}
                >
                  <AiFillDelete
                    size={30}
                    className="text-danger"
                  ></AiFillDelete>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <Link className="btn btn-warning">Continue Shopping</Link>
            </td>
            <td colSpan="2" className="hidden-xs"></td>
            <td className="hidden-xs text-center">
              <strong>Total $ {parseFloat(total).toFixed(2)}</strong>
            </td>
            <td>
              <Link className="btn btn-success btn-block">Checkout</Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
