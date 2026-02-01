import { PipelineTrack } from "@/types/pipeline";

const pipelineData: PipelineTrack[] = [
    {
        id: 1,
        name: "Drug Candidates",
        description: "Novel therapeutics pipeline from target identification through clinical development",
        icon: "💊",
        stages: ["Target ID", "Hit Discovery", "Lead Opt", "Preclinical", "Phase I"],
        projects: [
            { name: "FZN-001 (GPCR)", currentStage: 2 },
            { name: "FZN-002 (Kinase)", currentStage: 1 },
            { name: "FZN-003 (Ion Channel)", currentStage: 3 },
        ],
    },
    {
        id: 2,
        name: "Platform Development",
        description: "Building next-generation AI tools for drug discovery and molecular design",
        icon: "🧬",
        stages: ["Concept", "Prototype", "Validation", "Optimization", "Launch"],
        projects: [
            { name: "CyclePeptide Designer", currentStage: 3 },
            { name: "BindingPredictor AI", currentStage: 2 },
            { name: "MolGen Engine", currentStage: 1 },
        ],
    },
    {
        id: 3,
        name: "Building Partnerships",
        description: "Strategic collaborations with pharmaceutical companies and research institutions",
        icon: "🤝",
        stages: ["Outreach", "Evaluation", "Negotiation", "Contract", "Active"],
        projects: [
            { name: "Pharma Partner A", currentStage: 3 },
            { name: "Research Institute B", currentStage: 2 },
            { name: "Biotech Startup C", currentStage: 4 },
        ],
    },
];

export default pipelineData;
