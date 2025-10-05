import React, { useState, useEffect } from "react";
import { headerData } from "@site/src/data";
import { AiOutlineClose } from "react-icons/ai";
import { MdMenu } from "react-icons/md";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const logoSrc = "https://www.arakoo.com/img/arakoo-01.png";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-[1000] backdrop-blur transition-all duration-300 ${
        isScrolled
          ? "bg-brand-base/95 border-b border-brand-border/80"
          : "bg-brand-base/80 border-b border-brand-border/40"
      }`}
    >
      <div className="flex justify-between container-custom items-center py-5">
        {/* Desktop Logo */}
        <img
          src={logoSrc}
          alt="Arakoo logo"
          className="hidden md:block w-60 xl:w-auto"
        />

        {/* Mobile Logo */}
        <img
          src={logoSrc}
          alt="Arakoo logo"
          className="md:hidden w-44"
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10">
          {headerData.map((item) => (
            <a
              className="font-matter text-base font-normal text-brand-text-muted transition hover:text-brand-text-primary hover:no-underline xl:text-lg"
              key={item.label}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:inline-block">
          <a href="https://www.google.com/search?q=https://stringcost.com/demo" className="rounded-full bg-[#210F26] px-5 py-2 text-sm font-matter font-medium text-white transition hover:bg-[#0D0D0D] hover:no-underline">
            Schedule Demo
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 text-brand-text-primary focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <MdMenu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 right-0 z-50 h-screen bg-brand-base/95 backdrop-blur">
          <div className="container-custom py-6 flex flex-col">
            {/* Navigation Links */}
            <div className="flex flex-col mb-8">
              {headerData.map((item) => (
                <a
                  className="flex items-center justify-between border-b border-brand-border/60 py-4 text-lg font-matter font-medium text-brand-text-primary"
                  key={item.label}
                  href={item.href}
                >
                  <span>{item.label}</span>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 11L6.5 6L1.5 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>

            {/* Mobile CTA Button */}
            <div className="mt-4">
              <a href="https://www.google.com/search?q=https://stringcost.com/demo" className="w-full block text-center rounded-full bg-[#210F26] py-4 text-base font-matter font-medium text-white hover:bg-[#0D0D0D] hover:no-underline">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
