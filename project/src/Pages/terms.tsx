import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import GlobalHeader from '../Components/GlobalHeader';
import SiteFooter from '../Components/SiteFooter';
import PageWrapper from '../Components/PageWrapper';
import ScrollToTop from '../Components/ScrollToTop';
import { supabase } from '../lib/supabaseClient';

function TermsPage() {
  // 1) locale from pathname
  const { pathname } = useLocation();
  const locale = pathname.startsWith('/sa/') ? 'ar' : 'en';
  const isAr = locale === 'ar';

  // 2) fetch TermsPage rows
  const [texts, setTexts] = React.useState<Record<string, string>>({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      const { data, error } = await supabase
        .from('TermsPage')
        .select('name,texts,locale')
        .eq('locale', locale);

      if (cancelled) return;

      if (error) {
        console.error('TermsPage fetch error:', error);
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
    }

    load();
    return () => { cancelled = true; };
  }, [locale]);

  // 3) tiny resolver (keys are used directly — no braces needed)
  const t = (key: string, fallback = '') => (texts[key] ?? fallback);

  return (
    <PageWrapper>
      <Helmet>
        {/* ultra-simple SEO, all keys match your table */}
        <title>{t('seo-terms-title', 'Terms | Athar Architecture')}</title>
        <meta name="description" content={t('seo-terms-description', 'Terms of Use for Athar Architecture website.')} />
        <meta name="keywords" content={t('seo-terms-keywords', 'terms of use, legal terms, Athar Architecture')} />
        <meta property="og:title" content={t('seo-terms-og-title', 'Terms | Athar Architecture')} />
        <meta property="og:description" content={t('seo-terms-og-description', 'Terms of Use for Athar Architecture website and services')} />
        <meta property="og:image" content={t('seo-terms-og-image', '/Athar Final.png')} />
        <meta property="og:type" content={t('seo-terms-og-type', 'website')} />
        <meta property="og:url" content={t('seo-terms-og-url', 'https://atharalamara.sa/terms')} />
        <meta name="twitter:card" content={t('seo-terms-twitter-card', 'summary_large_image')} />
        <meta name="twitter:title" content={t('seo-terms-twitter-title', 'Terms | Athar Architecture')} />
        <meta name="twitter:description" content={t('seo-terms-twitter-description', 'Terms of Use for Athar Architecture website and services')} />
        <meta name="twitter:image" content={t('seo-terms-twitter-image', '/Athar Final.png')} />
      </Helmet>

      <ScrollToTop />
      <GlobalHeader />

      {/* RTL/LTR behavior just like Privacy page */}
      <main
        className="pt-20"
        style={{ backgroundColor: '#FFFFFF' }}
        dir={isAr ? 'rtl' : 'ltr'}
        lang={isAr ? 'ar' : 'en'}
      >
        <style>{`
          .animate-element { opacity: 0; transition: all 1.2s ease-out; }
          .visible { opacity: 1; transform: translate(0,0); }
        `}</style>

        <div className="max-w-[720px] mx-auto px-4 md:px-12 pt-16 pb-20">
          {/* Title */}
          <div className="inline-block mb-6">
            <h1
              className="text-3xl uppercase font-medium"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: "#000000", fontWeight: 300 }}
            >
              {t('title', 'Terms of Use')}
            </h1>
          </div>

          {/* Body */}
          <div
            className={`prose prose-lg max-w-xl space-y-8 ${isAr ? 'text-right' : 'text-left'}`}
            style={{ color: '#000000', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            {/* Intro */}
            <p className="text-lg leading-relaxed font-thin">
              {t('intro', 'Welcome to the Athar Architecture website. By accessing and using this site, you agree to comply with the following terms and conditions. If you do not agree with these terms, please refrain from using the website.')}
            </p>

            {/* 1. Acceptance of Terms */}
            <section className="max-w-xl w-full">
              <h2 className="text-xl mb-2 font-light">
                {t('acc-title', '1. Acceptance of Terms')}
              </h2>
              <p className="text-lg leading-relaxed font-thin">
                {t('acc-p', 'These Terms of Use constitute a legally binding agreement between you and Athar Architecture. By using our website, you acknowledge that you have read, understood, and agree to be bound by these terms and our Privacy Policy.')}
              </p>
            </section>

            {/* 2. Use of Website */}
            <section>
              <h2 className="text-xl mb-2 font-light">
                {t('use-title', '2. Use of Website')}
              </h2>
              <p className="text-lg leading-relaxed font-thin">
                {t('use-lead', 'You may use our website for lawful purposes only. You agree not to:')}
              </p>
              <ul className={`list-disc ${isAr ? 'pr-6' : 'pl-6'} mt-4 space-y-2`}>
                <li className="text-lg leading-relaxed font-thin">{t('use-li1', 'Use the website in any way that violates Saudi Arabian laws or regulations')}</li>
                <li className="text-lg leading-relaxed font-thin">{t('use-li2', 'Attempt to gain unauthorized access to our systems or networks')}</li>
                <li className="text-lg leading-relaxed font-thin">{t('use-li3', 'Interfere with the proper functioning of the website')}</li>
                <li className="text-lg leading-relaxed font-thin">{t('use-li4', 'Use automated systems to access the website without permission')}</li>
              </ul>
            </section>

            {/* 3. Intellectual Property Rights */}
            <section>
              <h2 className="text-xl mb-2 font-light">
                {t('ip-title', '3. Intellectual Property Rights')}
              </h2>
              <p className="text-lg leading-relaxed font-thin">
                {t('ip-p', 'All content on this website, including text, images, logos, designs, and architectural plans, is the property of Athar Architecture and is protected by Saudi Arabian and international copyright laws. You may not:')}
              </p>
              <ul className={`list-disc ${isAr ? 'pr-6' : 'pl-6'} mt-4 space-y-2`}>
                <li className="text-lg leading-relaxed font-thin">{t('ip-li1', 'Reproduce, distribute, or display our content without written permission')}</li>
                <li className="text-lg leading-relaxed font-thin">{t('ip-li2', 'Use our content for commercial purposes')}</li>
                <li className="text-lg leading-relaxed font-thin">{t('ip-li3', 'Modify or create derivative works from our content')}</li>
              </ul>
            </section>

            {/* 4. Privacy and Data Collection */}
            <section>
              <h2 className="text-xl mb-2 font-light">
                {t('privacy-title', '4. Privacy and Data Collection')}
              </h2>
              <p className="text-lg leading-relaxed font-thin">
                {t('privacy-p', 'Our website uses Google Analytics to collect anonymous usage data to improve our services. By using our website, you consent to this data collection as described in our Privacy Policy. You can opt-out of analytics tracking through our cookie preferences.')}
              </p>
            </section>

            {/* 5. Accuracy of Information */}
            <section>
              <h2 className="text-xl mb-2 font-light">
                {t('accuracy-title', '5. Accuracy of Information')}
              </h2>
              <p className="text-lg leading-relaxed font-thin">
                {t('accuracy-p', 'While we strive to keep information current and accurate, we make no warranties about the completeness, reliability, or accuracy of the information on this website. All project information and services are subject to change without notice.')}
              </p>
            </section>

            {/* 6. External Links */}
            <section>
              <h2 className="text-xl mb-2 font-light">
                {t('links-title', '6. External Links')}
              </h2>
              <p className="text-lg leading-relaxed font-thin">
                {t('links-p', 'Our website may contain links to third-party websites, including Google Analytics and social media platforms. These links are provided for convenience only. Athar Architecture does not endorse or assume responsibility for the content or practices of external websites.')}
              </p>
            </section>

            {/* 7. Limitation of Liability */}
            <section>
              <h2 className="text-xl mb-2 font-light">
                {t('liability-title', '7. Limitation of Liability')}
              </h2>
              <p className="text-lg leading-relaxed font-thin">
                {t('liability-p', 'To the fullest extent permitted by Saudi Arabian law, Athar Architecture shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on its content.')}
              </p>
            </section>

            {/* 8. Governing Law */}
            <section>
              <h2 className="text-xl mb-2 font-light">
                {t('law-title', '8. Governing Law')}
              </h2>
              <p className="text-lg leading-relaxed font-thin">
                {t('law-p', 'These Terms of Use are governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of Saudi Arabian courts.')}
              </p>
            </section>

            {/* 9. Contact Information */}
            <section>
              <h2 className="text-xl mb-2 font-light">
                {t('contact-title', '9. Contact Information')}
              </h2>
              <p className="text-lg leading-relaxed font-thin">
                {t('contact-p', 'For questions regarding these terms, please contact us at:')}
              </p>
              <div className="mt-4 space-y-1">
                <p className="text-lg leading-relaxed font-thin">
                  {t('contact-email-label', 'Email:')}{' '}
                  <a
                    href="mailto:inquiries@atharalamara.sa"
                    className="text-[#2D2D2D] underline hover:text-[#5B4F48] transition-colors duration-300"
                  >
                    <bdi>{t('contact-email', 'inquiries@atharalamara.sa')}</bdi>
                  </a>
                </p>
                <p className="text-lg leading-relaxed font-thin">
                  {t('contact-address-label', 'Address:')}{' '}
                  {t('contact-address', 'Al Takhassusi St., Riyadh, Saudi Arabia')}
                </p>
              </div>
            </section>

            {/* 10. Changes to These Terms */}
            <section>
              <h2 className="text-xl mb-2 font-light">
                {t('changes-title', '10. Changes to These Terms')}
              </h2>
              <p className="text-lg leading-relaxed font-thin">
                {t('changes-p', 'We may update these Terms of Use from time to time to reflect changes in our practices or for legal reasons. Any updates will be posted on this page with a revised "Last Updated" date. Your continued use of the website constitutes acceptance of the updated terms.')}
              </p>
            </section>
          </div>

          {/* Last Updated */}
          <h2
            className="text-xl font-normal mt-12 text-center"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: '#000000', fontWeight: 100 }}
          >
            {t('last-updated-label', 'Last Updated:')}{' '}
            {t('last-updated-date', 'January 15, 2025')}
          </h2>
        </div>
      </main>

      <SiteFooter />
    </PageWrapper>
  );
}

export default TermsPage;
