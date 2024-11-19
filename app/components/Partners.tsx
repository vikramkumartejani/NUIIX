import Image from "next/image";
import Marquee from "react-fast-marquee";

type Partner = {
  imgSrc: string;
};

export default function Partners() {
  const partners: Partner[] = [
    { imgSrc: "/assets/partner-1.png" },
    { imgSrc: "/assets/partner-2.png" },
    { imgSrc: "/assets/partner-3.png" },
    { imgSrc: "/assets/partner-4.png" },
  ];
  return (
    <section className="min-h-[106.07px] text-white relative flex items-center">
      <img
        src="/assets/partners-bg.jpg"
        className="absolute left-0 w-full h-full object-cover z-[2]"
      />
      <div className="max-w-[1280px] mx-auto md:flex hidden lg:flex-row flex-col items-center justify-between xl:gap-[90px] lg:gap-[60px] md:gap-[30px]  relative z-[2] py-[23.66px] md:px-6">
        <h1 className="md:text-[46px] font-bold md:leading-[72px] sm:leading-[60px] leading-[50px] text-center relative font-helvetica-bold min-w-max">
          Our Partners
        </h1>
        <div className="flex items-center xl:gap-[90px] md:gap-[60px] lg:pb-0 pb-[20px]">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center h-[50.39px] w-auto">
              <img
                src={partner.imgSrc}
                alt={`Partner ${index + 1}`}
                width={58.76}
                height={58.76}
                className="object-contain h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden block relative z-[2] py-[23.66px] overflow-hidden">
        {/* Title */}
        <h1 className="text-[35px] sm:text-[45px] font-bold mb-[30px] sm:mb-[40px] md:leading-[72px] sm:leading-[60px] leading-[50px] text-center relative font-helvetica-bold">
          Our Partners
        </h1>

        {/* Marquee */}
        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover
          className="w-full pb-[10px]"
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center h-[40px] w-auto sm:ms-[75px] ms-[50px]"
            >
              <img
                src={partner.imgSrc}
                alt={`Partner ${index + 1}`}
                width={58.76}
                height={58.76}
                className="object-contain h-full w-full"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
