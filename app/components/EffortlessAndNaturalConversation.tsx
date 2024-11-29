import Image from "next/image";
import React from "react";

const EffortlessAndNaturalConversation = () => {
  return (
    <div className="text-white pt-[70px] md:pt-[140px] px-4 md:px-8 pb-[50px] md:pb-[100px] overflow-x-hidden">
      <div className="md:px-4">
        <h1 className="text-4xl md:text-[66px] capitalize md:leading-[78px] font-bold font-helvetica-bold text-center max-w-[1136px] mx-auto">
          The Power of Connection with Effortless and Natural Conversation
        </h1>
        <h3 className="text-base md:text-[18px] md:leading-[30px] font-normal font-general-sans text-center capitalize mt-10 max-w-[882px] mx-auto">
          Welcome to a new world of interaction with emotionally intelligent,
          environmentally aware digital humans. Explore the features that bring
          a NUIIX avatar to life.
        </h3>
      </div>
      {/* Centering the background and image */}
      <div className="flex items-center justify-center w-full relative ">
        {/* Background container */}
        <div className="blue-custom absolute w-[592px] h-[592px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

        {/* Image container */}
        <div className="w-full relative z-10 flex items-center justify-center md:mt-[120px] mt-[70px] md:h-full h-[650px] max-w-[1370px] mx-auto">
          <Image
            src="/assets/women-image.svg"
            alt="women"
            width={500}
            height={500}
            className="z-1"
          />

          {/* Text descriptions with increased contrast and shadow */}
          <div>
            <div className="card-border max-w-[335px] p-[1px] absolute md:-top-16 sm:top-[0px] top-[3vw] left-0 z-[2] rounded-[20px]">
              <div className="border border-white/50 max-w-[335px] rounded-[20px] sm:p-4 p-3 relative z-[4] bg-[#0f0616] backdrop-blur-sm">
                <p className="sm:text-[16px] text-[15px] leading-[24px] font-normal font-general-sans capitalize">
                  Supercharge your NUIIX digital human with the power of the
                  latest Large Language Models, enriched with your knowledge,
                  for an intelligent, context-aware experience that truly
                  understands what you say and how to respond.
                </p>
              </div>
            </div>
            <div className="absolute xl:top-[111.5px] top-[130px] lg:block hidden xl:left-[200px] left-[220px] z-1">
              <img
                src="/assets/line1.svg"
                alt="line1"
                className="xl:w-[28vw] w-[22vw]"
              />
              <div className="w-[17px] overflow-visible  bg-transparent">
                <img
                  src="/assets/dot.svg"
                  alt="dot"
                  width={17}
                  height={17}
                  className="w-[17px] h-full object-cover overflow-visible animate-pulse-scale absolute xl:top-[2.24vw] right-[-10px] top-[1.77vw] bg-transparent"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="card-border max-w-[335px] p-[1px] absolute md:top-[224px] top-[370px] left-0 z-[2] rounded-[20px]">
              <div className="border border-white/50 max-w-[335px] rounded-[20px] sm:p-4 p-3 relative z-[4] bg-[#0f0616] backdrop-blur-sm">
                <p className="sm:text-[16px] text-[15px] leading-[24px] font-normal font-general-sans capitalize">
                  Bring your digital human to life from a single photo in
                  minutes, or select from our exclusive library of ready-made
                  avatars.
                </p>
              </div>
            </div>
            <div className="absolute top-[290px] lg:block hidden xl:left-[280px] left-[240px] z-1">
              <img
                src="/assets/line3.svg"
                alt="line3"
                className="xl:w-[21vw] w-[20vw]"
              />
              <div className="w-[17px] overflow-visible  bg-transparent">
                <img
                  src="/assets/dot.svg"
                  alt="dot"
                  width={17}
                  height={17}
                  className="w-[17px] xl:h-[60px] h-[50px] object-cover overflow-visible animate-pulse-scale absolute xl:top-[-25px] top-[-21.3px] right-[-10px] bg-transparent"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="card-border max-w-[335px] p-[1px] absolute xl:top-[30px] lg:top-[50px] md:top-[30px] sm:top-[210px] top-[220px] right-0 z-[2] rounded-[20px]">
              <div className="border border-white/50 max-w-[335px] rounded-[20px] sm:p-4 p-3 relative z-[4] bg-[#0f0616] backdrop-blur-sm">
                <p className="sm:text-[16px] text-[15px] leading-[24px] font-normal font-general-sans capitalize">
                  NUIIX Digital humans see you, sense emotions, and intuitively
                  respond to your every cue, creating interactions that feel
                  truly human
                </p>
              </div>
            </div>
            <div className="absolute xl:top-[160px] top-[180px] xl:right-[210px] right-[250px] lg:block hidden z-1">
              <img
                src="/assets/line2.svg"
                alt="line2"
                className="xl:w-[26vw] w-[20vw]"
              />
              <div className="w-[17px] overflow-visible  bg-transparent">
                <img
                  src="/assets/dot.svg"
                  alt="dot"
                  width={17}
                  height={17}
                  className="w-[17px] h-full object-cover overflow-visible animate-pulse-scale absolute xl:top-[2.24vw] left-[-10px] top-[1.688888vw] bg-transparent"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="card-border max-w-[335px] p-[1px] absolute xl:top-[330px] md:top-[332px] top-[520px] xl:right-[40px] right-0 z-[2] rounded-[20px]">
              <div className="border border-white/50 max-w-[335px] rounded-[20px] sm:p-4 p-3 relative z-[4] bg-[#0f0616] backdrop-blur-sm">
                <p className="sm:text-[16px] text-[15px] leading-[24px] font-normal font-general-sans capitalize">
                  100 + Voice Library and Eleven Lab Integration.
                </p>
              </div>
            </div>
            <div className="absolute top-[370px] xl:right-[300px] right-[300px] z-[1] lg:block hidden">
              <img
                src="/assets/line4.svg"
                alt="line4"
                className="xl:w-[21vw] w-[18vw]"
              />
              <div className="w-[17px] overflow-visible  bg-transparent">
                <img
                  src="/assets/dot.svg"
                  alt="dot"
                  width={17}
                  height={17}
                  className="w-[17px] xl:h-[60px] h-[50px] object-cover overflow-visible animate-pulse-scale absolute xl:top-[-25.5px] top-[-21.6px] left-[-10px] bg-transparent"
                />
              </div>
            </div>
          </div>
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
