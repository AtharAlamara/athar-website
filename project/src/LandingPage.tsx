import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { LocaleLink as Link } from '@/lib/LocaleLink';
import { ChevronDown, Menu, Instagram, Mail, Linkedin, Facebook, Twitter  } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { supabase } from './lib/supabaseClient';

import LandingMeta from './Components/LandingMeta';
import LandingHeader from './Components/LandingHeader';
import ScrollToTop from './Components/ScrollToTop';
import CookieBanner from './Components/CookieBanner';
import SiteFooter from './Components/SiteFooter';



export default function LandingPage() {
  // ——— locale & translations ———
  const { pathname, search } = useLocation();
  const locale = pathname.startsWith('/sa/') ? 'ar' : 'en';
  const [texts, setTexts] = useState<Record<string,string>>({});

  useEffect(() => {
    supabase
      .from('Landing')
      .select('name, text')
      .eq('locale', locale)
      .then(({ data, error }) => {
        if (error) {
          console.error('Landing translations error:', error);
          return;
        }
        const map: Record<string,string> = {};
        data.forEach(({ name, text }) => {
          map[name] = text;
        });
        setTexts(map);
      });
  }, [locale]);

  // ——— all your refs & state for animations & carousel ———
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [areButtonsVisible, setAreButtonsVisible] = useState(false);

  const images = [
    'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTt1b3cWkrEmMoiqkdxyP8n3stpQGlWzIguDj1Z',
    'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtV8p1ZldWPxwvAJIkTRY1Sqacln507fXbum4s',
    'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtvl8FCwAU60S9lVNzj2mPfTxsYKrMtInucLAW',
    'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTt33xcNElzT14wWsaKpBehUvJ9nYFdoLCQi7Nr',
    'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTthrxfNwzJgCG8foS15FYXj3QBWPNi9MqpAbzl',
    'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtCSNhxwYUxyJWIcq1kSK9o6mvLgniXlMQZrpe',
    'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtteY5nhMcLo2WT1svUXAC0heV7z9Jan8B6lbr',
    'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtizKX9ZfcbVits87eYDgj5G4zflHLph1QRuxw',
  ];

  const gridItems = [
    { name: 'projects', path: '/projects', image: 'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtzNBmZNF4VOYoqlE8KBP1etFvkZn6fRJNjQwI' },
    { name: 'services', path: '/services', image: 'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtZfhgCorIwQ42fTitNUoEO7HnMs6muXZFWAgq' },
    { name: 'studio',   path: '/studio',   image: 'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtWj0QUYwtiXDPEsxpnmcaLQy2Wwlk9HTjSZqN' },
    { name: 'news',     path: '/news',     image: 'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtUxVTwOo7UDdSu4zjNVOnmb39pqwgZyrRBY56' },
  ];

  // carousel auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(i => i === images.length - 1 ? 0 : i + 1);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // fade-in observers
  useEffect(() => {
    if (!ctaRef.current) return;
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setIsCtaVisible(true); o.disconnect(); }
    }, { threshold: 0.2 });
    o.observe(ctaRef.current);
    return () => o.disconnect();
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setIsGridVisible(true); o.disconnect(); }
    }, { threshold: 0.1 });
    o.observe(gridRef.current);
    return () => o.disconnect();
  }, []);

  useEffect(() => {
    if (!buttonsRef.current) return;
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setAreButtonsVisible(true); o.disconnect(); }
    }, { threshold: 0.2 });
    o.observe(buttonsRef.current);
    return () => o.disconnect();
  }, []);

  const handleScrollDown = () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });

  return (
    <>
      <LandingMeta />
      <LandingHeader />

      <main className="relative w-full h-screen overflow-hidden">
        {/* One logo for ALL non-phone breakpoints (md and up) */}
<div className="hidden md:block fixed -top-20 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
  <img
    src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtrUu0dUMye0fMipAwBazW7nTb3VuFLlOCNx4J"
    alt="Athar Architecture Logo"
    className="w-64 h-auto"
  />
</div>


        {images.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={img} alt={`Slide ${idx+1}`} className="w-full h-full object-cover" />
          </div>
        ))}

        <div className="absolute inset-0 bg-black/10" />

        <button
          onClick={handleScrollDown}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white hover:opacity-80"
        >
          <span className="text-s font-thin tracking-widest uppercase mb-2" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            {texts['scroll-down'] || 'Scroll Down'}
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </main>

      <style>{`
        @keyframes fadeInUp { from {opacity:0;transform:translateY(50px);} to {opacity:1;transform:translateY(0);} }
      `}</style>

      {/* Grid */}
      <section ref={gridRef} className="relative">
        <div className="h-2 bg-white w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          <div className="hidden md:block absolute left-1/2 top-0 w-2 h-full bg-white -translate-x-1/2 z-10" />

          {gridItems.map((it, i) => (
            <React.Fragment key={it.name}>
              <Link to={it.path}>
                <div
                  className="relative h-[50vh] cursor-pointer group overflow-hidden"
                  style={{
                    opacity: 0,
                    transform: 'translateY(50px)',
                    animation: isGridVisible
                      ? `fadeInUp 1s ease-out forwards ${i * 0.2}s`
                      : undefined,
                  }}
                >
                  <div
  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
  style={{
    backgroundImage: `url(${it.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
/>
{/* Overlay stays below the text */}
<div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-700 group-hover:opacity-0 z-10" />

{/* Centered text wrapper above overlay */}
<div className="absolute inset-0 z-20 flex items-center justify-center p-6">
  <h2
    className="text-white text-2xl md:text-3xl lg:text-4xl uppercase tracking-widest text-center transition-transform duration-700 ease-out group-hover:scale-110"
    style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 100 }}
  >
    {texts[it.name] || it.name}
  </h2>
</div>

                </div>
              </Link>
              {i < gridItems.length - 1 && <div className="h-2 bg-white w-full md:hidden" />}
              {i === 1 && <div className="hidden md:block absolute top-1/2 left-0 w-full h-2 bg-white z-10" />}
            </React.Fragment>
          ))}
        </div>
        <div className="h-2 bg-white w-full" />
      </section>

      <style>{`
        @keyframes fadeInRight { from {opacity:0;transform:translateX(-100px);} to {opacity:1;transform:translateX(0);} }
        @keyframes fadeInLeft  { from {opacity:0;transform:translateX(100px);}  to {opacity:1;transform:translateX(0);} }
      `}</style>

      {/* CTA */}
      <section className="bg-white py-12 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div ref={ctaRef} className="relative">
            <div
              className="h-[1px] w-[100px] md:w-[160px] mb-6 opacity-0"
              style={{
                backgroundColor: '#000',
                animation: isCtaVisible ? 'fadeInRight 2.5s ease-out forwards' : undefined,
              }}
            />
            <h2 className="text-3xl tracking-widest mb-8">
              <span
                className="block mb-2"
                style={isCtaVisible ? { animation: 'fadeInRight 2.5s ease-out forwards' } : {}}
              >
                {texts['title-line-1'] || 'Get the space of your dreams,'}
              </span>
              <span
                className="block"
                style={isCtaVisible ? { animation: 'fadeInLeft 2.5s ease-out forwards' } : {}}
              >
                {texts['title-line-2'] || 'with the luxury you deserve.'}
              </span>
            </h2>
            <div
              className="h-[1px] w-[100px] md:w-[160px] ml-auto mb-6 opacity-0"
              style={{
                backgroundColor: '#000',
                animation: isCtaVisible ? 'fadeInLeft 2.5s ease-out forwards' : undefined,
              }}
            />
          </div>

          <p
            className="mx-auto mt-12 text-lg max-w-2xl"
            style={{
              opacity: 0,
              transform: 'translateY(50px)',
              animation: areButtonsVisible ? 'fadeInUp 1s ease-out forwards' : undefined,
              animationDelay: '0.5s',
            }}
          >
            {texts['subtitle'] || "Leave us a message today & we'll take care of everything!"}
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col md:flex-row justify-center gap-4 mt-8"
          >
            <a
  href="https://wa.me/966550867366"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 px-4 md:px-8 py-2 md:py-3 border border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] transition-colors duration-300 rounded-none"
  style={{
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 400,
    opacity: 0,
    transform: 'translateY(50px)',
    animation: areButtonsVisible ? 'fadeInUp 1s ease-out forwards' : undefined,
    animationDelay: areButtonsVisible ? '2s' : '0s',
  }}
>

              <SiWhatsapp size={18} className="inline-block mr-2" />
              {texts['whatsapp-cta'] || 'WhatsApp'}
            </a>
            <a
  href="mailto:inquiries@atharalamara.sa"
  className="inline-flex items-center justify-center gap-2 px-4 md:px-8 py-2 md:py-3 border border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] transition-colors duration-300 rounded-none"
  style={{
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 400,
    opacity: 0,
    transform: 'translateY(50px)',
    animation: areButtonsVisible ? 'fadeInUp 1s ease-out forwards' : undefined,
    animationDelay: areButtonsVisible ? '2s' : '0s',
  }}
>

              <Mail size={18} className="inline-block mr-2" />
              {texts['email-cta'] || 'Email'}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
