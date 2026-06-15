"use client";

import { useState } from "react";
import Image from "next/image";
import type { ExperienceItem } from "../data";

function initials(company: string) {
  return company
    .replace(/[^a-zA-Z ]/g, " ")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export default function ExperienceCard({ job }: { job: ExperienceItem }) {
  const [open, setOpen] = useState(false);
  const accent =
    job.accent === "blue" ? "var(--blue-bright)" : "var(--maroon-bright)";

  return (
    <article className="glow-card rounded-xl p-6">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-start gap-4 text-left"
      >
        {/* company logo / monogram */}
        <span
          className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-lg border border-border-subtle bg-bg-soft font-mono text-sm font-semibold"
          style={{ color: accent }}
        >
          {job.logo ? (
            <Image
              src={job.logo}
              alt={`${job.company} logo`}
              fill
              className="object-contain p-1.5"
            />
          ) : (
            initials(job.company)
          )}
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-baseline justify-between gap-x-2">
            <span className="text-xl font-semibold">
              {job.role}{" "}
              <span style={{ color: accent }}>@ {job.company}</span>
            </span>
            <span className="font-mono text-xs text-muted">{job.period}</span>
          </span>

          <span className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
            {job.location && (
              <span className="font-mono text-xs text-muted">
                {job.location}
              </span>
            )}
            <span className="text-muted">·</span>
            <span className="text-sm text-muted">{job.description}</span>
          </span>
        </span>

        {/* chevron */}
        <span
          className="mt-1 shrink-0 text-muted transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "none" }}
          aria-hidden
        >
          ▾
        </span>
      </button>

      {/* expandable highlights — grid-rows trick for a smooth height animation */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <ul className="mt-4 space-y-2 border-t border-border-subtle pt-4">
            {job.highlights.map((h, j) => (
              <li key={j} className="flex gap-3 text-sm text-muted">
                <span style={{ color: accent }}>▹</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {!open && (
        <p className="mt-3 font-mono text-xs" style={{ color: accent }}>
          Click to {job.highlights.length > 0 ? `view details` : "expand"}
        </p>
      )}
    </article>
  );
}
