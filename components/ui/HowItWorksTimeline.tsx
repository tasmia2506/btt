"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, animate, useMotionValue, useReducedMotion } from "motion/react";
import { Car } from "lucide-react";

const steps = [
  { n: "01", t: "Search & Choose", d: "Pick your trip type — local, outstation or one-way — then a vehicle." },
  { n: "02", t: "Select Destination", d: "Choose a route, or share your own itinerary with us." },
  { n: "03", t: "Send an Enquiry", d: "Get a transparent quote and a confirmed driver for your trip." },
];

export default function HowItWorksTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const scale = useMotionValue(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const top = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const clamped = Math.min(Math.max(latest, 0), 1);
    const idx = Math.min(steps.length - 1, Math.floor(clamped * steps.length));
    setActiveIndex((current) => {
      if (idx !== current && !prefersReducedMotion) {
        animate(scale, [1, 1.5, 1], { duration: 0.45, ease: "easeOut" });
      }
      return idx;
    });
  });

  return (
    <div ref={containerRef} className="relative max-w-3xl mx-auto text-left">
      <div className="absolute left-9 top-9 bottom-9 w-px bg-ice/20" aria-hidden="true" />
      <motion.div
        className="absolute left-9 -translate-x-1/2 z-10 w-16 h-16 rounded-full bg-lichen flex items-center justify-center text-slag shadow-[0_0_28px_-2px_var(--lichen)]"
        style={{ top, scale: prefersReducedMotion ? 1 : scale }}
        aria-hidden="true"
      >
        <Car size={28} />
      </motion.div>

      <div className="flex flex-col gap-20">
        {steps.map((step, i) => (
          <div key={step.n} className="pl-24 relative">
            <p
              className={`font-oswald text-7xl sm:text-8xl font-bold mb-4 transition-colors duration-300 ${
                i <= activeIndex ? "text-lichen" : "text-ice/30"
              }`}
            >
              {step.n}
            </p>
            <h3 className="font-oswald uppercase font-bold text-xl sm:text-2xl mb-3">{step.t}</h3>
            <p className="text-base text-ice/70 max-w-sm">{step.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
