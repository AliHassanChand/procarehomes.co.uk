import { motion } from "motion/react";
import { ShieldCheck, HeartPulse, UserCheck, ChevronRight, Activity } from "lucide-react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 sm:pt-32 pb-12 flex items-center bg-gradient-to-br from-white via-warm-bg to-care-green/5 overflow-hidden"
    >
      {/* Absolute Decorative Blobs for premium ambiance */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gov-blue/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-care-green/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text and Primary messaging column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gov-blue/[0.04] px-3.5 py-1.5 rounded-full border border-gov-blue/10"
            >
              <ShieldCheck className="w-4.5 h-4.5 text-gov-blue animate-pulse" />
              <span className="text-xs font-semibold text-gov-blue tracking-wide font-sans">
                Registered UK Healthcare Provider • CQC Registered Operations
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6.5xl font-extrabold text-gov-blue tracking-tight leading-[1.08] font-sans">
                Creating <span className="text-calm-blue">homes</span>, building <span className="text-calm-blue">independence</span> and supporting <span className="text-care-green border-b-2 border-premium-gold/40 pb-0.5">meaningful lives.</span>
              </h1>
              <p className="text-base sm:text-lg text-text-secondary max-w-xl font-normal leading-relaxed">
                PRO Care Homes Ltd (PRO-CH) delivers premium, fully compliant specialist residential support for adults aged 18–65 with learning disabilities, autism spectrum conditions, and associated mental health needs. 
              </p>
            </motion.div>

            {/* CQC Pillar Badges */}
            <motion.div
              id="cqc-badges-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-5 gap-2 sm:gap-3 max-w-xl"
            >
              {[
                { 
                  name: "Safe", 
                  bg: "bg-[#FFF5F5]/60 hover:bg-[#FFF5F5]", 
                  text: "text-[#B33A3A]", 
                  border: "border-[#FAD2D2]" 
                },
                { 
                  name: "Effective", 
                  bg: "bg-[#F0F5FA]/60 hover:bg-[#F0F5FA]", 
                  text: "text-[#1E4E7C]", 
                  border: "border-[#D0E1F0]" 
                },
                { 
                  name: "Caring", 
                  bg: "bg-[#EAF5F2]/60 hover:bg-[#EAF5F2]", 
                  text: "text-[#286354]", 
                  border: "border-[#C7E4DC]" 
                },
                { 
                  name: "Responsive", 
                  bg: "bg-[#FFF9EE]/60 hover:bg-[#FFF9EE]", 
                  text: "text-[#A26D19]", 
                  border: "border-[#F6E3C4]" 
                },
                { 
                  name: "Well-Led", 
                  bg: "bg-[#FAF6EE]/60 hover:bg-[#FAF6EE]", 
                  text: "text-[#886D43]", 
                  border: "border-[#EDE3CD]" 
                }
              ].map((pill, idx) => (
                <div 
                  key={idx} 
                  id={`cqc-badge-${pill.name.toLowerCase()}`}
                  className={`py-3.5 px-1 text-center border rounded-xl font-extrabold text-[11px] sm:text-xs tracking-tight transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md cursor-default backdrop-blur-xs ${pill.bg} ${pill.border} ${pill.text}`}
                >
                  {pill.name}
                </div>
              ))}
            </motion.div>

            {/* CTA panel */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              <button
                id="hero-cta-referral"
                onClick={() => onNavigate("contact")}
                className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-gov-blue hover:bg-calm-blue text-white rounded-xl text-sm font-bold shadow-md shadow-gov-blue/10 transition-all duration-200 transform active:scale-98"
              >
                <span>Make a Referral</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                id="hero-cta-support"
                onClick={() => onNavigate("contact")}
                className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-white border border-slate-200 hover:border-gov-blue/30 hover:bg-gov-blue/[0.02] text-text-primary rounded-xl text-sm font-bold transition-all duration-200"
              >
                <HeartPulse className="w-4.5 h-4.5 text-care-green" />
                <span>Request Support</span>
              </button>

              <button
                id="hero-cta-team"
                onClick={() => onNavigate("careers")}
                className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-care-green hover:bg-care-green/90 text-white rounded-xl text-sm font-bold shadow-md shadow-care-green/10 transition-all duration-200"
              >
                <UserCheck className="w-4.5 h-4.5" />
                <span>Join Our Team</span>
              </button>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="pt-6 border-t border-slate-100 flex items-center space-x-6 text-xs text-text-secondary font-mono"
            >
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 bg-care-green rounded-full animate-ping" />
                <span>ACTIVE CQC FRAMEWORK</span>
              </div>
              <div>•</div>
              <div>PBS CERTIFIED STAFF</div>
              <div>•</div>
              <div>1:1 TO 2:1 STAFFING CAPABILITIES</div>
            </motion.div>
          </div>

          {/* Interactive Healthcare Visual Widget Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-gov-blue/5 shadow-2xl shadow-gov-blue/5 text-text-primary space-y-6"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center space-x-2">
                  <span className="p-2 bg-care-green/10 text-care-green rounded-lg">
                    <Activity className="w-5 h-5 animate-pulse" />
                  </span>
                  <div>
                    <h3 className="font-bold text-gov-blue text-sm">6 Flags House</h3>
                    <p className="text-[10px] uppercase font-mono text-text-secondary">Governance Snapshot</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 bg-care-green text-white rounded-full text-xs font-bold">
                  98% Compliance Goal
                </span>
              </div>

              {/* Home Philosophy Badge */}
              <div className="bg-gov-blue/[0.03] p-4 rounded-2xl border border-gov-blue/5 space-y-1">
                <span className="text-[10px] font-bold text-calm-blue uppercase tracking-widest font-mono">
                  PRO Care Homes Mantra
                </span>
                <p className="text-sm font-semibold text-text-primary italic">
                  &ldquo;Warm like a home, structured like a professional healthcare organisation.&rdquo;
                </p>
              </div>

              {/* Diagnostic care logs count visualizer */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-slate-100 hover:border-gov-blue/10 transition rounded-2xl space-y-1">
                  <span className="text-xl font-bold text-gov-blue block font-mono">99.8%</span>
                  <span className="text-[10px] text-text-secondary uppercase tracking-wide block">Nourish Logs Logged on Time</span>
                </div>
                <div className="p-4 border border-slate-100 hover:border-gov-blue/10 transition rounded-2xl space-y-1">
                  <span className="text-xl font-bold text-care-green block font-mono">100%</span>
                  <span className="text-[10px] text-text-secondary uppercase tracking-wide block">Specialist Care Pathways</span>
                </div>
              </div>

              {/* Positive Risk and PBS indicator list */}
              <div className="space-y-2 text-xs">
                <span className="font-semibold text-text-primary block">Active Support Methodologies:</span>
                <div className="flex flex-wrap gap-1.5">
                  {["Positive Behaviour Support", "Trauma-Informed Care", "Psychologically Informed Environments", "Autism-Informed Systems"].map((item, id) => (
                    <span key={id} className="px-2.5 py-1 bg-warm-bg text-text-secondary rounded-md font-sans">
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Request consultation call */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigate("contact")}
                  className="w-full py-3 bg-gov-blue hover:bg-calm-blue text-white rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
                >
                  Request a Pre-Admission Consultation
                </button>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
