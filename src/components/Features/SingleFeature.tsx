import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full h-full">
      <div className="wow fadeInUp group relative h-full overflow-hidden rounded-2xl border border-white/5 bg-[#0d0d12] p-8 transition-all duration-300 hover:border-white/10 hover:bg-[#121218] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]" data-wow-delay=".15s">
        {/* Glow effect on hover */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#f7931a]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#f7931a]/10 text-[#f7931a] border border-[#f7931a]/20 shadow-[0_0_15px_rgba(247,147,26,0.1)] transition-transform duration-300 group-hover:scale-110">
            <div className="h-8 w-8">
              {icon}
            </div>
          </div>

          <h3 className="mb-3 text-xl font-audiowide font-bold text-white tracking-wider">
            {title}
          </h3>

          <p className="text-white/50 text-sm leading-relaxed font-mono">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
