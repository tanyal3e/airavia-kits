import React from "react";
import { ArrowRight, Plane } from "lucide-react";
import { useLocale } from "./i18n";
import img1 from "../../imports/AiraviaWeb/3b2e0d50a282f8e51d4dce8549c0ef28982b5333.png";
import img2 from "../../imports/AiraviaWeb/ddd0c0ea71afecfedaee0387e4a855d2b81a6e34.png";
import img3 from "../../imports/AiraviaWeb/9dff36309149d3d14e9e61b232084c3f3297cffc.png";
import img4 from "../../imports/AiraviaWeb/35796027b212d124e5be1d8ac48271ab721141d3.png";
import img5 from "../../imports/AiraviaWeb/f92f48a45ebc38766c1f3bf20103313d7385408d.png";

// Plane icon matching Figma (rotated ~5deg)
function PlaneIcon() {
  return (
    <div style={{ transform: "rotate(5deg)" }}>
      <Plane size={12} className="text-[#001F6B]" strokeWidth={1.5} />
    </div>
  );
}

// Select button arrow
function ArrowSVG() {
  return (
    <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
      <path d="M2.5 6H9.5" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.5 3L9.5 6L6.5 9" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

type Route = {
  origin: string; originCity: string;
  dest: string; destCity: string;
  duration: string; price: string;
  img: string;
};

const ROUTES: Route[] = [
  { origin: "AMS", originCity: "Amsterdam", dest: "CDG", destCity: "Paris",     duration: "3h 20m",  price: "€140",   img: img2 },
  { origin: "AMS", originCity: "Amsterdam", dest: "DXB", destCity: "Dubai",     duration: "6h 20m",  price: "€890",   img: img1 },
  { origin: "BRU", originCity: "Brussels",  dest: "SIN", destCity: "Singapore", duration: "12h 55m", price: "€1,460", img: img3 },
  { origin: "CDG", originCity: "Paris",     dest: "NRT", destCity: "Tokyo",     duration: "11h 40m", price: "€1,680", img: img4 },
  { origin: "AMS", originCity: "Amsterdam", dest: "GRU", destCity: "São Paulo", duration: "11h 30m", price: "€1,100", img: img5 },
];

function RouteCard({ route }: { route: Route }) {
  const { t } = useLocale();
  return (
    <div className="bg-white rounded shrink-0 w-[230px] flex flex-col overflow-hidden" style={{ border: "0.625px solid rgba(0,31,107,0.12)" }}>
      {/* Image */}
      <div className="relative h-[160px] shrink-0 overflow-hidden rounded-t">
        <img src={route.img} alt={route.destCity} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,8,23,0.6)] to-transparent" />
        <div className="absolute bottom-3 left-3 bg-[#001f6b] rounded-sm px-2.5 py-0.5">
          <p className="text-[12px] font-semibold leading-4 text-white">Business</p>
        </div>
      </div>

      {/* Route info */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Origin → Dest row */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-start">
            <p className="text-[24px] font-bold leading-8 tracking-[-0.6px] text-[#09102b]">{route.origin}</p>
            <p className="text-[12px] font-normal leading-4 text-[#5b6580]">{route.originCity}</p>
            <div className="h-4" />
          </div>
          <div className="flex flex-col items-center gap-1 flex-1">
            <p className="text-[10px] font-normal leading-[15px] text-[#5b6580]">{route.duration}</p>
            <div className="flex items-center gap-1 w-full">
              <div className="flex-1 h-px bg-[rgba(0,31,107,0.12)]" />
              <PlaneIcon />
              <div className="flex-1 h-px bg-[rgba(0,31,107,0.12)]" />
            </div>
            <p className="text-[10px] font-normal leading-[15px] text-[#5b6580]">Direct</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[24px] font-bold leading-8 tracking-[-0.6px] text-[#09102b]">{route.dest}</p>
            <p className="text-[12px] font-normal leading-4 text-[#5b6580]">{route.destCity}</p>
            <div className="h-4" />
          </div>
        </div>

        {/* Price + Select */}
        <div className="flex items-center justify-between pt-3" style={{ borderTop: "0.625px solid rgba(0,31,107,0.12)" }}>
          <div>
            <p className="text-[10px] font-semibold uppercase text-[#5b6580] leading-[15px]">{t("dest_from")}</p>
            <p className="text-[20px] font-bold leading-7 text-[#09102b] font-[JetBrains_Mono,monospace]">{route.price}</p>
          </div>
          <button type="button" className="flex items-center gap-1.5 h-9 px-4 bg-[#001f6b] text-white text-[12px] font-semibold rounded hover:bg-[#002B8F] transition-colors">
            {t("dest_select")}<ArrowSVG />
          </button>
        </div>
      </div>
    </div>
  );
}

export function DestinationsSection() {
  const { t } = useLocale();
  return (
    <section className="bg-[rgba(237,240,247,0.4)] w-full shrink-0 py-14">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header row */}
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <p className="text-[12px] font-bold leading-4 tracking-[1.2px] uppercase text-[#C9A84C]">{t("dest_label")}</p>
            <h2 className="text-[30px] font-bold leading-9 tracking-[-0.6px] text-[#09102b] mt-3">{t("dest_title")}</h2>
            <p className="text-[14px] font-normal leading-5 text-[#5b6580] mt-2">{t("dest_subtitle")}</p>
          </div>
          <button type="button" className="inline-flex items-center gap-1.5 h-10 px-5 text-[14px] font-semibold border border-[#001f6b] text-[#001f6b] rounded hover:bg-[#E6ECF8] transition-colors shrink-0">
            {t("dest_view_all")}<ArrowRight size={14} />
          </button>
        </div>

        {/* Cards — horizontal scroll on mobile, 5-col flex on desktop */}
        <div className="overflow-x-auto -mx-6 px-6 md:overflow-visible md:mx-0 md:px-0">
          <div className="flex gap-5">
            {ROUTES.map(r => <RouteCard key={`${r.origin}-${r.dest}`} route={r} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
