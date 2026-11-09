import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  level?: "h2" | "h3";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  level = "h2",
  className = "",
}: SectionHeadingProps) {
  const Tag = level;

  return (
    <Reveal className={`max-w-3xl ${className}`}>
      <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-muted">
        <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
        {eyebrow}
      </span>

      <Tag
        className={`mt-5 font-semibold tracking-tight ${
          level === "h2" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
        }`}
      >
        {title}
      </Tag>

      {description && (
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
