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

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
                    {latestPublications.map((publication) => (
                        <PublicationCard key={publication.id} publication={publication} />
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center">
                    <p className="text-white/40 mb-6 max-w-[500px] mx-auto text-sm">
                        Discover our full repository of scientific breakthroughs, news announcements, and exclusive industry insights.
                    </p>
                    <Link
                        href="/publications"
                        className="inline-flex items-center justify-center rounded-md bg-[#ea7414] px-8 py-3 text-base font-bold text-white transition-all duration-300 hover:bg-[#ff9130] hover:shadow-[0_0_20px_rgba(234,116,20,0.4)]"
                    >
                        View All Publications
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomePublications;
