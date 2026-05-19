import React, { useState } from "react";

const CoreValues = () => {
  const [activeValue, setActiveValue] = useState(0);

  const values = [
    {
      metric: "25+",
      title: "Bank & Lender Panel",
      desc: "We look across Australia's leading institutional and private credit pools to negotiate terms that match your exact entity structure.",
      detail: "Zero premium bias. Total structural alignment.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
    },
    {
      metric: "100%",
      title: "Direct Specialist Access",
      desc: "No account managers or automated switchboards. You talk directly with the chartered accountants and senior credit advisers executing your strategy.",
      detail: "In-house transparency from consultation to execution.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop"
    },
    {
      metric: "$0",
      title: "Upfront Service Fees",
      desc: "Our mortgage and strategic lending evaluations are entirely complimentary. We get compensated purely on successful outcomes.",
      detail: "Completely risk-free tactical capital planning.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-[#f6f4ef] text-[#071d49] py-24 lg:py-36 border-b border-[#ddd8cf]/40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        
        {/* UPPER ANCHOR HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start mb-24">
          <div className="space-y-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#7a818d]">
              04 — ADVANTAGE
            </p>
            <h2 className="font-serif text-[2.8rem] sm:text-[4rem] lg:text-[4.6rem] leading-[1.05] tracking-[-0.03em]">
              Uncompromising alignment.
              <br />
              <span className="text-[#7a818d] font-light italic">Built around your balance sheet.</span>
            </h2>
          </div>
          <div className="lg:pt-14 max-w-[420px]">
            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[#50555f] font-light">
              We coordinate your borrowing capacity directly alongside your corporate tax positions, turning traditional liabilities into strategic growth levers.
            </p>
          </div>
        </div>

        {/* INTERACTIVE WORKSPACE ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
          
          {/* LEFT SIDE: MULTI-COLUMN INTERACTIVE METRIC LIST */}
          <div className="border-t border-[#d8d5cf] divide-y divide-[#d8d5cf]">
            {values.map((item, index) => {
              const isSelected = activeValue === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveValue(index)}
                  onClick={() => setActiveValue(index)}
                  className={`group relative py-10 px-4 cursor-pointer transition-all duration-500 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12 ${
                    isSelected ? "bg-[#ebe7df]/50 md:pl-8" : "hover:bg-[#ebe7df]/20"
                  }`}
                >
                  {/* Left Side Accent Line */}
                  <span 
                    className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#071d49] transition-transform duration-500 origin-center ${
                      isSelected ? "scale-y-100" : "scale-y-0"
                    }`} 
                  />

                  {/* Big Editorial Metric */}
                  <div className={`font-serif text-[3.5rem] md:text-[4rem] leading-none tracking-tight transition-all duration-500 ${
                    isSelected ? "text-[#071d49] font-medium scale-105 origin-left" : "text-[#7a818d]/40"
                  }`}>
                    {item.metric}
                  </div>

                  {/* Content Breakdown Block */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-serif text-[22px] sm:text-[24px] tracking-tight text-[#071d49] font-medium">
                        {item.title}
                      </h3>
                      <span className={`text-xs font-mono text-[#7a818d] transition-transform duration-300 ${
                        isSelected ? "rotate-45 text-[#071d49]" : ""
                      }`}>
                        →
                      </span>
                    </div>
                    
                    <p className="text-[15px] leading-[1.7] text-[#50555f] font-light max-w-[580px]">
                      {item.desc}
                    </p>

                    {/* Hidden Context Drawer - Slides open on active focus */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isSelected ? "max-h-12 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}>
                      <p className="font-mono text-[10px] tracking-wider text-[#071d49]/70 uppercase bg-[#ebe7df] inline-block px-3 py-1 rounded">
                        // {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE: LOCKED HEIGHT VISUAL COMPASS PANEL */}
          <div className="lg:sticky lg:top-28 w-full max-w-[380px] mx-auto lg:mx-0 flex flex-col justify-start hidden lg:flex">
            <div className="relative overflow-hidden rounded-[24px] w-full h-[520px] shadow-xl bg-[#041b49]">
              {values.map((item, idx) => (
                <img
                  key={idx}
                  src={item.image}
                  alt={item.title}
                  className={`absolute inset-0 size-full object-cover object-center transition-all duration-700 ease-in-out ${
                    activeValue === idx 
                      ? "opacity-100 scale-100 filter brightness-95" 
                      : "opacity-0 scale-[1.03] pointer-events-none filter brightness-75"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#041b49]/20 via-transparent to-transparent pointer-events-none" />
            </div>
            
            <div className="flex justify-between items-center text-[9px] font-mono tracking-[0.25em] text-[#7a818d] px-1 pt-3">
              <span>PERSPECTIVE INDEX // 0{activeValue + 1}</span>
              <span className="text-[#071d49]/60 font-semibold">MAVIN ADVISORS</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CoreValues;