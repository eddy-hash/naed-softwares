"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Step = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export default function HomeStepper({ steps }: { steps: Step[] }) {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goNext = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, steps.length));
  };

  const goPrev = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  };

  const goTo = (n: number) => {
    setDirection(n > step ? 1 : -1);
    setStep(n);
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [steps.length]);

  const current = steps[step - 1];
  const progress = (step / steps.length) * 100;

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Progress bar */}
      <div className="w-full h-1 bg-border">
        <motion.div
          className="h-full bg-primary"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* Step indicator */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          {steps.map((s, i) => {
            const n = i + 1;
            const active = n === step;
            const done = n < step;
            return (
              <button
                key={s.id}
                onClick={() => goTo(n)}
                aria-label={`Go to ${s.label}`}
                className="group flex items-center gap-2"
              >
                <span
                  className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border text-xs font-mono transition-all
                    ${
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : done
                        ? "border-primary/50 bg-primary/10 text-primary"
                        : "border-border bg-card text-muted-foreground"
                    }`}
                >
                  {n}
                </span>
                <span
                  className={`hidden sm:inline text-xs font-medium transition-colors
                    ${active ? "text-foreground" : "text-muted-foreground"}`}
                >
                  {s.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {current.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={goPrev}
            disabled={step === 1}
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium transition-all hover:bg-card disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <span className="text-xs font-mono text-muted-foreground">
            Step {step} of {steps.length}
          </span>

          {step < steps.length ? (
            <button
              onClick={goNext}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={() => goTo(1)}
              className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20"
            >
              Start over
            </button>
          )}
        </div>
      </div>
    </div>
  );
}