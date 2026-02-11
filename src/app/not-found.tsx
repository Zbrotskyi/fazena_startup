import Link from "next/link";
import FuzzyText from "@/components/Common/FuzzyText";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 - Page Not Found | FAZENA",
    description: "The page you are looking for does not exist.",
};

const NotFound = () => {
    return (
        <section className="relative z-10 min-h-screen flex items-center justify-center bg-[#060607] overflow-hidden">
            {/* Background patterns copied from previous sections for consistency */}
            <div className="absolute inset-0 z-[-1] opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#ea7414_0%,transparent_25%)] opacity-20" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,#ea7414_0%,transparent_25%)] opacity-10" />
            </div>

            <div className="container">
                <div className="flex flex-wrap -mx-4 justify-center">
                    <div className="w-full px-4">
                        <div className="mx-auto max-w-[600px] text-center">
                            <div className="mb-10 flex justify-center">
                                <FuzzyText
                                    baseIntensity={0.2}
                                    hoverIntensity={0.5}
                                    enableHover
                                    glitchMode={true}
                                    fontSize="clamp(5rem, 20vw, 15rem)"
                                    fontWeight={900}
                                    color="#ea7414"
                                >
                                    404
                                </FuzzyText>
                            </div>

                            <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                                Page Not Found
                            </h1>

                            <p className="mb-12 text-base font-medium leading-relaxed text-white/50 sm:text-lg">
                                The section of the digital universe you are trying to reach
                                appears to have vanished or moved to a different coordinate.
                            </p>

                            <Link
                                href="/"
                                className="inline-flex items-center justify-center rounded-lg bg-[#ea7414] px-9 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-[#d66712] hover:shadow-[0_0_20px_rgba(234,116,20,0.4)]"
                            >
                                Return to Mission Control
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
