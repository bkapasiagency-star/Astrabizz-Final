import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Factory, Gem, Boxes, HardHat, Building2, Package, Pill, X, ArrowRight, AlertTriangle, Lightbulb } from 'lucide-react';
import { INDUSTRIES } from '../data';
import { Industry } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { OPEN_INDUSTRY_EVENT } from '../lib/eventBus';

const iconMap: Record<string, React.ComponentType<any>> = {
  Layers,
  Factory,
  Gem,
  Boxes,
  HardHat,
  Building2,
  Package,
  Pill
};

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const headerRef = useScrollReveal<HTMLDivElement>({ type: 'fade-up' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  // Let the Navbar's Industry mega menu open a specific sector's detail modal directly.
  useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      const ind = INDUSTRIES.find((s) => s.id === id);
      if (ind) setSelectedIndustry(ind);
    };
    window.addEventListener(OPEN_INDUSTRY_EVENT, handler);
    return () => window.removeEventListener(OPEN_INDUSTRY_EVENT, handler);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 4000);
  };

  return (
    <section id="industries" className="py-24 bg-white dark:bg-slate-950 relative border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-[0.18em]">
            Sectors We Empower
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineered For Industry Workflows
          </h2>
          <div className="h-1.5 w-16 bg-brand-primary rounded-full mx-auto" />
          <p className="text-slate-600 dark:text-slate-300 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Every business is unique. We do not believe in one-size-fits-all generic templates. Astrabizz has spent years mapping the precise operational challenges of the following core sectors.
          </p>
        </div>

        {/* Industries Grid (window-style cards, matching Practice Areas) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const IconComponent = iconMap[ind.icon] || Layers;

            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedIndustry(ind)}
                data-cursor="hover"
                className="card-lift group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 cursor-pointer flex flex-col justify-between shadow-sm overflow-hidden hover:shadow-xl hover:border-brand-primary/40 dark:hover:border-brand-primary/50"
              >
                {/* Animated top accent bar */}
                <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold to-brand-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />

                {/* Sector photo window */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: -18 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.55, delay: idx * 0.05 + 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute bottom-3 left-3"
                  >
                    <div className="p-2.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-brand-gold shadow-sm transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </motion.div>
                </div>

                <div className="p-6 pt-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title & Description */}
                    <span className="block font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-dark dark:group-hover:text-brand-primary transition-colors">
                      {ind.name}
                    </span>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed font-sans line-clamp-3">
                      {ind.description}
                    </p>
                  </div>

                  {/* Card Bottom / Footer Actions */}
                  <div className="relative pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-400 dark:text-slate-500">{ind.workflows.length} mapped workflows</span>
                    <span className="text-brand-primary flex items-center gap-1 group-hover:gap-1.5 transition-all">
                      View Sector Blueprint <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Immersive Glassmorphic Modal Detail View */}
      <AnimatePresence>
        {selectedIndustry && (
          <>
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndustry(null)}
              className="fixed inset-0 bg-slate-950/70 z-50 backdrop-blur-md"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 top-[10%] bottom-[10%] md:w-[720px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl z-50 overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col"
            >
              {/* Modal Top Header Banner */}
              <div className="relative h-40 shrink-0 overflow-hidden">
                <img
                  src={selectedIndustry.image}
                  alt={selectedIndustry.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

                <button
                  onClick={() => setSelectedIndustry(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3 text-left">
                  <div className="p-2 rounded-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-brand-gold shrink-0">
                    {(() => {
                      const Icon = iconMap[selectedIndustry.icon] || Layers;
                      return <Icon className="w-5 h-5" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-base font-bold font-display text-white">{selectedIndustry.name}</span>
                    <span className="block text-[10px] font-mono text-slate-200 uppercase tracking-wider font-bold mt-0.5">
                      Sector Blueprint
                    </span>
                  </div>
                </div>
              </div>

              {/* Scrollable Modal Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 text-left">
                {/* Full Description text */}
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-brand-dark dark:text-brand-primary uppercase tracking-wide">Overview</span>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {selectedIndustry.description}
                  </p>
                </div>

                {/* Mapped Workflows list */}
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-brand-dark dark:text-brand-primary uppercase tracking-wide block">
                    Mapped Workflows & Features
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedIndustry.workflows.map((wf, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-800 rounded-xl"
                      >
                        <span className="w-2 h-2 rounded-full bg-brand-gold" />
                        <span className="text-xs text-slate-700 dark:text-slate-200 font-semibold">{wf}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sector pain points + Astrabizz solution */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 text-slate-800 dark:text-slate-200 space-y-2">
                    <span className="text-xs font-bold text-rose-800 dark:text-rose-400 flex items-center gap-1.5 font-display">
                      <AlertTriangle className="w-4 h-4" /> Sector Pain Points
                    </span>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                      {selectedIndustry.challenges}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 text-slate-800 dark:text-slate-200 space-y-2">
                    <span className="text-xs font-bold text-brand-dark dark:text-brand-primary flex items-center gap-1.5 font-display">
                      <Lightbulb className="w-4 h-4" /> Astrabizz Solution
                    </span>
                    <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
                      {selectedIndustry.solution}
                    </p>
                  </div>
                </div>

                {/* Modular Enquiry form specific to this sector */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wide block mb-3">
                    Request a Sector Blueprint
                  </span>

                  {formSubmitted ? (
                    <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 text-emerald-800 dark:text-emerald-400 text-center text-xs font-medium">
                      ✔ Thank you for your inquiry. Founder Denish Dalal will contact you with details shortly.
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
                          placeholder="Your Corporate Email"
                          className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs w-full focus:outline-none focus:border-brand-primary bg-slate-50 dark:bg-slate-800 dark:text-white"
                        />
                      </div>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company Name"
                        className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs w-full focus:outline-none focus:border-brand-primary bg-slate-50 dark:bg-slate-800 dark:text-white"
                      />
                      <textarea
                        name="message"
                        required
                        rows={2}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={`Tell us about your specific ${selectedIndustry.name} challenges...`}
                        className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs w-full focus:outline-none focus:border-brand-primary bg-slate-50 dark:bg-slate-800 dark:text-white"
                      />
                      <button
                        type="submit"
                        className="w-full bg-brand-primary hover:bg-brand-dark text-white text-xs font-bold py-2.5 rounded-lg transition-colors shadow-sm cursor-pointer"
                      >
                        Submit Consultation Request
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Modal Static Footer */}
              <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center text-[10px] text-slate-400 dark:text-slate-500 shrink-0">
                Astrabizz Consultancy • Deep operational understanding of industrial challenges
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
