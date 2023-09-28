import { HTMLAttributes } from "react";
import classes from "./Card.module.css";

export const Card = (props: HTMLAttributes<HTMLElement>) => {
  return <div className={classes.card}>{props.children}</div>;
};
