import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { LogoMark } from "@/components/navbar/logo-mark";
import { siteConfig } from "@/lib/config";

const columns = [
  {
    heading: "Site",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/feedback", label: "Feedback" },
      { href: "/?tour=true", label: "Explore" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { href: siteConfig.links.github, label: "GitHub" },
      { href: siteConfig.links.linkedin, label: "LinkedIn" },
      { href: siteConfig.links.facebook, label: "Facebook" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  const emails = Array.isArray(siteConfig.links.email)
    ? siteConfig.links.email
    : [siteConfig.links.email];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex flex-col items-center text-center max-w-xl mx-auto">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 font-display text-sm font-semibold text-foreground hover:text-primary transition-colors duration-200"
          >
            <LogoMark className="h-5 w-5" />
            NAED SOFTWARES
          </Link>

          <p className="mt-1.5 text-xs text-muted-foreground leading-snug max-w-xs">
            Building practical software solutions.
          </p>

          <div className="flex items-center justify-center gap-2 mt-4">
            <SocialIcon href={siteConfig.links.github} label="GitHub">
              <FaGithub className="h-4 w-4 text-foreground hover:text-primary transition-colors" />
            </SocialIcon>
            <SocialIcon href={siteConfig.links.linkedin} label="LinkedIn">
              <FaLinkedin className="h-4 w-4 text-[#0A66C2] hover:text-[#0A66C2]/80 transition-colors" />
            </SocialIcon>
            <SocialIcon href={siteConfig.links.facebook} label="Facebook">
              <FaFacebook className="h-4 w-4 text-[#1877F2] hover:text-[#1877F2]/80 transition-colors" />
            </SocialIcon>
            {emails.map((email) => (
              <SocialIcon key={email} href={`mailto:${email}`} label="Email">
                <Mail className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
              </SocialIcon>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 md:gap-8 w-full mt-6">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[10px] font-bold text-primary mb-3 uppercase tracking-wider">
                  {col.heading}
                </h3>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group relative inline-block text-xs text-muted-foreground transition-colors duration-200 hover:text-primary"
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border text-center text-[10px] text-muted-foreground/60 font-mono">
          © {year}{" "}
          <span className="text-foreground/80">naedsoftware.services</span>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-md border border-border/50 bg-card transition-all duration-200 hover:scale-110 hover:border-border hover:bg-secondary/20"
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}