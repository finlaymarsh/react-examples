import {
  forwardRef,
  InputHTMLAttributes,
  Ref,
  useImperativeHandle,
  useRef,
} from "react";
import classes from "./Input.module.css";

interface InputProps {
  label: string;
  input: InputHTMLAttributes<HTMLInputElement>;
}

export const Input = forwardRef(
  (props: InputProps, ref: Ref<HTMLInputElement>) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    return (
      <div className={classes.input}>
        <label htmlFor={props.input.id}>Amount</label>
        <input ref={inputRef} {...props.input}></input>
      </div>
    );
  }
);
