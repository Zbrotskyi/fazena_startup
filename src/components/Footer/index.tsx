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
                  href="https://x.com/FazenaOfficial"
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
                  href="https://www.linkedin.com/company/fazena/"
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
                  href="https://www.facebook.com/people/Fazena/61585439986703/"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 duration-300 hover:text-[#ea7414]"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/fazena_official/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 duration-300 hover:text-[#ea7414]"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="https://bsky.app/profile/fazena.bsky.social"
                  aria-label="BlueSky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 duration-300 hover:text-[#ea7414]"
                >
                  <svg width="22" height="22" viewBox="0 0 64 64" fill="currentColor">
                    <path d="M13.847 7.023C20.47 11.535 28.528 20.375 32 26.5c3.472-6.125 11.53-14.965 18.153-19.477C55.053 3.633 64 1.5 64 11.5c0 2.21-1.353 14.122-2.14 18.784-1.284 7.625-7.55 9.466-13.86 8.52 14.464 2.162 17.653 11.055 9.71 18.347C44.75 69.23 33.4 51.535 32 49.375c-1.4 2.16-12.75 19.855-25.71 7.776-7.942-7.292-4.755-16.185 9.71-18.347-6.31.946-12.576-.895-13.86-8.52C1.353 25.622 0 13.71 0 11.5 0 1.5 8.947 3.633 13.847 7.023z" />
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
