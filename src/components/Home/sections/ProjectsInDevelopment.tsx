import SectionTitle from "@/components/Common/SectionTitle";
import SingleTrack from "./SingleTrack";
import projectsData from "./projectsData";

const ProjectsInDevelopment = () => {
    return (
        <section id="projects" className="py-16 md:py-20 lg:py-28 bg-[#060607]">
            <div className="container">
                <SectionTitle
                    title="Projects in Development"
                    paragraph="We are actively advancing three strategic initiatives: developing novel therapeutics for neurodegenerative diseases, cancer, and diabetes; building integrated in silico and in vivo platforms to power our unified drug discovery pipeline; and partnering with pharmaceutical companies on targeted research projects."
                    center
                    dark
                    width="900px"
                />


                {/* Desktop: vertical stack */}
                <div className="hidden md:flex flex-col gap-8">
                    {projectsData.map((track) => (
                        <SingleTrack key={track.id} track={track} />
                    ))}
                </div>

                {/* Mobile: horizontal scroll */}
                <div className="md:hidden overflow-x-auto overflow-y-visible pb-4 -mx-4 px-4">
                    <div className="flex gap-6 snap-x snap-mandatory">
                        {projectsData.map((track) => (
                            <div key={track.id} className="snap-start min-w-[340px] max-w-[90vw]">
                                <SingleTrack track={track} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsInDevelopment;
