import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import GlobalHeader from '../Components/GlobalHeader';
import SiteFooter from '../Components/SiteFooter';
import PageWrapper from '../Components/PageWrapper';
import ScrollToTop from '../Components/ScrollToTop';
import { useLocation } from 'react-router-dom';
import { LocaleLink as Link } from '@/lib/LocaleLink';
import { supabase } from '../lib/supabaseClient';

function StudioPage() {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isButtonVisible, setIsButtonVisible] = React.useState(false);

  // ---- locale + texts (from Supabase: studiopage) ----
  const { pathname } = useLocation();
  const locale = pathname.startsWith('/sa/') ? 'ar' : 'en';
  const [texts, setTexts] = React.useState<Record<string, string>>({});

  useEffect(() => {
    let cancelled = false;
    supabase
      .from('StudioPage') // table name in lowercase is safest in Postgres
      .select('name,texts')
      .eq('locale', locale)
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) {
          console.error('StudioPage fetch error:', error);
          setTexts({});
          return;
        }
        const map: Record<string, string> = {};
        (data || []).forEach((row: any) => { map[row.name] = row.texts; });
        setTexts(map);
      });
    return () => { cancelled = true; };
  }, [locale]);

  // tiny resolver for "{key}" placeholders
  const t = (maybeKey: string, fallback?: string) => {
    const m = typeof maybeKey === 'string' ? maybeKey.match(/^\{(.+)\}$/) : null;
    if (m) return texts[m[1]] ?? (fallback ?? maybeKey);
    return maybeKey ?? fallback ?? '';
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => setIsButtonVisible(e.isIntersecting),
      { threshold: 0.1 }
    );
    if (buttonRef.current) obs.observe(buttonRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('{seo-studio-title}', 'Athar Architecture | Studio')}</title>
        <meta name="description" content={t('{seo-studio-description}', 'Founded in 2020, Athar Alamara is a multi-talented architecture and design studio based in Riyadh, Saudi Arabia. LEED certified architects and interior designers.')} />
        <meta name="keywords" content={t('{seo-studio-keywords}', 'architecture studio Riyadh, interior design studio Saudi Arabia, LEED certified architects, sustainable design, contemporary architecture, design philosophy')} />
        <meta property="og:title" content={t('{seo-studio-og-title}', 'Athar Architecture | Studio')} />
        <meta property="og:description" content={t('{seo-studio-og-description}', 'Founded in 2020, Athar Alamara is a multi-talented architecture and design studio based in Riyadh, Saudi Arabia')} />
        <meta property="og:image" content={t('{seo-studio-og-image}', '/Athar Final.png')} />
        <meta property="og:type" content={t('{seo-studio-og-type}', 'website')} />
        <meta property="og:url" content={t('{seo-studio-og-url}', 'https://atharalamara.sa/studio')} />
        <meta name="twitter:card" content={t('{seo-studio-twitter-card}', 'summary_large_image')} />
        <meta name="twitter:title" content={t('{seo-studio-twitter-title}', 'Athar Architecture | Studio')} />
        <meta name="twitter:description" content={t('{seo-studio-twitter-description}', 'Founded in 2020, Athar Alamara is a multi-talented architecture and design studio based in Riyadh, Saudi Arabia')} />
        <meta name="twitter:image" content={t('{seo-studio-twitter-image}', '/Athar Final.png')} />
      </Helmet>
      <Helmet>
        <title>{t('{seo-studio-title}', 'Athar Architecture | Studio')}</title>
        <meta name="description" content={t('{seo-studio-description}', 'Founded in 2020, Athar Alamara is a multi-talented architecture and design studio based in Riyadh, Saudi Arabia. LEED certified architects and interior designers.')} />
        <meta name="keywords" content={t('{seo-studio-keywords}', 'architecture studio Riyadh, interior design studio Saudi Arabia, LEED certified architects, sustainable design, contemporary architecture, design philosophy')} />
      </Helmet>
      <ScrollToTop />
      <GlobalHeader />



  {/* Desktop Video */}
  <div className="hidden md:block absolute inset-0">
    <iframe
      src="https://customer-2s48kq65j4o8hpc0.cloudflarestream.com/efaad5e6f74cddb29923b32916f4af42/iframe?autoplay=1&muted=1&loop=1"
      className="absolute top-1/2 left-1/2 w-[150vw] h-[190vh] -translate-x-1/2 -translate-y-1/2 object-cover"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      title="Athar Studio Video"
    />
    <div className="absolute inset-0 bg-black/20" />
  </div>

  {/* Studio title on desktop */}
  <div className="hidden md:block absolute bottom-6 left-10 z-10">
    <h1
      className="text-4xl font-medium text-white tracking-widest"
      style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
    >
      {t('{studio-label}', 'Studio')}
    </h1>
  </div>

  {/* Mobile Video */}
