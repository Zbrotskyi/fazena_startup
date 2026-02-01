export type PipelineStage = {
    name: string;
    completed: boolean;
    current?: boolean;
};

export type PipelineProject = {
    name: string;
    currentStage: number; // 0-indexed stage position
};

export type PipelineTrack = {
    id: number;
    name: string;
    description: string;
    stages: string[];
    projects: PipelineProject[];
    icon: string;
};
