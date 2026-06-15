import { profile, skills } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="01." title="About Me" />

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-start">
        <Reveal className="space-y-4 text-lg leading-relaxed text-muted">
          {profile.about.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          <div className="pt-4">
            <p className="mb-3 text-sm font-semibold text-foreground">
              A few things I work with:
            </p>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border-subtle bg-bg-soft px-3 py-1 font-mono text-xs text-foreground transition-colors hover:border-blue-bright hover:text-blue-bright"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* secondary photo */}
        <Reveal delay={150} className="group relative mx-auto w-full max-w-xs">
          <div className="glow-card relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/IMG_6602.jpeg"
              alt={profile.name}
              fill
              sizes="20rem"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
