import React, { useState } from "react";
import { motion } from "motion/react";
import { Home, Accessibility, ShieldCheck, Heart, UserPlus, Milestone, Sparkles, BookOpen, Fingerprint } from "lucide-react";

export default function Services({ onNavigate }: { onNavigate: (id: string) => void }) {
  const [activeTab, setActiveTab] = useState("all");

  const services = [
    {
      id: "residential",
      icon: Home,
      title: "Residential Support",
      category: "core",
      description: "Comprehensive 24/7 specialist therapeutic residential care at our high-specification homes.",
      approach: "Transitioning away from clinical institutions into micro-communities that provide warmth and structured security.",
      methodology: [
        "24-hour highly trained on-site support staffing",
        "Individualized sensory environment configurations",
        "Weekly therapeutic multidisciplinary reviews"
      ],
      outcomes: [
        "A true feeling of homely ownership",
        "Reduction in crisis events",
        "Durable, long-term placement stability"
      ],
      cqc: "Safe & Caring: Promoting absolute safety in beautiful home environments."
    },
    {
      id: "learning-disability",
      icon: Accessibility,
      title: "Learning Disability Support",
      category: "specialist",
      description: "Intellectual developmental support leveraging custom Active Support principles.",
      approach: "Focusing on capabilities rather than deficits. We build custom pathways for complex communication styles.",
      methodology: [
        "Alternative Communication Support (PECS, Makaton, Visual Schedules)",
        "Progressive task analysis structures",
        "Bespoke adult-learning & leisure plans"
      ],
      outcomes: [
        "Enhanced expressive capability",
        "Mastery of basic daily living elements",
        "Significant lifestyle choices autonomy"
      ],
      cqc: "Effective: Customizing support to matched developmental capabilities."
    },
    {
      id: "autism-support",
      icon: Sparkles,
      title: "Autism Support",
      category: "specialist",
      description: "Neuro-affirming autism care plans mapped to individual sensory diets.",
      approach: "Acknowledging unique neurotype requirements without attempting to force conformity. We adapt environments to the person.",
      methodology: [
        "Sensory integration audit led by occupational therapists",
        "Consistent daily rosters keeping anxiety to a minimum",
        "Quiet sensory escape spaces"
      ],
      outcomes: [
        "Decreased emotional and sensory overload events",
        "Increased focus on personal special interests",
        "Self-advocacy and improved confidence"
      ],
      cqc: "Responsive: Designing structures directly responsive to sensory differences."
    },
    {
      id: "mental-health",
      icon: Heart,
      title: "Mental Health Support",
      category: "specialist",
      description: "Dual-diagnosis support managing emotional and psychological health profiles.",
      approach: "A non-punitive, Trauma-Informed framework to rebuild trust, cognitive resilience, and stable daily rhythms.",
      methodology: [
        "Weekly reviews with community mental health teams (CMHT)",
        "Structured relapse prevention triggers and protocols",
        "Mindful coping strategies and sensory regulation"
      ],
      outcomes: [
        "Stabilized mood states",
        "Greater personal emotional accountability",
        "Fewer emergency inpatient admissions"
      ],
      cqc: "Effective & Responsive: Clinical integration to ensure psychological safety."
    },
    {
      id: "personal-care",
      icon: ShieldCheck,
      title: "Personal Care",
      category: "core",
      description: "Dignified assistance with hygiene, dietary nutrition, grooming, and medicine management.",
      approach: "Maximizing the resident's active contribution to their own physical care, ensuring self-respect and privacy.",
      methodology: [
        "Private bathroom en-suite setups in every room",
        "Rigorous training on manual handling and personal dignity",
        "Strict clinical medication administration checks via Nourish"
      ],
      outcomes: [
        "Maintenance of optimal physical hygiene and pride",
        "Zero medication errors goal achieved via double-audits",
        "Respectful support aligning to gender and personal identity"
      ],
      cqc: "Safe & Caring: Prioritizing clinical safety alongside personal respect."
    },
    {
      id: "community-participation",
      icon: UserPlus,
      title: "Community Participation",
      category: "independence",
      description: "Facilitating active integration into UK high streets, colleges, recreation centers, and clubs.",
      approach: "Moving away from isolated care home vans. We support residents to walk, take buses, and join community directories.",
      methodology: [
        "Localized travel training program under Positive Risk-Taking",
        "Liaison with volunteering teams and physical activities partners",
        "Support to attend real, structured local community hubs"
      ],
      outcomes: [
        "Ending social isolation",
        "True citizenship status within local neighborhoods",
        "Developing real-world social cues and friendships"
      ],
      cqc: "Responsive: Creating actual life pathways outside the home boundaries."
    },
    {
      id: "independent-living",
      icon: Milestone,
      title: "Independent Living Development",
      category: "independence",
      description: "Bespoke daily living training plans targeting housekeeping, budget management, and meal prep.",
      approach: "Every resident has an active 'Independence Roadmap' breaking complex tasks into fun, achievable daily targets.",
      methodology: [
        "Kitchen setups with sensory safety controls",
        "Weekly micro-budgeting exercises using visual cash envelopes",
        "Domestic maintenance check sheets"
      ],
      outcomes: [
        "Learning to cook simple, healthy recipes on one's own",
        "Ability to manage small weekly allowances",
        "Preparation for eventual step-down independent supported living"
      ],
      cqc: "Effective: Direct training leading to real life-skill graduation."
    },
    {
      id: "behaviour-support",
      icon: Fingerprint,
      title: "Behaviour Support",
      category: "core",
      description: "Highly specialized Positive Behaviour Support planning to manage high-intensity distress safely.",
      approach: "Fully aligned with the UK Restraint Reduction Network. We analyze why behaviours occur to prevent restrictions.",
      methodology: [
        "Proactive, Active, and Reactive traffic-light care logs",
        "Physical environment redesign to eliminate visual and noise stressors",
        "Staff mentoring on micro-triggers and sensory calming"
      ],
      outcomes: [
        "Over 85% average reduction in distress events within 6 months",
        "Zero-restraint goal achieved through sophisticated de-escalation",
        "Increased emotional safety for the resident and staff teams"
      ],
      cqc: "Safe & Well-Led: Meticulous behavioral logging and restraint reduction oversight."
    },
    {
      id: "emotional-wellbeing",
      icon: BookOpen,
      title: "Emotional Wellbeing Support",
      category: "core",
      description: "Ensuring emotional and spiritual balance through customized therapeutic activities.",
      approach: "Nurturing creative outlets like therapeutic gardening, music creation, pet visits, and sensory journaling.",
      methodology: [
        "Dedicated quiet contemplation hours and yoga/stretching plans",
        "Weekly visits from trained therapy animals",
        "Self-directed arts, painting, and tactile expression rooms"
      ],
      outcomes: [
        "Decline in generalized daily cortisol & stress levels",
        "Development of private self-soothing mechanics",
        "Increased positive feedback from families and circles of care"
      ],
      cqc: "Caring: Acknowledging that medical health needs mental serenity."
    },
    {
      id: "outcome-focused",
      icon: ShieldCheck,
      title: "Outcome-Focused Care",
      category: "independence",
      description: "Driving objective quality of life milestones utilizing customized goal templates.",
      approach: "Moving away from passive attendance. We define measurable life targets and document them rigorously.",
      methodology: [
        "Outcome mapping on Nourish Digital tablets",
        "Co-produced reviews every 3 months involving social workers",
        "Celebration assemblies of residents' personal achievements"
      ],
      outcomes: [
        "Visible evidence of physical, psychological, and social growth",
        "Highly auditable evidence logs for CQC inspectors and commissioners",
        "Authentic resident pride in their documented achievements"
      ],
      cqc: "Safe, Effective & Well-Led: Clear, measurable, auditable live clinical outcomes."
    }
  ];

  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 font-mono block">
            Specialist Health & Social Care Portfolios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Our Care & Support Services
          </h2>
          <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full" />
          <p className="text-slate-600 text-sm">
            We provide robustly governed, therapeutic services structured directly alongside CQC Fundamental Standards and modern NHS commissioner requirements.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {[
            { id: "all", label: "All Care Portfolios" },
            { id: "core", label: "Core Residential & PBS" },
            { id: "specialist", label: "Specialist Developmental support" },
            { id: "independence", label: "Independence & Citizenship" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-sky-600 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-sky-300 hover:bg-sky-50/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col justify-between hover:shadow-xl hover:shadow-slate-200/50 hover:border-sky-100 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between">
                    <span className="p-3 bg-sky-50 text-sky-600 rounded-xl group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[9px] uppercase font-mono tracking-widest bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md font-bold">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Approach section */}
                  <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-100 space-y-1 text-xs">
                    <span className="font-bold text-slate-800 text-[10px] block uppercase font-mono tracking-wide">
                      Our Clinical Approach:
                    </span>
                    <p className="text-slate-600 italic leading-relaxed text-[11px]">
                      &ldquo;{service.approach}&rdquo;
                    </p>
                  </div>

                  {/* Methodology Checklist */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
                      Selected Actions & Schedules:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {service.methodology.map((m, mIdx) => (
                        <li key={mIdx} className="flex items-start space-x-1.5">
                          <span className="text-sky-500 text-xs mt-0.5">•</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes Checklist */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block font-mono">
                      Proven Care Outcomes:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {service.outcomes.map((o, oIdx) => (
                        <li key={oIdx} className="flex items-start space-x-1.5">
                          <span className="text-emerald-500 text-xs mt-0.5">✓</span>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer CQC alignment & CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                  <div className="text-[10px] text-slate-450 italic leading-snug">
                    <strong className="text-slate-800 font-semibold font-mono uppercase">CQC Alignment:</strong> {service.cqc}
                  </div>
                  <button
                    onClick={() => onNavigate("contact")}
                    className="w-full py-2 border border-sky-100 hover:border-sky-500 hover:bg-sky-50 text-sky-700 font-bold rounded-lg text-xs transition duration-200"
                  >
                    Discuss Placement Options
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
