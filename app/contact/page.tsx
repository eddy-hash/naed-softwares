import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with NAED SOFTWARES to start a conversation about your project.",
  alternates: { canonical: "/contact" },
};

// Safely get a single email
const email = Array.isArray(siteConfig.links.email)
  ? siteConfig.links.email[0]
  : siteConfig.links.email;

const channels = [
  {
    label: "Email",
    value: email,
    href: `mailto:${email}`,
    icon: Mail,
    iconColor: "text-muted-foreground hover:text-foreground",
  },
  {
    label: "GitHub",
    value: "eddy-hash",
    href: siteConfig.links.github,
    icon: FaGithub,
    iconColor: "text-foreground hover:text-foreground/80",
  },
  {
    label: "LinkedIn",
    value: "NAED SOFTWARES",
    href: siteConfig.links.linkedin,
    icon: FaLinkedin,
    iconColor: "text-[#0A66C2] hover:text-[#0A66C2]/80",
  },
  {
    label: "Facebook",
    value: "Naed Technologies", 
    href: siteConfig.links.facebook,
    icon: FaFacebook,
    iconColor: "text-[#1877F2] hover:text-[#1877F2]/80",
  },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-20 md:pb-32">
      <div className="max-w-2xl mb-8 md:mb-12">
        <h1 className="font-display text-2xl md:text-[2.6rem] font-semibold tracking-tight text-foreground">
          Let&apos;s build something useful.
        </h1>
        <p className="mt-4 md:mt-5 text-base text-muted-foreground leading-relaxed">
          Whether it&apos;s a new system or one that needs rebuilding properly,
          reach out through whichever channel works best for you.
        </p>
      </div>

      {/* Grid: 2 cols on mobile, 4 on medium+ */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {channels.map((channel) => {
          const Icon = channel.icon;
          const isExternal = channel.href.startsWith("http") || channel.href.startsWith("mailto:");
          return (
            <a
              key={channel.label}
              href={channel.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group rounded-md border border-border/50 bg-card p-4 sm:p-5 transition-all duration-200 hover:scale-110 hover:border-border hover:bg-secondary/20"
            >
              <Icon className={`h-5 w-5 mb-3 sm:mb-4 transition-colors duration-200 ${channel.iconColor}`} />
              <p className="text-[10px] sm:text-xs font-mono text-muted-foreground/70 mb-1 uppercase tracking-wider">
                {channel.label}
              </p>
              <p className="text-xs sm:text-sm text-foreground font-medium break-words">
                {channel.value}
              </p>
            </a>
          );
        })}
      </div>
    </div>
  );
}