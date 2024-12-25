import cartoon from "./assets/pic.png";
import About from "./about";
import Projects from "./project";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";
// import Globe from 'react-globe.gl';

import {
  FaGithub,
  FaLinkedin,
  FaYCombinator,
  FaEnvelope,
} from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function Wrapper() {
  return (
    <div
      id="scroll-container"
      className="flex flex-col h-auto my-8 text-neutral-700 bg-white transition-colors dark:text-neutral-400 dark:bg-black space-y-5"
    >
      <div
        id="home"
        className="flex flex-row justify-between min-w-full m-auto border-2 border-neutral-800 rounded-2xl lg:max-w-[50%] lg:min-w-[50%] lg:min-h-64 max-h-96 select-none items-center"
      >
        <div className="flex flex-col space-y-5 w-full sm:w-[55%] py-10 pl-10">
          <motion.div
            className=""
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* <img
            src={cartoon}
            className="h-24 w-24 rounded-full"
            alt="profile picture"
          /> */}
            {/* <p className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient"> */}
            <p className="text-2xl lg:text-5xl font-bold text-black dark:text-white">
              Hi, I'm Alan.
            </p>
          </motion.div>
          <motion.div
            className=" "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div>Developer and CS student <a href="https://cs.ubc.ca" className="hover:underline">@UBC.</a></div>
          </motion.div>
          <motion.div
            className="flex text-neutral-400 dark:text-white p-4 bg-neutral-100 shadow-xl dark:bg-neutral-800 rounded-xl text-2xl max-w-[75%] justify-between"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              className="hover:opacity-60"
              href="https://github.com/alantensor"
            >
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
            {/* <a
            className="hover:opacity-60"
            href="/resume_2024.pdf"
            target="blank"
          >
            <IoDocumentTextOutline />
          </a> */}
          </motion.div>
        </div>
        <div className=" hidden md:block w-[45%] p-10 ">
          <div className="w-full border-2 border-red-300 aspect-square rounded-2xl p-3 hover:-rotate-[10deg] transition-all duration-500 ease-in-out">
            <div className="w-full border-2 border-green-300 aspect-square rounded-2xl p-3 hover:rotate-[10deg] transition-all duration-500 ease-in-out">
              <div className="w-full border-2 border-blue-300 aspect-square rounded-2xl p-3 hover:-rotate-[10deg] transition-all duration-500 ease-in-out">
				<img className="bg-white rounded-2xl h-full w-full aspect-square " src={cartoon}/>
			  </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="about"
        className="flex flex-col p-2 lg:p-10 m-auto min-w-full lg:min-w-[50%] lg:max-w-[50%] border-2 border-neutral-800 rounded-2xl select-none space-y-5"
      >
        <About />
      </div>
      <div
        id="projects"
        className="flex flex-col p-2 lg:p-10 min-w-full m-auto lg:min-w-[50%] lg:max-w-[50%] border-2 border-neutral-800 rounded-2xl select-none space-y-5"
      >
        <Projects />
      </div>
    </div>
  );
}
