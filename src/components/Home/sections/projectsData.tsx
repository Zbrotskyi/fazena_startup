import { PipelineTrack } from "@/types/pipeline";

const projectsData: PipelineTrack[] = [
    {
        id: 1,
        name: "Drug Candidates",
        description: "Novel therapeutics addressing high unmet medical needs in neurodegeneration, oncology, and metabolic disorders",
        icon: "💊",
        stages: ["Target ID", "Hit Discovery", "Lead Opt", "Preclinical", "Phase I"],
        projects: [
            { name: "Alzheimer's disease ABCA7-targeting", currentStage: 3 },
        ],
    },
    {
        id: 2,
        name: "Platform Development",
        description: "Connecting computational design tools with experimental validation systems",
        icon: "🧬",
        stages: ["Concept", "Prototype", "Validation", "Optimization", "Launch"],
        projects: [
            { name: "RNA hunter", currentStage: 2 },
            { name: "CycloSpace", currentStage: 1 },
        ],
    },
    {
        id: 3,
        name: "Building Partnerships",
        description: "Strategic collaborations with pharmaceutical companies and research institutions",
        icon: "🤝",
        stages: ["Outreach", "Evaluation", "Negotiation", "Contract", "Active"],
        projects: [
            { name: "YURiA-PHARM", currentStage: 4 },
        ],
    },
];

export default projectsData;
