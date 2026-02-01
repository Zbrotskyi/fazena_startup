import SectionTitle from "../Common/SectionTitle";
import SingleTrack from "./SingleTrack";
import pipelineData from "./pipelineData";

const Pipeline = () => {
    return (
        <section id="pipeline" className="relative py-16 md:py-20 lg:py-28">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-yellow/5 blur-3xl" />
            </div>

            <div className="container">
                <SectionTitle
                    title="Projects in Development"
                    paragraph="We are advancing multiple programs across drug discovery, technology platforms, and strategic partnerships to deliver breakthrough solutions."
                    center
                />

                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
                    {pipelineData.map((track) => (
                        <SingleTrack key={track.id} track={track} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pipeline;
