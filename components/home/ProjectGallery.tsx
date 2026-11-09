"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

type ProjectGalleryProps = {
  images: string[];
  title: string;
  /** Load the first image eagerly (it is usually the largest paint). */
  priorityFirst?: boolean;
};

export default function ProjectGallery({
  images,
  title,
  priorityFirst = false,
}: ProjectGalleryProps) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);

  const step = useCallback(
    (direction: 1 | -1) =>
      setActive((index) =>
        index === null
          ? null
          : (index + direction + images.length) % images.length
      ),
    [images.length]
  );

  // Keyboard controls + body scroll lock while the lightbox is open
  useEffect(() => {
    if (active === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [active, close, step]);

  // If the remaining tiles pair up unevenly, let the last one span the row
  const lastIsWide = images.length > 1 && (images.length - 1) % 2 === 1;

  return (
    <>
      <Stagger stagger={0.06} className="grid gap-4 sm:grid-cols-2">
        {images.map((src, index) => {
          const isFeature = index === 0;
          const isLastWide = lastIsWide && index === images.length - 1;

          return (
            <StaggerItem
              key={src}
              className={isFeature || isLastWide ? "sm:col-span-2" : ""}
            >
              <div className="glass-card p-2">
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Open ${title} screenshot ${index + 1} of ${images.length}`}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-foreground/[0.03]"
                >
                  <Image
                    src={src}
                    alt={`${title} screenshot ${index + 1}`}
                    width={1600}
                    height={900}
                    priority={priorityFirst && isFeature}
                    sizes={
                      isFeature || isLastWide
                        ? "(min-width: 1152px) 1056px, 100vw"
                        : "(min-width: 1152px) 520px, (min-width: 640px) 50vw, 100vw"
                    }
                    className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />

                  <span className="glass absolute bottom-3 right-3 grid size-9 place-items-center rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Maximize2 size={15} />
                  </span>
                </button>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${title} screenshot viewer`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          >
            <button
              type="button"
              autoFocus
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              aria-label="Close viewer"
              className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X size={20} />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  aria-label="Previous screenshot"
                  className="absolute left-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  aria-label="Next screenshot"
                  className="absolute right-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center"
            >
              <Image
                src={images[active]}
                alt={`${title} screenshot ${active + 1}`}
                width={1600}
                height={900}
                sizes="92vw"
                className="h-auto max-h-[82vh] w-auto max-w-[92vw] rounded-xl object-contain"
              />
              <p className="mt-3 text-xs text-white/70">
                {active + 1} / {images.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
