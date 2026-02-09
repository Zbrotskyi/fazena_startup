import SectionTitle from "@/components/Common/SectionTitle";

const AboutCentered = () => {
    return (
        <section className="bg-[#060607] py-16 md:py-20 lg:py-28 min-h-[60vh] flex items-center">
            <div className="container">
                <div className="max-w-[800px] mx-auto text-center">
                    <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-[45px] leading-tight">
                        Redefining Therapeutic Discovery <br />
                        <span className="text-[#F97316]">Through Computational Intelligence</span>
                    </h2>
                    <p className="text-base font-medium leading-relaxed text-white/60 sm:text-lg sm:leading-relaxed mb-10">
                        FAZENA is an end-to-end drug discovery platform that integrates
                        advanced quantum chemistry, machine learning, and experimental validation.
                        We are building the future of silicon-to-cell integration to collapse
                        traditional discovery timelines and bring life-saving therapies to
                        patients faster than ever before.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <div className="px-8 py-4 rounded-md border border-[#F97316] text-[#F97316] font-semibold text-lg hover:bg-[#F97316] hover:text-white transition-colors duration-300">
                            In Silico-to-Cell Integration
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCentered;
