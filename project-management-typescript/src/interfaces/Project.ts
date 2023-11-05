import { v4 as uuidv4 } from "uuid";

export default interface Project {
  id: string;
  title: string;
  description: string;
  dueDate: string;
}

export function createProjectFrom(
  title: string,
  description: string,
  dueDate: string
): Project {
  return {
    id: uuidv4(),
    title: title,
    description: description,
    dueDate: dueDate,
  };
}
