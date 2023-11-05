import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ProjectContextProvider from "./store/ProjectContext";

// The ! here tells Typescript to ignore the null | undefined cases here
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProjectContextProvider>
      <App />
    </ProjectContextProvider>
  </React.StrictMode>
);
