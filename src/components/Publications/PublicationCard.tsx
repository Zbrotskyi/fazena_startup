"use client";

import { Publication } from "@/types/publication";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PublicationCard = ({ publication }: { publication: Publication }) => {
    const { title, image, publishDate, url, tags } = publication;
    const [showModal, setShowModal] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        if (url === "in-future") {
            e.preventDefault();
            setShowModal(true);
        }
    };

    const cardContent = (
        <div className="group h-full flex flex-col">
            <div className="block cursor-pointer" onClick={handleClick}>
                {/* Image Container */}
                <div
                    className="relative aspect-[16/9] w-full overflow-hidden rounded-sm mb-4 bg-white/5 flex items-center justify-center"
                    style={{
                        border: "1px solid #ea7414",
                    }}
                >
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <span className="text-white/20 text-sm font-medium uppercase tracking-widest italic">
                            without picture
                        </span>
                    )}

                    {/* Coming Soon Overlay for in-future */}
                    {url === "in-future" && (
                        <div className="absolute inset-0 z-10 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                            <span className="bg-[#ea7414] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                                Coming Soon
                            </span>
                        </div>
                    )}
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-3 mb-3">
                    {tags && tags.length > 0 && (
                        <span
                            className="inline-flex items-center justify-center rounded-sm px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider"
                            style={{ backgroundColor: "#ea7414" }}
                        >
                            {tags[0]}
                        </span>
                    )}
                    <span className="text-white/60 text-xs italic">
                        {publishDate}
                    </span>
                </div>

                {/* Title - Full size, no clamp */}
                <h3 className="text-xl font-bold text-white leading-tight group-hover:text-primary transition-colors duration-300 font-audiowide">
                    {title}
                </h3>
            </div>

            {/* Coming Soon Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
                    <div
                        className="bg-[#0b0b10] border border-white/10 p-8 rounded-lg max-w-md w-full shadow-[0_0_50px_rgba(234,116,20,0.2)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="text-[#ea7414] mb-4">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-3">Coming Soon</h4>
                        <p className="text-white/60 mb-6 leading-relaxed">
                            This publication is on its way and will be available very soon. In the meantime, feel free to explore our other insightful research articles and latest news.
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="w-full bg-[#ea7414] text-white py-3 rounded-md font-bold hover:bg-[#ff9130] transition-colors duration-300"
                        >
                            Got it, thanks!
                        </button>
                    </div>
                </div>
            )}
        </div>
    );

    if (url === "in-future") {
        return cardContent;
    }

    return (
        <Link
            href={url || "#"}
            className="block h-full"
            target={url?.startsWith("http") ? "_blank" : undefined}
            rel={url?.startsWith("http") ? "noopener noreferrer" : undefined}
        >
            {cardContent}
        </Link>
    );
};

export default PublicationCard;
