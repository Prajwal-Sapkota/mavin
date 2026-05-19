import React from "react";
// Import original social media icons from react-icons
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    const linksCompany = ["About Us", "Our Team", "The Method", "Careers"];
    const linksServices = [
        "Corporate Restructuring",
        "Business Advisory",
        "Taxation Services",
        "Mortgage & Finance",
    ];

    return (
        <footer className="relative bg-[#e9e5db] text-[#071d49] pt-12 pb-8 overflow-hidden border-t border-[#d8d5cf]">

            {/* 1. THE EXTRAORDINARY TYPOGRAPHIC WATERMARK */}
            <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full select-none pointer-events-none z-0 overflow-hidden text-center hidden md:block">
                <h1 className="font-serif text-[24vw] leading-none font-bold tracking-[-0.04em] text-[#d8d5cf]/80 opacity-60">
                    MAVIN
                </h1>
            </div>

            <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 z-10">

                {/* 2. MAIN FOOTER CONTENT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_0.8fr] gap-12 lg:gap-8 pb-4">

                    {/* Column 1: Brand & Statement */}
                    <div className="space-y-6 max-w-sm">
                        <div className="flex items-center justify-center gap-4 h-18">
                            <img
                                src="/images/MBA.png"
                                alt="Mavin Business Advisors Logo"
                                className="h-full w-auto object-contain object-left text-[#071d49]"
                            />
                            <span className="h-8 w-[1px] bg-[#d8d5cf]" />
                            <img
                                src="/images/mavinfinance.png"
                                alt="Mavin Finance Logo"
                                className="h-full w-auto object-contain object-left text-[#071d49]"
                            />
                        </div>

                        <p className="text-[14px] leading-[1.65] text-[#50555f] font-light text-center">
                            Architecting high-end tax alignments, corporate restructuring, and bespoke private credit landscapes for ambitious balance sheets.
                        </p>
                    </div>

                    {/* Column 2: Expertise Links - Center aligned */}
                    <div className="space-y-6 text-center">
                        <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#7a818d]">
                            Expertise
                        </h4>
                        <ul className="space-y-3">
                            {linksServices.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="text-[14px] font-light text-[#50555f] hover:text-[#071d49] transition-colors duration-300 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#071d49] hover:after:w-full after:transition-all after:duration-300 pb-0.5"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Firm Links - Center aligned */}
                    <div className="space-y-6 text-center">
                        <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#7a818d]">
                            Firm
                        </h4>
                        <ul className="space-y-3">
                            {linksCompany.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="text-[14px] font-light text-[#50555f] hover:text-[#071d49] transition-colors duration-300 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#071d49] hover:after:w-full after:transition-all after:duration-300 pb-0.5"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Connect - Center aligned with Contact Info */}
                    <div className="space-y-6 text-center">
                        <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#7a818d]">
                            Connect
                        </h4>
                        
                        {/* Social Media Icons */}
                        <div className="flex justify-center gap-4">
                            <a 
                                href="https://linkedin.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex items-center justify-center size-9 rounded-full bg-[#d8d5cf]/40 text-[#071d49]/80 hover:bg-[#0077b5] hover:text-white transition-all duration-300 shadow-xs"
                            >
                                <FaLinkedinIn className="size-4" />
                            </a>

                            <a 
                                href="https://facebook.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="flex items-center justify-center size-9 rounded-full bg-[#d8d5cf]/40 text-[#071d49]/80 hover:bg-[#1877f2] hover:text-white transition-all duration-300 shadow-xs"
                            >
                                <FaFacebookF className="size-4" />
                            </a>

                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex items-center justify-center size-9 rounded-full bg-[#d8d5cf]/40 text-[#071d49]/80 hover:bg-[#e1306c] hover:text-white transition-all duration-300 shadow-xs"
                            >
                                <FaInstagram className="size-4" />
                            </a>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-3 mt-6">
                            <a 
                                href="mailto:info@mavin.com.au"
                                className="flex items-center justify-center gap-2 text-[13px] text-[#50555f] hover:text-[#071d49] transition-colors duration-300 group"
                            >
                                <FaEnvelope className="size-3.5 text-[#7a818d] group-hover:text-[#071d49]" />
                                <span>info@mavin.com.au</span>
                            </a>
                            <a 
                                href="tel:+61212345678"
                                className="flex items-center justify-center gap-2 text-[13px] text-[#50555f] hover:text-[#071d49] transition-colors duration-300 group"
                            >
                                <FaPhoneAlt className="size-3.5 text-[#7a818d] group-hover:text-[#071d49]" />
                                <span>+61 2 9123 4567</span>
                            </a>
                        </div>
                    </div>

                </div>

                {/* 3. HARDWARE-LEVEL HORIZONTAL BREAK LINE */}
                <div className="border-t border-[#d8d5cf]/60 w-full" />

                {/* 4. BASELINE UTILITY ROW */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 text-[12px] font-light text-[#7a818d]">
                    <div>
                        <p>© {new Date().getFullYear()} Mavin Business Advisors. All rights reserved.</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                        <span>Crafted By : MAVIN</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;