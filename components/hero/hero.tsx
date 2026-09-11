"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const posterVariant: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 },
  },
};

export default function Hero() {
  return (
    <section id="hero" className="relative pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/branding/hero-poster.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-15 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <div className="space-y-6 text-center lg:text-left order-1">
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground"
            >
              Reliable software.
              <br />
              <span className="text-primary">Real impact.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              <span className="font-black text-foreground">
                NAED SOFTWARES
              </span>{" "}
              builds modern digital products, business systems and practical
              software solutions designed for real-world use.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start pt-2"
            >
              <a
                href="tel:+255711255321"
                className="btn-secondary group inline-flex items-center gap-3"
              >
                <Phone className="h-5 w-5 text-blue-500" />
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-sm font-semibold">
                    Contact Us: 0711 255 321
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    24/7 Available
                  </span>
                </span>
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={posterVariant}
            className="flex justify-center lg:justify-end order-2"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[440px] aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/50">
              <Image
                src="/branding/hero-poster.jpg"
                alt="NAED SOFTWARES — Smart Solutions. Real Impact. Built for Tomorrow."
                fill
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 440px"
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}