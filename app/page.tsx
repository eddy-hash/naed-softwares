import { Hero } from "@/components/hero/hero";
import { TechStrip } from "@/components/tech/tech-strip";
import { SelectedProjects } from "@/components/projects/selected-projects";
import { ContactSection } from "@/components/contact/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStrip />
      <SelectedProjects />
      <ContactSection />
    </>
  );
}
