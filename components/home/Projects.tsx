
"use client";

import { Suspense, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";

import "swiper/css";

import { projectCategories } from "@/data/projects";

const categoryLabels: Record<string, string> = {
  "web-development": "Web Development",
  "ai-ml": "AI & Machine Learning",
  "data-analytics": "Data Science & Analytics",
  database: "Database & SQL",
};

export default function Projects() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="ryen-category-showcase">
      <div className="ryen-showcase-heading">
        <div>
          <span className="ryen-projects-label">
            06 — EXPLORE MY WORK
          </span>

          <h2>
            PROJECT
            <br />
            CATEGORIES<span>.</span>
          </h2>
        </div>

        <div className="ryen-showcase-controls">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous category"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next category"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <Suspense fallback={<div className="ryen-category-track" />}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          slidesPerView={1}
          spaceBetween={0}
          speed={700}
          loop={false}
          rewind={true}
          allowTouchMove={true}
          preventClicks={false}
          preventClicksPropagation={false}
          className="ryen-category-track"
        >
          {projectCategories.map((category, index) => {
            const image = category.projects.find(
              (project) => project.image
            )?.image;

            const label =
              categoryLabels[category.id] || category.title;

            return (
              <SwiperSlide
                key={category.id}
                className="ryen-category-slide"
              >
                <Link
                  href={`/projects/category/${category.id}`}
                  className="ryen-category-visual"
                  aria-label={`Explore ${label} projects`}
                >
                  <div className="ryen-category-cover">
                    {image ? (
                      <Image
                        src={image}
                        alt={`${label} project preview`}
                        fill
                        sizes="(max-width: 768px) 90vw, 45vw"
                        className="ryen-category-cover-img"
                      />
                    ) : (
                      <div className="ryen-category-cover-placeholder">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    )}
                  </div>

                  <div className="ryen-category-details">
                    <span className="ryen-category-index">
                      CATEGORY {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{label}</h3>

                    <p>{category.description}</p>

                    <span className="ryen-category-total">
                      {String(category.projects.length).padStart(2, "0")}{" "}
                      PROJECTS
                    </span>

                    <span className="ryen-category-explore">
                      <span>EXPLORE PROJECTS</span>

                      <span className="ryen-category-explore-icon">
                        <ArrowUpRight
                          size={25}
                          strokeWidth={2}
                        />
                      </span>
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Suspense>

      <div className="ryen-showcase-footer">
        <div className="ryen-showcase-progress">
          <span
            style={{
              width: `${
                ((activeIndex + 1) / projectCategories.length) * 100
              }%`,
            }}
          />
        </div>

        <span className="ryen-showcase-count">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(projectCategories.length).padStart(2, "0")}
        </span>

        <span className="ryen-showcase-total">
          25 PROJECTS
        </span>
      </div>
    </section>
  );
}
