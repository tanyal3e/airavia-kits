import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { Search, Calendar, ArrowLeftRight, ChevronDown, Check, Plane } from "lucide-react";
import { toast } from "sonner";
import { useLocale } from "./i18n";
import imgHeroBg from "../../imports/AiraviaWeb/Hero.png";

type Tab = "book" | "manage" | "status";

function FieldCell({ label, value, onChange, hasDivider, className = "" }: {
  label: string; value: string; onChange: (v: string) => void; hasDivider?: boolean; className?: string;
}) {
  return (
    <div className={`relative flex-1 min-w-0 ${className}`}>
      {hasDivider && <div className="absolute right-0 top-2 bottom-2 w-px bg-[rgba(0,31,107,0.12)]" />}
      <div className="flex flex-col gap-1 px-5 py-3.5">
        <label className="text-[10px] font-bold uppercase tracking-[1px] text-[#5b6580] leading-none whitespace-nowrap">{label}</label>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-[15px] font-semibold text-[#09102b] outline-none truncate"
        />
      </div>
    </div>
  );
}

function ClassSelect({ label, value, onChange, options, hasDivider }: {
  label: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[]; hasDivider?: boolean;
}) {
  return (
    <div className="relative flex-1 min-w-0">
      {hasDivider && <div className="absolute right-0 top-2 bottom-2 w-px bg-[rgba(0,31,107,0.12)]" />}
      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger className="flex flex-col items-start gap-1 px-5 py-3.5 w-full text-left outline-none">
          <span className="text-[10px] font-bold uppercase tracking-[1px] text-[#5b6580] leading-none">{label}</span>
          <span className="flex items-center gap-1 text-[15px] font-semibold text-[#09102b]">
            <Select.Value />
            <Select.Icon><ChevronDown size={13} className="text-[#5b6580]" /></Select.Icon>
          </span>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="z-50 bg-white border border-[rgba(0,31,107,0.12)] rounded shadow-lg overflow-hidden">
            <Select.Viewport className="p-1">
              {options.map((opt) => (
                <Select.Item key={opt.value} value={opt.value}
                  className="flex items-center gap-2 px-3 py-2 text-sm rounded text-[#09102b] cursor-pointer hover:bg-[#E6ECF8] outline-none data-[highlighted]:bg-[#E6ECF8]">
                  <Select.ItemText>{opt.label}</Select.ItemText>
                  <Select.ItemIndicator className="ml-auto"><Check size={12} className="text-[#001F6B]" /></Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}

function BookingWidget() {
  const { t } = useLocale();
  const [tab, setTab] = useState<Tab>("book");
  const [tripType, setTripType] = useState("round-trip");
  const [cabinClass, setCabinClass] = useState("economy");
  const [promoOpen, setPromoOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [origin, setOrigin] = useState(t("booking_origin_val"));
  const [destination, setDestination] = useState(t("booking_dest_val"));
  const [depart, setDepart] = useState(t("booking_depart_val"));
  const [returnDate, setReturnDate] = useState(t("booking_return_val"));
  const [passengers, setPassengers] = useState(t("booking_passengers_val"));
  const [bookingRef, setBookingRef] = useState("");
  const [lastName, setLastName] = useState("");
  const [flightNo, setFlightNo] = useState("");
  const [statusDate, setStatusDate] = useState("");

  const tripOptions = [
    { value: "round-trip", label: t("booking_trip_round") },
    { value: "one-way", label: t("booking_trip_oneway") },
  ];
  const classOptions = [
    { value: "economy", label: t("booking_class_economy") },
    { value: "premium", label: t("booking_class_premium") },
    { value: "business", label: t("booking_class_business") },
    { value: "first", label: t("booking_class_first") },
  ];

  const swap = () => { const o = origin; setOrigin(destination); setDestination(o); };

  const tabs: { key: Tab; label: string }[] = [
    { key: "book", label: t("booking_tab_book") },
    { key: "manage", label: t("booking_tab_manage") },
    { key: "status", label: t("booking_tab_status") },
  ];

  return (
    <div className="w-full max-w-[1280px] bg-[#EDF0F7] rounded shadow-[0_12px_28px_rgba(0,8,23,0.25)] overflow-visible">
      {/* Tabs — each tab has its own subtle fill over the photo; active tab is solid with a gold underline */}
      <div className="flex border border-[rgba(0,31,107,0.12)] rounded-t overflow-hidden">
        {tabs.map((tb, i) => (
          <button key={tb.key} type="button" onClick={() => setTab(tb.key)}
            className={`px-6 py-3 text-[11px] font-bold uppercase tracking-[0.8px] border-b-[3px] transition-colors ${i < tabs.length - 1 ? "border-r border-r-[rgba(0,31,107,0.12)]" : ""} ${tab === tb.key ? "bg-[#EDF0F7] border-b-[#C9A84C] text-[#001f6b]" : "bg-[#EDF0F7]/24 border-b-transparent text-white [text-shadow:0_1px_4px_rgba(0,8,23,0.6)] hover:bg-[#EDF0F7]/40"}`}>
            {tb.label}
          </button>
        ))}
      </div>

      {tab === "book" && (
        <>
          {/* Trip type + promo */}
          <div className="flex items-center justify-between px-5 py-2.5 border-b border-[rgba(0,31,107,0.12)] gap-4 flex-wrap">
            <Select.Root value={tripType} onValueChange={setTripType}>
              <Select.Trigger className="flex items-center gap-1.5 text-[13px] font-semibold text-[#09102b] outline-none">
                <Select.Value />
                <Select.Icon><ChevronDown size={13} className="text-[#5b6580]" /></Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="z-50 bg-white border border-[rgba(0,31,107,0.12)] rounded shadow-lg overflow-hidden">
                  <Select.Viewport className="p-1">
                    {tripOptions.map((opt) => (
                      <Select.Item key={opt.value} value={opt.value}
                        className="flex items-center gap-2 px-3 py-2 text-sm rounded text-[#09102b] cursor-pointer hover:bg-[#E6ECF8] outline-none data-[highlighted]:bg-[#E6ECF8]">
                        <Select.ItemText>{opt.label}</Select.ItemText>
                        <Select.ItemIndicator className="ml-auto"><Check size={12} className="text-[#001F6B]" /></Select.ItemIndicator>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>

            {!promoOpen ? (
              <button type="button" onClick={() => setPromoOpen(true)}
                className="text-[11px] font-bold uppercase tracking-[0.8px] text-[#C9A84C] hover:text-[#B8943D] transition-colors">
                {t("booking_promo")}
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <input
                  autoFocus
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder={t("booking_promo_placeholder")}
                  className="h-8 px-2.5 text-xs rounded border border-[rgba(0,31,107,0.2)] outline-none focus:border-[#001f6b] text-[#09102b] placeholder:text-[#5b6580] w-32"
                />
                <button type="button"
                  onClick={() => { setPromoOpen(false); if (promoCode) toast.success(`Promo code "${promoCode}" applied.`); }}
                  className="h-8 px-3 text-[11px] font-bold uppercase tracking-[0.5px] text-white bg-[#001f6b] rounded hover:bg-[#002B8F] transition-colors">
                  {t("booking_promo_apply")}
                </button>
              </div>
            )}
          </div>

          {/* Fields — each logical group is its own bordered white block, sitting on the muted row background */}
          <div className="flex items-stretch gap-3 p-4 flex-wrap lg:flex-nowrap">
            {/* Origin ⇄ Destination block */}
            <div className="relative flex items-stretch bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px] flex-[1.8] min-w-[320px]">
              <FieldCell label={t("booking_origin")} value={origin} onChange={setOrigin} />
              <button type="button" onClick={swap}
                className="hidden sm:flex items-center justify-center w-6 h-6 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full border border-[rgba(0,31,107,0.15)] bg-white text-[#5b6580] hover:text-[#001f6b] hover:border-[#001f6b]/40 transition-colors z-10"
                aria-label="Swap origin and destination">
                <ArrowLeftRight size={11} />
              </button>
              <FieldCell label={t("booking_destination")} value={destination} onChange={setDestination} />
            </div>

            {/* Depart / Return block */}
            <div className="flex items-stretch bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px] flex-[1.3] min-w-[240px]">
              <FieldCell label={t("booking_depart")} value={depart} onChange={setDepart} hasDivider />
              <div className="relative flex-1 min-w-0">
                <div className="flex flex-col gap-1 px-5 py-3.5">
                  <label className="text-[10px] font-bold uppercase tracking-[1px] text-[#5b6580] leading-none whitespace-nowrap">{t("booking_return")}</label>
                  <div className="flex items-center justify-between gap-2">
                    <input
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="w-full bg-transparent text-[15px] font-semibold text-[#09102b] outline-none truncate"
                    />
                    <Calendar size={14} className="text-[#5b6580] shrink-0" />
                  </div>
                </div>
              </div>
            </div>

            {/* Passengers block */}
            <div className="bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px] flex-1 min-w-[120px]">
              <FieldCell label={t("booking_passengers")} value={passengers} onChange={setPassengers} />
            </div>

            {/* Class block */}
            <div className="bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px] flex-1 min-w-[120px]">
              <ClassSelect label={t("booking_class")} value={cabinClass} onChange={setCabinClass} options={classOptions} />
            </div>

            <button type="button"
              onClick={() => toast.success(`Searching flights: ${origin} → ${destination}`)}
              className="shrink-0 w-full lg:w-[190px] flex items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-[0.5px] bg-[#C9A84C] text-[#3d2800] hover:bg-[#B8943D] transition-colors rounded-[4px] py-4 lg:py-0">
              <Search size={14} />{t("booking_cta")}
            </button>
          </div>
        </>
      )}

      {tab === "manage" && (
        <div className="flex items-stretch gap-3 p-4 flex-wrap lg:flex-nowrap">
          <div className="flex items-stretch bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px] flex-1 min-w-[220px]">
            <FieldCell label={t("booking_manage_ref")} value={bookingRef} onChange={setBookingRef} hasDivider />
            <FieldCell label={t("booking_manage_lastname")} value={lastName} onChange={setLastName} />
          </div>
          <button type="button"
            onClick={() => toast.success("Retrieving booking…")}
            className="shrink-0 w-full lg:w-[220px] flex items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-[0.5px] bg-[#C9A84C] text-[#3d2800] hover:bg-[#B8943D] transition-colors rounded-[4px] py-4 lg:py-0">
            <Search size={14} />{t("booking_manage_cta")}
          </button>
        </div>
      )}

      {tab === "status" && (
        <div className="flex items-stretch gap-3 p-4 flex-wrap lg:flex-nowrap">
          <div className="flex items-stretch bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px] flex-1 min-w-[220px]">
            <FieldCell label={t("booking_status_flightno")} value={flightNo} onChange={setFlightNo} hasDivider />
            <FieldCell label={t("booking_status_date")} value={statusDate} onChange={setStatusDate} />
          </div>
          <button type="button"
            onClick={() => toast.success("Checking flight status…")}
            className="shrink-0 w-full lg:w-[220px] flex items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-[0.5px] bg-[#C9A84C] text-[#3d2800] hover:bg-[#B8943D] transition-colors rounded-[4px] py-4 lg:py-0">
            <Search size={14} />{t("booking_status_cta")}
          </button>
        </div>
      )}
    </div>
  );
}

export function HeroSection() {
  const { t } = useLocale();
  return (
    <section className="relative h-[840px] w-full overflow-hidden shrink-0">
      <div className="absolute inset-0">
        <img src={imgHeroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/56" />
        <div className="absolute bottom-0 left-0 right-0 h-[591px] bg-gradient-to-t from-[rgba(0,8,23,0.8)] to-transparent" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end pb-20">
        <div className="max-w-[1280px] mx-auto px-6 w-full flex flex-col gap-6">
          <div className="flex flex-col gap-3 max-w-[768px]">
            <h1 className="font-bold text-[72px] leading-[72px] tracking-[-1.44px] text-white w-full">
              {t("hero_headline")}
            </h1>
            <p className="text-xl font-normal leading-[32.5px] text-white/75">{t("hero_subtitle")}</p>
            <button type="button" onClick={() => toast.info(t("hero_ticker"))}
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-white/90 hover:text-white transition-colors self-start mt-1">
              <Plane size={14} className="text-[#C9A84C] rotate-45" />
              <span className="underline decoration-white/40 underline-offset-4">{t("hero_ticker")}</span>
              <ChevronDown size={13} className="-rotate-90" />
            </button>
          </div>
          <BookingWidget />
        </div>
      </div>
    </section>
  );
}
