import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { LocaleLink as Link } from '@/lib/LocaleLink';
import PageWrapper from './PageWrapper';
import GlobalHeader from './GlobalHeader';
import SiteFooter from './SiteFooter';
import ScrollToTop from './ScrollToTop';
import { supabase } from '../lib/supabaseClient';

type TextMap = Record<string, string>;

type Slug =
  | 'architecture'
  | 'interiordesign'
  | 'landscapedesign'
  | 'furnitureaccessories'
  | 'projectsupervision'
  | 'designconsultations';

interface FallbackCopy {
  title: string;
  subtitle: string;
  p1: string;
  p2: string;
  p3: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  ogImage?: string;      // optional; falls back to heroSrc
  ogUrlPath: string;     // e.g. "/services/architecture" (no /sa prefix)
  twitterImage?: string; // optional; falls back to ogImage or heroSrc
}

interface ServiceTemplateProps {
  serviceSlug: Slug;
  heroSrc: string;
  heroAlt?: string;
  heroObjectPosition?: string;
  fallbackEn: FallbackCopy;
  fallbackAr?: Partial<FallbackCopy>;
}

export default function ServiceTemplate({
  serviceSlug,
  heroSrc,
  heroAlt,
  heroObjectPosition,
  fallbackEn,
  fallbackAr,
}: ServiceTemplateProps) {
  const { pathname } = useLocation();
  const isAr = pathname.startsWith('/sa/');
  const locale = isAr ? 'ar' : 'en';
  const baseUrl = 'https://atharalamara.sa';

  const [texts, setTexts] = useState<TextMap>({});

  useEffect(() => {
    let cancelled = false;
    supabase
      .from('ServiceDetailPage')
      .select('name, texts')
      .eq('locale', locale)
      .then(({ data, error }) => {
        if (error) {
          console.error('ServiceDetailPage fetch error:', error);
          return;
        }
        if (cancelled) return;
        const map: TextMap = {};
        (data || []).forEach((row: any) => {
          const key = (row?.name ?? '').toString().trim();
          if (key) map[key] = row.texts;
        });
        setTexts(map);
      });
    return () => { cancelled = true; };
  }, [locale]);

  // Helper: first hit among several candidate keys
  const firstOf = (keys: string[], fb?: string) => {
    for (const k of keys) {
      const v = texts[k];
      if (typeof v === 'string' && v.length) return v;
    }
    return fb ?? '';
  };

  // Base key e.g. "architecture-title"
  const k = (suffix: string) => `${serviceSlug}-${suffix}`;

  // Choose fallbacks for current locale (so AR can render even before DB)
  const FB: FallbackCopy = (isAr && fallbackAr
    ? { ...fallbackEn, ...fallbackAr }
    : fallbackEn) as FallbackCopy;

  // Resolve UI copy with tolerant aliases
  const title = firstOf(
    [k('title'), `${serviceSlug}-h1`, `${serviceSlug}-heading`],
    FB.title
  );
  const subtitle = firstOf(
    [k('subtitle'), `${serviceSlug}-h2`, `${serviceSlug}-tagline`],
    FB.subtitle
  );
  const p1 = firstOf(
    [k('p1'), `${serviceSlug}-paragraph-1`, `${serviceSlug}-para1`, `${serviceSlug}-body1`],
    FB.p1
  );
  const p2 = firstOf(
    [k('p2'), `${serviceSlug}-paragraph-2`, `${serviceSlug}-para2`, `${serviceSlug}-body2`],
    FB.p2
  );
  const p3 = firstOf(
    [k('p3'), `${serviceSlug}-paragraph-3`, `${serviceSlug}-para3`, `${serviceSlug}-body3`],
    FB.p3
  );

  // Buttons (global keys, optional in DB)
  const btnServices = texts['btn-services'] ?? (isAr ? 'الخدمات' : 'Back to Services');
  const btnProjects = texts['btn-projects'] ?? (isAr ? 'المشاريع' : 'View Our Projects');
  const btnContact  = texts['btn-contact']  ?? (isAr ? 'اتصل بنا' : 'Contact Us');

  // SEO (DB override -> fallback)
  const seoTitle    = firstOf([k('seo-title')], FB.seoTitle);
  const seoDesc     = firstOf([k('seo-description')], FB.seoDescription);
  const seoKeywords = firstOf([k('seo-keywords')], FB.seoKeywords);

  const ogTitle = firstOf([k('seo-og-title')], seoTitle);
  const ogDesc  = firstOf([k('seo-og-description')], seoDesc);
  const ogImage = firstOf([k('seo-og-image')], FB.ogImage || heroSrc);
  const ogType  = firstOf([k('seo-og-type')], 'website');
  const ogUrl   = firstOf([k('seo-og-url')], `${baseUrl}${isAr ? '/sa' : ''}${FB.ogUrlPath}`);

  const twCard  = firstOf([k('seo-twitter-card')], 'summary_large_image');
  const twTitle = firstOf([k('seo-twitter-title')], seoTitle);
  const twDesc  = firstOf([k('seo-twitter-description')], seoDesc);
  const twImage = firstOf([k('seo-twitter-image')], FB.twitterImage || FB.ogImage || heroSrc);

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        {seoDesc && <meta name="description" content={seoDesc} />}
        {seoKeywords && <meta name="keywords" content={seoKeywords} />}

        {ogTitle && <meta property="og:title" content={ogTitle} />}
        {ogDesc && <meta property="og:description" content={ogDesc} />}
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta property="og:type" content={ogType} />
        {ogUrl && <meta property="og:url" content={ogUrl} />}

        <meta name="twitter:card" content={twCard} />
        {twTitle && <meta name="twitter:title" content={twTitle} />}
        {twDesc && <meta name="twitter:description" content={twDesc} />}
        {twImage && <meta name="twitter:image" content={twImage} />}
      </Helmet>

      <ScrollToTop />
      <GlobalHeader />

      {/* Hero */}
      <section className="relative h-[75vh] overflow-hidden">
        <img
          src={heroSrc}
          alt={heroAlt || title}
          className="w-full h-full object-cover"
          style={heroObjectPosition ? { objectPosition: heroObjectPosition } : undefined}
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute bottom-6 left-10 md:left-10 left-6 z-10">
          <h1
            className="text-2xl md:text-4xl font-medium text-white tracking-widest"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            {title}
          </h1>
        </div>
      </section>

      <PageWrapper>
        <main className="relative z-10 bg-[#F9F6F1]">
          <div className="px-6 md:px-12 pt-20 pb-20">
            <div className="max-w-xl mx-auto">
              <section className="mb-8">
                <h2
                  className="text-xl mb-2 font-light"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
                >
                  {subtitle}
                </h2>

                <div className="space-y-6">
                  <p className="text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    {p1}
                  </p>
                  <p className="text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    {p2}
                  </p>
                  <p className="text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    {p3}
                  </p>
                </div>
              </section>

              {/* Buttons */}
              <section className="mt-16">
                <div className="flex flex-col md:flex-row justify-between gap-2">
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center px-4 py-2 border border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] transition-colors duration-300 rounded-none"
                    style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 300 }}
                  >
                    <span className="text-sm tracking-wide">{btnServices}</span>
                  </Link>

                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center px-4 py-2 border border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] transition-colors duration-300 rounded-none"
                    style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 300 }}
                  >
                    <span className="text-sm tracking-wide">{btnProjects}</span>
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-4 py-2 border border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] transition-colors duration-300 rounded-none"
                    style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 300 }}
                  >
                    <span className="text-sm tracking-wide">{btnContact}</span>
                  </Link>
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
