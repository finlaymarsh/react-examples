import { useContext } from "react";
import { ProjectContext } from "../store/ProjectContext";
import Tasks from "./Tasks";

export default function SelectedProject() {
  const projectContext = useContext(ProjectContext);

  const formattedDate = new Date(
    projectContext.selectedProject!.dueDate
  ).toLocaleString("en-uk", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {projectContext.selectedProject?.title}
          </h1>
          <button
            onClick={() =>
              projectContext.deleteProject(projectContext.selectedProject!)
            }
            className="text-stone-600 hover:text-stone-950"
          >
            DELETE
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {projectContext.selectedProject?.description}
        </p>
      </header>
      <Tasks />
    </div>
  );
}
