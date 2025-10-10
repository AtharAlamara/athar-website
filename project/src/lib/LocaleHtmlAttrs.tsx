import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function LocaleHtmlAttrs() {
  const { pathname } = useLocation();

  useEffect(() => {
    const isAr = pathname === "/sa" || pathname.startsWith("/sa/");
    const html = document.documentElement;

    html.setAttribute("lang", isAr ? "ar" : "en");
    // DO NOT set dir here. We want layout unchanged:
    // html.setAttribute("dir", isAr ? "rtl" : "ltr");

    html.classList.toggle("lang-ar", isAr);
    html.classList.toggle("lang-en", !isAr);

    // (optional event for any listeners you might have)
    window.dispatchEvent(
      new CustomEvent("athar:locale-changed", { detail: { locale: isAr ? "ar" : "en" } })
    );
  }, [pathname]);

  return null;
}
