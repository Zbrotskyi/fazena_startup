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
                    <div className="pipeline-card__icon relative flex h-14 w-14 items-center justify-center rounded-[1.18em] text-2xl overflow-hidden">
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

                {/* Progress section with projects */}
                <div className="pt-5">
                    {/* Stage column headers */}
                    <div className="grid gap-1 pl-32 md:pl-40" style={{ gridTemplateColumns: `repeat(${stages.length}, 1fr)` }}>
                        {stages.map((stage, index) => (
                            <div
                                key={index}
                                className="text-center font-mono font-bold text-xs tracking-[0.08em] uppercase px-1 py-2 text-white/60"
                            >
                                {stage.name}
                            </div>
                        ))}
                    </div>

                    {/* Projects with their progress bars */}
                    <div className="space-y-3 mt-2">
                        {projects.map((project, projectIndex) => (
                            <div key={projectIndex} className="flex items-center gap-4">
                                {/* Project name on the left */}
                                <div className="w-28 md:w-36 shrink-0">
                                    <span className="font-mono font-semibold text-sm text-[rgba(129,179,64,0.9)] truncate block">
                                        {project.name}
                                    </span>
                                </div>

                                {/* Progress bar with stages */}
                                <div className="flex-1 relative">
                                    {/* Background track */}
                                    <div className="h-2 w-full rounded-full overflow-hidden bg-black/40 border border-white/[0.06]">
                                        {/* Filled progress */}
                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-[#81b340] to-[#284d79] transition-all duration-700 ease-out"
                                            style={{ width: `${(project.currentStage / (stages.length - 1)) * 100}%` }}
                                        />
                                    </div>

                                    {/* Stage markers grid */}
                                    <div className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${stages.length}, 1fr)` }}>
                                        {stages.map((_, stageIndex) => {
                                            const isCurrentStage = stageIndex === project.currentStage;
                                            return (
                                                <div key={stageIndex} className="flex justify-center items-center">
                                                    {isCurrentStage && (
                                                        <div className="w-4 h-4 rounded-full bg-[#81b340] shadow-[0_0_12px_rgba(129,179,64,0.8)] animate-pulse border-2 border-white/40" />
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .pipeline-card__bg {
          background: 
            radial-gradient(28em 18em at 18% 18%, rgba(129, 179, 64, 0.15), transparent 62%),
            radial-gradient(24em 16em at 82% 78%, rgba(40, 77, 121, 0.12), transparent 62%),
            radial-gradient(1.2em 1.2em at 0.9em 0.9em, rgba(129, 179, 64, 0.04) 0 2px, transparent 2px),
            radial-gradient(1.2em 1.2em at 2em 2em, rgba(40, 77, 121, 0.03) 0 2px, transparent 2px),
            repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 0 1px, transparent 1px 7px),
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
          background: linear-gradient(135deg, #81b340, #284d79);
          box-shadow: 0 0.85em 2.1em rgba(129, 179, 64, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.34);
          border: 1px solid rgba(255, 255, 255, 0.22);
        }
        
        .pipeline-card:hover .pipeline-card__icon {
          box-shadow: 0 1.05em 2.4em rgba(129, 179, 64, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.36);
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
