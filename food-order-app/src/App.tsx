import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";
import { CartContextProvider } from "./store/cart-context";

export const App = () => {
  return (
    <CartContextProvider>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
};
