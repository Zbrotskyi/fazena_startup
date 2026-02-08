import SectionTitle from "@/components/Common/SectionTitle";
import SingleTrack from "./SingleTrack";
import projectsData from "./projectsData";

const ProjectsInDevelopment = () => {
    return (
        <section id="projects" className="py-16 md:py-20 lg:py-28 bg-[#0a0a0b] relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] to-[#0f0f12] opacity-90" />
            
            <div className="container relative z-10">
                <SectionTitle
                    title="Projects in Development"
                    paragraph="We are actively advancing three strategic initiatives: developing novel therapeutics for neurodegenerative diseases, cancer, and diabetes; building integrated in silico and in vivo platforms to power our unified drug discovery pipeline; and partnering with pharmaceutical companies on targeted research projects."
                    center
                    dark
                />

                <div className="mt-12 space-y-8 max-w-6xl mx-auto">
                    {projectsData.map((track) => (
                        <div key={track.id} className="transform transition-all duration-300 hover:scale-[1.01]">
                            <SingleTrack track={track} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsInDevelopment;
