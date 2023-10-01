import { CartItemsMap } from "../classes/CartItemsMap";
import { Cart } from "../interfaces/Cart";

export const INITIAL_CART: Cart = {
  items: new CartItemsMap(),
};
