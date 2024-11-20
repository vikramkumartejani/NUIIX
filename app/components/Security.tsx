import Image from "next/image";
import Link from "next/link";

type Certification = {
  image: string;
  alt: string;
  title?: string;
};

export default function Security() {
  const certifications: Certification[] = [
    {
      image: "/assets/gdpr-security.png",
      alt: "GDPR Certification",
      title: "Committed To The General Data Protection Regulation",
    },
    {
      image: "/assets/cai-security.png",
      alt: "Content Authenticity Initiative",
    },
    {
      image: "/assets/soc2-security.png",
      alt: "AICPA SOC",
      title: "SOC 2 Type 2 Compliant",
    },
    {
      image: "/assets/c2pa-security.png",
      alt: "C2PA Certification",
      title: "Coalition For Content Provenance And Authenticity (C2PA)",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white px-4 py-16 flex flex-col items-center justify-center text-center relative">
      <img
        src="/assets/egg-shape-blue-shade.png"
        alt=""
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div className="max-w-[1280px] mx-auto">
        <h1 className="text-4xl md:text-[66px] font-helvetica-bold md:leading-[77px] mb-[30px] md:mb-[45px]">
          Safe, Reliable, And Ethical Use Of NUIIX
        </h1>

        <p className="md:text-[18px] font-[400] mb-[75px] max-w-[882.47px] mx-auto font-general-sans">
          We Prioritize The Security And Responsible Use Of Our Platform. AI
          Avatars Are Created And Shared Only With Explicit Permission, And Our
          System Is Designed To Prevent The Distribution Of Harmful Or
          Inappropriate Content.
        </p>

        <div className="relative mb-16">
          {/* Gradient overlay for fading effect */}
          <div className="sm:block hidden absolute top-0 left-0 w-[137.52px] h-full bg-gradient-to-r from-[#020407] to-[#02040700] pointer-events-none z-10"></div>
          <div className="sm:block hidden absolute top-0 right-0 w-[137.52px] h-full bg-gradient-to-l from-[#020407] to-[#02040700] pointer-events-none z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[100px] md:gap-[130px]">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col items-center h-[235.64px]"
              >
                <div
                  className={`relative w-full ${
                    index === 2 ? "h-[154px]" : "h-full"
                  }`}
                >
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                {cert.title && (
                  <p className="opacity-[0.5] text-[15.21px] font-[400] font-general-sans mt-[26px]">
                    {cert.title}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <button className="bg-[#3A8FFF33] p-2 rounded-full relative w-[172.06px] h-[73px] flex justify-center items-center overflow-hidden mx-auto text-white">
          <div className="btn-border w-full p-[1.55px]">
            <span
              className="bg-[#3A8FFF] w-[156.82px] flex items-center justify-center py-4 px-5 rounded-full relative h-[58px]"
              style={{
                border: "1.55px solid transparent",
                borderImageSource:
                  "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
                transition: "border-image-source 0.4s ease-in-out",
              }}
            >
              <span className="ml-1 text-[18px] font-[300] font-general-sans w-max">
                Learn More
              </span>
            </span>
          </div>
        </button>
      </div>
    </section>
  );
}
