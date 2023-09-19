import { AGE_ERROR } from "../../../constants/errors/AGE_ERROR";
import { USERNAME_ERROR } from "../../../constants/errors/USERNAME_ERROR";
import { User } from "@/src/interfaces/User";
import ValidationError from "@/src/interfaces/ValidationError";
import { FormEvent, useState } from "react";
import { Button } from "../../UI/Button/Button";
import { Card } from "../../UI/Card/card";
import { ErrorModal } from "../../UI/ErrorModal/ErrorModal";
import classes from "./AddUserInput.module.css";

export const AddUser = (props: { addUser: (user: User) => void }) => {
  const initialUser: User = {
    username: "",
    age: 0,
  };

  const [user, setUser] = useState(initialUser);
  const [error, setError] = useState({} as ValidationError);

  const setUsername = (value: string) => {
    setUser({ ...user, username: value });
  };

  const setAge = (value: number) => {
    setUser({ ...user, age: value });
  };

  const addUser = (event: FormEvent) => {
    event.preventDefault();

    if (user.username.trim().length === 0) {
      setError(USERNAME_ERROR);
      return;
    }

    if (user.age <= 0) {
      setError(AGE_ERROR);
      return;
    }

    props.addUser(user);
    setUser(initialUser);
  };

  const errorAcknowledgedHandler = () => {
    setError({});
  };

  return (
    <div>
      {error.message !== undefined && error.title !== undefined && (
        <ErrorModal
          error={error}
          errorAcknowledgedHandler={errorAcknowledgedHandler}
        />
      )}
      <Card className={classes.input}>
        <form>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={user.username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={user.age}
            onChange={(event) => setAge(+event.target.value)}
          />
          <Button type="submit" onClick={addUser}>
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};
