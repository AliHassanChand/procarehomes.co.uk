import { useState } from "react";
import { ShieldCheck, Eye, Compass, HeartHandshake, Award, FileText, CheckCircle2, ChevronRight, AlertTriangle } from "lucide-react";
import PageHero from "./PageHero.tsx";

interface GovernanceProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Governance({ onNavigate }: GovernanceProps) {
  const [selectedDomain, setSelectedDomain] = useState("safe");


  const domains = [
    {
      id: "safe",
      icon: ShieldCheck,
      title: "Safe",
      cqcStatement: "How we protect residents from abuse, safeguarding distress, and unnecessary environmental danger.",
      bullets: [
        "Rigorous proactive and reactive Positive Behaviour Support plans mapping micro-triggers.",
        "Discreet, non-restrictive Psychologically Informed Environment designs focusing on safety aesthetics.",
        "Zero-tolerance safeguarding policy backed by 100% staff training and real-time incident logging.",
        "Subtle safe technology with smart temperature regulators and integrated escape proximity alarms."
      ],
      compliance: "Fully compliant with CQC Regulation 12 (Safe care and treatment) and Regulation 13 (Safeguarding)."
    },
    {
      id: "effective",
      icon: Award,
      title: "Effective",
      cqcStatement: "How we ensure care achieves outstanding outcomes, skill development, and physical wellness.",
      bullets: [
        "Multi-disciplinary care quality oversight involving community mental health specialists and speech therapy.",
        "Active support model breaking down complex milestones into fun, achievable tasks.",
        "Detailed, custom sensory diets mapped out by registered occupational therapists.",
        "Nutritious, customized menu templates reviewed for dietetics, texture suitability, and choice."
      ],
      compliance: "Fully compliant with CQC Regulation 9 (Person-centred care) and Regulation 11 (Need for consent)."
    },
    {
      id: "caring",
      icon: HeartHandshake,
      title: "Caring",
      cqcStatement: "How we ensure residents are treated with profound warmth, dignity, and self-respect.",
      bullets: [
        "100% private en-suite bedroom configurations allowing total personal autonomy.",
        "Co-produced plans utilizing symbol-rich 'Easy Read' templates for true voice empowerment.",
        "Resilient, values-based recruitment ensuring staff exhibit long-term placement consistency.",
        "Advocacy links with independent local networks, ensuring resident voices remain heard and separate."
      ],
      compliance: "Fully compliant with CQC Regulation 10 (Dignity and respect) and values of human respect."
    },
    {
      id: "responsive",
      icon: Compass,
      title: "Responsive",
      cqcStatement: "How we customize services to match shifting profiles, crises, and life goals.",
      bullets: [
        "Live 'Nourish' digital dashboard allowing instant, proactive adjustment of care rosters.",
        "Robust positive risk plans allowing managed cooking, public transit training, and hobbies.",
        "Bespoke transition pathways with sequential staged visits to 6 Flags House.",
        "Structured complaints and feedback channels designed to empower family voices."
      ],
      compliance: "Fully compliant with CQC Regulation 16 (Receiving and acting on complaints) and personalized care plans."
    },
    {
      id: "wellled",
      icon: Eye,
      title: "Well-Led",
      cqcStatement: "How management delivers robust accountability, stable staff rosters, and compliance audits.",
      bullets: [
        "Direct战略 leads Salman Muhammad and Boston Murray conducting weekly on-site quality reviews.",
        "Transparent, computer-audited incident logs with automatic regulatory notification gates.",
        "Continuous improvement culture driven by parent surveys, staff self-audits, and training.",
        "Safe financial resource guarantees under operational direction of accountant Deeshan Walpitagamage."
      ],
      compliance: "Fully compliant with CQC Regulation 17 (Good governance) and transparent statutory reporting."
    }
  ];

  const currentDomain = domains.find(d => d.id === selectedDomain) || domains[0];
  const CurrentIcon = currentDomain.icon;

