import { CartItem } from "./CartItem";

export interface Cart {
  items: Map<string, CartItem>;
}
