import React, { HTMLAttributes, ReactNode, useReducer, useState } from "react";
import { CartActionType } from "../actions/CartAction";
import { INITIAL_CART } from "../constants/InitialCart";
import { CartItem } from "../interfaces/CartItem";
import { cartReducer } from "../reducers/CartReducer";

const CartContext = React.createContext({
  cart: INITIAL_CART,
  addItem: (item: CartItem) => {},
  showCart: false,
  setShowCart: (value: boolean) => {},
  calculateTotalAmount: () => 0 as number,
});

export const CartContextProvider = (props: HTMLAttributes<ReactNode>) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, INITIAL_CART);
  const [showCart, setShowCart] = useState(false);

  const addItem = (item: CartItem) => {
    dispatchCart({
      type: CartActionType.ADD_TO_CART,
      value: item,
    });
  };

  const calculateTotalAmount = (): number => {
    let sum = 0;
    for (const item of Array.from(cartState.items.values())) {
      sum += item.price * item.amount;
    }
    return sum;
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartState,
        addItem: addItem,
        showCart: showCart,
        setShowCart: setShowCart,
        calculateTotalAmount: calculateTotalAmount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
