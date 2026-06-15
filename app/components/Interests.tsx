import Image from "next/image";
import { interests } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Interests() {
  return (
    <section id="interests" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="04." title="Beyond the Code" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {interests.map((item, i) => (
          <Reveal as="article" key={item.title} delay={i * 80}>
            <div className="glow-card group flex h-full flex-col overflow-hidden rounded-xl">
              {/* picture area — square-ish, plenty of room for a photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border-subtle bg-bg-soft">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="grid h-full place-items-center">
                    <span className="text-5xl transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <span className="text-xl">{item.icon}</span>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.blurb}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
