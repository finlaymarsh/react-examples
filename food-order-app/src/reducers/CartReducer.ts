import { Cart } from "../interfaces/Cart";
import { CartAction, CartActionType } from "../actions/CartAction";

export const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case CartActionType.ADD_TO_CART:
      state.items.set(action.value.id, {
        ...action.value,
      });
      return state;
    case CartActionType.REMOVE_FROM_CART:
      state.items.delete(action.value.id);
      return state;
  }
};
