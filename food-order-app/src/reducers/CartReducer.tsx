import { Cart } from "../interfaces/Cart";
import { CartAction, CartActionType } from "../actions/CartAction";
import { CartItemsMap } from "../classes/CartItemsMap";

export const cartReducer = (state: Cart, action: CartAction): Cart => {
  const newMap = new CartItemsMap(state.items);
  switch (action.type) {
    case CartActionType.ADD_TO_CART:
      newMap.addItem(action.value);
      return { items: newMap };
    case CartActionType.INCREASE_ITEM_AMOUNT_BY_1:
      newMap.increaseAmountOfItemByOne(action.value.id);
      return { items: newMap };
    case CartActionType.DECREASE_ITEM_AMOUNT_BY_1:
      newMap.decreaseAmountOfItemByOne(action.value.id);
      return { items: newMap };
  }
};
