import React from "react";
import Marquee, { Motion } from "react-marquee-slider";

// Define your word type for clarity
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

  // Remove backgroundColors completely or set them to transparent
  const backgroundColors = {
    earth: "transparent", // Transparent background for earth
    solarSystem: "transparent", // Transparent background for solarSystem
    buffer: "transparent", // Transparent background for buffer
  };

  // Empty callback functions for onInit and onFinish
  const handleInit = () => {
    console.log("Marquee animation initialized");
  };

  const handleFinish = () => {
    console.log("Marquee animation finished");
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full z-[9]">
      <Marquee
        velocity={40} // Speed of the marquee
        direction="ltr" // Direction of the scrolling
        scatterRandomly={true} // Random scattering of the text
        resetAfterTries={200} // Reset after a certain number of tries
        onInit={handleInit} // onInit callback
        onFinish={handleFinish} // onFinish callback
      >
        {words.map((word, idx) => (
          <Motion
            key={idx}
            velocity={17} // Bobbing speed
            radius={0} // Height of the bobbing effect
            backgroundColors={backgroundColors} // Transparent background colors
            initDeg={Math.random() * 360} // Random initial rotation angle
            direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"} // Random direction for bobbing
          >
            <div className="absolute flex gap-1 items-center text-white text-[20px] lg:text-[33.8px] font-bold w-max px-[12px] py-[8px] border border-white shadow-md bg-[#FFFFFF33] backdrop-blur-md rounded-full z-[9]">
              <img src={word.language} alt={word.text} />
              {word.text}
            </div>
          </Motion>
        ))}
      </Marquee>
    </div>
  );
};

export default FloatingText;
