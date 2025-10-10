import React, { useState, useEffect } from 'react';
import { LocaleLink as Link } from '@/lib/LocaleLink';
import { X } from 'lucide-react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const savedPrefs = localStorage.getItem('cookiePreferences');
    if (savedPrefs) {
      const prefs = JSON.parse(savedPrefs);
      setAnalyticsEnabled(prefs.analytics || false);

      if (prefs.analytics && window.gtag) {
        // Enable Google Analytics
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    }
  }, []);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'declined');
    if (accepted) {
      const preferences = {
        analytics: true
      };
      localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
      setAnalyticsEnabled(true);
      
      // Enable Google Analytics
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    } else {
      // Ensure analytics is disabled
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'denied'
        });
      }
    }
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const preferences = {
      analytics: analyticsEnabled
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookieConsent', 'custom');
    
    // Update Google Analytics consent
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': analyticsEnabled ? 'granted' : 'denied'
      });
    }
    
    setShowPreferences(false);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cookie Banner */}
      <div 
        className="fixed bottom-2 left-1/2 -translate-x-1/2 md:left-2 md:translate-x-0 md:right-auto right-2 max-w-[900px] bg-[#000000]/90 px-1 py-1 rounded-none shadow-lg z-50 w-[95%] md:w-auto" 
        style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
      >
        <div className="md:flex md:items-center md:justify-start md:gap-4">
          <p className="text-[#FFFFFF] text-xs md:text-xs mb-4 md:mb-0 md:mr-8">
            We use cookies to understand how visitors interact with our website and improve your experience. Learn more about our{' '}
            <Link
              to="/privacy"
              className="text-[#FFFFFF] underline transition-all duration-300"
            >
              Privacy Policy
            </Link>.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
            <button
              onClick={() => setShowPreferences(true)}
              className="px-3 py-1.5 rounded-none border border-[#FFFFFF] text-[#FFFFFF] hover:border-[#FFFFFF] hover:text-[#FFFFFF] transition-colors duration-300 w-full md:w-auto"
              style={{ fontSize: '0.625rem' }}
            >
              Preferences
            </button>
            <button
              onClick={() => handleConsent(false)}
              className="px-2 py-1 rounded-none border border-[#FFFFFF] text-[#FFFFFF] hover:border-[#FFFFFF] hover:text-[#FFFFFF] transition-colors duration-300 whitespace-nowrap w-full md:w-auto"
              style={{ fontSize: '0.625rem' }}
            >
              Decline
            </button>
            <button
              onClick={() => handleConsent(true)}
              className="px-2 py-1 rounded-none bg-[#292827] text-[#FFFFFF] hover:bg-[#292827] transition-colors duration-300 whitespace-nowrap w-full md:w-auto"
              style={{ fontSize: '0.625rem' }}
            >
              Accept
            </button>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#FFFFFF] p-6 max-w-lg w-full relative">
            <button
              onClick={() => setShowPreferences(false)}
              className="absolute top-4 right-4 text-[#000000] hover:opacity-70 transition-opacity"
            >
              <X size={24} />
            </button>

            <h2 className="text-xl mb-6 text-[#000000]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
              Cookie Preferences
            </h2>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-sm font-semibold mb-2 text-[#000000]">Essential Cookies</h3>
                <p className="text-sm text-[#5B4F48] mb-2">
                  These cookies are necessary for the website to function and cannot be disabled.
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled={true}
                    className="h-4 w-4"
                  />
                  <span className="text-sm text-[#292827]">Always Active</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="pt-0.5">
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    className="h-4 w-4"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1 text-[#000000]">Google Analytics</h3>
                  <p className="text-sm text-[#292827]">
                    Help us understand how visitors interact with our website by collecting and reporting information anonymously. This includes page views, time spent on site, and user interactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowPreferences(false)}
                className="px-4 py-2 text-sm border border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 text-sm bg-[#292827] text-[#FFFFFF] hover:bg-[#292827] transition-colors duration-300"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CookieBanner;