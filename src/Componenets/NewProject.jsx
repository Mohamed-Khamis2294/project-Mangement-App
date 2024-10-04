import React, { useRef } from "react";
import { toast } from "react-toastify";

export default function NewProject({
  showSideBar,
  SetNavigate,
  setProjectsArray,
}) {
  const inputClasses = `bg-stone-200 outline-0 border-b-2 focus:border-red-400 mb-4 p-2 rounded-sm`;
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  function submit(e) {
    e.preventDefault();
    if (
      titleRef.current.value.trim() === "" ||
      descriptionRef.current.value.trim() === "" ||
      dateRef.current.value.trim() === ""
    ) {
      toast.error("There are empty fields");
    } else {
      setProjectsArray((prev) => {
        const newProjects = {
          ...prev,
          projects: [
            ...prev.projects,
            {
              title: titleRef.current.value,
              description: descriptionRef.current.value,
              date: dateRef.current.value,
              id: Math.random(),
            },
          ],
        };
        localStorage.setItem("projects", JSON.stringify(newProjects));
        return newProjects;
      });
      SetNavigate("opening");
      toast.success("Added Successfully");
    }
  }

  return (
    <div
      className={` flex  items-center justify-center  ${
        showSideBar ? "w-full sm:w-8/12  lg:w-9/12" : "w-full"
      }`}
    >
      <form onSubmit={submit} className="flex flex-col w-11/12 md:w-6/12">
        <label htmlFor="title" className="font-semibold">
          Title
        </label>
        <input
          ref={titleRef}
          type="text"
          name="title"
          id="title"
          className={`${inputClasses}`}
        />
        <label htmlFor="description" className="font-semibold">
          Descrption
        </label>
        <textarea
          ref={descriptionRef}
          name="description"
          id="description"
          className={`${inputClasses}`}
        ></textarea>
        <label htmlFor="date" className="font-semibold">
          DueDate
        </label>
        <input
          ref={dateRef}
          type="date"
          name="date"
          id="date"
          className={`${inputClasses}`}
        />
        <menu className="flex gap-2 mt-2 justify-end">
          <button
            className="bg-transparent hover:bg-stone-200 py-1 px-3 rounded-md"
            onClick={() => SetNavigate("opening")}
          >
            cancel
          </button>
          <button
            className="bg-red-400 py-1 px-3 rounded-md text-white hover:bg-red-500"
            type="submit"
          >
            save
          </button>
        </menu>
      </form>
    </div>
  );
}
