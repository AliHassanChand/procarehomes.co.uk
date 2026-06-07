import { motion } from "motion/react";
import { Smile, HeartPulse, Sparkles, Compass, Shield, Group } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Compassion",
      desc: "Delivering clinical support embedded in profound warmth, understanding, and personal warmth.",
      icon: Smile,
      color: "bg-teal-50 text-teal-600 border-teal-100"
    },
    {
      title: "Inclusion",
      desc: "Ensuring all individuals are active citizens contributing to, and valued by, their local community.",
      icon: Group,
      color: "bg-sky-50 text-sky-600 border-sky-100"
    },
    {
      title: "Dignity",
      desc: "Respecting every resident's privacy, personal preferences, biological identity, and autonomous choice.",
      icon: Shield,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    {
      title: "Independence",
      desc: "Cultivating daily practical skills that help individuals reach their self-actualised potential.",
      icon: Compass,
      color: "bg-amber-50 text-amber-700 border-amber-100"
    },
    {
      title: "Emotional Wellbeing",
      desc: "Providing psychologically safe habitats that mitigate trauma and stimulate stable cognitive growth.",
      icon: HeartPulse,
      color: "bg-rose-50 text-rose-600 border-rose-100"
    },
    {
      title: "Community Participation",
      desc: "Supporting active volunteering, recreational outings, sports clubs, arts, and real employment avenues.",
      icon: Sparkles,
      color: "bg-indigo-50 text-indigo-600 border-indigo-100"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 font-mono block">
            Who We Are & What We Believe
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Our Vision, Mission & Core Values
          </h2>
          <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            PRO Care Homes Ltd (PRO-CH) was established with a singular focus: to de-institutionalise resident support so that our individuals experience a warm home environment while receiving healthcare delivered under stringent quality standards.
          </p>
        </div>

        {/* Vision & Mission Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 animate-fadeIn">
          {/* Vision card */}
          <div className="bg-sky-50/50 rounded-2xl p-8 border border-sky-100 space-y-4">
            <h3 className="text-xl font-bold text-sky-900 font-sans">
              Our Vision
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              We envision a future where UK residential care is synonymous with empowerment, physical and psychological safety, and the development of personal self-sufficiency. By integrating clinical rigor with a genuine domestic feel, we strive to be the gold standard specialist provider for individuals with learning disabilities, autism spectrum conditions, and complex mental health needs.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-bold text-sky-800 uppercase tracking-wider font-mono">
                Long-Term Outcome Focused
              </span>
            </div>
          </div>

          {/* Mission card */}
          <div className="bg-emerald-50/40 rounded-2xl p-8 border border-emerald-100/60 space-y-4">
            <h3 className="text-xl font-bold text-emerald-950 font-sans">
              Our Mission
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Our mission is to establish bespoke residential options that promote autonomous choice, active community citizenship, and safe independence. Through positive behaviour support (PBS) and trauma-informed philosophies, we ensure our residents are not merely housed, but actively cheered on as they develop functional life milestones and maintain emotional stability.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider font-mono">
                Safe & Stabilised Environments
              </span>
            </div>
          </div>
        </div>

        {/* Care Philosophy highlight panel */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
          
          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest font-mono">
              Care Philosophy
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              A Relationship-Based, Long-Term Stability Approach
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We understand that the individuals we support have encountered multiple transitions, breaks in placements, and institutional disconnects. That is why PRO Care Homes is built on <strong>Relationship-Based Care</strong> and absolute <strong>placement longevity</strong>. Our specialist team is recruited for values and resilience, ensuring that we walk alongside our service users during difficult times instead of resorting to sudden hand-backs or exclusions. At PRO-CH, this is a permanent home, a safe launching pad, and a community of trust.
            </p>
          </div>
        </div>

        {/* Bento Grid Values */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight text-center mb-8">
            The Pillars of Our Operational Delivery
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, index) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="bg-slate-50 hover:bg-white border hover:border-sky-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg shadow-xs hover:shadow-sky-100/40"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${v.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-950 mb-2">{v.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
