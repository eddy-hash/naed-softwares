import { siteConfig } from "@/lib/config";
import { Mail, Headset, ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

export default function ContactSection() {
  const emails = Array.isArray(siteConfig.links.email)
    ? siteConfig.links.email
    : [siteConfig.links.email];

  const socials = [
    {
      href: siteConfig.links.github,
      label: "GitHub",
      icon: <FaGithub className="h-5 w-5 md:h-6 md:w-6" />,
      color: "text-[#181717] dark:text-white",
      bg: "hover:bg-[#181717]/10 dark:hover:bg-white/10",
    },
    {
      href: siteConfig.links.linkedin,
      label: "LinkedIn",
      icon: <FaLinkedin className="h-5 w-5 md:h-6 md:w-6" />,
      color: "text-[#0A66C2]",
      bg: "hover:bg-[#0A66C2]/10",
    },
    {
      href: siteConfig.links.facebook,
      label: "Facebook",
      icon: <FaFacebook className="h-5 w-5 md:h-6 md:w-6" />,
      color: "text-[#1877F2]",
      bg: "hover:bg-[#1877F2]/10",
    },
    {
      href: siteConfig.links.instagram,
      label: "Instagram",
      icon: <FaInstagram className="h-5 w-5 md:h-6 md:w-6" />,
      color: "text-[#E4405F]",
      bg: "hover:bg-[#E4405F]/10",
    },
    {
      href: siteConfig.links.whatsapp,
      label: "WhatsApp",
      icon: <FaWhatsapp className="h-5 w-5 md:h-6 md:w-6" />,
      color: "text-[#25D366]",
      bg: "hover:bg-[#25D366]/10",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {siteConfig.tagline || "Let's build something useful."}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Reach out and let's create something impactful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                Email
              </h3>
              <div className="space-y-2">
                {emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-card">
                      <Mail className="h-5 w-5" />
                    </span>
                    {email}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                Connect
              </h3>
              <div className="flex items-center gap-2.5 flex-wrap">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-md border border-border/50 bg-card transition-all duration-200 hover:scale-105 hover:border-border ${s.color} ${s.bg}`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-2 space-y-3">
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors hover:bg-[#25D366]/90"
              >
                <FaWhatsapp className="h-4 w-4" />
                Chat on WhatsApp
              </a>

              <a
                href="#feedback"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-medium transition-colors hover:bg-primary/90"
              >
                <Headset className="h-4 w-4" />
                Start a Conversation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 md:p-7">
            <h3 className="text-lg font-semibold">Send a message</h3>
            <p className="text-xs text-muted-foreground mt-1">
              We'll respond within 24 hours.
            </p>

            <form
              action={siteConfig.formspreeEndpoint}
              method="POST"
              className="mt-5 space-y-3"
            >
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full px-3 py-2.5 bg-background border border-border rounded-md text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                name="message"
                placeholder="Your message"
                rows={4}
                required
                className="w-full px-3 py-2.5 bg-background border border-border rounded-md text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2.5 rounded-md text-sm font-medium transition-colors hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}