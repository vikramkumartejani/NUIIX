"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", text: "Home" },
    { href: "/company", text: "Company" },
    { href: "/technology", text: "Technology" },
    { href: "/solutions", text: "Solutions" },
    { href: "/ethics", text: "Ethics" },
    { href: "/pricing", text: "Pricing" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full px-3">
      <div className="w-full max-w-[1260px] mx-auto shadow-custom bg-[#1F1F1F] py-1.5 md:py-[14.54px] rounded-[20px] bg-opacity-90">
        <div className="text-white px-5 md:px-10 flex items-center justify-between h-full">
          {/* Logo */}
          <Image
            src="/assets/white-logo.png"
            alt="logo"
            width={120.8}
            height={69.8}
            className="md:w-[120px] h-[69px] w-[100px]"
          />

          {/* Desktop Menu Links */}
          <ul className="hidden lg:flex items-center xl:gap-[38px] gap-[2vw]">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[18px] leading-[18px] font-normal font-general-sans transition duration-300 hover:text-[#3A8FFF]"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-[22px]">
            <button className="bg-[#3A8FFF33] p-2 rounded-full relative xl:w-[223px] w-[193px] h-[73px] flex justify-center items-center overflow-hidden">
              <div className="btn-border w-full p-[1.55px]">
                <span
                  className="bg-[#3A8FFF] xl:w-[207px] w-[177px] flex items-center justify-center md:py-4 py-3 xl:px-5 px-3 rounded-full relative h-[58px]"
                  style={{
                    border: "1.55px solid transparent",
                    borderImageSource:
                      "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
                    transition: "border-image-source 0.4s ease-in-out",
                  }}
                >
                  <Image
                    src="/assets/start-to-free.svg"
                    alt="start-to-free"
                    height={22.9}
                    width={24.64}
                    className="xl:w-[auto] w-[22px]"
                  />
                  <span className="ml-1 xl:text-[18px] font-normal font-general-sans">
                    Start Free Trial
                  </span>
                </span>
              </div>
            </button>

            <Link
              href="/login"
              className="text-[18px] leading-[18px] font-normal font-general-sans transition duration-300 hover:text-[#3A8FFF]"
            >
              Log In
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white text-2xl transition duration-300 hover:text-[#3A8FFF] z-50 relative"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute z-40 left-0 top-0 w-full bg-[#1F1F1F] p-4 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {/* Mobile Menu Links */}
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-[18px] leading-[18px] font-normal font-general-sans text-white py-2 transition duration-300 hover:text-[#3A8FFF]"
            >
              {link.text}
            </Link>
          ))}

          {/* Mobile Buttons */}
          <div className="flex items-center gap-[22px] mt-4">
            <button className="bg-[#3A8FFF] text-white p-2 rounded-full relative w-[223px] h-[73px] flex justify-center items-center overflow-hidden">
              <span className="bg-[#3A8FFF] w-[207px] flex items-center justify-center py-4 px-5 rounded-full relative h-[58px] transition duration-300 hover:bg-[#2f5292]">
                <Image
                  src="/assets/start-to-free.svg"
                  alt="start-to-free"
                  height={22.9}
                  width={24.64}
                />
                <span className="ml-1 text-[18px] font-normal font-general-sans">
                  Start Free Trial
                </span>
              </span>
            </button>

            <button className="text-[18px] leading-[18px] font-normal font-general-sans transition duration-300 hover:text-[#3A8FFF]">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
