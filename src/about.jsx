import about from "./assets/about.jpg";
import canyon from "./assets/canyon.jpg";
import { ts } from "./ts";
import { motion } from "framer-motion";

const images = import.meta.glob("./assets/technologies/*.{jpg,png,svg,webp}", {
  eager: true,
});

export default function About() {
  return (
    <motion.div
      className="flex flex-col h-auto p-5 mx-6 md:mx-32 mt-12 mb-32 items-center "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.33 }}
      transition={{ duration: 0.7 }}
    >
      <h1
        id="about"
        className="text-4xl font-semibold text-black dark:text-white"
      >
        About me
      </h1>
      <blockquote className="my-10 border-l-4 border-neutral-500 pl-4 text-black dark:text-gray-300 italic max-w-3xl">
        "Alan is the best software engineer I have ever met. He also bought me a
        Porsche, saved my family from a fire, and cured my dog's cancer. Just a
        great guy overall."
        <footer className="mt-2 text-neutral-400 dark:text-gray-500">
          - Anonymous, PM @ Google
        </footer>
      </blockquote>

      <div className="grid grid-cols-4 gap-10 p-5 shadow-xl bg-neutral-100 rounded-2xl dark:bg-black">
        {ts.map((icon, i) => {
          const imagePath =
            images[`./assets/technologies/${icon.imageName}`]?.default;
          return (
            <div key={i} className="hover-trigger items-center">
              <img
                src={imagePath}
                className="h-16 w-16 object-contain"
                alt="project image"
              />
              <div className="absolute p-2 h-16 w-16 text-center text-sm text-black dark:text-white hover-target">
                {icon.name}
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="mt-8">Some tech I use</h2>

      <p className="mt-8 max-w-3xl leading-loose">
        Based in Vancouver, British Columbia, I&apos;m a developer with a
        passion for developing seamless, efficient, and user-friendly
        applications. My journey in technology is driven by a commitment to
        continuous learning and a love for tackling new challenges. When
        I&apos;m not at the computer, I enjoy playing basketball, hiking the BC
        backcountry, and making music.
      </p>
      <div className="flex space-x-4 max-w-3xl mt-8">
        <div className="overflow-hidden rounded-xl max-h-[14rem]">
          <img
            className="h-full w-full object-cover"
            src={about}
            alt="hobbies"
          />
        </div>
        <div className="overflow-hidden rounded-xl max-h-[14rem]">
          <img
            className="h-full w-full object-cover"
            src={canyon}
            alt="hobbies"
          />
        </div>
      </div>
    </motion.div>
  );
}
