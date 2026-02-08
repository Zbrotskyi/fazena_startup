"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import GradualBlur from "../GradualBlur";

export default function RNAHunter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollerHeight = containerRef.current.offsetHeight;

      // Calculate progress relative to the container's height
      const totalScrollable = scrollerHeight - windowHeight;
      let p = -rect.top / totalScrollable;
      p = Math.max(0, Math.min(1, p));
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Stage mapping:
  // 0 - 0.2: Shape visible, screenshot hidden
  // 0.2 - 0.8: Screenshot emerges from blur and moves up
  const shapeOpacity = progress < 0.2 ? 1 : Math.max(0, 1 - (progress - 0.2) * 5);

  const revealProgress = Math.max(0, Math.min(1, (progress - 0.2) / 0.6));
  const screenshotOpacity = revealProgress;
  const blurAmount = (1 - revealProgress) * 30;
  const translateY = (1 - revealProgress) * 100; // Slide up from below
  const scale = 0.9 + revealProgress * 0.1;

  return (
    <section
      ref={containerRef}
      className="relative z-10 h-[250vh] bg-[#060607]"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container">
          <SectionTitle
            title="RNA Hunter"
            paragraph="Obtaining the spatial structure of non-coding RNAs and finding therapeutic small molecules for this target. Modelling in intracellular conditions, molecular dynamics, refinement of the lead molecule using QM/MM methods, calculation of free binding energy and other parameters. The platform is not limited by target length."
            center
            mb="60px"
            dark
            width="900px"
          />
        </div>

        <div className="relative w-full h-[500px]">
          <div className="container px-4">
            <div className="mx-auto max-w-[900px] relative h-full">
              {/* Background shape - stationery exposure */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ opacity: shapeOpacity }}
              >
                <Image
                  src="/images/video/shape.svg"
                  alt="Background shape"
                  width={900}
                  height={500}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Screenshot container with scroll-based reveal */}
              <div
                className="relative overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-[#0b0b10] pointer-events-none"
                style={{
                  opacity: screenshotOpacity,
                  filter: `blur(${blurAmount}px)`,
                  transform: `scale(${scale}) translateY(${translateY}px)`
                }}
              >
                <Image
                  src="/images/video/image.png"
                  alt="RNA Hunter platform screenshot"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />

                <GradualBlur
                  target="parent"
                  position="top"
                  height="5rem"
                  strength={2}
                  divCount={5}
                  curve="bezier"
                  exponential
                  opacity={0.8}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
