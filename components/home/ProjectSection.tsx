import type { ProjectCategory } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";

type ProjectSectionProps = {
  category: ProjectCategory;
};

/** 12-column spans (literal strings so Tailwind can see them). */
const spanClass: Record<number, string> = {
  12: "lg:col-span-12",
  7: "lg:col-span-7",
  6: "lg:col-span-6",
  5: "lg:col-span-5",
  4: "lg:col-span-4",
};

const rowCycle = [
  [7, 5],
  [4, 4, 4],
  [5, 7],
];

/**
 * Builds an asymmetrical, gap-free bento for any number of projects:
 * rows cycle 7/5 → 4/4/4 → 5/7, and the last row adapts to what is left.
 */
function computeSpans(count: number): number[] {
  const spans: number[] = [];
  let row = 0;

  while (spans.length < count) {
    const left = count - spans.length;
    let pattern = rowCycle[row % rowCycle.length];

    if (left < pattern.length) {
      pattern = left === 1 ? [12] : [6, 6];
    }

    spans.push(...pattern);
    row++;
  }

  return spans;
}

export default function ProjectSection({ category }: ProjectSectionProps) {
  const spans = computeSpans(category.projects.length);

  return (
    <section id={category.id} className="scroll-mt-28 py-12">
      <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {category.title}
          </h3>

          <p className="mt-3 max-w-2xl leading-7 text-muted">
            {category.description}
          </p>
        </div>

        <span className="glass rounded-full px-3.5 py-1.5 text-xs text-muted">
          {category.projects.length} projects
        </span>
      </Reveal>

      <Stagger
        stagger={0.07}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-12"
      >
        {category.projects.map((project, index) => {
          const span = spans[index];

          return (
            <StaggerItem
              key={`${category.id}-${project.number}-${project.title}`}
              className={`${spanClass[span]} md:max-lg:last:odd:col-span-2`}
            >
              <ProjectCard project={project} wide={span >= 7} />
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
