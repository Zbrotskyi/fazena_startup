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

            <style jsx>{`
                .pipeline-card {
                    --bg0: #060607;
                    --bg1: #0b0b10;
                    --text: rgba(255, 255, 255, 0.88);
                    --muted: rgba(255, 255, 255, 0.46);
                    --btcOrange: #f7931a;
                    
                    appearance: none;
                    position: relative;
                    display: block;
                    width: 100%;
                    border: 0;
                    padding: 0;
                    background: transparent;
                    outline: none;
                    transition: transform 0.18s ease, filter 0.18s ease;
                }

                .pipeline-card__bg {
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    pointer-events: none;
                    background: radial-gradient(
                        28em 18em at 18% 18%,
                        rgba(247, 147, 26, 0.24),
                        transparent 62%
                    ),
                    radial-gradient(
                        24em 16em at 82% 78%,
                        rgba(255, 207, 139, 0.11),
                        transparent 62%
                    ),
                    radial-gradient(
                        1.2em 1.2em at 0.9em 0.9em,
                        rgba(247, 147, 26, 0.06) 0 2px,
                        transparent 2px
                    ),
                    radial-gradient(
                        1.2em 1.2em at 2em 2em,
                        rgba(255, 207, 139, 0.04) 0 2px,
                        transparent 2px
                    ),
                    repeating-linear-gradient(
                        to bottom,
                        rgba(255, 255, 255, 0.018) 0 1px,
                        transparent 1px 7px
                    ),
                    linear-gradient(135deg, var(--bg0), var(--bg1));
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
                    background: var(--btcOrange);
                    box-shadow: 0 0.85em 2.1em rgba(247, 147, 26, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.34);
                    border: 1px solid rgba(255, 255, 255, 0.22);
                    transition: box-shadow 0.22s ease, transform 0.22s ease;
                }

                .pipeline-card__icon::after {
                    content: "";
                    position: absolute;
                    inset: -30%;
                    background: radial-gradient(
                        circle at 30% 25%,
                        rgba(255, 255, 255, 0.28),
                        transparent 45%
                    );
                    opacity: 0.55;
                    pointer-events: none;
                }

                .pipeline-card:hover .pipeline-card__icon {
                    box-shadow: 0 1.05em 2.4em rgba(247, 147, 26, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.36);
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
};

export default SingleTrack;
