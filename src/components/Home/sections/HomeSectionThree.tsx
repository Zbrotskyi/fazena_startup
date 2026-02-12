import SectionTitle from "@/components/Common/SectionTitle";
import LetterGlitch from "@/components/LetterGlitch";
import FazNeuroCard from "./FazNeuroCard";

const HomeSectionThree = () => {
    return (
        <section id="features-three" className="pt-16 md:pt-20 lg:pt-28 bg-[#060607]">
            <div className="container">
                <div className="border-b border-white/[.1] pb-16 md:pb-20 lg:pb-28">
                    <div className="-mx-4 flex flex-wrap items-center">
                        {/* Text column (Left on Desktop) */}
                        <div className="w-full px-4 lg:w-1/2 order-1 lg:order-1">
                            <SectionTitle
                                title="Our Innovation"
                                paragraph="An innovative approach in the design of the ABCA7 modulator was the use of modern tools that utilize transformers and deep neural networks to obtain the structures of mutant forms of this transporter protein. We achieved high-quality structures, which allowed us to further use this for molecular docking and dynamics, calculating binding and dissociation constants. At this stage, we are optimizing leads and expanding our understanding of what other genetic features and relationships between mutations of this protein and drug development may exist. We have now begun work on publishing a series of articles in scientific journals. Our work was highly praised at the Neuro Impact Challenge, where we took first place."
                                mb="44px"
                                dark
                            />
                        </div>

                        {/* Animation column (Right on Desktop) */}
                        <div className="w-full px-4 lg:w-1/2 order-2 lg:order-2 flex justify-center relative min-h-[400px]">
                            <div className="absolute inset-0 z-0 opacity-40">
                                <LetterGlitch
                                    glitchColors={["#f2721c", "#fff47a", "#f9a443"]}
                                    glitchSpeed={40}
                                    centerVignette
                                    outerVignette
                                    smooth
                                />
                            </div>
                            <div className="relative z-10 w-full flex justify-center items-center">
                                <FazNeuroCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSectionThree;

