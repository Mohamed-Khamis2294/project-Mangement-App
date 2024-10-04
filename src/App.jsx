import Sidebar from "./Componenets/Sidebar";
import Opening from "./Componenets/Opening";
import { useState } from "react";
import NewProject from "./Componenets/NewProject";
import Project from "./Componenets/Project";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [navigate, SetNavigate] = useState("opening");
  const getProjectsArray = JSON.parse(localStorage.getItem("projects")) || {
    projects: [],
    tasks: [],
  };
  const [projectsArray, setProjectsArray] = useState(getProjectsArray);
  const [directory, setDirectory] = useState("");
  let project = projectsArray.projects.find((p) => p.id === directory);
  let projectTasks = projectsArray.tasks.filter(
    (t) => t.projectId === directory
  );

  function handleAddTask(text) {
    setProjectsArray((prev) => {
      const newTask = {
        id: Math.random(),
        text: text,
        projectId: directory,
      };
      const newProjects = {
        ...prev,
        tasks: [newTask, ...prev.tasks],
      };
      localStorage.setItem("projects", JSON.stringify(newProjects));
      return newProjects;
    });
  }
  function handleDeleteTask(id) {
    setProjectsArray((prev) => {
      const newProjects = {
        ...prev,
        tasks: prev.tasks.filter((t) => t.id !== id),
      };
      localStorage.setItem("projects", JSON.stringify(newProjects));
      return newProjects;
    });
  }

  // *****************
  function handleDelete() {
    setProjectsArray((prev) => {
      const newProjects = {
        ...prev,
        projects: prev.projects.filter((p) => p.id !== project.id),
        tasks: prev.tasks.filter((t) => t.projectId !== project.id),
      };
      localStorage.setItem("projects", JSON.stringify(newProjects));
      return newProjects;
    });
    SetNavigate("opening");
  }
  return (
    <main className="flex h-screen">
      <Sidebar
        setShowSideBar={setShowSideBar}
        SetNavigate={SetNavigate}
        showSideBar={showSideBar}
        projectsArray={projectsArray}
        setDirectory={setDirectory}
        directory={directory}
      />
      {navigate === "opening" && (
        <Opening
          showSideBar={showSideBar}
          SetNavigate={SetNavigate}
          setDirectory={setDirectory}
        />
      )}
      {navigate === "newProject" && (
        <NewProject
          showSideBar={showSideBar}
          SetNavigate={SetNavigate}
          setProjectsArray={setProjectsArray}
        />
      )}
      {navigate === "project" && (
        <Project
          project={project}
          showSideBar={showSideBar}
          onDelete={handleDelete}
          handleAddTask={handleAddTask}
          handleDeleteTask={handleDeleteTask}
          projectTasks={projectTasks}
        />
      )}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  );
}

export default App;
