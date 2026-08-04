const services = [
  {
    no: "01",
    title: "Bookkeeping & Payroll",
    body: "Setting up solid bookkeeping practices and streamlined payroll systems. We help build a financial foundation that stands up to reality.",
    items: ["Accounting systems", "Payroll management", "Expense tracking", "Financial health"],
  },
  {
    no: "02",
    title: "Economics & Budgeting",
    body: "Building realistic budgets, forecasting models, and strategic pricing to give you complete clarity on your runway and improve your bottom line.",
    items: ["Budget design", "Cashflow forecasting", "Unit economics", "Pricing strategy"],
  },
  {
    no: "03",
    title: "Web & Code",
    body: "Marketing sites, e-commerce and bespoke web tools. Designed, built and shipped — not handed over as a deck.",
    items: ["Site design", "Front-end build", "Shopify / Headless", "Publishing"],
  },
  {
    no: "04",
    title: "Brand Online",
    body: "Identity, content systems and the small details that make a young business read as serious from day one.",
    items: ["Identity systems", "Content templates", "SEO foundations", "Analytics"],
  },
];

export function Services() {
  return (
    <section id="services" className="hairline-b">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tighter text-foreground md:text-6xl">
              Four disciplines.
              <br />
              <span className="text-muted-foreground">
                One operating system for your business.
              </span>
            </h2>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-0 hairline-t">
          {services.map((s, i) => (
            <article
              key={s.no}
              className={`col-span-12 grid grid-cols-12 gap-6 px-0 py-10 hairline-b md:py-14 ${
                i !== 0 ? "" : ""
              } group transition-colors hover:bg-muted/40`}
              data-cursor="hover"
            >
              <div className="col-span-2 md:col-span-1">
                <span className="font-mono text-xs text-muted-foreground">
                  {s.no}
                </span>
              </div>
              <div className="col-span-10 md:col-span-4">
                <h3 className="font-display text-3xl font-semibold tracking-tighter text-foreground md:text-5xl">
                  {s.title}
                  <span className="text-primary">_</span>
                </h3>
              </div>
              <div className="col-span-12 md:col-span-4">
                <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                  {s.body}
                </p>
              </div>
              <div className="col-span-12 md:col-span-3">
                <ul className="space-y-2 font-mono text-xs uppercase tracking-widest-custom text-muted-foreground">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="inline-block h-px w-4 bg-hairline" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
