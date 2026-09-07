"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Software that solves real problems.
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            NAED SOFTWARES builds modern digital products, business systems and
            practical software solutions designed for real-world use.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#projects" className="btn-primary">
              Explore Projects
            </Link>
            <Link href="#contact" className="btn-secondary">
              Contact NAED SOFTWARES
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
          aria-hidden="true"
        >
          {/* your SVG visual – keep as is */}
        </motion.div>
      </div>
    </section>
  );
}
