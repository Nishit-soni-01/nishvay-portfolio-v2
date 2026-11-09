import { Suspense, type ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Code2 } from "lucide-react";
import { projectCategories, type ApiEndpoint } from "@/data/projects";

import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import ArchitectureDiagram from "@/components/home/ArchitectureDiagram";
import ProjectGallery from "@/components/home/ProjectGallery";
import ProjectLinks from "@/components/home/ProjectLinks";
import RiverflowArchitectureDiagram from "@/components/home/RiverflowArchitectureDiagram";
import VideTubeArchitectureDiagram from "@/components/home/VideTubeArchitectureDiagram";
import VideTubeDatabaseDiagram from "@/components/home/VideTubeArchitectureDiagram";
import SentinelArchitectureDiagram from "@/components/home/SentinelArchitectureDiagram";
import LoanDefaultArchitectureDiagram from "@/components/home/LoanDefaultArchitectureDiagram";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const methodStyles: Record<ApiEndpoint["method"], string> = {
  GET: "bg-blue-500/15 text-blue-500",
  POST: "bg-green-500/15 text-green-500",
  PUT: "bg-orange-500/15 text-orange-500",
  PATCH: "bg-purple-500/15 text-purple-500",
  DELETE: "bg-red-500/15 text-red-500",
};

function findProject(slug: string) {
  return projectCategories
    .flatMap((category) => category.projects)
    .find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return projectCategories.flatMap((category) =>
    category.projects
      .filter((project) => project.slug)
      .map((project) => ({
        slug: project.slug!,
      }))
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.description,
  };
}

function ProjectLoading() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 pb-24 pt-28 md:px-12">
      <div className="animate-pulse space-y-6">
        <div className="h-10 w-40 rounded-full bg-foreground/5" />
        <div className="h-14 w-2/3 rounded-2xl bg-foreground/5" />
        <div className="h-5 w-1/2 rounded-lg bg-foreground/5" />
        <div className="aspect-video rounded-3xl bg-foreground/5" />
      </div>
    </main>
  );
}

function DetailSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>

      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
          {description}
        </p>
      )}

      <div className="mt-6">{children}</div>
    </Reveal>
  );
}

async function ProjectDetailsContent({ params }: PageProps) {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    notFound();
  }

  const images = project.gallery?.length
    ? project.gallery
    : project.image
      ? [project.image]
      : [];

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 pb-24 pt-28 md:px-12">
      <Reveal y={12}>
        <Link
          href="/#projects"
          className="group glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent/50 hover:text-foreground"
        >
          <ArrowLeft
            size={17}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to projects
        </Link>
      </Reveal>

      {/* Header */}
      <Reveal className="mt-12" delay={0.05}>
        <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-muted">
          <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
          {project.highlight ?? "Project showcase"}
        </span>

        <h1 className="text-gradient mt-6 pb-2 text-5xl font-semibold tracking-tighter md:text-7xl">
          {project.title}
        </h1>

        <p className="mt-3 text-xl text-accent md:text-2xl">
          {project.subtitle}
        </p>

        <p className="mt-6 max-w-3xl text-base leading-8 text-muted md:text-lg">
          {project.description}
        </p>

        <div className="mt-8">
          <ProjectLinks
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        </div>
      </Reveal>

      {/* Key numbers */}
      {project.metrics && project.metrics.length > 0 && (
        <Stagger className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <StaggerItem key={metric.label}>
              <div className="glass-card h-full p-5">
                <p className="text-2xl font-semibold tracking-tight tabular-nums text-gradient-accent md:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs text-muted">{metric.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      )}

      {/* Screenshots */}
      <div className="mt-12">
        {images.length > 0 ? (
          <ProjectGallery
            images={images}
            title={project.title}
            priorityFirst
          />
        ) : (
          <div className="glass-card flex aspect-video flex-col items-center justify-center gap-3 text-muted">
            <Code2 size={40} className="text-accent" />
            <p>{project.title} preview</p>
          </div>
        )}
      </div>

      {/* Project-specific diagrams */}
      {project.slug === "authify" && (
        <div className="mt-14">
          <ArchitectureDiagram />
        </div>
      )}

      {project.slug === "riverflow" && <RiverflowArchitectureDiagram />}

      {project.slug === "videotube-api" && <VideTubeArchitectureDiagram />}

      {project.slug === "videotube-api" && <VideTubeDatabaseDiagram />}

      {project.slug === "sentinel-ai" && <SentinelArchitectureDiagram />}

      {project.slug === "loan-default-analysis" && (
        <section className="mt-14 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Data Architecture
          </h2>
          <LoanDefaultArchitectureDiagram />
        </section>
      )}

      {/* Content + sticky stack */}
      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_320px]">
        <section className="min-w-0 space-y-14">
          <DetailSection title="Project overview">
            <p className="max-w-3xl leading-8 text-muted">
              {project.overview ?? project.description}
            </p>
          </DetailSection>

          {project.features && (
            <DetailSection title="Key features">
              <div className="glass-card p-6 md:p-8">
                <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm leading-7 text-muted"
                    >
                      <Check
                        size={16}
                        className="mt-1.5 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </DetailSection>
          )}

          {project.apiEndpoints && project.apiEndpoints.length > 0 && (
            <DetailSection
              title="API Documentation"
              description="Selected REST API endpoints implemented in the VideTube backend, covering authentication, video management, and user interactions."
            >
              <Stagger stagger={0.05} className="space-y-3">
                {project.apiEndpoints.map((endpoint, index) => (
                  <StaggerItem
                    key={`${endpoint.method}-${endpoint.path}-${index}`}
                  >
                    <div className="glass-card p-4 md:p-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`rounded-md px-3 py-1 font-mono text-xs font-bold ${
                            methodStyles[endpoint.method]
                          }`}
                        >
                          {endpoint.method}
                        </span>

                        <code className="break-all font-mono text-sm font-medium">
                          {endpoint.path}
                        </code>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-muted">
                        {endpoint.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </DetailSection>
          )}

          {project.challenges && (
            <DetailSection title="Technical challenges">
              <ul className="space-y-3">
                {project.challenges.map((challenge) => (
                  <li
                    key={challenge}
                    className="flex gap-3 text-sm leading-7 text-muted"
                  >
                    <ArrowUpRight
                      size={16}
                      className="mt-1.5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {challenge}
                  </li>
                ))}
              </ul>
            </DetailSection>
          )}
        </section>

        <aside className="h-fit lg:sticky lg:top-28">
          <Reveal>
            <div className="glass-card p-6">
              <h2 className="font-semibold">Technology stack</h2>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-border bg-foreground/[0.03] px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </aside>
      </div>
    </main>
  );
}


export default function ProjectDetailsPage({ params }: PageProps) {
  return (
    <Suspense fallback={<ProjectLoading />}>
      <ProjectDetailsContent params={params} />
    </Suspense>
  );
}

