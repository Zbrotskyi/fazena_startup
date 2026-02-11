import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error Page | Free Next.js Template for Startup and SaaS",
  description: "This is Error Page for Startup Nextjs Template",
  // other metadata
};

"use client";

import Link from "next/link";
import FuzzyText from "@/components/Common/FuzzyText";

const ErrorPage = () => {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden bg-[#060607] py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-[600px] text-center">
          <div className="mb-8 flex justify-center">
            <FuzzyText
              baseIntensity={0.2}
              hoverIntensity={0.6}
              enableHover
              color="#ea7414"
              fuzzRange={25}
              fontWeight={900}
            >
              404
            </FuzzyText>
          </div>

          <h1 className="mb-5 text-3xl font-bold text-white sm:text-4xl md:text-[45px] leading-tight">
            Oops! Path Not Found
          </h1>
          <p className="mb-10 text-base font-medium leading-relaxed text-white/50 sm:text-lg">
            The data you are searching for is either encrypted, missing, or has been relocated to another sector of the FAZENA network.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-[#ea7414] px-9 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-[#d66712] hover:shadow-[0_0_20px_rgba(234,116,20,0.3)]"
          >
            Back to Command Center
          </Link>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full opacity-20">
        <div className="absolute top-[10%] left-[10%] h-[300px] w-[300px] rounded-full bg-[#ea7414]/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-[#ea7414]/5 blur-[150px]" />
      </div>
    </section>
  );
};

fill = "url(#paint5_linear_116:1140)"
  />
              <rect
                opacity="0.5"
                x="228.938"
                y="51.2812"
                width="119.25"
                height="116.438"
                stroke="url(#paint6_linear_116:1140)"
              />
              <rect
                opacity="0.1"
                x="228.938"
                y="51.2812"
                width="119.25"
                height="116.438"
                fill="url(#paint7_linear_116:1140)"
              />
              <path
                opacity="0.5"
                d="M347.906 51.2812L405 2V110.113L347.906 167.719V51.2812Z"
                stroke="url(#paint8_linear_116:1140)"
              />
              <path
                opacity="0.1"
                d="M347.906 51.2812L405 2V110.113L347.906 167.719V51.2812Z"
                fill="url(#paint9_linear_116:1140)"
              />
            </g >
  <defs>
    <linearGradient
      id="paint0_linear_116:1140"
      x1="49.0781"
      y1="112.313"
      x2="148.922"
      y2="131.859"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#4A6CF7" stopOpacity="0" />
      <stop offset="1" stopColor="#4A6CF7" />
    </linearGradient>
    <linearGradient
      id="paint1_linear_116:1140"
      x1="179.141"
      y1="209.062"
      x2="32.6026"
      y2="145.47"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#4A6CF7" />
      <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
    </linearGradient>
    <linearGradient
      id="paint2_linear_116:1140"
      x1="170.016"
      y1="125.25"
      x2="217.542"
      y2="125.507"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#4A6CF7" stopOpacity="0" />
      <stop offset="1" stopColor="#4A6CF7" />
    </linearGradient>
    <linearGradient
      id="paint3_linear_116:1140"
      x1="233.578"
      y1="113.156"
      x2="146.509"
      y2="143.95"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#4A6CF7" />
      <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
    </linearGradient>
    <linearGradient
      id="paint4_linear_116:1140"
      x1="-3.45633"
      y1="113.316"
      x2="46.311"
      y2="116.426"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#4A6CF7" stopOpacity="0" />
      <stop offset="1" stopColor="#4A6CF7" />
    </linearGradient>
    <linearGradient
      id="paint5_linear_116:1140"
      x1="69.8907"
      y1="189.234"
      x2="84.0124"
      y2="249.947"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#4A6CF7" />
      <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
    </linearGradient>
    <linearGradient
      id="paint6_linear_116:1140"
      x1="218.953"
      y1="157.453"
      x2="330.261"
      y2="148.369"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#4A6CF7" stopOpacity="0" />
      <stop offset="1" stopColor="#4A6CF7" />
    </linearGradient>
    <linearGradient
      id="paint7_linear_116:1140"
      x1="348.187"
      y1="46.6406"
      x2="280.112"
      y2="168.552"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#4A6CF7" />
      <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
    </linearGradient>
    <linearGradient
      id="paint8_linear_116:1140"
      x1="329"
      y1="190"
      x2="369.525"
      y2="-29.8829"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#4A6CF7" stopOpacity="0" />
      <stop offset="1" stopColor="#4A6CF7" />
    </linearGradient>
    <linearGradient
      id="paint9_linear_116:1140"
      x1="409"
      y1="10"
      x2="331.729"
      y2="34.2741"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#4A6CF7" />
      <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
    </linearGradient>
  </defs>
          </svg >
        </div >
  <div className="absolute right-0 top-0 z-[-1] hidden sm:block">
    <svg
      width="406"
      height="286"
      viewBox="0 0 406 286"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <rect
          opacity="0.5"
          x="57.25"
          y="108.344"
          width="116.719"
          height="116.438"
          stroke="url(#paint0_linear_116:1151)"
        />
        <rect
          opacity="0.1"
          x="57.25"
          y="108.344"
          width="116.719"
          height="116.438"
          fill="url(#paint1_linear_116:1151)"
        />
        <path
          opacity="0.5"
          d="M173.688 108.344L230.219 49V165.601L173.688 224.781V108.344Z"
          stroke="url(#paint2_linear_116:1151)"
        />
        <path
          opacity="0.1"
          d="M173.688 108.344L230.219 49V165.601L173.688 224.781V108.344Z"
          fill="url(#paint3_linear_116:1151)"
        />
        <path
          opacity="0.5"
          d="M1 167.619L57.25 108.344V224.85L1 284.125V167.619Z"
          stroke="url(#paint4_linear_116:1151)"
        />
        <path
          opacity="0.1"
          d="M1 167.619L57.25 108.344V224.85L1 284.125V167.619Z"
          fill="url(#paint5_linear_116:1151)"
        />
        <rect
          opacity="0.5"
          x="229.938"
          y="49.2812"
          width="119.25"
          height="116.438"
          stroke="url(#paint6_linear_116:1151)"
        />
        <rect
          opacity="0.1"
          x="229.938"
          y="49.2812"
          width="119.25"
          height="116.438"
          fill="url(#paint7_linear_116:1151)"
        />
        <path
          opacity="0.5"
          d="M348.906 49.2812L406 0V108.113L348.906 165.719V49.2812Z"
          stroke="url(#paint8_linear_116:1151)"
        />
        <path
          opacity="0.1"
          d="M348.906 49.2812L406 0V108.113L348.906 165.719V49.2812Z"
          fill="url(#paint9_linear_116:1151)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_116:1151"
          x1="50.0781"
          y1="110.313"
          x2="149.922"
          y2="129.859"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" stopOpacity="0" />
          <stop offset="1" stopColor="#4A6CF7" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_116:1151"
          x1="180.141"
          y1="207.062"
          x2="33.6026"
          y2="143.47"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" />
          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_116:1151"
          x1="171.016"
          y1="123.25"
          x2="218.542"
          y2="123.507"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" stopOpacity="0" />
          <stop offset="1" stopColor="#4A6CF7" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_116:1151"
          x1="234.578"
          y1="111.156"
          x2="147.509"
          y2="141.95"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" />
          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_116:1151"
          x1="85.5"
          y1="71.5"
          x2="100.174"
          y2="270.716"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" stopOpacity="0" />
          <stop offset="1" stopColor="#4A6CF7" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_116:1151"
          x1="70.8907"
          y1="187.234"
          x2="85.0124"
          y2="247.947"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" />
          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_116:1151"
          x1="219.953"
          y1="155.453"
          x2="331.261"
          y2="146.369"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" stopOpacity="0" />
          <stop offset="1" stopColor="#4A6CF7" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_116:1151"
          x1="349.187"
          y1="44.6406"
          x2="281.112"
          y2="166.552"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" />
          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_116:1151"
          x1="394.75"
          y1="64.3284"
          x2="409.531"
          y2="110.901"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" stopOpacity="0" />
          <stop offset="1" stopColor="#4A6CF7" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_116:1151"
          x1="410"
          y1="8.00001"
          x2="332.729"
          y2="32.2741"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" />
          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
      </section >
    </>
  );
};

export default ErrorPage;
