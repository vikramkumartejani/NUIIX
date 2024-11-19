"use client";

import { useState } from "react";
import { BiChevronDown, BiPlus } from "react-icons/bi";
import { BsPlay } from "react-icons/bs";

export default function ElevenLabs() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const voices = [
    {
      id: 1,
      image: "/placeholder.svg?height=400&width=400",
      bgColor: "bg-pink-200",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=400&width=400",
      bgColor: "bg-purple-200",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=400&width=400",
      bgColor: "bg-orange-200",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=400&width=400",
      bgColor: "bg-blue-200",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=400&width=400",
      bgColor: "bg-pink-200",
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
          <div className="rounded-[30px] text-white sm:col-span-2 bg-[#1A1A1A] px-[42px] py-[46px]">
            <h1 className="mb-4 text-5xl font-bold">IIElevenLabs</h1>
            <p className="mb-8 text-xl text-gray-300">
              Create Voices & Accents, Clone Your Own Voice And{" "}
              <span className="text-white">
                Import Up To 1000+ Pre-Built Lifelike Voices
              </span>{" "}
              Right Into Your NUIIX Account With Our ElevenLabs 1 Click
              Integrations.
            </p>
            <button className="rounded-full bg-blue-500 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-600">
              Try A Free Test Conversation
            </button>
            <p className="mt-8 text-gray-300">
              Or Play The Audios Below To Preview Some Of The Voices:
            </p>
          </div>
          {voices.map((voice) => (
            <div
              key={voice.id}
              className={`relative overflow-hidden rounded-[30px] ${voice.bgColor} p-4`}
            >
              <div className="aspect-square">
                <img
                  src={voice.image}
                  alt="Voice preview"
                  className="h-full w-full object-cover"
                />
                <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 p-6 backdrop-blur-sm transition-transform hover:scale-110">
                  <BsPlay className="h-8 w-8 text-white" />
                </button>
              </div>
              <div className="relative mt-4">
                <button
                  onClick={() => toggleDropdown(voice.id)}
                  className="flex w-full items-center justify-between rounded-full bg-black px-4 py-2 text-white"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src="/placeholder.svg?height=20&width=20"
                      alt="UK flag"
                      className="h-5 w-5 rounded-full"
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
                  <div className="absolute left-0 right-0 top-full z-10 mt-2 rounded-xl bg-black py-2">
                    <button className="flex w-full items-center gap-2 px-4 py-2 text-white hover:bg-white/10">
                      <img
                        src="/placeholder.svg?height=20&width=20"
                        alt="UK flag"
                        className="h-5 w-5 rounded-full"
                      />
                      English
                    </button>
                    <button className="flex w-full items-center gap-2 px-4 py-2 text-white hover:bg-white/10">
                      <img
                        src="/placeholder.svg?height=20&width=20"
                        alt="Spain flag"
                        className="h-5 w-5 rounded-full"
                      />
                      Spanish
                    </button>
                    <button className="flex w-full items-center gap-2 px-4 py-2 text-white hover:bg-white/10">
                      <img
                        src="/placeholder.svg?height=20&width=20"
                        alt="France flag"
                        className="h-5 w-5 rounded-full"
                      />
                      French
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* More Voices Card */}
          <div className="flex aspect-square flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-center text-white h-full w-full">
            <BiPlus className="mb-4 h-12 w-12" />
            <p className="text-2xl font-semibold">
              More Than 1000 Lifelike Voices In 29 Languages And All Diverse
              Accents
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
