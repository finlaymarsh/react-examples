import { v4 as uuidv4 } from "uuid";

export default interface Task {
  id: string;
  body: string;
}

export function createTaskFrom(body: string): Task {
  return {
    id: uuidv4(),
    body: body,
  };
}
