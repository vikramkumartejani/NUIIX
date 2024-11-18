import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/company", text: "Company" },
    { href: "/technology", text: "Technology" },
    { href: "/solutions", text: "Solutions" },
    { href: "/ethics", text: "Ethics" },
    { href: "/pricing", text: "Pricing" },
  ];

  return (
    <div className="w-full max-w-[1260px] mx-auto shadow-custom bg-[#FFFFFF0F] py-[14.54px] rounded-[20px]">
      <div className="text-white px-10 flex items-center justify-between h-full">
        <Image src="/assets/logo.svg" alt="logo" width={120.8} height={69.8} />

        <ul className="flex items-center gap-[38px]">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[18px] leading-[18px] font-normal font-general-sans"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-[22px]">
          <button className="bg-[#3A8FFF33] p-2 rounded-full relative w-[223px] h-[73px] flex justify-center items-center overflow-hidden">
            <span
              className="bg-[#3A8FFF] w-[207px] flex items-center justify-center py-4 px-5 rounded-full relative h-[58px]"
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
              />
              <span className="ml-1 text-[18px] font-normal font-general-sans">
                Start Free Trial
              </span>
            </span>
          </button>

          <button className="text-[18px] leading-[18px] font-normal font-general-sans">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
