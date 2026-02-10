"use client";

import Link from "next/link";
import LaserFlow from "./LaserFlow";
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
        className="relative z-10 bg-[#060607] pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] lg:overflow-hidden overflow-x-hidden"
      >
        <div className={`absolute inset-0 ${isMobile ? "h-[140%]" : "h-full"} z-[-1]`}>
          <LaserFlow
            color="#f7931a"
            wispDensity={1.6}
            flowSpeed={0.35}
            verticalSizing={isMobile ? 12 : 3.2}
            horizontalSizing={isMobile ? 8 : 3}
            fogIntensity={1}
            fogScale={0.35}
            wispSpeed={23}
            wispIntensity={10.5}
            flowStrength={0.6}
            decay={1.8}
            horizontalBeamOffset={isMobile ? 0 : 0.25}
            verticalBeamOffset={isMobile ? 0 : -0.2}
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060607] to-transparent z-10" />
        </div>
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="max-w-[800px] text-left">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
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
