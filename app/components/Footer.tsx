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
    "About",
    "Ethics",
    "Careers",
    "Team",
    "News",
    "Contact Support",
    "Contact",
    "Sales",
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
    <footer className="bg-gray-100 px-6 py-12 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {/* Company Section */}
          <div>
            <h2 className="mb-6 text-lg font-semibold text-gray-900">
              Company
            </h2>
            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Section */}
          <div>
            <h2 className="mb-6 text-lg font-semibold text-gray-900">
              Technology
            </h2>
          </div>

          {/* Solutions Section */}
          <div>
            <h2 className="mb-6 text-lg font-semibold text-gray-900">
              Solutions
            </h2>
            <ul className="space-y-4">
              {solutionLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ethics Section */}
          <div>
            <h2 className="mb-6 text-lg font-semibold text-gray-900">Ethics</h2>
          </div>

          {/* Pricing Section */}
          <div>
            <h2 className="mb-6 text-lg font-semibold text-gray-900">
              Pricing
            </h2>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="mb-6 text-lg font-semibold text-gray-900">FAQ</h2>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 flex flex-col space-y-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex gap-[18px] items-center">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href="#"
                  className="rounded-full bg-[#121212] w-[58.31px] h-[58.31px] flex items-center justify-center text-white hover:bg-gray-700"
                  aria-label={social.label}
                >
                  <social.icon className="text-[28px]" />
                </Link>
              ))}
            </div>

            {/* Certification Logos */}
            <div className="flex items-center gap-[30px] opacity-[0.4]">
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
                  className="h-10 w-auto"
                />
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-600 border-t border-[#000]">
            <p>
              © All Rights Reserved 2024 NUIIX AI | NUIIX Privacy Policy | Terms
              Of Use
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
