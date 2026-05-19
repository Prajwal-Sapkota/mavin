import React from "react";

const Method = () => {
  const chapters = [
    {
      num: "I",
      title: "Discover",
      desc: "We listen first — your business, your goals, your borrowing needs — and map your current tax, accounting and loan position onto a single page.",
    },
    {
      num: "II",
      title: "Strategy",
      desc: "We design the right business structure and the right loan structure together, so the tax position and the lending position support each other.",
    },
    {
      num: "III",
      title: "Execute",
      desc: "Our team handles paperwork, lodgements, restructures and lender negotiations across our 25+ panel — quietly, in the background.",
    },
    {
      num: "IV",
      title: "Coach",
      desc: "Ongoing advisory, quarterly reviews and proactive reminders so the plan keeps pace with your business and your life.",
    },
  ];

  return (
    <section className="bg-[#f6f4ef] text-[#071d49] py-24 lg:py-36 border-b border-[#ddd8cf]/40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: STICKY BRAND ANCHOR */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#7a818d]">
                05 — THE METHOD
              </p>
            </div>
            
            <h2 className="font-serif text-[3rem] sm:text-[4rem] lg:text-[4.6rem] leading-[1.05] tracking-[-0.03em]">
              Four chapters.
              <br />
              <span className="text-[#7a818d] font-light italic">One direction.</span>
            </h2>
          </div>

          {/* RIGHT COLUMN: EDITORIAL CHAPTER LIST */}
          <div className="border-t border-[#d8d5cf] divide-y divide-[#d8d5cf]">
            {chapters.map((chapter, index) => (
              <div 
                key={index} 
                className="grid grid-cols-[auto_1fr] md:grid-cols-[60px_1fr_1.5fr] gap-x-6 gap-y-4 py-10 lg:py-14 group transition-all duration-500 hover:bg-[#ebe7df]/30 md:px-4"
              >
                {/* Roman Numeral Accent */}
                <div className="font-serif text-[20px] sm:text-[24px] text-[#7a818d]/50 italic transition-colors duration-300 group-hover:text-[#071d49] font-light">
                  {chapter.num}
                </div>

                {/* Chapter Title */}
                <h3 className="font-serif text-[24px] sm:text-[32px] leading-none tracking-tight text-[#071d49]/90 font-light transition-transform duration-300 group-hover:translate-x-1">
                  {chapter.title}
                </h3>

                {/* Chapter Description */}
                <div className="col-span-2 md:col-span-1 md:pl-4">
                  <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#50555f] font-light max-w-[520px] transition-colors duration-300 group-hover:text-[#071d49]">
                    {chapter.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Method;