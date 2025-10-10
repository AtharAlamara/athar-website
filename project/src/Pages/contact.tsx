import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import GlobalHeader from '../Components/GlobalHeader';
import SiteFooter from '../Components/SiteFooter';
import PageWrapper from '../Components/PageWrapper';
import ScrollToTop from '../Components/ScrollToTop';
import { supabase } from '../lib/supabaseClient';
import { useLocation } from 'react-router-dom';

function ContactPage() {
  // ── locale & translations from Supabase (ContactPage table)
  const { pathname } = useLocation();
  const isAr = pathname.startsWith('/sa/');
  const locale = isAr ? 'ar' : 'en';

  const [texts, setTexts] = React.useState<Record<string, string>>({});

  useEffect(() => {
    let cancelled = false;
    supabase
      .from('ContactPage')
      .select('name,texts')
      .eq('locale', locale)
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) {
          console.error('ContactPage fetch error:', error);
          setTexts({});
          return;
        }
        const map: Record<string, string> = {};
        (data || []).forEach((row: any) => { map[row.name] = row.texts; });
        setTexts(map);
      });
    return () => { cancelled = true; };
  }, [locale]);

  // placeholder resolver: t('{key}', 'fallback')
  const t = (maybeKey: string, fallback?: string) => {
    const m = typeof maybeKey === 'string' ? maybeKey.match(/^\{(.+)\}$/) : null;
    if (m) return texts[m[1]] ?? (fallback ?? maybeKey);
    return maybeKey ?? fallback ?? '';
  };

  // animation refs
  const contactInfoRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mobileContactRef = useRef<HTMLDivElement | null>(null);
  const mobileMapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    };
    const observerOptions = { threshold: 0.2, rootMargin: '0px' };
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (contactInfoRef.current) observer.observe(contactInfoRef.current);
    if (mapRef.current) observer.observe(mapRef.current);
    if (mobileContactRef.current) observer.observe(mobileContactRef.current);
    if (mobileMapRef.current) observer.observe(mobileMapRef.current);

    return () => observer.disconnect();
  }, []);

  // locale-aware fallback URL for SEO
  const fallbackOgUrl = isAr
    ? 'https://atharalamara.sa/sa/contact'
    : 'https://atharalamara.sa/contact';

  return (
    <>
      <Helmet>
        <title>{t('{seo-contact-title}', 'Athar Architecture | Contact')}</title>
        <meta
          name="description"
          content={t('{seo-contact-description}', 'Contact Athar Architecture | Riyadh, Saudi Arabia.')}
        />
        <meta
          name="keywords"
          content={t('{seo-contact-keywords}', 'contact architecture Riyadh, interior design consultation Saudi Arabia')}
        />
        <meta property="og:title" content={t('{seo-contact-og-title}', 'Athar Architecture | Contact')} />
        <meta
          property="og:description"
          content={t('{seo-contact-og-description}', 'Contact Athar Architecture | Riyadh, Saudi Arabia.')}
        />
        <meta property="og:image" content={t('{seo-contact-og-image}', '/Athar Final.png')} />
        <meta property="og:type" content={t('{seo-contact-og-type}', 'website')} />
        <meta property="og:url" content={t('{seo-contact-og-url}', fallbackOgUrl)} />
        <meta name="twitter:card" content={t('{seo-contact-twitter-card}', 'summary_large_image')} />
        <meta name="twitter:title" content={t('{seo-contact-twitter-title}', 'Athar Architecture | Contact')} />
        <meta
          name="twitter:description"
          content={t('{seo-contact-twitter-description}', 'Contact Athar Architecture | Riyadh, Saudi Arabia.')}
        />
        <meta name="twitter:image" content={t('{seo-contact-twitter-image}', '/Athar Final.png')} />
      </Helmet>
      <Helmet>
        <title>{t('{seo-contact-title}', 'Athar Architecture | Contact')}</title>
        <meta
          name="description"
          content={t('{seo-contact-description}', 'Contact Athar Architecture | Riyadh, Saudi Arabia.')}
        />
        <meta
          name="keywords"
          content={t('{seo-contact-keywords}', 'contact architecture Riyadh, interior design consultation Saudi Arabia')}
        />
      </Helmet>

      <ScrollToTop />
      <GlobalHeader />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Desktop video */}
        <div className="hidden md:block absolute inset-0">
          <iframe
            src="https://customer-2s48kq65j4o8hpc0.cloudflarestream.com/96920a667691c0a8c9b72cc7eff7a502/iframe?autoplay=1&muted=1&loop=1"
            className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] -translate-x-1/2 -translate-y-1/2 object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Athar Contact Video"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Desktop title */}
        <div className="hidden md:block absolute bottom-6 left-10 z-10">
          <h1
            className="text-4xl font-medium text-white tracking-widest"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            {t('{contact-label}', 'Contact')}
          </h1>
        </div>

        {/* Mobile video */}
        <div className="block md:hidden absolute inset-0">
          <iframe
            src="https://customer-2s48kq65j4o8hpc0.cloudflarestream.com/96920a667691c0a8c9b72cc7eff7a502/iframe?autoplay=1&muted=1&loop=1"
            className="absolute top-1/2 left-1/2 w-[350vw] h-[350vh] -translate-x-1/2 -translate-y-1/2 object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Athar Contact Video Mobile"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Mobile title */}
        <div className="block md:hidden absolute bottom-6 left-4 z-10">
          <h1
            className="text-4xl font-medium text-white tracking-widest"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            {t('{contact-label}', 'Contact')}
          </h1>
        </div>
      </section>

      <PageWrapper>
        {/* Mobile Layout */}
        <main className="md:hidden bg-[#FFFFFF] text-[#000000] relative">
          <style>{`
            .animate-element { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
            .visible { opacity: 1; transform: translateY(0); }
            .delay-500 { transition-delay: 0.5s; }
            .delay-1000 { transition-delay: 1s; }
            .delay-1500 { transition-delay: 1.5s; }
          `}</style>

          <div className="px-6 md:px-12 pt-20 pb-20">
            <div ref={mobileContactRef} className="animate-element delay-1000">
              <div className="space-y-4" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                <div className="space-y-1">
                  {/* Phone */}
                  <div className="space-y-1">
                    <p className="font-light text-xl">{t('{phone-label}', 'Phone')}</p>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start gap-2">
                        <span className="text-[#000000] text-xl">•</span>
                        <a
                          href="https://wa.me/966550867366"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-thin hover:underline"
                        >
                          {t('{phone-1}', '+966 55 086 7366')}
                        </a>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#000000] text-xl">•</span>
                        <a
                          href="https://wa.me/966530740220"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-thin hover:underline"
                        >
                          {t('{phone-2}', '+966 53 074 0220')}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Emails */}
                  <div className="space-y-1">
                    <p className="font-light text-xl">{t('{emails-label}', 'Emails')}</p>
                    <div className="flex items-start gap-2">
                      <span className="text-[#000000] text-xl">•</span>
                      <a href={`mailto:${t('{email-1}', 'inquries@atharalamara.sa')}`} className="text-lg font-thin hover:underline">
                        {t('{email-1}', 'inquries@atharalamara.sa')}
                      </a>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="text-[#000000] text-xl">•</span>
                      <a href={`mailto:${t('{email-2}', 'hr@atharalamara.sa')}`} className="text-lg font-thin hover:underline">
                        {t('{email-2}', 'hr@atharalamara.sa')}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-1">
                    <p className="font-light text-xl">{t('{address-label}', 'Address')}</p>
                    <div className="flex items-start gap-2">
                      <span className="text-[#000000] text-xl">•</span>
                      <p className="text-lg font-thin">
                        {t('{studio-address}', 'Al Takhassusi St., Riyadh, KSA')}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="space-y-1">
                    <p className="font-light text-xl">{t('{hours-label}', 'Hours')}</p>
                    <div className="flex items-start gap-2">
                      <span className="text-[#000000] text-xl">•</span>
                      <p className="text-lg font-thin">
                        {t('{hours-value}', 'Sun–Thu, 9:00–17:00')}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div ref={mobileMapRef} className="animate-element delay-1500 mt-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.514167768248!2d46.66053517596105!3d24.709222378028294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee2f16a1c6709%3A0x6aa7ce59c063b9f5!2sAl%20Takhassousi%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sgr!4v1747400804755!5m2!1sen!2sgr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </main>

        {/* Desktop Layout */}
        <main className="hidden md:block bg-[#FFFFFF] text-[#000000] relative">
          <style>{`
            .animate-element { opacity: 0; transition: all 2s ease-out; }
            .headline-animation { transform: translateY(-30px); }
            .slide-left { transform: translateX(-40px); }
            .slide-right { transform: translateX(40px); }
            .visible { opacity: 1; transform: translate(0, 0); }
            .delay-500 { transition-delay: 0.5s; }
            .delay-1000 { transition-delay: 1s; }
          `}</style>

          <div className="px-6 md:px-12 pt-20 pb-20">
            <div className="max-w-7xl mx-auto grid grid-cols-2 gap-x-[4rem] items-center">
              <div ref={contactInfoRef} className="animate-element slide-left">
                <div className="space-y-4 mt-4" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  {/* Phone */}
                  <div className="space-y-1">
                    <p className="font-light text-xl">{t('{phone-label}', 'Phone')}</p>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start gap-2">
                        <span className="text-[#000000] text-xl">•</span>
                        <a
                          href="https://wa.me/966550867366"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-thin hover:underline"
                        >
                          {t('{phone-1}', '+966 55 086 7366')}
                        </a>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#000000] text-xl">•</span>
                        <a
                          href="https://wa.me/966530740220"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-thin hover:underline"
                        >
                          {t('{phone-2}', '+966 53 074 0220')}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Emails */}
                  <div className="space-y-1">
                    <p className="font-light text-xl">{t('{emails-label}', 'Emails')}</p>
                    <div className="flex items-start gap-2">
                      <span className="text-[#000000] text-xl">•</span>
                      <a href={`mailto:${t('{email-1}', 'inquries@atharalamara.sa')}`} className="text-lg font-thin hover:underline">
                        {t('{email-1}', 'inquries@atharalamara.sa')}
                      </a>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="text-[#000000] text-xl">•</span>
                      <a href={`mailto:${t('{email-2}', 'hr@atharalamara.sa')}`} className="text-lg font-thin hover:underline">
                        {t('{email-2}', 'hr@atharalamara.sa')}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-1">
                    <p className="font-light text-xl">{t('{address-label}', 'Address')}</p>
                    <div className="flex items-start gap-2">
                      <span className="text-[#000000] text-xl">•</span>
                      <p className="text-lg font-thin">
                        {t('{studio-address}', 'Al Takhassusi St., Riyadh, KSA')}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="space-y-1">
                    <p className="font-light text-xl">{t('{hours-label}', 'Hours')}</p>
                    <div className="flex items-start gap-2">
                      <span className="text-[#000000] text-xl">•</span>
                      <p className="text-lg font-thin">
                        {t('{hours-value}', 'Sun–Thu, 9:00–17:00')}
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <div ref={mapRef} className="animate-element slide-right">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.514167768248!2d46.66053517596105!3d24.709222378028294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee2f16a1c6709%3A0x6aa7ce59c063b9f5!2sAl%20Takhassousi%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sgr!4v1747400804755!5m2!1sen!2sgr"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </main>

        <SiteFooter />
      </PageWrapper>
    </>
  );
}

export default ContactPage;
