import React from "react";
import { ArrowRight, Star } from "lucide-react";
import { useLocale } from "./i18n";

function StarSVG() {
  return (
    <svg width="15" height="15" fill="none" viewBox="0 0 15 15">
      <path d="M7.5 1.25L9.297 5.514L13.929 5.977L10.5 9.148L11.545 13.75L7.5 11.387L3.455 13.75L4.5 9.148L1.071 5.977L5.703 5.514L7.5 1.25Z" stroke="#3D2800" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LearnMoreArrow() {
  return (
    <svg width="15" height="15" fill="none" viewBox="0 0 15 15">
      <path d="M3.125 7.5H11.875" stroke="white" strokeOpacity="0.8" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.125 3.75L11.875 7.5L8.125 11.25" stroke="white" strokeOpacity="0.8" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function MilesSection() {
  const { t } = useLocale();
  const stats = [
    { val: t("miles_stat1_val"), label: t("miles_stat1_label"), border: true },
    { val: t("miles_stat2_val"), label: t("miles_stat2_label"), border: true },
    { val: t("miles_stat3_val"), label: t("miles_stat3_label"), border: false },
  ];

  return (
    <section className="bg-[#001f6b] w-full shrink-0 py-14">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="relative flex">
          {/* Left: copy block */}
          <div className="flex flex-col gap-6 w-full max-w-[592px]">
            <div>
              <p className="text-[12px] font-bold leading-4 tracking-[1.2px] uppercase text-[#C9A84C]">{t("miles_label")}</p>
              <h2 className="text-[30px] font-bold leading-[37.5px] tracking-[-0.6px] text-white mt-3">{t("miles_title")}</h2>
            </div>
            <p className="text-[16px] font-normal leading-[26px] text-white/70 max-w-[512px]">{t("miles_body")}</p>
            <div className="flex items-center gap-0 relative h-12">
              <button type="button" className="absolute left-0 top-0 inline-flex items-center gap-2 h-12 px-7 bg-[#C9A84C] text-[#3d2800] text-[16px] font-semibold rounded hover:bg-[#B8943D] transition-colors">
                <StarSVG />{t("miles_join")}
              </button>
              <button type="button" className="absolute left-[229px] top-0 inline-flex items-center gap-2 h-12 px-7 text-[16px] font-semibold text-white/80 hover:text-white transition-colors">
                {t("miles_learn")}<LearnMoreArrow />
              </button>
            </div>
          </div>

          {/* Right: stats */}
          <div className="hidden lg:flex items-start absolute right-0 top-[52px]">
            {stats.map((s) => (
              <div key={s.label}
                className="flex flex-col items-center px-6 py-6 w-[195px]"
                style={s.border ? { borderRight: "0.625px solid rgba(255,255,255,0.1)" } : {}}>
                <p className="text-[36px] font-black leading-10 text-[#C9A84C] text-center">{s.val}</p>
                <p className="text-[12px] font-semibold leading-4 tracking-[1.2px] uppercase text-white/50 text-center mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Mobile stats */}
          <div className="lg:hidden grid grid-cols-3 gap-0 w-full mt-10 border-t border-white/10 pt-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center py-4">
                <p className="text-[30px] font-black leading-8 text-[#C9A84C] text-center">{s.val}</p>
                <p className="text-[10px] font-semibold tracking-[1.2px] uppercase text-white/50 text-center mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
