import React, { useState } from "react";
import { AddUser } from "./components/Users/AddUserInput/AddUserInput";
import { UserList } from "./components/Users/UserList/UserList";
import { User } from "./interfaces/User";
import { v4 as uuid } from "uuid";

function App() {
  const initialUsers: User[] = [];

  const [users, setUsers] = useState(initialUsers);

  const addUser = (user: User) => {
    setUsers([...users, { ...user, id: uuid() }]);
  };

  return (
    <>
      <AddUser addUser={addUser} />
      {users.length > 0 && <UserList users={users} />}
    </>
  );
}

export default App;
