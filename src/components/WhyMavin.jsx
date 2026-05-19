import React from "react";

const WhyMavin = () => {
  const points = [
    {
      title: "Choice",
      desc: "Access a wide panel of banks and lenders, all compared to find the best rates for you. If a lender doesn't fit, we'll look for others until we find the right solution.",
    },
    {
      title: "Convenience",
      desc: "We work around your schedule — meet in person or online, wherever and whenever suits you best. From start to settlement, simple and stress-free.",
    },
    {
      title: "Individualised",
      desc: "We don't believe in 'one size fits all.' Every client's financial journey is unique, so we tailor lending solutions around your goals and lifestyle.",
    },
    {
      title: "Free Service",
      desc: "From first enquiry to loan approval and beyond, our team keeps you informed every step of the way. A trusted advisor on call — no service fees, ever.",
    },
  ];

  return (
    <section className="relative bg-[#071d49] text-white py-24 lg:py-36 overflow-hidden">
      
      {/* ELEVATED DESIGN DETAIL: Subtle Blueprint Grid Background Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" 
        aria-hidden="true"
      />
      
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
        
        {/* TOP METADATA ROW */}
        <div className="mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-white/50">
            04 — WHY MAVIN
          </p>
        </div>

        {/* HERO HEADER STATEMENT */}
        <div className="max-w-[1100px] mb-24">
          <h2 className="font-serif text-[2.8rem] sm:text-[4.2rem] lg:text-[5.4rem] leading-[1.1] tracking-tight font-light text-white/95">
            Home loans are complicated.{" "}
            <span className="text-[#96dfc1] italic font-normal block sm:inline">
              We make them simple.
            </span>
          </h2>
        </div>

        {/* FOUR-COLUMN INTERACTIVE CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-white/5 lg:border-l-0">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="relative p-8 lg:p-10 border-b border-r border-white/5 group transition-all duration-500 hover:bg-white/[0.02]"
            >
              {/* Subtle light accent bar that beams onto the top boundary on hover */}
              <span className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#96dfc1]/0 to-transparent group-hover:via-[#96dfc1]/40 transition-all duration-700" />
              
              <div className="space-y-6">
                {/* Visual Number Indicator */}
                <div className="font-mono text-[10px] tracking-widest text-white/30 transition-colors duration-300 group-hover:text-[#96dfc1]/70">
                  // 0{idx + 1}
                </div>

                {/* Point Title */}
                <h3 className="font-serif text-[24px] sm:text-[28px] tracking-tight text-white/90 font-light group-hover:text-white transition-colors duration-300">
                  {point.title}
                </h3>

                {/* Point Description */}
                <p className="text-[14px] sm:text-[15px] leading-[1.7] text-white/60 font-light group-hover:text-white/80 transition-colors duration-300">
                  {point.desc}
                </p>
              </div>

              {/* Minimal geometric corner graphic seen on modern high-end UI */}
              <div className="absolute bottom-4 right-4 size-1.5 rounded-full bg-white/[0.03] transition-all duration-500 group-hover:bg-[#96dfc1] group-hover:scale-110" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyMavin;