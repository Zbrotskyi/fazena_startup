import { PipelineTrack } from "@/types/pipeline";

const pipelineData: PipelineTrack[] = [
    {
        id: 1,
        name: "Drug Candidates",
        description: "Advancing novel therapeutics through rigorous development stages",
        icon: "💊",
        accentColor: "#4A6CF7",
        gradientFrom: "#4A6CF7",
        gradientTo: "#6366F1",
        stages: [
            { name: "Target ID", completed: true },
            { name: "Hit Discovery", completed: true },
            { name: "Lead Opt", completed: false, current: true },
            { name: "Preclinical", completed: false },
            { name: "Phase I", completed: false },
        ],
    },
    {
        id: 2,
        name: "Platform Development",
        description: "Building cutting-edge computational tools for drug discovery",
        icon: "🧬",
        accentColor: "#10B981",
        gradientFrom: "#10B981",
        gradientTo: "#34D399",
        stages: [
            { name: "Concept", completed: true },
            { name: "Prototype", completed: true },
            { name: "Validation", completed: true },
            { name: "Optimization", completed: false, current: true },
            { name: "Launch", completed: false },
        ],
    },
    {
        id: 3,
        name: "Building Partnerships",
        description: "Strategic collaborations with industry leaders and research institutions",
        icon: "🤝",
        accentColor: "#F59E0B",
        gradientFrom: "#F59E0B",
        gradientTo: "#FBBF24",
        stages: [
            { name: "Outreach", completed: true },
            { name: "Evaluation", completed: true },
            { name: "Negotiation", completed: false, current: true },
            { name: "Contract", completed: false },
            { name: "Active", completed: false },
        ],
    },
];

export default pipelineData;
