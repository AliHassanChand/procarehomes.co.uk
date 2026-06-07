import { useState } from "react";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import ModelOfCare from "./components/ModelOfCare.tsx";
import Services from "./components/Services.tsx";
import Property from "./components/Property.tsx";
import Leadership from "./components/Leadership.tsx";
import Governance from "./components/Governance.tsx";
import DigitalCare from "./components/DigitalCare.tsx";
import Careers from "./components/Careers.tsx";
import Community from "./components/Community.tsx";
import Feedback from "./components/Feedback.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import AssistantChat from "./components/AssistantChat.tsx";

import { ShieldCheck, HeartHandshake, PhoneCall } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="font-sans antialiased text-slate-900 bg-white min-h-screen relative selection:bg-sky-500 selection:text-white">
      
      {/* Floating immediate action bar to assist social workers */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center space-x-2 bg-slate-900/95 backdrop-blur-md text-white border border-slate-800 shadow-xl px-4 py-3 rounded-full cursor-pointer hover:bg-slate-800 transition">
        <PhoneCall className="w-4 h-4 text-emerald-400 animate-bounce" />
        <a href="tel:+447904908123" className="text-[10px] font-mono tracking-widest font-bold">
          +44 7904 908123 REFERRALS HOTLINE
        </a>
      </div>

      {/* 1. Header */}
      <Header onNavigate={handleNavigate} activeSection={activeSection} />

      {/* 2. Hero Component */}
      <Hero onNavigate={handleNavigate} />

      {/* 3. About PRO Care Homes */}
      <About />

      {/* 4. Support Model of Care */}
      <ModelOfCare />

      {/* 4. Services Section */}
      <Services onNavigate={handleNavigate} />

      {/* 5. 6 Flags House showcase */}
      <Property />

      {/* 6. Leadership Executive team */}
      <Leadership />

      {/* 7. Clinical Quality CQC Governance */}
      <Governance />

      {/* 8. Digital Care & Nourish Planning */}
      <DigitalCare />

      {/* 9. Recruitment & Careers */}
      <Careers />

      {/* 10. Community & Independence integration */}
      <Community />

      {/* 11. Co-production Feedback & Satisfaction surveys */}
      <Feedback />

      {/* 12. Contact us & referrers dashboard form */}
      <Contact />

      {/* 13. Unified Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* 14. Floating CQC Regulatory assistant advisor */}
      <AssistantChat />
      
    </div>
  );
}
