"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import GradualBlur from "../Common/GradualBlur";

const RNAHunter = () => {
  return (
    <section id="rnahunter" className="relative z-10 py-16 md:py-20 lg:py-28 bg-[#060607]">
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

      <div className="relative mx-auto max-w-[1000px] px-4">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b10] shadow-2xl">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/video/image.png"
              alt="RNA Hunter Platform Screenshot"
              className="object-cover"
              fill
              priority
            />

            {/* Gradual Blur Effect at the bottom */}
            <GradualBlur
              preset="bottom"
              height="40%"
              strength={3}
              opacity={0.9}
            />
          </div>
        </div>

        {/* Decorative background shape */}
        <div className="absolute -bottom-20 -left-20 z-[-1] h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute -top-20 -right-20 z-[-1] h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>
    </section>
  );
};

export default RNAHunter;

