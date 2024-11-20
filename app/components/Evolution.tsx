"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type EvolutionItem = {
  imgSrc: string;
  title: string;
  delay: number;
};

export default function Evolution() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsVisible(true);
    };

    // Initial check
    updateWidth();

    // Add event listener for resize
    window.addEventListener("resize", updateWidth);

    // Cleanup event listener
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const evolutionItems: EvolutionItem[] = [
    { imgSrc: "/assets/tui.png", title: "TUI", delay: 200 },
    { imgSrc: "/assets/gui.png", title: "GUI", delay: 400 },
    { imgSrc: "/assets/nui.png", title: "NUI", delay: 600 },
    { imgSrc: "/assets/nuii.png", title: "NUII", delay: 800 },
  ];

  return (
    <section className="min-h-screen text-white px-4 md:px-8 py-[50px] md:py-[70px] relative">
      <img
        src="/assets/blue-shade.png"
        alt=""
        className="absolute top-[50px] left-0 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div className="max-w-[1280px] mx-auto">
        {/* Hero Section */}
        <h1
          className="text-[42px] sm:text-[48px] md:text-[65px] font-[700] text-center mb-[90px] transition-all duration-700 opacity-0 translate-y-10 helvetica-bold text-white"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          The Evolution That Brings You NUIIX
        </h1>

        {/* Evolution Timeline */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-[66px] md:gap-[48px] mt-16 relative">
          {evolutionItems.map((item, index) => (
            <div
              key={item.title}
              className="relative flex flex-col items-center z-[2]"
            >
              {/* Circle with Icon */}
              <div
                className="relative transition-all duration-700 opacity-0 translate-y-10"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transitionDelay: `${item.delay}ms`,
                }}
              >
                <div className="flex items-center justify-center relative">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className={`${isMobile && "w-[45vw]"} ${
                      index === 0 && "md:ms-0 ms-[27px]"
                    }`}
                  />
                  {index < evolutionItems.length - 1 && (
                    <div
                      className={`hidden md:block absolute ${
                        index === 0
                          ? "w-[70px] lg:w-[80px] xl:w-[90px] right-[-44px] xl:right-[-45px]"
                          : "w-[16px] md:w-[47px] right-[-28px] md:right-[-46.5px]"
                      } border-t-2 border-dashed border-[#8C8D9A] z-[1]`}
                      style={{
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    />
                  )}
                </div>
                <h2 className="text-[34px] sm:text-[40px] md:text-[46px] font-[500] text-center mt-[15px] sm:mt-[20px] md:mt-[38px] font-general-sans">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="flex md:flex-row flex-col items-start md:items-center justify-between md:gap-[55px] gap-6 md:mt-[108px] mt-[60px] w-full">
          <h2
            className="text-[32px] sm:text-[38px] md:text-[48px] md:leading-[60px] sm:leading-[45px] leading-[40px] font-[700] transition-all duration-700 opacity-0 translate-y-10 helvetica-bold"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transitionDelay: "1000ms",
            }}
          >
            Be A Part Of The Next Evolution In Interfaces...
          </h2>

          <button className="bg-[#3A8FFF33] p-2 rounded-full relative w-[231px] min-w-[231px] h-[73px] flex justify-center items-center overflow-hidden">
            <div className="btn-border w-full p-[1.55px]">
              <span
                className="bg-[#3A8FFF] w-[214px] min-w-[200px] flex items-center justify-center py-4 px-5 rounded-full relative h-[58px] min-w-max"
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
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
