import Image from "next/image";
import React from "react";

const EffortlessAndNaturalConversation = () => {
  return (
    <div className="text-white pt-[70px] md:pt-[140px] pb-[50px] md:pb-[100px] overflow-x-hidden">
      <div className="px-4">

      <h1 className="text-4xl md:text-[66px] capitalize md:leading-[78px] font-bold font-helvetica-bold text-center max-w-[1136px] mx-auto">
        The Power of Connection with Effortless and Natural Conversation
      </h1>
      <h3 className="text-base md:text-[18px] md:leading-[30px] font-normal font-general-sans text-center capitalize mt-10 max-w-[882px] mx-auto">
        Welcome to a new world of interaction with emotionally intelligent,
        environmentally aware digital humans. Explore the features that bring a
        NUIIX avatar to life.
      </h3>

      </div>
      {/* Centering the background and image */}
      <div className="flex items-center justify-center w-full relative ">
        {/* Background container */}
        <div className="blue-custom absolute w-[592px] h-[592px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

        {/* Image container */}
        <div className="w-full relative z-10 flex items-center justify-center mt-[120px] h-full max-w-[1370px] mx-auto">
          <Image
            src="/assets/women-image.svg"
            alt="women"
            width={500}
            height={500}
            className="z-10"
          />

          {/* Text descriptions with increased contrast and shadow */}
          {/* <div className="border border-white w-[335px] rounded-[20px] p-4 absolute -top-16 left-0">
            <p className="text-[16px] leading-[24px] font-normal font-general-sans">
              Supercharge your NUIIX digital human with the power of the latest
              Large Language Models, enriched with your knowledge, for an
              intelligent, context-aware experience that truly understands what
              you say and how to respond.
            </p>
          </div> */}
          {/* <div className="border border-white w-[335px] rounded-[20px] p-4 absolute top-[236px] left-0">
            <p className="text-[16px] leading-[24px] font-normal font-general-sans">
              Bring your digital human to life from a single photo in minutes,
              or select from our exclusive library of ready-made avatars.
            </p>
          </div> */}

          {/* <div className="">
            <div className="border border-white w-[335px] rounded-[20px] p-4 absolute top-[30px] right-0">
              <p className="text-[16px] leading-[24px] font-normal font-general-sans">
                NUIIX Digital humans see you, sense emotions, and intuitively
                respond to your every cue, creating interactions that feel truly
                human
              </p>
            </div>
            <div className="absolute top-[160px] right-[240px] z-40">
              <svg
                width="354"
                height="56"
                viewBox="0 0 354 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.631683 54.5305L300.165 54.5305L353.569 1.08216"
                  stroke="white"
                />
              </svg>
            </div>
          </div> */}

          {/* <div className="border border-white w-[335px] rounded-[20px] p-4 absolute top-[280px] right-0">
            <p className="text-[16px] leading-[24px] font-normal font-general-sans">
              100 + Voice Library and Eleven Lab Integration.
            </p>
          </div> */}
        </div>
      </div>

      {/* Button */}
      <button className="bg-[#3A8FFF33] mt-[52px] p-2 rounded-full relative w-[173px] h-[73px] flex justify-center items-center overflow-hidden mx-auto text-white">
        <div className="btn-border w-full p-[1.55px]">
          <span
            className="bg-[#3A8FFF] w-[155px] flex items-center justify-center rounded-full relative h-[58px]"
            style={{
              border: "1.55px solid transparent",
              borderImageSource:
                "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
              transition: "border-image-source 0.4s ease-in-out",
            }}
          >
            <span className="ml-1 text-[18px] font-normal font-general-sans">
              Explore
            </span>
          </span>
        </div>
      </button>
    </div>
  );
};

export default EffortlessAndNaturalConversation;
