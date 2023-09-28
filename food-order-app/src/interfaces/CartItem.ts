import { Meal } from "./Meal";

export interface CartItem {
  id: string;
  name: string;
  amount: number;
  price: number;
}

const createCartItemFromMeal = (meal: Meal, amount: number): CartItem => {
  return {
    id: meal.id,
    name: meal.name,
    amount: amount,
    price: meal.price,
  };
};

export { createCartItemFromMeal };
