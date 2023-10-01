import { CartItemsMap } from "../classes/CartItemsMap";
import { CartItem } from "./CartItem";

export interface Cart {
  items: CartItemsMap;
}
