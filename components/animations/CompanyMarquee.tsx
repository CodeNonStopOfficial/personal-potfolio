"use client";

import Image from "next/image";

export default function CompanyMarquee() {
  const companyLogos = [
    "slack",
    "framer",
    "netflix",
    "google",
    "linkedin",
    "instagram",
    "facebook",
  ];

  return (
    <section className="w-full py-14 overflow-hidden bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-[0.2em]">
            Trusted Worldwide
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white">
            Teams building faster with us
          </h2>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          {/* Left Blur */}
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-white dark:from-black to-transparent" />

          {/* Right Blur */}
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-white dark:from-black to-transparent" />

          <div className="flex marquee whitespace-nowrap">
            {[...companyLogos, ...companyLogos].map((company, index) => (
              <div
                key={index}
                className="mx-4 md:mx-6 flex h-16 min-w-[140px] items-center justify-center rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 px-6 backdrop-blur-sm"
              >
                <Image
                  src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
                  alt={company}
                  width={110}
                  height={40}
    
                  className="h-7 w-auto dark:invert opacity-70 hover:opacity-100 transition"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .marquee {
          width: max-content;
          animation: scroll 20s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}