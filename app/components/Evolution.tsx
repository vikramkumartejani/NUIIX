"use client";

import { useEffect, useState } from "react";
import { BsKeyboard } from "react-icons/bs";
import { FiMousePointer } from "react-icons/fi";
import { HiOutlineChip } from "react-icons/hi";
import { MdFace } from "react-icons/md";

type EvolutionItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  delay: number;
};

export default function Evolution() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const evolutionItems: EvolutionItem[] = [
    { icon: BsKeyboard, title: "TUI", delay: 200 },
    { icon: FiMousePointer, title: "GUI", delay: 400 },
    { icon: MdFace, title: "NUI", delay: 600 },
    { icon: HiOutlineChip, title: "NUII", delay: 800 },
  ];

  return (
    <div className="min-h-screen bg-[#020817] text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Hero Section */}
        <h1
          className="text-4xl md:text-6xl font-bold text-center mt-10 transition-all duration-700 opacity-0 translate-y-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          The Evolution That Brings You NUIIX
        </h1>

        {/* Evolution Timeline */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-16">
          {evolutionItems.map((item, index) => (
            <div
              key={item.title}
              className="relative flex flex-col items-center"
            >
              {/* Connection Line */}
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 left-[120px] w-[100px] border-t-2 border-dashed border-blue-500/30" />
              )}

              {/* Circle with Icon */}
              <div
                className="relative transition-all duration-700 opacity-0 translate-y-10"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transitionDelay: `${item.delay}ms`,
                }}
              >
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center
                               ${
                                 item.title === "NUII"
                                   ? "bg-blue-500/10"
                                   : "border-2 border-white/20"
                               }
                               ${
                                 item.title === "NUI" ? "border-blue-500" : ""
                               }`}
                >
                  <item.icon
                    className={`w-10 h-10 ${
                      item.title === "NUII" ? "text-blue-500" : "text-white"
                    }`}
                  />
                </div>
                <h2 className="text-2xl font-bold text-center mt-4">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center space-y-8">
          <h2
            className="text-3xl md:text-5xl font-bold transition-all duration-700 opacity-0 translate-y-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transitionDelay: "1000ms",
            }}
          >
            Be A Part Of The Next Evolution In Interfaces...
          </h2>

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full
                           transition-all duration-300 transform hover:scale-105
                           opacity-0 translate-y-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transitionDelay: "1200ms",
            }}
          >
            ✨ Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}
