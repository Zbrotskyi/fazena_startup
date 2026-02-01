import { PipelineTrack } from "@/types/pipeline";

const pipelineData: PipelineTrack[] = [
    {
        id: 1,
        name: "Drug Candidates",
        description: "Novel therapeutics pipeline from target identification through clinical development",
        icon: "💊",
        color: "from-blue-500 to-cyan-400",
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
        description: "Building next-generation AI tools for drug discovery and molecular design",
        icon: "🧬",
        color: "from-violet-500 to-purple-400",
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
        description: "Strategic collaborations with pharmaceutical companies and research institutions",
        icon: "🤝",
        color: "from-emerald-500 to-teal-400",
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
