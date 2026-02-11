"use client";

import { useState } from "react";
import PublicationCard from "@/components/Publications/PublicationCard";
import publicationsData from "@/components/Publications/publicationsData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const PublicationsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPublications = publicationsData.filter((publication) => {
    const searchLower = searchQuery.toLowerCase();
    const matchesTitle = publication.title.toLowerCase().includes(searchLower);
    const matchesTags = publication.tags?.some(tag =>
      tag.toLowerCase().includes(searchLower)
    );
    return matchesTitle || matchesTags;
  });

  return (
    <>
      <Breadcrumb
        pageName="Publications"
        description="Our latest research, articles, and insights on AI-driven drug discovery and development."
      />

      <section className="bg-[#060607] pt-16 pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
        <div className="container">
          {/* Search Bar */}
          <div className="mb-12 max-w-[600px] mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by title or tags (e.g., 'Generative', 'Machine Learning')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border border-white/10 bg-white/5 py-4 pl-6 pr-12 text-base text-white outline-none transition-all duration-300 focus:border-primary focus:bg-white/10 focus:shadow-[0_0_20px_rgba(234,116,20,0.15)]"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            {searchQuery && (
              <p className="mt-3 text-sm text-white/40 italic">
                Found {filteredPublications.length} result{filteredPublications.length !== 1 ? 's' : ''} for "{searchQuery}"
              </p>
            )}
          </div>

          {filteredPublications.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPublications.map((publication) => (
                <PublicationCard key={publication.id} publication={publication} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <h3 className="text-xl font-medium text-white/60">
                No publications match your search criteria.
              </h3>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-primary hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PublicationsPage;
