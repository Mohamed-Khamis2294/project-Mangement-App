import { FaBars, FaPlus } from "react-icons/fa6";

export default function Sidebar({
  setShowSideBar,
  showSideBar,
  SetNavigate,
  projectsArray,
  setDirectory,
  directory,
}) {
  return (
    <aside
      className={`bg-stone-800  w-6/12 sm:w-4/12 h-full lg:w-3/12 pt-10 pl-10 transition-all duration-500  ${
        showSideBar ? "absolute md:relative" : `-translate-x-full absolute `
      } `}
    >
      <h1 className="text-white font-semibold text-xl">Your Projects</h1>
      <button
        className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md mt-6"
        onClick={() => {
          SetNavigate("newProject");
          setDirectory("");
        }}
      >
        <FaPlus />
        <p className="font-medium">Add Project</p>
      </button>
      <ul className="w-full  mt-3">
        {projectsArray.projects.map((p) => (
          <li
            key={p.id}
            className={`text-white ${
              p.id === directory ? "bg-stone-400  text-black" : ""
            } p-2 mb-2 cursor-pointer hover:bg-stone-400`}
            onClick={() => {
              setDirectory(p.id);
              SetNavigate("project");
            }}
          >
            {p.title}
          </li>
        ))}
      </ul>
      <button
        onClick={() => setShowSideBar((prev) => (prev === true ? false : true))}
        className="absolute top-10 left-full "
      >
        <FaBars className="size-6" />
      </button>
    </aside>
  );
}
