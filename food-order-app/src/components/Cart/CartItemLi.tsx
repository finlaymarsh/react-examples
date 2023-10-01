import { CartItem } from "@/src/interfaces/CartItem";
import CartContext from "../../store/cart-context";
import { HTMLAttributes, useContext } from "react";
import classes from "./CartItemLi.module.css";

interface Props extends HTMLAttributes<HTMLElement> {
  item: CartItem;
}

export const CartItemLi = (props: Props) => {
  const cartContext = useContext(CartContext);

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>£{props.item.price.toFixed(2)}</span>
          <span className={classes.amount}>x{props.item.amount}</span>
        </div>
      </div>
      <div>
        <button
          onClick={cartContext.decreaseAmountByOne.bind(null, props.item)}
        >
          -
        </button>
        <button
          onClick={cartContext.increaseAmountByOne.bind(null, props.item)}
        >
          +
        </button>
      </div>
    </li>
  );
};
