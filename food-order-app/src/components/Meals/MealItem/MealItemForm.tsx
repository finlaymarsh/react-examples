import CartContext from "../../../store/cart-context";
import { FormEvent, useContext, useRef } from "react";
import { Input } from "../../UI/Input/Input";
import classes from "./MealItemForm.module.css";
import { createCartItemFromMeal } from "../../../interfaces/CartItem";
import { Meal } from "../../../interfaces/Meal";

export const MealItemForm = (props: { meal: Meal }) => {
  const cartContext = useContext(CartContext);

  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const amount = +(inputRef.current?.value as string);
    cartContext.addItem(createCartItemFromMeal(props.meal, amount));
  };

  return (
    <form className={classes.form}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: `amount_${props.meal}`,
          type: "number",
          min: 0,
          max: 5,
          step: 1,
          defaultValue: 0,
        }}
      ></Input>
      <button onClick={submitHandler}>+ Add</button>
    </form>
  );
};
