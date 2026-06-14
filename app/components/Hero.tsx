"use client";

import { useEffect, useState } from "react";
import { profile, contact } from "../data";
import Image from "next/image";

const ROLES = [
  profile.role,
  "Problem Solver",
  "Lifelong Learner",
  "Builder",
];

/** Typewriter that cycles through ROLES. */
function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const done = text === current;
    const empty = text === "";

    let delay = deleting ? 45 : 90;
    if (done && !deleting) delay = 1600; // pause at full word
    if (empty && deleting) delay = 350;

    const timer = setTimeout(() => {
      if (!deleting && done) {
        setDeleting(true);
      } else if (deleting && empty) {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-12 px-6 py-32 md:flex-row md:justify-between"
    >
      {/* Left: intro text */}
      <div className="max-w-xl text-center md:text-left">
        <p className="reveal is-visible mb-4 font-mono text-sm text-blue-bright">
          Hi, my name is
        </p>
        <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
          <span className="text-gradient">{profile.name}</span>
        </h1>
        <h2 className="mt-3 flex min-h-[2.5rem] items-center justify-center text-2xl font-semibold text-muted sm:text-3xl md:justify-start">
          {typed}
          <span className="blink-caret ml-1 text-maroon-bright">|</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted md:mx-0">
          {profile.tagline}
        </p>
        <p className="mt-3 font-mono text-sm text-muted">📍 {profile.location}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <a
            href="#experience"
            className="rounded-full bg-gradient-to-r from-maroon to-maroon-bright px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-maroon/30 transition-transform hover:scale-105"
          >
            View my work
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="rounded-full border border-blue/40 px-6 py-3 text-sm font-semibold text-blue-bright transition-colors hover:bg-blue/10"
          >
            Say hello
          </a>
        </div>
      </div>

      {/* Right: photo placeholder */}
      <div className="relative shrink-0">
        <div
          className="grid h-60 w-60 place-items-center rounded-full border border-border-subtle bg-bg-soft text-center sm:h-72 sm:w-72"
          style={{ animation: "pulse-ring 3.5s ease-out infinite" }}
        >
          <Image src="/IMG_9467.jpeg" alt="..." fill className="rounded-full object-cover" />
          <div className="px-6">
            <div className="text-4xl">📸</div>
            <p className="mt-2 text-sm text-muted">
              Your photo here
              <br />
              <span className="font-mono text-xs">/public/me.jpg</span>
            </p>
          </div>
        </div>
        {/* rotating gradient ring */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-60 blur-xl"
          style={{
            background:
              "conic-gradient(from 0deg, var(--maroon-bright), var(--blue-bright), var(--maroon-bright))",
          }}
        />
      </div>

      {/* scroll hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-foreground"
        aria-label="Scroll to about"
      >
        <span className="mx-auto block h-9 w-5 rounded-full border border-border-subtle p-1">
          <span className="mx-auto block h-2 w-1 animate-bounce rounded-full bg-foreground" />
        </span>
      </a>
    </section>
  );
}
