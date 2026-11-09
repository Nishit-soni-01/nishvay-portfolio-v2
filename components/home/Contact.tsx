"use client";

import {
  Mail,
  MapPin,
  ArrowUpRight,
  Code2,
} from "lucide-react";

import Reveal, {
  Stagger,
  StaggerItem,
} from "@/components/ui/Reveal";

const links = [
  {
    number: "01",
    name: "EMAIL",
    note: "Let's start a conversation.",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ns2004.soni@gmail.com",
    icon: Mail,
  },
  {
    number: "02",
    name: "GITHUB",
    note: "Explore my code and projects.",
    href: "https://github.com/Nishit-soni-01",
    icon: Code2,
  },
  {
    number: "03",
    name: "LINKEDIN",
    note: "Connect professionally.",
    href: "https://www.linkedin.com/in/nishit-soni-in/",
    icon: null,
  },
  {
    number: "04",
    name: "X / TWITTER",
    note: "Follow my updates.",
    href: "https://x.com/NishitSoni_042",
    icon: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="ryen-contact-section">
      <div className="ryen-contact-hero">
        {/* Contact Heading */}
        <Reveal className="ryen-contact-heading">
          <span className="ryen-section-label">
            08 — LET'S CONNECT
          </span>

          <h2>
            HAVE A PROJECT
            <br />
            <span>IN MIND?</span>
          </h2>

          <p>
            Have an opportunity, a project idea, or simply want to
            connect? Let's make something meaningful together.
          </p>
        </Reveal>

        {/* Email CTA + Resume */}
        <Reveal className="ryen-contact-cta">
          <span className="ryen-contact-label">
            HAVE SOMETHING TO DISCUSS?
          </span>

          <Mail size={25} strokeWidth={1.4} />

          <h3>LET'S TALK.</h3>

          <div className="ryen-contact-actions">
            <a href="mailto:ns2004.soni@gmail.com">
              LET'S CONNECT
              <ArrowUpRight size={20} />
            </a>

            <a
              href="/resume.pdf"
              download="Nishit-Soni-Resume.pdf"
              className="ryen-resume-button"
            >
              DOWNLOAD RESUME
              <ArrowUpRight size={19} />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Social Links */}
      <div className="ryen-contact-main">
        <div className="ryen-contact-details">
          <span className="ryen-contact-label">
            FIND ME ELSEWHERE
          </span>

          <Stagger className="ryen-contact-links">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <StaggerItem key={link.number}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ryen-contact-link"
                  >
                    <span className="ryen-contact-number">
                      {link.number}
                    </span>

                    <div className="ryen-contact-link-content">
                      <h4>{link.name}</h4>
                      <p>{link.note}</p>
                    </div>

                    {Icon ? (
                      <Icon size={21} strokeWidth={1.5} />
                    ) : (
                      <span className="ryen-contact-x">
                        {link.name === "LINKEDIN" ? "in" : "𝕏"}
                      </span>
                    )}

                    <ArrowUpRight
                      className="ryen-contact-arrow"
                      size={21}
                    />
                  </a>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>

      {/* Footer */}
      <Reveal>
        <div className="ryen-contact-bottom">
          <div>
            <MapPin size={16} />
            <span>GHAZIABAD, INDIA</span>
          </div>

          <p>
            © 2026 NISHIT SONI. BUILT WITH NEXT.JS & CREATIVITY.
          </p>

          <a href="#home">
            BACK TO TOP
            <ArrowUpRight size={16} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}