import AIAssistant from "./components/AIAssistant";
import EffortlessAndNaturalConversation from "./components/EffortlessAndNaturalConversation";
import ElevenLabs from "./components/ElevenLabs";
import Evolution from "./components/Evolution";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HumanPotential from "./components/HumanPotential";
import LanguagesSpeak from "./components/LanguagesSpeak";
import Partners from "./components/Partners";
import Security from "./components/Security";
import Steps from "./components/Steps";

export default function Home() {
  return (
    <div className="pt-5 md:pt-10 bg-[#000000]">
      <Header />
      <Hero />
      <Partners />
      <EffortlessAndNaturalConversation/>
      <LanguagesSpeak />
      <ElevenLabs />
      <HumanPotential />
      <AIAssistant />
      <Steps />
      <Evolution />
      <Security />
      <FAQ/>
      <Footer />
    </div>
  );
}
