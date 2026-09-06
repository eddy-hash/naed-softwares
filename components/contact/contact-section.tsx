import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "@/components/ui/social-icons";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";

const channels = [
  { label: "Email", value: "hello@naedsoftwares.online", href: siteConfig.links.email, icon: Mail },
  { label: "GitHub", value: "@naedsoftwares", href: siteConfig.links.github, icon: GithubIcon },
  { label: "LinkedIn", value: "NAED SOFTWARES", href: siteConfig.links.linkedin, icon: LinkedinIcon },
  { label: "Facebook", value: "NAED SOFTWARES", href: siteConfig.links.facebook, icon: FacebookIcon },
];

export function ContactSection() {
  return (
    <Section id="contact">
      <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-16 items-start">
        <div>
          <SectionHeading
            title="Let's build something useful."
            description="Have a project in mind, or a system that needs rebuilding properly? Reach out and NAED SOFTWARES will get back to you."
          />
          <Button href="/contact" size="md">
            Start a Conversation
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group rounded-[var(--radius-md)] border border-border bg-surface p-4 transition-colors hover:border-border-strong hover:bg-surface-2"
            >
              <channel.icon className="h-4 w-4 text-muted-2 mb-3 group-hover:text-accent transition-colors" />
              <p className="text-xs text-muted-2 font-mono mb-0.5">{channel.label}</p>
              <p className="text-sm text-foreground truncate">{channel.value}</p>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
