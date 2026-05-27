import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Track window view size to inject ideal sizing overrides into Jotform's frame
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial size trace values
    handleResize();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent background scrolling when the modal window is open
  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup function to restore scrolling behavior if the component unmounts unexpectedly
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFormOpen]);

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  const handleOpenWizard = () => {
    setActiveDropdown(null);
    setIsFormOpen(true);
  };

  return (
    <>
      <nav
        ref={dropdownRef}
        className={`sticky top-0 z-50 w-full transition-all duration-500 ease-out ${isScrolled
            ? 'bg-[#f6f4ef]/80 backdrop-blur-md shadow-lg border-b border-[#ddd8cf]/50'
            : 'bg-[#f6f4ef] border-transparent'
          }`}
      >
        {/* Animated underline effect on scroll */}
        <div
          className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#000080] via-[#15803d] to-[#000080] transition-all duration-700 ${isScrolled ? 'w-full opacity-100' : 'w-0 opacity-0'
            }`}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 h-20 flex items-center justify-between relative">
          {/* Left Side: Company Logo Lockup */}
          <div
            className="flex items-center gap-2 sm:gap-4 cursor-pointer group shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/* Mavin Business Advisors Logo */}
            <img
              src="/images/MBA.png"
              alt="Mavin Business Advisors"
              className="h-10 sm:h-14 w-auto object-contain object-left transition-all duration-500 group-hover:scale-105"
            />

            {/* Thin Premium Separator Line */}
            <div className={`h-6 sm:h-8 w-[2px] transition-all duration-500 ${isScrolled ? 'bg-[#000080]/30' : 'bg-[#000080]/20'
              }`} />

            {/* Mavin Finance Logo */}
            <img
              src="/images/mavinfinance.png"
              alt="Mavin Finance"
              className="h-8 sm:h-12 w-auto object-contain object-left transition-all duration-500 group-hover:scale-105"
            />
          </div>

          {/* Center Links with Interactive Dropdowns - Hidden on Mobile/Tablet */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium font-sans h-full">
            <a
              href="#"
              className="relative transition-all duration-300 py-2 text-gray-700 hover:text-[#000080]"
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#000080] transition-transform duration-300 origin-left scale-x-0 hover:scale-x-100" />
            </a>

            {/* Business Advisors Dropdown Toggle */}
            <div className="relative h-full flex items-center">
              <button
                onClick={() => toggleDropdown('advisors')}
                className={`flex items-center gap-1 transition-all duration-300 py-2 focus:outline-none ${activeDropdown === 'advisors'
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
                <div className="absolute top-full left-0 mt-1 w-56 bg-[#f6f4ef] border border-[#ddd8cf] rounded-2xl shadow-xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent" />
                  <button onClick={handleOpenWizard} className="w-full text-left block px-5 py-2.5 hover:bg-[#e8e5de] text-gray-700 hover:text-[#000080] transition-all duration-300">Accounting</button>
                  <button onClick={handleOpenWizard} className="w-full text-left block px-5 py-2.5 hover:bg-[#e8e5de] text-gray-700 hover:text-[#000080] transition-all duration-300">Tax Planning</button>
                  <button onClick={handleOpenWizard} className="w-full text-left block px-5 py-2.5 hover:bg-[#e8e5de] text-gray-700 hover:text-[#000080] transition-all duration-300">Business Growth</button>
                </div>
              )}
            </div>

            {/* Finance Dropdown Toggle */}
            <div className="relative h-full flex items-center">
              <button
                onClick={() => toggleDropdown('finance')}
                className={`flex items-center gap-1 transition-all duration-300 py-2 focus:outline-none ${activeDropdown === 'finance'
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
                <div className="absolute top-full left-0 mt-1 w-56 bg-[#f6f4ef] border border-[#ddd8cf] rounded-2xl shadow-xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent" />
                  <button onClick={handleOpenWizard} className="w-full text-left block px-5 py-2.5 hover:bg-[#e8e5de] text-gray-700 hover:text-[#15803d] transition-all duration-300">Home Loans</button>
                  <button onClick={handleOpenWizard} className="w-full text-left block px-5 py-2.5 hover:bg-[#e8e5de] text-gray-700 hover:text-[#15803d] transition-all duration-300">Asset Finance</button>
                  <button onClick={handleOpenWizard} className="w-full text-left block px-5 py-2.5 hover:bg-[#e8e5de] text-gray-700 hover:text-[#15803d] transition-all duration-300">Commercial Lending</button>
                </div>
              )}
            </div>

            <a
              href="#about-us"
              className="relative transition-all duration-300 py-2 text-gray-700 hover:text-[#000080]"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#000080] transition-transform duration-300 origin-left scale-x-0 hover:scale-x-100" />
            </a>

            <a
              href="#resources"
              className="relative transition-all duration-300 py-2 text-gray-700 hover:text-[#000080]"
            >
              Resources
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#000080] transition-transform duration-300 origin-left scale-x-0 hover:scale-x-100" />
            </a>
          </div>

          {/* Right Side: Dual Call-to-Action (CTA) Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 font-sans ml-auto lg:ml-0">
            {/* Button 1 (Blue) */}
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold transition-all duration-300 transform active:scale-95 whitespace-nowrap bg-[#000080] text-white hover:bg-[#000080]/90 hover:shadow-lg hover:-translate-y-0.5"
            >
              Book an Advisor
            </button>

            {/* Button 2 (Green) */}
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold transition-all duration-300 transform active:scale-95 whitespace-nowrap bg-[#15803d] text-white hover:bg-[#15803d]/90 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get a Loan Quote
            </button>
          </div>
        </div>

        {/* Global Embedded Stylesheet */}
        <style jsx="true">{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes modal-backdrop-fade {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes modal-box-zoom {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-in {
            animation: fade-in 0.3s ease-out forwards;
          }
          .animate-backdrop {
            animation: modal-backdrop-fade 0.2s ease-out forwards;
          }
          .animate-modal-box {
            animation: modal-box-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
        `}</style>
      </nav>

      {/* INSTANT-LOAD FULL-SCREEN JOTFORM MODAL */}
      <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
        isFormOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
      }`}>
        {/* Clicking outside the modal container will dismiss the window */}
        <div className="absolute inset-0" onClick={() => setIsFormOpen(false)} />

        {/* Modal Architecture Window Box */}
        <div className={`relative w-full max-w-4xl h-[85vh] md:h-[700px] bg-transparent border border-[#ddd8cf]/40 rounded-3xl shadow-2xl flex flex-col transition-all duration-300 ${
          isFormOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>

          {/* Absolute Positioned Close Button */}
          <button
            onClick={() => setIsFormOpen(false)}
            className="absolute -top-12 right-2 md:-top-4 md:-right-12 p-2 rounded-full bg-[#f6f4ef] text-gray-600 hover:text-red-600 shadow-lg border border-[#ddd8cf] transition-all duration-200 focus:outline-none hover:scale-105 active:scale-95 z-[110]"
            title="Close Modal"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Masking Layout Viewport: Changed to overflow-hidden to fully remove the outer scrollbar track */}
          <div className="w-full flex-1 bg-white relative rounded-3xl overflow-hidden shadow-inner">
            <iframe
              id="JotFormIFrame-261462884968071"
              title="MAVIN Business Interactive Form"
              src="https://www.jotform.com/261462884968071"
              style={{
                width: '100%',
                height: '110%', // Retained your extended height configuration
                border: 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: '-140px', // Pushes the lower branding layer strictly outside the container's layout mask
              }}
              scrolling="yes"
            />
          </div>
        </div>
      </div>
    </>
  );
}