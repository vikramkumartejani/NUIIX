'use client'
import Image from "next/image";
import React, { useState } from "react";
import StartDemoPopup from "./StartDemoPopup"; // Import the StartDemoPopup component

export default function AIAssistant() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true); // Open the popup when button is clicked
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup when "Accept" button is clicked
  };

  return (
    <section className="xl:min-h-[726px] lg:min-h-[790px] sm:min-h-[535px] min-h-[680px] sm:h-full h-[680px] text-white relative overflow-hidden py-[40px] md:py-[70px]">
      <div className="max-w-[1280px] h-full mx-auto relative z-[1]">
        <img
          src="/assets/ai-assistant-bg.png"
          alt=""
          className="absolute h-full w-full object-cover"
        />
        <div className="flex flex-col sm:justify-between px-4 md:px-[45.77px] md:py-[79px] py-[65px] min-h-full xl:min-h-[726px] lg:min-h-[790px] sm:min-h-[535px] relative lg:z-[1] z-[2] sm:gap-0 gap-[4.5vw]">
          <h1 className="text-[45px] sm:text-[60px] md:text-[76px] font-bold mb-8 md:leading-[72px] sm:leading-[60px] leading-[50px] text-center relative font-helvetica-bold">
            Meet Your Next AI Assistant
          </h1>
          <div className="flex flex-wrap items-center justify-between text-white min-h-full gap-2">
            <div className="">
              <p className="text-xl md:text-[22px] md:leading-[30px] font-general-sans">
                Talk To Our Assistants Today
              </p>
              <p className="text-xl md:text-2xl font-general-sans">
                - It's <span className="font-bold">FREE</span>
              </p>
            </div>
            <button
              className="bg-[#3A8FFF33] p-2 rounded-full relative w-[208.96px] h-[73px] flex justify-center items-center overflow-hidden"
              onClick={handleButtonClick} // Open the popup when clicked
            >
              <div className="btn-border w-full p-[1.55px]">
                <span
                  className="bg-[#3A8FFF] w-[193.87px] flex items-center justify-center py-4 px-5 rounded-full relative h-[58px]"
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
                    Start Demo
                  </span>
                </span>
              </div>
            </button>
          </div>
        </div>
        <img
          src="/assets/ai-assistant-img.png"
          alt="AI Assistant"
          className="absolute left-1/2 md:bottom-[-1px] bottom-0 transform -translate-x-1/2 lg:z-[2] z-[1] lg:w-auto sm:w-[400px] w-[300px]"
        />
      </div>

      {/* Popup will appear when state is true */}
      {isPopupOpen && <StartDemoPopup onClose={handleClosePopup} />}
    </section>
  );
}
