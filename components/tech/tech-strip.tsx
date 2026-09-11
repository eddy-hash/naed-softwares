"use client";

import { motion, Variants } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNestjs,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiGit,
  SiGithubactions,
  SiLinux,
} from "react-icons/si";
import { technologies } from "@/lib/config";

const techMap: Record<string, { icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; color: string }> = {
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  React: { icon: SiReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  NestJS: { icon: SiNestjs, color: "#E0234E" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  Express: { icon: SiExpress, color: "#ffffff" },
  GraphQL: { icon: SiGraphql, color: "#E10098" },
  Prisma: { icon: SiPrisma, color: "#2D3748" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Redis: { icon: SiRedis, color: "#DC382D" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  Vercel: { icon: SiVercel, color: "#ffffff" },
  Git: { icon: SiGit, color: "#F05032" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  Linux: { icon: SiLinux, color: "#FCC624" },
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function TechStrip() {
  return (
    <section
      id="tech-strip"
      className="py-8 border-y border-border bg-secondary/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-10 md:gap-y-5"
        >
          {technologies.map((tech) => {
            const entry = techMap[tech];
            const Icon = entry?.icon;
            const color = entry?.color ?? "currentColor";
            return (
              <motion.div
                key={tech}
                variants={item}
                className="flex items-center gap-2 text-muted-foreground text-sm font-medium transition-colors hover:text-foreground"
              >
                {Icon && <Icon className="w-5 h-5 shrink-0" style={{ color }} />}
                <span>{tech}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
