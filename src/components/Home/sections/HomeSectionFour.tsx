import SectionTitle from "@/components/Common/SectionTitle";
import LetterGlitch from "@/components/LetterGlitch";

const checkIcon = (
    <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
        <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
    </svg>
);

const HomeSectionFour = () => {
    const List = ({ text }: { text: string }) => (
        <p className="mb-5 flex items-center text-lg font-medium text-white/70">
            <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md shrink-0">
                {checkIcon}
            </span>
            {text}
        </p>
    );

    return (
        <section id="features-four" className="pt-16 md:pt-20 lg:pt-28 bg-[#060607]">
            <div className="container">
                <div className="border-b border-white/[.1] pb-16 md:pb-20 lg:pb-28">
                    <div className="-mx-4 flex flex-wrap items-center">
                        {/* Animation column (Left on Desktop) */}
                        <div className="w-full px-4 lg:w-1/2 order-2 lg:order-1">
                            <div
                                className="relative mx-auto aspect-[1.5/1] max-w-[500px] lg:ml-0"
                                style={{
                                    clipPath: "polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)",
                                    overflow: "hidden",
                                }}
                            >
                                <LetterGlitch
                                    glitchColors={["#f2721c", "#fff47a", "#f9a443"]}
                                    glitchSpeed={40}
                                    centerVignette
                                    outerVignette
                                    smooth
                                />
                            </div>
                        </div>

                        {/* Text column (Right on Desktop) */}
                        <div className="w-full px-4 lg:w-1/2 order-1 lg:order-2">
                            <SectionTitle
                                title="CycloSpace"
                                paragraph="Creation of rigid, structurally defined macrocycles with optimized binding, stability, and permeability through the use of a library of rationally selected non-canonical amino acids."
                                mb="44px"
                                dark
                            />
                            <div className="mb-12 max-w-[570px] lg:mb-0">
                                <div className="mx-[-12px] flex flex-wrap">
                                    <div className="w-full px-3">
                                        <List text="Design based on both structure-dependent and sequence-oriented approaches" />
                                        <List text="Development of molecular glues that promote target degradation or enhanced interaction with PPI partners" />
                                        <List text="Application to highly complex undruggable targets" />
                                        <List text="Unique technical solutions for tissue-selective peptides" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSectionFour;

