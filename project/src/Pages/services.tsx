import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { LocaleLink as Link } from '@/lib/LocaleLink';
import GlobalHeader from '../Components/GlobalHeader';
import SiteFooter from '../Components/SiteFooter';
import PageWrapper from '../Components/PageWrapper';
import { supabase } from '../lib/supabaseClient';

function ServicesPage() {
  // ---- locale + texts from Supabase (ServicesPage table) ----
  const { pathname } = useLocation();
  const locale = pathname.startsWith('/sa/') ? 'ar' : 'en';
  const [texts, setTexts] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    let cancelled = false;
    supabase
      .from('ServicesPage') // if your table is quoted as "ServicesPage", change to .from('ServicesPage')
      .select('name,texts')
      .eq('locale', locale)
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) {
          console.error('ServicesPage fetch error:', error);
          setTexts({});
          return;
        }
        const map: Record<string, string> = {};
        (data || []).forEach((row: any) => { map[row.name] = row.texts; });
        setTexts(map);
      });
    return () => { cancelled = true; };
  }, [locale]);

  // tiny resolver supporting "{key}" placeholders
  const t = (maybeKey: string, fallback?: string) => {
    const m = typeof maybeKey === 'string' ? maybeKey.match(/^\{(.+)\}$/) : null;
    if (m) return texts[m[1]] ?? (fallback ?? maybeKey);
    return maybeKey ?? fallback ?? '';
  };

  const services = [
    {
      id: 1,
      title: "{architecture}",
      imageUrl: "https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtZf8QmT1IwQ42fTitNUoEO7HnMs6muXZFWAgq",
      slug: "architecture"
    },
    {
      id: 2,
      title: "{interiordesign}",
      imageUrl: "https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtRfMgUIbasyJRoDmA4vpVjN1HYUn52CWOQPgq",
      slug: "interiordesign"
    },
    {
      id: 3,
      title: "{landscapedesign}",
      imageUrl: "https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtum7wCyEZPg9BSDseXGfwOamrp8LY37zxiHnQ",
      slug: "landscapedesign"
    },
    {
      id: 4,
      title: "{projectsupervision}",
      imageUrl: "https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtoGZE6UgQM4ObdcC3ln1UzqD9si0WALVgpZvr",
      slug: "projectsupervision"
    },
    {
      id: 5,
      title: "{designconsultations}", 
      imageUrl: "https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtQFLMqgKseYRaG4HqyPtcznBgDI6LvCrZ2wTx",
      slug: "designconsultations"
    },
    {
      id: 6,
      title: "{furnitureaccessories}",
      imageUrl: "https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtCXRhJpYUxyJWIcq1kSK9o6mvLgniXlMQZrpe",
      slug: "furnitureaccessories"
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('{seo-services-title}', 'Athar Architecture | Services')}</title>
        <meta name="description" content={t('{seo-services-description}', 'Comprehensive architecture and interior design services in Riyadh, Saudi Arabia. Architecture, interior design, landscape design, project supervision, and design consultations.')} />
        <meta name="keywords" content={t('{seo-services-keywords}', 'architecture services Riyadh, interior design services Saudi Arabia, landscape design, project supervision, design consultations, residential architecture, commercial design, villa design')} />
        <meta property="og:title" content={t('{seo-services-og-title}', 'Athar Architecture | Services')} />
        <meta property="og:description" content={t('{seo-services-og-description}', 'Comprehensive architecture and interior design services in Riyadh, Saudi Arabia')} />
        <meta property="og:image" content={t('{seo-services-og-image}', '/Athar Final.png')} />
        <meta property="og:type" content={t('{seo-services-og-type}', 'website')} />
        <meta property="og:url" content={t('{seo-services-og-url}', 'https://atharalamara.sa/services')} />
        <meta name="twitter:card" content={t('{seo-services-twitter-card}', 'summary_large_image')} />
        <meta name="twitter:title" content={t('{seo-services-twitter-title}', 'Athar Architecture | Services')} />
        <meta name="twitter:description" content={t('{seo-services-twitter-description}', 'Comprehensive architecture and interior design services in Riyadh, Saudi Arabia')} />
        <meta name="twitter:image" content={t('{seo-services-twitter-image}', '/Athar Final.png')} />
      </Helmet>
      <Helmet>
        <title>{t('{seo-services-title}', 'Athar Architecture | Services')}</title>
        <meta name="description" content={t('{seo-services-description}', 'Comprehensive architecture and interior design services in Riyadh, Saudi Arabia. Architecture, interior design, landscape design, project supervision, and design consultations.')} />
        <meta name="keywords" content={t('{seo-services-keywords}', 'architecture services Riyadh, interior design services Saudi Arabia, landscape design, project supervision, design consultations, residential architecture, commercial design, villa design')} />
      </Helmet>
      <GlobalHeader />
       {/* Hero Section */}
<section className="relative h-screen overflow-hidden">
  {/* ─── DESKTOP VIDEO ───────────────────────────────────── */}
  <div className="hidden md:block absolute inset-0">
    <iframe
      src="https://customer-2s48kq65j4o8hpc0.cloudflarestream.com/f40d9cb13eab1c997ada4b26b6c6d4c8/iframe?autoplay=1&muted=1&loop=1"
      className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] -translate-x-1/2 -translate-y-1/2 object-cover"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      title="Athar Contact Video"
    />
    <div className="absolute inset-0 bg-black/20" />
  </div>

  {/* ─── DESKTOP TITLE ──────────────────────────────────── */}
  <div className="hidden md:block absolute bottom-6 left-10 z-10">
    <h1
      className="text-4xl font-medium text-white tracking-widest"
      style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
    >
      {t('{services-label}', 'Services')}
    </h1>
  </div>

  {/* ─── MOBILE VIDEO ────────────────────────────────────── */}
  <div className="block md:hidden absolute inset-0">
    <iframe
      src="https://customer-2s48kq65j4o8hpc0.cloudflarestream.com/f40d9cb13eab1c997ada4b26b6c6d4c8/iframe?autoplay=1&muted=1&loop=1"
      className="absolute top-1/2 left-1/2 w-[350vw] h-[350vh] -translate-x-1/2 -translate-y-1/2 object-cover"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      title="Athar Contact Video Mobile"
    />
    <div className="absolute inset-0 bg-black/20" />
  </div>

  {/* ─── MOBILE TITLE ───────────────────────────────────── */}
  <div className="block md:hidden absolute bottom-6 left-4 z-10">
    <h1
      className="text-4xl font-medium text-white tracking-widest"
      style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
    >
      {t('{services-label}', 'Services')}
    </h1>
  </div>
