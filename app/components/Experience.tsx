import { experience } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24"
    >
      <SectionHeading index="02." title="Experience" />

      <ol className="relative ml-3 border-l border-border-subtle">
        {experience.map((job, i) => {
          const accent =
            job.accent === "blue"
              ? "var(--blue-bright)"
              : "var(--maroon-bright)";
          return (
            <Reveal as="li" key={i} delay={i * 100} className="mb-10 ml-8">
              {/* timeline dot */}
              <span
                className="absolute -left-[7px] mt-5 h-3.5 w-3.5 rounded-full border-2 border-background"
                style={{ background: accent }}
              />
              <ExperienceCard job={job} />
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}
