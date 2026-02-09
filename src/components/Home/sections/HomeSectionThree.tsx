import SectionTitle from "@/components/Common/SectionTitle";
import LetterGlitch from "@/components/LetterGlitch";

const HomeSectionThree = () => {
    return (
        <section id="features-three" className="pt-16 md:pt-20 lg:pt-28 bg-[#060607]">
            <div className="container">
                <div className="border-b border-white/[.1] pb-16 md:pb-20 lg:pb-28">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4 lg:w-1/2">
                            <SectionTitle
                                title="Our Innovation"
                                paragraph="We push the boundaries of what's possible in drug discovery by combining high-performance computing with cutting-edge experimental methodologies. Our team is dedicated to uncovering novel solutions for the most challenging biological targets, ensuring a future where medicine is more precise and effective."
                                mb="44px"
                                dark
                            />
                        </div>

                        <div className="w-full px-4 lg:w-1/2">
                            <div
                                className="relative mx-auto aspect-[1.5/1] max-w-[500px] lg:mr-0"
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSectionThree;
