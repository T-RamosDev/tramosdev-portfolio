import type { ReactNode } from "react";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cx("ds-button", `ds-button-${variant}`, className)}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "neutral" | "primary" | "success";
  className?: string;
}) {
  return <span className={cx("ds-badge", `ds-badge-${tone}`, className)}>{children}</span>;
}

export function SurfaceCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <article className={cx("ds-card", className)}>{children}</article>;
}
