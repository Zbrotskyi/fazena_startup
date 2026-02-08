import SectionTitle from "../Common/SectionTitle";
import pipelineData from "./pipelineData";

const Pipeline = () => {
    return (
        <section id="pipeline" className="py-16 md:py-20 lg:py-28 bg-[#0a0a0b]">
            <div className="container">
                <SectionTitle
                    title="Our Pipeline"
                    paragraph="Explore our comprehensive drug development pipeline, from early-stage discovery to clinical development."
                    center
                    dark
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pipelineData.map((track) => (
                        <div key={track.id} className="bg-[#111113] rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-white mb-4">{track.name}</h3>
                            <p className="text-gray-400 mb-4">{track.description}</p>
                            <div className="space-y-2">
                                {track.projects.map((project, idx) => (
                                    <div key={idx} className="flex items-center">
                                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                                        <span className="text-white">{project.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pipeline;
