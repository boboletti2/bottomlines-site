import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const links = [
  { label: "Services", hash: "services" },
  { label: "Work", hash: "work" },
  { label: "FAQ", hash: "faq" },
  { label: "Contact", hash: "contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 hairline-b bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 items-center gap-6 px-6 py-5 md:px-10">
        <Link to="/" className="col-span-4 md:col-span-3">
          <Logo className="text-2xl" />
        </Link>
        <nav className="col-span-4 hidden md:col-span-6 md:flex md:items-center md:justify-center md:gap-10">
          {links.map((l) => (
            <Link
              key={l.hash}
              to="/"
              hash={l.hash}
              className="font-mono text-xs uppercase tracking-widest-custom text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="col-span-8 flex items-center justify-end md:col-span-3">
          <Link
            to="/"
            hash="contact"
            className="group inline-flex items-center gap-3 bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            data-cursor="hover"
          >
            Book a call
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
