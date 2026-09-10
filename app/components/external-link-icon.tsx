type ExternalLinkIconProps = {
  className?: string;
};

/** Small “opens elsewhere” mark — no new dependencies. */
export function ExternalLinkIcon({ className = "" }: ExternalLinkIconProps) {
  return (
    <svg
      className={`external-link-icon ${className}`.trim()}
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M5 2.25H3.25A1.25 1.25 0 0 0 2 3.5v5.25A1.25 1.25 0 0 0 3.25 10h5.25A1.25 1.25 0 0 0 9.75 8.75V7"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 2h3m0 0v3m0-3L5.75 6.25"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
