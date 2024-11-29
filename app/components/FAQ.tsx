'use client'
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface PledgeItem {
  title: string;
  content: string;
}

const pledgeItems: PledgeItem[] = [
  {
    title: "How we Promote Transparency in Avatar Interactions",
    content: "We maintain complete transparency in how our avatars interact with users, clearly disclosing their AI nature and capabilities. Every interaction is documented and can be reviewed, ensuring users always understand they're engaging with an AI-powered digital avatar."
  },
  {
    title: "How we Uphold Privacy and Data Protection",
    content: "We implement state-of-the-art security measures to protect user data, following GDPR and other international privacy standards. All interactions are encrypted, and personal data is handled with the utmost care and transparency."
  },
  {
    title: "How we Ensure Fairness and Prevent Bias",
    content: "Our development process includes rigorous testing for bias in avatar interactions. We continuously monitor and adjust our AI models to ensure fair treatment across all user demographics and use cases."
  },
  {
    title: "Combating Misuse and Malicious Applications",
    content: "We have implemented robust safeguards against potential misuse of our avatar technology. This includes content filtering, behavior monitoring, and immediate response protocols for any detected malicious activities."
  },
  {
    title: "Fostering Continuous Improvement",
    content: "We maintain a dedicated feedback loop with users and stakeholders to continuously enhance our avatar technology. Regular audits and updates ensure our systems evolve with the highest ethical standards."
  },
  {
    title: "How we Enhance Accessibility and Inclusivity",
    content: "Our avatars are designed with accessibility in mind, ensuring they can effectively interact with users of all abilities. We regularly consult with accessibility experts and diverse user groups to improve inclusive design."
  }
];

const AccordionItem: React.FC<{ item: PledgeItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        className="w-full text-left py-3 md:py-4 flex justify-between items-center gap-4 text-lg rounded"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        {item.title}
        <FaChevronDown className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-300 animate-accordion-down">
          {item.content}
        </div>
      )}
    </div>
  );
};

const EthicalPledge: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-[980px]">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Our Ethical Pledge In Action
        </h1>
        <p className="text-gray-300 mb-12 leading-relaxed">
          This pledge is not a one-time effort but the foundation of our ongoing commitment to ethical AI practices. We actively engage with our clients, users, and regulators to refine our principles as technology evolves. Together, we can unlock the full potential of digital avatars while ensuring their development and use remain rooted in integrity, respect, and responsibility.
        </p>
        
        <div className="space-y-4">
          {pledgeItems.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EthicalPledge;

