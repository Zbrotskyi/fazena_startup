import { PipelineTrack } from "@/types/pipeline";

const pipelineData: PipelineTrack[] = [
    {
        id: 1,
        name: "Drug Candidates",
        description: "Novel therapeutics pipeline from target identification through clinical development",
        icon: "💊",
        color: "from-[#81b340] to-[#284d79]",
        stages: [
            { name: "Target ID", completed: true },
            { name: "Hit Discovery", completed: true },
            { name: "Lead Opt", completed: false, current: true },
            { name: "Preclinical", completed: false },
            { name: "Phase I", completed: false },
        ],
        projects: [
            { name: "FZN-001", currentStage: 2 },
            { name: "FZN-002", currentStage: 1 },
            { name: "FZN-003", currentStage: 3 },
        ],
    },
    {
        id: 2,
        name: "Platform Development",
        description: "Building next-generation AI tools for drug discovery and molecular design",
        icon: "🧬",
        color: "from-[#81b340] to-[#284d79]",
        stages: [
            { name: "Concept", completed: true },
            { name: "Prototype", completed: true },
            { name: "Validation", completed: true },
            { name: "Optimization", completed: false, current: true },
            { name: "Launch", completed: false },
        ],
        projects: [
            { name: "CycloPep Designer", currentStage: 3 },
            { name: "TargetBind AI", currentStage: 2 },
            { name: "MolGen Suite", currentStage: 4 },
        ],
    },
    {
        id: 3,
        name: "Building Partnerships",
        description: "Strategic collaborations with pharmaceutical companies and research institutions",
        icon: "🤝",
        color: "from-[#81b340] to-[#284d79]",
        stages: [
            { name: "Outreach", completed: true },
            { name: "Evaluation", completed: true },
            { name: "Negotiation", completed: false, current: true },
            { name: "Contract", completed: false },
            { name: "Active", completed: false },
        ],
        projects: [
            { name: "Pharma Partner A", currentStage: 2 },
            { name: "Research Inst. B", currentStage: 4 },
            { name: "Biotech Corp C", currentStage: 1 },
        ],
    },
];

export default pipelineData;
