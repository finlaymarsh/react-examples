import { CartItem } from "../interfaces/CartItem";

export class CartItemsMap extends Map<string, CartItem> {
  addItem = (newItem: CartItem) => {
    if (newItem.amount <= 0) {
      return;
    }
    if (this.has(newItem.id)) {
      const existingItem = this.get(newItem.id) as CartItem;
      this.set(existingItem.id, {
        ...existingItem,
        amount: existingItem.amount + newItem.amount,
      });
    } else {
      this.set(newItem.id, newItem);
    }
  };

  increaseAmountOfItemByOne = (id: string) => {
    if (this.has(id)) {
      const item = this.get(id) as CartItem;
      this.set(id, { ...item, amount: item.amount + 1 });
    }
  };

  decreaseAmountOfItemByOne = (id: string) => {
    if (this.has(id)) {
      const item = this.get(id) as CartItem;
      if (item.amount <= 1) {
        this.delete(id);
      } else {
        this.set(id, { ...item, amount: item.amount - 1 });
      }
    }
  };
}
