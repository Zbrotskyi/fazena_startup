"use client";

import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import SectionTitle from "../Common/SectionTitle";

export default function RNAHunter() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const [revealProgress, setRevealProgress] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !stickyContainerRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Determine when section bottom reaches viewport bottom (start of reveal)
      const sectionBottom = sectionRect.bottom;
      const sectionTop = sectionRect.top;

      // Calculate how far we've scrolled into the "reveal zone"
      // Reveal starts when section bottom is at viewport bottom
      // Reveal ends when section top is at viewport top (section is fully in view from top)

      const revealZoneHeight = sectionRect.height - windowHeight;
      const scrolledIntoSection = -sectionTop;

      if (sectionTop <= 0 && sectionBottom >= windowHeight) {
        // Section is filling the viewport - we're in the locked state
        const progress = Math.max(0, Math.min(1, scrolledIntoSection / revealZoneHeight));
        setRevealProgress(progress);
        setIsLocked(progress > 0 && progress < 1);
      } else if (sectionTop > 0) {
        // Haven't reached the section yet
        setRevealProgress(0);
        setIsLocked(false);
      } else {
        // Scrolled past the section
        setRevealProgress(1);
        setIsLocked(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Screenshot blur and opacity based on reveal progress
  const blurAmount = Math.max(0, 20 * (1 - revealProgress));
  const screenshotOpacity = revealProgress;
  const screenshotScale = 0.9 + revealProgress * 0.1;
  const screenshotY = (1 - revealProgress) * 100; // Starts 100% down, ends at 0

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-[#060607]"
      style={{ height: '200vh' }} // Extra height for scroll-locking effect
    >
      {/* Sticky container that stays in view during scroll */}
      <div
        ref={stickyContainerRef}
        className="sticky top-0 min-h-screen flex flex-col"
      >
        {/* Title section */}
        <div className="container pt-16 md:pt-20 lg:pt-28">
          <SectionTitle
            title="RNA Hunter"
            paragraph="Obtaining the spatial structure of non-coding RNAs and finding therapeutic small molecules for this target. Modelling in intracellular conditions, molecular dynamics, refinement of the lead molecule using QM/MM methods, calculation of free binding energy and other parameters. The platform is not limited by target length."
            center
            mb="40px"
            dark
            width="900px"
          />
        </div>

        {/* Visual container */}
        <div className="flex-1 relative overflow-hidden">
          {/* Background shape - always visible, full width */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/video/shape.svg"
              alt="Background shape"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Screenshot container - emerges from blur */}
          <div
            className="absolute inset-x-0 bottom-0 flex items-end justify-center pb-8 md:pb-16"
            style={{
              transform: `translateY(${screenshotY}%)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="container">
              <div
                className="mx-auto max-w-[850px] overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                style={{
                  opacity: screenshotOpacity,
                  filter: `blur(${blurAmount}px)`,
                  transform: `scale(${screenshotScale})`,
                  transition: 'opacity 0.1s ease-out, filter 0.15s ease-out, transform 0.1s ease-out'
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
