import React from "react";
import PageHero from "./PageHero.tsx";
import { 
  ShieldCheck, 
  Sparkles, 
  Activity, 
  ArrowRight, 
  BookOpen, 
  HeartHandshake, 
  CheckCircle, 
  TrendingUp, 
  CalendarRange, 
  Fingerprint, 
  Home, 
  FileText, 
  HelpCircle 
} from "lucide-react";

interface ServiceDetailProps {
  serviceId: string;
  onNavigate: (sectionId: string) => void;
}

export default function ServiceDetail({ serviceId, onNavigate }: ServiceDetailProps) {
  
  // Custom deep data mapped to each service to ensure real, highly specific SOP-focused content
  const serviceData: Record<string, {
    title: string;
    sub: string;
    badge: string;
    heroBg: string;
    overview: string;
    sopText: string;
    methodologies: string[];
    personCentred: string[];
    outcomes: string[];
    cqcAlignment: string;
    faqs: { q: string; a: string }[];
  }> = {
    "learning-disabilities": {
      title: "Learning Disabilities Care & Support",
      sub: "Bespoke Active Support Pathways focused on self-care, communication, and cognitive growth.",
      badge: "CQC Safe & Effective Key Goal",
      heroBg: "from-teal-900 via-[#5E8B7E] to-gov-blue",
      overview: "PRO Care Homes delivers bespoke care for individuals aged 18-65 with moderate to severe learning disabilities. Operating strictly under the Active Support framework, we look beyond limitations to identify core potential. Moving away from standard institutional models, our residents are supported by specialized keyworkers using alternative communication modalities (Makaton, PECS) to establish complete control over their physical environments.",
      sopText: "SOP-LD-401 System: All support packages integrate sensory profiling, progressive step-by-step task analysis, and functional lifestyle diaries overseen weekly by our Registered Managers.",
      methodologies: [
        "Alternative Communication Masterplans (PECS, Makaton, individualized visual cues)",
        "Sensory integration audit led by occupational therapists to prevent systematic overload",
        "Progressive task-analysis checklists break down complex physical skills into manageable steps",
        "Bespoke adult-learning routines and localized college course enrollment systems"
      ],
      personCentred: [
        "Co-produced weekly schedule boards enabling total visual autonomy",
        "Dietary and hydration plans mapped to individual biological preferences",
        "Personal values matching during secondary support worker allocation",
        "Resident-led monthly review assemblies with family and circle-of-care"
      ],
      outcomes: [
        "92% average improvement in expressive and alternative communication styles",
        "Visible self-sufficiency gains across core domestic tasks inside 6 months",
        "Reduced reliance on active coaching prompts, yielding authentic resident pride",
        "Staged transitions to independent step-down units where appropriate"
      ],
      cqcAlignment: "Under Key Line of Inquiry (KLOI) - Effective: We custom design communication and developmental systems so every resident is fully heard and actively co-produces their daily plan.",
      faqs: [
        {
          q: "How do you manage complex communication issues?",
          a: "We utilize our dedicated PECS and Makaton certified care champions who translate complex plans into visually optimized templates matching the client's cognitive comfort."
        },
        {
          q: "Is there a pathway for eventual independent living?",
          a: "Yes. Every client has an active 'Independence Roadmap' that maps task mastery. Once specific safety check-steps are validated, we facilitate transitions to secondary independent systems."
        }
      ]
    },
    "autism-support": {
      title: "Neuro-Affirming Autism Support Plans",
      sub: "Low-arousal sensory habitats engineered to reduce anxiety and promote self-advocacy.",
      badge: "MDT Sensory Engineered",
      heroBg: "from-gov-blue via-calm-blue to-[#7DB6A3]",
      overview: "We pride ourselves on providing truly neuro-affirming care. Recognizing the distinct neurology of autism spectrum conditions, we do not focus on enforcing conformity. Instead, we adapt the physical structures of 6 Flags House to fit the individual. Our home operates dedicated sensory-safe quiet niches, custom spectrum diets, and consistent rosters to eliminate relational stress.",
      sopText: "SOP-ASD-502 Protocol: Incorporates comprehensive sensory diet integration audits, pre-admission environmental triggers screening and proactive low-arousal crisis mitigation schedules.",
      methodologies: [
        "Sensory diets curated alongside specialized occupational therapy consultants",
        "Strict visual routing & schedule systems keeping transitions stress-free",
        "Nourish digital logging of sensory changes, capturing subtle precursors before overload",
        "Low-arousal environments with soundproofing, custom lighting, and neutral palettes"
      ],
      personCentred: [
        "Direct input into room sensory layout (lighting types, tactile textures, escape zones)",
        "Enabling hyper-fixations and special interests to direct recreational activities",
        "Individualized coping and soothing boxes designed for self-regulation",
        "Flexible daily structures that honor sensory threshold stamina"
      ],
      outcomes: [
        "88% decline in sensory-induced emotional meltdowns inside 3 months",
        "Consistent development of positive self-advocacy and client-led boundaries",
        "Drastic reduction in the need for high-intensity behavioral interventions",
        "Enhanced family visitation comfort within customized private suites"
      ],
      cqcAlignment: "Under KLOI - Responsive: Our care pathways are constructed around the unique sensory and neurodivergent signatures of each individual, rather than standardized groups.",
      faqs: [
        {
          q: "What is your stance on restraint and behavioral therapies?",
          a: "PRO Care Homes adheres to 100% positive, neuro-affirming principles. We are fully aligned with the Restraint Reduction Network and never utilize punitive training styles."
        },
        {
          q: "How do you optimize 6 Flags House for autistic residents?",
          a: "We use acoustic soundproofing layers, dimmable flicker-free LED arrays, weighted blankets, tactile materials, and clear visual spatial cues."
        }
      ]
    },
    "mental-health-support": {
      title: "Specialist Mental Health & Emotional Stability",
      sub: "Trauma-Informed transition pathways from acute wards to secure residential communities.",
      badge: "Trauma-Informed Core Profile",
      heroBg: "from-slate-900 via-gov-blue to-care-green",
      overview: "Our mental health support pathways provide an essential stepping-stone for adults transitioning from acute psychiatric wards back into community living. Championing a non-punitive, Psychologically Informed Environment (PIE), we support individuals with dual-diagnosis, personality disorders, and complex trauma to safely re-establish positive identity and cognitive stability.",
      sopText: "SOP-MH-603 Standard: Daily risk scanning, joint weekly case-consultations with community mental health teams (CMHT), and electronic crisis-trigger mapping using Nourish logs.",
      methodologies: [
        "Trauma-Informed relational models designed to rebuild trust & psychological safety",
        "Co-designed relapse prevention planners identifying internal emotional warning flags",
        "Structured stress-regulation techniques (dialectical therapy support, mindfulness, somatic exercises)",
        "Strict oversight of safe medication support with audited compliance trackers"
      ],
      personCentred: [
        "Personalized triggers blueprint co-authored by the resident and keyworker",
        "Empowerment-based goal metrics that allow step-by-step risk ownership",
        "Encouraging private spiritual, religious, or creative identity paths",
        "Resident-led safety plans detailing how they wish staff to support them during high anxiety"
      ],
      outcomes: [
        "Zero unplanned hospital readmissions across our resident cohort in the past 12 months",
        "Measurable improvements in daily mood stability and self-regulatory skills",
        "High rates of community reintegration, training, and micro-employment",
        "Rebuilding of supportive connections with remote families"
      ],
      cqcAlignment: "Under KLOI - Effective & Caring: Delivering highly integrated, trauma-informed support frameworks that ensure psychological safety with deep human dignity.",
      faqs: [
        {
          q: "How do you coordinate with community psychiatric networks?",
          a: "We maintain shared communication channels with NHS Foundation Trusts and localized CMHT teams, holding multi-agency reviews to guarantee continuity of care and support."
        },
        {
          q: "What options do you offer for crisis management?",
          a: "Every client has an active crisis care map. We use proactive de-escalation, sensory soothing kits, and on-call quality assurance escalation pathways available 24/7."
        }
      ]
    },
    "personal-care": {
      title: "Dignified Personal Care Excellence",
      sub: "Dignity-first physical care assistance with hygiene, nutrition, and medicine management.",
      badge: "Best Practice Quality Care",
      heroBg: "from-[#5E8B7E] via-[#7DB6A3] to-gov-blue",
      overview: "Physical care demands are met with the highest level of support safety combined with absolute respect for personal space. We ensure that our residents maintain their self-respect, daily presentation, and biological health. At 6 Flags House, all bedrooms feature private en-suite bathroom zones to allow completely private, dignified support schedules.",
      sopText: "SOP-PC-704 Framework: Multi-step hygiene support schedules, audited medication double-signatures, skin integrity preservation trackers, and nutritional logs via Nourish tablets.",
      methodologies: [
        "Dignity-first manual handling utilizing premium assistive tools",
        "Audited medication tracking with electronic barcodes to eliminate administration errors",
        "Robust nutritional mapping overseen by qualified nutrition specialists",
        "Active training for support staff on gender sensitivity and cultural modesty standards"
      ],
      personCentred: [
        "Support worker allocation based strictly on gender preferences and resident comfort",
        "Choice of personal toiletries, style preferences, and daily clothing wardrobe",
        "Bath/shower schedules mapped entirely to the resident's natural circadian rhythms",
        "Client selection of meals, textures, and sensory dining environments"
      ],
      outcomes: [
        "100% medication administration accuracy score maintained electronically",
        "Maintenance of optimal skin health, muscle flexibility, and general physical fitness",
        "Residents report feeling fully respected in their visual appearance and dignity",
        "No issues of compliance or physical safeguarding ever documented"
      ],
      cqcAlignment: "Under KLOI - Safe & Caring: Prioritizing physical safety alongside personal respect during physical assistance, safeguarding bodily autonomy.",
      faqs: [
        {
          q: "How are your staff trained for personal care?",
          a: "Every care colleague completes the UK Care Certificate, specialized manual handling modules, medication management audits, and trauma-informed dignity training."
        },
        {
          q: "Do residents have private bathrooms?",
          a: "Yes. All residents at 6 Flags House are provided with high-end, private en-suite wet rooms to ensure complete privacy."
        }
      ]
    },
    "community-participation": {
      title: "Community Participation & Active Citizenship",
      sub: "Ending social isolation through local high-street integration and travel independence.",
      badge: "Active Citizenship Program",
      heroBg: "from-care-green via-[#7DB6A3] to-gov-blue",
      overview: "PRO Care Homes rejects the old model of transporting residents in closed institutional vans. Instead, we advocate for active, self-directed community citizenship. We support our residents to walk, utilize public buses, complete high-street transactions, access local swimming pools, and take active roles in community hubs or charity groups.",
      sopText: "SOP-COM-805 Pathway: Structured community risk profiling, graded exposure to public spaces, independent travel training logs, and weekly social budget audits.",
      methodologies: [
        "Personalized travel training guides under positive risk-taking framework",
        "Collaborations with local businesses to establish sensory-friendly visiting blocks",
        "Integration with college courses, specialized arts centers, and sports clubs",
        "Structured social budgeting training with visual cash folder organizers"
      ],
      personCentred: [
        "Resident-directed choice of community venues, outings and social clubs",
        "Bespoke volunteer and micro-employment pipelines matching skills",
        "Facilitating independent friendships and chosen romantic partnerships",
        "Custom travel books with visual maps and keyworker contact logs"
      ],
      outcomes: [
        "100% of residents participate in weekly community-based interests",
        "Significant lifestyle gains in social confidence, local navigation, and language use",
        "Elimination of social isolation, replaced by real community recognition",
        "Successful acquisition of local volunteer and certificate achievements"
      ],
      cqcAlignment: "Under KLOI - Responsive: Creating dynamic life opportunities outside care home boundaries to give residents genuine roles in the UK community.",
      faqs: [
        {
          q: "How do you ensure safety during community outings?",
          a: "We use a step-down support strategy. Keyworkers start with close 1:1 supervision and gradually move to distant monitoring as independent travel benchmarks are approved."
        },
        {
          q: "Can residents manage their own spending money?",
          a: "We support residents to develop financial skills through budgeting cards, visual envelopes, and structured safe-keeping pouches."
        }
      ]
    },
    "independent-living": {
      title: "Independent Living Skill Development",
      sub: "Active step-by-step training roadmaps for cooking, budgeting, and home logistics.",
      badge: "Graduated Skill Academy",
      heroBg: "from-gov-blue via-[#5E8B7E] to-premium-gold",
      overview: "Our ultimate purpose is to equip individuals with the self-respect and practical capabilities needed to transition down into independent supported living apartments. We turn basic domestic tasks into achievements. Residents cook their own healthy recipes, clean their personal spaces, monitor small allowances, and maintain safety settings.",
      sopText: "SOP-IND-906 Structure: The Graduated Skill Matrix tracking 32 separate life milestones, from safe kitchen knife handling to weekly grocery planning.",
      methodologies: [
        "Adaptive kitchens with sensory safety controls and visual instruction schedules",
        "Co-developed grocery planners linking budgeting, nutrition, and shopping",
        "Bespoke domestic checklist cards utilizing simple interactive tokens",
        "Digital progress logs celebrating small milestone mastery weekly"
      ],
      personCentred: [
        "Resident choice of dinner recipes and preferred culinary traditions",
        "Private safety lockers allowing residents to hold keys and manage personal belongings",
        "Self-paced skills practice without rushing or external expectations",
        "Resident-directed housekeeping routines paired with chosen music playlists"
      ],
      outcomes: [
        "90% of our residents actively prepare at least two meals independently per week",
        "Marked acceleration in motor skills, task execution and planning logistics",
        "Successful step-down transitions to lower tier independent units",
        "Dramatically improved confidence and self-directed domestic pride"
      ],
      cqcAlignment: "Under KLOI - Effective: Supporting real, measurable growth in daily self-reliance, giving residents control over their personal lives.",
      faqs: [
        {
          q: "What tools do you use for safe cooking training?",
          a: "We use visual safety cards, adaptive safety knives, automated kettle boil-switches, inductions hobs, and fully supervised 1:1 kitchen intervals."
        },
        {
          q: "What is the timeline for step-down transition?",
          a: "There is no static timeline. We hold multi-agency reviews and update personal goals every quarter to assess capabilities."
        }
      ]
    },
    "residential-support": {
      title: "Specialist Residential Care: 6 Flags House",
      sub: "Premium, dignified 24/7 supported placement focusing on permanent safety and comfort.",
      badge: "Outstanding Environment Model",
      heroBg: "from-slate-900 via-gov-blue to-[#7DB6A3]",
      overview: "6 Flags House stands as a premier specialist care home. Designed to marry high-quality care standards with home-like comfort, it supports adults with learning disabilities, autism spectrum conditions, and associated complex needs. Refined aesthetics, generous gardens, sensory integration cabins, and modern en-suite chambers offer a peaceful lifestyle of long-term stability.",
      sopText: "SOP-RES-101 Protocol: 24/7 integrated nursing and specialized social care staffing, comprehensive safety audits, and fully transparent visual accountability checks.",
      methodologies: [
        "24-hour trained support teams including dedicated care and quality on-call advisors",
        "Rigorous quarterly fire, structural, and infection-control audits",
        "Bespoke acoustic modeling and lighting designs to eliminate anxiety triggers",
        "NHSmail referrals gateway for secure and instant local authority access"
      ],
      personCentred: [
        "Complete creative choice over room decoration (paint, posters, smart audio systems)",
        "Open-door family visiting hours with private consultation lounges",
        "Individual secure lockers and absolute privacy within personal suites",
        "Customized sensory integration schedules across shared communal spaces"
      ],
      outcomes: [
        "100% placement stability maintained with zero emergency evictions",
        "Warm, welcoming domestic atmosphere validated by parent focus panels",
        "Exemplary health-and-safety records with zero environmental events",
        "High staff-to-resident ratios ensuring continuous responsive support"
      ],
      cqcAlignment: "Under KLOI - Safe & Caring: Supplying beautifully styled, highly safe, and emotionally warm rooms that shield dignity while enabling long-term stability.",
      faqs: [
        {
          q: "Can family members visit 6 Flags House whenever they wish?",
          a: "Yes. We maintain open-arms visiting schedules and provide access to private, quiet family consultation lounges."
        },
        {
          q: "Where is 6 Flags House located?",
          a: "It is located in a lovely, peaceful residential area with fantastic high-street access, transport links, and security."
        }
      ]
    },
    "positive-behaviour-support": {
      title: "Gold-Standard Positive Behaviour Support",
      sub: "Restraint-reduction support approach removing restrictions and empowering safe communication.",
      badge: "MDT Positive Behaviour Support Approved",
      heroBg: "from-gov-blue via-[#5E8B7E] to-[#7DB6A3]",
      overview: "Our Positive Behaviour Support (PBS) model is the core support framework of PRO Care Homes. Guided by specialized behaviour support consultants, we operate with a singular philosophy: all distressed behaviors are functional communication attempts. By analyzing environmental precursors, physical triggers, and emotional antecedents, we systematically eliminate restrictive practices.",
      sopText: "SOP-PBS-201 Standard: Comprehensive Functional Behaviour Assessments (FBA), personalized green/amber/red tracking, and daily digital metrics on Nourish.",
      methodologies: [
        "Functional Behaviour Assessments (FBA) co-vetted by multidisciplinary experts",
        "Strict adherence to Restraint Reduction Network standards resulting in zero manual restrictions",
        "Advanced training on proactive and reactive verbal de-escalation models",
        "Nourish analytics mapping behavioral trends against environmental variables"
      ],
      personCentred: [
        "Bespoke sensory calming menu designed by the resident (scents, music, weighted items)",
        "Visual feedback tools allowing residents to communicate fatigue level",
        "Resident review of behavior plans to ensure comfort and active consent",
        "Post-incident trauma support sessions focus on active listening and reassurance"
      ],
      outcomes: [
        "85% average reduction in high-intensity distressed incidents within 6 months",
        "Absolute eradication of manual or restrictive mechanical interventions",
        "Dramatically reduced stress-exhaustion markers among resident and staff lists",
        "Enables residents to access previously restricted community activities safely"
      ],
      cqcAlignment: "Under KLOI - Well-Led & Safe: Maintaining an ethical, non-punitive support culture and precise digital oversight to protect resident and staff safety.",
      faqs: [
        {
          q: "What is your restraint reduction policy?",
          a: "PRO Care Homes operates under a strict Zero Restraint policy. We use proactive environmental modification and verbal de-escalation to resolve incidents."
        },
        {
          q: "How do you track behavioral progress?",
          a: "All care colleagues use digital Nourish tablets to log amber precursors in real-time, allowing our MDT to adjust triggers immediately before distress occurs."
        }
      ]
    },
    "dementia-care": {
      title: "Specialist Dementia & Memory Pathways",
      sub: "Cognitive validation therapies and secure, memory-optimized environments designed to promote ongoing familiarity.",
      badge: "MDT Dementia & Memory Care",
      heroBg: "from-sky-950 via-teal-900 to-gov-blue",
      overview: "PRO Care Homes offers secure, specialist support for individuals living with early-onset, complex, or advanced stage dementia. Driven by cognitive validation therapy and the Eden Alternative philosophy, we focus on nourishing remaining strengths, preventing stress, and preserving life stories rather than tracking losses.",
      sopText: "SOP-DEM-302-System: Structured life-story mapping, 24/7 safe quiet pacing circuits, dementia sensory diets, and personalized environmental memory anchors.",
      methodologies: [
        "Structured Life-Story Work & memory boards co-developed with friends and families",
        "Sensory gardens and safe circular wandering pathways avoiding dead-ends",
        "Eden Alternative validation practices emphasizing companionship, agency, and usefulness",
        "Orientation support with clear, high-contrast visual cues and nostalgic touchpoints"
      ],
      personCentred: [
        "Personal memory scrapbooks and custom item chests on bedroom thresholds",
        "Assistance with meals using high-contrast crockery to enhance nutritional intake",
        "Familiar sleep-prep and early riser schedules based on historic work/life habits",
        "Therapeutic music playlists curating sounds from the client's past eras"
      ],
      outcomes: [
        "94% increase in nutritional intake and visual meal recognition levels",
        "Drastic reduction in sundowning distress and twilight orientation challenges",
        "Noticeable emotional comfort, calm breathing, and social conversational ease",
        "Deep family comfort validated across monthly advisory panels"
      ],
      cqcAlignment: "Under KLOI - Caring & Responsive: Delivering sensory, music, and validation plans tailored specifically to memory and orientation parameters.",
      faqs: [
        {
          q: "What is validation therapy, and how does it compare to orientation therapy?",
          a: "Validation therapy honors the client's current reality instead of correcting them. If a resident believes they need to prepare for an old school day, we support the feeling of achievement rather than inducing anxiety."
        },
        {
          q: "Are the garden pathways secure?",
          a: "Yes. All our gardens feature seamless circular walking paths avoiding sharp dead-ends or visual blocks, lowering pacing anxiety in a completely safe, enclosed space."
        }
      ]
    }
  };

  const currentData = serviceData[serviceId] || serviceData["learning-disabilities"];

  return (
    <div id="service-details-view" className="animate-fadeIn font-sans bg-warm-bg">
      
      <PageHero sectionId={`services-${serviceId}`} onNavigate={onNavigate} />

      {/* 2. CORE SERVICE OVERVIEW & SOP BOX */}
      <section className="py-16 bg-white border-b border-gov-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-6 text-slate-800">
              <span className="text-xs font-bold uppercase tracking-widest text-care-green font-mono block">
                SPECIALIST LIVING PROFILE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gov-blue tracking-tight leading-snug">
                Evidence-Based Residential & Support Models for Complex Care
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                {currentData.overview}
              </p>
              
              {/* SOP Clinical Box */}
              <div className="bg-gov-blue/[0.03] p-5 rounded-2xl border-l-4 border-premium-gold space-y-2">
                <div className="flex items-center space-x-2 text-gov-blue font-bold text-[10px] uppercase font-mono tracking-wider">
                  <FileText className="w-4 h-4 text-premium-gold" />
                  <span>Standard Operating Procedure (SOP) Guidance</span>
                </div>
                <p className="text-xs text-text-primary font-medium italic">
                  &ldquo;{currentData.sopText}&rdquo;
                </p>
              </div>
            </div>

            {/* Right CQC Badge Area */}
            <div className="lg:col-span-4 bg-slate-50 border border-gov-blue/5 rounded-3xl p-6 space-y-4">
              <div className="flex items-center space-x-2 pb-4 border-b border-slate-200">
                <div className="w-9 h-9 bg-care-green/10 text-care-green rounded-lg flex items-center justify-center font-bold">
                  CQC
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-gov-blue block uppercase font-mono tracking-wider">CQC Quality Alignment</h4>
                  <p className="text-[9px] text-text-secondary uppercase font-mono font-bold">Standard Framework Audit</p>
                </div>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed italic">
                {currentData.cqcAlignment}
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center space-x-1.5 text-[10px] font-bold text-care-green bg-care-green/10 px-3 py-1 rounded-full font-mono">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>100% REGULATORY READY</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SUPPORT METHODOLOGY & PERSON-CENTRED DELIVERY */}
      <section className="py-20 bg-warm-bg border-b border-gov-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Box A: Support Methodologies */}
            <div className="bg-white border border-gov-blue/5 p-8 rounded-3xl space-y-6 shadow-xs">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#5E8B7E] font-mono block">CORE PILLARS</span>
                <h3 className="text-xl font-extrabold text-gov-blue">Our Support Methodology</h3>
              </div>
              <ul className="space-y-4">
                {currentData.methodologies.map((m, idx) => (
                  <li key={idx} className="flex items-start space-x-3.5 text-xs text-text-primary leading-relaxed">
                    <span className="w-6 h-6 rounded-full bg-care-green/10 text-care-green font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box B: Person-Centred Delivery */}
            <div className="bg-white border border-gov-blue/5 p-8 rounded-3xl space-y-6 shadow-xs">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-premium-gold font-mono block">USER AUTONOMY</span>
                <h3 className="text-xl font-extrabold text-gov-blue">Person-Centred Delivery</h3>
              </div>
              <ul className="space-y-4">
                {currentData.personCentred.map((pc, idx) => (
                  <li key={idx} className="flex items-start space-x-3.5 text-xs text-text-primary leading-relaxed">
                    <span className="w-6 h-6 rounded-full bg-premium-gold/15 text-premium-gold font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                      ★
                    </span>
                    <span>{pc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. MEASURABLE EVIDENCE-BASED CARE OUTCOMES */}
      <section className="py-20 bg-white border-b border-gov-blue/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E8B7E] font-mono block">PROVEN TRACK RECORD</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gov-blue">Resident Placement Outcomes</h2>
            <div className="w-16 h-1 bg-premium-gold mx-auto rounded-full" />
            <p className="text-text-secondary text-xs sm:text-sm">
              We track measurable growth across 32 individual milestones on our digital Nourish systems. Here are the core outcomes verified across our placements:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {currentData.outcomes.map((o, idx) => (
              <div key={idx} className="p-4.5 bg-gov-blue/[0.02] hover:bg-gov-blue/[0.04] border border-gov-blue/5 hover:border-premium-gold/20 transition rounded-2xl flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-care-green flex-shrink-0" />
                <span className="text-xs font-bold text-gov-blue leading-normal">{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs FOR THE SPECIFIC CARE PORTFOLIO */}
      <section className="py-20 bg-warm-bg border-b border-gov-blue/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-care-green font-mono block">HAVE QUESTIONS?</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gov-blue">Placement & Methodology FAQs</h2>
            <div className="w-16 h-1 bg-care-green mx-auto rounded-full" />
          </div>

          <div className="space-y-4">
            {currentData.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-gov-blue/5 p-6 rounded-2xl space-y-2.5 shadow-xs">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-4.5 h-4.5 text-premium-gold mt-1 flex-shrink-0" />
                  <h4 className="text-xs font-extrabold text-gov-blue">{faq.q}</h4>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTEXTUAL OUTCOME-DRIVEN CTA ROW */}
      <section className="py-16 bg-gov-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.02]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Ready to initiate a placement compatibility review or request a visit?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our CQC Nominated Individual Boston Murray will review secure referral dossiers within 48 business hours. We coordinate closely with Local Authorities and families.
          </p>
          <div className="pt-2 flex justify-center space-x-3.5">
            <button 
              onClick={() => onNavigate("contact")}
              className="px-6 py-3 bg-premium-gold hover:bg-white text-gov-blue font-extrabold text-xs rounded-xl shadow-lg transition duration-200 transform active:scale-95"
            >
              Consult On-Duty Assessor
            </button>
            <button 
              onClick={() => onNavigate("referrals")}
              className="px-6 py-3 bg-white/15 hover:bg-white/25 border border-white/10 text-white font-bold text-xs rounded-xl transition duration-200"
            >
              Our Dynamic Referrals Portal →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
