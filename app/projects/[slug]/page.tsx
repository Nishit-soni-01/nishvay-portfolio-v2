import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
} from "lucide-react";
import { projectCategories } from "@/data/projects";
import ArchitectureDiagram from "@/components/home/ArchitectureDiagram";
import ProjectLinks from "@/components/home/ProjectLinks";
import RiverflowArchitectureDiagram from "@/components/home/RiverflowArchitectureDiagram";
import VideTubeArchitectureDiagram from "@/components/home/VideTubeArchitectureDiagram";
import VideTubeDatabaseDiagram from "@/components/home/VideTubeArchitectureDiagram";
import SentinelArchitectureDiagram from "@/components/home/SentinelArchitectureDiagram";
import LoanDefaultArchitectureDiagram from "@/components/home/LoanDefaultArchitectureDiagram";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectCategories.flatMap((category) =>
    category.projects
      .filter((project) => project.slug)
      .map((project) => ({
        slug: project.slug!,
      })),
  );
}

function ProjectLoading() {
  return (
    <main className="ryen-project-detail-page">
      <div className="ryen-project-detail-inner">
        <div className="ryen-project-skeleton">
          <div className="ryen-project-skeleton-line ryen-project-skeleton-short" />
          <div className="ryen-project-skeleton-title" />
          <div className="ryen-project-skeleton-line ryen-project-skeleton-medium" />
          <div className="ryen-project-skeleton-cover" />
        </div>
      </div>
    </main>
  );
}

