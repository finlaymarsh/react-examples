import { useContext } from "react";
import { ProjectContext } from "../store/ProjectContext";
import Button from "./Button";

export default function ProjectSideBar() {
  const projectContext = useContext(ProjectContext);

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={projectContext.handleStartAddingProject}>
          + Add Project
        </Button>
      </div>
      <ul className="mt-8">
        {projectContext.projects.map((project) => {
          let extraClasses = "";
          if (project.id === projectContext.selectedProject?.id) {
            extraClasses = "bg-stone-800 text-stone-200";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => projectContext.displayProject(project)}
                className={`w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800 ${extraClasses}`}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
