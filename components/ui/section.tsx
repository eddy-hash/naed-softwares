import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
  border = true,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  border?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28",
        border && "border-t border-border",
        className
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  title,
  description,
  align = "left",
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl mb-12 md:mb-16",
        align === "center" && "mx-auto text-center"
      )}
    >
      <h2 className="font-display text-2xl md:text-[2rem] font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
