import React from "react";

export default function Opening({ showSideBar, SetNavigate, setDirectory }) {
  return (
    <div
      className={` flex flex-col gap-6 items-center justify-center  ${
        showSideBar ? "w-full sm:w-8/12  lg:w-9/12" : "w-full"
      }`}
    >
      <img src="logo.png" className="w-20 object-contain block" alt="logo" />
      <h2 className="font-semibold text-stone-600">No Project Selected</h2>
      <p className="font-medium text-center">
        select a project or get started with a new one
      </p>
      <button
        className="bg-stone-500 hover:bg-stone-400 px-3 py-1 rounded-md text-white"
        onClick={() => {
          SetNavigate("newProject");
          setDirectory("");
        }}
      >
        create new project
      </button>
    </div>
  );
}
