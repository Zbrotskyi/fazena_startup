import Link from "next/link";

const rolesData = [
    {
        title: "Bioinformatician",
        description: "Analyze genomic and transcriptomic data to identify novel drug targets",
        applyLink: "mailto:careers@fazena.com?subject=Application: Bioinformatician",
    },
    {
        title: "Computational Chemist",
        description: "Design and optimize small molecule drug candidates using molecular modeling",
        applyLink: "mailto:careers@fazena.com?subject=Application: Computational Chemist",
    },
    {
        title: "Synthetic Biologist",
        description: "Engineer biological systems for experimental validation of computational predictions",
        applyLink: "mailto:careers@fazena.com?subject=Application: Synthetic Biologist",
    },
    {
        title: "ML Engineer",
        description: "Develop machine learning models for molecular property prediction and generative design",
        applyLink: "mailto:careers@fazena.com?subject=Application: ML Engineer",
    },
    {
        title: "General Interest",
        description: "Don't see your role? We're always looking for exceptional talent",
        applyLink: "mailto:careers@fazena.com?subject=Application: General Interest",
    },
];

const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L13 1M13 1H1M13 1V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const JoinUs = () => {
    return (
        <section className="bg-[#060607] pt-36 pb-20 md:pt-40 md:pb-28">
            <div className="container max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Join Our Team
                    </h1>
                    <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-3xl">
                        We're building the future of drug discovery at the intersection of computation and biology.
                        If you're driven by scientific curiosity, thrive in interdisciplinary environments, and want
                        to make a real impact on human health — we'd love to hear from you. We value strong
                        fundamentals in your field, a collaborative mindset, and the courage to tackle unsolved problems.
                    </p>
                </div>

                {/* Roles Table */}
                <div className="w-full">
                    {/* Table header */}
                    <div className="flex items-center justify-between px-0 pb-3 border-b border-white/[0.15]">
                        <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/40">
                            Role
                        </span>
                    </div>

                    {/* Role rows */}
                    {rolesData.map((role, index) => (
                        <div
                            key={index}
                            className="group flex items-center justify-between py-6 border-b border-white/[0.08] hover:border-white/[0.2] transition-colors duration-300"
                        >
                            <div className="flex-1 min-w-0">
                                <h3 className="text-xl md:text-2xl font-medium text-white group-hover:text-white/90 transition-colors">
                                    {role.title}
                                </h3>
                                <p className="mt-1 text-sm text-white/40 hidden md:block">
                                    {role.description}
                                </p>
                            </div>
                            <a
                                href={role.applyLink}
                                className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-white/50 hover:text-[#ea7414] transition-colors duration-300 shrink-0 ml-4"
                            >
                                Apply Now
                                <ArrowIcon />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-white/40 text-sm">
                        Send your CV and a brief cover letter to{" "}
                        <a href="mailto:careers@fazena.com" className="text-[#ea7414] hover:underline">
                            careers@fazena.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default JoinUs;
