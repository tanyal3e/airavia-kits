import React, { useState, useRef, useEffect } from "react";
import * as Select from "@radix-ui/react-select";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { format } from "date-fns";
import { Search, Calendar as CalendarIcon, ArrowLeftRight, ChevronDown, Check, Plane, Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { useLocale } from "./i18n";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import imgHeroBg from "../../imports/AiraviaWeb/Hero.png";

type Tab = "book" | "manage" | "status";

// ─── City/airport dataset for origin & destination autosuggest ─────────────
const AIRPORTS: { city: string; code: string; continent: string }[] = [
  { city: "Amsterdam", code: "AMS", continent: "Europe" },
  { city: "Athens", code: "ATH", continent: "Europe" },
  { city: "Antwerp", code: "ANR", continent: "Europe" },
  { city: "Barcelona", code: "BCN", continent: "Europe" },
  { city: "Berlin", code: "BER", continent: "Europe" },
  { city: "Brussels", code: "BRU", continent: "Europe" },
  { city: "Copenhagen", code: "CPH", continent: "Europe" },
  { city: "Dublin", code: "DUB", continent: "Europe" },
  { city: "Frankfurt", code: "FRA", continent: "Europe" },
  { city: "Geneva", code: "GVA", continent: "Europe" },
  { city: "Lisbon", code: "LIS", continent: "Europe" },
  { city: "London", code: "LHR", continent: "Europe" },
  { city: "Madrid", code: "MAD", continent: "Europe" },
  { city: "Milan", code: "MXP", continent: "Europe" },
  { city: "Munich", code: "MUC", continent: "Europe" },
  { city: "Oslo", code: "OSL", continent: "Europe" },
  { city: "Paris", code: "CDG", continent: "Europe" },
  { city: "Prague", code: "PRG", continent: "Europe" },
  { city: "Rome", code: "FCO", continent: "Europe" },
  { city: "Stockholm", code: "ARN", continent: "Europe" },
  { city: "Vienna", code: "VIE", continent: "Europe" },
  { city: "Warsaw", code: "WAW", continent: "Europe" },
  { city: "Zurich", code: "ZRH", continent: "Europe" },
  { city: "Atlanta", code: "ATL", continent: "North America" },
  { city: "Austin", code: "AUS", continent: "North America" },
  { city: "Boston", code: "BOS", continent: "North America" },
  { city: "Chicago", code: "ORD", continent: "North America" },
  { city: "Dallas", code: "DFW", continent: "North America" },
  { city: "Denver", code: "DEN", continent: "North America" },
  { city: "Los Angeles", code: "LAX", continent: "North America" },
  { city: "Miami", code: "MIA", continent: "North America" },
  { city: "Montreal", code: "YUL", continent: "North America" },
  { city: "New York", code: "JFK", continent: "North America" },
  { city: "San Francisco", code: "SFO", continent: "North America" },
  { city: "Toronto", code: "YYZ", continent: "North America" },
  { city: "Vancouver", code: "YVR", continent: "North America" },
  { city: "Washington", code: "IAD", continent: "North America" },
  { city: "Buenos Aires", code: "EZE", continent: "South America" },
  { city: "Bogota", code: "BOG", continent: "South America" },
  { city: "Lima", code: "LIM", continent: "South America" },
  { city: "Rio de Janeiro", code: "GIG", continent: "South America" },
  { city: "Santiago", code: "SCL", continent: "South America" },
  { city: "Sao Paulo", code: "GRU", continent: "South America" },
  { city: "Abu Dhabi", code: "AUH", continent: "Asia" },
  { city: "Bangkok", code: "BKK", continent: "Asia" },
  { city: "Beijing", code: "PEK", continent: "Asia" },
  { city: "Delhi", code: "DEL", continent: "Asia" },
  { city: "Doha", code: "DOH", continent: "Asia" },
  { city: "Dubai", code: "DXB", continent: "Asia" },
  { city: "Hong Kong", code: "HKG", continent: "Asia" },
  { city: "Istanbul", code: "IST", continent: "Asia" },
  { city: "Jakarta", code: "CGK", continent: "Asia" },
  { city: "Kuala Lumpur", code: "KUL", continent: "Asia" },
  { city: "Manila", code: "MNL", continent: "Asia" },
  { city: "Mumbai", code: "BOM", continent: "Asia" },
  { city: "Osaka", code: "KIX", continent: "Asia" },
  { city: "Seoul", code: "ICN", continent: "Asia" },
  { city: "Singapore", code: "SIN", continent: "Asia" },
  { city: "Tokyo", code: "NRT", continent: "Asia" },
  { city: "Accra", code: "ACC", continent: "Africa" },
  { city: "Addis Ababa", code: "ADD", continent: "Africa" },
  { city: "Cairo", code: "CAI", continent: "Africa" },
  { city: "Cape Town", code: "CPT", continent: "Africa" },
  { city: "Casablanca", code: "CMN", continent: "Africa" },
  { city: "Johannesburg", code: "JNB", continent: "Africa" },
  { city: "Lagos", code: "LOS", continent: "Africa" },
  { city: "Nairobi", code: "NBO", continent: "Africa" },
  { city: "Auckland", code: "AKL", continent: "Oceania" },
  { city: "Brisbane", code: "BNE", continent: "Oceania" },
  { city: "Melbourne", code: "MEL", continent: "Oceania" },
  { city: "Perth", code: "PER", continent: "Oceania" },
  { city: "Sydney", code: "SYD", continent: "Oceania" },
];

function matchAirports(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const matches = AIRPORTS.filter((a) => a.city.toLowerCase().startsWith(q));
  const byContinent = new Map<string, typeof AIRPORTS>();
  for (const m of matches) {
    if (!byContinent.has(m.continent)) byContinent.set(m.continent, []);
    byContinent.get(m.continent)!.push(m);
  }
  return Array.from(byContinent.entries());
}

// ─── City field with autosuggest dropdown (Origin / Destination) ───────────
function CityField({ label, value, onChange, hasDivider }: {
  label: string; value: string; onChange: (v: string) => void; hasDivider?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const groups = matchAirports(value);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={wrapRef} className={`relative flex-1 min-w-0 ${hasDivider ? "" : ""}`}>
      {hasDivider && <div className="absolute right-0 top-2 bottom-2 w-px bg-[rgba(0,31,107,0.12)]" />}
      <div className="flex flex-col gap-1 px-5 py-3.5">
        <label className="text-[10px] font-bold uppercase tracking-[1px] text-[#5b6580] leading-none whitespace-nowrap">{label}</label>
        <input
          value={value}
          onChange={(e) => { onChange(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          className="w-full bg-transparent text-[15px] font-semibold text-[#09102b] outline-none truncate"
        />
      </div>
      {open && groups.length > 0 && (
        <div className="absolute top-full left-0 mt-1 w-[280px] max-h-72 overflow-y-auto z-30 bg-white border border-[rgba(0,31,107,0.12)] rounded shadow-lg py-1">
          {groups.map(([continent, cities]) => (
            <div key={continent}>
              <p className="px-4 pt-2 pb-1 text-[10px] font-bold uppercase tracking-[0.8px] text-[#5b6580]">{continent}</p>
              {cities.map((c) => (
                <button key={c.code} type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => { onChange(`${c.city} (${c.code})`); setOpen(false); }}
                  className="w-full flex items-center justify-between gap-2 px-4 py-2 text-sm text-[#09102b] hover:bg-[#E6ECF8] transition-colors text-left">
                  <span className="font-medium">{c.city}</span>
                  <span className="text-xs text-[#5b6580] font-[JetBrains_Mono,monospace]">{c.code}</span>
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

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

// ─── Depart/return range field — opens a two-month range calendar popover ──
type DateRange = { from?: Date; to?: Date };

function DateRangeField({ departLabel, returnLabel, range, onChange }: {
  departLabel: string; returnLabel: string; range: DateRange; onChange: (r: DateRange | undefined) => void;
}) {
  const [open, setOpen] = useState(false);
  const fmt = (d?: Date) => (d ? format(d, "d MMM") : "");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button type="button" className="w-full flex items-stretch text-left">
          <div className="relative flex-1 min-w-0">
            <div className="absolute right-0 top-2 bottom-2 w-px bg-[rgba(0,31,107,0.12)]" />
            <div className="flex flex-col gap-1 px-5 py-3.5">
              <span className="text-[10px] font-bold uppercase tracking-[1px] text-[#5b6580] leading-none whitespace-nowrap">{departLabel}</span>
              <span className="text-[15px] font-semibold text-[#09102b] truncate">{fmt(range.from)}</span>
            </div>
          </div>
          <div className="relative flex-1 min-w-0">
            <div className="flex flex-col gap-1 px-5 py-3.5">
              <span className="text-[10px] font-bold uppercase tracking-[1px] text-[#5b6580] leading-none whitespace-nowrap">{returnLabel}</span>
              <span className="flex items-center justify-between gap-2 text-[15px] font-semibold text-[#09102b] truncate">
                {fmt(range.to)}
                <CalendarIcon size={14} className="text-[#5b6580] shrink-0" />
              </span>
            </div>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Calendar
          mode="range"
          numberOfMonths={2}
          defaultMonth={range.from}
          selected={range}
          onSelect={(r) => onChange(r)}
        />
      </PopoverContent>
    </Popover>
  );
}

// ─── Passengers field — Adults/Children steppers in a popover ──────────────
function PassengerRow({ label, sub, value, min, max, onChange }: {
  label: string; sub: string; value: number; min: number; max: number; onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold text-[#09102b]">{label}</p>
        <p className="text-xs text-[#5b6580]">{sub}</p>
      </div>
      <div className="flex items-center gap-3">
        <button type="button" disabled={value <= min} onClick={() => onChange(Math.max(min, value - 1))}
          aria-label={`Decrease ${label}`}
          className="w-7 h-7 flex items-center justify-center rounded-full border border-[rgba(0,31,107,0.2)] text-[#001f6b] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#E6ECF8] transition-colors">
          <Minus size={12} />
        </button>
        <span className="w-4 text-center text-sm font-semibold text-[#09102b]">{value}</span>
        <button type="button" disabled={value >= max} onClick={() => onChange(Math.min(max, value + 1))}
          aria-label={`Increase ${label}`}
          className="w-7 h-7 flex items-center justify-center rounded-full border border-[rgba(0,31,107,0.2)] text-[#001f6b] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#E6ECF8] transition-colors">
          <Plus size={12} />
        </button>
      </div>
    </div>
  );
}

function PassengersField({ label, adults, childrenCount, onChange, hasDivider }: {
  label: string; adults: number; childrenCount: number; onChange: (adults: number, children: number) => void; hasDivider?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const summary = `${adults} Adult${adults !== 1 ? "s" : ""}` + (childrenCount > 0 ? `, ${childrenCount} Child${childrenCount !== 1 ? "ren" : ""}` : "");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button type="button" className="relative flex-1 min-w-0 w-full text-left">
          {hasDivider && <div className="absolute right-0 top-2 bottom-2 w-px bg-[rgba(0,31,107,0.12)]" />}
          <div className="flex flex-col gap-1 px-5 py-3.5">
            <span className="text-[10px] font-bold uppercase tracking-[1px] text-[#5b6580] leading-none whitespace-nowrap">{label}</span>
            <span className="text-[15px] font-semibold text-[#09102b] truncate">{summary}</span>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-64 p-4">
        <PassengerRow label="Adults" sub="Age 12+" value={adults} min={1} max={9} onChange={(v) => onChange(v, childrenCount)} />
        <div className="h-px bg-[rgba(0,31,107,0.08)] my-3" />
        <PassengerRow label="Children" sub="Age 0–11" value={childrenCount} min={0} max={8} onChange={(v) => onChange(adults, v)} />
      </PopoverContent>
    </Popover>
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

// ─── Shared tab button styling ───────────────────────────────────────────────
// Deselected tabs stay fully transparent so the hero photo shows through; only
// the active tab gets an opaque fill.
function tabClasses(active: boolean, extra = "") {
  return `px-5 sm:px-6 py-3 text-[11px] font-bold uppercase tracking-[0.8px] border-b-[3px] transition-colors ${extra} ${
    active
      ? "bg-[#EDF0F7] border-b-[#C9A84C] text-[#001f6b]"
      : "bg-transparent border-b-transparent text-white/80 hover:bg-white/10 hover:text-white"
  }`;
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
  const [dateRange, setDateRange] = useState<DateRange>({ from: new Date(2026, 6, 15), to: new Date(2026, 6, 22) });
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
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

  const isMoreTab = tab === "manage" || tab === "status";

  return (
    <div className="w-full max-w-[1280px] rounded shadow-[0_12px_28px_rgba(0,8,23,0.25)] overflow-visible">
      {/* Tabs — fully transparent so the hero photo shows through; only the active tab is opaque */}
      <div className="flex rounded-t overflow-hidden">
        <button type="button" onClick={() => setTab("book")}
          className={tabClasses(tab === "book", "border-r border-r-white/15")}>
          {t("booking_tab_book")}
        </button>
        <button type="button" onClick={() => setTab("manage")}
          className={`hidden sm:block ${tabClasses(tab === "manage", "border-r border-r-white/15")}`}>
          {t("booking_tab_manage")}
        </button>
        <button type="button" onClick={() => setTab("status")}
          className={`hidden sm:block ${tabClasses(tab === "status")}`}>
          {t("booking_tab_status")}
        </button>
        {/* Mobile-only: collapse Manage/Status into a "More" dropdown */}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button type="button" className={`sm:hidden flex-1 flex items-center justify-center gap-1 ${tabClasses(isMoreTab)}`}>
              {tab === "manage" ? t("booking_tab_manage") : tab === "status" ? t("booking_tab_status") : "More"}
              <ChevronDown size={12} />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content align="end" className="z-50 bg-white border border-[rgba(0,31,107,0.12)] rounded shadow-lg overflow-hidden min-w-[200px]">
              <DropdownMenu.Item onClick={() => setTab("manage")}
                className="px-4 py-3 text-[11px] font-bold uppercase tracking-[0.8px] text-[#09102b] cursor-pointer hover:bg-[#E6ECF8] outline-none">
                {t("booking_tab_manage")}
              </DropdownMenu.Item>
              <DropdownMenu.Item onClick={() => setTab("status")}
                className="px-4 py-3 text-[11px] font-bold uppercase tracking-[0.8px] text-[#09102b] cursor-pointer hover:bg-[#E6ECF8] outline-none">
                {t("booking_tab_status")}
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>

      {/* Opaque panel below the tab strip — holds all tab content */}
      <div className="bg-[#EDF0F7] rounded-b border border-[rgba(0,31,107,0.12)]">
      {tab === "book" && (
        <>
          {/* Trip type + promo (promo hidden on mobile to match compact layout) */}
          <div className="flex items-center justify-between px-5 py-2.5 border-b border-[rgba(0,31,107,0.12)] gap-4">
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
                className="hidden sm:block text-[11px] font-bold uppercase tracking-[0.8px] text-[#C9A84C] hover:text-[#B8943D] transition-colors">
                {t("booking_promo")}
              </button>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
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

          {/* Fields — mobile: each field its own stacked/2-col block. Desktop (lg+): merged route & date blocks */}
          <div className="p-4">
            {/* Mobile / tablet layout */}
            <div className="grid grid-cols-2 gap-3 lg:hidden">
              <div className="col-span-2 bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px]">
                <CityField label={t("booking_origin")} value={origin} onChange={setOrigin} />
              </div>
              <div className="col-span-2 relative bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px]">
                <button type="button" onClick={swap} aria-label="Swap origin and destination"
                  className="absolute -top-[14px] right-4 flex items-center justify-center w-7 h-7 rounded-full border border-[rgba(0,31,107,0.15)] bg-white text-[#5b6580] hover:text-[#001f6b] hover:border-[#001f6b]/40 transition-colors shadow-sm z-10">
                  <ArrowLeftRight size={12} className="rotate-90" />
                </button>
                <CityField label={t("booking_destination")} value={destination} onChange={setDestination} />
              </div>
              <div className="col-span-2 bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px]">
                <DateRangeField departLabel={t("booking_depart")} returnLabel={t("booking_return")} range={dateRange} onChange={(r) => r && setDateRange(r)} />
              </div>
              <div className="col-span-2 bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px]">
                <PassengersField label={t("booking_passengers")} adults={adults} childrenCount={children} onChange={(a, c) => { setAdults(a); setChildren(c); }} />
              </div>
              <div className="bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px]">
                <ClassSelect label={t("booking_class")} value={cabinClass} onChange={setCabinClass} options={classOptions} />
              </div>
              <button type="button"
                onClick={() => toast.success(`Searching flights: ${origin} → ${destination}`)}
                className="col-span-2 flex items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-[0.5px] bg-[#C9A84C] text-[#3d2800] hover:bg-[#B8943D] transition-colors rounded-[4px] py-4">
                <Search size={14} />{t("booking_cta")}
              </button>
            </div>

            {/* Desktop layout (lg+) — Origin/Destination merged, Depart/Return merged */}
            <div className="hidden lg:flex items-stretch gap-3">
              <div className="relative flex items-stretch bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px] flex-[1.8] min-w-[320px]">
                <CityField label={t("booking_origin")} value={origin} onChange={setOrigin} />
                <button type="button" onClick={swap}
                  className="flex items-center justify-center w-6 h-6 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full border border-[rgba(0,31,107,0.15)] bg-white text-[#5b6580] hover:text-[#001f6b] hover:border-[#001f6b]/40 transition-colors z-10"
                  aria-label="Swap origin and destination">
                  <ArrowLeftRight size={11} />
                </button>
                <CityField label={t("booking_destination")} value={destination} onChange={setDestination} />
              </div>

              <div className="flex items-stretch bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px] flex-[1.3] min-w-[240px]">
                <DateRangeField departLabel={t("booking_depart")} returnLabel={t("booking_return")} range={dateRange} onChange={(r) => r && setDateRange(r)} />
              </div>

              <div className="bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px] flex-1 min-w-[120px]">
                <PassengersField label={t("booking_passengers")} adults={adults} childrenCount={children} onChange={(a, c) => { setAdults(a); setChildren(c); }} />
              </div>

              <div className="bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px] flex-1 min-w-[120px]">
                <ClassSelect label={t("booking_class")} value={cabinClass} onChange={setCabinClass} options={classOptions} />
              </div>

              <button type="button"
                onClick={() => toast.success(`Searching flights: ${origin} → ${destination}`)}
                className="shrink-0 w-[190px] flex items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-[0.5px] bg-[#C9A84C] text-[#3d2800] hover:bg-[#B8943D] transition-colors rounded-[4px]">
                <Search size={14} />{t("booking_cta")}
              </button>
            </div>
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
    </div>
  );
}

export function HeroSection() {
  const { t } = useLocale();
  return (
    <section className="relative min-h-[640px] sm:min-h-[720px] lg:h-[840px] w-full overflow-hidden shrink-0">
      <div className="absolute inset-0">
        <img src={imgHeroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/56" />
        <div className="absolute bottom-0 left-0 right-0 h-[591px] bg-gradient-to-t from-[rgba(0,8,23,0.8)] to-transparent" />
      </div>
      <div className="relative lg:absolute inset-0 flex flex-col justify-end pt-32 pb-8 sm:pb-12 lg:pb-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 w-full flex flex-col gap-4 lg:gap-6">
          <div className="flex flex-col gap-2 lg:gap-3 max-w-[768px]">
            <h1 className="font-bold text-[34px] leading-[36px] sm:text-[48px] sm:leading-[50px] lg:text-[72px] lg:leading-[72px] tracking-[-1.44px] text-white w-full">
              {t("hero_headline")}
            </h1>
            <p className="text-sm sm:text-base lg:text-xl font-normal leading-normal lg:leading-[32.5px] text-white/75">{t("hero_subtitle")}</p>
            <button type="button" onClick={() => toast.info(t("hero_ticker"))}
              className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-semibold text-white/90 hover:text-white transition-colors self-start mt-1">
              <Plane size={14} className="text-[#C9A84C] rotate-45 shrink-0" />
              <span className="underline decoration-white/40 underline-offset-4">{t("hero_ticker")}</span>
              <ChevronDown size={13} className="-rotate-90 shrink-0" />
            </button>
          </div>
          <BookingWidget />
        </div>
      </div>
    </section>
  );
}
