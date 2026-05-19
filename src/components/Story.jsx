import React from "react";

const Story = () => {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#071d49] text-white py-12 px-6 sm:px-12 lg:px-20">
      
      {/* Background Image Layer with Muted Dark Cinematic Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury architectural estate by the coast"
          className="w-full h-full object-cover select-none pointer-events-none tracking-normal"
        />
        {/* Balanced backdrop filter to match the editorial, premium contrast style */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#071d49]/20 mix-blend-color" />
      </div>

      {/* TOP ROW: Minimal Subheading Context */}
      <div className="relative z-10 w-full pt-4 px-12">
        <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-white/60">
          A Client Story — Haymarket, NSW
        </p>
      </div>

      {/* CENTER ROW: The Massive Statement Quote Block */}
      <div className="relative z-10 w-full max-w-[1250px] my-auto py-12 px-12 text-center justify-center">
        <h2 className="font-serif text-[2.2rem] sm:text-[3.8rem] lg:text-[4.8rem] xl:text-[5.4rem] leading-[1.1] tracking-tight font-light text-white/95">
          "Mavin set up our trust, lodged our BAS, and{" "}
          <span className="text-[#96dfc1] italic font-normal">refinanced our home loan</span>{" "}
          — all without us having to repeat ourselves once."
        </h2>
      </div>

      {/* BOTTOM ROW: Author/Metadata Details */}
      <div className="relative z-10 w-full border-t border-white/10 pt-6 px-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div className="space-y-1">
          <p className="font-serif text-[15px] sm:text-[16px] text-white font-medium tracking-tight">
            Small business owner
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">
            Sydney, NSW
          </p>
        </div>
        
        {/* Optional subtle accent indicator matching your design guidelines */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-[#0d9b61]" />
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">Verified Engagement</span>
        </div>
      </div>

    </section>
  );
};

export default Story;