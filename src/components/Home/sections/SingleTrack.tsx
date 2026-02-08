"use client";
import { PipelineTrack } from "@/types/pipeline";

const SingleTrack = ({ track }: { track: PipelineTrack }) => {
    const { name, description, stages, projects, icon } = track;

    return (
        <div className="pipeline-card group relative w-full overflow-hidden rounded-[1.55em] transition-all duration-300 hover:-translate-y-[0.12em]">
            {/* Background with gradients */}
            <div className="pipeline-card__bg absolute inset-0 rounded-[inherit] pointer-events-none" />

            {/* Inner content */}
            <div className="relative p-6 md:p-8 text-white/90">
                {/* Top section with icon and title */}
                <div className="flex items-center gap-4 pb-5 border-b border-white/[0.085]">
                    {/* Icon */}
                    <div className="pipeline-card__icon relative flex h-14 w-14 items-center justify-center rounded-[1.18em] text-2xl overflow-hidden shrink-0">
                        {icon}
                    </div>

                    {/* Titles */}
                    <div className="flex-1 min-w-0">
                        <span className="block font-mono font-extrabold text-sm tracking-[0.22em] uppercase text-[rgba(255,215,170,0.86)] whitespace-nowrap overflow-hidden text-ellipsis">
                            {name}
                        </span>
                        <span className="block mt-1 font-mono font-semibold text-xs tracking-[0.14em] lowercase text-white/50">
                            {description}
                        </span>
                    </div>
                </div>

                {/* Projects table with stages */}
                <div className="mt-6">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/[0.08]">
                                    <th className="pb-3 text-left text-xs font-mono font-semibold text-white/50 tracking-wider">
                                        Project
                                    </th>
                                    {stages.map((stage, index) => (
                                        <th 
                                            key={index}
                                            className="px-2 pb-3 text-center text-xs font-mono font-semibold text-white/50 tracking-wider"
                                        >
                                            {stage}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((project, idx) => (
                                    <tr key={idx} className="border-b border-white/[0.05] last:border-0">
                                        <td className="py-4 pr-4 text-sm font-medium text-white/90 whitespace-nowrap">
                                            {project.name}
                                        </td>
                                        {stages.map((_, stageIdx) => (
                                            <td key={stageIdx} className="px-2 py-4">
                                                <div className="flex justify-center">
                                                    <div 
                                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                                            stageIdx < project.currentStage 
                                                                ? 'bg-[#ffd7aa] shadow-[0_0_10px_rgba(255,215,170,0.4)]' 
                                                                : 'bg-white/10'
                                                        }`}
                                                    />
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .pipeline-card {
                    background: linear-gradient(135deg, rgba(22, 22, 26, 0.8) 0%, rgba(32, 32, 36, 0.8) 100%);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
                }
                
                .pipeline-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
                }
                
                .pipeline-card__bg {
                    background: radial-gradient(
                        100% 100% at 100% 0%,
                        rgba(255, 215, 170, 0.06) 0%,
                        rgba(0, 0, 0, 0) 100%
                    );
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .pipeline-card:hover .pipeline-card__bg {
                    opacity: 1;
                }
                
                .pipeline-card__icon {
                    background: linear-gradient(135deg, rgba(255, 215, 170, 0.1) 0%, rgba(255, 215, 170, 0.05) 100%);
                    border: 1px solid rgba(255, 215, 170, 0.1);
                    color: #ffd7aa;
                    transition: all 0.3s ease;
                }
                
                .pipeline-card:hover .pipeline-card__icon {
                    transform: scale(1.05);
                    box-shadow: 0 0 15px rgba(255, 215, 170, 0.2);
                }
            `}</style>
        </div>
    );
};

export default SingleTrack;
