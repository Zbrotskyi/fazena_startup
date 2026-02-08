"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import SectionTitle from "../Common/SectionTitle";

export default function RNAHunter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealProgress, setRevealProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the section
      const revealZoneHeight = sectionRect.height - windowHeight;
      const scrolledIntoSection = -sectionRect.top;

      if (sectionRect.top <= 0 && sectionRect.bottom >= windowHeight) {
        // Section is filling the viewport
        const progress = Math.max(0, Math.min(1, scrolledIntoSection / revealZoneHeight));
        setRevealProgress(progress);
      } else if (sectionRect.top > 0) {
        setRevealProgress(0);
      } else {
        setRevealProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Screenshot animation values
  const blurAmount = Math.max(0, 20 * (1 - revealProgress));
  const screenshotOpacity = revealProgress;
  const screenshotScale = 0.92 + revealProgress * 0.08;
  const screenshotY = (1 - revealProgress) * 80; // percentage offset

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-[#060607]"
      style={{ height: '200vh' }}
    >
      {/* Sticky wrapper */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Title section - fixed at top with reduced padding */}
        <div className="relative z-20 pt-8 md:pt-12 lg:pt-16 pb-4">
          <div className="container">
            <SectionTitle
              title="RNA Hunter"
              paragraph="Obtaining the spatial structure of non-coding RNAs and finding therapeutic small molecules for this target. Modelling in intracellular conditions, molecular dynamics, refinement of the lead molecule using QM/MM methods, calculation of free binding energy and other parameters. The platform is not limited by target length."
              center
              mb="0px"
              dark
              width="900px"
            />
          </div>
        </div>

        {/* Spacer to push visual area lower */}
        <div className="h-8 md:h-12 lg:h-16" />

        {/* Visual area - below text with more spacing */}
        <div className="relative flex-1" style={{ height: 'calc(100vh - 220px)' }}>

          {/* Background shape - FULL WIDTH, no container */}
          <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2">
            <Image
              src="/images/video/shape.svg"
              alt="Background shape"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Screenshot area - centered in the visual zone */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-full max-w-[850px] mx-auto px-4"
              style={{
                transform: `translateY(${screenshotY}%)`,
                transition: 'transform 0.05s linear'
              }}
            >
              <div
                className="overflow-hidden rounded-2xl border border-white/[0.1] shadow-[0_25px_80px_rgba(0,0,0,0.7)]"
                style={{
                  opacity: screenshotOpacity,
                  filter: `blur(${blurAmount}px)`,
                  transform: `scale(${screenshotScale})`,
                  transition: 'opacity 0.05s linear, filter 0.1s linear, transform 0.05s linear'
                }}
              >
                <Image
                  src="/images/video/image.png"
                  alt="RNA Hunter platform screenshot"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
