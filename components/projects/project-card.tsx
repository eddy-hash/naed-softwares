"use client";

import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import ProjectPoster from "./project-poster";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
      transition={{ duration: 0.2 }}
      className="group relative bg-card border border-border rounded-lg overflow-hidden h-full flex flex-col"
    >
      <div className="aspect-[16/10] bg-muted/20 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
        <ProjectPoster slug={project.slug} />
      </div>
      <div className="p-5 space-y-3 flex flex-col flex-1">
        <h3 className="text-xl font-semibold tracking-tight line-clamp-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-3 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2 py-0.5 bg-muted/30 rounded-full border border-border/50"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-muted-foreground">+{project.technologies.length - 3}</span>
          )}
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-border/50 mt-auto">
          <span
            className={cn(
              "text-xs font-medium uppercase tracking-wider px-2 py-0.5 rounded-full",
              project.status === "live" &&
                "text-green-400 bg-green-400/10 border border-green-400/20",
              project.status === "development" &&
                "text-yellow-400 bg-yellow-400/10 border border-yellow-400/20",
              project.status === "concept" &&
                "text-muted-foreground bg-muted/30 border border-border"
            )}
          >
            {project.status}
          </span>
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm font-medium flex items-center gap-1 text-primary hover:gap-2 transition-all"
          >
            View Project <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
