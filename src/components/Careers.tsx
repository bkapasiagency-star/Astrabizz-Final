import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  CheckCircle2,
  ArrowRight,
  X,
  Star,
  Rocket,
  BookOpen,
  TrendingUp,
  Handshake,
  Lightbulb,
  GraduationCap,
  Building2,
  Award,
  Send,
  Users,
  Workflow,
  Sparkles
} from 'lucide-react';
import { JOB_OPENINGS, WHY_JOIN_ASTRABIZZ, JobOpening } from '../data';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import { scrollToTarget } from '../lib/scroll';

const ROLE_ICON_MAP: Record<string, React.ComponentType<any>> = {
  'erp-consultant': Briefcase,
  'crm-consultant': Users,
  'business-process-consultant': Workflow,
  'founding-technology-partner': Rocket,
};

const WHY_JOIN_ICON_MAP: Record<string, React.ComponentType<any>> = {
  Rocket,
  BookOpen,
  TrendingUp,
  Handshake,
  Lightbulb,
};

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const headerRef = useScrollReveal<HTMLDivElement>({ type: 'fade-up' });
  const gridRef = useStaggerReveal<HTMLDivElement>('[data-job-card]', { type: 'fade-up', stagger: 0.08 });
  const featuredRef = useScrollReveal<HTMLDivElement>({ type: 'scale-in' });
  const whyRef = useStaggerReveal<HTMLDivElement>('[data-why-item]', { type: 'fade-up', stagger: 0.06 });

  const regularJobs = JOB_OPENINGS.filter((j) => !j.featured);
  const featuredJob = JOB_OPENINGS.find((j) => j.featured);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;
    setSubmitting(true);

    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('message', formData.message);
      payload.append('position', selectedJob.title);
      payload.append('_subject', `Job Application: ${selectedJob.title}`);

      const response = await fetch('https://formspree.io/f/xqergvzp', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      });

      if (response.ok) {
        setFormSubmitted(true);
      }
    } catch {
      // Keep the form visible on network error so the candidate can retry.
    } finally {
      setSubmitting(false);
    }
  };

  const closeModal = () => {
    setSelectedJob(null);
    setFormSubmitted(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero */}
      <section className="pt-40 pb-20 bg-[#F7F8FA] dark:bg-slate-900/40 border-b border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-primary/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-gold/10 rounded-full filter blur-3xl pointer-events-none" />

        <div ref={headerRef} className="max-w-4xl mx-auto px-6 text-center relative space-y-5">
          <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-[0.18em]">
            Careers at Astrabizz
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Build. Learn. Grow.
          </h1>
          <div className="h-1.5 w-16 bg-brand-primary rounded-full mx-auto" />
          <p className="text-slate-600 dark:text-slate-300 font-sans text-base max-w-2xl mx-auto leading-relaxed">
            Join Astrabizz Consultancy and help businesses transform through consulting, technology, and innovation.
            Work on real client projects, solve business challenges, and build a meaningful career.
          </p>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left max-w-2xl mb-12 space-y-4">
            <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-[0.18em]">
              Open Roles
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Current Openings
            </h2>
            <div className="h-1.5 w-16 bg-brand-primary rounded-full" />
          </div>

          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularJobs.map((job) => {
              const IconComp = ROLE_ICON_MAP[job.id] || Briefcase;
              return (
                <div
                  key={job.id}
                  data-job-card
                  className="card-lift group relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-sm flex flex-col justify-between overflow-hidden hover:shadow-xl hover:border-brand-primary/40 dark:hover:border-brand-primary/50 transition-all"
                >
                  <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary to-brand-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                  <div>
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 w-fit mb-5 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="block font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-dark dark:group-hover:text-brand-primary transition-colors">
                      {job.title}
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed font-sans">
                      {job.role}
                    </p>

                    <div className="mt-5 space-y-1.5">
                      {job.responsibilities.slice(0, 3).map((r, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedJob(job)}
                    data-cursor="hover"
                    className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-brand-primary group/btn cursor-pointer"
                  >
                    View Details & Apply
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Leadership Opportunity */}
      {featuredJob && (
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-left max-w-2xl mb-10 space-y-4">
              <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-[0.18em] flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> Leadership Opportunity
              </span>
            </div>

            <div
              ref={featuredRef}
              className="relative overflow-hidden rounded-3xl border-2 border-brand-gold bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 text-slate-100 shadow-2xl"
            >
              {/* Decorative glow */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-gold/20 rounded-full filter blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-primary/20 rounded-full filter blur-3xl pointer-events-none" />

              <div className="relative p-8 sm:p-10 grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-7 space-y-6 text-left">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-brand-gold text-slate-900 py-1 px-3 rounded-full">
                    <Sparkles className="w-3 h-3" /> Featured Opportunity
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {featuredJob.title}
                  </h3>
                  <p className="text-slate-300 font-sans text-sm leading-relaxed">
                    {featuredJob.role}
                  </p>

                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider block">What You'll Do</span>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {featuredJob.responsibilities.map((r, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedJob(featuredJob)}
                    data-cursor="hover"
                    className="btn-shimmer inline-flex items-center gap-2 bg-brand-gold hover:bg-amber-400 text-slate-900 font-bold text-sm py-3 px-6 rounded-full transition-colors duration-300 shadow-lg cursor-pointer mt-2"
                  >
                    Explore Partnership Opportunity
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="lg:col-span-5 space-y-4 relative z-10">
                  <div className="p-5 rounded-2xl bg-slate-900/70 border border-white/10 backdrop-blur-md space-y-3">
                    <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" /> What You'll Get
                    </span>
                    {featuredJob.perks?.map((p, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0 mt-1.5" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900/70 border border-white/10 backdrop-blur-md space-y-3">
                    <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-wider flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5" /> Who You Are
                    </span>
                    {featuredJob.whoYouAre.map((w, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 mt-1.5" />
                        <span>{w}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Join Astrabizz */}
      <section className="py-24 bg-[#F7F8FA] dark:bg-slate-900/40 border-y border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-[0.18em]">
            Culture
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-4 mb-4">
            Why Join Astrabizz?
          </h2>
          <div className="h-1.5 w-16 bg-brand-primary rounded-full mx-auto mb-12" />

          <div ref={whyRef} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {WHY_JOIN_ASTRABIZZ.map((item, i) => {
              const IconComp = WHY_JOIN_ICON_MAP[item.icon] || Rocket;
              return (
                <div
                  key={i}
                  data-why-item
                  className="card-lift p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-sm flex flex-col items-center text-center gap-3"
                >
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-brand-primary">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 font-display leading-snug">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Don't see your role CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-5">
          <Building2 className="w-8 h-8 text-brand-primary mx-auto" />
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Don't see the right role?
          </h3>
          <p className="text-slate-600 dark:text-slate-300 font-sans text-sm max-w-xl mx-auto leading-relaxed">
            We're always glad to hear from people who care about business-first, technology-driven consulting.
            Send us your profile and we'll reach out when a matching opportunity opens up.
          </p>
          <button
            onClick={() => scrollToTarget('#footer-main')}
            data-cursor="hover"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-dark text-white font-semibold text-sm py-3 px-6 rounded-full transition-colors duration-300 shadow-md cursor-pointer"
          >
            <Send className="w-4 h-4" />
            Get in Touch
          </button>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-slate-950/70 z-50 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 top-[6%] bottom-[6%] md:w-[720px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl z-50 overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col"
            >
              <div className="p-6 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center shrink-0 text-left">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-brand-primary/10 text-brand-primary">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-base font-bold font-display text-slate-900 dark:text-white">{selectedJob.title}</span>
                    <span className="block text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold mt-0.5">
                      {selectedJob.featured ? 'Leadership Opportunity' : 'Current Opening'}
                    </span>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6 text-left">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-brand-dark dark:text-brand-primary uppercase tracking-wide">Your Role</span>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">{selectedJob.role}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-brand-dark dark:text-brand-primary uppercase tracking-wide block">What You'll Do</span>
                    <div className="space-y-1.5">
                      {selectedJob.responsibilities.map((r, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-brand-dark dark:text-brand-primary uppercase tracking-wide block">Who You Are</span>
                    <div className="space-y-1.5">
                      {selectedJob.whoYouAre.map((w, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                          <span>{w}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-brand-dark dark:text-brand-primary uppercase tracking-wide block">Qualification</span>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedJob.qualifications.map((q, i) => (
                      <div key={i} className="flex items-start gap-2 p-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-750 rounded-xl text-xs text-slate-700 dark:text-slate-200 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 mt-1.5" />
                        <span>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedJob.perks && (
                  <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-slate-800 dark:text-slate-200 space-y-2">
                    <span className="text-xs font-bold text-amber-800 dark:text-amber-400 flex items-center gap-1.5 font-display">
                      <Award className="w-4 h-4" /> What You'll Get:
                    </span>
                    <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-300 list-disc list-inside font-medium">
                      {selectedJob.perks.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Apply Form */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wide block mb-3">
                    Apply for this Role
                  </span>

                  {formSubmitted ? (
                    <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 text-emerald-800 dark:text-emerald-400 text-center text-xs font-medium">
                      ✔ Thank you for applying. Our team will review your profile and get back to you shortly.
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs w-full focus:outline-none focus:border-brand-primary bg-slate-50 dark:bg-slate-800 dark:text-white"
                        />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email"
                          className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs w-full focus:outline-none focus:border-brand-primary bg-slate-50 dark:bg-slate-800 dark:text-white"
                        />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs w-full focus:outline-none focus:border-brand-primary bg-slate-50 dark:bg-slate-800 dark:text-white"
                      />
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us briefly about your experience, or paste a link to your resume/LinkedIn..."
                        className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs w-full focus:outline-none focus:border-brand-primary bg-slate-50 dark:bg-slate-800 dark:text-white"
                      />
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-brand-primary hover:bg-brand-dark text-white text-xs font-bold py-2.5 rounded-lg transition-colors shadow-sm cursor-pointer disabled:opacity-60"
                      >
                        {submitting ? 'Submitting...' : 'Submit Application'}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 text-center text-[10px] text-slate-400 dark:text-slate-500 shrink-0">
                Astrabizz Consultancy • Careers
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
