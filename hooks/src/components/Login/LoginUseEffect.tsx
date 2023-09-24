import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

enum Validation {
  PENDING = "PENDING",
  INVALID = "INVALID",
  VALID = "VALID",
}

const Login = (props: {
  onLogin: (email: string, password: string) => void;
}) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(Validation.PENDING);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(Validation.PENDING);
  const [formIsValid, setFormIsValid] = useState(false);

  // This hook should be used when we want to react to some sort of action, i.e
  // a component load or a dependency change
  useEffect(() => {
    console.log("useEffect invoked");
    // We are going to debounce the input by only running validation after the user has stopped type (i.e no more input change after x seconds)
    const handler = setTimeout(() => {
      // This is a function built into browsers to run a callback after a duration
      console.log("Checking form validity.");
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);
    console.log("useEffect finished");
    // This callback runs at the start of the next useEffect call
    return () => {
      console.log("CLEANUP");
      clearTimeout(handler);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(
      enteredEmail.includes("@") ? Validation.VALID : Validation.INVALID
    );
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(
      enteredPassword.trim().length > 6 ? Validation.VALID : Validation.INVALID
    );
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
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
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
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
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
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
