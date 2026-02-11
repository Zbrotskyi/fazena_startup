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
          {/* Professional Search Bar */}
          <div className="mb-14 max-w-[700px] mx-auto group">
            <div className="relative group/input">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-xl blur opacity-25 group-focus-within/input:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex items-center">
                <div className="absolute left-5 text-white/40 group-focus-within/input:text-primary transition-colors duration-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search research, papers, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl py-5 pl-14 pr-12 text-lg text-white placeholder:text-white/20 outline-none transition-all duration-500 focus:border-primary/50 focus:bg-white/[0.07] focus:shadow-[0_0_40px_rgba(234,116,20,0.1)]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 p-2 text-white/30 hover:text-white transition-colors duration-200"
                    aria-label="Clear search"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                )}
              </div>
            </div>
            {searchQuery && (
              <div className="mt-4 flex items-center justify-between px-2">
                <p className="text-sm text-white/40 font-medium tracking-wide translate-y-0 opacity-100 transition-all">
                  Found <span className="text-primary">{filteredPublications.length}</span> matching result{filteredPublications.length !== 1 ? 's' : ''}
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-xs uppercase tracking-widest text-white/30 hover:text-primary transition-colors"
                >
                  Clear search
                </button>
              </div>
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
