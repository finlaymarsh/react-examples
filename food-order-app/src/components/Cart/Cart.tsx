import CartContext from "../../store/cart-context";
import { CartItem } from "../../interfaces/CartItem";
import { useContext } from "react";
import { Modal } from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import { CartItemLi } from "./CartItemLi";

export const Cart = () => {
  const cartContext = useContext(CartContext);

  return (
    <>
      {cartContext.showCart && (
        <Modal onClick={() => cartContext.setShowCart(false)}>
          <ul className={classes["cart-items"]}>
            {Array.from<CartItem>(cartContext.cart.items.values()).map(
              (item) => (
                <CartItemLi key={item.id} item={item} />
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
            {cartContext.cart.items.size !== 0 && (
              <button className={classes.button}>Order</button>
            )}
          </div>
        </Modal>
      )}
    </>
  );
};
