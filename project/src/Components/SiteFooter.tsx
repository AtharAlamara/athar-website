// src/Components/SiteFooter.tsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LocaleLink as Link } from '@/lib/LocaleLink';
import { supabase } from '../lib/supabaseClient';
import { Instagram, Facebook } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6'; // proper “X” icon

export default function SiteFooter() {
  const path = useLocation().pathname;
  const locale = path.startsWith('/sa/') ? 'ar' : 'en';
  const [texts, setTexts] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    supabase
      .from('Footer')
      .select('name, text')
      .eq('locale', locale)
      .then(({ data, error }) => {
        if (error) {
          console.error('Error fetching footer translations:', error);
          return;
        }
        const map: { [key: string]: string } = {};
        (data || []).forEach(({ name, text }) => {
          map[name] = text;
        });
        setTexts(map);
      });
  }, [locale]);

  const {
    'Footer Contact': footerContact = '',
    'Footer Address': footerAddress = '',
    'Footer Projects': footerProjects = '',
    'Footer Services': footerServices = '',
    'Footer Studio': footerStudio = '',
    'Footer News': footerNews = '',
    'Footer Careers': footerCareers = '',
    'Footer Terms': footerTerms = '',
    'Footer Privacy': footerPrivacy = '',
    'Footer Copyright': footerCopyright = '',
    'Footer Website By': footerWebsiteBy = '',
  } = texts;

  return (
    <footer className="bg-[#2C2C2C] py-12">
      {/* ---------- MOBILE FOOTER ---------- */}
      <div className="md:hidden container mx-auto px-6">
        <div className="flex flex-col items-start space-y-8">
          {/* Contact Block */}
          <div className="flex flex-col items-start w-full">
            <Link
              to="/contact"
              className="text-[#FFFFFF] text-xs uppercase mb-4 hover:underline"
              style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 100, letterSpacing: '0.03em' }}
            >
              {footerContact}
            </Link>

            <div
              className="text-[#FFFFFF] space-y-2"
              style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 100, letterSpacing: '0.03em' }}
            >
              <p className="uppercase text-xs">{footerAddress}</p>
              <a href="tel:+966550867366" className="uppercase text-xs text-[#FFFFFF] hover:underline">
                +966 55 086 7366
              </a>
              <a href="tel:+966530740220" className="uppercase text-xs text-[#FFFFFF] hover:underline">
                +966 53 074 0220
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-start gap-3 w-full">
            <Link to="/projects" className="text-[#FFFFFF] hover:underline uppercase text-xs">{footerProjects}</Link>
            <Link to="/services" className="text-[#FFFFFF] hover:underline uppercase text-xs">{footerServices}</Link>
            <Link to="/studio" className="text-[#FFFFFF] hover:underline uppercase text-xs">{footerStudio}</Link>
            <Link to="/news" className="text-[#FFFFFF] hover:underline uppercase text-xs">{footerNews}</Link>
            <Link to="/contact" className="text-[#FFFFFF] hover:underline uppercase text-xs">{footerContact}</Link>
            <Link to="/careers" className="text-[#FFFFFF] hover:underline uppercase text-xs">{footerCareers}</Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6 w-full">
            <a
              href="https://www.tiktok.com/@athararch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFFFFF] hover:opacity-80"
            >
              <SiTiktok size={18} />
            </a>

            <a
              href="https://x.com/AtharAlamara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFFFFF] hover:opacity-80"
            >
              <FaXTwitter size={18} />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61576986000561"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFFFFF] hover:opacity-80"
            >
              <Facebook size={18} />
            </a>

            <a
              href="https://www.instagram.com/athar.alamara/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFFFFF] hover:opacity-80"
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-[#FFFFFF]/20 pt-8 w-full">
            <div className="flex flex-col items-start gap-2">
              <div className="flex flex-col gap-3 mb-6">
                <Link to="/terms" className="text-[#FFFFFF] hover:underline uppercase text-xs">{footerTerms}</Link>
                <Link to="/privacy" className="text-[#FFFFFF] hover:underline uppercase text-xs">{footerPrivacy}</Link>
              </div>

              <p className="text-[#FFFFFF] text-xs">{footerCopyright}</p>

              <a
                href="https://bespokegrowth.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C4BDB7] text-xs hover:underline"
              >
                {footerWebsiteBy}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- DESKTOP FOOTER ---------- */}
      <div className="hidden md:block container mx-auto px-6">
        <div className="grid grid-cols-4 gap-8">
          {/* Contact Block */}
          <div>
            <Link to="/contact" className="text-[#FFFFFF] text-xs uppercase mb-4 block hover:underline">
              {footerContact}
            </Link>
            <div className="text-[#FFFFFF] space-y-2">
              <p className="uppercase text-xs">{footerAddress}</p>
              <a href="tel:+966550867366" className="uppercase text-xs text-[#FFFFFF] hover:underline">
                +966 55 086 7366
              </a>
              <a href="tel:+966530740220" className="uppercase text-xs text-[#FFFFFF] hover:underline">
                +966 53 074 0220
              </a>
            </div>
          </div>

          {/* Menu Navigation */}
          <div className="col-span-2 flex gap-16">
            <div className="flex flex-col gap-1">
              <Link to="/projects" className="text-[#FFFFFF] hover:underline uppercase text-xs">{footerProjects}</Link>
              <Link to="/services" className="text-[#FFFFFF] hover:underline uppercase text-xs">{footerServices}</Link>
              <Link to="/studio" className="text-[#FFFFFF] hover:underline uppercase text-xs">{footerStudio}</Link>
              <Link to="/news" className="text-[#FFFFFF] hover:underline uppercase text-xs">{footerNews}</Link>
              <Link to="/contact" className="text-[#FFFFFF] hover:underline uppercase text-xs">{footerContact}</Link>
              <Link to="/careers" className="text-[#FFFFFF] hover:underline uppercase text-xs">{footerCareers}</Link>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-end items-center gap-6">
            <a
              href="https://www.tiktok.com/@athararch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFFFFF] hover:opacity-80"
            >
              <SiTiktok size={18} />
            </a>

            <a
              href="https://x.com/AtharAlamara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFFFFF] hover:opacity-80"
            >
              <FaXTwitter size={18} />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61576986000561"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFFFFF] hover:opacity-80"
            >
              <Facebook size={18} />
            </a>

            <a
              href="https://www.instagram.com/athar.alamara/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFFFFF] hover:opacity-80"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#FFFFFF]/20 mt-12 pt-8">
          <div className="flex justify-between items-center text-[#FFFFFF] gap-6">
            <p className="text-xs">{footerCopyright}</p>
            <Link to="/terms" className="text-[#FFFFFF] hover:underline text-xs">{footerTerms}</Link>
            <Link to="/privacy" className="text-[#FFFFFF] hover:underline text-xs">{footerPrivacy}</Link>
            <a
              href="https://bespokegrowth.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#C4BDB7] hover:underline"
            >
              {footerWebsiteBy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
