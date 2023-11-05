import { useContext } from "react";
import { ProjectContext } from "../store/ProjectContext";
import NewTask from "./NewTask";

export default function Tasks() {
  const projectContext = useContext(ProjectContext);

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask />
      {projectContext.selectedProject!.tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {projectContext.selectedProject!.tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {projectContext.selectedProject!.tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.body}</span>
              <button
                onClick={() =>
                  projectContext.deleteTaskFromSelectedProject(task)
                }
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
