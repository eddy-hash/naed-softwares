"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const cycleTheme = () => {
    if (theme === "dark") setTheme("light");
    else if (theme === "light") setTheme("system");
    else setTheme("dark");
  };

  const icons = {
    dark: <Moon className="h-4 w-4" />,
    light: <Sun className="h-4 w-4" />,
    system: <Monitor className="h-4 w-4" />,
  };

  return (
    <button
      onClick={cycleTheme}
      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition px-3 py-1.5 rounded-md border border-border/50 hover:border-border"
      aria-label="Toggle theme"
    >
      {icons[theme as "dark" | "light" | "system"] || icons.dark}
      <span className="capitalize hidden sm:inline">{theme || "dark"}</span>
    </button>
  );
}
