"use client";
import { PipelineTrack } from "@/types/pipeline";

const SingleTrack = ({ track }: { track: PipelineTrack }) => {
    const { name, description, stages, icon } = track;

    // Find current stage index for progress calculation
    const currentStageIndex = stages.findIndex(s => s.current);
    const progressPercent = currentStageIndex >= 0
        ? ((currentStageIndex) / (stages.length - 1)) * 100
        : 0;

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

                {/* Progress section - Stage columns */}
                <div className="pt-5">
                    {/* Stage column headers */}
                    <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${stages.length}, 1fr)` }}>
                        {stages.map((stage, index) => (
                            <div
                                key={index}
                                className={`
                  text-center font-mono font-bold text-xs tracking-[0.12em] uppercase px-2 py-2
                  ${stage.completed
                                        ? 'text-[rgba(255,177,74,0.92)]'
                                        : stage.current
                                            ? 'text-[rgba(255,215,170,0.86)]'
                                            : 'text-white/40'
                                    }
                `}
                            >
                                {stage.name}
                            </div>
                        ))}
                    </div>

                    {/* Progress bar track */}
                    <div className="relative mt-3 h-3 w-full rounded-full overflow-hidden bg-black/30 border border-white/[0.085] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                        {/* Filled progress */}
                        <div
                            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#f7931a] via-[#ffb14a] to-[#ffcf8b] shadow-[0_0_1.2em_rgba(247,147,26,0.4)] transition-all duration-700 ease-out"
                            style={{ width: `${progressPercent}%` }}
                        />

                        {/* Current stage glow indicator */}
                        {currentStageIndex >= 0 && (
                            <div
                                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#f7931a] shadow-[0_0_12px_rgba(247,147,26,0.8)] animate-pulse border-2 border-white/30"
                                style={{ left: `calc(${progressPercent}% - 8px)` }}
                            />
                        )}
                    </div>

                    {/* Stage indicators below bar */}
                    <div className="grid gap-1 mt-2" style={{ gridTemplateColumns: `repeat(${stages.length}, 1fr)` }}>
                        {stages.map((stage, index) => (
                            <div key={index} className="flex justify-center">
                                <div
                                    className={`
                    flex items-center justify-center w-6 h-6 rounded-full border transition-all duration-300
                    ${stage.completed
                                            ? 'bg-gradient-to-br from-[#f7931a] to-[#ffb14a] border-white/20 shadow-[0_0.85em_2.1em_rgba(247,147,26,0.2)]'
                                            : stage.current
                                                ? 'bg-gradient-to-br from-[#f7931a] to-[#ffb14a] border-white/30 shadow-[0_0_12px_rgba(247,147,26,0.6)] animate-pulse'
                                                : 'bg-black/30 border-white/10'
                                        }
                  `}
                                >
                                    {stage.completed && (
                                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                    {stage.current && (
                                        <div className="w-2 h-2 rounded-full bg-white" />
                                    )}
                                </div>
                            </div>
                        ))}
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
