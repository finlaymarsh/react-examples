import { HTMLAttributes, HtmlHTMLAttributes, InputHTMLAttributes } from "react";
import classes from "./Input.module.css";

interface InputProps {
  label: string;
  input: InputHTMLAttributes<HTMLInputElement>;
}

export const Input = (props: InputProps) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>Amount</label>
      <input {...props.input}></input>
    </div>
  );
};
