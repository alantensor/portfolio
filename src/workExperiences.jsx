import { motion } from "framer-motion";

export default function WorkExperiences() {
  const experiences = [
    {
      company: "Amazon",
      role: "Software Developer Intern",
      period: "Incoming",
      // description: "Studying Computer Science at UBC",
      link: "https://aws.amazon.com/"
    },
    {
      company: "Tetra Tech",
      role: "Software Developer Co-op",
      period: "Jan 2026 - Present",
      // description: "Studying Computer Science at UBC",
      link: "https://www.tetratech.com/"
    },
    {
      company: "Intern Insider",
      role: "Software Engineer",
      period: "Sep 2025 - Dec 2025",
      // description: "Helping 100k students find internships. Working on full-stack development and distributed systems.",
      link: "https://interninsider.me"
    },
    {
      company: "Nezz",
      role: "Software Engineering Intern",
      period: "Sep 2024 - Jan 2025",
      // description: "Worked on payments and set up automated testing pipeline",
      link: "https://nezzapp.com"
    },
    {
      company: "Blender Foundation",
      role: "Open Source Developer",
      period: "2024",
      // description: "Worked on the Blender 3D software",
      link: "https://blender.org"
    }
    // Add more experiences here
  ];

  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold mb-6">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="mb-2">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                {exp.role}
                {exp.link ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link ml-1"
                  >
                    @{exp.company}
                  </a>
                ) : (
                  <span className="text-neutral-600 dark:text-neutral-400 ml-1">
                    @{exp.company}
                  </span>
                )}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {exp.period}
              </p>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

