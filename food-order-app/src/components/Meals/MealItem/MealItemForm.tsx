import { Input } from "../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

export const MealItemForm = (props: { mealId: string }) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: `amount_${props.mealId}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>+ Add</button>
    </form>
  );
};
