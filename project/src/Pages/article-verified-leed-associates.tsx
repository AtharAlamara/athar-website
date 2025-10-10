import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import ArticleTemplate from '../Components/ArticleTemplate';
import PageWrapper from '../Components/PageWrapper';
import ScrollToTop from '../Components/ScrollToTop';
import { supabase } from '../lib/supabaseClient';

type TextMap = Record<string, string>;
type Locale = 'en' | 'ar';

const TABLE = 'ArticlePages';

// Detect locale (URL + <html>/<body> + localStorage hints)
function useLocale(): Locale {
  const { pathname } = useLocation();

  const read = React.useCallback<() => Locale>(() => {
    if (pathname.startsWith('/sa/')) return 'ar';

    const html = document.documentElement;
    const lang = html.getAttribute('lang')?.toLowerCase();
    const dir  = html.getAttribute('dir')?.toLowerCase();
    if (lang === 'ar' || dir === 'rtl') return 'ar';

    const body = document.body;
    const bdir = body?.getAttribute('dir')?.toLowerCase();
    if (bdir === 'rtl' || body?.classList.contains('rtl')) return 'ar';

    const hints = [
      localStorage.getItem('athar-locale'),
      localStorage.getItem('locale'),
      localStorage.getItem('i18nextLng'),
    ].filter(Boolean).map(v => String(v).toLowerCase());
    if (hints.some(v => v.startsWith('ar'))) return 'ar';

    return 'en';
  }, [pathname]);

  const [loc, setLoc] = React.useState<Locale>(read());

  React.useEffect(() => {
    setLoc(read());
    const html = document.documentElement;
    const onMut = () => setLoc(read());
    const mo1 = new MutationObserver(onMut);
    mo1.observe(html, { attributes: true, attributeFilter: ['lang','dir','class'] });
    const body = document.body;
    const mo2 = new MutationObserver(onMut);
    mo2.observe(body, { attributes: true, attributeFilter: ['dir','class'] });
    const onEvt = () => setLoc(read());
    window.addEventListener('athar:locale-changed', onEvt);
    const int = window.setInterval(() => { const cur = read(); if (cur !== loc) setLoc(cur); }, 500);
    return () => { mo1.disconnect(); mo2.disconnect(); window.removeEventListener('athar:locale-changed', onEvt); window.clearInterval(int); };
  }, [read]); // eslint-disable-line react-hooks/exhaustive-deps

  return loc;
}

