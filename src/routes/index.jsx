import { createFileRoute } from "@tanstack/react-router";
import { CursorDot } from "@/components/CursorDot";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Marquee } from "@/components/Marquee";
import { Work } from "@/components/Work";
import { FounderNote } from "@/components/FounderNote";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "bottomline_ — Bookkeeping, economics & web for early-stage businesses",
      },
      {
        name: "description",
        content:
          "A small consultancy for first-time founders. Real bookkeeping and economics paired with a sharp online presence — for restaurants, stores and the brands they grow into.",
      },
      {
        property: "og:title",
        content: "bottomline_ — Consultancy for early-stage businesses",
      },
      {
        property: "og:description",
        content:
          "Bookkeeping, economics & online presence. Built for restaurants, stores and emerging brands.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <CursorDot />
      <Header />
      <Hero />
      <Services />
      <Marquee />
      <Work />
      <FounderNote />
      <Faq />
      <Contact />
    </main>
  );
}
