"use client";
import { PipelineTrack } from "@/types/pipeline";
import Link from "next/link";

const SingleTrack = ({ track }: { track: PipelineTrack }) => {
    const { name, description, stages, projects, icon } = track;

    return (
        <div className="pipeline-card group relative w-full min-w-[85vw] md:min-w-0 overflow-hidden rounded-[1.55em] transition-all duration-300 hover:-translate-y-[0.12em]">
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
                <div className="pt-5">
                    {/* Table container */}
                    <div className="w-full">
                        {/* Header row - stage names */}
                        <div className="flex border-b border-white/[0.085] pb-3 mb-4">
                            {/* Project name column header */}
                            <div className="w-48 shrink-0 pr-4">
                                <span className="font-mono font-bold text-xs tracking-[0.12em] uppercase text-white/40">
                                    Project
                                </span>
                            </div>
                            {/* Stage column headers */}
                            <div className="flex-1 grid" style={{ gridTemplateColumns: `repeat(${stages.length}, 1fr)` }}>
                                {stages.map((stage, index) => (
                                    <div key={index} className="text-center">
                                        <span className="font-mono font-bold text-xs tracking-[0.12em] uppercase text-white/60">
                                            {stage}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Project rows */}
                        {projects.map((project, projectIndex) => {
                            // Progress starts at the beginning of the first stage and ends at the center of the current stage
                            const progressPercent = ((project.currentStage + 0.5) / stages.length) * 100;

                            return (
                                <div key={projectIndex} className="flex items-center py-3 border-b border-white/[0.04] last:border-b-0">
                                    {/* Project name and Learn more */}
                                    <div className="w-48 shrink-0 pr-4 flex flex-col">
                                        <span className="font-mono font-semibold text-sm text-[rgba(255,177,74,0.92)]">
                                            {project.name}
                                        </span>
                                        {name !== "Building Partnerships" && (
                                            <Link
                                                href={
                                                    project.name.toLowerCase() === "rna hunter"
                                                        ? "/rna-hunter"
                                                        : project.name.toLowerCase() === "cyclospace"
                                                            ? "/#cyclospace"
                                                            : `/projects/${project.name.toLowerCase().replace(/[\s']/g, '-')}`
                                                }
                                                className="mt-1 font-mono text-xs text-white/40 hover:text-[#f7931a] transition-colors duration-200"
                                            >
                                                Learn more →
                                            </Link>
                                        )}
                                    </div>

                                    {/* Progress bar area */}
                                    <div className="flex-1 relative">
                                        {/* Grid for stage alignment */}
                                        <div className="grid relative" style={{ gridTemplateColumns: `repeat(${stages.length}, 1fr)` }}>
                                            {/* Progress bar background */}
                                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-2 rounded-full bg-black/30 border border-white/[0.085]">
                                                {/* Filled progress */}
                                                <div
                                                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#f7931a] via-[#ffb14a] to-[#ffcf8b] shadow-[0_0_1.2em_rgba(247,147,26,0.4)] transition-all duration-700 ease-out"
                                                    style={{ width: `${progressPercent}%` }}
                                                />
                                            </div>

                                            {/* Stage positions with indicator */}
                                            {stages.map((_, stageIndex) => (
                                                <div key={stageIndex} className="flex items-center justify-center h-6 relative z-10">
                                                    {stageIndex === project.currentStage && (
                                                        <div className="w-4 h-4 rounded-full bg-[#f7931a] shadow-[0_0_12px_rgba(247,147,26,0.8)] animate-pulse border-2 border-white/40" />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .pipeline-card__bg {
          background: 
            radial-gradient(28em 18em at 18% 18%, rgba(247, 147, 26, 0.24), transparent 62%),
            radial-gradient(24em 16em at 82% 78%, rgba(255, 207, 139, 0.11), transparent 62%),
            radial-gradient(1.2em 1.2em at 0.9em 0.9em, rgba(247, 147, 26, 0.06) 0 2px, transparent 2px),
            radial-gradient(1.2em 1.2em at 2em 2em, rgba(255, 207, 139, 0.04) 0 2px, transparent 2px),
            repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.018) 0 1px, transparent 1px 7px),
            linear-gradient(135deg, #060607, #0b0b10);
          background-size: auto, auto, 3.8em 3.8em, 3.8em 3.8em, auto, auto;
          border: 1px solid rgba(255, 255, 255, 0.07);
          box-shadow: 0 1.45em 3.6em rgba(0, 0, 0, 0.58), inset 0 1px 0 rgba(255, 255, 255, 0.06);
          transition: box-shadow 0.22s ease, border-color 0.22s ease;
        }
        
        .pipeline-card:hover .pipeline-card__bg {
          box-shadow: 0 1.65em 3.9em rgba(0, 0, 0, 0.62), inset 0 1px 0 rgba(255, 255, 255, 0.07);
          border-color: rgba(255, 255, 255, 0.09);
        }
        
        .pipeline-card__icon {
          background: #f7931a;
          box-shadow: 0 0.85em 2.1em rgba(247, 147, 26, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.34);
          border: 1px solid rgba(255, 255, 255, 0.22);
        }
        
        .pipeline-card:hover .pipeline-card__icon {
          box-shadow: 0 1.05em 2.4em rgba(247, 147, 26, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.36);
        }
        
        .pipeline-card__icon::after {
          content: "";
          position: absolute;
          inset: -30%;
          background: radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 0.28), transparent 45%);
          opacity: 0.55;
          pointer-events: none;
        }
      `}</style>
        </div>
    );
};

export default SingleTrack;