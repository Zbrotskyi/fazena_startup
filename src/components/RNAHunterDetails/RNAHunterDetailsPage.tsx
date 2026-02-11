"use client";

import Link from "next/link";
import styles from "./styles.module.css";

// Icons as SVG components
const DnaIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 15c6.667-6 13.333 0 20-6" />
        <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
        <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
        <path d="M17 6l-2.5-2.5" />
        <path d="M14 8l-3-3" />
        <path d="M7 18l2.5 2.5" />
        <path d="M3.5 14.5l.5.5" />
        <path d="M20 9l.5.5" />
        <path d="M6.5 12.5l1 1" />
        <path d="M16.5 10.5l1 1" />
        <path d="M10 16l-1.5 1.5" />
    </svg>
);

const TargetIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
    </svg>
);

const SearchIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
    </svg>
);

const LayersIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
    </svg>
);

const AtomIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1" />
        <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
        <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
    </svg>
);

const ChartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
);

const CpuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
);

const ZapIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
);

const ShieldIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

const features = [
    {
        icon: <TargetIcon />,
        title: "Binding Site Detection",
        description: "Identifies possible binding sites based on evolutionary factors and potential energy surface scanning."
    },
    {
        icon: <SearchIcon />,
        title: "Affinity Prediction",
        description: "Provides initial ligand affinity approximation without requiring tertiary structure knowledge."
    },
    {
        icon: <LayersIcon />,
        title: "Secondary Structure Modeling",
        description: "Determines secondary structure using various physical and mathematical modeling methods with custom scoring."
    },
    {
        icon: <AtomIcon />,
        title: "Tertiary Structure Building",
        description: "Constructs tertiary structures and variations using physical, mathematical, and template-based methods."
    },
    {
        icon: <DnaIcon />,
        title: "Flexible Docking",
        description: "Physics-based scoring function identifies optimal ligand positioning within binding sites."
    },
    {
        icon: <CpuIcon />,
        title: "Molecular Dynamics",
        description: "100 ns molecular dynamics with automated topology and index file preparation."
    }
];

const workflowSteps = [
    {
        title: "RNA Sequence Input",
        description: "Start with your target RNA sequence. The platform processes long non-coding RNAs and regulatory RNA molecules of any length."
    },
    {
        title: "Binding Site Identification",
        description: "Evolutionary analysis and energy surface scanning identify potential binding sites for therapeutic intervention."
    },
    {
        title: "Structure Prediction",
        description: "Advanced algorithms generate secondary and tertiary structure predictions with custom-adaptive scoring systems."
    },
    {
        title: "Ligand Docking & Optimization",
        description: "Flexible docking with physics-based scoring finds optimal ligand positions, followed by molecular dynamics."
    },
    {
        title: "Results & Analysis",
        description: "Comprehensive output including binding affinities, structural models, and dynamic simulation data for drug development."
    }
];

const benefits = [
    {
        icon: <ZapIcon />,
        title: "Fully Automated",
        description: "Complete pipeline automation from sequence input to refined results — no manual intervention required."
    },
    {
        icon: <DnaIcon />,
        title: "No Length Limitations",
        description: "Unlike other platforms, RNA Hunter handles long non-coding RNAs without size restrictions."
    },
    {
        icon: <ShieldIcon />,
        title: "Physics-Based Accuracy",
        description: "Grounded in physical laws for reliable predictions and meaningful biological insights."
    }
];

const applications = [
    "Cancer Research",
    "Neurodegenerative Diseases",
    "Cardiovascular Conditions",
    "Genetic Disorders",
    "Infectious Diseases",
    "Metabolic Disorders"
];

const RNAHunterDetailsPage = () => {
    return (
        <main className="bg-[#060607] min-h-screen">
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroGradient}></div>
                <div className="container relative">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className={styles.badge}>
                            <span className={styles.badgeDot}></span>
                            FAZENA Platform
                        </div>
                        <h1 className={styles.heroTitle}>
                            RNA Hunter
                        </h1>
                        <p className={styles.heroSubtitle}>
                            A fully automated platform for targeting long non-coding RNAs,
                            specifically optimized to address limitations of existing automated services
                            and implement the complete computational drug development pipeline.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className={styles.overviewSection}>
                <div className="container">
                    <div className={styles.overviewCard}>
                        <p className={styles.overviewText}>
                            RNA Hunter is a cutting-edge platform developed by the FAZENA team,
                            specifically optimized for working with long non-coding RNAs (lncRNAs) and
                            other regulatory RNA molecules. Unlike automated services such as RNA Composer
                            or SimRNA that perform single functions, RNA Hunter implements the <strong style={{ color: '#ea7414' }}>entire
                                computational drug development pipeline</strong> — from sequence analysis to
                            molecular dynamics — in one integrated, fully automated workflow.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Core Capabilities</h2>
                    <p className={styles.sectionSubtitle}>
                        Powerful features designed for comprehensive RNA-targeted drug discovery
                    </p>
                    <div className={styles.featuresGrid}>
                        {features.map((feature, index) => (
                            <div key={index} className={styles.featureCard}>
                                <div className={styles.featureIcon}>
                                    {feature.icon}
                                </div>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDescription}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className={styles.workflowSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>How It Works</h2>
                    <p className={styles.sectionSubtitle}>
                        A streamlined workflow from RNA sequence to therapeutic insights
                    </p>
                    <div className={styles.workflowContainer}>
                        <div className={styles.workflowSteps}>
                            {workflowSteps.map((step, index) => (
                                <div key={index} className={styles.workflowStep}>
                                    <div className={styles.stepNumber}>{index + 1}</div>
                                    <div className={styles.stepContent}>
                                        <h3 className={styles.stepTitle}>{step.title}</h3>
                                        <p className={styles.stepDescription}>{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className={styles.benefitsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Key Advantages</h2>
                    <p className={styles.sectionSubtitle}>
                        What sets RNA Hunter apart from existing solutions
                    </p>
                    <div className={styles.benefitsGrid}>
                        {benefits.map((benefit, index) => (
                            <div key={index} className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>
                                    {benefit.icon}
                                </div>
                                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                <p className={styles.benefitDescription}>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications Section */}
            <section className={styles.applicationsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Therapeutic Applications</h2>
                    <p className={styles.sectionSubtitle}>
                        RNA Hunter can be decisive in drug development for various conditions
                    </p>
                    <div className={styles.applicationsList}>
                        {applications.map((app, index) => (
                            <span key={index} className={styles.applicationTag}>
                                <span className={styles.applicationDot}></span>
                                {app}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaCard}>
                        <h2 className={styles.ctaTitle}>Ready to Transform Your RNA Research?</h2>
                        <p className={styles.ctaDescription}>
                            Partner with FAZENA to leverage RNA Hunter for your drug discovery programs.
                            Our platform can accelerate your path from target identification to lead optimization.
                        </p>
                        <Link href="/contact" className={styles.ctaButton}>
                            Get in Touch
                            <ArrowRightIcon />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default RNAHunterDetailsPage;
