import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import ArticleTemplate from './ArticleTemplate';

type RelatedItem = {
  id: string;
  href: string;
  image: string;
  // key in DB for the related item title (e.g. "related-verified-leed-associates")
  titleKey: string;
  fallbackTitle: string;
};

interface ArticlesFromDBProps {
  slug: string;           // e.g. "al-balad-renaissance-in-jeddah"
  heroUrl: string | null; // main image
  related: {
    titleKey?: string;            // optional DB key for the "More from our Journal" header
    fallbackTitle?: string;       // fallback for that header
    descriptionKey?: string;      // optional DB key for the small desc under header
    fallbackDescription?: string; // fallback
    items: RelatedItem[];         // 6 cards
  };
  // Optional hard fallbacks so page still renders if DB is empty
  fallback?: {
    title?: string;
    intro?: string;
    sub1Title?: string; sub1P1?: string; sub1P2?: string;
    sub2Title?: string; sub2P1?: string; sub2P2?: string;
    sub3Title?: string; sub3P1?: string; sub3P2?: string;
  };
  tableName?: string; // default "NewsArticles"
}

type TextMap = Record<string, string>;

export default function ArticlesFromDB({
  slug,
  heroUrl,
  related,
  fallback,
  tableName = 'NewsArticles',
}: ArticlesFromDBProps) {
  // locale detection
  const { pathname } = useLocation();
  const isAr = pathname.startsWith('/sa/');
  const locale = isAr ? 'ar' : 'en';

  const [texts, setTexts] = React.useState<TextMap>({});
  const [loading, setLoading] = React.useState(true);

  // Helper: get first available string among keys
  const firstOf = (keys: string[], fb?: string) => {
    for (const k of keys) {
      const v = texts[k];
      if (typeof v === 'string' && v.length) return v;
    }
    return fb ?? '';
  };

  // Keys generator for this article
  // Example: "article:al-balad-renaissance-in-jeddah:title"
  const k = (field: string) => `article:${slug}:${field}`;

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      // fetch all rows for this locale that either:
      // - belong to this article (name startsWith "article:<slug>:")
      // - or are related header keys ("related:*") used for the gallery section
      const { data, error } = await supabase
        .from(tableName)
        .select('name,texts,locale')
        .eq('locale', locale);

      if (cancelled) return;

      if (error) {
        console.error(`[ArticlesFromDB] fetch error:`, error);
        setTexts({});
        setLoading(false);
        return;
      }

      const map: TextMap = {};
      (data || []).forEach((row: any) => {
        const key = String(row?.name ?? '').trim();
        const val = String(row?.texts ?? '').trim();
        if (!key) return;

        // Only keep rows that are either for this article or global related-*
        if (key.startsWith(`article:${slug}:`) || key.startsWith('related:') || key.startsWith('seo:')) {
          map[key] = val;
        }
      });

      setTexts(map);
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, [locale, slug, tableName]);

  // Resolve fields
  const title   = firstOf([k('title')], fallback?.title);
  const intro   = firstOf([k('intro')], fallback?.intro);

  const sub1T   = firstOf([k('sub1-title')], fallback?.sub1Title);
  const sub1P1  = firstOf([k('sub1-p1')], fallback?.sub1P1);
  const sub1P2  = firstOf([k('sub1-p2')], fallback?.sub1P2);

  const sub2T   = firstOf([k('sub2-title')], fallback?.sub2Title);
  const sub2P1  = firstOf([k('sub2-p1')], fallback?.sub2P1);
  const sub2P2  = firstOf([k('sub2-p2')], fallback?.sub2P2);

  const sub3T   = firstOf([k('sub3-title')], fallback?.sub3Title);
  const sub3P1  = firstOf([k('sub3-p1')], fallback?.sub3P1);
  const sub3P2  = firstOf([k('sub3-p2')], fallback?.sub3P2);

  // Related header (optional)
  const relTitle = related.titleKey
    ? firstOf([related.titleKey], related.fallbackTitle || (isAr ? 'من مجلتنا' : 'More from our Journal'))
    : (related.fallbackTitle || (isAr ? 'من مجلتنا' : 'More from our Journal'));

  const relDesc = related.descriptionKey
    ? firstOf([related.descriptionKey], related.fallbackDescription || (isAr ? 'اكتشف مقالات إضافية' : 'Explore additional insights and stories from Athar Architecture.'))
    : (related.fallbackDescription || (isAr ? 'اكتشف مقالات إضافية' : 'Explore additional insights and stories from Athar Architecture.'));

  // Resolve related item titles from DB using their titleKey
  const relatedItems = (related.items || []).map(item => ({
    ...item,
    title: firstOf([item.titleKey], item.fallbackTitle),
  }));

  // SEO (simple rule you specified): title + intro
  const seoTitle = title || (isAr ? 'الأخبار | أثر العمارة' : 'News | Athar Architecture');
  const seoDesc  = intro || '';

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        {seoDesc && <meta name="description" content={seoDesc} />}
        {/* keep SEO minimal per your guidance */}
      </Helmet>

      {/* The layout stays identical because we reuse your ArticleTemplate */}
      <ArticleTemplate
        title={title || ''}
        imageUrl={heroUrl}
        content={
          <>
            {/* Intro */}
            {intro && <p>{intro}</p>}

            <div className="h-6" />

            {/* Section 1 */}
            {(sub1T || sub1P1 || sub1P2) && (
              <div className="space-y-6">
                {sub1T && (
                  <h2
                    className="text-2xl font-semibold text-[#2D2D2D]"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    {sub1T}
                  </h2>
                )}
                {sub1P1 && <p>{sub1P1}</p>}
                {sub1P2 && <p>{sub1P2}</p>}
              </div>
            )}

            {/* Section 2 */}
            {(sub2T || sub2P1 || sub2P2) && (
              <div className="space-y-6 mt-8">
                {sub2T && (
                  <h2
                    className="text-2xl font-semibold text-[#2D2D2D]"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    {sub2T}
                  </h2>
                )}
                {sub2P1 && <p>{sub2P1}</p>}
                {sub2P2 && <p>{sub2P2}</p>}
              </div>
            )}

            {/* Section 3 */}
            {(sub3T || sub3P1 || sub3P2) && (
              <div className="space-y-6 mt-8">
                {sub3T && (
                  <h2
                    className="text-2xl font-semibold text-[#2D2D2D]"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    {sub3T}
                  </h2>
                )}
                {sub3P1 && <p>{sub3P1}</p>}
                {sub3P2 && <p>{sub3P2}</p>}
              </div>
            )}
          </>
        }
        relatedArticles={{
          title: relTitle,
          description: relDesc,
          items: relatedItems,
        }}
      />
    </>
  );
}
