"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed, full-screen ambient background:
 *  - three slowly drifting "aurora" blobs (maroon + blue)
 *  - a soft spotlight that follows the cursor
 *  - a subtle dotted grid overlay
 */
export default function Background() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(108,197,255,0.07), transparent 70%)`;
      });
    };

    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* drifting aurora blobs */}
      <div
        className="absolute -top-40 -left-32 h-[42rem] w-[42rem] rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--maroon-bright), transparent 60%)",
          animation: "float-slow 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full opacity-25 blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--blue), transparent 60%)",
          animation: "float-slow 28s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute bottom-[-10rem] left-1/3 h-[34rem] w-[34rem] rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--maroon), transparent 60%)",
          animation: "float-slow 25s ease-in-out infinite",
        }}
      />

      {/* dotted grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* cursor spotlight */}
      <div ref={spotlightRef} className="absolute inset-0" />
    </div>
  );
}
