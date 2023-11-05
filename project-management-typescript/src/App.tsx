import { useContext } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import SelectedProject from "./components/SelectedProject";
import { ProjectState } from "./interfaces/ProjectState";
import { ProjectContext } from "./store/ProjectContext";

function App() {
  const projectContext = useContext(ProjectContext);
  return (
    <main className="h-screen flex gap-8">
      <ProjectSideBar />
      {projectContext.displayState === ProjectState.ADDING_PROJECT ? (
        <NewProject />
      ) : null}
      {projectContext.displayState === ProjectState.DISPLAY_PROJECT ? (
        <SelectedProject />
      ) : null}
      {projectContext.displayState === ProjectState.NO_PROJECT_SELECTED ? (
        <NoProjectSelected />
      ) : null}
    </main>
  );
}

export default App;
