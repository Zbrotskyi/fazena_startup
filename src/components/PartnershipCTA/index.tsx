import Link from "next/link";

const PartnershipCTA = () => {
    return (
        <section className="bg-[#060607] py-16 md:py-20 border-t border-white/[0.05]">
            <div className="container">
                <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-audiowide uppercase tracking-wider">
                        Partner with us!
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 mb-8">
                        Join forces with FAZENA to accelerate drug discovery. Whether you're a research institution, pharmaceutical company, or biotech venture, let's collaborate to transform computational predictions into validated therapeutics.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ea7414] px-8 py-4 text-base font-medium text-white transition duration-300 hover:bg-[#d66712] hover:shadow-lg hover:shadow-[#ea7414]/20"
                    >
                        Start a Conversation
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.5 11.6665V15.8332C17.5 16.2752 17.3244 16.6992 17.0118 17.0118C16.6993 17.3243 16.2754 17.4998 15.8333 17.4998H4.16667C3.72464 17.4998 3.30072 17.3243 2.98816 17.0118C2.67559 16.6992 2.5 16.2752 2.5 15.8332V4.1665C2.5 3.72447 2.67559 3.30055 2.98816 2.98799C3.30072 2.67542 3.72464 2.49984 4.16667 2.49984H8.33333"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12.5 2.5H17.5V7.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.33333 11.6667L17.5 2.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PartnershipCTA;
