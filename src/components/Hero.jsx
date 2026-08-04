export function Hero() {
  return (
    <section id="top" className="relative hairline-b">
      {/* Rotating sticker badge */}
      <div className="pointer-events-none absolute right-6 top-24 z-10 hidden md:block lg:right-10 lg:top-28">
        <div className="sticker-spin relative h-32 w-32 lg:h-36 lg:w-36">
          <svg viewBox="0 0 200 200" className="h-full w-full text-foreground">
            <defs>
              <path
                id="sticker-curve"
                d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
              />
            </defs>
            <text
              className="font-mono fill-current"
              style={{ fontSize: "16px", letterSpacing: "0.22em" }}
            >
              <textPath href="#sticker-curve" startOffset="0">
                BOOKING Q3 · SAY HI · NO PITCH DECK · BOOKING Q3 · SAY HI ·{" "}
              </textPath>
            </text>
          </svg>
          <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 pb-24 pt-20 md:px-10 md:pb-40 md:pt-32">
        {/* Headline */}
        <div className="col-span-12">
          <h1 className="font-display text-[14vw] font-bold leading-[0.92] tracking-tightest text-foreground md:text-[8.5vw] lg:text-[7.2rem] xl:text-[8.5rem]">
            <span className="block rise">The bottom</span>
            <span className="block rise rise-delay-1">
              line<span className="text-primary">.</span> done
            </span>
            <span className="relative block rise rise-delay-2 text-muted-foreground">
              <span className="relative inline-block">
                right.
                {/* Hand-drawn underline */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 24"
                  preserveAspectRatio="none"
                  className="squiggle absolute -bottom-2 left-0 h-[0.18em] w-full text-primary md:-bottom-4"
                >
                  <path
                    d="M2 14 C 40 4, 80 22, 130 10 S 230 18, 298 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>
        </div>

        {/* Sub row */}
        <div className="col-span-12 mt-16 grid grid-cols-12 gap-6 md:mt-24">
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <p className="text-xl leading-relaxed text-foreground md:text-2xl rise rise-delay-3">
              We're a small consultancy for founders who need to actually run a business — pairing real{" "}
              <span className="underline decoration-primary decoration-2 underline-offset-4">
                operational tools
              </span>{" "}
              with a sharp{" "}
              <span className="underline decoration-primary decoration-2 underline-offset-4">
                online presence
              </span>
              . Our deepest expertise lies in hospitality, providing tailored scheduling, bookkeeping, and economic models for restaurants and cafes. But we partner with any ambitious brand—from online stores to luxury properties—that wants a back office as polished as their frontend.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 rise rise-delay-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-foreground px-6 py-4 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                data-cursor="hover"
              >
                Tell us about it
                <span>→</span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-3 px-2 py-4 text-sm font-medium text-foreground hairline-b border-foreground"
                data-cursor="hover"
              >
                See what we've made
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