  return (
    <div id="governance-view" className="animate-fadeIn">
      <PageHero sectionId="governance" onNavigate={onNavigate} />
      
      <section id="governance" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 5 Key Questions CQC Selector Layout */}
          <div className="bg-slate-9 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left menu selector Column */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="text-xs uppercase font-bold tracking-widest font-mono text-slate-400 mb-6 block">
                The 5 Key Questions
              </h3>
              {domains.map((dom) => {
                const Icon = dom.icon;
                return (
                  <button
                    key={dom.id}
                    onClick={() => setSelectedDomain(dom.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all text-left ${
                      selectedDomain === dom.id
                        ? "bg-slate-900 text-white border-slate-900 shadow-md translate-x-1"
                        : "bg-white text-slate-700 border-slate-200 hover:border-sky-300 hover:bg-sky-50/20"
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <span className={`p-2 rounded-xl ${selectedDomain === dom.id ? "bg-white/15 text-white" : "bg-sky-50 text-sky-600"}`}>
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="font-bold text-xs sm:text-sm tracking-tight">{dom.title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${selectedDomain === dom.id ? "translate-x-1 text-emerald-400" : "text-slate-350"}`} />
                  </button>
                );
              })}
            </div>

            {/* Right explainer panel Column */}
            <div className="lg:col-span-8 bg-slate-50/70 p-6 sm:p-8 border border-slate-100 rounded-2xl flex flex-col justify-between">
              
              <div className="space-y-6">
                {/* Domain title and CQC target */}
                <div className="flex items-center space-x-3 pb-4 border-b border-slate-250/60">
                  <span className="p-3 bg-sky-100 text-sky-800 rounded-2xl">
                    <CurrentIcon className="w-6 h-6" />
                  </span>
                  <div>
                    <h4 className="text-xl font-bold text-slate-950">
                      Standard Quality: PRO-{currentDomain.title}
                    </h4>
                    <p className="text-xs uppercase font-mono font-bold text-sky-700 tracking-wide">
                      CQC Key Inspection Area
                    </p>
                  </div>
                </div>

                {/* Question */}
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono block">
                    Focus Focus Query
                  </span>
                  <p className="text-slate-800 text-sm font-semibold italic">
                    &ldquo;{currentDomain.cqcStatement}&rdquo;
                  </p>
                </div>

                {/* Bullets */}
                <div className="space-y-3">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono block">
                    Evidence of Operational Delivery
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentDomain.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="bg-white p-4 border border-slate-150 rounded-xl space-y-1 hover:shadow-xs transition">
                        <div className="flex items-center space-x-1.5 text-emerald-600">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                          <span className="text-[10px] font-mono uppercase tracking-wider font-bold">
                            Operational Fact
                          </span>
                        </div>
                        <p className="text-slate-650 text-xs leading-relaxed">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Compliance standard line */}
              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center space-x-3 text-xs bg-sky-50/50 p-3 rounded-lg border border-sky-100/60">
                <FileText className="w-4 h-4 text-sky-700" />
                <span className="font-semibold text-sky-900 leading-relaxed font-sans text-[11px]">
                  <strong>CQC Regulation Alignment:</strong> {currentDomain.compliance}
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* Multi-discipline Protocols Grid (Quality Assurance / Complaints / Incident Oversight) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Safeguarding Card */}
          <div className="bg-slate-50 border border-slate-150 p-6 sm:p-8 rounded-3xl space-y-4">
            <div className="flex items-center space-x-2 text-rose-700">
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
              <h4 className="font-bold text-slate-900 text-sm tracking-tight uppercase font-mono">
                Safeguarding & Risk
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              We implement a zero-tolerance structure regarding any form of abuse or placement neglect. Built directly alongside Local Safeguarding Adults Boards (SAB) protocols, our incident notification system immediately notifies placing authorities of any threshold events.
            </p>
            <div className="text-[10px] text-slate-450 font-mono italic">
              Audit cadence: Real-time via Nourish cloud and weekly by MDT.
            </div>
          </div>

          {/* Complaints Procedures Card */}
          <div className="bg-slate-50 border border-slate-150 p-6 sm:p-8 rounded-3xl space-y-4">
            <div className="flex items-center space-x-2 text-sky-700">
              <FileText className="w-5 h-5 flex-shrink-0" />
              <h4 className="font-bold text-slate-900 text-sm tracking-tight uppercase font-mono">
                Complaints & Feedback
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              We empower our residents and family members with transparent complaints processes. Every resident has access to an Illustrated Easy Read Complaint Template. All grievances are signed off personally by Salman Muhammad with full regulatory recourse disclosures.
            </p>
            <div className="text-[10px] text-slate-450 font-mono italic">
              Goal response: 48hr initial review, 10-day complete resolution.
            </div>
          </div>

          {/* Continuous Improvement Card */}
          <div className="bg-slate-50 border border-slate-150 p-6 sm:p-8 rounded-3xl space-y-4">
            <div className="flex items-center space-x-2 text-emerald-700">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <h4 className="font-bold text-slate-900 text-sm tracking-tight uppercase font-mono">
                Quality Assurance Reviews
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every quarter, PRO Care Homes recruits an independent external auditor (typically representing retired CQC inspectors) to conduct mock audits of our Nourish logs, staffing charts, medication records, and estate safety standards.
            </p>
            <div className="text-[10px] text-slate-450 font-mono italic">
              Our record: 0 regulatory failures of governance to date.
            </div>
          </div>

        </div>

      </div>
    </section>
  </div>
);
}
