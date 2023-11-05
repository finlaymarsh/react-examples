import { ChangeEvent, useContext, useState } from "react";
import { createTaskFrom } from "../interfaces/Task";
import { ProjectContext } from "../store/ProjectContext";

export default function NewTask() {
  const projectContext = useContext(ProjectContext);
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setEnteredTask(event.target.value);
  }

  function addTask() {
    if (enteredTask.trim() !== "") {
      setEnteredTask("");
      projectContext.addTaskToSelectedProject(createTaskFrom(enteredTask));
    }
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button onClick={addTask} className="text-stone-700 hover:text-stone-950">
        Add Task
      </button>
    </div>
  );
}
