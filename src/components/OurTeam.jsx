import React, { useState } from "react";

const OurTeam = () => {
  const [activeMember, setActiveMember] = useState(0);

  // 7 Members total: 1 Leader + 6 Team Specialists
  const team = [
    {
      name: "Mukund Regmi, CPA",
      role: "CEO & Director",
      image: "/images/director.webp",
      isLeader: true,
    },
    {
      name: "Ishan Ghimire",
      role: "Manager",
      image: "/images/manager.webp",
    },
    {
      name: "Biswas Thapa",
      role: "Accountant",
      image: "/images/acountant.webp",
    },
    {
      name: "Gauri Shrestha",
      role: "Accountant",
      image: "/images/accountant1.jpg",
    },
    {
      name: "Sadika Karki",
      role: "Business Development",
      image: "/images/accountant2.jpg",
    },
    {
      name: "Subriti Acharya",
      role: "Trainee Accountant",
      image: "/images/accountant3.webp",
    },
    {
      name: "Sunanda Regmi",
      role: "Support Team",
      image: "/images/research.jpg",
    },
  ];

  return (
    <section className="bg-[#f6f4ef] text-[#071d49] py-24 lg:py-36 border-b border-[#ddd8cf]/40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        
        {/* TOP SECTION: INTRO BRIEF */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-18 items-start mb-20">
          <div className="space-y-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#7a818d]">
              07 — OUR TEAM
            </p>
            <h2 className="font-serif text-[2.8rem] sm:text-[3.5rem] lg:text-[3.8rem] leading-[1.05] tracking-[-0.03em]">
              Led by Mukund Regmi, CPA.
              <br />
              <span className="text-[#2B8B4F]/60 font-light italic">Backed by specialists in tax, accounting & credit.</span>
            </h2>
          </div>
          <div className="lg:pt-18 max-w-[420px]">
            <p className="text-[14px] sm:text-[20px] leading-[1.7] text-[#50555f] font-light">
              From CEO to trainee accountant to business development — every client has a direct line to the people doing the work, not a call-centre handover.
            </p>
          </div>
        </div>

        {/* CORE INTERACTIVE TEAM CANVAS & ROSTER */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: THE MEDIA CANVAS (Pinned Sticky) */}
<div className="lg:sticky lg:top-28 w-full max-w-[480px] mx-auto lg:mx-0 flex flex-col justify-start">
  
  {/* - Forced a precise fixed height (h-[480px] on small, h-[560px] on desktop)
    - Removed aspect-ratio modifiers completely to prevent vertical bloating
  */}
  <div className="relative overflow-hidden rounded-[24px] w-full h-[480px] lg:h-[560px] shadow-xl bg-[#041b49]">
    {team.map((member, idx) => (
      <img
        key={idx}
        src={member.image}
        alt={member.name}
        className={`absolute inset-0 size-full object-cover object-center transition-all duration-700 ease-in-out ${
          activeMember === idx 
            ? "opacity-100 scale-100 filter brightness-100" 
            : "opacity-0 scale-[1.02] pointer-events-none filter brightness-95"
        }`}
      />
    ))}
    {/* Clean gradient baseline to ground the image frame */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#041b49]/10 via-transparent to-transparent pointer-events-none" />
  </div>
  
  
</div>

          {/* RIGHT COLUMN: THE 7-MEMBER BREAKOUT GRID */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-[#d8d5cf]">
              
              {team.map((member, index) => {
                const isSelected = activeMember === index;
                
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveMember(index)}
                    onClick={() => setActiveMember(index)}
                    className={`group relative p-6 cursor-pointer transition-all duration-300 border-b border-r border-[#d8d5cf] flex flex-col justify-between min-h-[140px] ${
                      member.isLeader 
                        ? "col-span-full bg-[#ebe7df]/40 md:p-8 min-h-[40px]" 
                        : isSelected 
                        ? "bg-[#ebe7df]/60" 
                        : "hover:bg-[#ebe7df]/20"
                    }`}
                  >
                    {/* Top Highlight border line for currently active element */}
                    <span 
                      className={`absolute left-0 right-0 top-0 h-[2px] bg-[#071d49] transition-transform duration-500 origin-left ${
                        isSelected ? "scale-x-100" : "scale-x-0"
                      }`} 
                    />

                    {/* Numeric tracking context */}
                    

                    {/* Meta info layout */}
                    <div className={`space-y-0 text-center ${member.isLeader ? "mt-4 " : "mt-6"}`}>
                      <h3 className={`font-serif tracking-tight transition-all duration-300 ${
                        member.isLeader 
                          ? "text-[22px] sm:text-[26px] text-[#071d49] font-medium" 
                          : isSelected 
                          ? "text-[19px] sm:text-[21px] text-[#071d49] font-medium" 
                          : "text-[19px] sm:text-[21px] text-[#071d49]/80"
                      }`}>
                        {member.name}
                      </h3>
                      <p className="text-[13px] tracking-wide text-[#50555f] font-light">
                        {member.role}
                      </p>
                    </div>

                    {/* Arrow Micro-indicator */}
                    <div className="absolute top-8 right-8 overflow-hidden size-4">
                      <span className={`absolute inset-0 text-xs text-[#071d49] transition-transform duration-300 ${
                        isSelected ? "translate-x-0 translate-y-0 opacity-100" : "-translate-x-3 translate-y-3 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                      }`}>
                        ↗
                      </span>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurTeam;