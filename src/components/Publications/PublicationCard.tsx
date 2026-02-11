import { Publication } from "@/types/publication";
import Image from "next/image";
import Link from "next/link";

const PublicationCard = ({ publication }: { publication: Publication }) => {
    const { title, image, category, publishDate, url } = publication;

    return (
        <div className="group">
            <Link
                href={url || "#"}
                className="block"
                target={url?.startsWith("http") ? "_blank" : undefined}
                rel={url?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
                {/* Image Container */}
                <div
                    className="relative aspect-[16/9] w-full overflow-hidden rounded-sm mb-4"
                    style={{
                        border: "1px solid #ea7414",
                    }}
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-3 mb-3">
                    <span
                        className="inline-flex items-center justify-center rounded-sm px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider"
                        style={{ backgroundColor: "#ea7414" }}
                    >
                        {category}
                    </span>
                    <span className="text-white/60 text-xs italic">
                        {publishDate}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {title}
                </h3>
            </Link>
        </div>
    );
};

export default PublicationCard;
