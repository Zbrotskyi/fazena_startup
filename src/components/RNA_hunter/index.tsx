"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const RNAHunter = () => {
    return (
        <section className="relative z-10 py-16 md:py-20 lg:py-28 bg-[#060607]">
            <div className="container">
                <SectionTitle
                    title="RNA Hunter"
                    paragraph="Our proprietary platform for rapid RNA-targeting small molecule discovery. We combine high-throughput screening with advanced computational modeling to identify novel therapeutic candidates."
                    center
                    width="900px"
                    mb="80px"
                />

                <div className="relative">
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
};

export default RNAHunter;
