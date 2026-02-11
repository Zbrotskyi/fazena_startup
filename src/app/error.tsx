"use client";

import { useEffect } from "react";
import Link from "next/link";
import FuzzyText from "@/components/Common/FuzzyText";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <section className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden bg-[#060607] py-16 md:py-20 lg:py-28">
            <div className="container">
                <div className="mx-auto max-w-[600px] text-center">
                    <div className="mb-8 flex justify-center">
                        <FuzzyText
                            baseIntensity={0.3}
                            hoverIntensity={0.7}
                            enableHover
                            color="#ff4d4d"
                            fontWeight={900}
                        >
                            ERR
                        </FuzzyText>
                    </div>

                    <h1 className="mb-5 text-3xl font-bold text-white sm:text-4xl md:text-[45px] leading-tight">
                        System Breach Detected
                    </h1>
                    <p className="mb-10 text-base font-medium leading-relaxed text-white/50 sm:text-lg">
                        An unexpected error occurred in our computation pipeline. Our team has been notified.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => reset()}
                            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-9 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-white/10"
                        >
                            Reboot Pipeline
                        </button>
                        <Link
                            href="/"
                            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#ea7414] px-9 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-[#d66712] hover:shadow-[0_0_20px_rgba(234,116,20,0.3)]"
                        >
                            Emergency Evac
                        </Link>
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 left-0 -z-10 h-full w-full opacity-20">
                <div className="absolute top-[20%] right-[15%] h-[300px] w-[300px] rounded-full bg-[#ff4d4d]/10 blur-[120px]" />
                <div className="absolute bottom-[20%] left-[15%] h-[400px] w-[400px] rounded-full bg-[#ff4d4d]/5 blur-[150px]" />
            </div>
        </section>
    );
}
