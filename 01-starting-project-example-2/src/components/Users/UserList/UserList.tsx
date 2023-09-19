import { User } from "@/src/interfaces/User";
import { Card } from "../../UI/Card/card";
import classes from "./UserList.module.css";

export const UserList = (props: { users: User[] }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.username} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
