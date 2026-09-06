import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-page py-28 md:py-40 text-center flex flex-col items-center">
      <div className="h-12 w-12 rounded-full border border-border-strong bg-surface-2 flex items-center justify-center mb-6">
        <Compass className="h-5 w-5 text-muted" />
      </div>
      <p className="text-xs font-mono text-muted-2 mb-3">404</p>
      <h1 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
        This page doesn&apos;t exist.
      </h1>
      <p className="text-sm text-muted max-w-sm mb-8">
        The page you&apos;re looking for may have moved or the link is out of
        date. Try one of the projects instead.
      </p>
      <div className="flex items-center gap-3">
        <Button href="/">Back to home</Button>
        <Button href="/projects" variant="secondary">
          View projects
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <Link href="/" className="sr-only">
        Home
      </Link>
    </div>
  );
}
