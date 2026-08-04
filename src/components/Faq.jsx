import { useState } from "react";

const faqs = [
  {
    q: "I literally don't know what a bookkeeper does. Is this for me?",
    a: "Yes — that's most of our clients on day one. We'll walk you through what's actually required (legally and practically), what you can ignore for now, and what we'll handle for you. No homework before the first call.",
  },
  {
    q: "How much does this cost?",
    a: "Since every business has completely different operational needs, we don't give a generic price upfront. Each project is tailored specifically to you. But we always figure it out after a quick 30-minute intro call, and that call is always free.",
  },
  {
    q: "Do I have to be a restaurant or online store?",
    a: "Not at all. While our deepest roots and specialized operational tools are built for the hospitality sector, we partner with all sorts of ambitious brands—from independent e-commerce stores to luxury properties and beyond.",
  },
  {
    q: "Can you do just the website, or just the books?",
    a: "Yep. There are no forced package deals here. If you just need bookkeeping, we'll do that. If you just need a new site, we'll build that. About half our clients start with one and add the other later.",
  },
  {
    q: "We're pre-revenue. Are we too early?",
    a: "Probably not. If you're about to register a company, sign a lease, or take your first payment — that's the right moment to set things up properly. It's much cheaper than untangling it in year two.",
  },
  {
    q: "How long until something is live?",
    a: "Books: usually running cleanly within 2–3 weeks. A new site: 6–12 weeks depending on scope. We'll give you a real timeline, not a hopeful one, after the first call.",
  },
  {
    q: "Do we have to be in Copenhagen?",
    a: "No. We work with clients across Denmark and a few abroad. Most of it happens over video and shared docs — we only really need to be in the room for the fun parts.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="hairline-b">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-widest-custom text-muted-foreground">
              FAQ
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tighter text-foreground md:text-5xl">
              Things people
              <br />
              <span className="text-muted-foreground">actually ask.</span>
            </h2>
          </div>

          <div className="col-span-12 md:col-span-9">
            <div className="hairline-t">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="hairline-b">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:bg-muted/40 md:py-8"
                      data-cursor="hover"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-xl font-medium tracking-tight text-foreground md:text-2xl">
                        {f.q}
                      </span>
                      <span
                        className={`mt-2 inline-block shrink-0 font-mono text-2xl text-primary transition-transform duration-300 ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[60ch] pb-8 pr-12 text-base leading-relaxed text-foreground/80 md:text-lg">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* SEO: FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}
