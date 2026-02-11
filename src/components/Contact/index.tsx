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
          <div className="w-full max-w-3xl">
            <div className="rounded-2xl bg-[#0b0b10] border border-white/[0.08] p-8 md:p-12 overflow-hidden relative group">
              {/* Subtle background glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#ea7414]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#ea7414]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {/* General Inquiry */}
                <div className="flex flex-col">
                  <h4 className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ea7414]">
                    General inquiry
                  </h4>
                  <a href="mailto:info@fazena.tech" className="text-xl font-medium text-white hover:text-[#ea7414] transition-colors duration-200">
                    info@fazena.tech
                  </a>
                  <p className="mt-2 text-sm text-white/40">
                    For general questions about FAZENA platform.
                  </p>
                </div>

                {/* Partnerships */}
                <div className="flex flex-col">
                  <h4 className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ea7414]">
                    Partnership & Business
                  </h4>
                  <a href="mailto:partnership@fazena.tech" className="text-xl font-medium text-white hover:text-[#ea7414] transition-colors duration-200">
                    partnership@fazena.tech
                  </a>
                  <p className="mt-2 text-sm text-white/40">
                    Collaborate with us on drug discovery.
                  </p>
                </div>

                {/* Investors */}
                <div className="flex flex-col">
                  <h4 className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ea7414]">
                    For Investors
                  </h4>
                  <a href="mailto:investors@fazena.tech" className="text-xl font-medium text-white hover:text-[#ea7414] transition-colors duration-200">
                    investors@fazena.tech
                  </a>
                  <p className="mt-2 text-sm text-white/40">
                    Investment opportunities and inquiries.
                  </p>
                </div>

                {/* Careers */}
                <div className="flex flex-col">
                  <h4 className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ea7414]">
                    For Candidates
                  </h4>
                  <a href="mailto:careers@fazena.tech" className="text-xl font-medium text-white hover:text-[#ea7414] transition-colors duration-200">
                    careers@fazena.tech
                  </a>
                  <p className="mt-2 text-sm text-white/40">
                    Join our team and help us redefine bio-engineering.
                  </p>
                </div>
              </div>

              {/* Location Footer inside card */}
              <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#ea7414] animate-pulse" />
                  <span className="text-sm font-medium text-white/60">Kyiv, Ukraine</span>
                </div>
                <div className="text-sm italic text-white/30">
                  Global reach, local engineering.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
