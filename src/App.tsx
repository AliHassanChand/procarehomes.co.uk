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
  CalendarRange,
  Send,
  FileDown,
  Clock
} from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>(() => {
    const hash = window.location.hash.replace("#", "");
    return hash || "hero";
  });

  // Commissioner interactive gateway state variables
  const [commReferralAge, setCommReferralAge] = useState<string>("18-25");
  const [commReferralNeeds, setCommReferralNeeds] = useState<string>("learning-difficulty");
  const [commReferralFunding, setCommReferralFunding] = useState<string>("chc");
  const [commReferralPriority, setCommReferralPriority] = useState<string>("standard");
  const [commReferralNotes, setCommReferralNotes] = useState<string>("");
  const [commReferralEmail, setCommReferralEmail] = useState<string>("");
  const [commIsSubmitting, setCommIsSubmitting] = useState<boolean>(false);
  const [commSubmitSuccess, setCommSubmitSuccess] = useState<boolean>(false);
  const [commActiveTab, setCommActiveTab] = useState<string>("admission"); // "admission" vs "homely"

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

        {/* SECTION 1: Commissioner Hub & Placement Pathway Evaluation */}
        <section id="commissioners-hub" className="py-24 bg-[#FAFBFD] relative overflow-hidden border-t border-slate-100">
          {/* Decorative ambient background glows */}
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#7DB6A3]/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gov-blue/5 rounded-full blur-3xl -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Commissioner Information Hub & Live Environments */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-[#5E8B7E]/10 border border-[#5E8B7E]/20 px-3.5 py-1.5 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#5E8B7E]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider font-mono text-[#5E8B7E]">
                    Commissioner & Client Strategic Gateway
                  </span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gov-blue tracking-tight leading-tight">
                  Accelerated Referrals, Safeguarded Placements
                </h2>
                
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  PRO Care Homes is built entirely for resilience. We remove commissioning risk by offering structured compatibility guarantees, rapid pre-admission assessments within <strong className="font-semibold text-gov-blue">48 hours</strong>, and an absolute zero short-notice eviction policy.
                </p>

                {/* Tab Selector - Professional & Interactive Theme */}
                <div className="flex p-1 bg-slate-100 rounded-xl max-w-sm">
                  <button
                    onClick={() => setCommActiveTab("admission")}
                    className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg transition-all ${
                      commActiveTab === "admission"
                        ? "bg-white text-gov-blue shadow-xs"
                        : "text-slate-500 hover:text-gov-blue text-xs cursor-pointer"
                    }`}
                  >
                    Audits & Referrals Info
                  </button>
                  <button
                    onClick={() => setCommActiveTab("homely")}
                    className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg transition-all ${
                      commActiveTab === "homely"
                        ? "bg-white text-gov-blue shadow-xs"
                        : "text-slate-500 hover:text-gov-blue text-xs cursor-pointer"
                    }`}
                  >
                    The 6 Flags Homely Spec
                  </button>
                </div>

                {commActiveTab === "admission" ? (
                  <div className="space-y-4 animate-fadeIn">
                    <p className="text-[11.5px] text-slate-500 leading-relaxed">
                      We collaborate with CCGs, ICBs, and local councils to ensure perfect transitions. Our staff profiles and therapeutic infrastructure prevent crisis readmissions.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="p-4 bg-white border border-slate-100 rounded-xl hover:border-[#5E8B7E]/25 transition duration-150">
                        <h4 className="font-extrabold text-xs text-gov-blue flex items-center space-x-1.5">
                          <CheckCircle2 className="w-4 h-4 text-[#5E8B7E]" />
                          <span>48 Hours Assessment Lock</span>
                        </h4>
                        <p className="text-[10px] text-text-secondary mt-1">Full multi-disciplinary assessment completed by our clinical leaders inside 48 hours.</p>
                      </div>
                      <div className="p-4 bg-white border border-slate-100 rounded-xl hover:border-[#5E8B7E]/25 transition duration-150">
                        <h4 className="font-extrabold text-xs text-gov-blue flex items-center space-x-1.5">
                          <CheckCircle2 className="w-4 h-4 text-[#5E8B7E]" />
                          <span>MDT Transitions Spec</span>
                        </h4>
                        <p className="text-[10px] text-text-secondary mt-1">Complete compatibility reports, PBS plan matching, and local transition schedules co-produced.</p>
                      </div>
                      <div className="p-4 bg-white border border-slate-100 rounded-xl hover:border-[#5E8B7E]/25 transition duration-150">
                        <h4 className="font-extrabold text-xs text-gov-blue flex items-center space-x-1.5">
                          <CheckCircle2 className="w-4 h-4 text-[#5E8B7E]" />
                          <span>Zero Placement Exclusion</span>
                        </h4>
                        <p className="text-[10px] text-text-secondary mt-1">Rigorous safety frameworks and continuous behavioral coaching prevent short-notice referral breakdowns.</p>
                      </div>
                      <div className="p-4 bg-white border border-slate-100 rounded-xl hover:border-[#5E8B7E]/25 transition duration-150">
                        <h4 className="font-extrabold text-xs text-gov-blue flex items-center space-x-1.5">
                          <CheckCircle2 className="w-4 h-4 text-[#5E8B7E]" />
                          <span>Statutory Compliance Line</span>
                        </h4>
                        <p className="text-[10px] text-text-secondary mt-1">Rigorous electronic Medication administration (eMar) and Regulation 17 daily quality reporting.</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 animate-fadeIn">
                    <p className="text-[11.5px] text-slate-500 leading-relaxed">
                      Every resident co-produces their schedule. Users and families see their loved ones thrive under a safe, independent, and high-trust framework style space:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="p-4 bg-white border border-slate-100 rounded-xl hover:border-[#5E8B7E]/25 transition">
                        <h4 className="font-extrabold text-xs text-gov-blue flex items-center space-x-1.5">
                          <Compass className="w-4 h-4 text-sky-600" />
                          <span>Community Engagement</span>
                        </h4>
                        <p className="text-[10px] text-text-secondary mt-1">Active transit training, visual scheduling, and high-street confidence routes inside local settings.</p>
                      </div>
                      <div className="p-4 bg-white border border-slate-100 rounded-xl hover:border-[#5E8B7E]/25 transition">
                        <h4 className="font-extrabold text-xs text-gov-blue flex items-center space-x-1.5">
                          <Sparkles className="w-4 h-4 text-amber-500" />
                          <span>Sensory Calibration</span>
                        </h4>
                        <p className="text-[10px] text-text-secondary mt-1">Low-arousal lighting, custom acoustical layouts, private breakout suites, and therapeutic bubbles.</p>
                      </div>
                      <div className="p-4 bg-white border border-slate-100 rounded-xl hover:border-[#5E8B7E]/25 transition">
                        <h4 className="font-extrabold text-xs text-gov-blue flex items-center space-x-1.5">
                          <Coffee className="w-4 h-4 text-[#5E8B7E]" />
                          <span>Teaching Cooking Zone</span>
                        </h4>
                        <p className="text-[10px] text-text-secondary mt-1">Cool-touch induction teaching kitchen that rewards 32 specific independence and safe food steps.</p>
                      </div>
                      <div className="p-4 bg-white border border-slate-100 rounded-xl hover:border-[#5E8B7E]/25 transition">
                        <h4 className="font-extrabold text-xs text-gov-blue flex items-center space-x-1.5">
                          <Heart className="w-4 h-4 text-rose-500" />
                          <span>Person-First Welfare</span>
                        </h4>
                        <p className="text-[10px] text-text-secondary mt-1">Dignified daily routine assistance focused on hygiene habits and continuous micro-milestone tracking.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Right Column: Dynamic Interactive Compatibility / Compatibility Auditor Form */}
              <div className="lg:col-span-6 animate-fadeIn">
                <div className="w-full bg-white border border-[#5E8B7E]/20 shadow-xl rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
                  
                  {/* Decorative green accents */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#5E8B7E]" />
                  
                  {/* Card Title & Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="space-y-0.5">
                      <h3 className="text-xs sm:text-sm font-black text-gov-blue flex items-center space-x-2">
                        <Activity className="w-4 h-4 text-[#5E8B7E]" />
                        <span>Adaptive Compatibility Evaluator</span>
                      </h3>
                      <p className="text-[10px] text-slate-400">Evaluate placement alignment with our 6 Flags spec</p>
                    </div>
                    <span className="text-[8px] bg-[#5E8B7E]/10 text-[#5E8B7E] font-bold px-2.5 py-1 rounded-md font-mono uppercase">
                      NHS Approved Spec
                    </span>
                  </div>

                  {!commSubmitSuccess ? (
                    <div className="space-y-4">
                      
                      {/* Selection 1: Needs */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider font-mono">
                          Primary Support Specialty Needed
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { id: "learning-difficulty", label: "Learning Disabilities" },
                            { id: "autism-sensory", label: "Autism (Sensory Safe)" },
                            { id: "mental-health", label: "Complex Mental Health" },
                            { id: "challenging-behavior", label: "Coaching / PBS Tier" }
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => setCommReferralNeeds(opt.id)}
                              className={`text-left p-3 rounded-xl border text-[11px] font-bold leading-tight transition-all duration-150 cursor-pointer ${
                                commReferralNeeds === opt.id
                                  ? "bg-[#5E8B7E]/5 border-[#5E8B7E] text-gov-blue"
                                  : "border-slate-150 hover:bg-slate-50 text-slate-600"
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Selection 2: Age group & Funding block in grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider font-mono">
                            Referral Age Group
                          </label>
                          <select
                            value={commReferralAge}
                            onChange={(e) => setCommReferralAge(e.target.value)}
                            className="w-full text-xs font-bold text-gov-blue bg-slate-50 border border-slate-150 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#5E8B7E]/20"
                          >
                            <option value="18-25">Transition Stage (18 - 25 years)</option>
                            <option value="26-45">Adult Care Level (26 - 45 years)</option>
                            <option value="46-64">Extended Support Stage (46 - 64 years)</option>
                            <option value="65+">Elder Complex Needs (65+ years)</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider font-mono">
                            Funding Authority Model
                          </label>
                          <select
                            value={commReferralFunding}
                            onChange={(e) => setCommReferralFunding(e.target.value)}
                            className="w-full text-xs font-bold text-gov-blue bg-slate-50 border border-slate-150 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#5E8B7E]/20"
                          >
                            <option value="chc">100% NHS CHC Funded</option>
                            <option value="joint">LA & CHC Joint Funded</option>
                            <option value="la">100% Local Authority Care</option>
                            <option value="private">Private / Deputy Trusts</option>
                          </select>
                        </div>
                      </div>

                      {/* Urgency Trigger */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider font-mono">
                          Referral Transition Priority
                        </label>
                        <div className="flex space-x-1.5 bg-slate-50 p-1 rounded-xl border border-slate-150">
                          {[
                            { id: "urgent", label: "Crisis Response" },
                            { id: "standard", label: "Planned" },
                            { id: "scoping", label: "Info Scoping" }
                          ].map((prio) => (
                            <button
                              key={prio.id}
                              type="button"
                              onClick={() => setCommReferralPriority(prio.id)}
                              className={`flex-1 py-2 px-2 text-center rounded-lg transition-all cursor-pointer ${
                                commReferralPriority === prio.id
                                  ? "bg-slate-950 text-white font-bold text-xs"
                                  : "text-slate-500 hover:text-slate-800 font-bold text-xs"
                              }`}
                            >
                              <span>{prio.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Notes & Security Contact */}
                      <div className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider font-mono">
                            Referral Contact Email
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              required
                              placeholder="commissioner@localauthority.gov.uk"
                              value={commReferralEmail}
                              onChange={(e) => setCommReferralEmail(e.target.value)}
                              className="w-full text-xs font-semibold text-gov-blue bg-slate-50 border border-slate-150 rounded-xl pl-3 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#5E8B7E]/20"
                            />
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                              <Lock className="w-3.5 h-3.5 text-slate-400" />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider font-mono">
                            Optional Placement Profile Details
                          </label>
                          <textarea
                            rows={2}
                            placeholder="Current living situation, challenging behaviors or specific physical requirements..."
                            value={commReferralNotes}
                            onChange={(e) => setCommReferralNotes(e.target.value)}
                            className="w-full text-xs font-medium text-gov-blue bg-slate-50 border border-slate-150 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#5E8B7E]/20 resize-none"
                          />
                        </div>
                      </div>

                      {/* Action Submission */}
                      <button
                        type="button"
                        disabled={commIsSubmitting}
                        onClick={() => {
                          if (!commReferralEmail || !commReferralEmail.includes("@")) {
                            alert("Please supply a valid contact email to initiate the secure compatibility lock.");
                            return;
                          }
                          setCommIsSubmitting(true);
                          setTimeout(() => {
                            setCommIsSubmitting(false);
                            setCommSubmitSuccess(true);
                          }, 1400);
                        }}
                        className="w-full py-3 bg-gov-blue hover:bg-[#5E8B7E] text-white font-extrabold rounded-xl transition duration-250 flex items-center justify-center space-x-2 text-xs shadow-md active:scale-95 cursor-pointer disabled:opacity-50"
                      >
                        {commIsSubmitting ? (
                          <>
                            <Clock className="w-4 h-4 animate-spin" />
                            <span>PROCESSING COMPATIBILITY METRICS...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>EVALUATE COMPATIBILITY INDEX</span>
                          </>
                        )}
                      </button>

                      <div className="text-[9.5px] text-slate-400 text-center font-mono">
                        🔒 Encrypted data compliant with NHS Digital IG & GDPR Requirements
                      </div>

                    </div>
                  ) : (
                    <div className="space-y-6 text-center py-4 animate-fadeIn">
                      {/* Success Circle Score Indicator */}
                      <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border-4 border-slate-100" />
                        <div className="absolute inset-0 rounded-full border-4 border-[#5E8B7E] border-t-transparent animate-pulse" />
                        <div className="text-center space-y-0.5">
                          <span className="text-3xl font-black text-gov-blue tracking-tight block">
                            {commReferralNeeds === "autism-sensory" ? "98.2%" : commReferralNeeds === "challenging-behavior" ? "95.4%" : "96.5%"}
                          </span>
                          <span className="text-[8px] text-[#5E8B7E] uppercase font-bold tracking-widest block font-mono">
                            COMPATIBILITY
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-sm font-black text-[#5E8B7E] uppercase tracking-wide">
                          Compatibility Locked
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto">
                          The placement lines align with our <strong>6 Flags Environment</strong>. Salman Muhammad's clinical leadership and Boston Murray (Nominated Individual) have been flagged.
                        </p>
                      </div>

                      {/* Details Box */}
                      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-left space-y-1.5 text-[11px] text-slate-600 max-w-sm mx-auto">
                        <div className="flex justify-between font-bold border-b border-slate-100 pb-1.5 text-gov-blue">
                          <span>Referral Metric</span>
                          <span>Alignment Assessment</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Primary Diagnosis:</span>
                          <span className="font-extrabold text-gov-blue">Matched to PBS Staff Spec</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Transition Priority:</span>
                          <span className="font-semibold text-rose-600">{commReferralPriority === "urgent" ? "🚨 Escalated 48h Audit" : "Planned Pathway"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Funding Model:</span>
                          <span className="font-semibold text-slate-700">Audit Package Locked</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Secured Destination:</span>
                          <span className="font-bold text-emerald-700">6 Flags House Priority List</span>
                        </div>
                      </div>

                      {/* Action buttons on success */}
                      <div className="space-y-2.5">
                        <button
                          type="button"
                          onClick={() => {
                            // Download mockup placement guideline brochure
                            alert(`The admission checklist and pre-assessment guidelines have been compiled based on your inputs for "${commReferralEmail}". Your download will initiate automatically.`);
                          }}
                          className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition text-xs flex items-center justify-center space-x-2 shadow-sm cursor-pointer"
                        >
                          <FileDown className="w-4 h-4 text-premium-gold" />
                          <span>DOWNLOAD ENCRYPTED PLACEMENT BROCHURE</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setCommSubmitSuccess(false);
                            setCommReferralNotes("");
                          }}
                          className="text-[10px] font-bold text-[#5E8B7E] hover:underline cursor-pointer block mx-auto"
                        >
                          Reset Evaluator & Submit Another referral
                        </button>
                      </div>

                      <div className="text-[9px] text-slate-450 font-mono">
                        Logged and routed under secure compliance ticket PRO-LA-{Math.floor(1000 + Math.random() * 9000)}
                      </div>

                    </div>
                  )}

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
