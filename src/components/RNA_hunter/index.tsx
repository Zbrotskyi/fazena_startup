"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import GradualBlur from "../GradualBlur";

export default function RNAHunter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress (0 = section just entered view, 1 = section center in view)
      const progress = Math.max(0, Math.min(1, 1 - (rect.top / windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Screenshot opacity and blur based on scroll progress
  const screenshotOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.2) * 2));
  const blurAmount = Math.max(0, 20 - scrollProgress * 30);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-16 md:py-20 lg:py-28 bg-[#060607]"
    >
      <div className="container">
        <SectionTitle
          title="RNA Hunter"
          paragraph="Obtaining the spatial structure of non-coding RNAs and finding therapeutic small molecules for this target. Modelling in intracellular conditions, molecular dynamics, refinement of the lead molecule using QM/MM methods, calculation of free binding energy and other parameters. The platform is not limited by target length."
          center
          mb="80px"
          dark
          width="900px"
        />
      </div>

      <div className="relative">
        <div className="container">
          <div className="mx-auto max-w-[900px]">
            {/* Background shape - visible initially */}
            <div
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
              style={{ opacity: Math.max(0, 1 - scrollProgress * 1.5) }}
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
              className="relative overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-300"
              style={{
                opacity: screenshotOpacity,
                filter: `blur(${blurAmount}px)`,
                transform: `scale(${0.95 + scrollProgress * 0.05})`
              }}
            >
              <Image
                src="/images/video/image.png"
                alt="RNA Hunter platform screenshot"
                width={1920}
                height={1080}
                className="w-full h-auto object-contain"
              />

              {/* Top blur overlay */}
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
    </section>
  );
}
