const AboutContent = () => {
    return (
        <section className="bg-[#060607] pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
            <div className="container">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center">
                        <h2 className="mb-8 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                            About us
                        </h2>
                        <div className="prose prose-lg prose-invert mx-auto">
                            <p className="mb-6 text-lg leading-relaxed text-white/80 sm:text-xl">
                                FAZENA was founded by Yegor Franchuk, Anatolii Zbrotsky, and Dmytro Alexandrovych in August 2025 during their participation in a workshop on natural compounds organized by CENtR and Explogen LLC. Later, the core team expanded with the addition of Yevhenii Zhuromskyi.
                            </p>
                            <p className="mb-6 text-lg leading-relaxed text-white/80 sm:text-xl">
                                In December 2025, we won the Neuro Impact Challenge competition, gaining recognition from YURiA-PHARM, the Ministry of Science and Education of Ukraine, and the IP office. We presented part of our project, the design of the design of a molecular modulator of Phospholipid-transporting ATPase ABCA7 for the treatment of Alzheimer's disease associated with certain mutations.
                            </p>
                            <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
                                FAZENA is a team of young, ambitious Ukrainian specialists who are continuously advancing their expertise in the field of drug development, biotechnology, pharmacology, and bioinformatics. We have brought together representatives from various Ukrainian universities (Kyiv, Lviv, Odesa) and institutes of the Academy of Sciences for a common goal.
                            </p>
                            <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
                                Since then, we continue to develop both this project and the team's overall vision - to build an innovative, strong pharmaceutical industry in Ukraine, covering all stages of drug development: in silico, in vitro, in vivo, clinical trials, market entry, and monitoring of side effects after product release.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutContent;
