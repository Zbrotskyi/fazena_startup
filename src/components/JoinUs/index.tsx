"use client";

import { useState } from "react";
import Link from "next/link";
import TargetCursor from "../Common/TargetCursor";

const rolesData = [
    {
        title: "Organic chemist",
        description: "in-depth knowledge of synthetic and combinatorial chemistry, experience in fine organic synthesis or any alternative experience in drug discovery. High scores on entrance exams in chemistry, biology, and mathematics or a degree with honors in organic chemistry, high technology, medical chemistry, or chemoinformatics are desirable.",
        applyLink: "mailto:careers@fazena.org?subject=Application: Organic chemist",
    },
    {
        title: "General Interest",
        description: "Don't see your role? We're always looking for exceptional talent",
        applyLink: "mailto:careers@fazena.org?subject=Application: General Interest",
    },
];

const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L13 1M13 1H1M13 1V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
    >
        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const JoinUs = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleRole = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className="bg-[#060607] pt-36 pb-20 md:pt-40 md:pb-28">
            <TargetCursor targetSelector=".cursor-target" />
            <div className="container max-w-4xl mx-auto px-4 md:px-0">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Join Our Team
                    </h1>
                    <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-3xl">
                        We're building the future of drug discovery at the intersection of computation and biology.
                        If you're driven by scientific curiosity, thrive in interdisciplinary environments, and want
                        to make a real impact on human health — we'd love to hear from you. We value strong
                        fundamentals in your field, a collaborative mindset, and the courage to tackle unsolved problems.
                    </p>
                </div>

                {/* Roles Table */}
                <div className="w-full">
                    {/* Table header */}
                    <div className="hidden md:flex items-center justify-between px-0 pb-3 border-b border-white/[0.15]">
                        <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/40">
                            Role
                        </span>
                    </div>

                    {/* Role rows */}
                    {rolesData.map((role, index) => {
                        const isExpanded = expandedIndex === index;
                        return (
                            <div
                                key={index}
                                className="border-b border-white/[0.08] hover:border-white/[0.2] transition-colors duration-300"
                            >
                                <div className="group flex items-center justify-between py-6">
                                    <div
                                        className="flex-1 min-w-0 cursor-pointer md:cursor-default"
                                        onClick={() => toggleRole(index)}
                                    >
                                        <div className="flex items-center gap-3">
                                            <h3 className="cursor-target text-xl md:text-2xl font-medium text-white group-hover:text-white/90 transition-colors inline-block">
                                                {role.title}
                                            </h3>
                                            <div className="md:hidden text-white/40">
                                                <ChevronIcon isOpen={isExpanded} />
                                            </div>
                                        </div>
                                        <p className="mt-4 text-sm text-white/60 leading-relaxed hidden md:block">
                                            {role.description}
                                        </p>
                                    </div>
                                    <a
                                        href={role.applyLink}
                                        className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-white/50 hover:text-[#ea7414] transition-colors duration-300 shrink-0 ml-4"
                                    >
                                        Apply Now
                                        <ArrowIcon />
                                    </a>
                                </div>
                                {/* Mobile description */}
                                <div
                                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="text-sm text-white/40 leading-relaxed">
                                        {role.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default JoinUs;

