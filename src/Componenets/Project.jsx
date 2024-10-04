import React from "react";
import Task from "./Task";

export default function Project({
  showSideBar,
  project,
  onDelete,
  handleAddTask,
  handleDeleteTask,
  projectTasks,
}) {
  return (
    <div
      className={` flex flex-col gap-8 items-center justify-center  ${
        showSideBar ? "w-full sm:w-8/12  lg:w-9/12" : "w-full"
      } `}
    >
      <div className="flex gap-3 pb-4 border-b-2 border-sky-200  flex-col w-11/12 md:w-6/12">
        <div className="flex justify-between">
          <h3 className="font-bold text-2xl">{project.title}</h3>
          <button onClick={onDelete} className="text-red-600">
            Delete
          </button>
        </div>
        <p className="text-stone-400">
          {new Date(project.date).toLocaleDateString("en-US", {
            day: "numeric",
            year: "numeric",
            month: "short",
          })}
        </p>
        <p className="whitespace-pre-wrap text-stone-600">
          {project.description}
        </p>
      </div>
      <Task
        handleAddTask={handleAddTask}
        handleDeleteTask={handleDeleteTask}
        projectTasks={projectTasks}
      />
    </div>
  );
}