<div className="block md:hidden absolute inset-0 overflow-hidden">
  <iframe
    src="https://customer-2s48kq65j4o8hpc0.cloudflarestream.com/efaad5e6f74cddb29923b32916f4af42/iframe?autoplay=1&muted=1&loop=1"
    className="absolute top-1/2 left-1/2 w-[320vw] h-[320vh] -translate-x-1/2 -translate-y-1/2 object-cover"
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    title="Athar Studio Video Mobile"
  />
    <div className="absolute inset-0 bg-black/20" />
</div>



  {/* Studio title on mobile */}
  <div className="block md:hidden absolute bottom-6 left-4 z-10">
    <h1
      className="text-4xl font-medium text-white tracking-widest"
      style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
    >
      {t('{studio-label}', 'Studio')}
    </h1>
  </div>

{/* Push content below full-screen hero */}
<div className="h-screen" />


      {/* ─── MAIN PAGE CONTENT ───────────────────────────────── */}
      <PageWrapper>
        <div className="relative z-10 bg-[#FFFFFF]">
          <div className="px-6 md:px-12 pt-20 pb-20">

            <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
              {/* About */}
              <section className="max-w-xl w-full">
                <h2 className="text-xl mb-2 font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  {t('{about-us-title}', 'About Us')}
                </h2>
                <p className="text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  {t('{about-us-one}', 'Founded in 2020, Athar Alamara is a multi-talented architecture and design studio based in Saudi Arabia. Our team consists of architects, interior designers, and landscape specialists who share a deep commitment to precision, functionality, and aesthetic integrity.')}
                  </p>
                
<p className="text-lg leading-relaxed font-thin text-[#000000] mt-4" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
  {t('{about-us-two}', 'Each member of the studio has a unique academic background and technical training, both locally and internationally, contributing to a shared standard of excellence.')}
                </p>
                
<p className="text-lg leading-relaxed font-thin text-[#000000] mt-4" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
  {t('{about-us-three}', "The name of our company translates to 'The lasting effect of a thoughtful design'. This is the mindset and the idea that connects our team. We approach design with the belief that intention matters, and that well-considered spaces carry value far beyond their visual appeal.")}
  </p>
                
              </section>

              {/* Philosophy */}
              <section className="max-w-xl w-full">
                <h2 className="text-xl mb-2 font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  {t('{philosophy-title}', 'Our Philosophy')}
                </h2>
                <p className="text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  {t('{philosophy-body}', 'We believe great design elevates how you live, work, and experience the world. Our approach centers on innovation, seamless collaboration, and clarity. By deeply understanding your needs and style, we craft spaces that are not only visually refined but also truly functional and timeless.')}
                </p>
              </section>

              {/* Vision */}
              <section className="max-w-xl w-full">
                <h2 className="text-xl mb-2 font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  {t('{vision-title}', 'Our Vision')}
                </h2>
                <p className="text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  {t('{vision-body}', "We envision a future where design enriches life while blending elegance, functionality, and purpose. As LEED Associates, we're committed to creating spaces that inspire and stand as benchmarks of environmental integrity. Sustainability for us is a natural expression of enduring value and refined living.")}
                </p>
              </section>

              {/* Process */}
              <section className="max-w-xl w-full">
                <h2 className="text-xl mb-2 font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  {t('{process-title}', 'Our Process')}
                </h2>
                <p className="text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  {t('{process-body}', 'From the moment you reach out to us, everything is designed to be smooth and transparent. We take the time to understand your needs, aspirations, and personal style — building a close connection so that every detail reflects your vision. Our role is to guide, refine, and bring your ideas to life with precision and care.')}
                </p>
              </section>
            </div>

            {/* CTA Button */}
            <div
              ref={buttonRef}
              className="max-w-5xl mx-auto mt-32 text-center"
              style={{
                opacity: isButtonVisible ? 1 : 0,
                transform: `translateY(${isButtonVisible ? '0' : '40px'})`,
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              }}
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-3 border border-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] transition-colors duration-300 rounded-none font-medium"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              >
                <span className="text-sm tracking-wide">{t('{cta-button}', 'View Our Expertise')}</span>
              </Link>
            </div>
          </div>

          <SiteFooter />
        </div>
      </PageWrapper>
    </>
  );
}

export default StudioPage;
