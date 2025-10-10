import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import GlobalHeader from '../Components/GlobalHeader';
import SiteFooter from '../Components/SiteFooter';
import PageWrapper from '../Components/PageWrapper';
import ScrollToTop from '../Components/ScrollToTop';
import { supabase } from '../lib/supabaseClient';

function PrivacyPage() {
  const headlineRef = React.useRef<HTMLDivElement | null>(null);
  const mobileHeadlineRef = React.useRef<HTMLDivElement | null>(null);

  // --- locale detection: '/sa/' => Arabic ---
  const { pathname } = useLocation();
  const locale = pathname.startsWith('/sa/') ? 'ar' : 'en';
  const isAr = locale === 'ar';

  // --- fetch texts from Supabase (PrivacyPage table: columns id, texts, name, locale) ---
  const [texts, setTexts] = React.useState<Record<string, string>>({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      const { data, error } = await supabase
        .from('PrivacyPage')
        .select('name,texts')
        .eq('locale', locale);

      if (cancelled) return;

      if (error) {
        console.error('PrivacyPage fetch error:', error);
        setTexts({});
        setLoading(false);
        return;
      }

      const map: Record<string, string> = {};
      (data || []).forEach((row: any) => {
        map[row.name] = row.texts;
      });

      setTexts(map);
      setLoading(false);
    }

    load();
    return () => { cancelled = true; };
  }, [locale]);

  // --- tiny resolver: accepts "{key}" or "key" and provides fallback ---
  const t = (maybeKey: string, fallback = '') => {
    const m = typeof maybeKey === 'string' ? maybeKey.match(/^\{(.+)\}$/) : null;
    const key = m ? m[1] : maybeKey;
    return texts[key] ?? fallback;
  };

  // --- simple in-view animation hooks (unchanged from your version) ---
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.2, rootMargin: '0px' }
    );

    if (headlineRef.current) observer.observe(headlineRef.current);
    if (mobileHeadlineRef.current) observer.observe(mobileHeadlineRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <PageWrapper>
      <Helmet>
        <title>{t('{seo-privacy-title}', 'Privacy Policy | Athar Alamara')}</title>
        <meta name="description" content={t('{seo-privacy-description}', 'Privacy Policy for Athar Alamara. How we collect, use, and protect your personal data.')} />
        <meta name="keywords" content={t('{seo-privacy-keywords}', 'privacy policy, data protection, personal data, Athar Alamara privacy')} />
        <meta property="og:title" content={t('{seo-privacy-og-title}', 'Privacy Policy | Athar Alamara')} />
        <meta property="og:description" content={t('{seo-privacy-og-description}', 'Privacy Policy for Athar Alamara website and services')} />
        <meta property="og:image" content={t('{seo-privacy-og-image}', '/Athar Final.png')} />
        <meta property="og:type" content={t('{seo-privacy-og-type}', 'website')} />
        <meta property="og:url" content={t('{seo-privacy-og-url}', 'https://atharalamara.sa/privacy')} />
        <meta name="twitter:card" content={t('{seo-privacy-twitter-card}', 'summary_large_image')} />
        <meta name="twitter:title" content={t('{seo-privacy-twitter-title}', 'Privacy Policy | Athar Alamara')} />
        <meta name="twitter:description" content={t('{seo-privacy-twitter-description}', 'Privacy Policy for Athar Alamara website and services')} />
        <meta name="twitter:image" content={t('{seo-privacy-twitter-image}', '/Athar Final.png')} />
      </Helmet>

      <ScrollToTop />
      <GlobalHeader />

      <main className="pt-20 bg-[#FFFFFF]" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
        {/* Animation styles */}
        <style>{`
          .animate-element { opacity: 0; transition: all 1.2s ease-out; }
          .headline-animation { transform: translateY(-30px); }
          .visible { opacity: 1; transform: translate(0, 0); }
          .delay-500 { transition-delay: 0.5s; }
        `}</style>

        <div className="pt-20 bg-[#FFFFFF]">
          <div className={`max-w-[720px] mx-auto px-4 md:px-12 pt-16 pb-20 ${isAr ? 'text-right' : 'text-left'}`}>

            {/* Title */}
            <div className="inline-block mb-6" ref={headlineRef}>
              <h1
                className="text-3xl uppercase font-medium text-[#000000]"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 300 }}
              >
                {t('{title}', 'Privacy Policy')}
              </h1>
            </div>

            {/* Loading fallback */}
            {loading && (
              <p className="text-sm text-gray-500" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                {/* keep page stable while fetching */}
              </p>
            )}

            {/* Body */}
            {!loading && (
              <div className="prose prose-lg max-w-xl space-y-8" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                {/* Intro */}
                <p className="text-lg leading-relaxed font-thin text-[#000000]"
                   style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  {t('{intro}', 'At Athar Architecture, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, in compliance with Saudi Arabian data protection regulations.')}
                </p>

                {/* 1. Information We Collect */}
                <section>
                  <h2 className="text-xl mb-2 font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: "#000000" }}>
                    {t('{info-title}', '1. Information We Collect')}
                  </h2>
                  <p className="text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    {t('{info-lead}', 'We may collect the following types of information:')}
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li className="text-lg leading-relaxed font-thin text-[#000000]">{t('{info-li1}', 'Personal Information: Name, email address, phone number, and other details you provide voluntarily through contact forms or communications.')}</li>
                    <li className="text-lg leading-relaxed font-thin text-[#000000]">{t('{info-li2}', 'Usage Data: Information about how you use our website, including pages visited, time spent, and interactions, collected through Google Analytics.')}</li>
                    <li className="text-lg leading-relaxed font-thin text-[#000000]">{t('{info-li3}', 'Technical Data: IP address, browser type, device information, and cookies.')}</li>
                  </ul>
                </section>

                {/* 2. How We Use Your Information */}
                <section>
                  <h2 className="text-xl mb-2 font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: "#000000" }}>
                    {t('{use-title}', '2. How We Use Your Information')}
                  </h2>
                  <p className="text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    {t('{use-lead}', 'We use the information we collect to:')}
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li className="text-lg leading-relaxed font-thin text-[#000000]">{t('{use-li1}', 'Respond to your inquiries and provide customer support')}</li>
                    <li className="text-lg leading-relaxed font-thin text-[#000000]">{t('{use-li2}', 'Analyze website traffic and user behavior to improve our services')}</li>
                    <li className="text-lg leading-relaxed font-thin text-[#000000]">{t('{use-li3}', 'Ensure the security and functionality of our website')}</li>
                    <li className="text-lg leading-relaxed font-thin text-[#000000]">{t('{use-li4}', 'Comply with legal obligations under Saudi Arabian law')}</li>
                  </ul>
                </section>

                {/* 3. Google Analytics */}
                <section>
                  <h2 className="text-xl mb-2 font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: "#000000" }}>
                    {t('{ga-title}', '3. Google Analytics')}
                  </h2>
                  <p className="text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    {t('{ga-p1}', 'We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information anonymously and reports website trends without identifying individual visitors. This service may use cookies to track your usage patterns.')}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    {t('{ga-p2}', 'You can opt-out of Google Analytics by:')}
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li className="text-lg leading-relaxed font-thin text-[#000000]">{t('{ga-li1}', 'Using our cookie preferences to disable analytics')}</li>
                    <li className="text-lg leading-relaxed font-thin text-[#000000]">{t('{ga-li2}', 'Installing the Google Analytics opt-out browser add-on')}</li>
                    <li className="text-lg leading-relaxed font-thin text-[#000000]">{t('{ga-li3}', 'Adjusting your browser settings to block cookies')}</li>
                  </ul>
                </section>

                {/* 4. Cookies Policy */}
                <section>
                  <h2 className="text-xl mb-2 font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: "#000000" }}>
                    {t('{cookies-title}', '4. Cookies Policy')}
                  </h2>
                  <p className="text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    {t('{cookies-p1}', 'We use cookies to enhance your browsing experience and analyze website performance. Cookies are small text files stored on your device that help us:')}
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li className="text-lg leading-relaxed font-thin text-[#000000]">{t('{cookies-li1}', 'Remember your cookie preferences')}</li>
                    <li className="text-lg leading-relaxed font-thin text-[#000000]">{t('{cookies-li2}', 'Analyze website usage through Google Analytics')}</li>
                    <li className="text-lg leading-relaxed font-thin text-[#000000]">{t('{cookies-li3}', 'Ensure proper website functionality')}</li>
                  </ul>
                  <p className="mt-4 text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    {t('{cookies-p2}', 'You can manage your cookie preferences through our cookie banner or by adjusting your browser settings.')}
                  </p>
                </section>

                {/* 5. Data Sharing and Disclosure */}
                <section>
                  <h2 className="text-xl mb-2 font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: "#000000" }}>
                    {t('{share-title}', '5. Data Sharing and Disclosure')}
                  </h2>
                  <p className="text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    {t('{share-p1}', 'We do not sell, rent, or trade your personal information to third parties. We may share data with:')}
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li className="text-lg leading-relaxed font-thin text-[#000000]">{t('{share-li1}', 'Google Analytics (anonymized usage data only)')}</li>
                    <li className="text-lg leading-relaxed font-thin text-[#000000]">{t('{share-li2}', 'Trusted service providers who assist in website operations under strict confidentiality agreements')}</li>
                    <li className="text-lg leading-relaxed font-thin text-[#000000]">{t('{share-li3}', 'Legal authorities when required by Saudi Arabian law')}</li>
                  </ul>
                </section>

                {/* 6. Data Security */}
                <section>
                  <h2 className="text-xl mb-2 font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: "#000000" }}>
                    {t('{security-title}', '6. Data Security')}
                  </h2>
                  <p className="text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    {t('{security-p1}', 'We implement appropriate technical and organizational measures to protect your information from unauthorized access, use, or disclosure, in accordance with Saudi Arabian data protection standards.')}
                  </p>
                </section>

                {/* 7. Your Rights */}
                <section>
                  <h2 className="text-xl mb-2 font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: "#000000" }}>
                    {t('{rights-title}', '7. Your Rights')}
                  </h2>
                  <p className="text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    {t('{rights-lead}', 'Under Saudi Arabian regulations, you have the right to:')}
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li className="text-lg leading-relaxed font-thin text-[#000000]">{t('{rights-li1}', 'Access your personal information')}</li>
                    <li className="text-lg leading-relaxed font-thin text-[#000000]">{t('{rights-li2}', 'Correct inaccurate data')}</li>
                    <li className="text-lg leading-relaxed font-thin text-[#000000]">{t('{rights-li3}', 'Request deletion of your data')}</li>
                    <li className="text-lg leading-relaxed font-thin text-[#000000]">{t('{rights-li4}', 'Object to data processing')}</li>
                    <li className="text-lg leading-relaxed font-thin text-[#000000]">{t('{rights-li5}', 'Withdraw consent for analytics cookies')}</li>
                  </ul>
                  <p
  className="mt-4 text-lg leading-relaxed font-thin text-[#000000]"
  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
>
  {t('{rights-p2}', 'To exercise these rights, please contact us at')}
  {' '}{/* explicit space that won’t get trimmed */}
  <a
    href="mailto:inquiries@atharalamara.sa"
    className="text-[#000000] underline hover:text-[#5B4F48] transition-colors duration-300"
  >
    <bdi>{t('{rights-email}', 'inquiries@atharalamara.sa')}</bdi>
  </a>
</p>
                </section>

                {/* 8. Data Retention */}
                <section>
                  <h2 className="text-xl mb-2 font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: "#000000" }}>
                    {t('{retention-title}', '8. Data Retention')}
                  </h2>
                  <p className="text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    {t('{retention-p1}', 'We retain personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by Saudi Arabian law. Analytics data is automatically deleted by Google Analytics after 26 months.')}
                  </p>
                </section>

                {/* 9. International Data Transfers */}
                <section>
                  <h2 className="text-xl mb-2 font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: "#000000" }}>
                    {t('{intl-title}', '9. International Data Transfers')}
                  </h2>
                  <p className="text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    {t('{intl-p1}', 'Some of our service providers (such as Google Analytics) may process data outside of Saudi Arabia. We ensure that appropriate safeguards are in place to protect your data in accordance with applicable laws.')}
                  </p>
                </section>

                {/* 10. Changes to This Policy */}
                <section>
                  <h2 className="text-xl mb-2 font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: "#000000" }}>
                    {t('{changes-title}', '10. Changes to This Policy')}
                  </h2>
                  <p className="text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    {t('{changes-p1}', 'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised "Last Updated" date.')}
                  </p>
                </section>

                {/* 11. Contact Us */}
                <section>
                  <h2 className="text-xl mb-2 font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: "#000000" }}>
                    {t('{contact-title}', '11. Contact Us')}
                  </h2>
                  <p className="text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    {t('{contact-p1}', 'If you have any questions about this Privacy Policy or our data practices, please contact us at:')}
                  </p>
                  <div className="mt-4 space-y-1">
                    <p className="text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                      {t('{contact-email-label}', 'Email:')}{' '}
                      <a href="mailto:inquiries@atharalamara.sa" className="text-[#000000] underline hover:text-[#5B4F48] transition-colors duration-300">
                        {t('{contact-email}', 'inquiries@atharalamara.sa')}
                      </a>
                    </p>
                    <p className="text-lg leading-relaxed font-thin text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                      {t('{contact-address-label}', 'Address:')}{' '}
                      {t('{contact-address}', 'Al Takhassusi St., Riyadh, Saudi Arabia')}
                    </p>
                  </div>
                </section>

                {/* Last updated */}
                <h2
                  className="text-xl font-normal mt-12 text-center"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: "#000000", fontWeight: 100 }}
                >
                  {t('{last-updated-label}', 'Last Updated:')}{' '}
                  {t('{last-updated-date}', 'January 15, 2025')}
                </h2>
              </div>
            )}
          </div>
        </div>
      </main>

      <SiteFooter />
    </PageWrapper>
  );
}

export default PrivacyPage;
