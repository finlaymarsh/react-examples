import { Cart } from "../interfaces/Cart";
import { CartItem } from "../interfaces/CartItem";

export const INITIAL_CART: Cart = {
  items: new Map<string, CartItem>(),
};
