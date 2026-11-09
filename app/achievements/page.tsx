
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

type Credential = {
  title: string;
  file: string;
  type: "image" | "pdf";
  category: string;
};

const credentials: Credential[] = [
  // Hackathons and competitions
  {
    title: "Hack Genesis '25 — International Finalist",
    file: "CERTIFICATE of Finalist in International level Hackthon Hack Gensis'25.png",
    type: "image",
    category: "Hackathons",
  },
  {
    title: "Hackamania — Finalist",
    file: "CERTIFICATE_of_Finalist_in_Hackamania_By_MicroSoft.pdf",
    type: "pdf",
    category: "Hackathons",
  },
  {
    title: "Young Turks 2025 — Certificate of Merit",
    file: "young_turks25_achievement.pdf",
    type: "pdf",
    category: "Hackathons",
  },
  {
    title: "NextGen Hackathon 2025",
    file: "NextGen Hackathon2025 Participation Certificate-028[1].pdf",
    type: "pdf",
    category: "Hackathons",
  },
  {
    title: "Biz Tech Ideathon 2025",
    file: "Biz Tech Ideathon 2025.pdf",
    type: "pdf",
    category: "Hackathons",
  },
  {
    title: "Cognizant Technoverse 2026",
    file: "Technoverse Hackathon 2026 by Cognizant.pdf",
    type: "pdf",
    category: "Hackathons",
  },

  // LeetCode
  {
    title: "50 Days Badge — 2025",
    file: "50 Days badge 2025.png",
    type: "image",
    category: "LeetCode",
  },
  {
    title: "50 Days Badge — 2026",
    file: "50 Days badge 2026.png",
    type: "image",
    category: "LeetCode",
  },
  {
    title: "100 Days Badge",
    file: "100 Day Badge.png",
    type: "image",
    category: "LeetCode",
  },
  {
    title: "200 Days Badge",
    file: "200daysnew.png",
    type: "image",
    category: "LeetCode",
  },
  {
    title: "365 Days Badge",
    file: "365days.png",
    type: "image",
    category: "LeetCode",
  },
  {
    title: "SQL 50 Badge",
    file: "50 SQL Badge.png",
    type: "image",
    category: "LeetCode",
  },
  {
    title: "October Daily Coding Challenge",
    file: "10oct.png",
    type: "image",
    category: "LeetCode",
  },
  {
    title: "Introduction to Pandas — LeetCode",
    file: "Introduction to Pandas.png",
    type: "image",
    category: "LeetCode",
  },

  // CodeChef
  {
    title: "50 Days Coding Streak — Gold",
    file: "CodeChefBadge 50 day strike gold.png",
    type: "image",
    category: "CodeChef",
  },
  {
    title: "100 Days Coding Streak",
    file: "CodeChefBadge 100 day stike.png",
    type: "image",
    category: "CodeChef",
  },
  {
    title: "250 Problems Solved — Silver",
    file: "CodeChefBadge 250 problem sliver.png",
    type: "image",
    category: "CodeChef",
  },
  {
    title: "Contest Contender — Bronze",
    file: "CodeChefBadge contentes bronze.png",
    type: "image",
    category: "CodeChef",
  },

  // Courses and certifications
  {
    title: "Complete Web Development",
    file: "Complete Web Development.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "Machine Learning A-Z: AI, Python & R",
    file: "Machine Learning A-Z, Al, Python & R + ChatGPT Prize by Udemy.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "The Ultimate MySQL Bootcamp",
    file: "The Ultimate MySQL Bootcamp Go from SQL Beginner to Expert by Udemy.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "Complete Data Analyst Bootcamp",
    file: "Complete Data Analyst Bootcamp From Basics To Adavance by Udemy.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "Data Science, Machine Learning, Deep Learning & NLP",
    file: "Complete Data Science,Machine Learning,DL,NLP Bootcamp.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "Introduction to Data Science — Cisco",
    file: "introduction-to-data-science (1).png",
    type: "image",
    category: "Certifications",
  },
  {
    title: "Introduction to Data Science — Certificate",
    file: "IntrotoDataScienceUpdate20260414-31-kchbgl.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "Python Essentials 1 — Cisco",
    file: "python-essentials-1.1 (1).png",
    type: "image",
    category: "Certifications",
  },
  {
    title: "Python Essentials 1 — Certificate",
    file: "PythonEssentials1Update20260414-31-h9acqy.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "Python Pandas Basics",
    file: "Python Pandas Basics Course by simpliylearn.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    file: "GenAI Powered Data Analytics Job Simulation by TATA.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "Prompt Engineering for Everyone",
    file: "Prompt Engineering by IBMSkillsNetwork.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "Practice Rust",
    file: "Practice Rust.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "Practice Go",
    file: "nishit_2004-Practice Go.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "500 Difficulty Rating",
    file: "nishit_2004-500 difficulty rating.pdf",
    type: "pdf",
    category: "Certifications",
  },
];

