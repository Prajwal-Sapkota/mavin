import React from "react";

const Consultation = () => {
  return (
    <section className="relative w-full min-h-[640px] lg:min-h-[720px] flex items-center justify-center bg-[#071527] overflow-hidden py-24 lg:py-32">
      
      {/* 1. IMMERSIVE EDITORIAL BACKGROUND MATRIX */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop"
          alt="Mavin Architectural Setting"
          className="w-full h-full object-cover scale-[1.05] transition-transform duration-[1000ms] object-center brightness-[0.35] contrast-[1.05]"
        />
        {/* Deep, signature dark blue gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071d49]/20 via-[#041126]/40 to-[#041126]/50" />
      </div>

      {/* 2. CORE CONTENT STRUCTURE */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        <div className="max-w-[760px] space-y-8 text-left">
          
          {/* Section Sub-Header Anchor */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#a4adb8]/70">
              08 — REQUEST A FREE CONSULTATION
            </p>
          </div>

          {/* Core Dynamic Headline */}
          <h2 className="font-serif text-[3.2rem] sm:text-[4.5rem] lg:text-[5.4rem] leading-[1.05] tracking-[-0.02em] text-[#f6f4ef]">
            Talk to an <span className="text-[#69c99e] font-light italic">expert.</span>
          </h2>

          {/* Context Descriptive Block */}
          <p className="text-[16px] sm:text-[18px] leading-[1.65] text-[#d1d7e0] font-light max-w-[560px]">
            Whether you are starting a business, restructuring a trust, refinancing your home or buying your first — book a free, obligation-free conversation.
          </p>

          {/* 3. PREMIUM ACTION CALLOUTS (Interactive Pill Actions) */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            
            {/* Primary Action: Email Link */}
            <a
              href="mailto:info@mavinadvisors.com.au"
              className="group relative flex items-center justify-between gap-8 bg-[#f6f4ef] text-[#071d49] font-medium text-[14px] px-7 py-4 rounded-full shadow-lg hover:bg-[#ffffff] transition-all duration-300 transform active:scale-[0.98] w-full sm:w-auto"
            >
              <span>info@mavinadvisors.com.au</span>
              <span className="text-xs transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            {/* Secondary Action: WhatsApp/Phone */}
            <a
              href="https://wa.me/61449822420"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 border border-[#ffffff]/20 hover:border-[#ffffff]/50 bg-white/5 hover:bg-white/10 text-[#f6f4ef] font-light text-[14px] px-7 py-4 rounded-full transition-all duration-300 w-full sm:w-auto backdrop-blur-xs"
            >
              <span className="inline-block size-1.5 rounded-full bg-[#69c99e] animate-pulse" />
              <span>+61 449 822 420 (WhatsApp)</span>
            </a>

          </div>

          

        </div>
      </div>

    </section>
  );
};

export default Consultation;
