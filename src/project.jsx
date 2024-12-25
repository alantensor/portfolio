import { motion } from "framer-motion";
import { projects } from "./projectList";

import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const images = import.meta.glob("./assets/projects/*.{jpg,png}", {
  eager: true,
});

export default function Projects() {
  return (
    <>
      <h1 className="text-3xl font-semibold text-black dark:text-white text-center md:text-left">
        Projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-10 p-5 ">
        {projects.map((project, i) => {
          const imagePath =
            images[`./assets/projects/${project.imageName}`]?.default;
          return (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: i * 0.2 }}
              key={i}
              className="project-card relative bg-neutral-100 shadow-xl dark:bg-neutral-800 text-black  dark:text-white  max-w-2xl p-1 rounded-2xl space-y-3"
            >
              <img
                src={imagePath}
                className="image object-cover h-44 w-full rounded-xl"
              />
              <div className="flex flex-col justify-between project-info absolute bottom-0 left-0 right-0 h-full bg-black bg-opacity-60 text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-semibold">{project.title}</h1>
                  <div className="flex space-x-3 text-white">
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
                <p className="dark:text-neutral-400 text-sm">
                  {project.description}
                </p>
				{/* <div className="flex flex-1 flex-wrap  text-neutral-600  dark:text-neutral-400 italic ">
                  {project.tech.split(",").map((item) => {
                    return (
                      <p
                        key=""
                        className="dark:bg-neutral-700 bg-neutral-300 px-2 rounded-full mr-2 my-1"
                      >
                        {item}
                      </p>
                    );
                  })}
                </div> */}
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
