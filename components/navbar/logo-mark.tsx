export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="1" y="1" width="26" height="26" rx="7" stroke="currentColor" strokeOpacity="0.25" />
      <path
        d="M9 9.5L9 18.5"
        stroke="var(--accent)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 9.5L18 18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M18 9.5L18 18.5"
        stroke="var(--accent)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="9" cy="9.5" r="1.4" fill="var(--accent)" />
      <circle cx="18" cy="9.5" r="1.4" fill="var(--accent)" />
    </svg>
  );
}
