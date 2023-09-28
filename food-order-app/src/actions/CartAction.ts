import { CartItem } from "../interfaces/CartItem";

export enum CartActionType {
  ADD_TO_CART,
  REMOVE_FROM_CART,
}

export interface CartAction {
  type: CartActionType;
  value: CartItem;
}
