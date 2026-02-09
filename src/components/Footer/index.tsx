"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#060607] pt-16 md:pt-20 lg:pt-24 border-t border-white/[0.05]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Logo & Description */}
          <div className="w-full px-4 md:w-1/2 lg:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <Image
                  src="/images/logo/logo.svg"
                  alt="FAZENA Logo"
                  width={140}
                  height={30}
                />
              </Link>
              <p className="mb-9 text-base leading-relaxed text-white/60">
                Silicon-to-cell integration that collapses traditional drug discovery timelines through computational design and experimental validation.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://twitter.com"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 duration-300 hover:text-[#ea7414]"
                >
                  <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 duration-300 hover:text-[#ea7414]"
                >
                  <svg width="20" height="20" viewBox="0 0 17 16" fill="currentColor">
                    <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 duration-300 hover:text-[#ea7414]"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Research Column */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/4 lg:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-8 text-lg font-bold text-white">Research</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/rna-hunter" className="inline-block text-base text-white/60 duration-300 hover:text-[#ea7414]">
                    RNA Hunter
                  </Link>
                </li>
                <li>
                  <Link href="/#cyclospace" className="inline-block text-base text-white/60 duration-300 hover:text-[#ea7414]">
                    CycloSpace
                  </Link>
                </li>
                <li>
                  <Link href="/publications" className="inline-block text-base text-white/60 duration-300 hover:text-[#ea7414]">
                    Publications
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Company Column */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/4 lg:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-8 text-lg font-bold text-white">Company</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="inline-block text-base text-white/60 duration-300 hover:text-[#ea7414]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="inline-block text-base text-white/60 duration-300 hover:text-[#ea7414]">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="inline-block text-base text-white/60 duration-300 hover:text-[#ea7414]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Resources Column */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/4 lg:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-8 text-lg font-bold text-white">Resources</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog" className="inline-block text-base text-white/60 duration-300 hover:text-[#ea7414]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="inline-block text-base text-white/60 duration-300 hover:text-[#ea7414]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="inline-block text-base text-white/60 duration-300 hover:text-[#ea7414]">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.05] py-8">
          <p className="text-center text-sm text-white/40">
            © {new Date().getFullYear()} FAZENA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
