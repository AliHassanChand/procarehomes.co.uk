import { motion } from "motion/react";
import { UserCheck, ShieldCheck, Award, HeartPulse, Sparkles, BookOpen } from "lucide-react";

export default function Leadership() {
  const leaders = [
    {
      name: "Salman Muhammad",
      role: "Managing Director & Strategic Lead",
      qualifications: ["BA (Hons) Business Management", "Level 5 Diploma in Leadership for Health and Social Care"],
      xp: "Over 12 years coordinating complex healthcare environments, strategic growth frameworks, and co-producing localized care models with UK Local Authorities and NHS commissioners.",
      philosophy: "To bridge the gap between rigorous regulatory governance and human compassion. True leadership means building systems that protect rights and promote authentic, joyful moments.",
      icon: ShieldCheck,
      color: "border-sky-200 bg-sky-50 text-sky-700"
    },
    {
      name: "Deeshan Walpitagamage",
      role: "Financial Director & Operational Excellence",
      qualifications: ["FCCA Chartered Accountant", "Expert in Healthcare Resource Optimisation"],
      xp: "Deep expertise in social care economics, resource sustainability, maintaining exceptional staffing ratios, and directing asset development for premium residential builds.",
      philosophy: "Fiscal governance is the bedrock of safety. By securing robust, well-allocated funding and high on-site staffing structures, we guarantee our homes remain safe, tranquil, and beautiful.",
      icon: Award,
      color: "border-emerald-200 bg-emerald-50 text-emerald-700"
    },
    {
      name: "Boston Murray",
      role: "Registered Care Manager & Clinician Lead",
      qualifications: ["Registered Nurse (RN - LD / MH)", "MSc Positive Behaviour Support", "CQC Certified Nominated Individual"],
      xp: "A clinical leader with 15+ years managing crisis escalation, conducting PBS Functional Behavioral Audits, and implementing computerized clinical care models (Nourish/MDS).",
      philosophy: "We must speak and understand the behavior of distress with deep clinical empathy. Restrictive practices are a failure of imagination. Our clinical focus is positive risk taking and emotional safety.",
      icon: HeartPulse,
      color: "border-teal-200 bg-teal-50 text-teal-700"
    }
  ];

  return (
    <section id="leadership" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono block">
            Executive Leadership & Governance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Our Executive Team
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full" />
          <p className="text-slate-600 text-sm">
            PRO Care Homes is directed by an exceptional team carrying decades of combined experience across clinical nursing, CQC inspections, social care finance, and local government commissioning.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => {
            const Icon = leader.icon;
            return (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-150 flex flex-col justify-between hover:shadow-xl hover:shadow-slate-200/40 hover:border-sky-100 transition-all duration-300 relative group"
              >
                {/* Decorative border accent */}
                <div className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-sky-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-all" />

                <div className="space-y-6">
                  {/* Avatar Frame Representation & Title Block */}
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${leader.color} shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-950 font-sans">{leader.name}</h3>
                      <p className="text-xs font-semibold text-sky-700 leading-snug">{leader.role}</p>
                    </div>
                  </div>

                  {/* Qualifications */}
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono block">
                      Credentials & Registrations
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {leader.qualifications.map((q, idx) => (
                        <span key={idx} className="bg-slate-100 hover:bg-sky-50 text-[10px] text-slate-700 px-2 py-0.5 rounded-md font-medium border border-slate-200/50">
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Experience Summary */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono block">
                      Professional Background
                    </span>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {leader.xp}
                    </p>
                  </div>
                </div>

                {/* Personal care philosophy panel */}
                <div className="mt-8 pt-4 border-t border-slate-100 space-y-1.5 bg-sky-50/20 p-4 rounded-2xl border border-sky-100/50">
                  <div className="flex items-center space-x-1.5 text-sky-800">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider">
                      Care Philosophy Statement
                    </span>
                  </div>
                  <p className="text-slate-700 text-xs leading-relaxed italic">
                    &ldquo;{leader.philosophy}&rdquo;
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Accountability Stamp */}
        <div className="mt-16 bg-white border border-sky-100 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <span className="p-3.5 bg-emerald-50 text-emerald-600 rounded-2xl">
              <UserCheck className="w-8 h-8" />
            </span>
            <div>
              <h4 className="font-bold text-slate-950 text-sm">Direct Clinical Oversight Guarantee</h4>
              <p className="text-xs text-slate-500 max-w-xl">
                Unlike mass-market financial providers, our strategic managers inspect operations on-site weekly. We maintain direct clinical accountability for CQC audits, MDT meetings, and safeguarding oversight.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition"
          >
            Request Management Call
          </button>
        </div>

      </div>
    </section>
  );
}
