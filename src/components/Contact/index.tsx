const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 bg-[#060607]">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Have questions about our platform, research, or partnership opportunities?
            We'd love to hear from you.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Info Hub */}
          <div className="w-full lg:w-10/12 xl:w-9/12">
            <div className="rounded-2xl bg-[#0b0b10] px-8 py-12 border border-white/[0.08] sm:p-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
                {/* General Inquiries */}
                <div className="flex flex-col">
                  <h3 className="mb-4 text-xl font-audiowide font-bold text-white tracking-wide">
                    General Inquiries
                  </h3>
                  <p className="mb-4 text-sm text-white/50 font-mono">
                    For general questions about FAZENA platform and our mission.
                  </p>
                  <a href="mailto:info@fazena.com" className="text-lg font-semibold text-[#ea7414] hover:text-[#d66712] transition-colors">
                    info@fazena.com
                  </a>
                </div>

                {/* Research & Science */}
                <div className="flex flex-col">
                  <h3 className="mb-4 text-xl font-audiowide font-bold text-white tracking-wide">
                    Research & Science
                  </h3>
                  <p className="mb-4 text-sm text-white/50 font-mono">
                    Direct your technical questions or research proposals here.
                  </p>
                  <a href="mailto:research@fazena.com" className="text-lg font-semibold text-[#ea7414] hover:text-[#d66712] transition-colors">
                    research@fazena.com
                  </a>
                </div>

                {/* Business & Partnerships */}
                <div className="flex flex-col">
                  <h3 className="mb-4 text-xl font-audiowide font-bold text-white tracking-wide">
                    Business Development
                  </h3>
                  <p className="mb-4 text-sm text-white/50 font-mono">
                    Explore collaboration opportunities and strategic partnerships.
                  </p>
                  <a href="mailto:partnerships@fazena.com" className="text-lg font-semibold text-[#ea7414] hover:text-[#d66712] transition-colors">
                    partnerships@fazena.com
                  </a>
                </div>

                {/* Media & Press */}
                <div className="flex flex-col">
                  <h3 className="mb-4 text-xl font-audiowide font-bold text-white tracking-wide">
                    Media & Press
                  </h3>
                  <p className="mb-4 text-sm text-white/50 font-mono">
                    Inquiries for press kits, interviews, and media related materials.
                  </p>
                  <a href="mailto:media@fazena.com" className="text-lg font-semibold text-[#ea7414] hover:text-[#d66712] transition-colors">
                    media@fazena.com
                  </a>
                </div>
              </div>

              {/* Location Footer */}
              <div className="mt-16 pt-8 border-t border-white/[0.05] text-center">
                <h4 className="mb-2 text-xs font-mono font-bold uppercase tracking-[0.3em] text-white/30">
                  Our Headquarters
                </h4>
                <p className="text-xl font-semibold text-white">
                  Kyiv, Ukraine
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
