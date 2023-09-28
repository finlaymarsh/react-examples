import { Meal } from "@/src/interfaces/Meal";
import { MealItem } from "./MealItem/MealItem";
import { Card } from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS: Meal[] = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem meal={meal} key={meal.id} />
          ))}
        </ul>
      </Card>
    </section>
  );
};
