
import Link from "next/link";
import { ArrowUpRight, Music2, Palette, PenLine } from "lucide-react";

import Hero from "@/components/home/Hero";
import AnimatedStats from "@/components/home/AnimatedStats";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Experience, { Recognition } from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";
import Reveal from "@/components/ui/Reveal";

const creativeIcons = [Palette, Music2, PenLine];

export default function Home() {
  return (
    <>
      <main className="ryen-snap-container">
        <div className="ryen-page">
          <Hero />
        </div>

        <div className="ryen-page">
          <AnimatedStats />
        </div>

        <div className="ryen-page">
          <About />
        </div>

        {/* Beyond Technology Section */}
        <div className="ryen-page ryen-beyond-page">
          <section className="ryen-beyond-home">
            <Reveal>
              <div className="ryen-beyond-layout">
                <div className="ryen-beyond-main">
                  <span className="ryen-section-label">
                    04 — BEYOND TECHNOLOGY
                  </span>

                  <h2 className="ryen-beyond-title">
                    THERE&apos;S MORE
                    <br />
                    TO ME THAN
                    <br />
                    <span>CODE.</span>
                  </h2>

                  <p className="ryen-creative-description">
                    Beyond technology, I find my expression through art,
                    sketching, music, guitar, poetry and content creation.
                    Creativity has always been a part of who I am.
                  </p>

                  <Link
                    href="/beyond-code"
                    className="ryen-beyond-link"
                  >
                    EXPLORE BEYOND CODE
                    <ArrowUpRight size={20} />
                  </Link>
                </div>

                <div
                  className="ryen-beyond-icons"
                  aria-hidden="true"
                >
                  {creativeIcons.map((Icon, index) => (
                    <div
                      className="ryen-beyond-icon"
                      key={index}
                    >
                      <Icon size={28} strokeWidth={1.4} />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>
        </div>

        <div className="ryen-page">
          <Skills />
        </div>

        {/* Professional Experience */}
        <div className="ryen-page">
          <Experience />
        </div>

        {/* Recognition & Achievements */}
        <div className="ryen-page">
          <Recognition />
        </div>

        <div className="ryen-page">
          <Projects />
        </div>

        <div className="ryen-page">
          <Contact />
        </div>
      </main>
    </>
  );
}
