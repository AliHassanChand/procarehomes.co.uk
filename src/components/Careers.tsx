import React, { useState } from "react";
import { Users, BookOpen, ShieldCheck, Heart, Send, CheckCircle2, Star } from "lucide-react";
import PageHero from "./PageHero.tsx";

interface CareersProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Careers({ onNavigate }: CareersProps) {
  const [formData, setFormData] = useState({

    name: "",
    email: "",
    phone: "",
    position: "Support Worker - PBS Focused",
    hasDBS: "yes",
    experience: "",
    statement: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const roles = [
    {
      title: "Specialist Support Worker (PBS Focused)",
      location: "6 Flags House, UK",
      salary: "£13.50 - £14.80 / hr",
      type: "Full-Time or Part-Time (Roster Based)",
      requirements: [
        "Proven experience supporting adults with learning disabilities, autism or mental health histories",
        "Commitment to positive de-escalation; zero-restraint mindset",
        "Great record keeping skills for our Nourish digital system",
        "Satisfactory Enhanced Adult DBS check required under CQC protocols"
      ]
    },
    {
      title: "Lead PBS Practitioner & Mentor",
      location: "6 Flags House / Hybrid strategic options",
      salary: "£36,000 - £42,000 / year",
      type: "Full-Time",
      requirements: [
        "MSc in Positive Behaviour Support or BCaBA credential equivalent",
        "Experience auditing Functional Behavior Assessments and reviewing crisis traffic-light plans",
        "Outstanding training and leadership capacity to mentor support staff directly",
        "Enhanced Adult & Child DBS certification"
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.statement) {
      setFormError("Please enter your name, email, and statement of values.");
      return;
    }
    setFormError(null);
    setSubmitted(true);
  };

  return (
    <div id="careers-view" className="animate-fadeIn">
      <PageHero sectionId="careers" onNavigate={onNavigate} />
      
      <section id="careers" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Value-Based Recruitment Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 text-slate-800">
          <div className="bg-sky-50/50 p-6 rounded-2xl border border-sky-100 space-y-3">
            <div className="p-2.5 bg-sky-100 text-sky-800 rounded-xl w-fit">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm">Values-First Hiring</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We screen candidates for resilience, warmth, and adherence to human rights before technical qualifications. We can train care skills, but compassion is a prerequisite.
            </p>
          </div>

          <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 space-y-3">
            <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl w-fit">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm">Premium Continuous Training</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every staff member goes through high-fidelity certified pathways in positive behaviour support (PBS), trauma-informed care (TIC), epilepsy support, and the Nourish tablet network.
            </p>
          </div>

          <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 space-y-3">
            <div className="p-2.5 bg-indigo-100 text-indigo-800 rounded-xl w-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm">Rigorous Safeguarding Protection</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our vetting includes face-to-face reference checks, CQC compliant interview scoring directories, and continuous Enhanced DBS monitoring.
            </p>
          </div>
        </div>

        {/* Double Column: Active Roles vs Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Active Job Roles Left */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center space-x-2">
              <Users className="w-5 h-5 text-sky-600" />
              <span>Current Vacancies at 6 Flags House</span>
            </h3>

            {roles.map((role) => (
              <div key={role.title} className="bg-slate-50 border border-slate-150 rounded-2xl p-6 space-y-4 hover:border-sky-300 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">{role.title}</h4>
                    <span className="text-[10px] text-slate-500 block mt-0.5">{role.location} • {role.type}</span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold py-1 px-2.5 rounded-full self-start sm:self-center font-mono">
                    {role.salary}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono block">
                    Essential Criteria for Applicants
                  </span>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {role.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5">
                        <span className="text-sky-500 text-sm mt-0.5">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Application Form Right */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 border border-slate-150 p-6 sm:p-8 rounded-3xl shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center space-x-2">
                <Star className="w-5 h-5 text-emerald-600 animate-pulse" />
                <span>Express Your Interest Internally</span>
              </h3>

              {submitted ? (
                <div className="bg-emerald-100/55 border border-emerald-200 rounded-2xl p-6 text-center space-y-4 animate-scaleUp">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-950">Application Statement Received</h4>
                  <p className="text-slate-700 text-xs leading-relaxed max-w-sm mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Our support team at PRO Care Homes will review your background and compatibility statement. We will reach out within 48 business hours to arrange a structured values interview.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", position: "Support Worker - PBS Focused", hasDBS: "yes", experience: "", statement: "" });
                    }}
                    className="mt-2 text-xs font-semibold text-sky-700 hover:underline"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4 font-sans text-xs">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-700 block">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Rachel Higgins"
                        className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-805"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-700 block">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. rachel@example.com"
                        className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-805"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-700 block">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +44 7123 456789"
                        className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-805"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-700 block">Position of Interest</label>
                      <select
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-805"
                      >
                        <option>Support Worker - PBS Focused</option>
                        <option>Lead PBS Practitioner & Mentor</option>
                        <option>Waking Night Support Specialist</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 block">Do you possess an active Enhanced Adult DBS? *</label>
                    <div className="flex items-center space-x-4 pt-1">
                      <label className="flex items-center space-x-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="hasDBS"
                          value="yes"
                          checked={formData.hasDBS === "yes"}
                          onChange={handleInputChange}
                          className="text-sky-650"
                        />
                        <span>Yes, active on update service</span>
                      </label>
                      <label className="flex items-center space-x-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="hasDBS"
                          value="no"
                          checked={formData.hasDBS === "no"}
                          onChange={handleInputChange}
                          className="text-sky-650"
                        />
                        <span>No, require a new application</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 block">Years of experience in Learning Disabilities / Autism care</label>
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="e.g. 3 Years as keyworker"
                      className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-805"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 block">Statement of Values & Motivation *</label>
                    <textarea
                      name="statement"
                      value={formData.statement}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      placeholder="Explain briefly why a de-institutionalised, positive support environment matters to your practice..."
                      className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-805"
                    />
                  </div>

                  {formError && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium animate-shake">
                      ⚠️ {formError}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl flex items-center justify-center space-x-2 transition-all transform active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Application Statement</span>
                  </button>

                  <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                    By submitting, you consent to secure background processing of your data under CQC Regulation 18 hiring guidelines. We never sell background information.
                  </p>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  </div>
);
}