</section>

      <PageWrapper>
        <main className="relative z-10 bg-[#FFFFFF]">
          <section className="relative">
            <div className="h-2 bg-white w-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 relative">
              <div className="hidden md:block absolute left-1/2 top-0 w-2 h-full bg-white -translate-x-1/2 z-10" />

              {services.map((service, index) => (
                <React.Fragment key={service.id}>
                  <Link to={`/services/${service.slug}`} className="relative h-[50vh] cursor-pointer group overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url(${service.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-700 ease-out group-hover:opacity-0" />
                    <div className="relative z-10 flex items-center justify-center h-full">
                      <h2 className="text-white text-2xl md:text-3xl lg:text-4xl uppercase tracking-widest transition-transform duration-700 ease-out group-hover:scale-110"
                        style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 100 }}>
                        {t(service.title)}
                      </h2>
                    </div>
                  </Link>

                  {/* Horizontal dividers for mobile */}
                  {index < services.length - 1 && (
                    <div className="h-2 bg-white w-full md:hidden" />
                  )}

                  {/* Horizontal dividers for desktop */}
                  {index === 1 && (
                    <div className="hidden md:block absolute top-[33.33%] left-0 w-full h-2 bg-white z-10" />
                  )}
                  {index === 3 && (
                    <div className="hidden md:block absolute top-[66.66%] left-0 w-full h-2 bg-white z-10" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="h-2 bg-white w-full" />
          </section>
        </main>
        <SiteFooter />
      </PageWrapper>
    </>
  );
}

export default ServicesPage;
