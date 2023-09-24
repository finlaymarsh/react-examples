import React, { FormEvent, useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

enum Validation {
  PENDING = "PENDING",
  INVALID = "INVALID",
  VALID = "VALID",
}

enum ActionType {
  USER_INPUT = "USER_INPUT",
  INPUT_BLUR = "INPUT_BLUR",
}

interface Action {
  type: ActionType;
  value?: string | undefined;
  validator: (value: string | undefined) => Validation;
}

interface FormInput {
  value: string;
  isValid: Validation;
}

const emailValidator = (value: string | undefined): Validation => {
  if (value) {
    return value.includes("@") ? Validation.VALID : Validation.INVALID;
  }
  return Validation.INVALID;
};

const passwordValidator = (value: string | undefined): Validation => {
  if (value) {
    return value.trim().length > 6 ? Validation.VALID : Validation.INVALID;
  }
  return Validation.INVALID;
};

const inputReducer = (state: FormInput, action: Action): FormInput => {
  switch (action.type) {
    case ActionType.USER_INPUT:
      return {
        value: action.value ? action.value : "",
        isValid: action.validator(action.value),
      };
    case ActionType.INPUT_BLUR:
      return {
        value: state.value,
        isValid: action.validator(state.value),
      };
  }
};

const Login = (props: {
  onLogin: (email: string, password: string) => void;
}) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(inputReducer, {
    value: "",
    isValid: Validation.PENDING,
  });

  const [passwordState, dispatchPassword] = useReducer(inputReducer, {
    value: "",
    isValid: Validation.PENDING,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const handler = setTimeout(() => {
      setFormIsValid(
        emailIsValid === Validation.VALID &&
          passwordIsValid === Validation.VALID
      );
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [emailIsValid, passwordIsValid]);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === Validation.INVALID ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={(event) =>
              dispatchEmail({
                type: ActionType.USER_INPUT,
                value: event.target.value,
                validator: emailValidator,
              })
            }
            onBlur={() =>
              dispatchEmail({
                type: ActionType.INPUT_BLUR,
                validator: emailValidator,
              })
            }
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === Validation.INVALID ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={(event) =>
              dispatchPassword({
                type: ActionType.USER_INPUT,
                value: event.target.value,
                validator: passwordValidator,
              })
            }
            onBlur={() =>
              dispatchPassword({
                type: ActionType.INPUT_BLUR,
                validator: passwordValidator,
              })
            }
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
