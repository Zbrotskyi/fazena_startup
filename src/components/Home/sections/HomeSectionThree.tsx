import SectionTitle from "@/components/Common/SectionTitle";
import LetterGlitch from "@/components/LetterGlitch";
import CycloSpaceCard from "./CycloSpaceCard";

const HomeSectionThree = () => {
    return (
        <section id="features-three" className="pt-16 md:pt-20 lg:pt-28 bg-[#060607]">
            <div className="container">
                <div className="border-b border-white/[.1] pb-16 md:pb-20 lg:pb-28">
                    <div className="-mx-4 flex flex-wrap items-center">
                        {/* Animation column (Left on Desktop) */}
                        <div className="w-full px-4 lg:w-1/2 order-2 lg:order-1 flex justify-center relative min-h-[400px]">
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
                                <CycloSpaceCard />
                            </div>
                        </div>

                        {/* Text column (Right on Desktop) */}
                        <div className="w-full px-4 lg:w-1/2 order-1 lg:order-2">
                            <SectionTitle
                                title="Our Innovation"
                                paragraph="We push the boundaries of what's possible in drug discovery by combining high-performance computing with cutting-edge experimental methodologies. Our team is dedicated to uncovering novel solutions for the most challenging biological targets, ensuring a future where medicine is more precise and effective."
                                mb="44px"
                                dark
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSectionThree;

