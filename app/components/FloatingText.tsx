// components/FloatingText.tsx
import React, { useEffect } from "react";
import gsap from "gsap";

type Word = {
  text: string;
  language: string;
};

const FloatingText: React.FC = () => {
  const words: Word[] = [
    { text: "Hello", language: "/assets/uk.png" },
    { text: "Hallo", language: "/assets/nl.png" },
    { text: "नमस्ते", language: "/assets/in.png" },
    { text: "Salva", language: "/assets/it.png" },
    { text: "مرحبا", language: "/assets/sa.png" },
  ];

  useEffect(() => {
    words.forEach((_, idx) => {
      const element = document.getElementById(`word-${idx}`);
      if (element) {
        // Animate the floating text to move left to right (horizontal) and bob (vertical)
        gsap.to(element, {
          x: "100vw", // Move to the right edge of the screen (horizontal sliding)
          y: "20px", // Move up and down (bobbing effect)
          duration: 10 + Math.random() * 5, // Random duration for smooth sliding and bobbing
          repeat: -1, // Repeat the animation infinitely
          yoyo: true, // Bobbing effect: goes up and down continuously
          ease: "power1.inOut", // Ease for smooth transitions
        });
      }
    });
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {words.map((word, idx) => {
        // Randomize initial position for each word
        const x = Math.random() * 100; // Random starting horizontal position
        const y = Math.random() * 80; // Random starting vertical position
        return (
          <div
            key={idx}
            id={`word-${idx}`}
            className="floating-text relative flex gap-1 items-center absolute text-white text-[20px] lg:text-[33.8px] font-bold w-max px-[12px] py-[8px] border border-white shadow-md backdrop-blur-lg bg-[#FFFFFF33] rounded-full z-[9]"
            style={{
              left: `${x}vw`, // Set random left position
              top: `${y}vh`, // Set random top position
            }}
          >
            <img src={word.language} alt="" />
            {word.text}
          </div>
        );
      })}
    </div>
  );
};

export default FloatingText;
