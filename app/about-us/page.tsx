import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaUsers, FaShieldAlt, FaBullseye, FaChartLine } from "react-icons/fa";

const AboutUs = () => {
  const values = [
    {
      icon: FaUsers,
      title: "Your Success, Our Priority",
      description:
        "The core of our mission is your success. We focus on creating hyper-realistic digital humans powered by advanced AI, designed to transform customer interactions into meaningful, memorable experiences. Through rigorous innovation and user research, we align our goals with yours to deliver solutions that build lasting relationships based on trust, empathy, and collaboration.",
      iconClassName: "text-purple-500",
    },
    {
      icon: FaShieldAlt,
      title: "Privacy-Centric Commitment",
      description:
        "Your data, your control. We uphold the highest standards of security and transparency, ensuring your information—and your customers'—remains safeguarded. With us, privacy isn't just a feature; it's a promise that protects trust every step of the way.",
      iconClassName: "text-blue-500",
    },
    {
      icon: FaBullseye,
      title: "Relentless Pursuit of Excellence",
      description:
        "Our commitment to excellence drives us to deliver digital human solutions that exceed ethical and operational benchmarks. With a focus on authenticity and precision, we aim to inspire confidence in every interaction we enhance and every relationship we support.",
      iconClassName: "text-cyan-500",
    },
    {
      icon: FaChartLine,
      title: "A Culture of Empowerment and Growth",
      description:
        "We believe in the power of diversity, respect, and learning. Our team thrives on mentorship, collaboration, and continuous improvement, fostering a culture where everyone—employees and clients alike—can achieve new milestones together.",
      iconClassName: "text-rose-500",
    },
  ];

  return (
    <div className="w-full">
      <div className="bg-black py-5 md:py-10">
        <Header />
      </div>
      <div className="px-4 py-5 md:py-10 w-full max-w-[1180px] mx-auto">
        <h1 className="text-center text-2xl sm:text-4xl font-bold pt-8 sm:py-5">
          We Believe In Good Ideas Flexibility & Precision
        </h1>
        <div className="py-5 sm:py-10">
          <h2 className="text-lg sm:text-3xl font-semibold mb-3 sm:mb-6">
            Our Mission
          </h2>
          <p className="text-sm sm:text-xl font-medium">
            Bringing Human Interaction to the Digital World: We are committed to
            revolutionizing engagement through hyper-realistic, AI-powered
            digital human avatars. By blending cutting-edge technology with
            lifelike realism, we create avatars that deliver personalized,
            seamless, and emotionally intelligent interactions. Available 24/7,
            our solutions redefine scalability, ensuring every conversation
            feels human while driving meaningful connections and exceptional
            results.
          </p>
        </div>
        <div className="pb-5 sm:pb-10">
          <h2 className="text-lg sm:text-3xl font-semibold mb-3 sm:mb-6">
            Our Vision
          </h2>
          <p className="text-sm sm:text-xl font-medium">
            Empowering businesses globally to innovate, connect, and thrive by
            transforming customer experiences into meaningful, lifelike digital
            interactions. Through our digital human avatars, we envision a
            future where businesses can deliver impactful, accessible, and
            inclusive communication—anytime, anywhere, and at any scale. Our
            goal is to bridge the gap between technology and humanity, fostering
            efficiency, trust, and deeper relationships across all industries."
          </p>
        </div>

        {/* Two Boxes */}
        <div className="max-w-80 sm:max-w-3xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 text-center my-5">
          <div className="shadow-lg rounded-xl px-5 py-5 sm:py-8">
            <h2 className="text-red-500 text-2xl sm:text-3xl font-black">
              2024
            </h2>
            <h1 className="text-2xl sm:text-3xl my-3 sm:my-5 font-medium">
              Founded
            </h1>
            <p className="text-base sm:text-xl sm:leading-[30px] text-gray-600">
              We started with a mission to help enterprises be closer to their
              customers and interact naturally.
            </p>
          </div>
          <div className="shadow-lg rounded-xl px-5 py-5 sm:py-8">
            <h2 className="text-red-500 text-2xl sm:text-3xl font-black">
              20+
            </h2>
            <h1 className="text-2xl sm:text-3xl my-3 sm:my-5 font-medium">
              Team Members
            </h1>
            <p className="text-base sm:text-xl sm:leading-[30px] text-gray-600">
              Our team has the best AI minds obsessed with enabling businesses
              to accomplish great things.
            </p>
          </div>
        </div>

        <div className="py-5 sm:py-10">
          <h2 className="text-xl sm:text-3xl font-semibold mb-4 sm:mb-6">
            The Story Behind NUIIX Bridging the Gap Between Technology and
            Humanity
          </h2>
          <p className="text-sm sm:text-xl font-medium">
            Our Team , inspired by the evolution of AI-driven engagement, saw an
            opportunity to address gaps in realism, adaptability, and emotional
            intelligence in digital avatars. They asked, What if avatars could
            not only look human but also truly connect—understanding and
            responding with the warmth and nuance of real interactions?
          </p>
          <p className="text-sm sm:text-xl font-medium mt-4">
            This vision led to the creation of NUIIX’s lifelike, AI-powered
            digital human avatars, designed to transform digital engagement into
            something genuinely human-like.
            <br /> We are proud to contribute to the ongoing growth of the
            digital avatar industry, with a clear mission: to redefine
            possibilities and ensure every interaction feels as authentic as it
            is impactful.
          </p>
        </div>
        <div className="pb-5 sm:pb-10">
          <h2 className="text-xl sm:text-3xl font-semibold mb-4 sm:mb-6">
            Our Journey Forward
          </h2>
          <p className="text-sm sm:text-xl font-medium">
            At NUIIX we are not just creating digital avatars; we are shaping
            the future of interaction. From customer service to education,
            healthcare, and beyond, our AI digital twins are revolutionizing how
            people and organizations connect.
          </p>
          <p className="text-sm sm:text-xl font-medium mt-4">
            We believe the most advanced technology should feel intuitive,
            natural, and human. By bringing digital human avatars to life, we
            are building a bridge to a world where businesses don’t just serve
            their customers but connect with them in ways that are memorable,
            impactful, and human at their core.
          </p>
        </div>

        {/* Four Circle */}
        <div className="pb-10">
          <h2 className="text-center text-2xl sm:text-3xl font-bold pt-5 pb-6 md:pb-14">
            The Executive Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-items-center">
            <img src="/assets/circle.png" alt="circle" />
            <img src="/assets/circle.png" alt="circle" />
            <img src="/assets/circle.png" alt="circle" />
            <img src="/assets/circle.png" alt="circle" />
          </div>
        </div>

        {/* Three Circle */}
        <div className="pb-10">
          <h2 className="text-center text-2xl sm:text-3xl font-bold pt-5 pb-6 sm:pb-14">
            Our Board
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mx-auto w-full max-w-full justify-items-center">
            <img src="/assets/circle.png" alt="circle" />
            <img src="/assets/circle.png" alt="circle" />
            <img src="/assets/circle.png" alt="circle" />
          </div>
        </div>
      </div>

      {/* Values */}
      <section className="bg-[#FFF5F0] py-10 px-4 md:py-24">
        <div className="w-full max-w-[1250px] mx-auto">
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-bold text-center mb-5 sm:mb-16 bg-gradient-to-r from-rose-500 to-orange-400 text-transparent bg-clip-text">
            VALUES
          </h2>
          <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 py-6 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex gap-3 sm:gap-4 items-start">
                  <div
                    className={`p-2 rounded-lg ${value.iconClassName} bg-opacity-10 bg-current`}
                  >
                    <value.icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-2xl font-semibold">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-lg">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
