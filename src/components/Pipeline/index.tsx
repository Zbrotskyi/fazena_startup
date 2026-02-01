import SectionTitle from "../Common/SectionTitle";
import SingleTrack from "./SingleTrack";
import pipelineData from "./pipelineData";

const Pipeline = () => {
    return (
        <section id="pipeline" className="py-16 md:py-20 lg:py-28 bg-[#060607]">
            <div className="container">
                <SectionTitle
                    title="Projects in Development"
                    paragraph="We are actively advancing multiple initiatives across drug discovery, platform development, and strategic partnerships to revolutionize therapeutic design."
                    center
                    dark
                />

                <div className="flex flex-col gap-8">
                    {pipelineData.map((track) => (
                        <SingleTrack key={track.id} track={track} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pipeline;
