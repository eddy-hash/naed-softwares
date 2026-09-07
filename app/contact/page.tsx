import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "@/components/ui/social-icons";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with NAED SOFTWARES to start a conversation about your project.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { label: "Email", value: "naedsoftwares@gmail.com", href: siteConfig.links.email, icon: Mail },
  { label: "GitHub", value: "eddy-hash", href: siteConfig.links.github, icon: GithubIcon },
  { label: "LinkedIn", value: "NAED SOFTWARES", href: siteConfig.links.linkedin, icon: LinkedinIcon },
  { label: "Facebook", value: "NAED SOFTWARES", href: siteConfig.links.facebook, icon: FacebookIcon },
];

export default function ContactPage() {
  return (
    <Section border={false} className="pt-16 pb-24 md:pt-20 md:pb-32">
      <div className="max-w-2xl mb-12">
        <h1 className="font-display text-3xl md:text-[2.6rem] font-semibold tracking-tight text-foreground">
          Let&apos;s build something useful.
        </h1>
        <p className="mt-5 text-base text-muted leading-relaxed">
          Whether it&apos;s a new system or one that needs rebuilding properly,
          reach out through whichever channel works best for you.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {channels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group rounded-[var(--radius-md)] border border-border bg-surface p-5 transition-colors hover:border-border-strong hover:bg-surface-2"
          >
            <channel.icon className="h-5 w-5 text-muted-2 mb-4 group-hover:text-accent transition-colors" />
            <p className="text-xs text-muted-2 font-mono mb-1">{channel.label}</p>
            <p className="text-sm text-foreground break-words">{channel.value}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
