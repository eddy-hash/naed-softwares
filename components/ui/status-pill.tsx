import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/data/projects";

const statusStyles: Record<ProjectStatus, string> = {
  live: "text-success border-success/30 bg-success/10",
  development: "text-accent border-accent/30 bg-accent/10",
  concept: "text-muted border-border-strong bg-surface-2",
};

const statusDot: Record<ProjectStatus, string> = {
  live: "bg-success",
  development: "bg-accent",
  concept: "bg-muted-2",
};

export function StatusPill({
  status,
  label,
  className,
}: {
  status: ProjectStatus;
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium font-mono tracking-tight",
        statusStyles[status],
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", statusDot[status])} />
      {label}
    </span>
  );
}