const sections = [
  {
    name: "Hackathons",
    description: "Hackathon, ideathon and competition recognitions.",
  },
  {
    name: "LeetCode",
    description: "Coding streaks and problem-solving milestones.",
  },
  {
    name: "CodeChef",
    description: "Problem-solving, streak and contest badges.",
  },
  {
    name: "Certifications",
    description: "Courses and technical learning credentials.",
  },
];

function CredentialCard({
  item,
  index,
}: {
  item: Credential;
  index: number;
}) {
  const fileUrl = `/certificates/${encodeURIComponent(item.file)}`;

  return (
    <article className="ryen-credential-card">
      <a
        href={fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="ryen-credential-preview"
        aria-label={`View ${item.title}`}
      >
        {item.type === "image" ? (
          <Image
            src={fileUrl}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 90vw, 40vw"
            className="ryen-credential-image"
          />
        ) : (
          <iframe
            src={`${fileUrl}#page=1&toolbar=0&navpanes=0&view=FitH`}
            title={`${item.title} preview`}
            className="ryen-credential-pdf"
            loading="lazy"
          />
        )}

        <span className="ryen-credential-number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="ryen-credential-open">
          <ExternalLink size={20} />
        </span>
      </a>

      <div className="ryen-credential-info">
        <div>
          <span className="ryen-credential-category">
            {item.category}
          </span>
          <h3>{item.title}</h3>
        </div>

        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ryen-credential-link"
        >
          View credential <ExternalLink size={15} />
        </a>
      </div>
    </article>
  );
}

export default function AchievementsPage() {
  return (
    <>

      <main className="min-h-screen bg-[#0d0d0c] px-6 pt-32 pb-24 text-white md:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12">
            <a href="/" className="ryen-back-link">
            <span className="ryen-back-arrow">←</span>
            <span>BACK TO HOME</span>
            </a>
          </Reveal>

          {/* Achievements Header */}
          <header className="ryen-achievements-header">
            <Reveal>
              <div className="ryen-achievements-eyebrow">
                <span>RECOGNITION & GROWTH</span>
              </div>

              <h1 className="ryen-achievements-title">
                Achievements &
                <span> Certifications.</span>
              </h1>

              <p className="ryen-achievements-description">
                A collection of my hackathon recognitions, coding milestones,
                professional certifications and continuous learning journey.
              </p>

              <p className="ryen-achievements-count">
                {credentials.length} credentials across {sections.length} categories
              </p>
            </Reveal>
          </header>

          {/* Credential Sections */}
          {sections.map((section) => {
            const items = credentials.filter(
              (item) => item.category === section.name
            );

            if (items.length === 0) return null;

            return (
              <Reveal key={section.name} className="mb-20">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {section.name}
                  </h2>
                  <p className="mt-1.5 text-sm text-muted">
                    {section.description}
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item, index) => (
                    <CredentialCard
                      key={item.file}
                      item={item}
                      index={index}
                    />
                  ))}
                </div>
              </Reveal>
            );
          })}

          {/* Updated Footer */}
          <div className="ryen-achievements-footer">
            <a href="/" className="ryen-back-link">
              <span className="ryen-back-arrow">←</span>
              <span>BACK TO PORTFOLIO</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
