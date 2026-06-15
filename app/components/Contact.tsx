import { contact, profile } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const socials = [
  { label: "Email", href: `mailto:${contact.email}`, icon: "✉️" },
  { label: "LinkedIn", href: contact.linkedin, icon: "in" },
  { label: "GitHub", href: contact.github, icon: "gh" },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-28">
      <SectionHeading index="04." title="Get In Touch" />

      <Reveal className="text-center">
        <p className="mx-auto max-w-md text-lg leading-relaxed text-muted">
          Feel free to reach out!
        </p>

        <a
          href={`mailto:${contact.email}`}
          className="mt-8 inline-block rounded-full bg-gradient-to-r from-maroon to-blue px-8 py-4 text-base font-semibold text-white shadow-lg shadow-maroon/30 transition-transform hover:scale-105"
        >
          {contact.email}
        </a>

        <div className="mt-10 flex items-center justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid h-12 w-12 place-items-center rounded-full border border-border-subtle bg-bg-soft text-sm font-semibold transition-all hover:-translate-y-1 hover:border-blue-bright hover:text-blue-bright"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </Reveal>

      <footer className="mt-24 text-center font-mono text-xs text-muted">
        <p>
          Designed &amp; built by {profile.name} · {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
}
