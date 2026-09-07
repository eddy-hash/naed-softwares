import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { LogoMark } from "@/components/navbar/logo-mark";
import { siteConfig } from "@/lib/config";

const columns = [
  {
    heading: "Site",
    links: [
      { href: "/projects", label: "Projects" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/feedback", label: "Feedback" },
      { href: "/?tour=true", label: "Take a Tour" },
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-center">
        {/* Brand + Tagline + Social Icons – always centered */}
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 font-display text-sm md:text-[15px] font-semibold text-foreground hover:text-primary transition-colors duration-200"
          >
            <LogoMark className="h-5 w-5 md:h-6 md:w-6" />
            NAED SOFTWARES
          </Link>
          <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed max-w-xs">
            Building practical software solutions.
          </p>
          <div className="flex items-center justify-center gap-2 md:gap-3 mt-4">
            <SocialIcon href={siteConfig.links.github} label="GitHub">
              <FaGithub className="h-4 w-4 md:h-5 md:w-5 text-foreground hover:text-primary transition-colors" />
            </SocialIcon>
            <SocialIcon href={siteConfig.links.linkedin} label="LinkedIn">
              <FaLinkedin className="h-4 w-4 md:h-5 md:w-5 text-[#0A66C2] hover:text-[#0A66C2]/80 transition-colors" />
            </SocialIcon>
            <SocialIcon href={siteConfig.links.facebook} label="Facebook">
              <FaFacebook className="h-4 w-4 md:h-5 md:w-5 text-[#1877F2] hover:text-[#1877F2]/80 transition-colors" />
            </SocialIcon>
            {emails.map((email) => (
              <SocialIcon key={email} href={`mailto:${email}`} label="Email">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </SocialIcon>
            ))}
          </div>
        </div>

        {/* Link columns – card style, centered on all screens */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-2xl mx-auto">
          {columns.map((col) => (
            <div key={col.heading} className="flex-1">
              <h3 className="text-[10px] md:text-xs font-bold text-primary mb-3 uppercase tracking-wider">
                {col.heading}
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group relative block w-full rounded-md border border-border/30 bg-card/50 px-3 py-2.5 text-xs md:text-sm text-muted-foreground transition-all duration-200 hover:scale-[1.02] hover:border-border hover:bg-secondary/20 hover:text-primary active:scale-[0.98]"
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <span className="relative inline-flex items-center gap-1">
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright – centered, with domain highlighted */}
        <div className="mt-10 md:mt-14 pt-6 border-t border-border text-[10px] md:text-xs text-muted-foreground/60 font-mono">
          © {year} <span className="text-foreground/80">naedsoftware.services</span>
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
      className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-md border border-border/50 bg-card transition-all duration-200 hover:scale-110 hover:border-border hover:bg-secondary/20"
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}