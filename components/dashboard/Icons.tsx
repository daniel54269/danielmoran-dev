// Small inline icon set — no extra deps. 1.5px stroke matches the app shell.

type IconProps = { className?: string };

const base = "h-4 w-4";

export const IconOverview = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <rect x="3" y="3" width="7" height="9" rx="1.5" />
    <rect x="14" y="3" width="7" height="5" rx="1.5" />
    <rect x="14" y="12" width="7" height="9" rx="1.5" />
    <rect x="3" y="16" width="7" height="5" rx="1.5" />
  </svg>
);

export const IconPipeline = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="M3 6h13" />
    <path d="M3 12h9" />
    <path d="M3 18h13" />
    <circle cx="19" cy="6" r="1.4" />
    <circle cx="15" cy="12" r="1.4" />
    <circle cx="19" cy="18" r="1.4" />
  </svg>
);

export const IconStack = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z" />
    <path d="M3 12.5l9 4.5 9-4.5" />
    <path d="M3 17l9 4.5 9-4.5" />
  </svg>
);

export const IconDocuments = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6" />
    <path d="M9 17h4" />
  </svg>
);

export const IconAbout = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" />
  </svg>
);

export const IconPlaybook = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="M4 4h11a3 3 0 0 1 3 3v13" />
    <path d="M4 4v15a2 2 0 0 0 2 2h12" />
    <path d="M8 8h7" />
    <path d="M8 12h7" />
  </svg>
);

export const IconCode = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="m8 17-5-5 5-5" />
    <path d="m16 7 5 5-5 5" />
    <path d="m14 4-4 16" />
  </svg>
);

export const IconSearch = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const IconGitHub = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className}`}>
    <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.18c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 0 1 6 0c2.29-1.56 3.3-1.24 3.3-1.24.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 0Z" />
  </svg>
);

export const IconLinkedIn = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className}`}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
  </svg>
);

export const IconMenu = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const IconClose = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconChevronRight = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const IconArrowUpRight = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const IconTrendUp = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="m3 17 6-6 4 4 8-8" />
    <path d="M14 7h7v7" />
  </svg>
);

export const IconDot = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className}`}>
    <circle cx="12" cy="12" r="3" />
  </svg>
);
