import React, { FormEvent, useContext, useReducer, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import ActionType from "./actions/ActionType";
import formReducer from "./reducers/FormReducer";
import INITIAL_FORM_DATA from "./constants/FormData";
import AuthContext from "../../context/auth-context";
import { Input, InputRef } from "../UI/Input/Input";
import Validation from "./interfaces/Validation";

const Login = () => {
  const ctx = useContext(AuthContext);

  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_FORM_DATA);

  const {
    email: { validity: emailIsValid },
  } = formState;

  const {
    password: { validity: passwordIsValid },
  } = formState;

  const emailInputRef = useRef<InputRef>(null);
  const passwordInputRef = useRef<InputRef>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (formState.enableSubmit) {
      ctx.onLogin(formState.email.value, formState.email.value);
    } else if (emailIsValid !== Validation.VALID) {
      emailInputRef.current?.focus();
    } else {
      passwordInputRef.current?.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="Email"
          type="text"
          value={formState.email.value}
          onChange={(event) =>
            dispatchForm({
              type: ActionType.EMAIL_USER_INPUT,
              value: event.target.value,
            })
          }
          onBlur={() => dispatchForm({ type: ActionType.EMAIL_INPUT_BLUR })}
          isValid={emailIsValid}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          value={formState.password.value}
          onChange={(event) =>
            dispatchForm({
              type: ActionType.PASSWORD_USER_INPUT,
              value: event.target.value,
            })
          }
          onBlur={() => dispatchForm({ type: ActionType.PASSWORD_INPUT_BLUR })}
          isValid={passwordIsValid}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
