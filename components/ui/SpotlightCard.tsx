"use client";

import Link from "next/link";
import type { PointerEvent, ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  /** Renders the card as a link when provided. */
  href?: string;
  /** Opens in a new tab with safe rel attributes. */
  external?: boolean;
};

/**
 * Glass card with a cursor-following glow and gradient hairline border.
 * Pointer position is written to --mx / --my, consumed by the `spotlight`
 * and `glow-border` utilities in globals.css.
 */
export default function SpotlightCard({
  children,
  className = "",
  href,
  external = false,
}: SpotlightCardProps) {
  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const classes = `glass-card spotlight glow-border group ${className}`;

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onPointerMove={onPointerMove}
        className={classes}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} onPointerMove={onPointerMove} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <div onPointerMove={onPointerMove} className={classes}>
      {children}
    </div>
  );
}
