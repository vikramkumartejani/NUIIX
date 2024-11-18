"use client";

import * as React from "react";
import { BsImage } from "react-icons/bs";
import { TbWaveSine } from "react-icons/tb";
import { FaUser, FaBrain } from "react-icons/fa";

type Step = {
  number: string;
  title: string;
  description: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  active: boolean;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Upload A Photo",
    description: ["Simply Upload A Single Photo", "It's That Easy!"],
    icon: BsImage,
    active: false,
  },
  {
    number: "02",
    title: "Choose The Voice",
    description: [
      "Select A Voice That You Like, Or Even",
      "Clone Your Own For A Personalized Touch",
    ],
    icon: TbWaveSine,
    active: false,
  },
  {
    number: "03",
    title: "Generate Your Avatar",
    description: ["With Just A Click, Generate And", "Watch It Come To Life!"],
    icon: FaUser,
    active: false,
  },
  {
    number: "04",
    title: "Add Personality",
    description: [
      "Provide Text Input Or Connect It",
      "To Your Own Conversational AI.",
    ],
    icon: FaBrain,
    active: true,
  },
];

export default function Steps(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-950 text-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-20 leading-tight">
          Create Your Own Avatar Or
          <br />
          Digital Twin In 4 Easy Steps.
        </h1>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gray-700">
            <div
              className="absolute left-0 right-0 h-full bg-blue-500"
              style={{ width: "75%" }}
            />
          </div>

          {/* Timeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full ${
                      step.active ? "bg-blue-500" : "bg-gray-800"
                    } flex items-center justify-center mb-4 relative z-10`}
                  >
                    {React.createElement(step.icon, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="text-xl font-light mb-2">
                    Step {step.number}
                  </h3>
                  <h4 className="text-2xl font-bold mb-3">{step.title}</h4>
                  <p className="text-gray-400">
                    {step.description.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < step.description.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-20">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-200 flex items-center gap-2">
            <span className="text-xl">✨</span>
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}
