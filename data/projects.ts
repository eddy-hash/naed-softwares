export type ProjectStatus = "live" | "development" | "concept";

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  status: ProjectStatus;
  statusLabel: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  engineering: string;
};

export const projects: Project[] = [
  {
    slug: "pos",
    title: "POS Management System",
    category: "Retail Operations",
    description:
      "A modern point-of-sale platform for managing products, sales, customers and business operations.",
    longDescription:
      "A modern point-of-sale platform built to give retail and hospitality teams a single, reliable place to run daily operations — from ringing up sales to tracking revenue and customer activity in real time.",
    status: "development",
    statusLabel: "In Development",
    technologies: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Docker"],
    image: "/projects/pos/cover.svg",
    githubUrl: undefined,
    liveUrl: undefined,
    features: ["Sales", "Products", "Customers", "Inventory", "Reports"],
    engineering:
      "Structured as a modular monolith: a NestJS API exposes bounded contexts for sales, catalog and reporting behind a typed REST layer, while the Next.js front end consumes it through a shared TypeScript SDK. PostgreSQL holds transactional data with row-level auditing on every sale, and Docker Compose reproduces the full stack locally for consistent engineering and testing.",
  },
  {
    slug: "inventory",
    title: "Inventory Management System",
    category: "Supply Chain",
    description:
      "A centralized inventory platform for tracking products, stock levels and inventory movements.",
    longDescription:
      "A centralized inventory platform that gives operations teams visibility into stock across multiple warehouses, with alerts before shortages become a problem.",
    status: "development",
    statusLabel: "In Development",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/projects/inventory/cover.svg",
    githubUrl: undefined,
    liveUrl: undefined,
    features: ["Stock management", "Products", "Warehouses", "Alerts", "Reports"],
    engineering:
      "Stock movements are modeled as immutable ledger entries rather than mutable counters, so every increase or decrease in inventory is traceable to a specific event. A scheduled job aggregates ledger entries into warehouse-level summaries, keeping dashboard reads fast without recomputing history on every request.",
  },
  {
    slug: "expense",
    title: "Expense Tracker",
    category: "Personal Finance",
    description:
      "A clean financial management application for monitoring income, expenses and spending patterns.",
    longDescription:
      "A clean financial management application that helps people understand where their money goes, with categorized spending, budgets and a monthly view of income against expenses.",
    status: "development",
    statusLabel: "In Development",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/projects/expense/cover.svg",
    githubUrl: undefined,
    liveUrl: undefined,
    features: ["Expense tracking", "Categories", "Analytics", "Budgets", "Transactions"],
    engineering:
      "Transactions are categorized at write time using a rules engine that can be overridden manually, so automated tagging never locks the user out of a correction. Monthly summaries are derived server-side and cached per user to keep the analytics view responsive on lower-end connections.",
  },
  {
    slug: "school",
    title: "School Management System",
    category: "Education",
    description:
      "A centralized platform for managing students, academic records, attendance and school operations.",
    longDescription:
      "A centralized platform for schools to manage students, classes, attendance, results and fees in one system, replacing fragmented spreadsheets with a single source of truth.",
    status: "concept",
    statusLabel: "Concept",
    technologies: ["Next.js", "TypeScript", "NestJS", "PostgreSQL"],
    image: "/projects/school/cover.svg",
    githubUrl: undefined,
    liveUrl: undefined,
    features: ["Students", "Teachers", "Classes", "Attendance", "Results", "Fees"],
    engineering:
      "Designed around a role-based access model — administrators, teachers and guardians see the same underlying records through different permission scopes rather than separate systems. Academic terms are versioned, so results and attendance always resolve against the correct term even as school calendars change year to year.",
  },
  {
    slug: "ecommerce",
    title: "E-commerce Platform",
    category: "Digital Commerce",
    description:
      "A modern commerce platform for product discovery, shopping and order management.",
    longDescription:
      "A modern commerce platform covering product discovery, checkout and order management, built to give a small business a real storefront without stitching together third-party plugins.",
    status: "concept",
    statusLabel: "Concept",
    technologies: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Docker"],
    image: "/projects/ecommerce/cover.svg",
    githubUrl: undefined,
    liveUrl: undefined,
    features: ["Products", "Shopping cart", "Orders", "Customers", "Analytics"],
    engineering:
      "The storefront is server-rendered for product and category pages to keep them fast and indexable, while cart and checkout run as client-side islands backed by a NestJS order service. Orders and inventory reservations are handled through a short-lived hold pattern to prevent overselling during checkout.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
