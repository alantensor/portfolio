import { motion } from "framer-motion";
import { projects } from "./projectList";

import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const images = import.meta.glob("./assets/projects/*.{jpg,png}", {
  eager: true,
});

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col h-auto p-5 my-8 md:mx-32 md:mt-32 2xl:mt-80 md:p-10 justify-center"
    >
      <h1 className="text-4xl font-semibold text-black dark:text-white">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10 p-5 ">
        {projects.map((project, i) => {
          const imagePath =
            images[`./assets/projects/${project.imageName}`]?.default;
          return (
            <motion.div
              initial={{ opacity: 0, y: -65 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              key={i}
              className="bg-neutral-100 dark:bg-neutral-800 text-black  dark:text-white  w-full p-6 rounded-2xl space-y-5"
            >
              <img
                src={imagePath}
                className="object-cover h-56 w-full rounded-xl"
              />
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">{project.title}</h1>
                <div className="flex space-x-3 text-black dark:text-neutral-300">
                  {project.github ? (
                    <a
                      href={project.github}
                      className="text-xl hover:opacity-30 transition ease-in duration-75"
                    >
                      <FaGithub />
                    </a>
                  ) : null}
                  {project.href ? (
                    <a
                      href={project.href}
                      className="text-xl hover:opacity-30 transition ease-in duration-75"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  ) : null}
                </div>
              </div>
              <span className="text-neutral-400 ">{project.tech}</span>
              <p className="text-neutral-400  text-sm">{project.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
