export type PipelineStage = {
    name: string;
    completed: boolean;
    current?: boolean;
};

export type PipelineTrack = {
    id: number;
    name: string;
    description: string;
    icon: string; // emoji icon
    stages: PipelineStage[];
    accentColor: string;
    gradientFrom: string;
    gradientTo: string;
};
