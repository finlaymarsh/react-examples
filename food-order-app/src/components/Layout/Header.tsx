import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import { HeaderCartButton } from "../UI/HeaderButton/HeaderButton";

export const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!"></img>
      </div>
    </>
  );
};
