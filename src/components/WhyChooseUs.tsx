import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ChevronDown, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import FloatingShapes from './FloatingShapes';

const WHY_ORGANIZATIONS_CHOOSE = [
  'Business-First Consulting Approach',
  'Technology-Neutral Advisory',
  'Enterprise ERP & CRM Expertise',
  'AI-Driven Business Solutions',
  'Practical & Scalable Implementations',
  'Measurable Business Outcomes',
  'Long-Term Strategic Partnership',
];

export default function WhyChooseUs() {
  const [expandedStep, setExpandedStep] = useState<string | null>('01');
  const headerRef = useStaggerReveal<HTMLDivElement>('[data-edge-item]', { type: 'fade-up', stagger: 0.12 });
  const chooseRef = useStaggerReveal<HTMLDivElement>('[data-choose-item]', { type: 'fade-up', stagger: 0.06 });
  const processTextRef = useScrollReveal<HTMLDivElement>({ type: 'fade-right' });

  const toggleStep = (step: string) => {
    setExpandedStep((prev) => (prev === step ? null : step));
  };

  const activeIndex = Math.max(0, PROCESS_STEPS.findIndex((s) => s.step === expandedStep));
  const progressPct = PROCESS_STEPS.length > 1 ? (activeIndex / (PROCESS_STEPS.length - 1)) * 100 : 0;

  return (
    <section id="why-choose-us" className="py-24 bg-[#F7F8FA] dark:bg-slate-950 relative overflow-hidden border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <FloatingShapes variant="mixed" />

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Our Edge Header */}
        <div className="mb-24 lg:mb-32">
          <div ref={headerRef} className="max-w-3xl space-y-6">
            <span
              data-edge-item
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-primary uppercase tracking-[0.18em] bg-brand-primary/10 border border-brand-primary/20 rounded-full px-3 py-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Our Edge
            </span>
            <h2
              data-edge-item
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]"
            >
              Business-First. Technology-Driven.{' '}
              <span className="bg-gradient-to-r from-brand-primary via-brand-primary to-brand-gold bg-clip-text text-transparent">
                Results-Focused.
              </span>
            </h2>
            <div data-edge-item className="h-1.5 w-20 bg-gradient-to-r from-brand-primary to-brand-gold rounded-full" />
            <p
              data-edge-item
              className="text-slate-600 dark:text-slate-300 font-sans text-base max-w-xl leading-relaxed"
            >
              We combine business consulting, process expertise, and enterprise technology to deliver practical, scalable solutions that streamline operations, improve efficiency, and drive measurable business outcomes.
            </p>
          </div>

          {/* Why Organizations Choose Astrabizz */}
          <div className="mt-12">
            <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-[0.18em] block mb-6">
              Why Organizations Choose Astrabizz
            </span>
            <div ref={chooseRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {WHY_ORGANIZATIONS_CHOOSE.map((item) => (
                <div
                  key={item}
                  data-choose-item
                  className="group flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 hover:-translate-y-1 hover:shadow-lg hover:border-brand-primary/40 transition-all duration-300"
                >
                  <span className="mt-0.5 p-1.5 rounded-lg bg-brand-primary/10 text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mapped Process Section */}
        <div className="pt-16 border-t border-slate-200/60 dark:border-slate-800 grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Process Text Detail */}
          <div ref={processTextRef} className="lg:col-span-5 space-y-6 text-left lg:sticky lg:top-28">
            <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-[0.18em]">
              The Execution Blueprint
            </span>
            <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Our Consulting Methodology
            </h3>
            <span className="block -mt-3 text-xs font-mono font-bold uppercase tracking-[0.2em] text-brand-primary">
              Discover. Analyze. Recommend. Implement. Train. Optimize.
            </span>
            <p className="text-slate-600 dark:text-slate-300 font-sans text-sm leading-relaxed">
              Every successful transformation starts with a structured approach. Our proven six-phase methodology aligns business strategy, processes, and technology to minimize implementation risks, accelerate user adoption, and deliver measurable business outcomes.
            </p>

            {/* Progress indicator tied to the active step */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                <span>Roadmap Progress</span>
                <span className="text-brand-primary">Step {activeIndex + 1} of {PROCESS_STEPS.length}</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-brand-primary to-brand-gold"
                  animate={{ width: `${progressPct}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </div>
            </div>

            <div className="p-5 bg-brand-light dark:bg-slate-900 rounded-xl border border-slate-200/40 dark:border-slate-800 text-xs">
              <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">Interactive Timeline:</span>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                Click on any step of the blueprint on the right to examine specific sub-deliverables and operational milestones compiled by our consulting teams.
              </p>
            </div>
          </div>

          {/* Right Accordion-Style Timeline */}
          <div className="lg:col-span-7 relative space-y-3">
            {/* Connecting rail behind the step badges */}
            <div className="absolute left-[35px] top-6 bottom-6 w-px bg-slate-200 dark:bg-slate-800 -z-10" />

            {PROCESS_STEPS.map((stepData) => {
              const isExpanded = expandedStep === stepData.step;

              return (
                <div
                  key={stepData.step}
                  className={`border rounded-xl text-left cursor-pointer transition-colors duration-300 ${
                    isExpanded
                      ? 'bg-white dark:bg-slate-900 border-brand-primary dark:border-brand-primary shadow-md'
                      : 'bg-white/60 dark:bg-slate-900/40 border-slate-200/60 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleStep(stepData.step)}
                    data-cursor="hover"
                    className="w-full p-4 flex items-center justify-between font-sans text-slate-800 dark:text-slate-200 select-none cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      {/* Step Round Badge */}
                      <span className="relative shrink-0">
                        {isExpanded && (
                          <span className="absolute inset-0 rounded-full bg-brand-primary/30 animate-ping" />
                        )}
                        <span
                          className={`relative w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                            isExpanded
                              ? 'bg-brand-primary text-white shadow-sm scale-110'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                          }`}
                        >
                          {stepData.step}
                        </span>
                      </span>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 tracking-tight font-display">
                        {stepData.title}
                      </span>
                    </div>

                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-brand-primary' : ''}`}
                    />
                  </button>

                  {/* Progressive expanded content with height animation */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-14 pb-5 text-xs text-slate-600 dark:text-slate-300 space-y-3 border-t border-slate-100 dark:border-slate-800 pt-3">
                          <p className="leading-relaxed font-sans">
                            {stepData.description}
                          </p>
                          
                          {/* Substeps Pills Grid */}
                          <div className="space-y-2 pt-1">
                            <span className="text-[10px] font-mono font-bold text-brand-dark dark:text-brand-primary uppercase tracking-wider block">
                              Phase Deliverables:
                            </span>
                            <div className="grid grid-cols-2 gap-1.5">
                              {stepData.substeps.map((sub, sidx) => (
                                <motion.div
                                  key={sidx}
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: sidx * 0.04 }}
                                  className="p-1.5 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium flex items-center gap-2"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                                  <span className="text-[11px] truncate">{sub}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
