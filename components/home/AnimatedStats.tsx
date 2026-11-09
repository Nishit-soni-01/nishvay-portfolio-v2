
"use client";

import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Award, Code2, Flame, Layers } from "lucide-react";

const stats = [
  {
    number: "01",
    icon: Code2,
    value: "25+",
    label: "PROJECTS COMPLETED",
    description: "Web apps, AI/ML & databases",
  },
  {
    number: "02",
    icon: Flame,
    value: "365+",
    label: "LEETCODE STREAK",
    description: "Knight Badge Rating",
  },
  {
    number: "03",
    icon: Award,
    value: "FINALIST",
    label: "HACK GENESIS '25",
    description: "International level hackathon",
  },
  {
    number: "04",
    icon: Layers,
    value: "FULL-STACK",
    label: "END-TO-END SYSTEMS",
    description: "Next.js, Node & ESP32",
  },
];

export default function AnimatedStats() {
  return (
    <section id="stats" className="ryen-stats">
      <div className="ryen-stats-heading">
        <Reveal>
          <span className="ryen-section-label">02 — THE NUMBERS</span>
          <h2>
            PROGRESS
            <br />
            <span>IN NUMBERS.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="ryen-stats-intro">
            A few milestones that reflect my journey,
            consistency and passion for building.
          </p>
        </Reveal>
      </div>

      <Stagger className="ryen-stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <StaggerItem key={stat.number}>
              <article className="ryen-stat-item">
                <div className="ryen-stat-top">
                  <span>{stat.number}</span>
                  <Icon size={23} strokeWidth={1.5} />
                </div>

                <h3>{stat.value}</h3>
                <p className="ryen-stat-label">{stat.label}</p>
                <p className="ryen-stat-description">
                  {stat.description}
                </p>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>

      <div className="ryen-stats-footer">
        <span>SMALL STEPS. MEANINGFUL PROGRESS.</span>
        <span>02 / STATS</span>
      </div>
    </section>
  );
}
