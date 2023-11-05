import React, { HTMLAttributes, ReactNode, useState } from "react";
import Project from "../interfaces/Project";
import { ProjectState } from "../interfaces/ProjectState";

const ProjectContext = React.createContext({
  handleStartAddingProject: () => {},
  handleCancelAddingProject: () => {},
  saveProject: (_: Project) => {},
  displayProject: (_: Project) => {},
  deleteProject: (_: Project) => {},
  displayState: ProjectState.NO_PROJECT_SELECTED as ProjectState,
  projects: [] as Project[],
  selectedProject: {} as Project | undefined,
});

export default function ProjectContextProvider(
  props: HTMLAttributes<ReactNode>
) {
  const [displayState, setDisplayState] = useState(
    ProjectState.NO_PROJECT_SELECTED
  );

  const [selectedProject, setSelectedProject] = useState<Project | undefined>(
    undefined
  );

  const [projects, setProjects] = useState([] as Project[]);

  function handleStartAddingProject() {
    setSelectedProject(undefined);
    setDisplayState(ProjectState.ADDING_PROJECT);
  }

  function handleCancelAddingProject() {
    setDisplayState(ProjectState.NO_PROJECT_SELECTED);
  }

  function addProject(project: Project) {
    setProjects((prev) => [...prev, project]);
  }

  function saveProject(project: Project) {
    addProject(project);
    displayProject(project);
  }

  function deleteProject(projectToDelete: Project) {
    setProjects((prev) =>
      prev.filter((project) => project.id !== projectToDelete.id)
    );
    setSelectedProject(undefined);
    setDisplayState(ProjectState.NO_PROJECT_SELECTED);
  }

  function displayProject(project: Project) {
    setSelectedProject(project);
    setDisplayState(ProjectState.DISPLAY_PROJECT);
  }

  return (
    <ProjectContext.Provider
      value={{
        handleStartAddingProject: handleStartAddingProject,
        handleCancelAddingProject: handleCancelAddingProject,
        saveProject: saveProject,
        displayProject: displayProject,
        deleteProject: deleteProject,
        displayState,
        projects,
        selectedProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
}

export { ProjectContext };
