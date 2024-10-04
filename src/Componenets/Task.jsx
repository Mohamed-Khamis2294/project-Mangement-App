import React, { useState } from "react";

export default function Task({
  handleDeleteTask,
  handleAddTask,
  projectTasks,
}) {
  const [taskinput, setTaskInput] = useState("");
  function handleChange(e) {
    setTaskInput(e.target.value);
  }
  function handleClick() {
    handleAddTask(taskinput);
    setTaskInput("");
  }

  return (
    <div className="flex gap-3 pb-4 border-b-2 border-sky-200  flex-col w-11/12 md:w-6/12">
      <h3 className="font-bold text-2xl">Tasks</h3>
      <div className="flex justify-between gap-3  items-center ">
        <input
          onChange={handleChange}
          value={taskinput}
          type="text"
          name="task"
          id="task"
          className={`bg-stone-200 outline-0 border-b-2 focus:border-sky-400 mb-4 p-2 rounded-sm grow`}
        />
        <button onClick={handleClick} className="font-semibold ">
          Add Task
        </button>
      </div>
      {projectTasks.length <= 0 && (
        <p>this project doesnt have any tasks yet.</p>
      )}
      {projectTasks.length > 0 && (
        <ul className="flex flex-col gap-3">
          {projectTasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between gap-3  items-center "
            >
              <p>{task.text}</p>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="font-semibold text-red-600"
              >
                clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
