import { HTMLAttributes } from "react";
import { CartIcon } from "../../Cart/CartIcon";
import classes from "./HeaderButton.module.css";

export const HeaderCartButton = (props: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};
