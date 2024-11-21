"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsentPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = Cookies.get("cookies-consent");
    if (!consent) {
      setShowPopup(true); // Show popup if no consent has been given
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookies-consent", "accepted", { expires: 365 });
    setShowPopup(false);
  };

  const handleReject = () => {
    Cookies.set("cookies-consent", "rejected", { expires: 365 });
    setShowPopup(false);
  };

  const handleCustomize = () => {
    // Handle customization of cookie preferences if needed
  };

  return (
    showPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-50">
        <div className="max-w-3xl mx-auto bg-white p-6 border border-gray-300 shadow-md rounded-md">
          <h2 className="text-purple-700 font-semibold text-base sm:text-lg mb-3 font-helvetica-bold">
            This Website Uses Cookies
          </h2>
          <p className="text-gray-700  text-base sm:text-lg mb-10">
            We use essential cookies to operate our website and additional
            cookies and similar technologies to enhance your experience. These
            technologies help us analyze traffic, personalize content and ads,
            provide social media features, and improve our products and
            services. Some are set by third parties, including our social media,
            advertising, and analytics partners. For more details, please see
            our{" "}
            <a href="#" className="text-purple-700  text-base sm:text-lg font-general-sans">
              Cookies Policy
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 items-end justify-center md:justify-end">
            <button
              onClick={handleReject}
              className="px-4 py-2 border border-gray-500 text-gray-700 rounded hover:bg-gray-200 font-helvetica-bold text-sm sm:text-base"
            >
              Reject All
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 font-extralight font-helvetica-bold text-sm sm:text-base"
            >
              Accept All
            </button>
            <button
              onClick={handleCustomize}
              className="px-2 sm:px-4 py-2 text-purple-700 rounded hover:bg-purple-100 font-helvetica-bold font-medium text-sm sm:text-base"
            >
              Customize
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookieConsentPopup;
