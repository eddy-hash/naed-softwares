import { technologies } from "@/lib/config";

export function TechStrip() {
  return (
    <section className="border-t border-border">
      <div className="container-page py-10">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <p className="text-xs font-mono text-muted-2 whitespace-nowrap">
            Technologies across projects
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
