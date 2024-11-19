import AIAssistant from "./components/AIAssistant";
import Evolution from "./components/Evolution";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Security from "./components/Security";
import Steps from "./components/Steps";

export default function Home() {
  return (
    <div className="pt-10 bg-[#000000]">
      {/* <Header /> */}
      <Hero />
      <AIAssistant />
      <Steps />
      <Evolution />
      <Security />
      <Footer />
    </div>
  );
}
