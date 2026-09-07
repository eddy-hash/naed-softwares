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
      { href: "/?tour=true", label: "Take a Tour" }, // opens wizard
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-12">
          {/* Brand & Social – centered on mobile */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-display text-[15px] font-semibold text-foreground hover:text-primary transition-colors duration-200"
            >
              <LogoMark className="h-6 w-6" />
              NAED SOFTWARES
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Building practical software solutions.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-5">
              <SocialIcon href={siteConfig.links.github} label="GitHub">
                <FaGithub className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
              </SocialIcon>
              <SocialIcon href={siteConfig.links.linkedin} label="LinkedIn">
                <FaLinkedin className="h-5 w-5 text-[#0A66C2] hover:text-[#0A66C2]/80 transition-colors" />
              </SocialIcon>
              <SocialIcon href={siteConfig.links.facebook} label="Facebook">
                <FaFacebook className="h-5 w-5 text-[#1877F2] hover:text-[#1877F2]/80 transition-colors" />
              </SocialIcon>
              {emails.map((email) => (
                <SocialIcon key={email} href={`mailto:${email}`} label="Email">
                  <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                </SocialIcon>
              ))}
            </div>
          </div>

          {/* Link columns – stacked on mobile, side‑by‑side on tablet+ */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 w-full md:w-auto">
            {columns.map((col) => (
              <div key={col.heading} className="flex-1 min-w-[120px]">
                <h3 className="text-xs font-medium text-muted-foreground/70 mb-3 uppercase tracking-wider">
                  {col.heading}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group relative text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                        {/* Underline animation on hover */}
                        <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border text-center md:text-left text-xs text-muted-foreground/60 font-mono">
          © {year} NAED SOFTWARES
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
      className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-card transition-all duration-200 hover:scale-110 hover:border-border hover:bg-secondary/20"
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}