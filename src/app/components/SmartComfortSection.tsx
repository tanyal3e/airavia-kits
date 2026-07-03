import React from "react";
import { useLocale } from "./i18n";
import imgApp from "../../imports/AiraviaWeb/2042ee24c0600a5f4fbd095b1cfaac6570237d61.png";
import imgPhone from "../../imports/AiraviaWeb/d7381d15ec81907b1d59591e9edc45d0ad54111d.png";

function ArrowRightSVG() {
  return (
    <svg width="13" height="13" fill="none" viewBox="0 0 13 13">
      <path d="M2.708 6.499H10.29" stroke="#001F6B" strokeWidth="1.083" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.749 2.458L10.79 6.499L6.749 10.54" stroke="#001F6B" strokeWidth="1.083" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SmartComfortSection() {
  const { t } = useLocale();

  return (
    <section className="bg-[#edf0f7] w-full shrink-0 py-14">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section heading */}
        <div className="mb-10">
          <p className="text-[12px] font-bold leading-4 tracking-[1.2px] uppercase text-[#C9A84C]">
            {t("smart_label")}
          </p>
          <h2 className="text-[30px] font-bold leading-9 tracking-[-0.6px] text-[#09102b] mt-3">
            {t("smart_title")}
          </h2>
        </div>

        {/* Full-width image card */}
        <div className="relative h-[334px] w-full rounded overflow-hidden" style={{ border: "0.625px solid rgba(0,31,107,0.12)" }}>
          {/* Background lifestyle image */}
          <img
            src={imgApp}
            alt="Airavia app lifestyle"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Phone detail — positioned and scaled */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute" style={{ left: "-304px", top: "-87px", width: "1534px", height: "611px" }}>
              <img
                src={imgPhone}
                alt=""
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              {/* Right-to-left gradient fade */}
              <div className="absolute inset-0 bg-gradient-to-l from-[#edf0f7] from-[13.82%] to-[rgba(237,240,247,0)] to-[40.743%]" />
            </div>
          </div>

          {/* Floating white info card */}
          <div className="absolute bg-white shadow-[0px_4px_7.5px_rgba(0,0,0,0.25)] flex flex-col justify-between p-6"
            style={{ left: "742px", top: "51px", width: "488px", height: "207px" }}>
            <div className="flex flex-col gap-3">
              <h3 className="text-[18px] font-semibold leading-7 text-[#09102b]">
                {t("smart_card_title")}
              </h3>
              <p className="text-[14px] font-normal leading-[22.75px] text-[#5b6580]">
                {t("smart_card_body")}
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#001f6b] hover:text-[#002B8F] transition-colors self-start"
            >
              {t("smart_card_cta")}
              <ArrowRightSVG />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
