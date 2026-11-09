"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Palette, Music2, PenLine } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";

const creativeInterests = [
  {
    title: "Art & Sketching",
    description: "I enjoy drawing and sketching, turning ideas and imagination into visual art.",
    icon: Palette,
  },
  {
    title: "Music & Guitar",
    description: "Exploring music and learning guitar, one chord at a time.",
    icon: Music2,
  },
  {
    title: "Poetry & Writing",
    description: "Expressing thoughts, emotions, and experiences through poetry and words.",
    icon: PenLine,
  },
];

const artworks = [
  { file: "art-01.jpeg", title: "Expressive Portrait" },
  { file: "art-02.jpeg", title: "Charcoal Figure Study" },
  { file: "art-03.jpeg", title: "Ink Character Illustration" },
  { file: "art-04.jpeg", title: "A Quiet Window" },
  { file: "art-05.jpeg", title: "Traditional Portrait" },
  { file: "art-06.jpeg", title: "Dark Fantasy" },
  { file: "art-07.jpeg", title: "Warrior Illustration" },
  { file: "art-08.jpeg", title: "Mythical Character" },
  { file: "art-09.jpeg", title: "Bird Study" },
  { file: "art-10.jpeg", title: "Expressive Eyes" },
  { file: "art-11.jpeg", title: "Abstract Ink Art" },
];

const platforms = [
  {
    name: "Instagram",
    description: "Explore my artwork and sketches",
    href: "https://www.instagram.com/integrals_of_shades/",
  },
  {
    name: "YouTube",
    description: "Watch my creative work",
    href: "https://www.youtube.com/@integralsofshades",
  },
  {
    name: "Pinterest",
    description: "Discover my art collection",
    href: "https://in.pinterest.com/Nishit_soni/",
  },
];

export function BeyondCodeArtwork() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: "left" | "right") => {
    galleryRef.current?.scrollBy({
      left: direction === "right" ? 520 : -520,
      behavior: "smooth",
    });
  };

  return (
    <section id="artwork" className="ryen-creative-section ryen-artwork-section">
      <Reveal>
        <div className="ryen-artwork-heading">
          <div>
            <span className="ryen-section-label">03 — MY CREATIVE SIDE</span>
            <h2 className="ryen-creative-title">
              MADE WITH
              <br />
              <span>IMAGINATION.</span>
            </h2>
            <p className="ryen-creative-description">
              A collection of sketches and illustrations created with
              imagination, patience, and a little ink.
            </p>
          </div>

          <div className="ryen-gallery-controls">
            <button
              type="button"
              onClick={() => scrollGallery("left")}
              aria-label="Previous artworks"
            >
              <ArrowLeft size={21} />
            </button>
            <button
              type="button"
              onClick={() => scrollGallery("right")}
              aria-label="Next artworks"
            >
              <ArrowRight size={21} />
            </button>
          </div>
        </div>
      </Reveal>

      <div className="ryen-artwork-track" ref={galleryRef}>
        {artworks.map((artwork, index) => (
          <article
            key={artwork.file}
            className={`ryen-artwork-slide ${index === 0 ? "ryen-artwork-featured" : ""}`}
          >
            <div className="ryen-artwork-image">
              <Image
                src={`/artwork/${artwork.file}`}
                alt={artwork.title}
                fill
                sizes="(max-width: 768px) 82vw, 48vw"
                className="object-contain"
              />
              <div className="ryen-artwork-overlay" />
              <div className="ryen-artwork-caption">
                <span>0{index + 1}</span>
                <h3>{artwork.title}</h3>
                <ArrowUpRight size={21} />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 pb-6 relative z-10">
        <a
          href="/artwork"
          className="group inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-[#99e836] transition-all duration-300 hover:gap-5"
        >
          EXPLORE ALL ARTWORK
          <ArrowUpRight size={20} />
        </a>
      </div>
    </section>
  );
}

export function BeyondCodePlatforms() {
  return (
    <section id="creative-platforms" className="ryen-creative-section">
      <Reveal>
        <span className="ryen-section-label">04 — FIND ME ELSEWHERE</span>
        <h2 className="ryen-creative-title">
          MY CREATIVE
          <br />
          <span>SPACE.</span>
        </h2>
        <p className="ryen-creative-description">
          A little more of what I create, share and collect beyond
          the world of code.
        </p>
      </Reveal>

      <Stagger className="ryen-platform-grid">
        {platforms.map((platform, index) => (
          <StaggerItem key={platform.name}>
            <a
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ryen-platform-item"
            >
              <span>0{index + 1}</span>
              <div>
                <h3>{platform.name}</h3>
                <p>{platform.description}</p>
              </div>
              <ArrowUpRight size={24} />
            </a>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

export default function BeyondCode() {
  return (
    <section id="beyond-code" className="ryen-creative-section">
      <Reveal>
        <span className="ryen-section-label">02 — BEYOND TECHNOLOGY</span>
        <h2 className="ryen-creative-title">
          BEYOND
          <br />
          <span>THE CODE.</span>
        </h2>
        <p className="ryen-creative-description">
          Beyond technology, I find my expression through art, music,
          and words. Creativity has always been a part of who I am.
        </p>
      </Reveal>

      <Stagger className="ryen-interest-grid">
        {creativeInterests.map((item, index) => {
          const Icon = item.icon;
          return (
            <StaggerItem key={item.title}>
              <article className="ryen-interest-item">
                <span className="ryen-interest-number">0{index + 1}</span>
                <Icon size={28} strokeWidth={1.4} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}