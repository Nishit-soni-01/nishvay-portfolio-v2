import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink, GitBranch } from "lucide-react";
import { projectCategories } from "@/data/projects";

type ProjectCategoryPageProps = {
  categoryId: string;
};

export default function ProjectCategoryPage({
  categoryId,
}: ProjectCategoryPageProps) {
  const category = projectCategories.find(
    (item) => item.id === categoryId
  );

  console.log("Requested category:", categoryId);
console.log("Available categories:", projectCategories.map((item) => item.id));
console.log("Found category:", category); 

  if (!category) {
    return (
      <main className="ryen-category-page">
        <h1>Category not found.</h1>
        <Link href="/#projects">Back to Projects</Link>
      </main>
    );
  }

  return (
    <main className="ryen-category-page">
      <header className="ryen-category-page-header">
        <Link href="/#projects" className="ryen-category-back">
          <ArrowLeft size={16} />
          Back to Categories
        </Link>

        <span className="ryen-projects-label">
          SELECTED WORK — {category.projects.length} PROJECTS
        </span>

        <h1>
          {category.title}
          <span>.</span>
        </h1>

        <p>{category.description}</p>
      </header>

      <section className="ryen-category-project-grid">
        {category.projects.map((project, index) => (
          <article
            key={project.slug || project.title}
            className="ryen-category-project-card"
          >
            <Link
              href={
                project.slug
                  ? `/projects/${project.slug}`
                  : project.liveUrl || project.githubUrl || "/#projects"
              }
              className="ryen-category-project-image"
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="ryen-category-project-img"
                />
              ) : (
                <div className="ryen-category-cover-placeholder">
                  {String(index + 1).padStart(2, "0")}
                </div>
              )}

              <span className="ryen-category-project-arrow">
                <ArrowUpRight size={22} />
              </span>
            </Link>

            <div className="ryen-category-project-info">
              <span className="ryen-category-project-number">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(category.projects.length).padStart(2, "0")}
              </span>

              <h2>{project.title}</h2>

              <p>{project.subtitle}</p>

              <div className="ryen-category-technologies">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="ryen-category-project-links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitBranch size={15} />
                    GitHub
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}


