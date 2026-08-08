import { motion } from "framer-motion";
import { ts } from "./ts";

function Link({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link">
      {children}
    </a>
  );
}

export default function About() {
  return (
    <section className="mb-16">
      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
        20. Developer and CS + Math student{" "}
        <Link href="https://www.ubc.ca">@UBC</Link>
        .
      </p>
      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
        Interested in distributed systems, full-stack development, and machine
        learning. Previously, I helped 100k students find internships with{" "}
        <Link href="https://interninsider.me">Intern Insider</Link>
        .
      </p>
      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
         Incoming intern on the DevOps Agent team at <Link href="https://aws.amazon.com">AWS</Link>. Worked on maps and flood detection for North American rail at <Link href={"https://tetratech.com"}>Tetra Tech</Link>.
      </p>
      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
        I also represented UBC at{" "}
        <Link href="https://icpc.global/">ACM-ICPC</Link>{" "}
        Regionals in{" "}
        <Link href="https://icpc.global/regionals/finder/PacNW-2024/standings">2023</Link>{" "}
        and{" "}
        <Link href="https://icpc.global/regionals/finder/PacNW-2025/standings">2024</Link>
        . When I'm not at the computer, I enjoy playing basketball, hiking the
        BC backcountry, and writing music.
      </p>
      <div className="mt-6">
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
          Technologies I've used:
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm">
          {ts.map((tech, i) => (
            <span key={i}>
              {tech.name}
              {i < ts.length - 1 && ", "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
