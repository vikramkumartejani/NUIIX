"use client";
import VerticalBars from "./VerticalBars";
import FloatingText from "./FloatingText";

export default function LanguagesSpeak() {
  return (
    <div className="py-[50px] md:py-[70px] overflow-hidden">
      <div className="md:px-8 px-4">
        <h1 className="relative z-[999] max-w-[1094.46px] mx-auto text-4xl md:text-[66px] font-helvetica-bold md:leading-[77px] mb-[30px] md:mb-[45px] text-white text-center">
          Avatars that speak 32 Languages—Connecting You to a World of
          Possibilities
        </h1>
      </div>

      <div className="text-white min-h-[80vh] flex flex-col items-center justify-center space-y-4 w-full relative">
        <FloatingText />
        <VerticalBars />
      </div>
    </div>
  );
}
