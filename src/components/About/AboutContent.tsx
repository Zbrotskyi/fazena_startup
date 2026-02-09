const AboutContent = () => {
    return (
        <section className="bg-[#060607] py-20 md:py-28 lg:py-36">
            <div className="container">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center">
                        <h2 className="mb-8 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                            About FAZENA
                        </h2>
                        <div className="prose prose-lg prose-invert mx-auto">
                            <p className="mb-6 text-lg leading-relaxed text-white/80 sm:text-xl">
                                FAZENA is revolutionizing drug discovery by combining quantum chemistry with artificial intelligence.
                                Our mission is to accelerate the development of next-generation therapeutics through innovative
                                computational approaches.
                            </p>
                            <p className="mb-6 text-lg leading-relaxed text-white/80 sm:text-xl">
                                We leverage cutting-edge quantum chemistry algorithms and machine learning models to accelerate
                                drug discovery and development. Our team of experts is constantly pushing the boundaries of what's
                                possible in computational drug discovery.
                            </p>
                            <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
                                Our vision is to transform the pharmaceutical industry by making drug discovery faster, more
                                efficient, and more accessible. Through the power of computation and AI, we're building the
                                future of medicine.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutContent;
