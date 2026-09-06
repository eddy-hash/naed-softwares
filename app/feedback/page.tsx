import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { FeedbackForm } from "@/components/feedback/feedback-form";

export const metadata: Metadata = {
  title: "Feedback",
  description: "Share feedback on a NAED SOFTWARES project or the portfolio.",
  alternates: { canonical: "/feedback" },
};

export default async function FeedbackPage({
  searchParams,
}: {
  searchParams: Promise<{ project?: string }>;
}) {
  const { project } = await searchParams;
  return (
    <Section border={false} className="pt-16 pb-24 md:pt-20 md:pb-32">
      <div className="max-w-xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
            Share your feedback
          </h1>
          <p className="mt-4 text-base text-muted leading-relaxed">
            Used one of these projects, or exploring the portfolio? A few
            honest words help shape what gets built next.
          </p>
        </div>

        <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 md:p-8">
          <FeedbackForm defaultProject={project} />
        </div>
      </div>
    </Section>
  );
}
