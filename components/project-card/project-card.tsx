import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { StatusPill } from "@/components/ui/status-pill";
import { ProjectPreview } from "@/components/project-preview/project-preview";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-[var(--radius-lg)] border border-border bg-surface transition-all duration-200 hover:border-border-strong hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
    >
      <div className="relative overflow-hidden rounded-t-[var(--radius-lg)] border-b border-border bg-background p-3 md:p-4">
        <div className="transition-transform duration-300 ease-out group-hover:scale-[1.02] origin-center pointer-events-none [&_*]:pointer-events-none scale-[0.86] md:scale-[0.9]">
          <ProjectPreview slug={project.slug} />
        </div>
      </div>

      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <ArrowUpRight className="h-4 w-4 mt-1 shrink-0 text-muted-2 transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <p className="text-sm text-muted leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono text-muted-2 bg-surface-2 border border-border rounded-full px-2 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>

        <StatusPill status={project.status} label={project.statusLabel} />
      </div>
    </Link>
  );
}
