import { useState } from "react";
import Wrapper from "./wrapper";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.body.classList.add("dark");
      document.documentElement.style.setProperty(
        "--scrollbar-bg-color",
        "black"
      );
    } else {
      document.body.classList.remove("dark");
      document.documentElement.style.setProperty(
        "--scrollbar-bg-color",
        "white"
      );
    }
  };

  return (
    <>
      <nav className="hidden md:flex p-3 justify-center space-x-4 bg-neutral-900 sticky top-0 z-50 ">
        {[
          ["HOME", "#", "home"],
          ["PROJECTS", "#projects", "projects"],
          ["ABOUT", "#about", "about"],
        ].map(([title, url]) => (
          <a
            key={title}
            href={url}
            className=" rounded-lg px-3 py-2 text-neutral-400 text-xs font-medium hover:text-neutral-300 transition ease-in duration-100"
          >
            {title}
          </a>
        ))}
        <button onClick={toggleDarkMode} className="absolute right-8 top-4  ">
          {!isDark ? (
            <FaSun className="w-6 h-6 text-yellow-400" />
          ) : (
            <FaMoon className="w-6 h-6 text-white" />
          )}
        </button>
      </nav>

      <Wrapper />
    </>
  );
}

export default App;
