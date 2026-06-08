import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, BrainCircuit, Heart, Fingerprint, UserCheck, Accessibility } from "lucide-react";
import PageHero from "./PageHero.tsx";

interface ModelOfCareProps {
  onNavigate?: (sectionId: string) => void;
}

export default function ModelOfCare({ onNavigate }: ModelOfCareProps) {
  const [activeTab, setActiveTab] = useState("pbs");

  const models = [

    {
      id: "pbs",
      title: "Positive Behaviour Support (PBS)",
      short: "A values-led framework based on human rights and behavioral science.",
      icon: BrainCircuit,
      meaning: "Positive Behaviour Support is a multi-tiered framework designed to understand the context and purpose of an individual's behaviors that challenge. It is not about control, but about understanding what the person is communicating and modifying their environment, schedule, or skillsets to improve quality of life.",
      implementation: "Each resident has a bespoke Functional Behaviour Assessment led by Nominated Individual Boston Murray and our PBS practitioners. We map triggers, early warning signs, distress signs, and primary coping mechanisms into a traffic-light crisis plan. Staff are 100% trained in de-escalation and positive reinforcement rather than restrictive practices.",
      benefits: "Residents experience a steep decline in anxiety, stress, and challenging episodes. They feel heard and understood, leading to better family visits, greater community engagement, and fewer safety intervention incident logs.",
      delivery: "Continuous training of support workers, real-time logging of triggers on Nourish digital tablets, monthly behavioral analysis charts shared with multidisciplinary teams, and proactive visual schedule implementation."
    },
    {
      id: "tic",
      title: "Trauma-Informed Care (TIC)",
      short: "Shifting the primary question from 'What is wrong with you?' to 'What happened to you?'",
      icon: Award,
      meaning: "Trauma-Informed Care acknowledges that individuals with complex learning profiles or mental health challenges often have backgrounds of severe placement distress, medical constraints, or personal exclusion. It ensures everyone works with a deep sensitivity to past traumas.",
      implementation: "We conduct thorough trauma histories mapping triggers that could cause trauma flashbacks. Care plans ensure staff avoid aggressive tones, physical blocks, or intimidating body language. It guides room lighting, sensory schedules, and staff consistency.",
      benefits: "Creates a hyper-reassuring, safe climate where residents can heal. It bridges gaps in trust and helps residents form constructive attachments with their long-term support workers.",
      delivery: "Applying the five principles of Trauma-Informed Care: Safety, Trustworthiness, Choice, Collaboration, and Empowerment in every staff member's daily interactions."
    },
    {
      id: "pie",
      title: "Psychologically Informed Environments (PIE)",
      short: "Consciously managing physical space to foster mental wellbeing.",
      icon: Heart,
      meaning: "PIE is an approach to services where the physical layout, visual accents, ambient noise levels, and staffing culture are specifically shaped to soothe emotional vulnerability and promote cognitive healing.",
      implementation: "In 6 Flags House, layout designs avoid fluorescent lighting, minimize echo chambers via bespoke acoustic paneling, and offer secluded sensory dens where residents can unwind away from communal areas.",
      benefits: "Reduces somatic stress indicators (raised heart rates, panic, sensory overload). It encourages natural social interaction without pressure, making communal spaces feel like comfortable family settings.",
      delivery: "Design reviews of property spaces with feedback from care quality leads and occupational therapists, maintaining non-institutional soft furnishings and neutral calming warm tones."
    },
    {
      id: "autism",
      title: "Autism-Informed Support",
      short: "Bespoke sensory schedules and neuro-affirming structures.",
      icon: Accessibility,
      meaning: "Autism-Informed Support understands the sensory processing variables, communication styles, and intense focus parameters associated with autism. We affirm neurodiversity rather than attempting to enforce neurotypical standards.",
      implementation: "We coordinate communication profiles utilizing PECS, visual schedules, or tablets depending on preferences. We organize sensory diets consisting of tactile tools, auditory filters, weighted vests, and specific physical activity schedules.",
      benefits: "Mitigates high-intensity sensory meltdowns. Residents gain cognitive headroom to learn new skills, communicate their choices, and form peer friendships.",
      delivery: "Intensive training under the National Autistic Society (NAS) standards, sensory profiling for every single resident, and absolute task structure consistency."
    },
    {
      id: "person-centred",
      title: "Person-Centred Practice",
      short: "Placing the resident firmly in the co-pilot seat of their own care journey.",
      icon: Fingerprint,
      meaning: "Person-Centred Practice means the resident is the primary architect of their daily schedule. We do not impose a standard roster of tasks; every meal, bedtime, hobby, and outing is customized based on individual preferences.",
      implementation: "Residents partake in 'One Page Profile' builds, choosing which caregivers they prefer, what styles of clothes they wear, and how they want their bedrooms decorated. Important plans are formatted in Easy Read documents with symbols and large print.",
      benefits: "Fosters self-worth, agency, and an active sense of mastery. Residents take pride in their spaces and gain functional control over their lives.",
      delivery: "Weekly keyworker meetings to audit preferences, resident-led house forums, accessible menu choices, and family co-production in care plans."
    },
    {
      id: "risk",
      title: "Positive Risk-Taking",
      short: "Enabling managed risks to build real independence.",
      icon: UserCheck,
      meaning: "Positive Risk-Taking recognizes that keeping individuals completely shielded from risk prevents them from learning. We carefully assess risk, implement safe controls, and allow residents to try new challenges.",
      implementation: "If a resident wishes to use public transit or learn cooking on a hot stove, we do not simply deny them. We create a graded step-by-step risk-mitigation plan, providing close support and safety training until they master the task.",
      benefits: "Enormous boosts in self-confidence, motor skills, community independence, and authentic growth. It replaces over-protective isolation with safe mastery.",
      delivery: "Documented collaborative risk assessments, transparent safety logs on Nourish, stakeholder approvals, and progressive skill checklists."
    }
  ];

  const currentModel = models.find((m) => m.id === activeTab) || models[0];
  const CurrentIcon = currentModel.icon;

  return (
    <div id="model-of-care-view" className="animate-fadeIn">
      <PageHero sectionId="model-of-care" onNavigate={onNavigate} />
      
      <section id="model-of-care" className="py-20 bg-gradient-to-br from-sky-50/20 via-white to-emerald-50/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab Selection Area */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
          {models.map((m) => {
            const Icon = m.icon;
            return (
              <button
                key={m.id}
                onClick={() => setActiveTab(m.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                  activeTab === m.id
                    ? "bg-sky-600 text-white shadow-md shadow-sky-100 scale-102"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-sky-300 hover:bg-sky-50/30"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{m.title.split(" (")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Detailed Content Component */}
        <div className="bg-white rounded-3xl border border-sky-50 shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Title and Summary Left Panel */}
            <div className="lg:col-span-5 bg-gradient-to-br from-sky-600 to-sky-700 p-8 sm:p-12 text-white flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                  <CurrentIcon className="w-8 h-8 text-sky-100" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight">{currentModel.title}</h3>
                  <p className="text-sky-100/90 text-sm font-medium leading-relaxed italic border-l-2 border-emerald-300 pl-3">
                    &ldquo;{currentModel.short}&rdquo;
                  </p>
                </div>
              </div>
              
              <div className="mt-8 lg:mt-0 pt-6 border-t border-white/10">
                <span className="text-[10px] font-mono tracking-widest text-emerald-300 uppercase block font-semibold">
                  Governed Framework
                </span>
                <span className="text-xs text-sky-100">
                  Fully mapped to CQC Safe & Effective domains.
                </span>
              </div>
            </div>

            {/* Explainer Right Panel */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* What it means */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase font-bold tracking-widest font-mono text-sky-700">
                    What It Means
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {currentModel.meaning}
                  </p>
                </div>

                {/* How it is implemented */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase font-bold tracking-widest font-mono text-emerald-700">
                    How We Implement It
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {currentModel.implementation}
                  </p>
                </div>

                {/* Benefits to residents */}
                <div className="space-y-2 border-t border-slate-100 pt-6">
                  <h4 className="text-xs uppercase font-bold tracking-widest font-mono text-amber-700">
                    Benefits to Residents
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {currentModel.benefits}
                  </p>
                </div>

                {/* Delivery model */}
                <div className="space-y-2 border-t border-slate-100 pt-6">
                  <h4 className="text-xs uppercase font-bold tracking-widest font-mono text-indigo-700">
                    Operational Delivery
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {currentModel.delivery}
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  </div>
);
}
