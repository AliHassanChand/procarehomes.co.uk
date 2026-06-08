import React, { useState } from "react";
import { Send, MapPin, Phone, Mail, ShieldCheck, HeartHandshake, FileCheck2, UserRoundPlus, CheckCircle2 } from "lucide-react";
import PageHero from "./PageHero.tsx";

interface ContactProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const [activeForm, setActiveForm] = useState<"referral" | "contact_us">("referral");

  const [referralFeedback, setReferralFeedback] = useState(false);
  const [contactFeedback, setContactFeedback] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Form states
  const [referralForm, setReferralForm] = useState({
    commissionerName: "",
    authority: "",
    email: "",
    phone: "",
    serviceUserName: "",
    dob: "",
    diagnosis: "Learning Disability & Autism Mix",
    fundingStatus: "Secured",
    riskDetails: "",
    requiredRatios: "1:1 Support"
  });

  const [generalForm, setGeneralForm] = useState({
    name: "",
    email: "",
    phone: "",
    relation: "Family Member / Guardian",
    message: ""
  });

  const handleReferralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!referralForm.commissionerName || !referralForm.email || !referralForm.serviceUserName) {
      setFormError("Please fill in high priority validation fields (Commissioner name, email, and Resident Name).");
      return;
    }
    setFormError(null);
    setReferralFeedback(true);
  };

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!generalForm.name || !generalForm.email || !generalForm.message) {
      setFormError("Please fill in your name, email, and message.");
      return;
    }
    setFormError(null);
    setContactFeedback(true);
  };

  return (
    <div id="contact-view" className="animate-fadeIn">
      <PageHero sectionId="contact" onNavigate={onNavigate} />
      
      <section id="contact" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Info Grid: Address, Call, and CQC registration numbers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-slate-800">
          <div className="bg-slate-50 border border-slate-150 p-6 rounded-2xl flex items-start space-x-4">
            <span className="p-3 bg-sky-100 text-sky-700 rounded-xl">
              <Phone className="w-5 h-5" />
            </span>
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 font-mono">
                Direct Referrals Hotline
              </span>
              <p className="font-bold text-sm text-slate-900">+44 (0) 7904 908123</p>
              <p className="text-xs text-slate-500">Mon - Fri, 8am to 6pm GMT</p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-150 p-6 rounded-2xl flex items-start space-x-4">
            <span className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
              <Mail className="w-5 h-5" />
            </span>
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 font-mono">
                Secured Email Channel
              </span>
              <p className="font-bold text-sm text-slate-900">referrals@procarehomes.co.uk</p>
              <p className="text-xs text-slate-500">Fully encrypted NHSmail-compliant inbox</p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-155 p-6 rounded-2xl flex items-start space-x-4">
            <span className="p-3 bg-indigo-100 text-indigo-700 rounded-xl">
              <MapPin className="w-5 h-5" />
            </span>
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 font-mono">
                Corporate Headquarters
              </span>
              <p className="font-bold text-sm text-slate-900">PRO Care Homes Ltd</p>
              <p className="text-xs text-slate-500">London Office Frameworks, United Kingdom</p>
            </div>
          </div>
        </div>

        {/* Left Column: Form Selector + Info Tips, Right Column: The active Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Selector & Commissioner Advice Panel Left */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
              <h3 className="font-bold text-lg tracking-tight">Referral Framework</h3>
              <p className="text-xs text-slate-305 leading-relaxed">
                Choose the secure submission portal matching your specific query to fast-track placement reviews:
              </p>

              {/* Form toggles */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => { setActiveForm("referral"); setContactFeedback(false); setFormError(null); }}
                  className={`w-full flex items-center space-x-3 p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                    activeForm === "referral"
                      ? "bg-sky-600 border-sky-600 text-white"
                      : "bg-slate-800 border-slate-700 text-slate-200 hover:border-slate-500"
                  }`}
                >
                  <FileCheck2 className="w-4 h-4 flex-shrink-0" />
                  <span>Local Authority Referral</span>
                </button>

                <button
                  onClick={() => { setActiveForm("contact_us"); setReferralFeedback(false); setFormError(null); }}
                  className={`w-full flex items-center space-x-3 p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                    activeForm === "contact_us"
                      ? "bg-sky-600 border-sky-600 text-white"
                      : "bg-slate-800 border-slate-700 text-slate-200 hover:border-slate-500"
                  }`}
                >
                  <UserRoundPlus className="w-4 h-4 flex-shrink-0" />
                  <span>General Family Inquiry</span>
                </button>
              </div>

              {/* Secure statement */}
              <div className="border-t border-slate-800 pt-6 space-y-2 text-xs">
                <div className="flex items-center space-x-2 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-mono font-bold tracking-wider text-[10px] uppercase">
                    Data Safety Guarantee
                  </span>
                </div>
                <p className="text-[11px] text-slate-350 leading-relaxed">
                  All digital assessments submitted are isolated behind 256-bit certificates, meeting CQC Safe systems requirements and patient data protection frameworks.
                </p>
              </div>
            </div>

            {/* Assessment Milestone Tip */}
            <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100 space-y-2 text-slate-800">
              <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-800 font-mono">
                Standard Admission Sequence:
              </h4>
              <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-600">
                <li>Pre-Admission Support Review (48 Hours)</li>
                <li>Compatibility Assessment with Residents</li>
                <li>Staged familiarization visits to 6 Flags House</li>
                <li>NHS or Social Services funding confirmation</li>
              </ol>
            </div>
          </div>

          {/* Form Render columns right */}
          <div className="lg:col-span-8">
            <div className="bg-slate-50 border border-slate-150 p-6 sm:p-10 rounded-3xl">
              
              {activeForm === "referral" ? (
                <>
                  {referralFeedback ? (
                    <div className="bg-emerald-100/50 border border-emerald-250 p-8 rounded-2xl text-center space-y-4 animate-scaleUp">
                      <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-905">Referral Securely Lodged</h3>
                      <p className="text-slate-650 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                        Thank you for submitting a referral for <strong>{referralForm.serviceUserName}</strong>. Our support team reviewed by Nominated Individual <strong>Boston Murray</strong> will review this file and coordinate with your team at <strong>{referralForm.authority}</strong>. Initial placement compatibility review will be returned within 48 business hours.
                      </p>
                      <button
                        onClick={() => { setReferralFeedback(false); setReferralForm({ commissionerName: "", authority: "", email: "", phone: "", serviceUserName: "", dob: "", diagnosis: "Learning Disability & Autism Mix", fundingStatus: "Secured", riskDetails: "", requiredRatios: "1:1 Support" }); }}
                        className="text-xs text-sky-700 hover:underline font-bold"
                      >
                        Submit another professional referral
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleReferralSubmit} className="space-y-6 font-sans text-xs text-slate-800">
                      <div>
                        <h3 className="text-base font-bold text-slate-900">Secure Pre-Admission Assessment Referral</h3>
                        <p className="text-slate-500 text-[11px] mt-1">For UK Local Authorities, NHS CCG, social care brokers, and social work coordinators.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-bold text-slate-700 block">Your Name / Title *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. David Cartwright, Social Worker"
                            value={referralForm.commissionerName}
                            onChange={(e) => setReferralForm({ ...referralForm, commissionerName: e.target.value })}
                            className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-805"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-bold text-slate-700 block">Placing Authority *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Birmingham City Council"
                            value={referralForm.authority}
                            onChange={(e) => setReferralForm({ ...referralForm, authority: e.target.value })}
                            className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-805"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-bold text-slate-700 block">Contact Email Address *</label>
                          <input
                            type="email"
                            required
                            placeholder="e.g. d.cartwright@nhs.net"
                            value={referralForm.email}
                            onChange={(e) => setReferralForm({ ...referralForm, email: e.target.value })}
                            className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-805"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-bold text-slate-700 block">Direct Telephone Number</label>
                          <input
                            type="tel"
                            placeholder="e.g. +44 121 456 7890"
                            value={referralForm.phone}
                            onChange={(e) => setReferralForm({ ...referralForm, phone: e.target.value })}
                            className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-805"
                          />
                        </div>
                      </div>

                      <div className="border-t border-slate-200 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-bold text-slate-700 block">Resident Initial Placeholder (or Name) *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Client JW"
                            value={referralForm.serviceUserName}
                            onChange={(e) => setReferralForm({ ...referralForm, serviceUserName: e.target.value })}
                            className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-805"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-bold text-slate-700 block">Date of Birth *</label>
                          <input
                            type="date"
                            required
                            value={referralForm.dob}
                            onChange={(e) => setReferralForm({ ...referralForm, dob: e.target.value })}
                            className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-805 text-slate-400"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-1">
                          <label className="font-bold text-slate-700 block">Primary Diagnostic Profile</label>
                          <select
                            value={referralForm.diagnosis}
                            onChange={(e) => setReferralForm({ ...referralForm, diagnosis: e.target.value })}
                            className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-805 font-medium"
                          >
                            <option>Autism Spectrum Condition</option>
                            <option>Learning Disabilities Only</option>
                            <option>Learning Disabilities & Autism Mix</option>
                            <option>Complex Associated Mental Health</option>
                          </select>
                        </div>

                        <div className="space-y-1">
                          <label className="font-bold text-slate-700 block">Required Ratios</label>
                          <select
                            value={referralForm.requiredRatios}
                            onChange={(e) => setReferralForm({ ...referralForm, requiredRatios: e.target.value })}
                            className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-805 font-medium"
                          >
                            <option>1:1 Support Day & night</option>
                            <option>1:1 Day, Shared Night</option>
                            <option>2:1 Staffing Capabilities Day</option>
                            <option>Shared Support Framework</option>
                          </select>
                        </div>

                        <div className="space-y-1">
                          <label className="font-bold text-slate-700 block">Funding Status</label>
                          <select
                            value={referralForm.fundingStatus}
                            onChange={(e) => setReferralForm({ ...referralForm, fundingStatus: e.target.value })}
                            className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-805 font-medium"
                          >
                            <option>Secured</option>
                            <option>Awaiting Assessment Panel</option>
                            <option>Joint Funding (Health/SocialCare)</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="font-bold text-slate-700 block">Behavioral details or high-priority risks to manage</label>
                        <textarea
                          rows={3}
                          placeholder="Please summarize complex requirements, physical environments triggers, sensory schedules, or past placement history details..."
                          value={referralForm.riskDetails}
                          onChange={(e) => setReferralForm({ ...referralForm, riskDetails: e.target.value })}
                          className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-850"
                        />
                      </div>

                      {formError && (
                        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium animate-shake">
                          ⚠️ {formError}
                        </div>
                      )}

                      <button
                        type="submit"
                        className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl flex items-center justify-center space-x-2 transition shadow-md shadow-sky-100"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Secure Referral Dossier</span>
                      </button>

                    </form>
                  )}
                </>
              ) : (
                <>
                  {contactFeedback ? (
                    <div className="bg-emerald-100/50 border border-emerald-250 p-8 rounded-2xl text-center space-y-4 animate-scaleUp">
                      <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-905">Inquiry Submitted</h3>
                      <p className="text-slate-650 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                        Dear <strong>{generalForm.name}</strong>, thank you for writing to us. We understand family placement searches require deep consultation. Salman Muhammad or Boston Murray will reach out to you within 24 working hours.
                      </p>
                      <button
                        onClick={() => { setContactFeedback(false); setGeneralForm({ name: "", email: "", phone: "", relation: "Family Member / Guardian", message: "" }); }}
                        className="text-xs text-sky-700 hover:underline font-bold"
                      >
                        Write another family inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleGeneralSubmit} className="space-y-6 font-sans text-xs text-slate-800">
                      <div>
                        <h3 className="text-base font-bold text-slate-900">General & Family Consultation Inquiry</h3>
                        <p className="text-slate-500 text-[11px] mt-1">If you have general inquiries about 6 Flags House layouts or available specialist placements.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-bold text-slate-700 block">Your Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Arthur Pendelton"
                            value={generalForm.name}
                            onChange={(e) => setGeneralForm({ ...generalForm, name: e.target.value })}
                            className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-805"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-bold text-slate-700 block">Your Relationship</label>
                          <select
                            value={generalForm.relation}
                            onChange={(e) => setGeneralForm({ ...generalForm, relation: e.target.value })}
                            className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-805 font-medium"
                          >
                            <option>Family Member / Guardian</option>
                            <option>Potential Placement Broker</option>
                            <option>Care Candidate / Student Nurse</option>
                            <option>General UK Citizen inquiry</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-bold text-slate-700 block">Contact Email *</label>
                          <input
                            type="email"
                            required
                            placeholder="e.g. arthur@example.com"
                            value={generalForm.email}
                            onChange={(e) => setGeneralForm({ ...generalForm, email: e.target.value })}
                            className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-805"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-bold text-slate-700 block">Phone Number</label>
                          <input
                            type="tel"
                            placeholder="e.g. +44 7900 123456"
                            value={generalForm.phone}
                            onChange={(e) => setGeneralForm({ ...generalForm, phone: e.target.value })}
                            className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-805"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="font-bold text-slate-700 block">Your Consultation Message *</label>
                        <textarea
                          rows={4}
                          required
                          placeholder="How can PRO Care Homes help you? Tell us about your relative's preferences, goals, and desired living arrangements..."
                          value={generalForm.message}
                          onChange={(e) => setGeneralForm({ ...generalForm, message: e.target.value })}
                          className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-850"
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
                        <HeartHandshake className="w-4.5 h-4.5" />
                        <span>Submit Secure Consultation request</span>
                      </button>

                    </form>
                  )}
                </>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  </div>
);
}
