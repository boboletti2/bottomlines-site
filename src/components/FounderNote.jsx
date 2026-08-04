export function FounderNote() {
  return (
    <section className="hairline-b bg-muted/40">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-widest-custom text-muted-foreground">
              A note
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="font-display text-2xl font-medium leading-snug tracking-tighter text-foreground md:text-4xl">
              "Most people we work with have great ideas, but simply don't know
              where to start. That's the point. We're here for the part right{" "}
              <span className="text-primary">before</span> you've figured it out
              — not after."
            </p>
            <p className="mt-8 font-mono text-xs uppercase tracking-widest-custom text-muted-foreground">
              — The bottomline_ team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
