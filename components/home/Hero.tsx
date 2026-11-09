"use client";

import { ArrowUpRight, Code2, Cpu, Database, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

const floatingItems = [
  { label: "AI / ML", icon: Cpu, className: "hero-float-one" },
  { label: "FULL STACK", icon: Code2, className: "hero-float-two" },
  { label: "DATA SCIENCE", icon: Database, className: "hero-float-three" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="ryen-home ryen-home-animated">
      {/* Ambient background */}
      <div className="hero-ambient" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <motion.div
          className="hero-orbit hero-orbit-one"
          animate={reduce ? {} : { rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="hero-orbit hero-orbit-two"
          animate={reduce ? {} : { rotate: -360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="hero-orbit-core"
          animate={reduce ? {} : { scale: [1, 1.12, 1], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main content */}
      <div className="ryen-home-content hero-full-content">
        <Reveal y={20}>
          <div className="ryen-home-description">
            <span className="ryen-home-label">
              <span className="hero-status-dot" />
              HELLO, WELCOME TO MY PORTFOLIO
            </span>

            <p>
              I build intelligent systems and digital experiences
              that solve real-world problems.
            </p>
          </div>
        </Reveal>

        {/* Scrolling roles */}
        <div className="ryen-marquee hero-marquee">
          <div className="ryen-marquee-track">
            {Array.from({ length: 4 }).map((_, index) => (
              <span key={index}>
                AI/ML ENGINEER <b>✳</b> SOFTWARE DEVELOPER <b>✳</b>
                DATA SCIENCE <b>✳</b>
              </span>
            ))}
          </div>
        </div>

        {/* Animated floating labels */}
        <div className="hero-floating-labels" aria-hidden="true">
          {floatingItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                className={`hero-floating-card ${item.className}`}
                animate={
                  reduce
                    ? {}
                    : {
                        y: [0, -12, 0],
                        rotate: [0, index % 2 === 0 ? 2 : -2, 0],
                      }
                }
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              >
                <Icon size={15} />
                <span>{item.label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Main animated name */}
        <div className="ryen-home-name hero-name">
          <motion.span
            className="hero-im"
            initial={reduce ? false : { opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            NISHIT
          </motion.span>

          <motion.span
            className="ryen-name-line hero-name-line"
            initial={reduce ? false : { opacity: 0, y: 55, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4, ease }}
          >
            <span className="hero-name-hover">SONI</span>
            <span className="ryen-name-dot">.</span>
          </motion.span>
        </div>

        {/* Bottom content */}
        <motion.div
          className="ryen-home-bottom hero-home-bottom"
          initial={reduce ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
        >
          <div className="ryen-home-role">
            <p className="ryen-role-title">
              AI/ML ENGINEER &amp; SOFTWARE DEVELOPER
            </p>

            <p className="ryen-role-description">
              Passionate about machine learning, data science,
              intelligent automation and full-stack development.
            </p>

            <a href="#projects" className="ryen-home-link">
              EXPLORE MY WORK <ArrowUpRight size={19} />
            </a>
          </div>

          <motion.a
            href="#contact"
            className="ryen-contact-circle"
            aria-label="Let's work together. Contact me."
            whileHover={reduce ? {} : { scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            initial={reduce ? false : { opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
          >
            <svg
              className="ryen-contact-text"
              viewBox="0 0 200 200"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="ryen-circle-path"
                  d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                />
              </defs>
              <text>
                <textPath href="#ryen-circle-path">
                  LET&apos;S WORK WITH ME • LET&apos;S WORK WITH ME •
                </textPath>
              </text>
            </svg>

            <span className="ryen-contact-arrow">
              <ArrowUpRight size={32} strokeWidth={1.6} />
            </span>
          </motion.a>
        </motion.div>

        <div className="hero-bottom-meta">
          <span>BASED IN INDIA</span>
          <span><Sparkles size={13} /> CREATING WITH PURPOSE</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </div>
    </section>
  );
}