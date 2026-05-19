import React, { useState } from "react";

const Services = () => {
  // Separate active states for each accordion so they work independently
  const [activeAdvisory, setActiveAdvisory] = useState(1); // Defaulting to Business Consulting
  const [activeFinance, setActiveFinance] = useState(0);   // Defaulting to First Home Buyer Loans

  const advisoryServices = [
    {
      title: "Corporate Restructuring & Asset Protection",
      desc: "Strategic restructuring plans designed to ring-fence core corporate properties and optimize corporate governance. We safeguard long-term family wealth against complex operational risk profiles.",
    },
    {
      title: "Business Consulting / Advisory",
      desc: "Corporate restructuring, business consulting, taxation services, corporate secretarial, bookkeeping and Virtual CFO — designed so you receive a comprehensive service, addressing all your tax, accounting and financial requirements.",
    },
    {
      title: "Taxation Services",
      desc: "Proactive compliance and structured mapping across Australian corporate tax frameworks. Minimize dynamic liabilities while maintaining rigorous auditing alignment.",
    },
    {
      title: "Corporate Secretarial",
      desc: "Complete regulatory compliance and ASIC management portfolios. Streamlined governance tracking to let your internal leadership focus exclusively on expanding market capitalization.",
    },
    {
      title: "Bookkeeping",
      desc: "Impeccable cash-flow ledgers and automated real-time transaction reconciliation. Clean data pipelines engineered to deliver complete financial transparency at a single glance.",
    },
    {
      title: "Virtual CFO Service",
      desc: "High-tier institutional board advisory, detailed forward projections, and risk mitigation strategies without the overhead scale of a full-time localized executive appointment.",
    },
  ];

  const financeServices = [
    {
      title: "First Home Buyer Loans",
      desc: "Navigating your very first property purchase with clarity. We source tailored incentives, optimize grant applications, and structure your entry into the property market smoothly.",
    },
    {
      title: "Refinancing",
      desc: "Re-evaluating your current interest rates to break inefficient terms, extract equity targets, consolidate debts, and lower your recurring monthly repayment commitments.",
    },
    {
      title: "Investment Property Loans",
      desc: "Sophisticated leverage architectures engineered for scaling property portfolios. Maximize borrowing capacities and structure tax-effective configurations.",
    },
    {
      title: "Self-Employed Loans",
      desc: "Custom low-doc and alternative financial mapping for entrepreneurs and contractors. We look past rigid traditional payroll boxes to secure high-value approvals.",
    },
    {
      title: "Construction Loans",
      desc: "Progressive, step-by-step drawdown loan management to smoothly fund architectural builds from initial slab foundation to final handover handshakes.",
    },
    {
      title: "Car / Personal Loans",
      desc: "Streamlined, high-speed unsecured or asset-backed personal financing setups tailored to secure premium acquisitions with transparent interest timelines.",
    },
  ];

  const advisoryImages = [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop",
  ];

  const financeImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <div className="bg-[#f6f4ef]">
      
      {/* ================= SECTION 02: MAVIN BUSINESS ADVISORS (BLUE THEME — IMAGE LEFT) ================= */}
      <section className="relative text-[#071d49] py-20 lg:py-32 overflow-hidden border-b border-[#ddd8cf]/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] items-start">
            
            {/* LEFT COLUMN: BLUE VISUAL MEDIA ANCHOR */}
            <div className="sticky top-10 space-y-4 group">
              <div className="relative overflow-hidden rounded-[34px] aspect-[4/5] shadow-2xl bg-[#071d49]">
                {advisoryImages.map((imgSrc, idx) => (
                  <img
                    key={idx}
                    src={imgSrc}
                    alt="Mavin Advisory Hub"
                    className={`absolute inset-0 size-full object-cover transition-all duration-[1000ms] ease-out ${
                      activeAdvisory === idx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                    }`}
                  />
                ))}
                {/* Blue-tinted vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071d49]/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Layout Captions */}
              <div className="flex justify-between items-center text-[10px] font-mono tracking-[0.25em] text-[#7a818d] px-2 pt-2">
                <span>FIG. 02 — MAVIN BUSINESS ADVISORS</span>
                <span>MAVIN / SYDNEY</span>
              </div>
            </div>

            {/* RIGHT COLUMN: THE CONTENT LAYER (BLUE ACCENTS) */}
            <div className="lg:pl-8 space-y-10">
              <div className="space-y-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#7a818d]">
                  02 — MAVIN BUSINESS ADVISORS
                </p>
                <h2 className="font-serif text-[2.8rem] sm:text-[3.8rem] lg:text-[4.4rem] leading-[1.05] tracking-[-0.03em] text-[#071d49]">
                  The numbers
                  <br />
                  <span className="text-[#19198B] font-light italic">behind</span> <span>the business.</span>
                </h2>
              </div>

              {/* Accordion List — Blue Tint Highlight & Borders */}
              <div className="border-t border-[#d8d5cf] divide-y divide-[#d8d5cf]">
                {advisoryServices.map((service, index) => {
                  const isOpen = activeAdvisory === index;
                  return (
                    <div key={index} className={`transition-all duration-500 ${isOpen ? "bg-[#e1e6f0]/40 px-4 first:rounded-t-xl" : "bg-transparent px-0"}`}>
                      <button onClick={() => setActiveAdvisory(index)} className="w-full py-6 flex items-center justify-between text-left group/btn focus:outline-none">
                        <span className={`font-serif text-[18px] sm:text-[21px] tracking-tight transition-all duration-300 ${isOpen ? "text-[#19198B] font-medium translate-x-2" : "text-[#071d49] group-hover/btn:text-[#19198B]"}`}>
                          {service.title}
                        </span>
                        
                        {/* Geometric Plus/Minus Indicator - Blue Accent */}
                        <div className="relative flex items-center justify-center size-6 flex-shrink-0">
                          <span className={`absolute h-[1.5px] w-4 bg-[#071d49]/40 transition-transform duration-300 ${isOpen ? "rotate-90 !bg-[#19198B]" : ""}`} />
                          <span className={`absolute h-4 w-[1.5px] bg-[#071d49]/40 transition-transform duration-300 ${isOpen ? "rotate-90 scale-0 !bg-[#19198B]" : ""}`} />
                        </div>
                      </button>
                      
                      <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}>
                        <div className="overflow-hidden">
                          <p className="text-[15px] leading-[1.65] text-[#50555f] max-w-[580px] pl-2 border-l-2 border-[#19198B]/40">
                            {service.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4">
                <a href="#explore-advisory" className="inline-flex items-center gap-3 group/link font-serif text-[18px] tracking-tight text-[#071d49] font-medium">
                  <span className="underline underline-offset-8 decoration-[#ddd8cf] group-hover/link:decoration-[#19198B] transition-all duration-300">Explore Advisory</span>
                  <span className="text-xs transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">↗</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 03: MAVIN FINANCE (GREEN THEME — IMAGE RIGHT) ================= */}
      <section className="relative text-[#0d3b26] py-20 lg:py-32 overflow-hidden border-b border-[#ddd8cf]/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] items-start">
            
            {/* LEFT COLUMN: THE CONTENT LAYER (GREEN ACCENTS) */}
            <div className="lg:pr-8 space-y-10 order-2 lg:order-1">
              <div className="space-y-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#6b756f]">
                  03 — MAVIN FINANCE
                </p>
                <h2 className="font-serif text-[2.8rem] sm:text-[3.8rem] lg:text-[4.4rem] leading-[1.05] tracking-[-0.03em] text-[#0d3b26]">
                  Your trusted
                  <br />
                  <span className="text-[#2B8B4F]/80 font-light italic">mortgage</span> <span>partner.</span>
                </h2>
              </div>

              {/* Accordion List — Green Tint Highlight & Borders */}
              <div className="border-t border-[#ced6d1] divide-y divide-[#ced6d1]">
                {financeServices.map((service, index) => {
                  const isOpen = activeFinance === index;
                  return (
                    <div key={index} className={`transition-all duration-500 ${isOpen ? "bg-[#e2ebe5]/50 px-4 first:rounded-t-xl" : "bg-transparent px-0"}`}>
                      <button onClick={() => setActiveFinance(index)} className="w-full py-6 flex items-center justify-between text-left group/btn focus:outline-none">
                        <span className={`font-serif text-[18px] sm:text-[21px] tracking-tight transition-all duration-300 ${isOpen ? "text-[#2B8B4F] font-medium translate-x-2" : "text-[#0d3b26] group-hover/btn:text-[#2B8B4F]"}`}>
                          {service.title}
                        </span>
                        
                        {/* Geometric Plus/Minus Indicator - Green Accent */}
                        <div className="relative flex items-center justify-center size-6 flex-shrink-0">
                          <span className={`absolute h-[1.5px] w-4 bg-[#0d3b26]/40 transition-transform duration-300 ${isOpen ? "rotate-90 !bg-[#2B8B4F]" : ""}`} strokeWidth={1.5} />
                          <span className={`absolute h-4 w-[1.5px] bg-[#0d3b26]/40 transition-transform duration-300 ${isOpen ? "rotate-90 scale-0 !bg-[#2B8B4F]" : ""}`} strokeWidth={1.5} />
                        </div>
                      </button>
                      
                      <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}>
                        <div className="overflow-hidden">
                          <p className="text-[15px] leading-[1.65] text-[#4d5450] max-w-[580px] pl-2 border-l-2 border-[#2B8B4F]/40">
                            {service.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4">
                <a href="#explore-finance" className="inline-flex items-center gap-3 group/link font-serif text-[18px] tracking-tight text-[#0d3b26] font-medium">
                  <span className="underline underline-offset-8 decoration-[#ced6d1] group-hover/link:decoration-[#2B8B4F] transition-all duration-300">Explore Finance</span>
                  <span className="text-xs transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">↗</span>
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: GREEN VISUAL MEDIA ANCHOR */}
            <div className="sticky top-10 space-y-4 group order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-[34px] aspect-[4/5] shadow-2xl bg-[#0d3b26]">
                {financeImages.map((imgSrc, idx) => (
                  <img
                    key={idx}
                    src={imgSrc}
                    alt="Mavin Finance Track"
                    className={`absolute inset-0 size-full object-cover transition-all duration-[1000ms] ease-out ${
                      activeFinance === idx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                    }`}
                  />
                ))}
                {/* Green-tinted vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d3b26]/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Layout Captions */}
              <div className="flex justify-between items-center text-[10px] font-mono tracking-[0.25em] text-[#6b756f] px-2 pt-2">
                <span>FIG. 03 — MAVIN FINANCE</span>
                <span>MAVIN / SYDNEY</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;