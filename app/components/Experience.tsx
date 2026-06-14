import { experience } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

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
            job.accent === "blue" ? "var(--blue-bright)" : "var(--maroon-bright)";
          return (
            <Reveal as="li" key={i} delay={i * 100} className="mb-10 ml-8">
              {/* timeline dot */}
              <span
                className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full border-2 border-background"
                style={{ background: accent }}
              />

              <article className="glow-card rounded-xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">
                    {job.role}{" "}
                    <span style={{ color: accent }}>@ {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {job.period}
                  </span>
                </div>

                {job.location && (
                  <p className="mt-1 font-mono text-xs text-muted">
                    {job.location}
                  </p>
                )}

                <p className="mt-3 text-muted">{job.description}</p>

                <ul className="mt-4 space-y-2">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-sm text-muted">
                      <span style={{ color: accent }}>▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}
