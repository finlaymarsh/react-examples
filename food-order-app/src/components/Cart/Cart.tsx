import CartContext from "../../context/cart-context";
import { CartItem } from "../../interfaces/CartItem";
import { useContext, useState } from "react";
import { Modal } from "../UI/Modal/Modal";
import classes from "./Cart.module.css";

export const Cart = () => {
  const cartContext = useContext(CartContext);

  return (
    <>
      {cartContext.showCart && (
        <Modal>
          <ul className={classes["cart-items"]}>
            {Array.from<CartItem>(cartContext.cart.items.values()).map(
              (item) => (
                <li key={item.id}>{item.name}</li>
              )
            )}
          </ul>
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>£{cartContext.calculateTotalAmount().toFixed(2)}</span>
          </div>
          <div className={classes.actions}>
            <button
              className={classes["button--alt"]}
              onClick={() => cartContext.setShowCart(false)}
            >
              Close
            </button>
            <button className={classes.button}>Order</button>
          </div>
        </Modal>
      )}
    </>
  );
};
