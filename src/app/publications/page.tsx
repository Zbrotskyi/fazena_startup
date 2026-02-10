import PublicationCard from "@/components/Publications/PublicationCard";
import publicationsData from "@/components/Publications/publicationsData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAZENA | Publications",
  description: "Explore our latest publications and research in AI-driven drug discovery.",
};

const PublicationsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Publications"
        description="Our latest research, articles, and insights on AI-driven drug discovery and development."
      />

      <section className="bg-[#060607] pt-16 pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {publicationsData.map((publication) => (
              <PublicationCard key={publication.id} publication={publication} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PublicationsPage;
