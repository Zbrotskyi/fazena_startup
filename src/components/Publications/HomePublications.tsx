import SectionTitle from "../Common/SectionTitle";
import PublicationCard from "./PublicationCard";
import publicationsData from "./publicationsData";

const HomePublications = () => {
    // Take the 3 most recent publications
    const latestPublications = publicationsData.slice(0, 3);

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

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {latestPublications.map((publication) => (
                        <PublicationCard key={publication.id} publication={publication} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomePublications;
