import { ReactNode } from "react";
import classes from "./Card.module.css";

export const Card = (props: { children: ReactNode; className: string }) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};
