import { Logo } from "./Logo";

export function Contact() {
  return (
    <section id="contact" className="hairline-b">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 py-24 md:px-10 md:py-40">
        <div className="col-span-12 md:col-span-9 md:col-start-4">
          <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tightest text-foreground md:text-[7rem]">
            Say hi<span className="text-primary">.</span>
            <br />
            No pitch needed.
          </h2>

          <div className="mt-16 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6">
              <p className="text-lg leading-relaxed text-foreground/80">
                Tell us what you're building, where operations are stuck, and what
                "done" would look like — even if it's a voice note's worth of
                half-formed ideas. We reply in a working day, in plain words.
              </p>
              <a
                href="mailto:bottomlinesanp@gmail.com"
                className="mt-10 inline-flex items-center gap-3 bg-primary px-7 py-5 text-base font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                data-cursor="hover"
              >
                bottomlinesanp@gmail.com
                <span>→</span>
              </a>
            </div>

            <dl className="col-span-12 grid grid-cols-2 gap-y-8 md:col-span-6">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest-custom text-muted-foreground">
                  Studio
                </dt>
                <dd className="mt-2 text-foreground">Copenhagen, DK</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest-custom text-muted-foreground">
                  Hours
                </dt>
                <dd className="mt-2 text-foreground">Mon — Fri · 09—17 CET</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest-custom text-muted-foreground">
                  New work
                </dt>
                <dd className="mt-2 text-foreground">Booking Q3 / 2026</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <footer className="hairline-t">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 items-center gap-6 px-6 py-8 md:px-10">
          <div className="col-span-6 md:col-span-3">
            <Logo className="text-xl" />
          </div>
          <div className="col-span-6 font-mono text-[11px] uppercase tracking-widest-custom text-muted-foreground md:col-span-9 md:text-right">
            © 2026 bottomline_
          </div>
        </div>
      </footer>
    </section>
  );
}
