
"use client";

import Image from "next/image";
import {
  BriefcaseBusiness,
  ExternalLink,
  Trophy,
  CalendarDays,
  Award,
  Check,
  ArrowUpRight,
} from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";

const achievements = [
  {
    number: "01",
    title: "Hackamania 2025",
    description:
      "Achieved finalist position in Hackamania, organized by The Elites.",
    year: "2025",
  },
  {
    number: "02",
    title: "Hack Genesis '25",
    description:
      "Selected as an international-level finalist in the Hack Genesis hackathon.",
    year: "2025",
  },
];

const responsibilities = [
  "Contributed to full-stack web development initiatives.",
  "Implemented interactive application features.",
  "Optimized user interface workflows.",
];

export default function Experience() {
  return (
    <section id="experience" className="ryen-experience-section">
      <Reveal>
        <header className="ryen-experience-heading">
          <span className="ryen-section-label">
            06 — EXPERIENCE & RECOGNITION
          </span>

          <h2>
            MY PROFESSIONAL
            <br />
            <span>JOURNEY.</span>
          </h2>

          <p>
            A record of the experiences, milestones and
            achievements that continue to shape my journey.
          </p>
        </header>
      </Reveal>

      <div className="ryen-experience-main">
        <Reveal className="ryen-internship">
          <div className="ryen-experience-topline">
            <span>01 — PROFESSIONAL EXPERIENCE</span>

            <span className="ryen-completed">
              <Check size={13} />
              COMPLETED
            </span>
          </div>

          <div className="ryen-internship-title">
            <BriefcaseBusiness size={25} strokeWidth={1.5} />

            <div>
              <h3>Web Development Intern</h3>
              <p>Gray India Consulting Private Limited</p>
            </div>
          </div>

          <div className="ryen-internship-date">
            <CalendarDays size={16} />
            <span>10 June 2026 – 10 July 2026</span>
          </div>

          <div className="ryen-responsibilities">
            <span className="ryen-detail-label">
              KEY CONTRIBUTIONS
            </span>

            <ul>
              {responsibilities.map((line, index) => (
                <li key={line}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{line}</p>

                  <Check size={16} />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="ryen-internship-certificate">
          <div className="ryen-certificate-heading">
            <div>
              <span className="ryen-detail-label">
                PROOF OF EXPERIENCE
              </span>

              <h3>
                <Award size={20} />
                Internship Certificate
              </h3>
            </div>

            <span className="ryen-certificate-number">
              01 / 01
            </span>
          </div>

          <a
            href="/certificates/gray-india-internship.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            className="ryen-certificate-preview"
            aria-label="View full Gray India internship certificate"
          >
            <Image
              src="/certificates/gray-india-internship.jpeg"
              alt="Nishit Soni's Gray India Consulting internship certificate"
              width={1400}
              height={1100}
              className="ryen-certificate-image"
            />

            <span className="ryen-certificate-open">
              <ArrowUpRight size={22} />
            </span>
          </a>

          <a
            href="/certificates/gray-india-internship.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            className="ryen-certificate-link"
          >
            VIEW FULL CERTIFICATE
            <ExternalLink size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Recognition() {
  return (
    <section id="recognition" className="ryen-recognition-page">
      <Reveal>
        <header className="ryen-recognition-header">
          <span className="ryen-section-label">
            07 — MILESTONES & ACHIEVEMENTS
          </span>

          <h2>
            BUILT THROUGH
            <br />
            <span>EVERY CHALLENGE.</span>
          </h2>

          <p>
            Hackathons, ideas and milestones that reflect my
            journey of learning, building and growing.
          </p>
        </header>

        <div className="ryen-recognition-heading">
          <div>
            <span className="ryen-detail-label">
              HACKATHON RECOGNITION
            </span>

            <h3>
              SELECTED MILESTONES<span>.</span>
            </h3>
          </div>

          <a
            href="/achievements"
            className="ryen-all-achievements"
          >
            VIEW ALL ACHIEVEMENTS
            <ArrowUpRight size={19} />
          </a>
        </div>
      </Reveal>

      <Stagger className="ryen-achievement-list">
        {achievements.map((item) => (
          <StaggerItem key={item.title}>
            <article className="ryen-achievement-item">
              <span className="ryen-achievement-number">
                {item.number}
              </span>

              <div className="ryen-achievement-content">
                <span>
                  HACKATHON · {item.year}
                </span>

                <h4>{item.title}</h4>

                <p>{item.description}</p>
              </div>

              <Trophy size={22} strokeWidth={1.4} />
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
