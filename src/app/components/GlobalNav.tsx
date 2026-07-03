import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { AiraviaLogo } from "./AiraviaLogo";
import { useLocale, LOCALES, LOCALE_LABELS, type Locale } from "./i18n";

export function GlobalNav() {
  const { locale, setLocale, t } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    t("nav_destinations"), t("nav_business_class"), t("nav_lounges"), t("nav_corporate"), t("nav_book"),
  ];

  return (
    <>
      <nav className="sticky top-0 z-40 bg-[rgba(0,31,107,0.95)] w-full shrink-0" style={{ borderBottom: "0.625px solid rgba(255,255,255,0.1)" }}>
        <div className="flex gap-6 h-[72px] items-center max-w-[1280px] mx-auto px-6">
          {/* Logo */}
          <div className="shrink-0">
            <AiraviaLogo height={24} />
          </div>

          {/* Main nav links */}
          <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            {navLinks.map((label) => (
              <button key={label} type="button"
                className="text-[12px] font-semibold leading-4 tracking-[0.3px] uppercase text-white/75 hover:text-white transition-colors whitespace-nowrap">
                {label}
              </button>
            ))}
          </div>

          {/* Right: locale + sign in + miles */}
          <div className="hidden lg:flex items-center gap-4 ml-auto shrink-0">
            {/* Locale switcher */}
            <div className="flex items-center gap-2.5">
              {LOCALES.map((l) => (
                <button key={l} type="button" onClick={() => setLocale(l)} className="flex flex-col items-center gap-[2px] group">
                  <span className={`text-[12px] font-semibold leading-4 transition-colors ${locale === l ? "text-white font-bold" : "text-white/50 hover:text-white/80"}`}>
                    {LOCALE_LABELS[l]}
                  </span>
                  <span className={`h-[1.5px] w-3.5 rounded-full transition-all ${locale === l ? "bg-[#C9A84C]" : "bg-transparent"}`} />
                </button>
              ))}
            </div>

            <div className="bg-white/20 h-4 w-px" />

            <button type="button" className="text-[14px] font-semibold leading-5 text-white/80 hover:text-white transition-colors">
              {t("nav_signin")}
            </button>

            <button type="button" className="flex items-center px-4 py-2 text-[#C9A84C] text-[12px] font-semibold uppercase tracking-[0.3px] rounded hover:bg-[#C9A84C]/10 transition-colors"
              style={{ border: "0.625px solid #C9A84C" }}>
              {t("nav_miles")}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button type="button" onClick={() => setMobileOpen(v => !v)} className="lg:hidden text-white/80 hover:text-white p-1 ml-auto">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setMobileOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-72 bg-[#001f6b] flex flex-col" style={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}
            onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <AiraviaLogo height={20} />
              <button type="button" onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white"><X size={18} /></button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-1">
              {navLinks.map(label => (
                <button key={label} type="button" onClick={() => setMobileOpen(false)}
                  className="text-left py-3 text-[12px] font-semibold uppercase tracking-[0.3px] text-white/80 hover:text-white border-b border-white/10 last:border-0 transition-colors">
                  {label}
                </button>
              ))}
            </div>
            <div className="px-5 py-5 space-y-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="flex items-center gap-2">
                {LOCALES.map(l => (
                  <button key={l} type="button" onClick={() => setLocale(l)}
                    className={`text-xs font-semibold px-2 py-1 rounded transition-colors ${locale === l ? "bg-white text-[#001F6B]" : "text-white/60 hover:text-white"}`}>
                    {LOCALE_LABELS[l]}
                  </button>
                ))}
              </div>
              <button type="button" className="w-full py-2.5 text-sm font-semibold text-white/80 hover:text-white text-left transition-colors">{t("nav_signin")}</button>
              <button type="button" className="w-full py-2.5 text-[12px] font-semibold uppercase tracking-[0.3px] text-[#C9A84C] rounded hover:bg-[#C9A84C]/10 transition-colors"
                style={{ border: "0.625px solid #C9A84C" }}>
                {t("nav_miles")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
