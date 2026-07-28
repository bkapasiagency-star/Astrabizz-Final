import React from 'react';
import { Mail, Phone, Award, GraduationCap, CheckCircle2, Linkedin, Briefcase, Compass, Target, ShieldCheck, Lightbulb, Handshake, Quote } from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const FOUNDER_PHOTO = '/founder-denish-dalal.jpg';

const CORE_VALUES = [
  {
    icon: Briefcase,
    title: 'Business First',
    description: 'We begin by understanding your business objectives before recommending technology solutions.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'We build long-term relationships through transparency, accountability, and ethical consulting.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace emerging technologies and innovative thinking to solve complex business challenges.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest standards in consulting, execution, and customer success.',
  },
  {
    icon: CheckCircle2,
    title: 'Client Success',
    description: 'Your success defines ours. Every engagement is focused on delivering measurable business outcomes.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    description: 'We believe transformation is an ongoing journey and remain committed beyond implementation.',
  },
];

export default function Founder() {
  const headerRef = useScrollReveal<HTMLDivElement>({ type: 'fade-up' });
  const portraitRef = useScrollReveal<HTMLDivElement>({ type: 'fade-left' });
  const bioRef = useScrollReveal<HTMLDivElement>({ type: 'fade-right', delay: 0.1 });
  const focusListRef = useStaggerReveal<HTMLDivElement>('[data-focus-item]', { type: 'fade-up', stagger: 0.05, start: 'top 90%' });
  const quoteRef = useScrollReveal<HTMLDivElement>({ type: 'scale-in' });
  const vmRef = useStaggerReveal<HTMLDivElement>('[data-vm-card]', { type: 'fade-up', stagger: 0.1 });
  const valuesRef = useStaggerReveal<HTMLDivElement>('[data-value-card]', { type: 'fade-up', stagger: 0.06 });
  const ethicRef = useScrollReveal<HTMLDivElement>({ type: 'fade-up' });

  return (
    <section id="founders-desk" className="py-24 bg-white relative overflow-hidden border-b border-slate-200/50 text-slate-800">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-[0.18em]">
            Founder's Desk
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Meet Our Founder
          </h2>
          <div className="h-1.5 w-16 bg-brand-primary rounded-full mx-auto" />
          <p className="text-slate-600 font-sans text-sm max-w-xl mx-auto leading-relaxed">
            12+ years partnering with manufacturing and regulated businesses to solve complex operational challenges through enterprise technology and strategic consulting.
          </p>
        </div>

        {/* Founder Premium Card Bento Layout */}
        <div className="max-w-4xl mx-auto bg-brand-light rounded-2xl border border-slate-200/60 overflow-hidden shadow-md flex flex-col md:flex-row">
          
          {/* Left Column: Portrait and brief contact badges */}
          <div ref={portraitRef} className="md:w-[350px] bg-slate-900 text-slate-100 p-8 flex flex-col items-center text-center shrink-0">
            <div className="space-y-4">
              {/* Profile Image with high-end border frame */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-tr from-brand-primary to-brand-gold rounded-full blur-sm opacity-60" />
                <img
                  src={FOUNDER_PHOTO}
                  alt="Denish Dalal"
                  referrerPolicy="no-referrer"
                  className="relative w-36 h-36 rounded-full object-cover border-4 border-slate-900 mx-auto"
                />
              </div>

              {/* Title & Role */}
              <div className="pt-2 text-center">
                <span className="block font-display text-xl font-bold text-white tracking-tight">
                  Denish Dalal
                </span>
                <span className="text-xs font-mono text-brand-primary font-bold uppercase tracking-widest mt-1 block">
                  Founder & Principal Consultant
                </span>
              </div>
            </div>

            {/* Quick Badges & Details */}
            <div className="w-full space-y-3 mt-8 pt-6 border-t border-slate-800 text-left">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <div className="p-1.5 bg-slate-800 rounded-lg text-brand-primary">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-[11px] text-slate-400">Experience</span>
                  <span className="font-bold text-white">12+ Years Enterprise Consulting</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-300">
                <div className="p-1.5 bg-slate-800 rounded-lg text-brand-gold">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-[11px] text-slate-400">Education</span>
                  <span className="font-bold text-white">B.Tech – Information Technology</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-300">
                <div className="p-1.5 bg-slate-800 rounded-lg text-brand-primary">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-[11px] text-slate-400">Email</span>
                  <a href="mailto:info@astrabizz.com" className="font-bold text-white hover:text-brand-primary transition-colors">
                    info@astrabizz.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-300">
                <div className="p-1.5 bg-slate-800 rounded-lg text-brand-gold">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-[11px] text-slate-400">Phone</span>
                  <a href="tel:+919687412080" className="font-bold text-white hover:text-brand-primary transition-colors">
                    +91 96874 12080
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn Mock Icon button */}
            <div className="mt-auto pt-4 w-full border-t border-slate-800 text-slate-400 text-[11px] font-mono flex items-center justify-between">
              <span>Verified Principal</span>
              <a
                href="https://www.linkedin.com/in/denishdalal/"
                target="_blank"
                rel="noreferrer"
                className="text-brand-primary hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Bio details & highlights */}
          <div ref={bioRef} className="flex-1 p-8 text-left space-y-6 flex flex-col bg-white">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-brand-dark uppercase tracking-wider block">
                Professional Profile
              </span>
              <p className="text-slate-600 font-sans text-sm leading-relaxed">
                With over 12 years of experience in ERP, CRM, Artificial Intelligence (AI), Business Intelligence, and Digital Transformation, Denish Dalal has partnered with manufacturing and regulated businesses to solve complex operational challenges through enterprise technology and strategic consulting.
              </p>
              <p className="text-slate-600 font-sans text-sm leading-relaxed">
                His expertise spans business process consulting, ERP and CRM strategy, enterprise integrations, AI adoption, and Business Intelligence, helping organizations improve operational efficiency, strengthen decision-making, and achieve sustainable business growth.
              </p>
              <p className="text-slate-600 font-sans text-sm leading-relaxed">
                Before founding Astrabizz Consultancy, Denish gained extensive experience delivering enterprise solutions across diverse industries. Working closely with business leaders, he recognized that many digital transformation initiatives fail because technology is often implemented without fully understanding how businesses operate.
              </p>
              <p className="text-slate-600 font-sans text-sm leading-relaxed">
                This realization led to the creation of Astrabizz Consultancy—a consulting firm built on the belief that technology should enable business, not dictate it. Today, he partners with organizations to align business strategy, processes, people, and enterprise technology, ensuring every transformation delivers measurable business value and long-term success.
              </p>
            </div>

            {/* Key Expertise highlights checklist */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-brand-dark uppercase tracking-wider block">
                Practice Focus Areas
              </span>
              <div ref={focusListRef} className="grid sm:grid-cols-2 gap-2.5">
                {[
                  'Business Transformation Consulting',
                  'Enterprise Technology Strategy',
                  'ERP & CRM Consulting',
                  'Digital Transformation',
                  'Artificial Intelligence (AI) & Intelligent Automation',
                  'Business Intelligence & Data Analytics',
                  'Enterprise Integrations',
                  'Business Process Optimization'
                ].map((spec, i) => (
                  <div key={i} data-focus-item className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                    <span className="font-semibold leading-none">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Founder's Philosophy */}
        <div className="max-w-3xl mx-auto mt-16 space-y-4 text-left">
          <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-[0.18em] block">
            Founder's Philosophy
          </span>
          <p className="text-slate-600 font-sans text-sm leading-relaxed">
            At Astrabizz, we believe that successful digital transformation begins with understanding the business—not the technology. Every organization is unique, with its own vision, processes, people, and competitive strengths. Technology should never force businesses to change what already makes them successful.
          </p>
          <p className="text-slate-600 font-sans text-sm leading-relaxed">
            Our approach is simple: <span className="font-semibold text-slate-800">understand the business first, then align technology to support it.</span> By combining business consulting with enterprise technology, we help organizations improve operational efficiency, strengthen decision-making, and achieve sustainable growth through practical, scalable, and future-ready solutions.
          </p>
        </div>

        {/* Professional Quotation */}
        <div ref={quoteRef} className="max-w-3xl mx-auto mt-10 text-center relative">
          <Quote className="w-8 h-8 text-brand-primary/25 mx-auto mb-4" />
          <p className="font-display text-xl sm:text-2xl font-semibold text-slate-800 leading-snug">
            "Technology should adapt to your business—not the other way around. Every business is built
            on unique processes, people, and experience. Our role is to align technology with that
            foundation, helping organizations achieve sustainable growth without disrupting what already
            works."
          </p>
          <span className="block mt-5 text-xs font-mono font-bold text-brand-dark uppercase tracking-widest">
            — Denish Dalal, Founder & Principal Consultant
          </span>
        </div>

        {/* Vision & Mission */}
        <div ref={vmRef} className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-6">
          <div data-vm-card className="card-lift p-7 rounded-2xl bg-brand-light border border-slate-200/60 text-left">
            <div className="p-3 bg-white rounded-xl text-brand-primary shadow-sm w-fit mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <span className="font-display text-lg font-bold text-slate-900 block mb-2">Our Vision</span>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              To become a globally trusted consulting partner for business transformation, helping
              organizations unlock sustainable growth through enterprise technology, innovation, and
              operational excellence.
            </p>
          </div>

          <div data-vm-card className="card-lift p-7 rounded-2xl bg-brand-light border border-slate-200/60 text-left">
            <div className="p-3 bg-white rounded-xl text-brand-gold shadow-sm w-fit mb-4">
              <Target className="w-5 h-5" />
            </div>
            <span className="font-display text-lg font-bold text-slate-900 block mb-2">Our Mission</span>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              To help organizations transform the way they operate by aligning business strategy,
              processes, people, and enterprise technology—delivering measurable outcomes and long-term
              business value.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-[0.18em]">
              What Guides Us
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Core Values
            </h3>
          </div>

          <div ref={valuesRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORE_VALUES.map((val) => {
              const IconComp = val.icon;
              return (
                <div
                  key={val.title}
                  data-value-card
                  className="group relative p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm text-left overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-brand-primary/40"
                >
                  {/* Smooth gradient wash on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/[0.04] via-transparent to-brand-gold/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative p-2.5 bg-emerald-50 text-brand-primary rounded-xl w-fit mb-4 transition-transform duration-500 ease-out group-hover:scale-110">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="relative font-display font-bold text-sm text-slate-800 block mb-1.5">{val.title}</span>
                  <p className="relative text-xs text-slate-500 leading-relaxed font-sans">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Work Ethic */}
        <div ref={ethicRef} className="max-w-5xl mx-auto mt-16 p-8 rounded-2xl bg-slate-900 text-slate-100 relative overflow-hidden">
          <div className="noise-overlay" />
          <div className="relative flex flex-col sm:flex-row items-start gap-5">
            <div className="p-3 bg-brand-primary/15 text-brand-primary rounded-xl shrink-0">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider block mb-2">
                Work Ethic
              </span>
              <p className="text-sm text-slate-300 leading-relaxed font-sans max-w-3xl">
                Denish still walks the shop floor before he opens a laptop. Every engagement starts with
                direct observation, not a template questionnaire — because the difference between a system
                that gets adopted and one that gets abandoned usually shows up in details a form can't
                capture. He stays personally involved from the first scoping call through go-live and the
                months of support that follow, and he holds the same standard for every consultant on the
                Astrabizz team: show up, understand the work, then build.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
