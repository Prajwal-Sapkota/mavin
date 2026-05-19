import React from "react";

const About = () => {
  return (
    <section className="relative bg-[#f6f4ef] text-[#071d49] py-20 lg:py-32 overflow-hidden border-b border-[#ddd8cf]/40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        
        {/* Top Minimal Label */}
        <div className="mb-12 flex justify-between items-center border-b border-[#d8d5cf] pb-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#7a818d]">
            01 — THE VISIONARY
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#7a818d] hidden sm:block">
            MAVIN LEADERSHIP
          </p>
        </div>

        {/* INNOVATIVE 3-COLUMN CENTERED IMAGE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1.2fr] gap-8 lg:gap-12 items-end relative">
          
          {/* COLUMN 1: LEFT SIDE TITLES */}
          <div className="space-y-6 lg:pb-16 z-10">
            <h2 className="font-serif text-[3.2rem] sm:text-[4rem] lg:text-[4.8rem] leading-[1.0] tracking-tight text-[#041b49]">
              Two disciplines.
              <br />
              <span className="text-[#19198B]/90 italic font-light">One integrated</span>
              <br />
              <span>firm.</span>
            </h2>
            
           
          </div>

          {/* COLUMN 2: THE CENTER PIECE (DIRECTOR FRAME) */}
          <div className="relative group justify-self-center w-full max-w-[360px] lg:max-w-none z-20">
            {/* Elegant outer subtle border box that frames the director */}
            <div className="absolute -inset-4 border border-[#ddd8cf] rounded-[40px] pointer-events-none tracking-widest uppercase font-mono text-[9px] text-[#7a818d]/40 p-6 flex items-end justify-between transition-transform duration-700 group-hover:scale-[1.02]">
              <span>DIR. LEVEL</span>
              <span>EST. 2011</span>
            </div>
            
            {/* The Image Container */}
            <div className="relative overflow-hidden rounded-[34px] aspect-[3/4] shadow-xl bg-[#041b49]">
              <img
                src="/images/director.webp"
                alt="Managing Director"
                className="absolute inset-0 size-full object-cover  contract-115 transition-all duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-0"
              />
              {/* Subtle elegant gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#041b49]/60 via-transparent to-transparent opacity-80" />
              
              {/* Floating Director Name tag */}
              <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                <p className="font-serif text-xl tracking-tight leading-none">Mukund Regmi</p>
                <p className="font-mono text-[9px] uppercase tracking-widest text-white/60 mt-1.5">Managing Director</p>
              </div>
            </div>
          </div>

          {/* COLUMN 3: RIGHT SIDE BLOCK QUOTE */}
          <div className="lg:pb-16 z-10 lg:text-center">
             <p className="text-[16px] leading-[1.7] text-[#50555f] max-w-[420px] pb-12">
              We bridge the gap between complex enterprise taxation and your personal property 
              aspirations, aligning your numbers under a singular strategic view.
            </p>
            <span className="font-serif text-[7rem] leading-none text-[#0d9b61]/20 block lg:h-6 -mb-6 lg:rtl">“</span>
            <h3 className="font-serif text-[24px] sm:text-[28px] leading-[1.4] tracking-tight text-[#041b49] font-light italic">
              "True growth occurs when business compliance and structural finance move together 
              in perfect synergy."
            </h3>
            <div className="mt-6 inline-flex items-center gap-2 border-t border-[#d8d5cf] pt-4 text-left">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0d9b61]" />
              <p className="font-mono text-[10px] tracking-widest uppercase text-[#7a818d]">A Message From Leadership</p>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: EXPANDED STATEMENT & 4-COLUMN SUB-GRID */}
        <div className="mt-24 pt-16 border-t border-[#d8d5cf]/70">
          <div className="max-w-7xl">
            <h4 className="font-serif text-[2.2rem] sm:text-[3.2rem] leading-[1.15] tracking-[-0.02em] text-[#041b49] mb-16 text-center">
              Over the past few decades, our firm has been a valued partner to Australian enterprises 
              across diverse industries. We take pride in our team of{" "}
              <span className="text-[#2B8B4F]/70 font-light italic">enthusiastic experts</span> dedicated 
              to comprehensive solutions for medium businesses — and to cracking the best mortgage deal.
            </h4>
          </div>

          {/* Clean Clean Minimal Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              {
                title: "Fast & Flexible Loans",
                desc: "Quick approvals through a streamlined process and access to multiple lenders tailored to your lifestyle financial goals."
              },
              {
                title: "Complete Support",
                desc: "From application to settlement, we handle paperwork, liaise with lenders and guide you through a stress-free finance journey."
              },
              {
                title: "Personalised Service",
                desc: "We work around your schedule, online or in person. Individualised, 100% free advice to achieve lasting financial wellbeing."
              },
              {
                title: "More Choice & Freedom",
                desc: "Choose from 25+ banks and lenders for competitive rates and flexible structures empowering confident choices."
              }
            ].map((feat, index) => (
              <div key={index} className="border-t border-[#d8d5cf] pt-5 space-y-3">
                <h5 className="font-serif text-[19px] tracking-tight text-[#041b49] font-medium">
                  {feat.title}
                </h5>
                <p className="text-[14px] leading-[1.6] text-[#50555f]">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;