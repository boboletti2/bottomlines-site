const items = [
  "Bookkeeping",
  "Staff scheduling",
  "Web design",
  "Forecasting",
  "Shopify",
  "Brand systems",
  "Payroll",
  "Pricing",
  "SEO",
  "Hospitality Ops",
  "VAT & filings",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <section className="hairline-b overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-10">
        {row.map((t, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-10 pr-10 font-display text-5xl font-medium tracking-tightest text-foreground md:text-7xl"
          >
            <span>{t}</span>
            <span className="text-primary">·</span>
          </div>
        ))}
      </div>
    </section>
  );
}
