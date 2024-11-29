import Link from "next/link";
import {
  FaFacebookF,
  FaTiktok,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

type SocialLink = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
};

export default function Footer(): JSX.Element {
  const companyLinks = [
    { text: "About", href: "/about-us" },
    { text: "Team", href: "/team" },
    { text: "News", href: "/news" },
    { text: "Contact Support", href: "/contact-support" },
    { text: "Contact", href: "/contact" },
    { text: "Sales", href: "/sales" },
    { text: "Terms of Service", href: "/terms-of-service" },
    { text: "Privacy Policy", href: "/privacy-policy" },
    { text: "Cookies Policy", href: "/cookies-policy" },
  ];

  const solutionLinks = ["Customer Service", "Marketing", "Training"];

  const socialLinks: SocialLink[] = [
    { icon: FaLinkedinIn, label: "LinkedIn" },
    { icon: RiInstagramFill, label: "Instagram" },
    { icon: FaFacebookF, label: "Facebook" },
    { icon: FaTiktok, label: "TikTok" },
    { icon: FaTwitter, label: "Twitter" },
    { icon: FaYoutube, label: "YouTube" },
  ];

  return (
    <footer className="bg-[#EBEBEB] px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="md:py-12 py-11">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {/* Company Section */}
            <div>
              <h2 className="md:mb-[34px] mb-[20px] md:text-[24px] text-[20px] font-[700] text-[#222222] helvetica-bold">
                Company
              </h2>
              <ul className="md:space-y-4 space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.text}>
                    <Link
                      href={link.href}
                      className="hover:text-gray-900 md:text-[18px] font-[400] text-[#222222]"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Section */}
            <div>
              <h2 className="md:mb-[34px] mb-[20px] md:text-[24px] text-[20px] font-[700] text-[#222222] helvetica-bold">
                Technology
              </h2>
            </div>

            {/* Solutions Section */}
            <div>
              <h2 className="md:mb-[34px] mb-[20px] md:text-[24px] text-[20px] font-[700] text-[#222222] helvetica-bold">
                Solutions
              </h2>
              <ul className="md:space-y-4 space-y-2">
                {solutionLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-gray-900 md:text-[18px] font-[400] text-[#222222] w-max flex"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ethics Section */}
            <div>
              <h2 className="md:mb-[34px] mb-[20px] md:text-[24px] text-[20px] font-[700] text-[#222222] helvetica-bold">
                Ethics
              </h2>
              <ul className="md:space-y-4 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 md:text-[18px] font-[400] text-[#222222] w-max flex"
                  >
                    Our Pledge
                  </Link>
                </li>
              </ul>
            </div>

            {/* Pricing Section */}
            <div>
              <h2 className="md:mb-[34px] mb-[20px] md:text-[24px] text-[20px] font-[700] text-[#222222] helvetica-bold">
                Pricing
              </h2>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="md:mb-[34px] mb-[20px] md:text-[24px] text-[20px] font-[700] text-[#222222] helvetica-bold">
                FAQ
              </h2>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-5 lg:flex-row flex-col items-center lg:justify-between justify-center">
          <div className="flex md:gap-[18px] gap-[10px] items-center">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href="#"
                className="rounded-full bg-[#121212] md:w-[58px] w-[40px] md:h-[58px] h-[40px] flex items-center justify-center text-white hover:bg-gray-700"
                aria-label={social.label}
              >
                <social.icon className="md:text-[31px] text-[24px]" />
              </Link>
            ))}
          </div>

          {/* Certification Logos */}
          <div className="flex items-center md:gap-[30px] gap-[16px] opacity-[0.4]">
            {[
              {
                src: "/assets/iso-logo.png",
                alt: "ISO Certification",
              },
              {
                src: "/assets/gdpr-logo.png",
                alt: "GDPR Compliance",
              },
              {
                src: "/assets/cai-logo.png",
                alt: "Content Authenticity Initiative",
              },
              {
                src: "/assets/c2pa-logo.png",
                alt: "C2PA Certification",
              },
            ].map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="md:h-10 h-8 w-auto"
              />
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 border-t border-[#000] md:py-[40px] py-[30px] mt-[47px] flex items-center justify-between flex-col md:flex-row gap-5">
          <p>
            © All Rights Reserved 2024 NUIIX AI | NUIIX{" "}
            <Link href="privacy-policy">Privacy Policy</Link> |{" "}
            <Link href="terms-of-service">Terms Of Use</Link> |{" "}
            <Link href="cookies-policy">Cookies Policy</Link>
          </p>
          <h2 className="text-base sm:text-lg">A DynamiX Company</h2>
        </div>
      </div>
    </footer>
  );
}
