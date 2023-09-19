import { AGE_ERROR } from "../../../constants/errors/AGE_ERROR";
import { USERNAME_ERROR } from "../../../constants/errors/USERNAME_ERROR";
import { User } from "@/src/interfaces/User";
import ValidationError from "@/src/interfaces/ValidationError";
import { FormEvent, useRef, useState } from "react";
import { Button } from "../../UI/Button/Button";
import { Card } from "../../UI/Card/card";
import { ErrorModal } from "../../UI/ErrorModal/ErrorModal";
import classes from "./AddUserInput.module.css";

export const AddUser = (props: { addUser: (user: User) => void }) => {
  const nameInputRef = useRef({} as HTMLInputElement);
  const ageInputRef = useRef({} as HTMLInputElement);

  const [error, setError] = useState({} as ValidationError);

  const addUser = (event: FormEvent) => {
    event.preventDefault();
    const username = nameInputRef.current.value;
    const age = +ageInputRef.current.value;

    if (username.trim().length === 0) {
      setError(USERNAME_ERROR);
      return;
    }

    if (age <= 0) {
      setError(AGE_ERROR);
      return;
    }

    props.addUser({ username: username, age: age });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorAcknowledgedHandler = () => {
    setError({});
  };

  return (
    <>
      {error.message !== undefined && error.title !== undefined && (
        <ErrorModal
          error={error}
          errorAcknowledgedHandler={errorAcknowledgedHandler}
        />
      )}
      <Card className={classes.input}>
        <form>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit" onClick={addUser}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};
