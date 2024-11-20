"use client";
import * as React from "react";
import Image from "next/image";

type Step = {
  number: string;
  title: string;
  description: string;
  imgSrc: string;
  active: boolean;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Upload A Photo",
    description: "Simply Upload A Single Photo It's That Easy!",
    imgSrc: "/assets/step1-icon.png",
    active: false,
  },
  {
    number: "02",
    title: "Choose The Voice",
    description:
      "Select A Voice That You Like, Or Even Clone Your Own For A Personalized Touch",
    imgSrc: "/assets/step2-icon.png",
    active: false,
  },
  {
    number: "03",
    title: "Generate Your Avatar",
    description: "With Just A Click, Generate And Watch It Come To Life!",
    imgSrc: "/assets/step3-icon.png",
    active: false,
  },
  {
    number: "04",
    title: "Add Personality",
    description:
      "Provide Text Input Or Connect It To Your Own Conversational AI",
    imgSrc: "/assets/step4-icon.png",
    active: true,
  },
];

export default function Steps(): JSX.Element {
  return (
    <section className="min-h-screen text-white px-4 py-[50px] md:py-[70px] relative">
      <img
        src="/assets/blue-shade.png"
        alt=""
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <h1 className="text-[40px] sm:text-[50px] md:text-[66px] font-[700] text-center mb-[88px] md:leading-[77px] sm:leading-[65px] leading-[52px] helvetica-bold max-w-[898.47px] mx-auto">
          Create Your Own Avatar Or Digital Twin In 4 Easy Steps.
        </h1>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="md:block hidden absolute top-[118.5px] left-0 right-0 w-full border-t border-[#FFFFFF4D]"></div>
          {/* Timeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[65px] md:gap-1 lg:gap-0 relative">
            {steps.map((step, index) => (
              <div key={step.number} className="text-center">
                <div className="flex flex-col items-center">
                  <img
                    src={step.imgSrc}
                    alt={step.number}
                    className="w-auto h-[68px]"
                  />
                  <div
                    className={`${
                      index === 3
                        ? "w-[26.64px] h-[26.64px] min-w-[26.64px] min-h-[26.64px] bg-custom-blue-gradient shadow-blue-glow"
                        : "w-[26.64px] h-[26.64px] min-w-[26.64px] min-h-[26.64px] bg-[#4F5164]"
                    } rounded-full mt-[38px] mb-[42px] md:block hidden`}
                  ></div>
                  <h3 className="text-[22px] md:text-[26px] text-[#FFFFFFCC] font-[400] font-biliner-meclan md:mb-[24px] mb-[5px] md:mt-0 sm:mt-5 mt-4">
                    Step {step.number}
                  </h3>
                  <h4 className="text-[30px] md:text-[33px] font-[700] md:mb-[18px] mb-[14px] helvetica-bold md:leading-[40px] leading-[35px]">
                    {step.title}
                  </h4>
                  <p className="text-white font-general-sans px-1 text-[16px] font-[300]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center md:mt-[52px] mt-[60px]">
          <button className="bg-[#3A8FFF33] p-2 rounded-full relative w-[223px] h-[73px] flex justify-center items-center overflow-hidden">
            <div className="btn-border w-full p-[1.55px]">
              <span
                className="bg-[#3A8FFF] w-[207px] flex items-center justify-center py-4 px-5 rounded-full relative h-[58px]"
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
                  Start Free Trial
                </span>
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
