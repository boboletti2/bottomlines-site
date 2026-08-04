import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getWork, work } from "@/data/work";
import { Header } from "@/components/Header";
import { CursorDot } from "@/components/CursorDot";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const item = getWork(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    const item = loaderData?.item;
    const title = item
      ? `${item.name} — bottomline_ work`
      : "Work — bottomline_";
    const description =
      item?.summary ?? "Selected work from bottomline_ consultancy.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(item?.image ? [{ property: "og:image", content: item.image }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <main className="bg-background text-foreground">
      <Header />
      <div className="mx-auto max-w-[1440px] px-6 py-40 md:px-10">
        <h1 className="font-display text-5xl font-bold tracking-tightest">
          Not found.
        </h1>
        <Link
          to="/"
          className="mt-6 inline-block underline decoration-primary underline-offset-4"
        >
          Back home
        </Link>
      </div>
    </main>
  ),

  component: WorkDetail,
});

function WorkDetail() {
  const { item } = Route.useLoaderData();
  const idx = work.findIndex((w) => w.slug === item.slug);
  const next = work[(idx + 1) % work.length];

  return (
    <main className="bg-background text-foreground">
      <CursorDot />
      <Header />

      {/* Title block */}
      <section className="hairline-b">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-32">
          <div className="col-span-12 md:col-span-3">
            <Link
              to="/"
              hash="work"
              className="font-mono text-[11px] uppercase tracking-widest-custom text-muted-foreground transition-colors hover:text-foreground"
            >
              ← All work
            </Link>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-widest-custom text-muted-foreground">
              {item.no} · {item.year}
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h1 className="font-display text-[14vw] font-bold leading-[0.92] tracking-tightest md:text-[8vw] lg:text-[7rem]">
              {item.name}
              <span className="text-primary">.</span>
            </h1>
            <p className="mt-8 max-w-[60ch] text-xl leading-relaxed text-foreground/80 md:text-2xl">
              {item.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="hairline-b">
        <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-10 md:py-16">
          <img
            src={item.image}
            alt={`${item.name} project preview`}
            width={1280}
            height={896}
            className="block w-full"
          />
        </div>
      </section>

      {/* Meta + outcomes */}
      <section className="hairline-b">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 py-20 md:px-10 md:py-28">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-widest-custom text-muted-foreground">
              Sector
            </p>
            <p className="mt-2 text-foreground">{item.cat}</p>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-widest-custom text-muted-foreground">
              Scope
            </p>
            <ul className="mt-2 space-y-1">
              {item.services.map((s) => (
                <li key={s} className="text-foreground">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-12 gap-0 hairline-t">
              {item.outcomes.map((o) => (
                <div
                  key={o.k}
                  className="col-span-12 hairline-b py-8 md:col-span-4 md:hairline-b md:px-6 md:first:pl-0"
                >
                  <div className="font-display text-5xl font-bold tracking-tightest md:text-6xl">
                    {o.k}
                  </div>
                  <p className="mt-4 max-w-[24ch] text-sm leading-relaxed text-muted-foreground">
                    {o.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="hairline-b">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 py-20 md:px-10 md:py-28">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-widest-custom text-muted-foreground">
              The work
            </p>
          </div>
          <div className="col-span-12 space-y-6 md:col-span-7">
            {item.story.map((p, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed text-foreground/85 md:text-xl"
              >
                {p}
              </p>
            ))}
            <blockquote className="mt-10 border-l-2 border-primary pl-6 font-display text-2xl italic leading-snug text-foreground md:text-3xl">
              "{item.quote}"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Next + CTA */}
      <section>
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 py-20 md:px-10 md:py-28">
          <div className="col-span-12 md:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-widest-custom text-muted-foreground">
              Next project
            </p>
            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              className="group mt-4 inline-flex items-baseline gap-4"
              data-cursor="hover"
            >
              <span className="font-display text-4xl font-semibold tracking-tighter md:text-6xl">
                {next.name}
              </span>
              <span className="text-primary transition-transform group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>
          <div className="col-span-12 flex items-end md:col-span-6 md:justify-end">
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-3 bg-foreground px-6 py-4 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              data-cursor="hover"
            >
              Start a project
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
