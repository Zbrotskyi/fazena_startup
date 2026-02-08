"use client";
import { PipelineTrack } from "@/types/pipeline";
import "./SingleTrack.css";

const SingleTrack = ({ track }: { track: PipelineTrack }) => {
    const { name, description, stages, projects, icon } = track;

    return (
        <div className="ui-btc-card">
            {/* Background with gradients */}
            <div className="ui-btc-card__bg" />

            {/* Inner content */}
            <div className="ui-btc-card__inner">
                {/* Top section with icon and title */}
                <div className="ui-btc-card__top">
                    {/* Icon */}
                    <div className="ui-btc-card__icon">
                        {icon}
                    </div>

                    {/* Titles */}
                    <div className="ui-btc-card__titles">
                        <span className="ui-btc-card__pair">
                            {name}
                        </span>
                        <span className="ui-btc-card__sub">
                            {description}
                        </span>
                    </div>
                </div>

                {/* Projects table with stages */}
                <div className="ui-btc-card__mid">
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
                                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${stageIdx < project.currentStage
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
        </div>
    );
};

export default SingleTrack;

