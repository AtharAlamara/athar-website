import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { LocaleLink as Link } from '@/lib/LocaleLink';
import GlobalHeader from '../Components/GlobalHeader';
import SiteFooter from '../Components/SiteFooter';
import PageWrapper from '../Components/PageWrapper';
import ScrollToTop from '../Components/ScrollToTop';
import { supabase } from '../lib/supabaseClient';

function CareerOpportunities() {
  const headlineRef = useRef<HTMLDivElement | null>(null);
  const introTextRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);
  const mobileHeadlineRef = useRef<HTMLDivElement | null>(null);
  const welcomeRef = useRef<HTMLDivElement | null>(null);

  // locale from path
  const { pathname } = useLocation();
  const locale = pathname.startsWith('/sa/') ? 'ar' : 'en';

  // translations from Supabase (CareersPage)
  const [texts, setTexts] = useState<Record<string, string>>({});
  useEffect(() => {
    let cancelled = false;
    supabase
      .from('CareersPage')
      .select('name,texts')
      .eq('locale', locale)
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) {
          console.error('CareersPage fetch error:', error);
          setTexts({});
          return;
        }
        const map: Record<string, string> = {};
        (data || []).forEach((row: any) => { map[row.name] = row.texts; });
        setTexts(map);
      });
    return () => { cancelled = true; };
  }, [locale]);

  // simple resolver for "{key}" placeholders (kept for parity with other pages)
  const t = (maybeKey: string, fallback?: string) => {
    const m = typeof maybeKey === 'string' ? maybeKey.match(/^\{(.+)\}$/) : null;
    if (m) return texts[m[1]] ?? (fallback ?? maybeKey);
    return texts[maybeKey] ?? fallback ?? maybeKey ?? '';
  };

  // State for "Other" position
  const [selectedPosition, setSelectedPosition] = useState('');

  // Animation observer
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    };
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.2 });
    [headlineRef, introTextRef, formRef, mobileHeadlineRef, welcomeRef]
      .forEach(ref => ref.current && observer.observe(ref.current));
    return () => observer.disconnect();
  }, []);

  const inputStyle = "w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#000000]";

  return (
    <>
      <Helmet>
        <title>{t('seo-careers-title', 'Athar Architecture | Careers & Opportunities')}</title>
        <meta name="description" content={t('seo-careers-description', 'Careers & Opportunities | Athar Alamara, Riyadh')} />
        <meta name="keywords" content={t('seo-careers-keywords', 'careers, jobs, architecture, interior design, Riyadh')} />
        <meta property="og:title" content={t('seo-careers-og-title', 'Athar Architecture | Careers & Opportunities')} />
        <meta property="og:description" content={t('seo-careers-og-description', 'Careers & Opportunities | Athar Alamara, Riyadh')} />
        <meta property="og:image" content={t('seo-careers-og-image', '/Athar Final.png')} />
        <meta property="og:type" content={t('seo-careers-og-type', 'website')} />
        <meta property="og:url" content={t('seo-careers-og-url', 'https://atharalamara.sa/careers')} />
        <meta name="twitter:card" content={t('seo-careers-twitter-card', 'summary_large_image')} />
        <meta name="twitter:title" content={t('seo-careers-twitter-title', 'Athar Architecture | Careers & Opportunities')} />
        <meta name="twitter:description" content={t('seo-careers-twitter-description', 'Careers & Opportunities | Athar Alamara, Riyadh')} />
        <meta name="twitter:image" content={t('seo-careers-twitter-image', '/Athar Final.png')} />
      </Helmet>
      <Helmet>
        <title>{t('seo-careers-title', 'Athar Architecture | Careers & Opportunities')}</title>
        <meta name="description" content={t('seo-careers-description', 'Careers & Opportunities | Athar Alamara, Riyadh')} />
        <meta name="keywords" content={t('seo-careers-keywords', 'careers, jobs, architecture, interior design, Riyadh')} />
      </Helmet>

      <ScrollToTop />
      <GlobalHeader />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Desktop video */}
        <div className="hidden md:block absolute inset-0">
          <iframe
            src="https://customer-2s48kq65j4o8hpc0.cloudflarestream.com/dde6289db8c0b61ac675763bc54575d8/iframe?autoplay=1&muted=1&loop=1"
            className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] -translate-x-1/2 -translate-y-1/2 object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Athar Careers Video"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Desktop title */}
        <div className="hidden md:block absolute bottom-6 left-10 z-10">
          <h1
            className="text-4xl font-medium text-white tracking-widest"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            {t('careers-label', 'Careers')}
          </h1>
        </div>

        {/* Mobile video */}
        <div className="block md:hidden absolute inset-0">
          <iframe
            src="https://customer-2s48kq65j4o8hpc0.cloudflarestream.com/dde6289db8c0b61ac675763bc54575d8/iframe?autoplay=1&muted=1&loop=1"
            className="absolute top-1/2 left-1/2 w-[350vw] h-[350vh] -translate-x-1/2 -translate-y-1/2 object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Athar Careers Video Mobile"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Mobile title */}
        <div className="block md:hidden absolute bottom-6 left-4 z-10">
          <h1
            className="text-4xl font-medium text-white tracking-widest"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            {t('careers-label', 'Careers')}
          </h1>
        </div>
      </section>

      <PageWrapper>
        <main className="relative z-10 bg-[#FFFFFF]">
          {/* Anim styles */}
          <style>
            {`
              .animate-element { opacity: 0; transition: all 1.2s ease-out; }
              .headline-animation { transform: translateY(-30px); }
              .slide-left { transform: translateX(-40px); }
              .slide-right { transform: translateX(40px); }
              .slide-up { transform: translateY(40px); }
              .visible { opacity: 1; transform: translate(0, 0); }
              .delay-500 { transition-delay: 0.5s; }
              .delay-1000 { transition-delay: 1s; }
            `}
          </style>

          {/* Content */}
          <div className="px-6 md:px-12 pt-20 pb-20">
            <div className="max-w-2xl mx-auto">

              {/* Welcome */}
              <section ref={welcomeRef} className="animate-element slide-up">
                <h2 className="text-xl mb-2 font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  {t('welcome-headline', 'Welcome to our careers and opportunities page.')}
                </h2>
                <p className="text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  {t('welcome-body', "We're excited to learn more about you and how you can contribute to our team. To get started, please submit your CV using the form below. This is your chance to showcase your skills, experience, and achievements that make you the perfect fit for our team. Fill in the form below and we will get back to you as soon as possible.")}
                </p>
              </section>

              <div className="pt-20" />

              {/* Form */}
              <section>
                <div ref={formRef} className="animate-element slide-up">
                  <h2 className="text-xl mb-2 font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    {t('form-headline', 'Submit your CV')}
                  </h2>

                  <form
                    action="https://formsubmit.co/hr@atharalamara.sa"
                    method="POST"
                    encType="multipart/form-data"
                    className="space-y-6"
                  >
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_subject" value="New Career Application - Athar Architecture" />
                    <input type="hidden" name="_next" value="https://atharalamara.sa/thank-you" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm text-[#000000] mb-2" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 200 }}>
                          {t('first-name-label', 'First Name *')}
                        </label>
                        <input type="text" id="firstName" name="firstName" required className={inputStyle} />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm text-[#000000] mb-2" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 200 }}>
                          {t('last-name-label', 'Last Name *')}
                        </label>
                        <input type="text" id="lastName" name="lastName" required className={inputStyle} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm text-[#000000] mb-2" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 200 }}>
                        {t('email-label', 'Email *')}
                      </label>
                      <input type="email" id="email" name="email" required className={inputStyle} />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm text-[#000000] mb-2" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 200 }}>
                        {t('phone-label', 'Phone Number *')}
                      </label>
                      <input type="tel" id="phone" name="phone" required className={inputStyle} />
                    </div>

                    <div>
                      <label className="block text-sm text-[#000000] mb-2" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 200 }}>
                        {t('position-label', 'Position *')}
                      </label>
                      <div className="space-y-2">
                        {[
                          { key: 'position-architect', value: 'Architect' },
                          { key: 'position-interior', value: 'Interior Designer' },
                          { key: 'position-3d', value: '3D Visualizer' },
                          { key: 'position-trainee', value: 'Trainee' },
                          { key: 'position-other', value: 'Other' },
                        ].map(({ key, value }) => (
                          <div key={key} className="flex items-center">
                            <input
                              type="radio"
                              id={key}
                              name="position"
                              value={t(key, value)}
                              required
                              onChange={(e) => setSelectedPosition(e.target.value)}
                              className="mr-2"
                            />
                            <label htmlFor={key} className="text-sm text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 200 }}>
                              {t(key, value)}
                            </label>
                          </div>
                        ))}
                      </div>

                      {selectedPosition === t('position-other', 'Other') && (
                        <div className="mt-2">
                          <input
                            type="text"
                            name="otherPosition"
                            placeholder={t('position-other-placeholder', 'If Other, please specify')}
                            maxLength={50}
                            className={inputStyle}
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="cv" className="block text-sm text-[#000000] mb-2" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial', sans-serif", fontWeight: 200 }}>
                        {t('upload-label', 'Upload CV (.doc, .docx, .pdf - Max 5MB) *')}
                      </label>
                      <input type="file" id="cv" name="cv" accept=".doc,.docx,.pdf" required className={inputStyle} />
                    </div>

                    <div className="flex items-start">
                      <input type="checkbox" id="terms" name="terms" required className="mt-1 mr-2" />
                      <label htmlFor="terms" className="text-sm text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 200 }}>
                        {t('terms-ack', 'I acknowledge that I have read and understand the ')}
                        <Link to="/terms" className="underline hover:text-[#292827]">{t('terms-label', 'Terms')}</Link>
                        {' '}{t('and-label', 'and')}{' '}
                        <Link to="/privacy" className="underline hover:text-[#292827]">{t('privacy-label', 'Privacy Notice')}</Link>.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-[#000000] text-white rounded-lg hover:bg-[#292827] transition-colors duration-300"
                      style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 200 }}
                    >
                      {t('submit-label', 'Submit CV')}
                    </button>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </main>

        <SiteFooter />
      </PageWrapper>
    </>
  );
}

export default CareerOpportunities;
