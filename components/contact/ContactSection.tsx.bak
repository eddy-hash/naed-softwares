import { siteConfig } from "@/lib/config";
import { Mail, Github, Linkedin, Facebook } from "lucide-react";

export default function ContactSection() {
  const emails = Array.isArray(siteConfig.links.email)
    ? siteConfig.links.email
    : [siteConfig.links.email];

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {siteConfig.tagline || "Let's build something useful."}
          </h2>
          <p className="text-muted-foreground text-lg mt-2">
            Reach out and let's create something impactful.
          </p>
          <div className="mt-6 space-y-3">
            {emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition"
              >
                <Mail size={20} /> {email}
              </a>
            ))}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition"
            >
              <Facebook size={20} /> Facebook
            </a>
          </div>
          <a
            href="#feedback"
            className="inline-block mt-8 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition"
          >
            Start a Conversation
          </a>
        </div>
        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="text-xl font-semibold">Get in touch</h3>
          <p className="text-muted-foreground mt-2">We'll respond within 24 hours.</p>
          <form
            action={siteConfig.formspreeEndpoint}
            method="POST"
            className="mt-4 space-y-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full px-4 py-2 bg-background border border-border rounded-md"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={4}
              required
              className="w-full px-4 py-2 bg-background border border-border rounded-md"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
