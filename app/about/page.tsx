import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "How NAED SOFTWARES approaches building practical software.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Start from the operation, not the interface",
    body: "Every system here started as a real workflow — a sale, a stock count, a class register — before it became a screen. The interface follows the operation, not the other way round.",
  },
  {
    title: "Data you can trust",
    body: "Numbers on a dashboard are only useful if they're correct. Data models are built to make incorrect states hard to represent, not just handled after the fact.",
  },
  {
    title: "Ship something real, then improve it",
    body: "A working system in front of real users teaches more than another week of planning. Projects here are built to a usable state first, then refined against actual feedback.",
  },
];

const skillGroups = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Accessible UI patterns"],
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "REST API design", "Authentication & authorization"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "Schema design", "Query performance", "Data modeling"],
  },
  {
    category: "Tooling & Infrastructure",
    items: ["Docker", "Git", "Linux", "CI-friendly project structure"],
  },
];

export default function AboutPage() {
  return (
    <>
      <Section border={false} className="pt-16 pb-14 md:pt-20 md:pb-20">
        <div className="max-w-2xl">
          <h1 className="font-display text-3xl md:text-[2.6rem] font-semibold tracking-tight text-foreground">
            Software built the way it should be run.
          </h1>
          <p className="mt-5 text-base text-muted leading-relaxed">
            NAED SOFTWARES is a software engineering practice focused on
            practical business systems — the kind that a shop, school or
            growing business actually relies on every day. The work here spans
            product design, backend architecture and the day-to-day discipline
            of shipping software that holds up under real use.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading title="How the work gets done" />
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle) => (
            <div key={principle.title}>
              <h3 className="font-display text-base font-semibold text-foreground mb-2">
                {principle.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{principle.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Skills & tools"
          description="The stack used to design, build and operate the projects in this portfolio."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-[var(--radius-md)] border border-border bg-surface p-5"
            >
              <p className="text-xs font-mono text-muted-2 mb-3">{group.category}</p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-foreground bg-surface-2 border border-border rounded-full px-3 py-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-24 md:pb-32">
        <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground mb-1.5">
              Working on something that needs real engineering?
            </h2>
            <p className="text-sm text-muted max-w-md">
              Get in touch to talk through what you&apos;re building.
            </p>
          </div>
          <Button href="/contact" size="md">
            Contact NAED SOFTWARES
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Section>
    </>
  );
}
