import { cn } from "@/lib/utils";

export function DeviceFrame({
  children,
  className,
  compact = false,
}: {
  children: React.ReactNode;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border border-border bg-surface overflow-hidden shadow-[var(--shadow-lg)]",
        className
      )}
    >
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-surface-2">
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
      </div>
      <div className={cn(compact ? "p-3" : "p-4 md:p-6")}>{children}</div>
    </div>
  );
}

export function StatCard({
  label,
  value,
  accent = "text-foreground",
}: {
  label: string;
  value: string;
  accent?: string;
}) {
  return (
    <div className="rounded-[var(--radius-md)] border border-border bg-surface-2 p-3.5">
      <p className="text-[11px] font-mono text-muted-2">{label}</p>
      <p className={cn("mt-1.5 text-lg font-display font-semibold", accent)}>{value}</p>
    </div>
  );
}

export function Bars({
  values,
  color = "var(--accent)",
}: {
  values: number[];
  color?: string;
}) {
  const max = Math.max(...values);
  return (
    <div className="flex items-end gap-1.5 h-16">
      {values.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-[3px]"
          style={{
            height: `${(v / max) * 100}%`,
            background: color,
            opacity: 0.45 + (v / max) * 0.5,
          }}
        />
      ))}
    </div>
  );
}

export function Row({
  cells,
  muted = false,
}: {
  cells: string[];
  muted?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid gap-2 py-2.5 border-b border-border last:border-0 text-xs",
        muted ? "text-muted-2" : "text-muted"
      )}
      style={{ gridTemplateColumns: `repeat(${cells.length}, 1fr)` }}
    >
      {cells.map((c, i) => (
        <span key={i} className={i === 0 ? "text-foreground font-medium" : ""}>
          {c}
        </span>
      ))}
    </div>
  );
}
