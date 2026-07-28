import React, { useState, useRef, useEffect } from 'react';
import { Shield, Sparkles, Network, Zap, RefreshCw, Layers, TrendingUp } from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import { gsap } from '../lib/gsap';
import StatCard from './StatCard';
import FloatingShapes from './FloatingShapes';

export default function About() {
  const textColRef = useScrollReveal<HTMLDivElement>({ type: 'fade-right' });
  const statsRef = useStaggerReveal<HTMLDivElement>('[data-stat-card]', { type: 'scale-in', stagger: 0.08 });
  const whyTextRef = useScrollReveal<HTMLDivElement>({ type: 'fade-right' });
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = dividerRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.9,
          ease: 'power3.out',
          transformOrigin: 'left center',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background vectors */}
      <FloatingShapes variant="mixed" />

      <div className="max-w-7xl mx-auto px-6">
        {/* About Section Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Textual Column */}
          <div ref={textColRef} className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-[0.18em]">
              Who We Are
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              About Astrabizz Consultancy
            </h2>
            <span className="block font-display text-sm font-bold text-brand-gold uppercase tracking-wide">
              Transforming Businesses Through Technology
            </span>
            <div ref={dividerRef} className="h-1.5 w-16 bg-brand-primary rounded-full" />

            <p className="text-slate-600 dark:text-slate-300 font-sans text-base leading-relaxed">
              Astrabizz Consultancy is a business and technology consulting firm specializing in ERP, CRM, Artificial Intelligence (AI), Business Intelligence, and Digital Transformation. We help organizations align business strategy, processes, people, and enterprise technology to improve operational efficiency, enable better decision-making, and achieve sustainable growth.
            </p>
            <p className="text-slate-800 dark:text-slate-200 font-display font-semibold text-lg leading-relaxed border-l-4 border-brand-gold pl-4 bg-brand-light/50 dark:bg-slate-900/50 py-3 rounded-r-xl">
              "We don't just implement software. We transform businesses."
            </p>
            <p className="text-slate-600 dark:text-slate-300 font-sans text-sm leading-relaxed">
              From technology advisory and business process optimization to enterprise implementation, integration, user adoption, and long-term support, we partner with organizations throughout their digital transformation journey—delivering practical solutions that create measurable business value.
            </p>
          </div>

          {/* Right Visual Stats Column */}
          <div ref={statsRef} className="lg:col-span-5 grid grid-cols-2 gap-4">
            <StatCard icon={Network} value={12} suffix="+ Years" label="Domain Experience" accent="primary" delayIndex={0} />
            <StatCard icon={Shield} value={100} suffix="% Solid" label="Compliance Rates" accent="gold" delayIndex={1} />
            <StatCard icon={Sparkles} value={60} suffix="%+" label="Manual Labour Drop" accent="primary" delayIndex={2} />
            <StatCard icon={Zap} value={2} suffix="-Min" label="Estimator Speeds" accent="primary" delayIndex={3} />
          </div>
        </div>

        {/* Why Digital Transformation Matters Section */}
        <div className="pt-16 border-t border-slate-100 dark:border-slate-800 grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Detail */}
          <div ref={whyTextRef} className="lg:col-span-12 space-y-6 text-left">
            <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-[0.18em]">
              Why It Matters
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Future-Ready Businesses Begin with Digital Transformation
            </h3>
            <p className="text-slate-600 dark:text-slate-300 font-sans text-sm leading-relaxed">
              Technology alone doesn't transform a business—the right strategy, processes, and people do.
            </p>
            <p className="text-slate-600 dark:text-slate-300 font-sans text-sm leading-relaxed">
              Many digital transformation initiatives struggle because technology is implemented without fully understanding how the business operates. At Astrabizz, we take a{' '}
              <span className="font-semibold text-slate-800 dark:text-slate-200">business-first and technology-neutral</span>{' '}
              approach, designing solutions that align with the way organizations create value.
            </p>
            <p className="text-slate-600 dark:text-slate-300 font-sans text-sm leading-relaxed">
              By bridging the gap between business operations and enterprise technology, we help organizations improve efficiency, increase visibility, strengthen decision-making, and build a foundation for long-term growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
