import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import SpotlightCard from "@/components/ui/SpotlightCard";

/** Adjust this if your project detail pages live at a different route. */
const getProjectHref = (slug: string) => `/projects/${slug}`;

type ProjectCardProps = {
  project: Project;
  /** Wide tiles lay the image beside the content on desktop. */
  wide?: boolean;
};

export default function ProjectCard({
  project,
  wide = false,
}: ProjectCardProps) {
  const href = project.slug ? getProjectHref(project.slug) : undefined;
  const visibleTech = project.technologies.slice(0, 4);
  const extraTech = project.technologies.length - visibleTech.length;
  const metrics = project.metrics?.slice(0, 2);

  return (
    <SpotlightCard className={`flex h-full flex-col ${wide ? "lg:flex-row" : ""}`}>
      {/* Preview */}
      <div className={`p-2 ${wide ? "lg:w-[46%] lg:shrink-0" : ""}`}>
        <div
          className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-foreground/[0.03] ${
            wide ? "lg:aspect-auto lg:h-full lg:min-h-72" : ""
          }`}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes={
                wide
                  ? "(min-width: 1024px) 40vw, 100vw"
                  : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              }
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="grid h-full place-items-center bg-gradient-to-br from-accent/20 via-transparent to-accent-2/20 text-5xl font-semibold text-accent">
              {project.title.charAt(0)}
            </div>
          )}

          {project.highlight && (
            <span className="glass absolute left-3 top-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
              {project.highlight}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 pt-3 md:p-6 md:pt-4 lg:pt-6">
        <h4 className="text-lg font-semibold tracking-tight">
          {href ? (
            <Link
              href={href}
              className="after:absolute after:inset-0 after:content-['']"
            >
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h4>

        <p className="mt-1 text-sm text-accent">{project.subtitle}</p>

        <p
          className={`mt-3 text-sm leading-6 text-muted line-clamp-3 ${
            wide ? "lg:line-clamp-4" : ""
          }`}
        >
          {project.description}
        </p>

        {metrics && metrics.length > 0 && (
          <dl className="mt-4 grid grid-cols-2 gap-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-border bg-foreground/[0.03] px-3 py-2"
              >
                <dt className="truncate text-[11px] text-muted">
                  {metric.label}
                </dt>
                <dd className="mt-0.5 truncate font-mono text-sm font-semibold">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {visibleTech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-foreground/[0.03] px-2.5 py-1 text-xs text-muted"
            >
              {tech}
            </li>
          ))}
          {extraTech > 0 && (
            <li className="rounded-full border border-border px-2.5 py-1 text-xs text-muted">
              +{extraTech}
            </li>
          )}
        </ul>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-6">
          {href ? (
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              View project
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
              />
            </span>
          ) : (
            <span />
          )}

          <div className="relative z-10 flex items-center gap-1">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code on GitHub`}
                title="Source code"
                className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                <Code2 size={17} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                title="Live demo"
                className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                <ExternalLink size={17} />
              </a>
            )}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
