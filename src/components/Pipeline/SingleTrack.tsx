"use client";
import { PipelineTrack } from "@/types/pipeline";

const SingleTrack = ({ track }: { track: PipelineTrack }) => {
    const { name, description, icon, stages, accentColor, gradientFrom, gradientTo } = track;

    // Calculate progress percentage
    const completedStages = stages.filter(s => s.completed).length;
    const currentStageIndex = stages.findIndex(s => s.current);
    const progressPercent = ((completedStages + (currentStageIndex >= 0 ? 0.5 : 0)) / stages.length) * 100;

    return (
        <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 dark:bg-gray-dark dark:shadow-gray-900/30">
            {/* Background gradient accent */}
            <div
                className="absolute inset-0 opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.06]"
                style={{
                    background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
                }}
            />

            {/* Header */}
            <div className="relative mb-6 flex items-center gap-4">
                <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl text-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                        background: `linear-gradient(135deg, ${gradientFrom}20 0%, ${gradientTo}30 100%)`,
                    }}
                >
                    {icon}
                </div>
                <div>
                    <h3 className="text-xl font-bold text-black dark:text-white">{name}</h3>
                    <p className="text-sm text-body-color dark:text-body-color-dark">{description}</p>
                </div>
            </div>

            {/* Progress bar container */}
            <div className="relative">
                {/* Background track */}
                <div className="relative h-3 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                    {/* Progress fill with animation */}
                    <div
                        className="absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                            width: `${progressPercent}%`,
                            background: `linear-gradient(90deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
                            boxShadow: `0 0 20px ${accentColor}40`,
                        }}
                    />
                </div>

                {/* Stage markers */}
                <div className="mt-4 flex justify-between">
                    {stages.map((stage, index) => {
                        const isCompleted = stage.completed;
                        const isCurrent = stage.current;

                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center"
                                style={{ width: `${100 / stages.length}%` }}
                            >
                                {/* Stage dot */}
                                <div
                                    className={`relative mb-2 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all duration-300 ${isCompleted
                                            ? 'border-transparent'
                                            : isCurrent
                                                ? 'border-transparent animate-pulse'
                                                : 'border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800'
                                        }`}
                                    style={{
                                        background: isCompleted || isCurrent
                                            ? `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`
                                            : undefined,
                                        boxShadow: isCurrent ? `0 0 12px ${accentColor}60` : undefined,
                                    }}
                                >
                                    {isCompleted && (
                                        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                    {isCurrent && (
                                        <div className="h-2 w-2 rounded-full bg-white" />
                                    )}
                                </div>

                                {/* Stage label */}
                                <span
                                    className={`text-center text-xs font-medium transition-colors duration-300 ${isCompleted || isCurrent
                                            ? 'text-black dark:text-white'
                                            : 'text-gray-400 dark:text-gray-500'
                                        }`}
                                >
                                    {stage.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SingleTrack;
