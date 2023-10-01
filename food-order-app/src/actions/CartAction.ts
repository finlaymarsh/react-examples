import { CartItem } from "../interfaces/CartItem";

export enum CartActionType {
  ADD_TO_CART,
  DECREASE_ITEM_AMOUNT_BY_1,
  INCREASE_ITEM_AMOUNT_BY_1,
}

export interface CartAction {
  type: CartActionType;
  value: CartItem;
}
