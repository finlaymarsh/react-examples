import { CartItem } from "@/src/interfaces/CartItem";
import { Modal } from "../UI/Modal/Modal";
import classes from "./Cart.module.css";

export const Cart = () => {
  const cartItems: CartItem[] = [
    {
      id: "c1",
      name: "Sushi",
      amount: 2,
      price: 12.5,
    },
  ];
  return (
    <Modal>
      <ul className={classes["cart-items"]}>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
