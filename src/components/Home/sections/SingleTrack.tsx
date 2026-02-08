"use client";
import { PipelineTrack } from "@/types/pipeline";
import "./SingleTrack.css";

const SingleTrack = ({ track }: { track: PipelineTrack }) => {
    const { name, description, stages, projects, icon } = track;

    return (
        <div className="ui-btc-card w-full">
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

                {/* Projects with progress bars */}
                <div className="ui-btc-card__mid">
                    <div className="space-y-6">
                        {projects.map((project, idx) => (
                            <div key={idx} className="space-y-2">
                                {/* Project name */}
                                <div className="text-sm font-medium text-white/90">
                                    {project.name}
                                </div>

                                {/* Progress bar container */}
                                <div className="relative">
                                    {/* Stage labels */}
                                    <div className="flex justify-between mb-2">
                                        {stages.map((stage, stageIdx) => (
                                            <span
                                                key={stageIdx}
                                                className={`text-xs font-mono tracking-wider ${stageIdx < project.currentStage
                                                        ? 'text-[#ffd7aa]/80'
                                                        : stageIdx === project.currentStage
                                                            ? 'text-[#f7931a]'
                                                            : 'text-white/30'
                                                    }`}
                                            >
                                                {stage}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Progress bar track */}
                                    <div className="relative h-2 bg-white/[0.06] rounded-full overflow-hidden">
                                        {/* Completed progress */}
                                        <div
                                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#f7931a] to-[#ffd7aa] rounded-full transition-all duration-500"
                                            style={{ width: `${(project.currentStage / stages.length) * 100}%` }}
                                        />

                                        {/* Current stage indicator (blinking) */}
                                        <div
                                            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#f7931a] rounded-full shadow-[0_0_12px_rgba(247,147,26,0.6)] animate-pulse"
                                            style={{ left: `calc(${(project.currentStage / stages.length) * 100}% - 8px)` }}
                                        />
                                    </div>

                                    {/* Stage markers */}
                                    <div className="absolute top-[26px] left-0 right-0 flex justify-between pointer-events-none">
                                        {stages.map((_, stageIdx) => (
                                            <div
                                                key={stageIdx}
                                                className={`w-1 h-1 rounded-full ${stageIdx < project.currentStage
                                                        ? 'bg-[#ffd7aa]/60'
                                                        : 'bg-white/20'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTrack;
