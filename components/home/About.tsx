
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Brain,
  Lightbulb,
  MapPin,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const highlights = [
  {
    number: "01",
    icon: Code2,
    title: "Software Development",
    description:
      "Building responsive applications and practical software solutions.",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Exploring intelligent systems, predictive models and automation.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Turning ideas and real-world challenges into meaningful solutions.",
  },
];

export default function About() {
  return (
    <section id="about" className="ryen-about">

      {/* Section heading */}
      <Reveal>
        <div className="ryen-about-heading">
          <span className="ryen-section-label">01 — ABOUT ME</span>
          <h2>
            MORE ABOUT
            <br />
            <span>WHO I AM.</span>
          </h2>
        </div>
      </Reveal>

      {/* Introduction and portrait */}
      <div className="ryen-about-intro">

        <Reveal className="ryen-about-copy">
          <p className="ryen-about-lead">
            I'm Nishit, an aspiring AI/ML Engineer and Software Developer
            passionate about building intelligent applications and solving
            real-world problems through technology.
          </p>

          <p className="ryen-about-description">
            I enjoy exploring machine learning, software development and
            emerging technologies while continuously improving my
            technical and problem-solving skills.
          </p>

          <Link href="#projects" className="ryen-about-link">
            EXPLORE MY WORK
            <ArrowUpRight size={19} />
          </Link>
        </Reveal>

        <Reveal delay={0.15} className="ryen-about-visual">
          <div className="ryen-about-image">
            <Image
              src="/Professional.png"
              alt="Nishit Soni"
              fill
              sizes="(max-width: 768px) 90vw, 38vw"
              className="object-cover object-top"
            />

            <div className="ryen-about-image-overlay" />

            <div className="ryen-about-location">
              <div>
                <span className="ryen-about-location-name">
                  NISHIT SONI
                </span>
                <span className="ryen-about-location-city">
                  <MapPin size={13} />
                  Ghaziabad, India
                </span>
              </div>

              <span className="ryen-about-timezone">IST</span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Highlight cards */}
      <div className="ryen-about-highlights">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.number}>
              <article className="ryen-about-card">
                <div className="ryen-about-card-top">
                  <span>{item.number}</span>
                  <Icon size={25} strokeWidth={1.4} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="ryen-about-card-line" />
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Bottom section */}
      <div className="ryen-about-footer">
        <span>CURIOUS BY NATURE. BUILDER BY CHOICE.</span>
        <span>01 / ABOUT</span>
      </div>
    </section>
  );
}
