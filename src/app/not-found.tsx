import Link from "next/link";
import FuzzyText from "@/components/Common/FuzzyText";

const NotFound = () => {
    return (
        <section className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden bg-[#060607] py-16 md:py-20 lg:py-28">
            <div className="container">
                <div className="mx-auto max-w-[600px] text-center">
                    <div className="mb-8 flex justify-center">
                        <FuzzyText
                            baseIntensity={0.2}
                            hoverIntensity={0.6}
                            enableHover
                            color="#ea7414"
                            fontWeight={900}
                        >
                            404
                        </FuzzyText>
                    </div>

                    <h1 className="mb-5 text-3xl font-bold text-white sm:text-4xl md:text-[45px] leading-tight">
                        Experiment Failed
                    </h1>
                    <p className="mb-10 text-base font-medium leading-relaxed text-white/50 sm:text-lg">
                        The bio-sequence you are looking for does not exist or has been moved to a restricted sector.
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-lg bg-[#ea7414] px-9 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-[#d66712] hover:shadow-[0_0_20px_rgba(234,116,20,0.3)]"
                    >
                        Return to Lab
                    </Link>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 left-0 -z-10 h-full w-full opacity-20">
                <div className="absolute top-[10%] left-[10%] h-[300px] w-[300px] rounded-full bg-[#ea7414]/10 blur-[120px]" />
                <div className="absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-[#ea7414]/5 blur-[150px]" />
            </div>
        </section>
    );
};

export default NotFound;
