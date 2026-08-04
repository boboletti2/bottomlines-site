export function Logo({ className = "" }) {
  return (
    <span
      className={`font-display font-bold tracking-tightest text-foreground inline-flex items-baseline ${className}`}
    >
      bottomlines
      <span className="ml-[0.05em] inline-block h-[0.12em] w-[0.5em] translate-y-[-0.08em] bg-foreground" />
    </span>
  );
}
