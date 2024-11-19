import Image from "next/image";
import Link from "next/link";

type Certification = {
  image: string;
  alt: string;
  title: string;
  subtitle?: string; // Subtitle is optional
};

export default function Security() {
  const certifications: Certification[] = [
    {
      image: "/placeholder.svg?height=120&width=120",
      alt: "GDPR Certification",
      title: "Committed To The General Data",
      subtitle: "Protection Regulation",
    },
    {
      image: "/placeholder.svg?height=120&width=120",
      alt: "Content Authenticity Initiative",
      title: "Content",
      subtitle: "Authenticity Initiative",
    },
    {
      image: "/placeholder.svg?height=120&width=120",
      alt: "AICPA SOC",
      title: "SOC 2 Type 2 Compliant",
    },
    {
      image: "/placeholder.svg?height=120&width=120",
      alt: "C2PA Certification",
      title: "Coalition For Content Provenance",
      subtitle: "And Authenticity (C2PA)",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white px-4 py-16 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          Safe, Reliable, And Ethical Use Of NUIIX
        </h1>

        <p className="text-lg md:text-xl mb-16 max-w-3xl mx-auto opacity-90">
          We Prioritize The Security And Responsible Use Of Our Platform. AI
          Avatars Are Created And Shared Only With Explicit Permission, And Our
          System Is Designed To Prevent The Distribution Of Harmful Or
          Inappropriate Content.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4 relative w-24 h-24">
                <Image
                  src={cert.image}
                  alt={cert.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-sm">
                <p className="font-medium">{cert.title}</p>
                {cert.subtitle && <p className="opacity-80">{cert.subtitle}</p>}
              </div>
            </div>
          ))}
        </div>

        <Link
          href="#"
          className="inline-block px-8 py-3 text-lg font-medium rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-200 relative group"
        >
          <span className="relative z-10">Learn More</span>
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-200"></div>
        </Link>
      </div>
    </section>
  );
}
