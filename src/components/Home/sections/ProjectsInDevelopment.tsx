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

                <div className="flex flex-col md:flex-col lg:flex-col gap-8 md:gap-8 overflow-x-auto no-scrollbar mobile-scroll-container">
                    <div className="flex flex-row md:flex-col gap-8 w-max md:w-full">
                        {projectsData.map((track) => (
                            <SingleTrack key={track.id} track={track} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsInDevelopment;
