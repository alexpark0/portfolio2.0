"use client";

import { useEffect, useState } from "react";
import { profile } from "../data";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border-subtle bg-background/70 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight"
        >
          <span className="text-maroon-bright">{"<"}</span>
          {profile.name.split(" ")[0]}
          <span className="text-blue-bright">{" />"}</span>
        </a>

        <ul className="hidden gap-1 sm:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active === l.id
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {active === l.id && (
                  <span className="mr-1.5 inline-block h-1.5 w-1.5 -translate-y-0.5 rounded-full bg-gradient-to-r from-maroon-bright to-blue-bright align-middle" />
                )}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full border border-border-subtle px-4 py-2 text-sm font-medium transition-colors hover:border-maroon-bright hover:text-maroon-bright"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
