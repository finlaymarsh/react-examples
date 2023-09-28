import CartContext from "../../../context/cart-context";
import { useContext, useState } from "react";
import { Input } from "../../UI/Input/Input";
import classes from "./MealItemForm.module.css";
import { CartItem, createCartItemFromMeal } from "../../../interfaces/CartItem";
import { Meal } from "../../../interfaces/Meal";

export const MealItemForm = (props: { meal: Meal }) => {
  const cartContext = useContext(CartContext);
  const [amount, setAmount] = useState(
    cartContext.cart.items.has(props.meal.id)
      ? (cartContext.cart.items.get(props.meal.id) as CartItem).amount
      : 0
  );
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: `amount_${props.meal}`,
          type: "number",
          min: 0,
          max: 5,
          step: 1,
          value: amount,
          onChange: (event) => setAmount(+event.target.value),
        }}
      ></Input>
      <button
        onClick={(event) => {
          event.preventDefault();
          cartContext.addItem(createCartItemFromMeal(props.meal, amount));
        }}
      >
        + Add
      </button>
    </form>
  );
};
