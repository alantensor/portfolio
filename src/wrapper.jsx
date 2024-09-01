import cartoon from "./assets/pic.png";
import About from "./about";
import Projects from "./project";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaYCombinator,
  FaEnvelope,
} from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function Wrapper() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAnimating(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id="scroll-container"
      className="flex flex-col h-auto pt-32 2xl:pt-56 text-neutral-700 bg-white transition-colors dark:text-neutral-400 dark:bg-black "
    >
      <div
        id="home"
        className="flex flex-col max-w-2xl m-auto  rounded-2xl max-h-96 select-none"
      >
        <motion.div
          className="flex items-center md:justify-center space-x-5 md:space-x-10  "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img
            src={cartoon}
            className="h-24 w-24 rounded-full"
            alt="profile picture"
          />
          <p className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
            Hi, I'm Alan.
          </p>
        </motion.div>
        <motion.div
          className=" md:text-xl mt-5 md:leading-loose max-w-72 md:max-w-md md:ml-12 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div>
            Developer and open-source enthusiast. Currently studying CS +
            Physics{" @"}
            <a
              href="https://www.ubc.ca/"
              className="underline decoration-solid dark:hover:text-white transition ease-in duration-100 "
            >
              UBC.
            </a>{" "}
            Feel free to connect!
          </div>
        </motion.div>
        <motion.div
          className="flex text-neutral-400 dark:text-white mt-8 md:ml-12 p-4 bg-neutral-100 shadow-xl dark:bg-neutral-800 rounded-xl space-x-10 text-2xl max-w-80 justify-center "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a className="hover:opacity-60" href="https://github.com/alantensor">
            <FaGithub />
          </a>
          <a
            className="hover:opacity-60"
            href="https://www.linkedin.com/in/therealalan/"
          >
            <FaLinkedin />
          </a>
          <a
            className="hover:opacity-60"
            href="https://news.ycombinator.com/user?id=alantensor"
          >
            <FaYCombinator />
          </a>
          <a className="hover:opacity-60" href="mailto:alanzhou318@gmail.com">
            <FaEnvelope />
          </a>
          <a
            className="hover:opacity-60"
            href="/resume_2024.pdf"
            target="blank"
          >
            <IoDocumentTextOutline />
          </a>
        </motion.div>
        <motion.div
          className="hidden md:flex md:mt-24 2xl:mt-32 text-4xl text-black dark:text-white justify-center "
          animate={
            isAnimating
              ? {
                  y: [0, -20, 0], // Move element up to -50px and back to 0
                }
              : { y: 0, opacity: 0 }
          }
          transition={{
            duration: 1, // Duration of the animation
            repeat: isAnimating ? Infinity : 0, // Repeat the animation infinitely
            repeatType: "loop", // Loop the animation
            ease: "easeInOut", // Easing function
          }}
        >
          <FaArrowDown />
        </motion.div>
      </div>
      <Projects />
      <About />
    </div>
  );
}