async function ProjectDetailsContent({ params }: PageProps) {
  const { slug } = await params;

  // Keep the existing slug-based data lookup and static route behavior.
  const allProjects = projectCategories.flatMap((category) => category.projects);
  const projectIndex = allProjects.findIndex((item) => item.slug === slug);
  const project = allProjects[projectIndex];

  if (!project) {
    notFound();
  }

  const previousProject =
    projectIndex > 0 ? allProjects[projectIndex - 1] : undefined;
  const nextProject =
    projectIndex < allProjects.length - 1
      ? allProjects[projectIndex + 1]
      : undefined;

  const gallery = project.gallery ?? [];
  const coverImage = gallery[0] ?? project.image;
  const additionalImages = gallery.length > 1 ? gallery.slice(1) : [];

  return (
    <main className="ryen-project-detail">
      <div className="ryen-project-detail-inner">
        <header className="ryen-project-detail-header">
          <Link href="/#projects" className="ryen-category-back">
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          <div className="ryen-project-detail-heading">
            <span className="ryen-projects-label">
              SELECTED WORK / PROJECT CASE STUDY
            </span>

            <h1>
              {project.title}
              <span>.</span>
            </h1>

            <div className="ryen-project-detail-intro">
              <div>
                <span className="ryen-project-detail-eyebrow">
                  PROJECT OVERVIEW
                </span>

                <h2>{project.subtitle}</h2>
              </div>

              <div className="ryen-project-detail-summary">
                <p>{project.description}</p>

                <ProjectLinks
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                />
              </div>
            </div>
          </div>
        </header>

        <section className="ryen-project-cover" aria-label="Project preview">
          {coverImage ? (
            <Image
              src={coverImage}
              alt={`${project.title} preview`}
              fill
              priority={project.slug === "loan-default-analysis"}
              loading={project.slug === "loan-default-analysis" ? "eager" : "lazy"}
              sizes="(max-width: 768px) 100vw, 90vw"
              className="ryen-project-cover-image"
            />
          ) : (
            <div className="ryen-project-cover-placeholder">
              <Code2 size={58} strokeWidth={1.2} aria-hidden="true" />
              <span>{project.title} / Preview</span>
            </div>
          )}
          <span className="ryen-project-cover-caption">Selected project / 01</span>
        </section>

        {additionalImages.length > 0 && (
          <section className="ryen-project-gallery" aria-label="Project gallery">
            {additionalImages.map((image, index) => (
              <div className="ryen-project-gallery-item" key={image}>
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 2}`}
                  width={1600}
                  height={900}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="ryen-project-gallery-image"
                />
              </div>
            ))}
          </section>
        )}

        <section className="ryen-project-overview-layout">
          <div className="ryen-project-section-heading">
            <p className="ryen-project-section-label">01 / The project</p>
            <h2>
              Built with
              <br />
              <span>purpose.</span>
            </h2>
          </div>

          <div className="ryen-project-overview-copy">
            <h3>Project overview</h3>
            <p>{project.overview ?? project.description}</p>

            <div className="ryen-project-tech-block">
              <p className="ryen-project-section-label">Technology stack</p>
              <div className="ryen-project-tech-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {project.slug === "authify" && (
          <section className="ryen-project-special-section">
            <p className="ryen-project-section-label">02 / System design</p>
            <ArchitectureDiagram />
          </section>
        )}

        {project.slug === "riverflow" && (
          <section className="ryen-project-special-section">
            <p className="ryen-project-section-label">02 / System design</p>
            <RiverflowArchitectureDiagram />
          </section>
        )}

        {project.slug === "videotube-api" && (
          <section className="ryen-project-special-section">
            <p className="ryen-project-section-label">02 / System design</p>
            <VideTubeArchitectureDiagram />
          </section>
        )}

        {project.slug === "videotube-api" && (
          <section className="ryen-project-special-section">
            <p className="ryen-project-section-label">03 / Data model</p>
            <VideTubeDatabaseDiagram />
          </section>
        )}

        {project.slug === "sentinel-ai" && (
          <section className="ryen-project-special-section">
            <p className="ryen-project-section-label">02 / System design</p>
            <SentinelArchitectureDiagram />
          </section>
        )}

        {project.slug === "loan-default-analysis" && (
          <section className="ryen-project-special-section">
            <p className="ryen-project-section-label">02 / System design</p>
            <h2 className="ryen-project-section-title">Data architecture</h2>
            <LoanDefaultArchitectureDiagram />
          </section>
        )}

        {project.features && project.features.length > 0 && (
          <section className="ryen-project-content-section">
            <div className="ryen-project-section-heading">
              <p className="ryen-project-section-label">03 / Capabilities</p>
              <h2>
                Key <span>features.</span>
              </h2>
            </div>
            <div className="ryen-project-feature-list">
              {project.features.map((feature, index) => (
                <article className="ryen-project-feature" key={feature}>
                  <span className="ryen-project-feature-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p>{feature}</p>
                  <span className="ryen-project-feature-mark">↗</span>
                </article>
              ))}
            </div>
          </section>
        )}

        {project.apiEndpoints && project.apiEndpoints.length > 0 && (
          <section className="ryen-project-content-section">
            <div className="ryen-project-section-heading">
              <p className="ryen-project-section-label">04 / Developer reference</p>
              <h2>
                API <span>documentation.</span>
              </h2>
            </div>

            <div className="ryen-project-api-content">
              <p className="ryen-project-section-description">
                Selected REST API endpoints implemented in the VideTube backend,
                covering authentication, video management, and user interactions.
              </p>
              <div className="ryen-project-api-list">
                {project.apiEndpoints.map((endpoint, index) => (
                  <article
                    className="ryen-project-api-item"
                    key={`${endpoint.method}-${endpoint.path}-${index}`}
                  >
                    <div className="ryen-project-api-route">
                      <span
                        className={`ryen-project-method ryen-project-method-${endpoint.method.toLowerCase()}`}
                      >
                        {endpoint.method}
                      </span>
                      <code>{endpoint.path}</code>
                    </div>
                    <p>{endpoint.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {project.metrics && project.metrics.length > 0 && (
          <section className="ryen-project-content-section">
            <div className="ryen-project-section-heading">
              <p className="ryen-project-section-label">05 / Outcomes</p>
              <h2>
                By the <span>numbers.</span>
              </h2>
            </div>
            <div className="ryen-project-metrics">
              {project.metrics.map((metric, index) => (
                <article className="ryen-project-metric" key={metric.label}>
                  <span className="ryen-project-feature-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="ryen-project-metric-value">{metric.value}</p>
                  <p className="ryen-project-metric-label">{metric.label}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <section className="ryen-project-content-section">
            <div className="ryen-project-section-heading">
              <p className="ryen-project-section-label">06 / Engineering</p>
              <h2>
                Technical <span>challenges.</span>
              </h2>
            </div>
            <div className="ryen-project-challenge-list">
              {project.challenges.map((challenge, index) => (
                <article className="ryen-project-challenge" key={challenge}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{challenge}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="ryen-project-cta">
          <p className="ryen-project-section-label">Have a closer look</p>
          <h2>
            Explore the
            <br />
            <span>work yourself.</span>
          </h2>
          <div className="ryen-project-cta-links">
            <ProjectLinks
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          </div>
        </section>

        <nav className="ryen-project-pagination" aria-label="Project navigation">
          {previousProject?.slug ? (
            <Link
              href={`/projects/${previousProject.slug}`}
              className="ryen-project-pagination-link"
            >
              <span className="ryen-project-pagination-label">
                <ArrowLeft size={15} aria-hidden="true" />
                Previous project
              </span>
              <strong>{previousProject.title}</strong>
            </Link>
          ) : (
            <span />
          )}

          {nextProject?.slug ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="ryen-project-pagination-link ryen-project-pagination-next"
            >
              <span className="ryen-project-pagination-label">
                Next project
                <ArrowRight size={15} aria-hidden="true" />
              </span>
              <strong>{nextProject.title}</strong>
            </Link>
          ) : (
            <Link href="/#projects" className="ryen-project-pagination-link ryen-project-pagination-next">
              <span className="ryen-project-pagination-label">
                Back to all projects
                <ArrowUpRight size={15} aria-hidden="true" />
              </span>
              <strong>Project index</strong>
            </Link>
          )}
        </nav>
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
