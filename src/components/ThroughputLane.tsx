// Signature element: a horizontal "lane" showing work moving intake -> process
// -> output. Directional motion respects prefers-reduced-motion via globals.css.
export function ThroughputLane({
  intake = "Backlog in",
  output = "Clean output",
  className = "",
}: {
  intake?: string;
  output?: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-lg border border-navy/20 ${className}`}>
      <div className="flex items-stretch text-xs font-mono">
        <div className="flex items-center bg-mist px-4 py-3 text-ink/70">
          {intake}
        </div>
        <div
          className="lane-stripes relative flex flex-1 items-center justify-center bg-channel py-3 text-paper animate-flow"
          aria-hidden="true"
        >
          <span className="rounded-full bg-navy/30 px-3 py-1 tracking-widest">
            PROCESSING
          </span>
        </div>
        <div className="flex items-center bg-signal px-4 py-3 font-medium text-ink">
          {output}
        </div>
      </div>
    </div>
  );
}
