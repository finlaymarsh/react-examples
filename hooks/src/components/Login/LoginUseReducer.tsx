import React, { FormEvent, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Validation from "./interfaces/Validation";
import ActionType from "./actions/ActionType";
import formReducer from "./reducers/FormReducer";
import INITIAL_FORM_DATA from "./constants/FormData";

const Login = (props: {
  onLogin: (email: string, password: string) => void;
}) => {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_FORM_DATA);

  const {
    email: { validity: emailIsValid },
  } = formState;

  const {
    password: { validity: passwordIsValid },
  } = formState;

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    props.onLogin(formState.email.value, formState.email.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === Validation.INVALID ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formState.email.value}
            onChange={(event) =>
              dispatchForm({
                type: ActionType.EMAIL_USER_INPUT,
                value: event.target.value,
              })
            }
            onBlur={() =>
              dispatchForm({
                type: ActionType.EMAIL_INPUT_BLUR,
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
            value={formState.password.value}
            onChange={(event) =>
              dispatchForm({
                type: ActionType.PASSWORD_USER_INPUT,
                value: event.target.value,
              })
            }
            onBlur={() =>
              dispatchForm({
                type: ActionType.PASSWORD_INPUT_BLUR,
              })
            }
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!formState.enableSubmit}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
