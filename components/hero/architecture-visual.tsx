"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "client", x: 40, y: 60, label: "Client" },
  { id: "api", x: 230, y: 60, label: "API" },
  { id: "db", x: 420, y: 24, label: "Data" },
  { id: "jobs", x: 420, y: 96, label: "Jobs" },
];

const edges: [string, string][] = [
  ["client", "api"],
  ["api", "db"],
  ["api", "jobs"],
];

function nodeById(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export function ArchitectureVisual() {
  return (
    <div className="relative w-full max-w-md">
      <svg
        viewBox="0 0 460 130"
        className="w-full h-auto overflow-visible"
        aria-hidden="true"
      >
        {edges.map(([from, to], i) => {
          const a = nodeById(from);
          const b = nodeById(to);
          return (
            <line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="var(--border-strong)"
              strokeWidth="1.5"
            />
          );
        })}

        {edges.map(([from, to], i) => {
          const a = nodeById(from);
          const b = nodeById(to);
          return (
            <motion.circle
              key={`pulse-${i}`}
              r="2.5"
              fill="var(--accent)"
              initial={{ cx: a.x, cy: a.y, opacity: 0 }}
              animate={{
                cx: [a.x, b.x],
                cy: [a.y, b.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 1.8,
                delay: 0.6 + i * 0.45,
                repeat: Infinity,
                repeatDelay: 2.4,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {nodes.map((n) => (
          <g key={n.id}>
            <rect
              x={n.x - 34}
              y={n.y - 16}
              width={68}
              height={32}
              rx={7}
              fill="var(--surface-2)"
              stroke="var(--border-strong)"
              strokeWidth="1.2"
            />
            <text
              x={n.x}
              y={n.y + 4}
              textAnchor="middle"
              fontSize="10"
              fontFamily="var(--font-mono)"
              fill="var(--muted)"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
