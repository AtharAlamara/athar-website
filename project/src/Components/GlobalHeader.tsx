import React, { useState, useEffect } from 'react';
import { Menu, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { getLocale, localePath, setArabic, setEnglish } from '../lib/useTranslations';

function GlobalHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Locale + toggle label
  const locale = getLocale();
  const isAr = locale === 'ar';
  const toggleLabel = isAr ? 'EN' : 'العربية';

  // Translated labels
  const [texts, setTexts] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    supabase
      .from('Header')
      .select('name, text')
      .eq('locale', locale)
      .then(({ data, error }) => {
        if (error) {
          console.error('Error fetching header translations:', error);
          return;
        }
        const map: { [key: string]: string } = {};
        data?.forEach(({ name, text }) => {
          map[name] = text;
        });
        setTexts(map);
      });
  }, [locale]);

  const {
    'Header Projects': headerProjects = '',
    'Header Services': headerServices = '',
    'Header Studio': headerStudio = '',
    'Header News': headerNews = '',
    'Header Contact': headerContact = '',
    'Header Careers': headerCareers = '',
  } = texts;

  return (
    <>
      {/* Mobile Hero Logo - Only on mobile */}
      <div className="md:hidden fixed top-0 left-0 w-full flex justify-center items-center z-[100] pointer-events-none">
        <Link to={localePath('/') } className="pointer-events-auto">
          <img
            src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtrUu0dUMye0fMipAwBazW7nTb3VuFLlOCNx4J"
            alt="Athar Architecture Logo"
            className="h-[200px] max-h-none w-auto transform -translate-y-16"
          />
        </Link>
      </div>

      {/* HEADER (always visible) */}
      <header className="fixed top-0 left-0 right-0 z-[50] bg-black/50 backdrop-blur-sm border-b border-white/30">
        <div className="container mx-auto px-4 h-16 lg:h-20 flex items-center justify-between relative">
          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center w-full">
            {/* Left */}
            <div className="flex-1 flex items-center">
              <a
                href="https://www.instagram.com/athar.alamara/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mr-auto"
              >
                <Instagram size={13} />
              </a>
              <div className="flex items-center gap-8 ml-auto -mr-40">
                <Link
                  to={localePath('/projects')}
                  className="uppercase text-white font-thin tracking-wide text-s hover:opacity-80 transition-opacity duration-300"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
                >
                  {headerProjects}
                </Link>
                <Link
                  to={localePath('/services')}
                  className="uppercase text-white font-thin tracking-wide text-s hover:opacity-80 transition-opacity duration-300"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
                >
                  {headerServices}
                </Link>
                <Link
                  to={localePath('/studio')}
                  className="uppercase text-white font-thin tracking-wide text-s hover:opacity-80 transition-opacity duration-300"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
                >
                  {headerStudio}
                </Link>
              </div>
            </div>

            {/* Center */}
            <div className="flex-grow flex items-center justify-center pointer-events-none">
              <Link to={localePath('/')} className="block pointer-events-auto z-10">
                <img
                  src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtrUu0dUMye0fMipAwBazW7nTb3VuFLlOCNx4J"
                  alt="Athar Architecture Logo"
                  className="w-48 md:w-56 lg:w-64 h-auto md:transform md:translate-y-2"
                />
              </Link>
            </div>

            {/* Right */}
            <div className="flex-1 flex items-center">
              <div className="flex items-center gap-8 -ml-40 mr-auto">
                <Link
                  to={localePath('/news')}
                  className="uppercase text-white font-thin tracking-wide text-s hover:opacity-80 transition-opacity duration-300"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
                >
                  {headerNews}
                </Link>
                <Link
                  to={localePath('/contact')}
                  className="uppercase text-white font-thin tracking-wide text-s hover:opacity-80 transition-opacity duration-300"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
                >
                  {headerContact}
                </Link>
                <Link
                  to={localePath('/careers')}
                  className="uppercase text-white font-thin tracking-wide text-s hover:opacity-80 transition-opacity duration-300"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
                >
                  {headerCareers}
                </Link>
              </div>

              {/* Language Toggle */}
              {isAr ? (
                <button
                  onClick={setEnglish}
                  className="uppercase text-white font-thin tracking-wide text-[11px] ml-auto whitespace-nowrap hover:underline"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
                >
                  EN
                </button>
              ) : (
                <button
                  onClick={setArabic}
                  className="uppercase text-white font-thin tracking-wide text-[11px] ml-auto whitespace-nowrap hover:underline"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
                >
                  العربية
                </button>
              )}
            </div>
          </div>

          {/* MOBILE HEADER (≤ lg) */}
          <div className="flex lg:hidden w-full items-center justify-between relative px-4">
            {/* Left: burger */}
            <button
              className="text-white z-[160] pointer-events-auto"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>

            {/* Center: logo — shown on small-laptop/tablet, hidden on true phones */}
            <Link
              to={localePath('/')}
              className="hidden sm:block mx-auto pointer-events-auto"
              aria-label="Athar Architecture"
            >
              <img
                src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtrUu0dUMye0fMipAwBazW7nTb3VuFLlOCNx4J"
                alt="Athar Architecture Logo"
                className="w-48 md:w-56 lg:w-64 h-auto transform translate-y-2"
              />
            </Link>

            {/* Right: spacer to keep the logo perfectly centered */}
            <div className="w-6" />
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-md z-[200] transform transition-transform duration-500 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 h-auto flex items-center justify-start pt-4">
          <button
            className="text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="block w-6 h-px bg-white mt-2" />
          </button>
        </div>

        {/* Links */}
        <nav className="h-[calc(100vh-5rem)] flex flex-col items-center justify-center gap-8">
          {[
            { path: '/projects', label: headerProjects },
            { path: '/services', label: headerServices },
            { path: '/studio', label: headerStudio },
            { path: '/news', label: headerNews },
            { path: '/contact', label: headerContact },
            { path: '/careers', label: headerCareers },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={localePath(path)}
              className="uppercase text-white font-thin tracking-wide text-xl hover:opacity-80 transition-opacity duration-300"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Bottom icons & Language Toggle */}
        <div className="flex justify-between items-center w-full px-6 pb-6">
          <a
            href="https://www.instagram.com/athar.alamara/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <Instagram size={22} />
          </a>

          {isAr ? (
            <button
              onClick={() => { setIsMobileMenuOpen(false); setEnglish(); }}
              className="uppercase text-white font-thin tracking-wide text-[18px] whitespace-nowrap hover:underline"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              EN
            </button>
          ) : (
            <button
              onClick={() => { setIsMobileMenuOpen(false); setArabic(); }}
              className="uppercase text-white font-thin tracking-wide text-[18px] whitespace-nowrap hover:underline"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              العربية
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default GlobalHeader;
