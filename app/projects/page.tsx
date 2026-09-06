import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Section, SectionHeading } from "@/components/ui/section";
import { ProjectGrid } from "@/components/projects/project-grid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Practical software products designed, engineered and continuously improved by NAED SOFTWARES.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <Section border={false} className="pt-16 md:pt-20">
      <SectionHeading
        title="Selected Projects"
        description="Practical software products designed, engineered and continuously improved."
      />
      <ProjectGrid projects={projects} />
    </Section>
  );
}
