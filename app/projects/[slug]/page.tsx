import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, Clock, MessageSquare } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { StatusPill } from "@/components/ui/status-pill";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ProjectPreview } from "@/components/project-preview/project-preview";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Section border={false} className="pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-2xl">
          <p className="text-xs font-mono text-muted-2 mb-4">{project.category}</p>
          <h1 className="font-display text-3xl md:text-[2.6rem] font-semibold tracking-tight text-foreground">
            {project.title}
          </h1>
          <p className="mt-5 text-base text-muted leading-relaxed">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-6">
            <StatusPill status={project.status} label={project.statusLabel} />
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-muted-2 bg-surface-2 border border-border rounded-full px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section border={false} className="pt-0 pb-12 md:pb-16">
        <ProjectPreview slug={project.slug} />
      </Section>

      <Section className="py-14 md:py-20">
        <h2 className="font-display text-xl font-semibold text-foreground mb-6">Features</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="rounded-[var(--radius-md)] border border-border bg-surface p-4 text-sm text-foreground"
            >
              {feature}
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-14 md:py-20">
        <h2 className="font-display text-xl font-semibold text-foreground mb-6">Technology</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {project.technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-[var(--radius-md)] border border-border bg-surface p-4 flex items-center gap-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <span className="text-sm text-foreground font-mono">{tech}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-14 md:py-20">
        <h2 className="font-display text-xl font-semibold text-foreground mb-5">
          Engineering overview
        </h2>
        <p className="max-w-2xl text-[15px] text-muted leading-relaxed">
          {project.engineering}
        </p>
      </Section>

      <Section className="py-14 md:py-20">
        <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground mb-1.5">
              {project.status === "live" ? "This project is live" : "Project status"}
            </h2>
            <p className="text-sm text-muted max-w-md">
              {project.status === "live"
                ? "This project has a working live demo you can explore right now."
                : "This project doesn't have a public deployment yet — the live demo will appear here once it does."}
            </p>
          </div>

          {project.liveUrl ? (
            <Button href={project.liveUrl} size="md">
              Open Live Demo
              <ExternalLink className="h-4 w-4" />
            </Button>
          ) : (
            <span className="inline-flex items-center gap-2 h-11 px-5 rounded-[var(--radius-sm)] border border-border-strong text-sm text-muted-2 font-mono">
              <Clock className="h-4 w-4" />
              Live Demo Coming Soon
            </span>
          )}
        </div>

        <Link
          href={`/feedback?project=${encodeURIComponent(project.title)}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
        >
          <MessageSquare className="h-3.5 w-3.5" />
          Leave feedback on this project
        </Link>
      </Section>
    </>
  );
}
