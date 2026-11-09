
"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

const SPRING = {
  mass: 0.1,
  damping: 10,
  stiffness: 131,
};

export default function GlobalMouseFollow() {
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, SPRING);
  const y = useSpring(mouseY, SPRING);
  const opacity = useMotionValue(0);
  const smoothOpacity = useSpring(opacity, SPRING);
  const scale = useMotionValue(0);
  const smoothScale = useSpring(scale, SPRING);

  useEffect(() => {
    if (reduceMotion) return;

    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      opacity.set(1);
      scale.set(1);
    };

    const handleLeave = () => {
      opacity.set(0);
      scale.set(0);
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    window.addEventListener("blur", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("blur", handleLeave);
    };
  }, [reduceMotion, mouseX, mouseY, opacity, scale]);

  if (reduceMotion) return null;

  return (
    <motion.div
      className="ryen-global-mouse"
      style={{
        x,
        y,
        opacity: smoothOpacity,
        scale: smoothScale,
      }}
      aria-hidden="true"
    />
  );
}
