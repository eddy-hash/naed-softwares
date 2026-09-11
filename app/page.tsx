"use client";

import { useState } from "react";
import Hero from "@/components/hero/hero";
import TechStrip from "@/components/tech/tech-strip";
import SelectedProjects from "@/components/projects/selected-projects";
import ContactSection from "@/components/contact/contact-section";
import { Wizard } from "@/components/wizard/wizard";
import HomeStepper from "@/components/home-stepper";

export default function Home() {
  const [wizardOpen, setWizardOpen] = useState(false);

  const steps = [
    { id: "hero", label: "Welcome", content: <Hero /> },
    { id: "tech", label: "Tech", content: <TechStrip /> },
    { id: "projects", label: "Our work", content: <SelectedProjects /> },
    { id: "contact", label: "Contact", content: <ContactSection /> },
  ];

  return (
    <>
      <HomeStepper steps={steps} />

      <button
        onClick={() => setWizardOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition z-40"
        aria-label="Take a tour"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
      </button>

      <Wizard isOpen={wizardOpen} onClose={() => setWizardOpen(false)} />
    </>
  );
}