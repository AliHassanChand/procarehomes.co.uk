import { Tablet, Activity, Server, Database, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function DigitalCare() {
  const steps = [
    {
      title: "Real-Time Digital Recording",
      desc: "Every support worker carries a secure, encrypted mobile tablet. Instead of bulky folders, fluid actions are logged immediately during shifts — from nutritional logs to sleep patterns.",
      icon: Tablet
    },
    {
      title: "PBS Analytics & Trend Logging",
      desc: "Nourish lets us tag incident metrics or early-warning distress markers. Boston Murray and our clinicians analyze this data to rewrite sensory strategies or optimize staffing.",
      icon: Activity
    },
    {
      title: "Absolute HIPAA & GDPR Security",
      desc: "Our server systems employ end-to-end NHS-grade AES protection, isolating service user diagnostic histories only to verified circles of care, family portals, and CQC inspectors.",
      icon: Server
    },
    {
      title: "Auditable Quality Assurance Tracking",
      desc: "Instead of scrambling during a surprise CQC visit, our digital history generates perfect compliance timelines, proving outcomes-focused progression with one click.",
      icon: Database
    }
  ];

  return (
    <section id="digital" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-550/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 font-mono block">
            Integrated Cloud Care Planning
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Our Digital Care & Nourish System
          </h2>
          <p className="text-slate-350 text-xs sm:text-sm leading-relaxed max-w-xl">
            PRO Care Homes operates 100% paperless clinical record management. Utilizing the industry-leading <strong>Nourish Care</strong> platform, we record, audit, and analyze our care delivery in real time.
          </p>
        </div>

        {/* Big Dashboard Showcase Graphic Widget */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-10 mb-16 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Mock Dashboard UI Columns Left */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono block">
              Active Server Metrics: 6 Flags House
            </span>
            <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 space-y-4 text-xs">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                  <span className="font-bold">Nourish System Live</span>
                </div>
                <span className="font-mono text-slate-400 text-[10px]">VER: 4.81.9</span>
              </div>

              {/* Data metric meters */}
              <div className="space-y-3 font-sans">
                <div className="space-y-1">
                  <div className="flex justify-between text-slate-450 text-[10px]">
                    <span>Outcome Records Logged Today</span>
                    <span className="text-white font-bold">142 Logs</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-500 rounded-full" style={{ width: "95%" }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-slate-450 text-[10px]">
                    <span>Schedules & Medicine Verification</span>
                    <span className="text-emerald-400 font-bold">100% Perfect Audit</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: "100%" }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-slate-450 text-[10px]">
                    <span>Sensory Routine Compliance Logs</span>
                    <span className="text-white font-bold">98.4% On-time</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: "98.4%" }} />
                  </div>
                </div>
              </div>

              {/* Audit footnote tag */}
              <div className="flex items-start space-x-2 bg-slate-900 p-2.5 rounded-lg text-[10px] text-slate-400 italic">
                <ShieldAlert className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Nourish locks timestamps cryptographically to avoid post-incident clinical modification, ensuring 100% auditable protection for residents and families.</span>
              </div>
            </div>
          </div>

          {/* Value Explanations Columns Right */}
          <div className="lg:col-span-7 space-y-6">
            <h4 className="text-xl font-bold font-sans">
              Why Commissioners & CQC Prefer Our Digital Flow:
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-sm text-white">Live MDT Collaborative Action</h5>
                  <p className="text-slate-350 text-xs leading-relaxed mt-1">
                    Instead of Waiting months to read paper logs, social workers and psychiatrists can be granted encrypted access to check real-time behavioral progress, facilitating quick, clinical medication audits.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-sm text-white">Family Transparency Portal</h5>
                  <p className="text-slate-350 text-xs leading-relaxed mt-1">
                    With consent, parents and siblings can check monthly journals, positive activities calendars, and uploaded milestone photos securely, keeping families fully integrated.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/60 space-y-4">
                <div className="w-10 h-10 bg-sky-500/10 text-sky-400 border border-sky-400/20 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-white">{step.title}</h4>
                <p className="text-slate-350 text-xs leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
