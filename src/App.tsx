import { useState, useEffect } from "react";
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

// New specialized components
import ServiceDetail from "./components/ServiceDetail.tsx";
import Referrals from "./components/Referrals.tsx";
import Policies from "./components/Policies.tsx";

import { 
  ShieldCheck, 
  HeartHandshake, 
  PhoneCall, 
  ArrowRight, 
  Users, 
  BrainCircuit, 
  Home, 
  BarChart3, 
  FileCheck2, 
  FileText, 
  GraduationCap,
  // Added new premium visual features
  Compass,
  Heart,
  Smile,
  Sparkles,
  Coffee,
  Lock,
  Scale,
  TrendingUp,
  Award,
  ShieldAlert,
  ClipboardCheck,
  Activity,
  CheckCircle2,
  CalendarRange
} from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>(() => {
    const hash = window.location.hash.replace("#", "");
    return hash || "hero";
  });

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    window.location.hash = sectionId;
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveSection(hash);
      } else {
        setActiveSection("hero");
      }
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Central Router Node
  const renderActivePage = () => {
    if (activeSection.startsWith("services-") && activeSection !== "services-hub") {
      const serviceId = activeSection.replace("services-", "");
      return <ServiceDetail serviceId={serviceId} onNavigate={handleNavigate} />;
    }

    switch (activeSection) {
      case "about":
        return <About onNavigate={handleNavigate} />;
      case "model-of-care":
        return <ModelOfCare onNavigate={handleNavigate} />;
      case "services-hub":
        return <Services onNavigate={handleNavigate} />;
      case "property":
        return <Property onNavigate={handleNavigate} />;
      case "leadership":
        return <Leadership onNavigate={handleNavigate} />;
      case "governance":
        return (
          <>
            <Governance onNavigate={handleNavigate} />
            <DigitalCare onNavigate={handleNavigate} />
          </>
        );
      case "careers":
        return <Careers onNavigate={handleNavigate} />;
      case "referrals":
        return <Referrals onNavigate={handleNavigate} />;
      case "policies":
        return <Policies onNavigate={handleNavigate} />;
      case "contact":
        return <Contact onNavigate={handleNavigate} />;
      case "feedback":
        return <Feedback onNavigate={handleNavigate} />;
      case "digital":
        return <DigitalCare onNavigate={handleNavigate} />;
      case "community":
        return <Community onNavigate={handleNavigate} />;
      case "hero":
      case "home":
      default:
        return renderHomeDashboard();
    }
  };

  // Lighter, executive, emotionally powerful Home dashboard summaries
  const renderHomeDashboard = () => {
    const dashboardCards = [
      {
        id: "about",
        title: "About Our Story & Values",
        desc: "Specialist, relationship-based care focusing on placement stability and genuine warm home feelings.",
        icon: Users,
        badge: "Company Core Ethos",
        accent: "border-sky-100 bg-sky-50/40 text-sky-700"
      },
      {
        id: "model-of-care",
        title: "Quality Support Framework",
        desc: "Underpinned by trauma-informed principles, active choices, Positive Behaviour Support and risk empowerment.",
        icon: BrainCircuit,
        badge: "Specialist Support",
        accent: "border-[#5E8B7E]/20 bg-[#5E8B7E]/5 text-[#5E8B7E]"
      },
      {
        id: "services-hub",
        title: "Support Specialties Portfolios",
        desc: "Structured support pathways for developmental challenges, emotional stability and personal care.",
        icon: BarChart3,
        badge: "8 Pathways",
        accent: "border-emerald-100 bg-emerald-50/30 text-emerald-700"
      },
      {
        id: "property",
        title: "6 Flags House Environment",
        desc: "Our high-specification home offering private en-suite wetrooms, therapeutic escape rooms, and sensory courtyards.",
        icon: Home,
        badge: "Homely Safety",
        accent: "border-indigo-100 bg-indigo-50/30 text-indigo-700"
      },
      {
        id: "governance",
        title: "CQC Quality & Audits",
        desc: "Strict monthly regulation audits, digital Nourish recording, and alignment with safety and care standards.",
        icon: ShieldCheck,
        badge: "CQC Compliant",
        accent: "border-rose-100 bg-rose-50/30 text-rose-700"
      },
      {
        id: "referrals",
        title: "Commissioner Referrals Portal",
        desc: "Secure fast-track pre-admission audits, local authority pathways, and compatibility mapping inside 48 hours.",
        icon: FileCheck2,
        badge: "LA Partnerships",
        accent: "border-amber-100 bg-amber-50/40 text-amber-800"
      },
      {
        id: "policies",
        title: "Policies & Governance Hub",
        desc: "Full transparency. Access our mandated adult safeguarding, equality regulations, and complaint procedures instantly.",
        icon: FileText,
        badge: "Compliance Docs",
        accent: "border-slate-205 bg-slate-50/60 text-slate-700"
      },
      {
        id: "careers",
        title: "Careers & Recruitment Sourcing",
        desc: "Join our values-led support workforce. Explore our developmental academies and pre-employment DBS checks.",
        icon: GraduationCap,
        badge: "Work Here",
        accent: "border-[#7DB6A3]/20 bg-[#7DB6A3]/5 text-[#7DB6A3]"
      }
    ];

    return (
      <div className="animate-fadeIn">
        {/* 1. Header Hero Panel */}
        <Hero onNavigate={handleNavigate} />

        {/* 2. Unified Executive Summaries Dashboard */}
        <section className="py-20 bg-white border-t border-slate-100 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
              <span className="text-xs font-bold uppercase tracking-wider text-gov-blue font-mono block">
                ORGANISATIONAL OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gov-blue tracking-tight leading-snug">
                Executive Slices: The Pillars of Pro Care Homes
              </h2>
              <div className="w-16 h-1 bg-premium-gold mx-auto rounded-full" />
              <p className="text-text-secondary text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                Rather than an overloaded reading grid, we divide our complex support pathways into dedicated digital volumes. Explore our care quality standards below:
              </p>
            </div>

            {/* Premium Bento Summaries Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dashboardCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.id}
                    onClick={() => handleNavigate(card.id)}
                    className="group bg-[#FCFDFE] hover:bg-white border hover:border-gov-blue/15 rounded-3xl p-6.5 transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-gov-blue/5 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1 block"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className={`p-2.5 rounded-xl border ${card.accent}`}>
                          <Icon className="w-5 h-5" />
                        </span>
                        <span className="text-[8px] uppercase tracking-widest font-bold bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded font-mono">
                          {card.badge}
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="font-extrabold text-xs sm:text-sm text-gov-blue group-hover:text-[#5E8B7E] transition-colors leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-[11.5px] text-text-secondary leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                    <div className="pt-6 flex justify-end">
                      <span className="inline-flex items-center space-x-1 text-[11px] font-bold text-gov-blue group-hover:text-care-green hover:underline">
                        <span>Access Volume</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Emotional Assurance Callout Card */}
            <div className="mt-16 bg-gradient-to-br from-[#5E8B7E] to-gov-blue text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
              <div className="max-w-3xl space-y-4 relative z-10">
                <span className="text-xs font-bold text-premium-gold uppercase tracking-widest font-mono">
                  OUR GUARANTEE TO COMMISSIONERS & CCG LEADERS
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  Long-Term Placements Security & Absolute Exclusion Avoidance
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                  We understand that adults with extreme learning disabilities suffer severe developmental setbacks when placements collapse. PRO Care Homes is engineered for resilience. We do not issue short-notice move-out requests. Our staff profiles, sensory-safe building specs, and multidisciplinary training are permanently structured to manage difficult behavioral adjustments with dignity. <strong>This is a lifelong launchpad.</strong>
                </p>
                <div className="pt-2">
                  <button 
                    onClick={() => handleNavigate("referrals")}
                    className="px-5 py-3 bg-premium-gold hover:bg-white text-gov-blue font-bold text-xs rounded-xl transition shadow-lg transform active:scale-95"
                  >
                    Initiate Placement Compatibility Audit
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 1: Life at PRO Care Homes */}
        <section className="py-24 bg-[#FAFBFD] relative overflow-hidden border-t border-slate-100">
          {/* Subtle light background circles representing low-arousal sensory bubbles */}
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#7DB6A3]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gov-blue/5 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Storytelling & Key metrics */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-[#5E8B7E]/15 border border-[#5E8B7E]/25 px-3 py-1 rounded-full">
                  <Smile className="w-3.5 h-3.5 text-[#5E8B7E] animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-wider font-mono text-[#5E8B7E]">
                    Therapeutic Lifestyle Focus
                  </span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gov-blue tracking-tight leading-tight">
                  Life at PRO Care Homes: Cultivating Dignity & Belonging
                </h2>
                
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  Support is never just about physical safety; it is about building a fulfilling, self-directed future where every person feels a genuine sense of ownership over their lives. At <strong className="font-semibold text-gov-blue">6 Flags House</strong>, we foster a companionable, high-trust environment that promotes micro-achievements, emotional resilience, and organic local friendships.
                </p>

                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  Every resident co-produces their weekly visual schedule with their dedicated keyworker, aligning learning challenges with hobbies. Moving away from standard sterile institutional rotas, we honor natural circadian rhythms, dynamic sensory triggers, and private space configurations.
                </p>

                {/* Sub-features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
                  
                  {/* Card 1 */}
                  <div className="p-4 bg-white border border-slate-100 hover:border-[#5E8B7E]/30 transition duration-200 rounded-2xl shadow-xs group">
                    <div className="flex items-center space-x-3">
                      <span className="p-2.5 rounded-xl bg-sky-50 text-sky-700 group-hover:bg-[#5E8B7E]/10 group-hover:text-[#5E8B7E] transition duration-200">
                        <Compass className="w-4.5 h-4.5" />
                      </span>
                      <div>
                        <h4 className="font-extrabold text-xs text-gov-blue">Community Engagement</h4>
                        <p className="text-[10.5px] text-text-secondary mt-0.5">Active local high-street pacing & transit cards.</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="p-4 bg-white border border-slate-100 hover:border-[#5E8B7E]/30 transition duration-200 rounded-2xl shadow-xs group">
                    <div className="flex items-center space-x-3">
                      <span className="p-2.5 rounded-xl bg-rose-50 text-rose-750 group-hover:bg-[#5E8B7E]/10 group-hover:text-[#5E8B7E] transition duration-200">
                        <Heart className="w-4.5 h-4.5" />
                      </span>
                      <div>
                        <h4 className="font-extrabold text-xs text-gov-blue">Emotional Wellbeing</h4>
                        <p className="text-[10.5px] text-text-secondary mt-0.5">Quiet sensory diets mapped to cognitive comfort.</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="p-4 bg-white border border-slate-100 hover:border-[#5E8B7E]/30 transition duration-200 rounded-2xl shadow-xs group">
                    <div className="flex items-center space-x-3">
                      <span className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-[#5E8B7E]/10 group-hover:text-[#5E8B7E] transition duration-200">
                        <Sparkles className="w-4.5 h-4.5" />
                      </span>
                      <div>
                        <h4 className="font-extrabold text-xs text-gov-blue">Independence Building</h4>
                        <p className="text-[10.5px] text-text-secondary mt-0.5">32-point milestone cooking & budgeting academy.</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="p-4 bg-white border border-slate-100 hover:border-[#5E8B7E]/30 transition duration-200 rounded-2xl shadow-xs group">
                    <div className="flex items-center space-x-3">
                      <span className="p-2.5 rounded-xl bg-amber-50 text-amber-850 group-hover:bg-[#5E8B7E]/10 group-hover:text-[#5E8B7E] transition duration-200">
                        <Coffee className="w-4.5 h-4.5" />
                      </span>
                      <div>
                        <h4 className="font-extrabold text-xs text-gov-blue">Daily Living Support</h4>
                        <p className="text-[10.5px] text-text-secondary mt-0.5">Custom hygiene schedules honoring dignity.</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div className="p-4 bg-white border border-slate-100 hover:border-[#5E8B7E]/30 transition duration-200 rounded-2xl shadow-xs group">
                    <div className="flex items-center space-x-3">
                      <span className="p-2.5 rounded-xl bg-indigo-50 text-indigo-700 group-hover:bg-[#5E8B7E]/10 group-hover:text-[#5E8B7E] transition duration-200">
                        <Users className="w-4.5 h-4.5" />
                      </span>
                      <div>
                        <h4 className="font-extrabold text-xs text-gov-blue">Positive Relationships</h4>
                        <p className="text-[10.5px] text-text-secondary mt-0.5">Shared companionable dining & game evenings.</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 6 */}
                  <div className="p-4 bg-white border border-slate-100 hover:border-[#5E8B7E]/30 transition duration-200 rounded-2xl shadow-xs group">
                    <div className="flex items-center space-x-3">
                      <span className="p-2.5 rounded-xl bg-teal-50 text-teal-700 group-hover:bg-[#5E8B7E]/10 group-hover:text-[#5E8B7E] transition duration-200">
                        <ShieldCheck className="w-4.5 h-4.5" />
                      </span>
                      <div>
                        <h4 className="font-extrabold text-xs text-gov-blue">Safe Support Space</h4>
                        <p className="text-[10.5px] text-text-secondary mt-0.5">Concealed safeguarding engineering elements.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              
              {/* Right Column: Dynamic visual canvas */}
              <div className="lg:col-span-6 relative flex justify-center">
                
                {/* Decorative glow and border frames */}
                <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-tr from-sky-100 to-[#7DB6A3]/10 rounded-[40px] blur-3xl -z-10" />
                
                {/* Central Visual Frame Container */}
                <div className="w-full max-w-md bg-white border-2 border-slate-105 shadow-xl rounded-[36px] overflow-hidden p-6 space-y-6">
                  
                  {/* Top Bar describing environment */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold font-mono text-slate-500 uppercase tracking-wider">6 Flags Live Environment status</span>
                    </div>
                    <span className="text-[9px] font-bold bg-[#7DB6A3]/15 text-emerald-800 px-2 py-0.5 rounded-md font-mono">
                      Homely Grade
                    </span>
                  </div>

                  {/* Nested Layout Blocks (Virtual Floorplan & Activity Indicator) */}
                  <div className="grid grid-cols-2 gap-3">
                    
                    {/* Zone A: Therapeutic Lounge */}
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-2xl border border-slate-150/60 text-center space-y-2">
                      <Home className="w-5 h-5 mx-auto text-sky-600" />
                      <h5 className="font-extrabold text-[10.5px] text-gov-blue">Therapeutic Lounge</h5>
                      <p className="text-[9.5px] text-slate-450">Soft acoustics & circadian low-glare LEDs</p>
                    </div>

                    {/* Zone B: Sensory Oasis Cabin */}
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-2xl border border-slate-150/60 text-center space-y-2">
                      <Sparkles className="w-5 h-5 mx-auto text-amber-500" />
                      <h5 className="font-extrabold text-[10.5px] text-gov-blue">Sensory Escape</h5>
                      <p className="text-[9.5px] text-slate-450">Bubble columns & deep-pressure chairs</p>
                    </div>

                    {/* Zone C: Active Kitchen Hub */}
                    <div className="bg-gradient-to-br from-[#5E8B7E]/5 to-[#5E8B7E]/10 p-4 rounded-2xl border border-[#5E8B7E]/15 text-center col-span-2 space-y-2 relative overflow-hidden animate-pulse">
                      <div className="absolute top-2 right-2 w-3.5 h-3.5 rounded-full bg-[#5E8B7E]/20 flex items-center justify-center font-bold text-[8px] text-[#5E8B7E]">
                        ★
                      </div>
                      <Coffee className="w-5 h-5 mx-auto text-[#5E8B7E]" />
                      <h5 className="font-extrabold text-[11px] text-[#5E8B7E]">Teaching Cooking Zone</h5>
                      <p className="text-[10px] text-slate-600 max-w-xs mx-auto">
                        Modular induction cool-stoves where residents cook recipes with 1:1 supervision
                      </p>
                    </div>

                  </div>

                  {/* Active Outcomes Activity Box (Nourish tracker) */}
                  <div className="bg-slate-900 text-white rounded-2xl p-4.5 space-y-3 shadow-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Activity className="w-3.5 h-3.5 text-[#7DB6A3] animate-pulse" />
                        <span className="text-[10px] font-bold font-mono uppercase tracking-wider text-[#7DB6A3]">Nourish Live Audit</span>
                      </div>
                      <span className="text-[9px] text-[#7DB6A3] font-mono">16:47 BST</span>
                    </div>

                    <div className="space-y-2 text-[10.5px]">
                      <div className="flex justify-between text-slate-300">
                        <span>Resident JW Status:</span>
                        <span className="text-[#7DB6A3] font-mono font-bold">Progressing Fine</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-[#7DB6A3]" style={{ width: "92%" }} />
                      </div>
                      <p className="text-[9.5px] text-slate-400 italic">
                        &ldquo;92% task-independence score achieved: prepared breakfast basket and visual budget folder.&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Bottom reassurance tags */}
                  <div className="flex justify-center space-x-4 pt-1 text-[9.5px] font-bold text-slate-400 uppercase font-mono tracking-wider">
                    <span>• 24/7 NHSmail Line</span>
                    <span>• Zero Seclusion Goal</span>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: Trusted Governance & Quality Commitment */}
        <section className="py-24 bg-white relative border-t border-slate-100">
          <div className="absolute top-0 right-0 w-80 h-80 bg-slate-100/30 rounded-full blur-3xl -z-10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5E8B7E] font-mono block">
                COMPLIANCE & COMMISSIONER ASSURANCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gov-blue tracking-tight">
                Trusted Governance & Quality Commitment
              </h2>
              <div className="w-16 h-1 bg-[#5E8B7E] mx-auto rounded-full" />
              <p className="text-text-secondary text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                Operating with absolute care quality integrity, strict statutory transparency, and constant multidisciplinary team supervision to satisfy critical standards of Care Quality Commission (CQC) lines of inquiry.
              </p>
            </div>

            {/* Main Commitment centerpiece panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
              
              {/* Centerpiece Panel (NHS/Governance Commitment Dashboard Card) */}
              <div className="lg:col-span-5 bg-gradient-to-br from-gov-blue to-slate-950 text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-xl border-l-4 border-premium-gold shadow-gov-blue/10">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.04] rounded-full blur-3xl" />
                
                <div className="space-y-6 relative z-10">
                  <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-lg">
                    <Scale className="w-4 h-4 text-premium-gold" />
                    <span className="text-[9.5px] font-bold uppercase tracking-widest font-mono text-premium-gold">
                      Executive Board Standards
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    Quality Assurance Architecture
                  </h3>
                  
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Under the direct operational oversight of Salman Muhammad and Nominated Individual Boston Murray, PRO Care Homes complies with the Health and Social Care Act regulations. We practice proactive support oversight to maintain secure environments.
                  </p>

                  <div className="space-y-3.5 border-t border-white/10 pt-6 text-[11px] text-slate-300">
                    <div className="flex items-center space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#7DB6A3] flex-shrink-0" />
                      <span>Monthly independent Regulation 17 style internal audits</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#7DB6A3] flex-shrink-0" />
                      <span>Electronic medicine tracking ensuring zero medication errors</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#7DB6A3] flex-shrink-0" />
                      <span>Trauma-informed post-incident debriefing frameworks</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-slate-400 relative z-10">
                  <span>NHS TRUSTS REGISTERED</span>
                  <span>CQC REGULATION 17</span>
                </div>
              </div>

              {/* Sub Governance Cards (Surrounding features) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Governance Card 1: Safe & Structured */}
                <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl flex flex-col justify-between group hover:bg-white hover:border-[#5E8B7E]/25 transition duration-200">
                  <div className="space-y-3">
                    <div className="w-9 h-9 bg-sky-50 text-sky-700 rounded-xl flex items-center justify-center group-hover:bg-[#5E8B7E]/10 group-hover:text-[#5E8B7E] transition">
                      <Lock className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="font-extrabold text-xs text-gov-blue">Safe & Structured Care</h4>
                    <p className="text-[11px] text-text-secondary leading-relaxed">
                      Rigorous pre-admission triggers matching and skin-integrity logging preventing institutional hazards.
                    </p>
                  </div>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-slate-400 block pt-4">SOP-SG-401 Protocol</span>
                </div>

                {/* Governance Card 2: Continuous Improvement */}
                <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl flex flex-col justify-between group hover:bg-white hover:border-[#5E8B7E]/25 transition duration-200">
                  <div className="space-y-3">
                    <div className="w-9 h-9 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center group-hover:bg-[#5E8B7E]/10 group-hover:text-[#5E8B7E] transition">
                      <TrendingUp className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="font-extrabold text-xs text-gov-blue">Continuous Improvement</h4>
                    <p className="text-[11px] text-text-secondary leading-relaxed">
                      Systemic audits identifying environmental stress trends to iterate low-arousal accommodations quickly.
                    </p>
                  </div>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-slate-400 block pt-4">Nourish Analytics Logs</span>
                </div>

                {/* Governance Card 3: CQC-Oriented Standards */}
                <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl flex flex-col justify-between group hover:bg-white hover:border-[#5E8B7E]/25 transition duration-200">
                  <div className="space-y-3">
                    <div className="w-9 h-9 bg-amber-50 text-amber-800 rounded-xl flex items-center justify-center group-hover:bg-[#5E8B7E]/10 group-hover:text-[#5E8B7E] transition">
                      <ClipboardCheck className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="font-extrabold text-xs text-gov-blue">CQC-Oriented Standards</h4>
                    <p className="text-[11px] text-text-secondary leading-relaxed">
                      Sustaining high competencies in Safe, Effective, Caring, Responsive, and Well-Led disciplines.
                    </p>
                  </div>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-slate-400 block pt-4">100% Audit Readiness</span>
                </div>

                {/* Governance Card 4: Safeguarding Priority */}
                <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl flex flex-col justify-between group hover:bg-white hover:border-[#5E8B7E]/25 transition duration-200">
                  <div className="space-y-3">
                    <div className="w-9 h-9 bg-rose-50 text-rose-700 rounded-xl flex items-center justify-center group-hover:bg-[#5E8B7E]/10 group-hover:text-[#5E8B7E] transition">
                      <ShieldAlert className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="font-extrabold text-xs text-gov-blue">Safeguarding Commitment</h4>
                    <p className="text-[11px] text-text-secondary leading-relaxed">
                      Statutory whistleblowing immunities and speedy reporting to designated Local Authority Safeguarding Boards.
                    </p>
                  </div>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-slate-400 block pt-4">Zero-Tolerance Safeguards</span>
                </div>

              </div>
            </div>

            {/* Quick trust metrics row */}
            <div className="border-t border-slate-100 pt-10 flex flex-wrap justify-around items-center gap-6 text-center">
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#5E8B7E] block">100%</span>
                <span className="text-[9.5px] uppercase tracking-wider font-mono text-slate-400 block font-bold">DBS Safeguard Screening</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#5E8B7E] block">0%</span>
                <span className="text-[9.5px] uppercase tracking-wider font-mono text-slate-400 block font-bold">Restrictive Restraints</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#5E8B7E] block">48 hrs</span>
                <span className="text-[9.5px] uppercase tracking-wider font-mono text-slate-400 block font-bold">Pre-Admission Review Lock</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#5E8B7E] block">32</span>
                <span className="text-[9.5px] uppercase tracking-wider font-mono text-slate-400 block font-bold">Independence Milestones tracked</span>
              </div>
            </div>

          </div>
        </section>
      </div>
    );
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

      {/* 1. Universal Header */}
      <Header onNavigate={handleNavigate} activeSection={activeSection} />

      {/* 2. Major Routed Layout Section */}
      <main className="min-h-screen">
        {renderActivePage()}
      </main>

      {/* 3. Unified Digital Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* 4. Floating CQC Regulatory assistant advisor */}
      <AssistantChat />
      
    </div>
  );
}
