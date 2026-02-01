export type PipelineStage = {
    name: string;
    completed: boolean;
    current?: boolean;
};

export type PipelineProject = {
    name: string;
    currentStage: number; // index of current stage (0-based)
};

export type PipelineTrack = {
    id: number;
    name: string;
    description: string;
    stages: PipelineStage[];
    projects: PipelineProject[];
    color: string; // gradient accent color
    icon: string; // emoji or icon identifier
};
