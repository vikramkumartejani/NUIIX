"use client";

import { useState } from "react";
import Image from "next/image";

const HumanPotential = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const services = [
    {
      id: "customer-service",
      title: "Customer Service",
      image: "/assets/human-potential-img1.png",
      tag: "SUPERCHARGED",
      content: `Chat Bots Are So Outdated, Customer Service Agents Are Expensive. Step Into The Future Of Customer Service With NUIIX's Intuitive Digital Humans. Available 24/7, These Engaging, Lifelike Avatars Ensure Seamless, Consistent Interactions That Enhance The Customer Experience. They Help Streamline Inquiries, Reduce Call Volumes, And Drive Sales, All While Delivering Exceptional Service.

      Plus, With The Ability To Converse In Over 100 Languages, They Effortlessly Bridge Communication Gaps, Bringing You Closer To Delivering Truly Personalized, Efficient Customer Care. With NUIIX, You're Equipped To Elevate Your Brand And Redefine Customer Service For Todays World.`,
    },
    {
      id: "marketing",
      title: "Marketing",
      image: "/assets/human-potential-img2.png",
      tag: "SUPERCHARGED",
      content: `Set Yourself Apart As A True Innovator By Integrating Digital Humans Into Your Marketing Efforts. With NUIIX, You Have The Power To Create Captivating, Lifelike Brand Ambassadors That Deliver Personalized Messages To Each Of Your Customers In Ways That Are Unforgettable.

      Our Engaging Digital Humans Can Convey Your Brand's Story With Authenticity And Charm, Ensuring A Deep And Meaningful Connection With Your Audience. Not Only Do They Stand Out, But They Also Offer A Cost-Effective Solution For Creating Memorable Customer Experiences At Scale.

      With NUIIX, You Can Transform The Way Your Brand Communicates, Leaving A Lasting Impact That Resonates Long After The Message Is Delivered.`,
    },
    {
      id: "training",
      title: "Training",
      image: "/assets/human-potential-img3.png",
      tag: "SUPERCHARGED",
      content: `Nobody Enjoys Slogging Through Dry Training Documents Or Disengaging E-Learning Content That Lacks Interactivity—Now They Don't Have To. The World Of Online Training Is Ready For A Breakthrough, And With NUIIX, You Have The Power To Lead The Transformation. Forget About High Production Costs, Tight Timelines, And The Need For Large Teams To Develop Engaging Sessions.

      NUIIX Lets You Effortlessly Deliver Customized, Interactive Learning Experiences. Learners Can Ask Questions And Receive Real-Time, Intuitive Responses, Just Like In A One-On-One, Face-To-Face Session. This Personalized Interaction Not Only Boosts Engagement But Also Deepens Understanding, Making The Learning Experience More Effective And Enjoyable.`,
    },
  ];

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };
  return (
    <section className="min-h-screen px-4 md:px-[25px] py-[40px] md:py-[70px]">
      <div className="min-h-screen w-full bg-white sm:rounded-[70px] rounded-[50px] px-4 md:px-[35px] lg:px-[67px] py-[50px] md:py-[75px] relative overflow-hidden">
        <img
          src="/assets/blue-shade.png"
          alt=""
          className="absolute md:top-[-200px] sm:top-[-170px] top-[-120px] md:left-[-530px] sm:left-[-400px] left-[-300px] z-[1] w-[800px]"
        />
        <img
          src="/assets/blue-shade.png"
          alt=""
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] md:w-auto sm:w-[800px] w-[1000px]"
        />
        <img
          src="/assets/blue-shade.png"
          alt=""
          className="absolute md:bottom-[-200px] sm:bottom-[-170px] bottom-[-120px] md:right-[-530px] sm:right-[-400px] right-[-300px] z-[1] w-[800px]"
        />
        <div className="md:max-w-[1280px] max-w-[600px] mx-auto relative z-[2]">
          <h1 className="text-4xl md:text-[66px] font-helvetica-bold md:leading-[77px] mb-[30px] md:mb-[45px] text-center md:pt-0 pt-[20px]">
            Harness the Human Potential of AI
          </h1>

          <p className="md:text-[18px] font-[400] mb-[54px] max-w-[882.47px] mx-auto font-general-sans text-center">
            With NUI, your customers will forge deeper connections with your
            text, achieve greater results, and witness the incredible synergy
            between human potential and the vast capabilities of AI.
          </p>
        </div>
        <div className="md:max-w-[1280px] max-w-[320px] mx-auto relative z-[2]">
          <div className="w-full flex md:flex-row flex-col items-start gap-[20px]">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white overflow-hidden p-[12px] sm:p-[19px] md:p-[12px] lg:p-[19.22px] flex-1"
                style={{
                  boxShadow: "8.48px 8.48px 62.76px 0px #00000024",
                }}
              >
                <div className="relative">
                  <Image
                    src={service.image}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full lg:h-[329.62px] md:h-[280px] h-[260px] object-cover"
                  />
                  <div className="bg-white">
                    <button
                      className="flex items-center justify-between w-full border-b-[0.51px] border-[#222222] md:py-[21px] py-[10px]"
                      onClick={() => toggleSection(service.id)}
                    >
                      <h2 className="text-[18px] lg:text-[23.75px] font-[700] text-[#222222] font-helvetica-bold md:leading-[30px] text-left">
                        {service.title}
                      </h2>
                      <div
                        className="text-black hover:bg-white/10 rounded-full transition-colors"
                        aria-expanded={openSection === service.id}
                        aria-controls={`content-${service.id}`}
                      >
                        {openSection === service.id ? (
                          <Image
                            src="/assets/dropdown-open-icon.svg"
                            alt="dropdown-close"
                            width={23.48}
                            height={23.48}
                            className="w-[23.48px] min-w-[23.48px] h-[23.48px] min-h-[23.48px] shadow-blue-glow rounded-full bg-[#3B8FFF]"
                          />
                        ) : (
                          <Image
                            src="/assets/dropdown-close-icon.svg"
                            alt="dropdown-close"
                            width={23.48}
                            height={23.48}
                            className="w-[23.48px] min-w-[23.48px] h-[23.48px] min-h-[23.48px]"
                          />
                        )}
                      </div>
                    </button>
                  </div>
                </div>
                <div className="py-[14.7px]">
                  <div className="lg:text-[17px] text-[#3A8FFF] font-[500] font-general-sans">
                    {service.tag}
                  </div>
                  <div
                    id={`content-${service.id}`}
                    className={`transition-all duration-300 ease-in-out space-y-4 ${
                      openSection === service.id
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    {service.content.split("\n\n").map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-[#222222] lg:text-[18px] opacity-[0.8] font-general-sans mt-[24px]"
                      >
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center md:mt-[59px] mt-[50px]">
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
                  <span className="ml-1 text-[18px] font-normal font-general-sans text-white">
                    Start Free Trial
                  </span>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanPotential;
