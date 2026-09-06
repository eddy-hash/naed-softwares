import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Section, SectionHeading } from "@/components/ui/section";
import { ProjectGrid } from "./project-grid";

export function SelectedProjects() {
  return (
    <Section id="projects">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
        <SectionHeading
          title="Selected Projects"
          description="Practical software products designed, engineered and continuously improved."
        />
        <Link
          href="/projects"
          className="hidden md:inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors mb-1"
        >
          View all projects
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <ProjectGrid projects={projects} />

      <Link
        href="/projects"
        className="md:hidden mt-8 inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
      >
        View all projects
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </Section>
  );
}
