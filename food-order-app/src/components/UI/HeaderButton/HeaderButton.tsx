import CartContext from "../../../context/cart-context";
import { HTMLAttributes, useContext } from "react";
import { CartIcon } from "../../Cart/CartIcon";
import classes from "./HeaderButton.module.css";

export const HeaderCartButton = (props: HTMLAttributes<HTMLButtonElement>) => {
  const cartContext = useContext(CartContext);

  return (
    <button
      className={classes.button}
      onClick={() => cartContext.setShowCart(true)}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};
