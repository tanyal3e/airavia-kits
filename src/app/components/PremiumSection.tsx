import React from "react";
import { useLocale } from "./i18n";
import imgBizClass from "../../imports/AiraviaWeb/cf2bda0743d055d11d1ec1dacdad127eb272cd7e.png";
import imgLounges from "../../imports/AiraviaWeb/bad941148dc2700dcf112d1b2dc2d8102c06886e.png";
import imgCorporate from "../../imports/AiraviaWeb/ba5c0f9cc42967709fd1f4394c0a4cf3c97e7dc4.png";
function ArrowRightSVG() {
  return (
    <svg width="13" height="13" fill="none" viewBox="0 0 13 13">
      <path d="M2.708 6.499H10.29" stroke="#001F6B" strokeWidth="1.083" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.749 2.458L10.79 6.499L6.749 10.54" stroke="#001F6B" strokeWidth="1.083" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PremiumCard({
  img, isBlue, title, body, cta,
}: {
  img: string; isBlue?: boolean;
  title: string; body: string; cta: string;
}) {
  return (
    <div className="bg-white rounded flex flex-col overflow-hidden flex-1" style={{ border: "0.625px solid rgba(0,31,107,0.12)" }}>
      {/* Image area */}
      <div className="h-[192px] shrink-0 relative overflow-hidden">
        {isBlue ? (
          <div className="w-full h-full bg-[#001f6b] flex items-center justify-center overflow-hidden">
            <img src={img} alt={title} className="w-full h-[200%] object-cover opacity-60" />
          </div>
        ) : (
          <img src={img} alt={title} className="w-full h-full object-cover" />
        )}
      </div>
      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="text-[18px] font-semibold leading-7 text-[#09102b]">{title}</h3>
        <p className="text-[14px] font-normal leading-[22.75px] text-[#5b6580] flex-1">{body}</p>
        <button type="button" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#001f6b] hover:text-[#002B8F] transition-colors self-start">
          {cta}<ArrowRightSVG />
        </button>
      </div>
    </div>
  );
}

export function PremiumSection() {
  const { t } = useLocale();
  return (
    <section className="bg-[#f4f6fb] w-full shrink-0 py-14">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="mb-10">
          <p className="text-[12px] font-bold leading-4 tracking-[1.2px] uppercase text-[#C9A84C] mb-0">{t("premium_label")}</p>
          <h2 className="text-[30px] font-bold leading-9 tracking-[-0.6px] text-[#09102b] mt-3">{t("premium_title")}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <PremiumCard img={imgBizClass}
            title={t("premium_biz_title")} body={t("premium_biz_body")} cta={t("premium_biz_cta")} />
          <PremiumCard img={imgLounges}
            title={t("premium_lounge_title")} body={t("premium_lounge_body")} cta={t("premium_lounge_cta")} />
          <PremiumCard img={imgCorporate} isBlue
            title={t("premium_corp_title")} body={t("premium_corp_body")} cta={t("premium_corp_cta")} />
        </div>
      </div>
    </section>
  );
}
