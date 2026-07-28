import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import Founder from './components/Founder';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Careers from './components/Careers';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Preloader from './components/Preloader';
import SmoothScrollProvider from './components/SmoothScrollProvider';
import CustomCursor from './components/CustomCursor';
import { usePath } from './lib/router';
import { ScrollTrigger } from './lib/gsap';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const path = usePath();
  const isCareers = path.replace(/\/+$/, '') === '/careers';

  // Persistent elements like Footer never unmount across route changes, so their
  // scroll-triggered reveals are cached against the previous page's layout height.
  // Refresh after the new route's content has painted so triggers recalculate.
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [path]);

  return (
    <>
      <Preloader onComplete={() => setLoaded(true)} />
      <CustomCursor />
      <SmoothScrollProvider>
        <div className="min-h-screen bg-white dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-100 antialiased selection:bg-brand-primary/20 selection:text-brand-dark dark:selection:bg-brand-primary/30 dark:selection:text-white transition-colors duration-300">
          {/* Sticky header bar and navigation */}
          <Navbar />

          {isCareers ? (
            <main>
              {/* Careers page: job listings + featured leadership opportunity */}
              <Careers />
            </main>
          ) : (
            <main>
              {/* Hero Section featuring the orbiting-systems signature visual */}
              <Hero />

              {/* Dynamic statistics and numeric counters */}
              <TrustIndicators />

              {/* Narrative bio, why digital transformation matters and interactive infographic comparison slider */}
              <About />

              {/* Founder's Desk: bio, quotation, vision, mission, core values, work ethic */}
              <Founder />

              {/* Grid of core consulting practices complete with detailed overlay inquiry modals */}
              <Services />

              {/* Technology partners and full solutions checklist */}
              <TechStack />

              {/* Mapped sector solutions across 6 core industries */}
              <Industries />

              {/* Competitive advantages bento grid and interactive 6-step process timeline */}
              <WhyChooseUs />

              {/* High-contrast partner testimonial carousel */}
              <Testimonials />

              {/* BUTTERY smooth FAQ accordion */}
              <FAQ />

              {/* Elegant Consultation booking form and direct corporate business card indicators */}
              <Contact />
            </main>
          )}

          {/* Large structured corporate footer with social sitemaps and legal disclosures */}
          <Footer />

          {/* Floating WhatsApp quick-contact button, wired to +91 96874 12080 */}
          <WhatsAppButton />
        </div>
      </SmoothScrollProvider>
    </>
  );
}

