import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <nav
      ref={dropdownRef}
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-[#f6f4ef]/80 backdrop-blur-md shadow-lg border-b border-[#ddd8cf]/50'
          : 'bg-[#f6f4ef] border-transparent'
      }`}
      style={{
        transform: isScrolled ? 'translateY(0)' : 'translateY(0)',
      }}
    >
      {/* Animated underline effect on scroll */}
      <div 
        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#000080] via-[#15803d] to-[#000080] transition-all duration-700 ${
          isScrolled ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between relative">
        {/* Left Side: Company Logo Lockup with animation */}
        <div 
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Mavin Business Advisors Logo */}
          <img
            src="/images/MBA.png"
            alt="Mavin Business Advisors"
            className={`h-14 w-auto object-contain object-left transition-all duration-500 ${
              isScrolled ? 'scale-100' : 'scale-100'
            } group-hover:scale-105`}
          />

          {/* Thin Premium Separator Line */}
          <div className={`h-8 w-[2px] transition-all duration-500 ${
            isScrolled ? 'bg-[#000080]/30' : 'bg-[#000080]/20'
          }`} />

          {/* Mavin Finance Logo */}
          <img
            src="/images/mavinfinance.png"
            alt="Mavin Finance"
            className={`h-12 w-auto object-contain object-left transition-all duration-500 ${
              isScrolled ? 'scale-100' : 'scale-100'
            } group-hover:scale-105`}
          />
        </div>

        {/* Center Links with Interactive Dropdowns */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium font-sans h-full">
          <a 
            href="#" 
            className={`relative transition-all duration-300 py-2 ${
              isScrolled 
                ? 'text-gray-700 hover:text-[#000080]' 
                : 'text-gray-700 hover:text-[#000080]'
            }`}
          >
            Home
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#000080] transition-transform duration-300 origin-left ${isScrolled ? 'scale-x-0 hover:scale-x-100' : 'scale-x-0 hover:scale-x-100'}`} />
          </a>

          {/* Business Advisors Dropdown Toggle */}
          <div className="relative h-full flex items-center">
            <button
              onClick={() => toggleDropdown('advisors')}
              className={`flex items-center gap-1 transition-all duration-300 py-2 focus:outline-none ${
                activeDropdown === 'advisors' 
                  ? 'text-[#000080] font-semibold'
                  : 'text-gray-700 hover:text-[#000080]'
              }`}
            >
              Business Advisors
              <svg className={`w-4 h-4 transition-all duration-300 ${activeDropdown === 'advisors' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Advisors Dropdown Menu Content Panel */}
            {activeDropdown === 'advisors' && (
              <div className="absolute top-[calc(100%-8px)] left-0 w-56 bg-[#f6f4ef] border border-[#ddd8cf] rounded-2xl shadow-xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                <a href="#accounting" onClick={() => setActiveDropdown(null)} className="block px-5 py-2.5 hover:bg-[#e8e5de] text-gray-700 hover:text-[#000080] transition-all duration-300">Accounting</a>
                <a href="#tax-planning" onClick={() => setActiveDropdown(null)} className="block px-5 py-2.5 hover:bg-[#e8e5de] text-gray-700 hover:text-[#000080] transition-all duration-300">Tax Planning</a>
                <a href="#business-growth" onClick={() => setActiveDropdown(null)} className="block px-5 py-2.5 hover:bg-[#e8e5de] text-gray-700 hover:text-[#000080] transition-all duration-300">Business Growth</a>
              </div>
            )}
          </div>

          {/* Finance Dropdown Toggle */}
          <div className="relative h-full flex items-center">
            <button
              onClick={() => toggleDropdown('finance')}
              className={`flex items-center gap-1 transition-all duration-300 py-2 focus:outline-none ${
                activeDropdown === 'finance' 
                  ? 'text-[#15803d] font-semibold'
                  : 'text-gray-700 hover:text-[#15803d]'
              }`}
            >
              Finance
              <svg className={`w-4 h-4 transition-all duration-300 ${activeDropdown === 'finance' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Finance Dropdown Menu Content Panel */}
            {activeDropdown === 'finance' && (
              <div className="absolute top-[calc(100%-8px)] left-0 w-56 bg-[#f6f4ef] border border-[#ddd8cf] rounded-2xl shadow-xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                <a href="#home-loans" onClick={() => setActiveDropdown(null)} className="block px-5 py-2.5 hover:bg-[#e8e5de] text-gray-700 hover:text-[#15803d] transition-all duration-300">Home Loans</a>
                <a href="#asset-finance" onClick={() => setActiveDropdown(null)} className="block px-5 py-2.5 hover:bg-[#e8e5de] text-gray-700 hover:text-[#15803d] transition-all duration-300">Asset Finance</a>
                <a href="#commercial-lending" onClick={() => setActiveDropdown(null)} className="block px-5 py-2.5 hover:bg-[#e8e5de] text-gray-700 hover:text-[#15803d] transition-all duration-300">Commercial Lending</a>
              </div>
            )}
          </div>

          <a 
            href="#about-us" 
            className={`relative transition-all duration-300 py-2 ${
              isScrolled 
                ? 'text-gray-700 hover:text-[#000080]' 
                : 'text-gray-700 hover:text-[#000080]'
            }`}
          >
            About Us
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#000080] transition-transform duration-300 origin-left ${isScrolled ? 'scale-x-0 hover:scale-x-100' : 'scale-x-0 hover:scale-x-100'}`} />
          </a>

          <a 
            href="#resources" 
            className={`relative transition-all duration-300 py-2 ${
              isScrolled 
                ? 'text-gray-700 hover:text-[#000080]' 
                : 'text-gray-700 hover:text-[#000080]'
            }`}
          >
            Resources
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#000080] transition-transform duration-300 origin-left ${isScrolled ? 'scale-x-0 hover:scale-x-100' : 'scale-x-0 hover:scale-x-100'}`} />
          </a>
        </div>

        {/* Right Side: Dual Call-to-Action (CTA) Buttons with animations */}
        <div className="flex items-center gap-3 font-sans">
          {/* Button 1 (Blue) */}
          <button className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 transform active:scale-95 whitespace-nowrap ${
            isScrolled
              ? 'bg-[#000080] text-white hover:bg-[#000080]/90 hover:shadow-lg hover:-translate-y-0.5'
              : 'bg-[#000080] text-white hover:bg-[#000080]/90 hover:shadow-lg hover:-translate-y-0.5'
          }`}>
            Book an Advisor
          </button>

          {/* Button 2 (Green) */}
          <button className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 transform active:scale-95 whitespace-nowrap ${
            isScrolled
              ? 'bg-[#15803d] text-white hover:bg-[#15803d]/90 hover:shadow-lg hover:-translate-y-0.5'
              : 'bg-[#15803d] text-white hover:bg-[#15803d]/90 hover:shadow-lg hover:-translate-y-0.5'
          }`}>
            Get a Loan Quote
          </button>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .slide-in-from-top-2 {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}