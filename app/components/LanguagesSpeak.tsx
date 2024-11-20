"use client";
import VerticalBars from "./VerticalBars";
import FloatingText from "./FloatingText";

export default function LanguagesSpeak() {
  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center space-y-4 w-full relative">
      <FloatingText />
      <VerticalBars />
    </div>
  );
}