export default function Article1() {
  const locale = useLocale();
  const isAr = locale === 'ar';

  const [texts, setTexts] = React.useState<TextMap>({});
  const [enTexts, setEnTexts] = React.useState<TextMap>({}); // EN fallback

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase
        .from(TABLE)
        .select('name,texts,locale')
        .eq('locale', locale);

      if (!cancelled) {
        if (error) {
          console.error('[Article1] fetch error:', error);
          setTexts({});
        } else {
          const map: TextMap = {};
          (data || []).forEach((row: any) => {
            const k = String(row?.name ?? '').trim();
            const v = String(row?.texts ?? '').trim();
            if (k) map[k] = v;
          });
          setTexts(map);
        }
      }

      if (locale !== 'en') {
        const { data: enData, error: enErr } = await supabase
          .from(TABLE)
          .select('name,texts,locale')
          .eq('locale', 'en');
        if (!cancelled) {
          if (enErr) {
            console.error('[Article1] fetch EN error:', enErr);
            setEnTexts({});
          } else {
            const mapEn: TextMap = {};
            (enData || []).forEach((row: any) => {
              const k = String(row?.name ?? '').trim();
              const v = String(row?.texts ?? '').trim();
              if (k) mapEn[k] = v;
            });
            setEnTexts(mapEn);
          }
        }
      } else {
        if (!cancelled) setEnTexts({});
      }
    })();

    return () => { cancelled = true; };
  }, [locale]);

  const t = (k: string, fb = '') => {
    const cur = texts[k];
    if (cur != null && cur !== '') return cur;
    const en = enTexts[k];
    if (en != null && en !== '') return en;
    return fb;
  };

  // ---- Keys base for this article (matches Supabase exactly)
  const base = 'article-verified-leed-associates';

  // Title + Intro (+ SEO fallbacks if title not present)
  const Title =
    t(`${base}-title`, '') ||
    t(`${base}-seo-title`, 'Leading the Green Revolution: Our Journey as Verified LEED Associates in Saudi Arabia');

  const Intro = t(
    `${base}-intro`,
    `At Athar Architecture, sustainability is not a trend. It's embedded in the way we design, plan, and build. As verified LEED Associates, we take pride in contributing to a new chapter of environmentally responsible architecture in Riyadh and across Saudi Arabia.`
  );

  // Sections
  const S1   = t(`${base}-s1`, 'What LEED Means for Architecture in Riyadh');
  const S1P1 = t(`${base}-s1p1`, 'LEED (Leadership in Energy and Environmental Design) is the leading global certification for green buildings...');
  const S1P2 = t(`${base}-s1p2`, 'In a city like Riyadh — rapidly evolving with landmark developments — LEED offers a framework that ensures growth remains responsible.');

  const S2   = t(`${base}-s2`, `Supporting Saudi Arabia's Vision 2030`);
  const S2P1 = t(`${base}-s2p1`, `Saudi Arabia's Vision 2030 outlines a national shift toward renewable energy, sustainability, and improved quality of life...`);
  const S2P2 = t(`${base}-s2p2`, 'Choosing a LEED-accredited architect in Riyadh means your project supports a national effort to rethink cities and energy use.');

  const S3   = t(`${base}-s3`, 'How We Approach Sustainable Design');
  const S3P1 = t(`${base}-s3p1`, 'When working with us, clients receive a process that merges environmental intelligence with refined aesthetics.');
  const S3P2 = t(`${base}-s3p2`, 'Our approach includes thermal insulation, natural daylighting, and use of regional/recycled materials.');

  // ---- Section 4 (custom bullets + final paragraph)
  const S4Title = t(`${base}-s4p1`, 'Our approach includes:');
  const S4Li1   = t(`${base}-s4p2`, 'Thermal insulation that enhances comfort and reduces load.');
  const S4Li2   = t(`${base}-s4p3`, 'Natural daylighting techniques that also minimize electricity use.');
  const S4Li3   = t(`${base}-s4p4`, 'Use of regional and recycled materials to lower environmental impact.');
  const S4Final = t(
    `${base}-s4p5`,
    `Needless to say, these methods aren't leaving design behind; in fact, they enrich it. For us, design is a form of responsibility, not merely an act of creation.`
  );

  // Minimal SEO: title + intro
  const seoTitle = t(`${base}-seo-title`, Title);
  const seoDesc  = t(`${base}-seo-description`, Intro);

  // Force H1 to align right in Arabic (keeps Header/Footer/Related LTR)
  React.useEffect(() => {
    if (!isAr) return;
    const root = document.querySelector('.athar-rtl-article');
    if (!root) return;
    const h1 = root.querySelector('main .max-w-4xl > h1') as HTMLElement | null;
    if (h1) {
      h1.style.direction = 'rtl';
      h1.style.textAlign = 'right';
      h1.style.display = 'block';
      h1.style.width = '100%';
      (h1.style as any).alignSelf = 'stretch';
      (h1.style as any).justifySelf = 'end';
      h1.style.marginLeft = '0';
      h1.style.marginRight = '0';
    }
  }, [isAr, Title]);

  // Related (translate titles via Supabase; EN fallback)
  const relatedArticles = [
    {
      id: 'Article2',
      title: t('article-minimal-elegance-riyadh-title', 'Minimalist Elegance: The Rise of Contemporary Interior Design in Saudi Homes'),
      href: '/news/article-minimal-elegance-riyadh',
      image: 'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtAl10ozBqyzTtgxecSQfIm72pFYkLWlJ63Rd9',
    },
    {
      id: 'Article3',
      title: t('article-intergrating-pool-in-landscape-title', 'Water as a Design Element: How Pools Redefine Spatial Experience'),
      href: '/news/article-intergrating-pool-in-landscape',
      image: 'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtFckTfdxORdr4iUQqXJuntjb6e1yHS7xlGVwT',
    },
    {
      id: 'Article4',
      title: t('article-downtown-design-riyadh-2025-title', "Downtown Design Riyadh 2025: Showcasing Saudi's Creative Pulse"),
      href: '/news/article-downtown-design-riyadh-2025',
      image: 'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtq3mEMKz5afN5SMmPvhKDoJIycb2GWukwr4nT',
    },
    {
      id: 'Article5',
      title: t('article-al-balad-renaissance-in-jeddah-title', "Al-Balad's Renaissance: Preserving Jeddah's Historic Heart"),
      href: '/news/article-al-balad-renaissance-in-jeddah',
      image: 'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtNKLqdj66dDplvfPWVh50xKR1sN7e9cUjYSBX',
    },
    {
      id: 'Article6',
      title: t('article-red-sea-global-leed-achievements-title', "Red Sea Global's LEED Achievements: Setting New Standards in Sustainable Tourism"),
      href: '/news/article-red-sea-global-leed-achievements',
      image: 'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtxd2Q76HjegRM3wv9DYo1fsrmQpyJFN4hBGnc',
    },
    {
      id: 'Article7',
      title: t('article-new-murabba-tranformation-title', "New Murabba: Transforming Riyadh's Urban Landscape"),
      href: '/news/article-new-murabba-tranformation',
      image: 'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtl9519zj8py3SQgmqvbGXIfLdhR4r9PauEo0O',
    },
  ];

  return (
    <PageWrapper>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
      </Helmet>

      <ScrollToTop />

      {/* Scope RTL only to article title/body; keep Header/Footer/Related LTR */}
      <div className={isAr ? 'athar-rtl-article' : undefined}>
        {isAr && (
          <style>{`
            .athar-rtl-article main .max-w-4xl .prose {
              direction: rtl !important;
              text-align: right !important;
            }
            .athar-rtl-article main .max-w-4xl .prose * {
              direction: rtl !important;
              text-align: inherit !important;
            }
            .athar-rtl-article main .max-w-4xl > h1 {
              direction: rtl !important;
              text-align: right !important;
              display: block !important;
              width: 100% !important;
              margin-left: 0 !important;
              margin-right: 0 !important;
              align-self: stretch !important;
              justify-self: end !important;
            }
          `}</style>
        )}

        <ArticleTemplate
          title={Title}
          imageUrl="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtTyLJr6Fg0SOit9Ckny3R7jfb2vIrc8xQPopW"
          content={
            <>
              <p>{Intro}</p>

              <div className="h-6" />

              <div className="space-y-6">
                <h2
                  className="text-2xl font-semibold text-[#2D2D2D]"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  {S1}
                </h2>
                <p>{S1P1}</p>
                <p>{S1P2}</p>

                <h2
                  className="text-2xl font-semibold text-[#2D2D2D]"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  {S2}
                </h2>
                <p>{S2P1}</p>
                <p>{S2P2}</p>

                <h2
                  className="text-2xl font-semibold text-[#2D2D2D]"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  {S3}
                </h2>
                <p>{S3P1}</p>

                {/* Section 4 (custom) */}
                <h3 className="text-xl font-medium" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                  {S4Title}
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>{S4Li1}</li>
                  <li>{S4Li2}</li>
                  <li>{S4Li3}</li>
                </ul>
                <p>{S4Final}</p>
              </div>
            </>
          }
          relatedArticles={{
            title: isAr ? 'من مذكّراتنا' : 'More from our Journal',
            description: isAr
              ? 'اكتشف مقالات ورؤى إضافية من أثر العمارة.'
              : 'Explore additional insights and stories from Athar Architecture.',
            items: relatedArticles,
          }}
        />
      </div>
    </PageWrapper>
  );
}
