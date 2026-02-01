import SectionTitle from "../Common/SectionTitle";
import SingleTrack from "./SingleTrack";
import pipelineData from "./pipelineData";

const Pipeline = () => {
    return (
        <section id="pipeline" className="py-16 md:py-20 lg:py-28">
            <div className="container">
                <SectionTitle
                    title="Projects in Development"
                    paragraph="We are actively advancing multiple initiatives across drug discovery, platform development, and strategic partnerships to revolutionize therapeutic design."
                    center
                />

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {pipelineData.map((track) => (
                        <SingleTrack key={track.id} track={track} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pipeline;
