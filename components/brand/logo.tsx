type LogoProps = {
  className?: string;
  compact?: boolean;
};

export function BrandLogo({ className = "", compact = false }: LogoProps) {
  return (
    <span className={`brand-logo ${compact ? "brand-logo-compact" : ""} ${className}`.trim()}>
      <svg className="brand-symbol" viewBox="0 0 48 48" role="img" aria-label="Símbolo TR">
        <rect className="brand-symbol-frame" x="1" y="1" width="46" height="46" rx="11" fill="none" strokeWidth="2" />
        <path className="brand-symbol-mark" d="M9 14h19M18.5 14v21M28 35V14h7a6 6 0 0 1 0 12h-7m6 0 7 9" fill="none" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {!compact && (
        <span className="brand-wordmark">
          <strong>T-RAMOS</strong>
          <small>DEV</small>
        </span>
      )}
    </span>
  );
}
