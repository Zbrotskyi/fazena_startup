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

        <div className="-mx-4 flex flex-wrap">
          {/* Contact Form */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-lg bg-[#0b0b10] px-8 py-11 border border-white/[0.08] sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
            >
              <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Send us a message
              </h2>
              <p className="mb-12 text-base text-white/60">
                Our team will get back to you within 24-48 hours.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-white/80"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-lg border border-white/[0.08] bg-[#1a1a1f] px-6 py-3 text-base text-white placeholder:text-white/30 outline-none focus:border-[#ea7414] transition-colors"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-white/80"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-white/[0.08] bg-[#1a1a1f] px-6 py-3 text-base text-white placeholder:text-white/30 outline-none focus:border-[#ea7414] transition-colors"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-white/80"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Tell us about your inquiry..."
                        className="w-full resize-none rounded-lg border border-white/[0.08] bg-[#1a1a1f] px-6 py-3 text-base text-white placeholder:text-white/30 outline-none focus:border-[#ea7414] transition-colors"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-lg bg-[#ea7414] px-9 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-[#d66712] hover:shadow-lg hover:shadow-[#ea7414]/20">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="mb-12 rounded-lg bg-[#0b0b10] px-8 py-11 border border-white/[0.08] sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h3 className="mb-8 text-xl font-bold text-white">
                Contact Information
              </h3>

              <div className="mb-8">
                <h4 className="mb-2 text-sm font-medium text-white/50">Email</h4>
                <a href="mailto:info@fazena.com" className="text-base text-white hover:text-[#ea7414] transition-colors">
                  info@fazena.com
                </a>
              </div>

              <div className="mb-8">
                <h4 className="mb-2 text-sm font-medium text-white/50">Business Inquiries</h4>
                <a href="mailto:partnerships@fazena.com" className="text-base text-white hover:text-[#ea7414] transition-colors">
                  partnerships@fazena.com
                </a>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-medium text-white/50">Location</h4>
                <p className="text-base text-white/70">
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
