"use client";

import { useState } from "react";
import { BiChevronDown, BiPlus } from "react-icons/bi";
import { BsPlay } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

export default function ElevenLabs() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const voices = [
    {
      id: 1,
      image: "/assets/voice-1.png",
    },
    {
      id: 2,
      image: "/assets/voice-2.png",
    },
    {
      id: 3,
      image: "/assets/voice-3.png",
    },
    {
      id: 4,
      image: "/assets/voice-4.png",
    },
    {
      id: 5,
      image: "/assets/voice-5.png",
    },
  ];

  const toggleDropdown = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="min-h-screen px-4 md:px-8 py-[40px] md:py-[70px]">
      <div className="max-w-[1280px] mx-auto">
        {/* Voice Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="rounded-[30px] text-white sm:col-span-2 bg-[#1A1A1A] px-4 md:px-[42px] py-6 md:py-[46px] w-full">
            <h1 className="mb-[16px] md:mb-[26px] text-[35px] md:text-[48px] font-[700] font-helvetica-bold">
              IIElevenLabs
            </h1>
            <p className="mb-[16px] md:mb-[28px] md:text-[18px] font-general-sans text-[#FFFFFF99]">
              Create Voices & Accents, Clone Your Own Voice And{" "}
              <span className="text-white">
                Import Up To 1000+ Pre-Built Lifelike Voices
              </span>{" "}
              Right Into Your NUIIX Account With Our ElevenLabs 1 Click
              Integrations.
            </p>
            <button className="bg-[#3A8FFF33] p-2 rounded-full relative sm:w-[305.84px] w-[255px] h-[73px] flex justify-center items-center overflow-hidden text-white">
              <div className="btn-border w-full p-[1.55px]">
                <span
                  className="bg-[#3A8FFF] sm:w-[283.76px] w-[233px] flex items-center justify-center py-4 sm:px-5 px-3 rounded-full relative h-[58px]"
                  style={{
                    border: "1.55px solid transparent",
                    borderImageSource:
                      "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
                    transition: "border-image-source 0.4s ease-in-out",
                  }}
                >
                  <span className="ml-1 text-[15px] sm:text-[18px] font-[300] font-general-sans w-max">
                    Try A Free Test Conversation
                  </span>
                </span>
              </div>
            </button>
            <p className="mt-[16px] md:mt-[24px] md:text-[18px] font-general-sans text-[#FFFFFF99]">
              Or Play The Audios Below To Preview Some Of The Voices:
            </p>
          </div>
          {voices.map((voice) => (
            <div
              key={voice.id}
              className="relative rounded-[30px] md:max-h-auto max-h-[400px] w-full md:mx-0 mx-auto"
            >
              <img
                src={voice.image}
                alt="Voice preview"
                className="h-full w-full object-cover bg-top z-[1] rounded-[30px]"
              />
              <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3A8FFF80] w-[63.13px] h-[63.13px] backdrop-blur-sm transition-transform hover:scale-110 flex items-center justify-center">
                <FaPlay className="text-[23px] text-white" />
              </button>
              <div className="px-[22px]">
                <div className="relative z-[3]">
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(voice.id)}
                      className="absolute bottom-[16.55px] left-0 flex w-full items-center justify-between rounded-[20px] bg-black px-[17.39px] py-[9.81px] text-white"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src="/assets/en.png"
                          alt="UK flag"
                          className="h-[35.92px] w-[35.92px] rounded-full"
                        />
                        <span>English</span>
                      </div>
                      <BiChevronDown
                        className={`h-5 w-5 transition-transform ${
                          openDropdown === voice.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === voice.id && (
                      <div className="absolute left-0 right-0 top-full z-10 mt-[-13px] rounded-xl bg-black py-2">
                        <button className="flex w-full items-center gap-2 px-4 py-2 text-white hover:bg-white/10">
                          <img
                            src="/assets/en.png"
                            alt="UK flag"
                            className="h-5 w-5 rounded-full"
                          />
                          English
                        </button>
                        <button className="flex w-full items-center gap-2 px-4 py-2 text-white hover:bg-white/10">
                          <img
                            src="/assets/en.png"
                            alt="Spain flag"
                            className="h-5 w-5 rounded-full"
                          />
                          Spanish
                        </button>
                        <button className="flex w-full items-center gap-2 px-4 py-2 text-white hover:bg-white/10">
                          <img
                            src="/assets/en.png"
                            alt="France flag"
                            className="h-5 w-5 rounded-full"
                          />
                          French
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* More Voices Card */}
          <div className="flex flex-col items-center justify-center rounded-[30px] bg-gradient-to-br from-blue-500 to-blue-600 p-8 sm:p-[40px] text-center text-white h-full w-full">
            <BiPlus className="mb-[20px] md:mb-[23px] text-[60px]" />
            <p className="md:text-[18px] font-[500] font-general-sans">
              More Than 1000 Lifelike Voices In 29 Languages And All Diverse
              Accents
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
