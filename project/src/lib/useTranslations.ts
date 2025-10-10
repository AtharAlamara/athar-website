// src/lib/useTranslations.ts
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from './supabaseClient';

/** ----- Locale core utils (non-hook) ----- **/

/** True if the given path is Arabic (/sa or /sa/...) */
export const pathIsArabic = (pathname: string): boolean =>
  pathname === '/sa' || pathname.startsWith('/sa/');

/** Read current locale from the current URL path (safe to call anywhere) */
export const getLocale = (): 'en' | 'ar' =>
  pathIsArabic(window.location.pathname) ? 'ar' : 'en';

/** Cookie helpers */
export const isArabicCookie = (): boolean =>
  /(?:^|;\s*)lang=ar(?:;|$)/i.test(document.cookie);

/** Build a path respecting cookie (used for links) */
export const localePath = (to: string): string => {
  if (!to.startsWith('/')) to = '/' + to;
  const arActive = isArabicCookie() || pathIsArabic(window.location.pathname);
  return arActive && !to.startsWith('/sa') ? '/sa' + to : to;
};

export const setArabic = () => {
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = "lang=ar; Path=/; Max-Age=31536000; SameSite=Lax" + secure;
  const { pathname, search, hash } = window.location;
  if (!pathIsArabic(pathname)) {
    window.location.assign('/sa' + pathname + search + hash);
  } else {
    window.location.reload();
  }
};

export const setEnglish = () => {
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = "lang=en; Path=/; Max-Age=31536000; SameSite=Lax" + secure;
  const { pathname, search, hash } = window.location;
  const next = pathname.replace(/^\/sa(\/?)/, (_m, slash) => (slash ? '/' : '')) + search + hash;
  if (next !== pathname + search + hash) {
    window.location.assign(next);
  } else {
    window.location.reload();
  }
};

/** ----- React hook version (for components) ----- **/

/**
 * Returns the current locale, "ar" if path is "/sa" or starts with "/sa/",
 * otherwise "en".
 */
export function useLocale(): 'en' | 'ar' {
  const { pathname } = useLocation();
  return pathIsArabic(pathname) ? 'ar' : 'en';
}

/** ----- Supabase translations hook (unchanged behavior) ----- **/

/**
 * Fetches translations from your Supabase table for the given keys.
 * @param table   The Supabase table name (e.g. "Landing").
 * @param keys    An array of the `name` values you want to fetch.
 * @returns       A map from each key to its translated text.
 */
export function useTranslations<T extends string>(
  table: string,
  keys: readonly T[]
): Record<T, string> {
  const locale = useLocale();
  const [texts, setTexts] = useState<Record<T, string>>({} as Record<T, string>);

  useEffect(() => {
    if (keys.length === 0) return;

    supabase
      .from(table)
      .select('name, text')
      .in('name', keys)
      .eq('locale', locale)
      .then(({ data, error }) => {
        if (error) {
          console.error('useTranslations:', error);
          return;
        }
        const map = {} as Record<T, string>;
        data?.forEach(({ name, text }) => {
          map[name as T] = text;
        });
        setTexts(map);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, table, JSON.stringify(keys)]); // JSON.stringify keeps semantics you had

  return texts;
}
