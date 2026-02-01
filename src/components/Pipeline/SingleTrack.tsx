"use client";
import { PipelineTrack } from "@/types/pipeline";

const SingleTrack = ({ track }: { track: PipelineTrack }) => {
    const { name, description, stages, color, icon } = track;

    // Calculate progress percentage
    const completedStages = stages.filter(s => s.completed).length;
    const currentStageIndex = stages.findIndex(s => s.current);
    const progressPercent = ((completedStages + (currentStageIndex >= 0 ? 0.5 : 0)) / stages.length) * 100;

    return (
        <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-one transition-all duration-300 hover:shadow-two dark:bg-dark dark:shadow-none dark:hover:shadow-gray-dark md:p-8">
            {/* Gradient accent line at top */}
            <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${color}`} />

            {/* Header */}
            <div className="mb-6 flex items-center gap-4">
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-2xl shadow-lg`}>
                    {icon}
                </div>
                <div>
                    <h3 className="text-xl font-bold text-black dark:text-white">
                        {name}
                    </h3>
                    <p className="text-sm text-body-color dark:text-body-color-dark">
                        {description}
                    </p>
                </div>
            </div>

            {/* Progress Bar Container */}
            <div className="relative">
                {/* Background track */}
                <div className="h-3 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                    {/* Filled progress */}
                    <div
                        className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-700 ease-out`}
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>

                {/* Stage markers */}
                <div className="mt-4 flex justify-between">
                    {stages.map((stage, index) => {
                        const position = (index / (stages.length - 1)) * 100;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center"
                                style={{ width: `${100 / stages.length}%` }}
                            >
                                {/* Marker dot */}
                                <div
                                    className={`
                    relative -mt-7 mb-2 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all duration-300
                    ${stage.completed
                                            ? `border-transparent bg-gradient-to-br ${color} shadow-md`
                                            : stage.current
                                                ? `border-transparent bg-gradient-to-br ${color} shadow-lg ring-4 ring-opacity-30 animate-pulse`
                                                : 'border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800'
                                        }
                  `}
                                    style={stage.current ? { '--tw-ring-color': 'rgb(74 108 247 / 0.3)' } as React.CSSProperties : {}}
                                >
                                    {stage.completed && (
                                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                    {stage.current && (
                                        <div className="h-2 w-2 rounded-full bg-white" />
                                    )}
                                </div>
                                {/* Stage label */}
                                <span
                                    className={`
                    text-center text-xs font-medium transition-colors duration-300
                    ${stage.completed || stage.current
                                            ? 'text-black dark:text-white'
                                            : 'text-body-color dark:text-body-color-dark'
                                        }
                  `}
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
