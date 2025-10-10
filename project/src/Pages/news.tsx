import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { LocaleLink as Link } from '@/lib/LocaleLink';
import GlobalHeader from '../Components/GlobalHeader';
import SiteFooter from '../Components/SiteFooter';
import PageWrapper from '../Components/PageWrapper';
import { supabase } from '../lib/supabaseClient';

function NewsPage() {
  // Locale detection: '/sa/' => Arabic
  const { pathname } = useLocation();
  const locale = pathname.startsWith('/sa/') ? 'ar' : 'en';
  const isAr = locale === 'ar';

  // Fetch NewsPage texts (name, texts) for current locale
  const [texts, setTexts] = React.useState<Record<string, string>>({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;

    (async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('NewsPage')
        .select('name,texts')
        .eq('locale', locale);

      if (cancelled) return;

      if (error) {
        console.error('NewsPage fetch error:', error);
        setTexts({});
        setLoading(false);
        return;
      }

      const map: Record<string, string> = {};
      (data || []).forEach((row: any) => {
        const k = String(row?.name ?? '').trim();
        const v = String(row?.texts ?? '').trim();
        if (k) map[k] = v;
      });
      setTexts(map);
      setLoading(false);
    })();

    return () => { cancelled = true; };
  }, [locale]);

  // Tiny resolver (accepts "{key}" or "key")
  const t = (maybeKey: string, fallback = '') => {
    const m = typeof maybeKey === 'string' ? maybeKey.match(/^\s*\{(.+)\}\s*$/) : null;
    const key = (m ? m[1] : maybeKey)?.trim?.() ?? '';
    return texts[key] ?? fallback;
  };

  // Articles config (titles come from Supabase via nameKey)
  const articles = React.useMemo(() => ([
    {
      id: 1,
      nameKey: 'item1',
      fallback: 'Leading the Green Revolution: Our Journey as Verified LEED Associates in Saudi Arabia',
      imageUrl: 'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtIOSqE0iEd0CiAkOj4lPoG1S2TUa6z3xMWfXD',
      slug: 'article-verified-leed-associates',
    },
    {
      id: 2,
      nameKey: 'item2',
      fallback: 'Minimalist Elegance: The Rise of Contemporary Interior Design in Saudi Homes',
      imageUrl: 'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtk1Rqp8T5wUsRrfG1tAi0XCE8dzWkBF93bZcK',
      slug: 'article-minimal-elegance-riyadh',
    },
    {
      id: 3,
      nameKey: 'item3',
      fallback: 'Water as a Design Element: How Pools Redefine Spatial Experience',
      imageUrl: 'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtEtlZ8fvTh9KZe2CM3QFUBvXtGi0SsqgAJIbV',
      slug: 'article-intergrating-pool-in-landscape',
    },
    {
      id: 4,
      nameKey: 'item4',
      fallback: "Downtown Design Riyadh 2025: Showcasing Saudi's Creative Pulse",
      imageUrl: 'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtRGrEs6basyJRoDmA4vpVjN1HYUn52CWOQPgq',
      slug: 'article-downtown-design-riyadh-2025',
    },
    {
      id: 5,
      nameKey: 'item5',
      fallback: "Al-Balad's Renaissance: Preserving Jeddah's Historic Heart",
      imageUrl: 'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtcfudzaDRfwX5N9Zuihrgpl2TJDnCkdoSyt1q',
      slug: 'article-al-balad-renaissance-in-jeddah',
    },
    {
      id: 6,
      nameKey: 'item6',
      fallback: "Red Sea Global's LEED Achievements: Setting New Standards in Sustainable Tourism",
      imageUrl: 'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtfw23OJycZjuFxPyldm6w08WS34zoshaYeRQC',
      slug: 'article-red-sea-global-leed-achievements',
    },
    {
      id: 7,
      nameKey: 'item7',
      fallback: "New Murabba: Transforming Riyadh's Urban Landscape",
      imageUrl: 'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtTdLmavFg0SOit9Ckny3R7jfb2vIrc8xQPopW',
      slug: 'article-new-murabba-tranformation',
    },
  ]), []);

  return (
    <>
      <Helmet>
        <title>{t('{seo-news-title}', 'News | Athar Architecture')}</title>
        <meta name="description" content={t('{seo-news-description}', 'News and articles from Athar Architecture.')} />
        <meta name="keywords" content={t('{seo-news-keywords}', 'news, Athar Architecture')} />
        <meta property="og:title" content={t('{seo-news-og-title}', 'News | Athar Architecture')} />
        <meta property="og:description" content={t('{seo-news-og-description}', 'News and articles from Athar Architecture.')} />
        <meta property="og:image" content={t('{seo-news-og-image}', '/Athar Final.png')} />
        <meta property="og:type" content={t('{seo-news-og-type}', 'website')} />
        <meta property="og:url" content={t('{seo-news-og-url}', 'https://atharalamara.sa/news')} />
        <meta name="twitter:card" content={t('{seo-news-twitter-card}', 'summary_large_image')} />
        <meta name="twitter:title" content={t('{seo-news-twitter-title}', 'News | Athar Architecture')} />
        <meta name="twitter:description" content={t('{seo-news-twitter-description}', 'News and articles from Athar Architecture.')} />
        <meta name="twitter:image" content={t('{seo-news-twitter-image}', '/Athar Final.png')} />
      </Helmet>

      <GlobalHeader />

      {/* HERO — force LTR and left alignment always */}
      <section className="relative h-screen overflow-hidden" dir="ltr" lang="en">
        {/* Desktop video */}
        <div className="hidden md:block absolute inset-0">
          <iframe
            src="https://customer-2s48kq65j4o8hpc0.cloudflarestream.com/2b73d1bff5d65d41b93286935ce95fcd/iframe?autoplay=1&muted=1&loop=1"
            className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] -translate-x-1/2 -translate-y-1/2 object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Athar News Video"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Desktop title — pinned left */}
        <div className="hidden md:block absolute bottom-6 left-10 z-10">
          <h1
            className="text-4xl font-medium text-white tracking-widest text-left"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            {/* Keep using t() if you still want it to translate, but force LTR rendering */}
            <span dir="ltr">{t('{title}', 'News')}</span>
          </h1>
        </div>

        {/* Mobile video */}
        <div className="block md:hidden absolute inset-0">
          <iframe
            src="https://customer-2s48kq65j4o8hpc0.cloudflarestream.com/2b73d1bff5d65d41b93286935ce95fcd/iframe?autoplay=1&muted=1&loop=1"
            className="absolute top-1/2 left-1/2 w-[350vw] h-[350vh] -translate-x-1/2 -translate-y-1/2 object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Athar News Video Mobile"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Mobile title — pinned left */}
        <div className="block md:hidden absolute bottom-6 left-4 z-10">
          <h1
            className="text-4xl font-medium text-white tracking-widest text-left"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            <span dir="ltr">{t('{title}', 'News')}</span>
          </h1>
        </div>
      </section>

      <PageWrapper>
        {/* CONTENT — flips RTL/LTR */}
        <main className="relative z-10 bg-[#FFFFFF]" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="container mx-auto px-4 pt-20 space-y-8 pb-20">
              {articles.map((article) => (
                <Link key={article.id} to={`/news/${article.slug}`} className="block group">
                  <div className="aspect-[4/3] mb-4 overflow-hidden">
                    <img
                      src={article.imageUrl}
                      alt={t(article.nameKey, article.fallback)}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h2
                    className={`text-xl font-thin text-[#000000] group-hover:text-[#292827] transition-colors duration-300 ${isAr ? 'text-right' : 'text-left'}`}
                    style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
                  >
                    {/* bdi helps keep email/latin pieces readable in RTL */}
                    <bdi>{t(article.nameKey, article.fallback)}</bdi>
                  </h2>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block container mx-auto px-4 pt-20 pb-20">
            <div className="grid grid-cols-12 gap-8">
              {articles.map((article) => (
                <Link key={article.id} to={`/news/${article.slug}`} className="block group col-span-6">
                  <div className="aspect-[4/3] mb-4 overflow-hidden">
                    <img
                      src={article.imageUrl}
                      alt={t(article.nameKey, article.fallback)}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h2
                    className={`text-xl font-thin text-[#000000] group-hover:text-[#5B4F48] transition-colors duration-300 ${isAr ? 'text-right' : 'text-left'}`}
                    style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
                  >
                    <bdi>{t(article.nameKey, article.fallback)}</bdi>
                  </h2>
                </Link>
              ))}
            </div>
          </div>
        </main>

        <SiteFooter />
      </PageWrapper>
    </>
  );
}

export default NewsPage;
