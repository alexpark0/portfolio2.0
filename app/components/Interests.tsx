import { interests } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Interests() {
  return (
    <section id="interests" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="03." title="Beyond the Code" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {interests.map((item, i) => (
          <Reveal as="article" key={item.title} delay={i * 80}>
            <div className="glow-card h-full rounded-xl p-6">
              <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.blurb}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
