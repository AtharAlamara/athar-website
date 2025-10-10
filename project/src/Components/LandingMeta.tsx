// src/Components/LandingMeta.tsx
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../lib/supabaseClient';
import { useLocation } from 'react-router-dom';

interface SeoEntry {
  name: string;
  text: string;
}

export default function LandingMeta() {
  const { pathname } = useLocation();
  const locale = pathname.startsWith('/sa/') ? 'ar' : 'en';
  const [seo, setSeo] = useState<Record<string,string>>({});

  useEffect(() => {
    const names = [
      'seo_title','seo_desc','keywords',
      'og_title','og_desc','og_image','og_type','og_url',
      'twitter_card','twitter_title','twitter_desc','twitter_image'
    ];
    supabase
      .from<SeoEntry>('Landing')         // <-- your table name
      .select('name, text')
      .in('name', names)
      .eq('locale', locale)
      .then(({ data, error }) => {
        if (error) console.error(error);
        else {
          const map: Record<string,string> = {};
          data.forEach(({ name, text }) => { map[name] = text; });
          setSeo(map);
        }
      });
  }, [locale]);

  return (
    <Helmet>
      <title>{seo['seo_title']}</title>
      <meta name="description" content={seo['seo_desc']} />
      <meta name="keywords" content={seo['keywords']} />

      <meta property="og:title" content={seo['og_title']} />
      <meta property="og:description" content={seo['og_desc']} />
      <meta property="og:image" content={seo['og_image']} />
      <meta property="og:type" content={seo['og_type']} />
      <meta property="og:url" content={seo['og_url']} />

      <meta name="twitter:card" content={seo['twitter_card']} />
      <meta name="twitter:title" content={seo['twitter_title']} />
      <meta name="twitter:description" content={seo['twitter_desc']} />
      <meta name="twitter:image" content={seo['twitter_image']} />
    </Helmet>
  );
}
