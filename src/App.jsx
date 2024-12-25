import { useState } from "react";
import Wrapper from "./wrapper";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect } from "react";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  useEffect(() => {
    if (isDark) {
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
    localStorage.setItem("theme", JSON.stringify(isDark));
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <nav className="hidden md:flex p-3 justify-center space-x-4 bg-inherit">
        {[
          ["Home", "#", "home"],
          ["About", "#about", "about"],
          ["Projects", "#projects", "projects"],
        ].map(([title, url]) => (
          <a
            key={title}
            href={url}
            className=" rounded-lg px-3 py-2 text-black dark:text-neutral-400 text-xs font-medium hover:opacity-60 transition ease-in duration-100"
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
