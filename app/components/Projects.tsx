import Image from "next/image";
import { projects } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="03." title="Projects" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const accent =
            project.accent === "blue"
              ? "var(--blue-bright)"
              : "var(--maroon-bright)";
          return (
            <Reveal as="article" key={project.title} delay={i * 90}>
              <div className="glow-card flex h-full flex-col overflow-hidden rounded-xl">
                {/* image area — generous 16:10 space for a screenshot */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border-subtle bg-bg-soft">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="grid h-full place-items-center text-center">
                      <div>
                        <div className="text-3xl" style={{ color: accent }}>
                          ◆
                        </div>
                        <p className="mt-2 font-mono text-xs text-muted">
                          screenshot here
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border-subtle bg-bg-soft px-2.5 py-0.5 font-mono text-[11px] text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {(project.github || project.demo) && (
                    <div className="mt-4 flex gap-4 text-sm font-medium">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted transition-colors hover:text-foreground"
                        >
                          Code ↗
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:underline"
                          style={{ color: accent }}
                        >
                          Live demo ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
