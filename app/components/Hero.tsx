import Image from "next/image";

export default function Hero() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center text-center px-4 pt-[60px] md:pt-[102px] relative">
      <div className="max-w-[1280px] mx-auto relative z-[3]">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[76px] font-[700] text-white mb-[38px] leading-[50px] md:leading-[75px] lg:leading-[92px] xl:leading-[100px] font-helvetica-bold">
          Step Into The Future Meet
          <br />
          <span className="bg-gradient-to-r from-[#10B1DF] via-[#4361ee] to-[#E813DF] text-transparent bg-clip-text">
            Your Digital Avatar
          </span>
        </h1>

        <p className="md:text-[18px] text-white max-w-[795px] mx-auto mb-[40px] md:mb-[48px] md:leading-[30px] font-general-sans">
          Experience Natural User Intelligent Interface, Super Charged (NUIIX)
          The Next Level Of Technology With Intuitive Digital Avatars That
          Engage In Natural, Human-Like Conversation.
        </p>

        <button className="bg-[#3A8FFF33] p-2 rounded-full relative w-[223px] h-[73px] flex justify-center items-center overflow-hidden mx-auto text-white">
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
        <div className="flex justify-center mt-[58.49px] mb-[-1px]">
          <Image
            src="/assets/hero-img.svg"
            alt="hero-img"
            width={585.69}
            height={585.69}
            className="md:w-auto w-[350px]"
          />
        </div>
      </div>
      <img
        src="/assets/blue-shade-bright.png"
        alt=""
        className="absolute bottom-0 left-0 z-[2]"
      />
    </main>
  );
}
