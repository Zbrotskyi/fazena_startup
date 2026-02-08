"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const RNAHunter = () => {
    return (
        <section className="relative z-10 py-16 md:py-20 lg:py-28 bg-[#060607]">
            <div className="absolute inset-x-0 top-0 -z-10 w-full flex justify-center">
                <Image
                    src="/images/video/shape.svg"
                    alt="Background shape"
                    width={1920}
                    height={400}
                    className="w-auto h-auto max-w-none"
                    priority
                />
            </div>
            <div className="container relative">
                <SectionTitle
                    title="RNA Hunter"
                    paragraph="Obtaining the spatial structure of non-coding RNAs and finding therapeutic small molecules for this target. Modelling in intracellular conditions, molecular dynamics, refinement of the lead molecule using QM/MM methods, calculation of free binding energy and other parameters. The platform is not limited by target length."
                    center
                    width="900px"
                    mb="80px"
                />

                <div className="relative">
                    <div className="mx-auto max-w-[900px]">
                        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                            <Image
                                src="/images/video/image.png"
                                alt="RNA Hunter platform screenshot"
                                width={1280}
                                height={720}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RNAHunter;
