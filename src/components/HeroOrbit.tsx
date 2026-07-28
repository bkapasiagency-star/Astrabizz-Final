import React, { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';
import Logo from './Logo';
import { TECHNOLOGIES } from '../data';

// Short display labels for the orbit nodes (the full names run too long at this scale).
const SHORT_LABEL: Record<string, string> = {
  sap: 'SAP',
  erpnext: 'ERPNext',
  salesforce: 'Salesforce',
  zoho: 'Zoho',
  powerbi: 'Power BI',
  'ai-tech': 'AI',
};

// Evenly distribute the technology partner logos around the ring.
const NODES = TECHNOLOGIES.map((tech, i) => ({
  id: tech.id,
  label: SHORT_LABEL[tech.id] || tech.name,
  logo: tech.logo,
  angle: -90 + (360 / TECHNOLOGIES.length) * i,
}));

/**
 * A quiet, premium replacement for the old "fake live dashboard": a single
 * orbiting-systems diagram showing the actual technology partners Astrabizz
 * works with — SAP, ERPNext, Salesforce, Zoho, Power BI, and AI — revolving
 * around the Astrabizz brand core, the real thesis of the practice rendered
 * as a signature visual rather than invented metrics.
 */
export default function HeroOrbit() {
  const outerRingRef = useRef<HTMLDivElement>(null);
  const innerRingRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const outerTween = gsap.to(outerRingRef.current, {
      rotate: 360,
      duration: 48,
      repeat: -1,
      ease: 'none',
    });
    const innerTween = gsap.to(innerRingRef.current, {
      rotate: -360,
      duration: 30,
      repeat: -1,
      ease: 'none',
    });

    // Counter-rotate each node so its logo+label always stays upright.
    const nodeTweens = nodeRefs.current.map((node) =>
      node
        ? gsap.to(node, { rotate: -360, duration: 48, repeat: -1, ease: 'none' })
        : null
    );

    return () => {
      outerTween.kill();
      innerTween.kill();
      nodeTweens.forEach((t) => t?.kill());
    };
  }, []);

  return (
    <div className="relative w-full max-w-lg aspect-square mx-auto select-none" id="hero-orbit-visual">
      {/* Ambient glow */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-primary/15 via-transparent to-brand-gold/15 blur-2xl" />

      {/* Static dashed guide circles */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="176" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="1" strokeDasharray="2 6" />
        <circle cx="200" cy="200" r="118" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="1" strokeDasharray="2 6" />
      </svg>

      {/* Outer rotating ring carrying the technology partner logo nodes */}
      <div ref={outerRingRef} className="absolute inset-0">
        {NODES.map(({ id, label, logo, angle }, i) => {
          const rad = (angle * Math.PI) / 180;
          const radius = 176;
          const x = 200 + radius * Math.cos(rad);
          const y = 200 + radius * Math.sin(rad);
          return (
            <div
              key={id}
              ref={(el) => { nodeRefs.current[i] = el; }}
              className="absolute flex flex-col items-center gap-1.5"
              style={{ left: `${(x / 400) * 100}%`, top: `${(y / 400) * 100}%`, transform: 'translate(-50%, -50%)' }}
            >
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex items-center justify-center p-2.5">
                <img src={logo} alt={`${label} logo`} className="max-h-full max-w-full object-contain" />
              </div>
              <span className="text-[10px] font-mono font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Inner rotating ring: small orbiting accent dots */}
      <div ref={innerRingRef} className="absolute inset-0">
        <span className="absolute w-2 h-2 rounded-full bg-brand-gold" style={{ left: '50%', top: '5%', transform: 'translate(-50%, -50%)' }} />
        <span className="absolute w-1.5 h-1.5 rounded-full bg-brand-primary" style={{ left: '92%', top: '68%', transform: 'translate(-50%, -50%)' }} />
        <span className="absolute w-1.5 h-1.5 rounded-full bg-brand-gold/70" style={{ left: '12%', top: '72%', transform: 'translate(-50%, -50%)' }} />
      </div>

      {/* Center card: brand mark, enlarged so it reads as the core of the diagram */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[56%] aspect-square">
          {/* Breathing brand-color halo */}
          <div className="absolute -inset-5 rounded-full bg-gradient-to-tr from-brand-primary/35 via-brand-gold/25 to-brand-primary/35 blur-2xl animate-pulse-glow" />

          {/* Gradient ring border */}
          <div className="absolute -inset-[3px] rounded-full bg-gradient-to-tr from-brand-primary via-brand-gold to-brand-primary opacity-90" />

          {/* Glass core */}
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white via-brand-light to-white dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 shadow-[0_25px_70px_-18px_rgba(79,166,79,0.45)] ring-1 ring-inset ring-white/70 dark:ring-white/10 backdrop-blur-md flex items-center justify-center px-4">
            <div className="scale-[1.15]">
              <Logo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

