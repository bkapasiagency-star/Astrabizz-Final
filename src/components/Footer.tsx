import React from 'react';
import { Mail, Phone, Globe, MapPin, Linkedin, Twitter, Facebook, ExternalLink, HelpCircle } from 'lucide-react';
import Logo from './Logo';
import { scrollToTarget } from '../lib/scroll';
import { navigate } from '../lib/router';
import { useStaggerReveal } from '../hooks/useScrollReveal';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const gridRef = useStaggerReveal<HTMLDivElement>('[data-footer-col]', { type: 'fade-up', stagger: 0.08, start: 'top 95%' });

  const handleLinkClick = (id: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToTarget(`#${id}`), 60);
    } else {
      scrollToTarget(`#${id}`);
    }
  };

  const goToCareers = () => navigate('/careers');

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-16 text-left relative z-10 font-sans" id="footer-main">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Footer Top Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info */}
          <div data-footer-col className="lg:col-span-4 space-y-5">
            <Logo
              dark
              iconOnly={false}
              tagline
              className="items-center"
              taglineClassName="!text-xs !mt-1 !tracking-[0.25em] !text-center"
            />

            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
              <span className="text-slate-200 font-semibold">Transforming Business Through Technology.</span>{' '}
              ERP | CRM | AI | Business Intelligence | Enterprise Integrations | Digital Transformation. We help organizations select the right technology, optimize business processes, and implement enterprise solutions built to last.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-brand-primary hover:text-white transition-colors" aria-label="LinkedIn Profile">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-brand-primary hover:text-white transition-colors" aria-label="Twitter Profile">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-brand-primary hover:text-white transition-colors" aria-label="Facebook Page">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div data-footer-col className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
              Quick Links
            </span>
            <ul className="text-xs space-y-2.5 font-medium">
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-brand-primary transition-colors cursor-pointer text-left">
                  About Astrabizz
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('founders-desk')} className="hover:text-brand-primary transition-colors cursor-pointer text-left">
                  Founder's Desk
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('why-choose-us')} className="hover:text-brand-primary transition-colors cursor-pointer text-left">
                  Our Advantage
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('faq')} className="hover:text-brand-primary transition-colors cursor-pointer text-left">
                  FAQs Accordion
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-brand-primary transition-colors cursor-pointer text-left">
                  Contact Form
                </button>
              </li>
              <li>
                <button onClick={goToCareers} className="hover:text-brand-primary transition-colors cursor-pointer text-left">
                  Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Practices */}
          <div data-footer-col className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
              Core Practices
            </span>
            <ul className="text-xs space-y-2.5 font-medium text-slate-400">
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-brand-primary text-slate-400 text-left transition-colors cursor-pointer">
                  ERP Consulting & Implementation
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-brand-primary text-slate-400 text-left transition-colors cursor-pointer">
                  CRM Consulting & Implementation
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-brand-primary text-slate-400 text-left transition-colors cursor-pointer">
                  Business Process Consulting
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('technologies')} className="hover:text-brand-primary text-slate-400 text-left transition-colors cursor-pointer">
                  Business Intelligence & Data Analytics
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-brand-primary text-slate-400 text-left transition-colors cursor-pointer">
                  Inventory Visibility & Automation
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-brand-primary text-slate-400 text-left transition-colors cursor-pointer">
                  Enterprise Application Audit & Health Check
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Detail info */}
          <div data-footer-col className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
              Direct Contact
            </span>
            <ul className="text-xs space-y-3.5">
              <li className="flex items-center gap-2 text-slate-400">
                <Phone className="w-4 h-4 text-brand-primary shrink-0" />
                <a href="tel:+919687412080" className="font-mono hover:text-white transition-colors text-white font-bold">
                  +91 96874 12080
                </a>
              </li>
              
              <li className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-brand-primary shrink-0" />
                <a href="mailto:info@astrabizz.com" className="font-mono hover:text-white transition-colors text-white font-bold">
                  info@astrabizz.com
                </a>
              </li>

              <li className="flex items-center gap-2 text-slate-400">
                <Globe className="w-4 h-4 text-brand-primary shrink-0" />
                <a href="https://www.astrabizz.com" target="_blank" rel="noreferrer" className="font-mono hover:text-white transition-colors text-white font-bold">
                  www.astrabizz.com
                </a>
              </li>

              <li className="flex items-start gap-2 text-slate-400 leading-tight">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span>Gujarat, India • Active Remote Consulting</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright area */}
        <div className="pt-8 flex flex-col sm:flex-row gap-2 justify-center items-center text-[11px] text-slate-500 font-mono text-center">
          <span>
            © {currentYear} Astrabizz Consultancy. All Rights Reserved.
          </span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span>
            Designed & Developed By{' '}
            <a
              href="https://www.magolabs.in"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-brand-primary font-semibold transition-colors"
            >
              Mago Labs
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
}
