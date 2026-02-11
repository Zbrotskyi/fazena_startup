"use client";

import Link from "next/link";
import LaserFlow from "./LaserFlow";
import GridScan from "./GridScan";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <section
        id="home"
        className={`relative z-10 bg-[#060607] pb-16 pt-[160px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] ${isMobile ? "" : "overflow-hidden"
          }`}
      >
        <div
          className={`absolute z-[-1] ${isMobile
            ? "inset-0 -bottom-[100vh]"
            : "inset-0 overflow-hidden"
            }`}
          style={isMobile ? {
            maskImage: 'linear-gradient(to bottom, black 0%, black 65%, transparent 85%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 65%, transparent 85%)'
          } : {}}
        >
          {isMobile ? (
            <GridScan
              sensitivity={0.55}
              lineThickness={1}
              linesColor="#392e4e"
              gridScale={0.1}
              scanColor="#f7931a"
              scanOpacity={0.25}
              enablePost
              bloomIntensity={0.4}
              chromaticAberration={0.002}
              noiseIntensity={0.01}
            />
          ) : (
            <LaserFlow
              color="#f7931a"
              wispDensity={1.6}
              flowSpeed={0.35}
              verticalSizing={3.2}
              horizontalSizing={3}
              fogIntensity={1}
              fogScale={0.35}
              wispSpeed={23}
              wispIntensity={10.5}
              flowStrength={0.6}
              decay={1.8}
              horizontalBeamOffset={0.25}
              verticalBeamOffset={-0.2}
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060607] to-transparent z-10" />
        </div>
        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="max-w-[800px] text-left">
                <h1 className="mb-5 text-5xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight md:text-5xl md:leading-tight font-audiowide">
                  <div>Computed.</div>
                  <div>Synthesized.</div>
                  <div>Validated.</div>
                </h1>
                <p className="mb-12 text-base leading-relaxed! text-white/70 sm:text-lg md:text-xl">
                  We're building silicon-to-cell integration that collapses traditional discovery timelines
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
