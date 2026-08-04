import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { work } from "@/data/work";

export function Work() {
  const [hovered, setHovered] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section id="work" className="hairline-b">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tighter text-foreground md:text-6xl">
              Selected work,
              <br />
              <span className="text-muted-foreground">deliberately short.</span>
            </h2>
            <p className="mt-8 max-w-[50ch] text-lg leading-relaxed text-foreground/80 md:text-xl">
              While many of our deepest operational and scheduling tools are deployed privately in busy restaurant back-offices, here is a selection of our public-facing projects.
            </p>
          </div>
        </div>

        <div
          ref={sectionRef}
          onMouseMove={handleMove}
          onMouseLeave={() => setHovered(null)}
          className="relative mt-20 hairline-t"
        >
          {/* Floating image preview — desktop only */}
          <div
            className="pointer-events-none absolute z-20 hidden overflow-hidden bg-muted shadow-2xl transition-opacity duration-200 md:block"
            style={{
              left: pos.x,
              top: pos.y,
              width: 380,
              height: 266,
              transform: "translate(-50%, -50%)",
              opacity: hovered ? 1 : 0,
            }}
          >
            {work.map((w) => (
              <img
                key={w.slug}
                src={w.image}
                alt=""
                width={1280}
                height={896}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-200"
                style={{ opacity: hovered === w.slug ? 1 : 0 }}
              />
            ))}
          </div>

          {/* Header row */}
          <div className="hidden grid-cols-12 gap-6 py-4 hairline-b font-mono text-[11px] uppercase tracking-widest-custom text-muted-foreground md:grid">
            <span className="col-span-1">Idx</span>
            <span className="col-span-3">Client</span>
            <span className="col-span-2">Sector</span>
            <span className="col-span-3">Scope</span>
            <span className="col-span-2">Outcome</span>
            <span className="col-span-1 text-right">Year</span>
          </div>

          {work.map((w) => (
            <Link
              key={w.slug}
              to="/work/$slug"
              params={{ slug: w.slug }}
              onMouseEnter={() => setHovered(w.slug)}
              className="group grid grid-cols-12 gap-6 py-8 hairline-b transition-colors hover:bg-muted/40 md:py-10"
              data-cursor="hover"
            >
              <span className="col-span-2 font-mono text-xs text-muted-foreground md:col-span-1">
                {w.no}
              </span>
              <span className="col-span-10 font-display text-2xl font-semibold tracking-tighter text-foreground md:col-span-3 md:text-3xl">
                {w.name}
                <span className="ml-2 inline-block translate-x-0 text-primary opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-100">
                  →
                </span>
              </span>
              <span className="col-span-6 text-sm text-foreground/80 md:col-span-2">
                {w.cat}
              </span>
              <span className="col-span-6 text-sm text-foreground/80 md:col-span-3">
                {w.scope}
              </span>
              <span className="col-span-10 text-sm italic text-muted-foreground md:col-span-2">
                "{w.quote}"
              </span>
              <span className="col-span-2 text-right font-mono text-xs text-muted-foreground md:col-span-1">
                {w.year}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
