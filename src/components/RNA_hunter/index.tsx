import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

export default function RNAHunter() {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 bg-[#060607]">
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
          <div className="mx-auto max-w-[1100px]">
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
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
    </section>
  );
}
