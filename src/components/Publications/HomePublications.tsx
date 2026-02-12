"use client";

import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import PublicationCard from "./PublicationCard";
import publicationsData from "./publicationsData";

const HomePublications = () => {
    // Priority Sorting: url === "in-future" first, then by date descending
    const sortedPublications = [...publicationsData].sort((a, b) => {
        if (a.url === "in-future" && b.url !== "in-future") return -1;
        if (a.url !== "in-future" && b.url === "in-future") return 1;

        const dateA = new Date(a.publishDate).getTime();
        const dateB = new Date(b.publishDate).getTime();

        // If date is invalid (e.g. "Coming Soon"), treat as very recent
        const timeA = isNaN(dateA) ? Infinity : dateA;
        const timeB = isNaN(dateB) ? Infinity : dateB;

        return timeB - timeA;
    });

    // Take the 3 most relevant publications
    const latestPublications = sortedPublications.slice(0, 3);

    return (
        <section
            id="publications"
            className="bg-[#060607] py-16 md:py-20 lg:py-28"
        >
            <div className="container">
                <SectionTitle
                    title="Latest Publications"
                    paragraph="Explore our most recent research papers, articles, and insights on the future of AI-driven drug discovery."
                    center
                    dark
                />

                <div className="flex flex-col lg:flex-row lg:items-start items-center gap-8">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 flex-grow">
                        {latestPublications.map((publication) => (
                            <PublicationCard key={publication.id} publication={publication} />
                        ))}
                    </div>

                    {/* Blinking Arrow CTA */}
                    <Link
                        href="/publications"
                        className="group relative flex items-center justify-center w-16 h-16 lg:w-20 lg:h-[220px] lg:mt-0 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:bg-[#ea7414]/10 hover:border-[#ea7414]/50 hover:shadow-[0_0_30px_rgba(234,116,20,0.15)] overflow-hidden"
                    >
                        <style jsx>{`
                            @keyframes custom-blink {
                                0%, 100% { opacity: 1; transform: scale(1); }
                                50% { opacity: 0.4; transform: scale(0.95); }
                            }
                            .animate-blink {
                                animation: custom-blink 1.5s ease-in-out infinite;
                            }
                        `}</style>
                        <div className="relative z-10 animate-blink">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ea7414"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            >
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomePublications;
