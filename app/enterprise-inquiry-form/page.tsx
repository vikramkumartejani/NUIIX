"use client";

import { useState, MouseEvent, TouchEvent, ChangeEvent } from "react";
import { FiPhone } from "react-icons/fi";

export default function EnterpriseInquiryForm() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragPosition, setDragPosition] = useState<number>(0);

  const handleDragStart = (e: MouseEvent | TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setDragPosition(clientX);
  };

  const handleDragMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const delta = clientX - dragPosition;
    if (delta > 100) {
      // Handle call action
      console.log("Calling:", phoneNumber);
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="bg-black flex items-center justify-center w-full py-10 md:py-20 px-4">
      <div className="bg-white rounded-lg md:rounded-3xl px-4 py-6 md:p-8 w-full max-w-3xl mx-auto">
        <h1 className="text-lg md:text-3xl font-bold text-blue-500 mb-4 md:mb-6">
          Seeking Enterprise-Grade Solution with custom built LLM? Your Search
          Ends Here!
        </h1>

        <div className="space-y-4 md:space-y-6 text-gray-700">
          <p className="text-sm md:text-lg">
            Harness the power of next-generation interactions with our
            enterprise-grade AI digital avatar solutions. Built for scalability,
            precision, and reliability, our technology revolutionizes customer
            experiences with hyper-realistic, lifelike avatars tailored to the
            needs of innovative businesses.
          </p>

          <p className="text-sm md:text-lg">
            Partner with our expert AI engineers to design a custom digital
            avatar that reflects your brand's unique voice and personality.
            Complement it with a bespoke LLM designed to meet your specific
            requirements. Our solutions streamline and elevate your
            communication channels, delivering intelligent, emotionally resonant
            interactions at every customer touchpoint.
          </p>

          <button className="w-full bg-blue-500 text-white rounded-lg py-2 md:py-3 text-sm md:text-lg font-medium hover:bg-blue-600 transition-colors">
            Enterprise Inquiry Form
          </button>

          <div className="text-center">
            <p className="text-gray-500 mb-4 text-sm md:text-lg">
              Or Call Me Instead
            </p>

            <div className="relative mb-4">
              <select className="absolute left-0 top-1/2 pl-3 -translate-y-1/2 bg-transparent text-gray-700 outline-none px-2 py-2 appearance-none">
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
              </select>
              <input
                type="number"
                value={phoneNumber}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPhoneNumber(e.target.value)
                }
                placeholder="What's your phone number?"
                className="w-full pl-12 pr-4 py-3 text-sm md:text-lg border rounded-lg focus:outline-none"
              />
            </div>

            <div
              className="relative bg-gray-100 rounded-full p-2 py-3 cursor-pointer select-none touch-none"
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              <div
                className={`
              absolute left-0 top-0 h-full bg-green-500 rounded-full transition-all
              ${isDragging ? "opacity-20" : "opacity-0"}
            `}
                style={{
                  width: `${Math.min((dragPosition * 100) / 200, 100)}%`,
                }}
              />
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <FiPhone className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium text-sm md:text-lg">
                  SLIDE TO CALL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
