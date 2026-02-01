export type PipelineStage = {
    name: string;
    completed: boolean;
    current?: boolean;
};

export type PipelineTrack = {
    id: number;
    name: string;
    description: string;
    stages: PipelineStage[];
    color: string; // gradient accent color
    icon: string; // emoji or icon identifier
};
