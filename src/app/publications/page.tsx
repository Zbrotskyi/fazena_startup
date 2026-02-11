"use client";

import { useState, useMemo } from "react";
import PublicationCard from "@/components/Publications/PublicationCard";
import publicationsData from "@/components/Publications/publicationsData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const PublicationsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract unique tags from data
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    publicationsData.forEach((pub) => {
      pub.tags?.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  const filteredPublications = publicationsData.filter((publication) => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      publication.title.toLowerCase().includes(searchLower) ||
      publication.tags?.some(tag => tag.toLowerCase().includes(searchLower));

    const matchesTag = !selectedTag || publication.tags?.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <div className="bg-[#060607]">
      <Breadcrumb
        pageName="Publications"
        description="Our latest research, articles, and insights on AI-driven drug discovery and development."
      />

      <section className="pt-16 pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-32">
        <div className="container">
          {/* Professional Filter Bar */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-white/5">
              {/* Tag Chips */}
              <div className="flex flex-wrap gap-2 lg:max-w-[60%]">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedTag === null
                      ? "bg-[#ea7414] text-white shadow-[0_0_15px_rgba(234,116,20,0.3)]"
                      : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  All Topics
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedTag === tag
                        ? "bg-[#ea7414] text-white shadow-[0_0_15px_rgba(234,116,20,0.3)]"
                        : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                      }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Minimalist Search */}
              <div className="relative w-full lg:w-[350px]">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 py-2 pl-2 pr-10 text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-primary"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-white/30">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </div>
          </div>

          {filteredPublications.length > 0 ? (
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPublications.map((publication) => (
                <PublicationCard key={publication.id} publication={publication} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.2">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No publications found</h3>
              <p className="text-white/40 mb-8 max-w-sm mx-auto">
                No articles match your current search and filters. Try adjusting your keywords or clearing the tags.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag(null);
                }}
                className="text-primary font-bold hover:underline"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PublicationsPage;
