import React, { useEffect, useMemo, useState } from "react";
import { FaArrowRight, FaCircle } from "react-icons/fa";

const fmtAUD = (n) =>
  new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(n);

function useTicker(target, duration = 1000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf;
    let start;

    const animate = (time) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return Math.round(value);
}

const Range = ({ label, value, min, max, step, onChange, fmt }) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
          {label}
        </span>
        <span className="font-mono text-sm text-white">
          {fmt(value)}
        </span>
      </div>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-[3px] w-full appearance-none rounded-full"
        style={{
          background: `linear-gradient(to right, #18d47b 0%, #18d47b ${percentage}%, rgba(255,255,255,0.2) ${percentage}%, rgba(255,255,255,0.2) 100%)`,
        }}
      />
    </div>
  );
};

const Hero = () => {
  const [income, setIncome] = useState(220000);
  const [deposit, setDeposit] = useState(180000);

  const borrowingPower = useMemo(() => {
    const surplus = income * 0.55;
    const monthly = surplus / 12;
    const r = 0.0625 / 12;
    const n = 30 * 12;
    const loan = Math.round((monthly * (1 - Math.pow(1 + r, -n))) / r);
    return loan + deposit;
  }, [income, deposit]);

  const animatedPower = useTicker(borrowingPower);

  return (
    <section className="relative overflow-hidden bg-[#f6f4ef]">
      {/* GLOW EFFECTS */}
      {/* Green glow - Top right */}
      <div className="absolute -top-60 -right-80 w-[600px] h-[600px] rounded-full bg-[#18c978]/10 blur-3xl" />

      {/* Blue glow - Left center */}
      <div className="absolute top-80 -left-3/5 transform -translate-y-1/2 w-[700px] h-[600px] rounded-full bg-[#000080]/10 blur-3xl" />

      {/* Additional subtle green glow - Bottom left */}
      <div className="absolute bottom-3/5 -left-20 w-[300px] h-[500px] rounded-full bg-[#18c978]/10 blur-3xl" />

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.06) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(0,0,0,0.02) 2px, transparent 2px)
            `,
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pt-18 pb-12 lg:px-10">
        {/* TOP BAR */}
        <div className="mb-10 flex items-center justify-between text-[11px] uppercase tracking-[0.35em] text-[#68707b]">
          <div className="flex items-center gap-3">
            <FaCircle className="text-[6px] text-[#18c978]" />
            <span>Sydney</span>
            <span>•</span>
            <span>Haymarket NSW</span>
          </div>
          <p className="hidden md:block">EST. WITH 15+ YEARS OF EXPERIENCE</p>
        </div>

        {/* HEADING */}
        <div className="text-left max-w-[1200px]">
          <h1
            className="
              font-serif
              text-[4rem]
              leading-[0.9]
              tracking-[-0.06em]
              text-[#041b49]
              sm:text-[5.5rem]
              md:text-[7rem]
              lg:text-[8rem]
            "
          >
            Your business,
            <span className="ml-3 italic font-light text-[#18c978]">
              and
            </span>
            <br />
            your first home—
            <br />
            <span className="italic font-light">
              one trusted Mavin.
            </span>
          </h1>
        </div>

        {/* LEFT CONTENT + RIGHT IMAGES - SIDE BY SIDE */}
        <div className="grid grid-cols-1 gap-16 mt-20 lg:grid-cols-3">
          {/* LEFT SIDE - Text, Buttons, Stats (1/3 width) */}
          <div className="lg:col-span-1">
            <p className="text-[20px] leading-[1.8] text-[#5d6570]">
              Mavin Business Advisors and Mavin Finance —
              under one roof. From Virtual CFO and taxation
              to first-home loans, refinancing and investment
              property finance. One team. Two disciplines.
              Australia-wide.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="group flex items-center gap-3 rounded-full bg-[#041b49] pl-7 pr-2 py-2 text-white transition duration-300 hover:scale-[1.02]">
                <span className="text-sm font-medium">Talk to an expert</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#18d47b] text-[#041b49] transition duration-300 group-hover:rotate-45">
                  <FaArrowRight size={13} />
                </span>
              </button>
              <button className="rounded-full border border-[#d7d4cc] bg-white/60 px-7 py-3 text-sm font-medium text-[#041b49] backdrop-blur-sm transition hover:bg-white">
                Try the calculators
              </button>
            </div>

            {/* STATS */}
            <div className="mt-14 grid max-w-[460px] grid-cols-3 gap-4 border-t border-[#ddd8cf] pt-6">
              {[
                { number: "25+", label: "BANKS &\nLENDERS" },
                { number: "15yr", label: "INDUSTRY\nEXPERIENCE" },
                { number: "100%", label: "FREE BROKING\nADVICE" },
              ].map((item, i) => (
                <div key={i} className="border-l border-gray-300">
                  <h3 className="font-serif text-5xl tracking-tight text-[#041b49] pl-3">
                    {item.number}
                  </h3>
                  <p className="mt-2 whitespace-pre-line text-[10px] uppercase tracking-[0.3em] text-[#7a8089] pl-3">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Images + Calculator (2/3 width) */}
          <div className="lg:col-span-2">
            {/* Images with Masonry Grid Layout */}
            <div className="grid grid-cols-2 gap-5">
              {/* LEFT COLUMN - Large image spanning 2 rows */}
              <div className="row-span-2">
                <div className="group relative overflow-hidden rounded-[34px] h-full">
                  <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop"
                    alt="Business consulting"
                    className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-[#041b49] backdrop-blur-sm">
                    ● MAVIN ADVISORS
                  </div>
                  <div className="absolute bottom-7 left-7 text-white">
                    <h2 className="max-w-[250px] font-serif text-4xl leading-[1.02]">
                      Business consulting & taxation
                    </h2>
                    <p className="mt-3 text-sm text-white/80">
                      Suite 27/301 Castlereagh St, Haymarket
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - Two small images stacked */}
              <div className="space-y-5">
                <div className="group relative overflow-hidden rounded-[30px]">
                  <img
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
                    alt="Mortgage"
                    className="h-[260px] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[9px] uppercase tracking-[0.28em] text-[#041b49]">
                    ● MAVIN FINANCE
                  </div>
                  <div className="absolute bottom-5 left-5 text-white">
                    <h3 className="max-w-[180px] font-serif text-3xl leading-[1.02]">
                      Your trusted mortgage partner.
                    </h3>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-[30px]">
                  <img
                    src="https://images.unsplash.com/photo-1506973035872-a4ec16b8d339?q=80&w=1200&auto=format&fit=crop"
                    alt="Australia"
                    className="h-[260px] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-5 left-5 text-white">
                    <p className="text-[9px] uppercase tracking-[0.28em] text-white/80">
                      Servicing
                    </p>
                    <h3 className="font-serif text-3xl leading-tight">
                      All of Australia
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* CALCULATOR SECTION - Below images */}
            <div className="mt-8">
              <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-r from-[#02163d] to-[#01263f] p-6 md:p-8 text-white">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#18d47b]/20 blur-3xl" />

                {/* Two column grid for calculator */}
                <div className="relative grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
                  {/* LEFT COLUMN - Text content */}
                  <div>
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.35em] text-[#18d47b]">
                      LIVE • BORROWING POWER
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.05]">
                      How much could you borrow?
                    </h2>
                    <p className="mt-4 md:mt-6 pt-2 text-xs leading-relaxed text-white/45">
                      Adjust the sliders. Indicative only —
                      built from our actual broker assessment
                      model.
                    </p>
                  </div>

                  {/* RIGHT COLUMN - Ticker and sliders */}
                  <div>
                    <div className="mb-6">
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                        Estimate
                      </p>
                      <div className="font-serif text-3xl md:text-4xl lg:text-5xl leading-none tracking-tight text-white break-words">
                        {fmtAUD(animatedPower)}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <Range
                        label="Household income"
                        value={income}
                        min={80000}
                        max={500000}
                        step={5000}
                        onChange={setIncome}
                        fmt={fmtAUD}
                      />
                      <Range
                        label="Deposit"
                        value={deposit}
                        min={0}
                        max={500000}
                        step={5000}
                        onChange={setDeposit}
                        fmt={fmtAUD}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BRAND LOGOS - Full Width Section (Outside the max-width container) */}
      <div className="w-full bg-[#F3F9FD] border-y border-[#ddd8cf]/50 py-5 mt-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            {/* Left Anchor Text */}
            <div className="flex-shrink-0">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#7a818d] font-bold whitespace-nowrap">
                Accredited with 25+ Australian lenders
              </span>
            </div>

            {/* Right Masked Marquee Wrapper - Hover only affects this container */}
            <div className="marquee-container relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
              <div className="relative flex w-full overflow-x-hidden py-1">
                {/* Track 1: Primary Animation Loop */}
                <div className="animate-marquee flex items-center space-x-16 whitespace-nowrap">
                  {["Westpac", "NAB", "ANZ", "Macquarie", "St.George", "Bankwest", "CommBank", "Suncorp", "ING", "AMP"].map((brand, i) => (
                    <div
                      key={`first-${i}`}
                      className="font-serif text-[22px] tracking-tight text-[#5e6675]/60 font-medium transition duration-300 hover:text-[#041b49] cursor-default select-none"
                    >
                      {brand}
                    </div>
                  ))}
                  {/* Duplicate the same brands at the end to fill the gap */}
                  {["Westpac", "NAB", "ANZ", "Macquarie", "St.George", "Bankwest", "CommBank", "Suncorp", "ING", "AMP"].map((brand, i) => (
                    <div
                      key={`first-dup-${i}`}
                      className="font-serif text-[22px] tracking-tight text-[#5e6675]/60 font-medium transition duration-300 hover:text-[#041b49] cursor-default select-none"
                    >
                      {brand}
                    </div>
                  ))}
                </div>

                {/* Track 2: Duplicate for seamless loop */}
                <div className="animate-marquee2 flex items-center space-x-16 whitespace-nowrap">
                  {["Westpac", "NAB", "ANZ", "Macquarie", "St.George", "Bankwest", "CommBank", "Suncorp", "ING", "AMP"].map((brand, i) => (
                    <div
                      key={`second-${i}`}
                      className="font-serif text-[22px] tracking-tight text-[#5e6675]/60 font-medium transition duration-300 hover:text-[#041b49] cursor-default select-none"
                    >
                      {brand}
                    </div>
                  ))}
                  {/* Duplicate the same brands at the end to fill the gap */}
                  {["Westpac", "NAB", "ANZ", "Macquarie", "St.George", "Bankwest", "CommBank", "Suncorp", "ING", "AMP"].map((brand, i) => (
                    <div
                      key={`second-dup-${i}`}
                      className="font-serif text-[22px] tracking-tight text-[#5e6675]/60 font-medium transition duration-300 hover:text-[#041b49] cursor-default select-none"
                    >
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <style jsx>{`
  @keyframes pulse-slow {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.6;
      transform: scale(1.05);
    }
  }

  /* Seamless loop track 1 - moves left */
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  /* Seamless loop track 2 - follows track 1 */
  @keyframes marquee2 {
    0% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(0);
    }
  }

  .animate-pulse-slow {
    animation: pulse-slow 6s ease-in-out infinite;
  }

  .animate-marquee {
    animation: marquee 25s linear infinite;
  }

  .animate-marquee2 {
    animation: marquee2 25s linear infinite;
  }

  /* Hover only pauses the marquee container - not the whole hero */
  .marquee-container:hover .animate-marquee,
  .marquee-container:hover .animate-marquee2 {
    animation-play-state: paused;
  }
`}</style>
    </section>
  );
};

export default Hero;