import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "@/components/ui/social-icons";
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

  return (
    <footer className="border-t border-border">
      <div className="container-page py-14 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2.5 font-display text-[15px] font-semibold text-foreground">
              <LogoMark className="h-6 w-6" />
              NAED SOFTWARES
            </Link>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Building practical software solutions.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <SocialIcon href={siteConfig.links.github} label="GitHub">
                <GithubIcon className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={siteConfig.links.linkedin} label="LinkedIn">
                <LinkedinIcon className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={siteConfig.links.facebook} label="Facebook">
                <FacebookIcon className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={siteConfig.links.email} label="Email">
                <Mail className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-xs font-medium text-muted-2 mb-3">{col.heading}</h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted hover:text-foreground transition-colors"
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border text-xs text-muted-2 font-mono">
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
      className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-border text-muted hover:text-foreground hover:border-border-strong transition-colors"
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}
