import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArchitectureVisual } from "./architecture-visual";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-veil pointer-events-none" />
      <div className="container-page relative pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface-2 px-3 py-1 text-xs font-mono text-muted mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Available for new projects
            </div>

            <h1 className="font-display text-[2.5rem] leading-[1.08] sm:text-5xl md:text-[3.4rem] font-semibold tracking-tight text-foreground max-w-xl">
              Software that solves real problems.
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted max-w-lg leading-relaxed">
              NAED SOFTWARES builds modern digital products, business systems
              and practical software solutions designed for real-world use.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="/projects" size="md">
                Explore Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="secondary" size="md">
                Contact NAED SOFTWARES
              </Button>
            </div>
          </div>

          <div className="flex md:justify-end">
            <ArchitectureVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
