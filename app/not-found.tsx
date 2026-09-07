"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Compass, ArrowLeft } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0, 0, 0.58, 1] as const,
    },
  },
};

export default function NotFound() {
  const router = useRouter();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40 text-center flex flex-col items-center"
    >
      {/* Floating Compass (separate motion element, no variants used here) */}
      <motion.div variants={itemVariants}>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1] as const, // ✅ tuple
          }}
          className="h-14 w-14 rounded-full border border-border bg-card flex items-center justify-center mb-6"
        >
          <Compass className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>

      <motion.p variants={itemVariants} className="text-xs font-mono text-muted-foreground/60 mb-3">
        404
      </motion.p>

      <motion.h1
        variants={itemVariants}
        className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3"
      >
        This page doesn&apos;t exist.
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-base text-muted-foreground max-w-md mb-8"
      >
        The page you’re looking for may have moved or the link is out of date.
        Try one of the projects below or head back home.
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border bg-background hover:bg-secondary/50 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Go back
        </button>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
        >
          Home
        </Link>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border bg-card hover:bg-secondary/20 transition-colors text-sm font-medium"
        >
          View projects
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </motion.div>
  );
}