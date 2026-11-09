
"use client";

import {
  Code2,
  BrainCircuit,
  Database,
  BarChart3,
  Cloud,
  Terminal,
  Cpu,
  Layers,
  Flame,
  Globe,
  Boxes,
  Workflow,
  Server,
  DatabaseZap,
  LineChart,
  ArrowUpRight,
} from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";

const skillGroups = [
  {
    number: "01",
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", icon: Terminal },
      { name: "JavaScript", icon: Globe },
      { name: "Java", icon: Code2 },
      { name: "C", icon: Cpu },
      { name: "C++", icon: Cpu },
      { name: "R", icon: BarChart3 },
      { name: "SQL", icon: Database },
    ],
  },
  {
    number: "02",
    title: "Full-Stack Development",
    icon: Layers,
    skills: [
      { name: "React", icon: Layers },
      { name: "Redux Toolkit", icon: Workflow },
      { name: "Zustand", icon: Boxes },
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Terminal },
      { name: "Tailwind CSS", icon: Flame },
      { name: "REST APIs", icon: Globe },
    ],
  },
  {
    number: "03",
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    skills: [
      { name: "Regression", icon: LineChart },
      { name: "KNN", icon: BrainCircuit },
      { name: "SVM", icon: Cpu },
      { name: "Clustering", icon: Layers },
      { name: "ANN", icon: BrainCircuit },
      { name: "CNN", icon: Code2 },
      { name: "NLP", icon: Terminal },
      { name: "TensorFlow", icon: Flame },
      { name: "PyTorch", icon: Cpu },
    ],
  },
  {
    number: "04",
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: DatabaseZap },
      { name: "NeonDB", icon: Cloud },
      { name: "BigQuery", icon: Database },
      { name: "SQL Server", icon: Server },
      { name: "Mongoose", icon: Database },
      { name: "Prisma", icon: Layers },
      { name: "Drizzle", icon: Flame },
    ],
  },
  {
    number: "05",
    title: "Data Analytics & BI",
    icon: BarChart3,
    skills: [
      { name: "Power BI", icon: BarChart3 },
      { name: "Tableau", icon: LineChart },
      { name: "Pandas", icon: Terminal },
      { name: "NumPy", icon: Cpu },
      { name: "Scikit-learn", icon: BrainCircuit },
      { name: "Matplotlib", icon: BarChart3 },
      { name: "Seaborn", icon: LineChart },
    ],
  },
  {
    number: "06",
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", icon: Cloud },
      { name: "EC2", icon: Server },
      { name: "Elastic Beanstalk", icon: Layers },
      { name: "Docker", icon: Boxes },
      { name: "Azure", icon: Cloud },
      { name: "Snowflake", icon: Database },
      { name: "Git", icon: Workflow },
    ],
  },
];

export default function Skills() {
  const totalSkills = skillGroups.reduce(
    (total, group) => total + group.skills.length,
    0
  );

  return (
    <section id="skills" className="ryen-skills-section">
      <Reveal>
        <header className="ryen-skills-heading">
          <span className="ryen-section-label">
            05 — TECHNICAL EXPERTISE
          </span>

          <h2>
            MY TECHNICAL
            <br />
            <span>TOOLKIT.</span>
          </h2>

          <div className="ryen-skills-intro">
            <p>
              Technologies and tools I use to build applications,
              develop intelligent systems, and work with data.
            </p>

            <span>
              {String(totalSkills).padStart(2, "0")} TECHNOLOGIES
              <ArrowUpRight size={17} />
            </span>
          </div>
        </header>
      </Reveal>

      <Stagger className="ryen-skills-grid">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <StaggerItem key={group.title}>
              <article className="ryen-skill-group">
                <div className="ryen-skill-group-top">
                  <span>{group.number}</span>
                  <Icon size={23} strokeWidth={1.4} />
                </div>

                <div className="ryen-skill-group-content">
                  <div className="ryen-skill-group-title">
                    <h3>{group.title}</h3>
                    <span>
                      {String(group.skills.length).padStart(2, "0")}
                    </span>
                  </div>

                  <ul>
                    {group.skills.map((skill) => {
                      const SkillIcon = skill.icon;

                      return (
                        <li key={skill.name}>
                          <SkillIcon size={14} strokeWidth={1.6} />
                          {skill.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
