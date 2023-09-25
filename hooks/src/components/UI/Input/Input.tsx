import React, { forwardRef, Ref, useImperativeHandle } from "react";
import { ChangeEventHandler, FocusEventHandler, useRef } from "react";
import Validation from "../../Login/interfaces/Validation";
import classes from "./Input.module.css";

export interface InputRef {
  focus: () => void;
}

export const Input = forwardRef(
  (
    props: {
      id: string;
      label: string;
      type: string;
      value: string;
      onChange: ChangeEventHandler<HTMLInputElement>;
      onBlur: FocusEventHandler<HTMLInputElement>;
      isValid: Validation;
    },
    ref: Ref<InputRef>
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => {
      return {
        focus: activate,
      };
    });

    const activate = () => {
      inputRef.current?.focus();
    };

    return (
      <div
        className={`${classes.control} ${
          props.isValid === Validation.INVALID ? classes.invalid : ""
        }`}
      >
        <label htmlFor={props.id}>{props.label}</label>
        <input
          ref={inputRef}
          type={props.type}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
    );
  }
);
