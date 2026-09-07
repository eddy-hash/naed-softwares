"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  { title: "Welcome", content: "We build practical, modern software solutions.", target: "hero" },
  { title: "Tech Stack", content: "Next.js, React, TypeScript, and more.", target: "tech-strip" },
  { title: "Projects", content: "Browse our portfolio of real-world applications.", target: "projects" },
  { title: "Contact", content: "Reach out and let's start a conversation.", target: "contact" },
];

interface WizardProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Wizard({ isOpen, onClose }: WizardProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const step = steps[stepIndex];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const next = () => {
    if (stepIndex < steps.length - 1) setStepIndex(stepIndex + 1);
    else onClose();
  };
  const prev = () => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
  };

  useEffect(() => {
    if (isOpen) {
      const el = document.getElementById(step.target);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [stepIndex, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-2xl p-6 max-w-lg w-full mx-4 shadow-2xl">
        <button onClick={onClose} className="float-right text-muted-foreground hover:text-foreground">
          <X size={20} />
        </button>
        <div className="flex gap-1.5 justify-center mb-6">
          {steps.map((_, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full ${i === stepIndex ? "bg-primary" : "bg-muted/40"}`} />
          ))}
        </div>
        <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
        <p className="text-muted-foreground text-base">{step.content}</p>
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
          <button
            onClick={prev}
            disabled={stepIndex === 0}
            className="px-4 py-2 rounded-md border border-border bg-background hover:bg-secondary disabled:opacity-40 text-sm"
          >
            <ChevronLeft size={16} /> Back
          </button>
          <button onClick={next} className="px-5 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm">
            {stepIndex === steps.length - 1 ? "Finish" : "Next"} <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
