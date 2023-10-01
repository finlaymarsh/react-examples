import CartContext from "../../../store/cart-context";
import { HTMLAttributes, useContext, useEffect, useState } from "react";
import { CartIcon } from "../../Cart/CartIcon";
import classes from "./HeaderButton.module.css";

export const HeaderCartButton = (props: HTMLAttributes<HTMLButtonElement>) => {
  const cartContext = useContext(CartContext);
  const [showBumpedButton, setShowBumpedButton] = useState(false);

  const bumpedButtonClasses = `${classes.button} ${
    showBumpedButton ? classes.bump : ""
  }`;

  const {
    cart: { items },
  } = cartContext;

  useEffect(() => {
    if (items.size === 0) {
      return;
    }
    setShowBumpedButton(true);

    const timer = setTimeout(setShowBumpedButton.bind(null, false), 300);
    // Returned function runs at start of next useEffect call
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button
      className={bumpedButtonClasses}
      onClick={() => cartContext.setShowCart(true)}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartContext.numberOfItems()}</span>
    </button>
  );
};
