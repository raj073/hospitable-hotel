import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //Cart State
  const [cart, setCart] = useState([]);
  //Item Amount State
  const [roomAmount, setRoomAmount] = useState(0);

  //Total Price State
  const [total, setTotal] = useState(0);

  //Update Total Price
  useEffect(() => {
    const totalPrice = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(totalPrice);
  });

  //Update Item Amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setRoomAmount(amount);
    }
  }, [cart]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => {
      return item._id === id;
    });

    //if Cart Item is already added in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item._id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  //Remove From Cart
  const removeFromCart = (id) => {
    const newcart = cart.filter((item) => {
      return item._id !== id;
    });
    setCart(newcart);
  };

  //Clear All Cart
  const clearAllCart = () => {
    setCart([]);
  };

  //Amount Increased
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item._id === id);
    addToCart(cartItem, id);
  };

  //Amount Decreased
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item._id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item._id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  if (!cart) {
    return (
      <div className="container" style={{ marginTop: "100px" }}>
        <h1>There is no Room in the Shopping Cart</h1>
      </div>
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        roomAmount,
        removeFromCart,
        clearAllCart,
        increaseAmount,
        decreaseAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

//Custom Hook
const useCart = () => useContext(CartContext);

export default CartProvider;
