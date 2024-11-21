import React from "react";

interface StartDemoPopupProps {
  onClose: () => void; // Function to handle closing the popup
}

const StartDemoPopup: React.FC<StartDemoPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-auto  sm:flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 p-3">
      <div className="bg-white p-6 w-full md:w-[80%]  rounded-lg shadow-lg overflow-y-auto">
        <h2 className="text-purple-700 font-semibold text-xl md:text-2xl mb-4">
          Getting Started
        </h2>
        <p className="text-gray-700 mb-4 text-sm md:text-base">
          For me to support you effectively, it’s important that I can both see and hear you. This experience will work like a video call, allowing us to communicate face-to-face. If you're comfortable with this, please enable access to your microphone and camera when prompted.
        </p>
        <p className="text-gray-700 mb-4 text-sm md:text-base">
          A stable internet connection is key for optimal picture quality during our call. If you experience any disruptions, we’d appreciate it if you could run a speed test and share the results in your feedback at the end of the session.
        </p>
        <p className="text-gray-700 mb-4 text-sm md:text-base">
          Background noise can make it difficult for me to understand you. To ensure a smooth interaction, please connect from a quiet location without other conversations in the background, and let’s keep this one-on-one for now.
        </p>
        <p className="text-gray-700 mb-4 text-sm md:text-base">
          To learn more about our data practices, including collection and use, please review our <a href="#" className="text-purple-700">Privacy Policy</a>. If you agree to these terms, please confirm your acceptance:
        </p>
        <div className="flex items-center gap-2 mb-4">
          <p className="text-gray-700 text-sm md:text-base">
            Accept Privacy Terms and End User Agreement (EULA). Allow access to camera, microphone, and usage data.
          </p>
          <input type="checkbox" className="mr-2" />
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-purple-700 text-white py-2 px-6 rounded-lg hover:bg-purple-800"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartDemoPopup;
