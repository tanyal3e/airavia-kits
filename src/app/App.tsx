import React, { useState, useRef, useEffect } from "react";
import { AiraviaLogo } from "./components/AiraviaLogo";
import * as Tabs from "@radix-ui/react-tabs";
import * as Accordion from "@radix-ui/react-accordion";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as Select from "@radix-ui/react-select";
import { Toaster, toast } from "sonner";
import {
  Plane, Search, ChevronRight, ChevronDown, ChevronLeft, Check, X,
  AlertCircle, Info, AlertTriangle, CheckCircle2, Send, User, Bot,
  ArrowRight, Loader2, Bell, Settings, Menu, Home, CreditCard,
  Luggage, MapPin, Calendar, Clock, Star, Heart, RefreshCw,
  Maximize2, Minimize2, MoreHorizontal, Eye, EyeOff, Paperclip, Mic, Smile,
  Globe,
} from "lucide-react";
import { SiteTemplate } from "./components/SiteTemplate";


// ─── Section nav ───────────────────────────────────────────────────────────
const NAV_SECTIONS = [
  { id: "colors",     label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "buttons",    label: "Buttons" },
  { id: "badges",     label: "Badges" },
  { id: "forms",      label: "Forms" },
  { id: "cards",      label: "Cards" },
  { id: "alerts",     label: "Alerts" },
  { id: "navigation", label: "Navigation" },
  { id: "chat",       label: "Conversational UI" },
  { id: "mascot",     label: "Mascot" },
  { id: "misc",       label: "Misc" },
];

// ─── Mascot SVG ────────────────────────────────────────────────────────────
const MOOD_LABELS: Record<string, string> = {
  happy: "Default",
  waving: "Welcome",
  thinking: "Thinking",
};

function AirbridgeMascot({ size = 120, mood = "happy" }: { size?: number; mood?: "happy" | "thinking" | "waving" }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-xl border-2 border-dashed border-[#B8C3DC] bg-[#EDF0F7] flex flex-col items-center justify-center gap-2 select-none"
      aria-label={`Sky mascot placeholder — ${mood}`}
    >
      <div className="w-10 h-10 rounded-full bg-[#DDE2EF] flex items-center justify-center">
        <User size={Math.round(size * 0.17)} className="text-[#8A9EC0]" />
      </div>
      <p className="text-[10px] font-bold text-[#8A9EC0] tracking-wide uppercase">Sky</p>
      <p className="text-[9px] text-[#B8C3DC] font-medium">{MOOD_LABELS[mood]}</p>
    </div>
  );
}

// ─── Section wrapper ───────────────────────────────────────────────────────
function Section({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-14 border-b border-border last:border-0">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground tracking-tight">{title}</h2>
        {subtitle && <p className="mt-1.5 text-sm text-muted-foreground max-w-xl">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">{children}</p>;
}

// ─── Color system ──────────────────────────────────────────────────────────
const COLORS = {
  "Cobalt Navy": [
    { name: "Navy 50",  hex: "#EDF1FC" },
    { name: "Navy 100", hex: "#D2DCFA" },
    { name: "Navy 200", hex: "#A5B8F5" },
    { name: "Navy 300", hex: "#6D8EEC" },
    { name: "Navy 400", hex: "#3D64E0" },
    { name: "Navy 500", hex: "#0057D9" },
    { name: "Navy 600", hex: "#0044B0" },
    { name: "Navy 700", hex: "#003388" },
    { name: "Navy 800", hex: "#001F6B" },
    { name: "Navy 900", hex: "#000E3B" },
  ],
  "Gold": [
    { name: "Gold 100", hex: "#FEF7E8" },
    { name: "Gold 200", hex: "#F8E6B0" },
    { name: "Gold 300", hex: "#EDD07A" },
    { name: "Gold 400", hex: "#DDB94D" },
    { name: "Gold 500", hex: "#C9A84C" },
    { name: "Gold 600", hex: "#A8872E" },
    { name: "Gold 700", hex: "#7D6219" },
  ],
  "Semantic": [
    { name: "Success",       hex: "#0E7A44" },
    { name: "Success Light", hex: "#D4F0E3" },
    { name: "Warning",       hex: "#E87D0D" },
    { name: "Warning Light", hex: "#FEF0D9" },
    { name: "Error",         hex: "#D0182E" },
    { name: "Error Light",   hex: "#FDDDDF" },
    { name: "Info",          hex: "#0057D9" },
    { name: "Info Light",    hex: "#D2DCFA" },
  ],
  "Neutral": [
    { name: "Gray 50",  hex: "#F4F6FB" },
    { name: "Gray 100", hex: "#EDF0F7" },
    { name: "Gray 200", hex: "#DDE2EF" },
    { name: "Gray 300", hex: "#B8C3DC" },
    { name: "Gray 400", hex: "#8A9EC0" },
    { name: "Gray 500", hex: "#5B6580" },
    { name: "Gray 700", hex: "#2E3452" },
    { name: "Gray 900", hex: "#09102B" },
  ],
};

function ColorSwatch({ name, hex }: { name: string; hex: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    try {
      navigator.clipboard.writeText(hex).catch(() => {});
    } catch (_) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <button onClick={copy} className="group flex flex-col gap-1.5 text-left focus:outline-none" title={`Copy ${hex}`}>
      <div className="h-12 w-full rounded-sm border border-border transition-transform group-hover:scale-105" style={{ backgroundColor: hex }} />
      <span className="text-xs font-medium text-foreground">{name}</span>
      <span className="font-[JetBrains_Mono,monospace] text-[10px] text-muted-foreground">{copied ? "Copied!" : hex}</span>
    </button>
  );
}

// ─── Button ────────────────────────────────────────────────────────────────
type BtnVariant = "primary" | "secondary" | "ghost" | "outline" | "danger" | "gold";
type BtnSize = "sm" | "md" | "lg";
const btnBase = "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed select-none";
const btnVariants: Record<BtnVariant, string> = {
  primary:   "bg-[#001F6B] text-white hover:bg-[#002B8F] active:bg-[#001A5C]",
  secondary: "bg-[#E6ECF8] text-[#001F6B] hover:bg-[#D0DBF5] active:bg-[#C0CCEE]",
  ghost:     "bg-transparent text-[#001F6B] hover:bg-[#E6ECF8] active:bg-[#D0DBF5]",
  outline:   "bg-transparent border border-[#001F6B] text-[#001F6B] hover:bg-[#E6ECF8] active:bg-[#D0DBF5]",
  danger:    "bg-[#D0182E] text-white hover:bg-[#A81224] active:bg-[#880F1E]",
  gold:      "bg-[#C9A84C] text-[#3D2800] hover:bg-[#B8943D] active:bg-[#9A7B2E]",
};
const btnSizes: Record<BtnSize, string> = {
  sm: "h-8 px-3 text-xs rounded-sm",
  md: "h-10 px-5 text-sm rounded",
  lg: "h-12 px-7 text-base rounded",
};

const Btn = React.forwardRef<HTMLButtonElement, {
  variant?: BtnVariant; size?: BtnSize; loading?: boolean; disabled?: boolean;
  icon?: React.ReactNode; iconRight?: React.ReactNode; children?: React.ReactNode;
  onClick?: () => void; className?: string;
}>(function Btn({ variant = "primary", size = "md", loading = false, disabled = false, icon, iconRight, children, onClick, className = "" }, ref) {
  return (
    <button ref={ref} className={`${btnBase} ${btnVariants[variant]} ${btnSizes[size]} ${className}`} disabled={disabled || loading} onClick={onClick}>
      {loading ? <Loader2 className="animate-spin" size={14} /> : icon}
      {children}
      {!loading && iconRight}
    </button>
  );
});

// ─── Badge ─────────────────────────────────────────────────────────────────
type BadgeVariant = "info" | "success" | "warning" | "error" | "neutral" | "economy" | "business" | "first";
const badgeStyles: Record<BadgeVariant, string> = {
  info:     "bg-[#D2DCFA] text-[#001F6B]",
  success:  "bg-[#D4F0E3] text-[#0E7A44]",
  warning:  "bg-[#FEF0D9] text-[#994F08]",
  error:    "bg-[#FDDDDF] text-[#A81224]",
  neutral:  "bg-[#EDF0F7] text-[#5B6580]",
  economy:  "bg-[#EDF0F7] text-[#2E3452] border border-[#B8C3DC]",
  business: "bg-[#001F6B] text-white",
  first:    "bg-[#C9A84C] text-[#3D2800]",
};
function Badge({ variant = "neutral", dot = false, pill = false, children }: { variant?: BadgeVariant; dot?: boolean; pill?: boolean; children: React.ReactNode }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold ${pill ? "rounded-full" : "rounded-sm"} ${badgeStyles[variant]}`}>
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />}
      {children}
    </span>
  );
}

// ─── Input ─────────────────────────────────────────────────────────────────
function InputField({ label, placeholder, icon, error, disabled }: { label?: string; placeholder?: string; icon?: React.ReactNode; error?: string; disabled?: boolean }) {
  const [val, setVal] = useState("");
  const [show, setShow] = useState(false);
  const isPassword = label === "Password";
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-sm font-semibold text-foreground">{label}</label>}
      <div className={`flex items-center gap-2 px-3 h-11 rounded border ${error ? "border-destructive bg-[#FDDDDF]/30" : "border-border bg-card"} focus-within:ring-2 focus-within:ring-ring/30 focus-within:border-ring transition-all ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
        {icon && <span className="text-muted-foreground">{icon}</span>}
        <input
          className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
          placeholder={placeholder}
          value={val}
          onChange={e => setVal(e.target.value)}
          disabled={disabled}
          type={isPassword && !show ? "password" : "text"}
        />
        {isPassword && (
          <button onClick={() => setShow(s => !s)} className="text-muted-foreground hover:text-foreground" type="button">
            {show ? <EyeOff size={14} /> : <Eye size={14} />}
          </button>
        )}
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

// ─── Toggle ────────────────────────────────────────────────────────────────
function Toggle({ label }: { label: string }) {
  const [on, setOn] = useState(false);
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <button role="switch" aria-checked={on} onClick={() => setOn(v => !v)} type="button"
        className={`relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${on ? "bg-[#001F6B]" : "bg-[#B8C3DC]"}`}>
        <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${on ? "translate-x-5" : "translate-x-0"}`} />
      </button>
      <span className="text-sm font-medium text-foreground">{label}</span>
    </label>
  );
}

// ─── Checkbox ─────────────────────────────────────────────────────────────
function CheckboxItem({ label, defaultChecked = false }: { label: string; defaultChecked?: boolean }) {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <label className="flex items-center gap-2.5 cursor-pointer select-none">
      <button role="checkbox" aria-checked={checked} onClick={() => setChecked(v => !v)} type="button"
        className={`flex items-center justify-center rounded-sm border-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${checked ? "bg-[#001F6B] border-[#001F6B]" : "border-border bg-card hover:border-[#001F6B]/50"}`}
        style={{ width: 18, height: 18 }}>
        {checked && <Check size={11} strokeWidth={3} className="text-white" />}
      </button>
      <span className="text-sm text-foreground">{label}</span>
    </label>
  );
}

// ─── Radio ─────────────────────────────────────────────────────────────────
function RadioGroup({ options }: { options: string[] }) {
  const [val, setVal] = useState(options[0]);
  return (
    <div className="flex flex-col gap-2.5">
      {options.map(opt => (
        <label key={opt} className="flex items-center gap-2.5 cursor-pointer select-none">
          <button role="radio" aria-checked={val === opt} onClick={() => setVal(opt)} type="button"
            className={`flex items-center justify-center rounded-full border-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${val === opt ? "border-[#001F6B]" : "border-border bg-card hover:border-[#001F6B]/50"}`}
            style={{ width: 18, height: 18 }}>
            {val === opt && <span className="rounded-full bg-[#001F6B]" style={{ width: 9, height: 9 }} />}
          </button>
          <span className="text-sm text-foreground">{opt}</span>
        </label>
      ))}
    </div>
  );
}

// ─── Alert ─────────────────────────────────────────────────────────────────
type AlertType = "info" | "success" | "warning" | "error";
const alertCfg: Record<AlertType, { icon: React.ReactNode; bg: string; border: string; text: string; title: string; body: string }> = {
  info:    { icon: <Info size={16} />,          bg: "bg-[#D2DCFA]/60", border: "border-[#0057D9]/30", text: "text-[#001F6B]", title: "Flight Update",       body: "Your flight AB 320 to Paris CDG departs in 2 hours. Please proceed to Gate 14." },
  success: { icon: <CheckCircle2 size={16} />,  bg: "bg-[#D4F0E3]/60", border: "border-[#0E7A44]/30", text: "text-[#0E7A44]", title: "Boarding Confirmed",  body: "Your boarding pass for seat 12A has been issued. Have a great flight!" },
  warning: { icon: <AlertTriangle size={16} />, bg: "bg-[#FEF0D9]/60", border: "border-[#E87D0D]/30", text: "text-[#994F08]", title: "Delay Notice",        body: "Flight AB 320 is delayed 45 min due to air traffic. New departure: 16:30." },
  error:   { icon: <AlertCircle size={16} />,   bg: "bg-[#FDDDDF]/60", border: "border-[#D0182E]/30", text: "text-[#A81224]", title: "Booking Error",       body: "Payment could not be processed. Please verify your card details and try again." },
};
function AlertBox({ type }: { type: AlertType }) {
  const [visible, setVisible] = useState(true);
  const c = alertCfg[type];
  if (!visible) return null;
  return (
    <div className={`flex gap-3 p-4 rounded border ${c.bg} ${c.border} ${c.text}`}>
      <span className="mt-0.5 shrink-0">{c.icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold">{c.title}</p>
        <p className="text-sm opacity-80 mt-0.5">{c.body}</p>
      </div>
      <button onClick={() => setVisible(false)} className="opacity-60 hover:opacity-100 shrink-0" type="button"><X size={14} /></button>
    </div>
  );
}

// ─── Flight card ───────────────────────────────────────────────────────────
function FlightCard({ origin = "CDG", dest = "JFK", dep = "08:35", arr = "10:55", duration = "7h 20m", price = "€1,240", cls = "business" as BadgeVariant }) {
  const [saved, setSaved] = useState(false);
  return (
    <div className="bg-card border border-border rounded p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <Badge variant={cls} pill>{cls === "business" ? "Business" : cls === "first" ? "First Class" : "Economy"}</Badge>
          <p className="text-xs text-muted-foreground mt-1.5">Mon 14 Jul · Direct</p>
        </div>
        <button onClick={() => setSaved(v => !v)} className="text-muted-foreground hover:text-destructive transition-colors" type="button">
          <Heart size={16} fill={saved ? "#D0182E" : "none"} className={saved ? "text-destructive" : ""} />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-foreground tracking-tight">{origin}</p>
          <p className="text-xs text-muted-foreground">Paris</p>
          <p className="text-sm font-semibold text-foreground">{dep}</p>
        </div>
        <div className="flex-1 flex flex-col items-center gap-1">
          <p className="text-xs text-muted-foreground">{duration}</p>
          <div className="flex items-center gap-1 w-full">
            <div className="h-px flex-1 bg-border" />
            <Plane size={14} className="text-[#001F6B] rotate-[5deg]" />
            <div className="h-px flex-1 bg-border" />
          </div>
          <p className="text-xs text-muted-foreground">Non-stop</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-foreground tracking-tight">{dest}</p>
          <p className="text-xs text-muted-foreground">New York</p>
          <p className="text-sm font-semibold text-foreground">{arr}</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">From</p>
          <p className="text-xl font-bold text-foreground">{price} <span className="text-sm font-normal text-muted-foreground">/ person</span></p>
        </div>
        <Btn size="sm" iconRight={<ArrowRight size={13} />}>Select</Btn>
      </div>
    </div>
  );
}

// ─── Stat card ─────────────────────────────────────────────────────────────
function StatCard({ label, value, delta, icon }: { label: string; value: string; delta: string; icon: React.ReactNode }) {
  const positive = delta.startsWith("+") || delta.startsWith("-");
  const up = delta.startsWith("+");
  return (
    <div className="bg-card border border-border rounded p-5">
      <div className="flex items-start justify-between mb-3">
        <p className="text-sm text-muted-foreground font-medium">{label}</p>
        <span className="text-muted-foreground">{icon}</span>
      </div>
      <p className="text-2xl font-bold text-foreground tracking-tight">{value}</p>
      <p className={`text-xs mt-1 font-semibold ${positive && up ? "text-[#0E7A44]" : "text-destructive"}`}>{delta} vs last month</p>
    </div>
  );
}

// ─── Progress bar ──────────────────────────────────────────────────────────
function ProgressBar({ label, value, max, color = "#0057D9" }: { label: string; value: number; max: number; color?: string }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between">
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-sm text-muted-foreground">{value} / {max}</p>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}

// ─── Skeleton ──────────────────────────────────────────────────────────────
function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`bg-muted rounded animate-pulse ${className}`} />;
}

// ─── Avatar ────────────────────────────────────────────────────────────────
function Avatar({ name, size = "md" }: { name: string; size?: "sm" | "md" | "lg" }) {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  const sz = { sm: "w-7 h-7 text-xs", md: "w-9 h-9 text-sm", lg: "w-12 h-12 text-base" };
  return (
    <div className={`${sz[size]} rounded-full bg-[#001F6B] text-white font-semibold flex items-center justify-center shrink-0`}>
      {initials}
    </div>
  );
}

// ─── Pagination ────────────────────────────────────────────────────────────
function Pagination() {
  const [page, setPage] = useState(3);
  const total = 12;
  const pages: (number | "…")[] = Array.from({ length: total }, (_, i) => i + 1)
    .filter(p => p === 1 || p === total || Math.abs(p - page) <= 1)
    .reduce<(number | "…")[]>((acc, p, idx, arr) => {
      if (idx > 0 && (p as number) - (arr[idx - 1] as number) > 1) acc.push("…");
      acc.push(p);
      return acc;
    }, []);
  return (
    <div className="flex items-center gap-1.5">
      <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} type="button"
        className="w-8 h-8 flex items-center justify-center rounded border border-border text-muted-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
        <ChevronLeft size={14} />
      </button>
      {pages.map((p, i) => p === "…" ? (
        <span key={`el-${i}`} className="w-8 h-8 flex items-center justify-center text-muted-foreground text-sm">…</span>
      ) : (
        <button key={p} onClick={() => setPage(p as number)} type="button"
          className={`w-8 h-8 flex items-center justify-center rounded text-sm font-medium transition-colors ${page === p ? "bg-[#001F6B] text-white" : "border border-border text-foreground hover:bg-muted"}`}>
          {p}
        </button>
      ))}
      <button onClick={() => setPage(p => Math.min(total, p + 1))} disabled={page === total} type="button"
        className="w-8 h-8 flex items-center justify-center rounded border border-border text-muted-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
        <ChevronRight size={14} />
      </button>
    </div>
  );
}

// ─── Chat UI ───────────────────────────────────────────────────────────────
type ChatMsg = { id: number; role: "user" | "bot"; text: string; time: string };
const INIT_MSGS: ChatMsg[] = [
  { id: 1, role: "bot",  text: "Hello! I'm Sky, your Airavia assistant. I can help with bookings, flight status, upgrades, and more. How can I help you today?", time: "09:00" },
  { id: 2, role: "user", text: "I need to change my seat on flight AB320 to Paris on July 14th.", time: "09:01" },
  { id: 3, role: "bot",  text: "Found your booking AB320 CDG→JFK on 14 July. You're in seat 24C (Economy). Would you like to upgrade to Business, or choose a different Economy seat?", time: "09:01" },
];
const BOT_REPLIES = [
  "Done! You're now in seat 12A — a window seat with extra legroom.",
  "Your boarding pass has been sent to your registered email.",
  "Is there anything else I can help you with today?",
  "I can also assist with baggage allowance, meal preferences, or lounge access.",
];

function ChatUI() {
  const [messages, setMessages] = useState<ChatMsg[]>(INIT_MSGS);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [replyIdx, setReplyIdx] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, typing]);

  const send = () => {
    if (!input.trim()) return;
    const now = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
    setMessages(m => [...m, { id: Date.now(), role: "user", text: input, time: now }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(m => [...m, { id: Date.now() + 1, role: "bot", text: BOT_REPLIES[replyIdx % BOT_REPLIES.length], time: now }]);
      setReplyIdx(i => i + 1);
    }, 1300);
  };

  return (
    <div className="flex flex-col bg-card border border-border rounded overflow-hidden" style={{ height: 460 }}>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-[#001F6B]">
        <div className="w-8 h-8 rounded-full bg-[#C9A84C] flex items-center justify-center shrink-0">
          <Bot size={16} className="text-[#001F6B]" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Sky — Airavia Assistant</p>
          <p className="text-xs text-white/50 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2EC074] inline-block" />Online
          </p>
        </div>
        <div className="ml-auto flex gap-2 text-white/40">
          <button className="hover:text-white transition-colors" type="button"><Minimize2 size={14} /></button>
          <button className="hover:text-white transition-colors" type="button"><Maximize2 size={14} /></button>
        </div>
      </div>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-[#F4F6FB]">
        {messages.map(m => (
          <div key={m.id} className={`flex gap-2.5 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
            {m.role === "bot" ? (
              <div className="w-7 h-7 rounded-full bg-[#001F6B] flex items-center justify-center shrink-0">
                <Bot size={14} className="text-white" />
              </div>
            ) : <Avatar name="Marie Dupont" size="sm" />}
            <div className={`max-w-[72%] flex flex-col gap-0.5 ${m.role === "user" ? "items-end" : "items-start"}`}>
              <div className={`px-3.5 py-2.5 rounded text-sm leading-relaxed ${m.role === "user" ? "bg-[#001F6B] text-white rounded-tr-none" : "bg-card text-foreground border border-border rounded-tl-none shadow-sm"}`}>
                {m.text}
              </div>
              <p className="text-[10px] text-muted-foreground px-1">{m.time}</p>
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#001F6B] flex items-center justify-center shrink-0">
              <Bot size={14} className="text-white" />
            </div>
            <div className="bg-card border border-border px-4 py-3 rounded rounded-tl-none shadow-sm flex gap-1.5 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>
      {/* Quick replies */}
      <div className="px-4 py-2 border-t border-border flex gap-2 overflow-x-auto">
        {["Upgrade to Business", "Baggage allowance", "Check-in status"].map(q => (
          <button key={q} type="button" onClick={() => setInput(q)}
            className="shrink-0 text-xs px-3 py-1.5 rounded-full border border-border bg-card text-foreground hover:bg-[#E6ECF8] hover:border-[#001F6B]/30 transition-colors">
            {q}
          </button>
        ))}
      </div>
      {/* Input row */}
      <div className="px-3 pb-3 pt-1 border-t border-border flex items-center gap-2 bg-card">
        <button className="text-muted-foreground hover:text-foreground transition-colors" type="button"><Paperclip size={16} /></button>
        <button className="text-muted-foreground hover:text-foreground transition-colors" type="button"><Smile size={16} /></button>
        <input
          className="flex-1 bg-muted rounded px-3 py-2 text-sm outline-none text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/30"
          placeholder="Type a message…"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
        />
        <button className="text-muted-foreground hover:text-foreground transition-colors" type="button"><Mic size={16} /></button>
        <Btn size="sm" onClick={send} disabled={!input.trim()} icon={<Send size={13} />}>Send</Btn>
      </div>
    </div>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────
type AppView = "ds" | "site";

export default function App() {
  const [view, setView] = useState<AppView>("ds");
  const [activeSection, setActiveSection] = useState("colors");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loadingDemo, setLoadingDemo] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (view !== "ds") return;
    const handler = () => {
      for (const s of [...NAV_SECTIONS].reverse()) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) { setActiveSection(s.id); break; }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [view]);

  return (
    <TooltipPrimitive.Provider delayDuration={200}>
      <Toaster position="top-right" richColors />
      <div className="min-h-screen bg-background">

        {/* ── Meta header ────────────────────────────────────────────── */}
        <header className="sticky top-0 z-50 bg-[#001F6B] border-b border-white/10 shadow-sm">
          <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3 shrink-0">
              <AiraviaLogo height={28} />
            </div>

            {/* View tabs */}
            <div className="flex items-center gap-0.5 border border-white/20 rounded p-0.5 shrink-0">
              <button
                type="button"
                onClick={() => setView("ds")}
                className={`px-3 py-1 text-xs font-semibold rounded transition-all duration-150 ${view === "ds" ? "bg-white text-[#001F6B]" : "text-white/55 hover:text-white"}`}
              >
                Design System
              </button>
              <button
                type="button"
                onClick={() => setView("site")}
                className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded transition-all duration-150 ${view === "site" ? "bg-white text-[#001F6B]" : "text-white/55 hover:text-white"}`}
              >
                <Globe size={11} />
                Site Template
              </button>
            </div>

            {/* DS section nav (visible only in DS mode) */}
            {view === "ds" && (
              <div className="hidden lg:flex items-center gap-0.5 ml-2 overflow-x-auto">
                {NAV_SECTIONS.map(s => (
                  <button key={s.id} onClick={() => scrollTo(s.id)} type="button"
                    className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors ${activeSection === s.id ? "bg-white/15 text-white" : "text-white/50 hover:text-white hover:bg-white/10"}`}>
                    {s.label}
                  </button>
                ))}
              </div>
            )}

            <div className="ml-auto flex items-center gap-3">
              {view === "ds" && <span className="hidden sm:inline font-[JetBrains_Mono,monospace] text-xs text-white/30">v2.1.0</span>}
              {view === "ds" && (
                <button className="lg:hidden text-white/70 hover:text-white" type="button" onClick={() => setMobileMenuOpen(v => !v)}>
                  <Menu size={20} />
                </button>
              )}
            </div>
          </div>
        </header>

        {/* ── Site Template view ─────────────────────────────────────── */}
        {view === "site" && <SiteTemplate />}

        {/* ── Design System view ─────────────────────────────────────── */}
        {view === "ds" && <>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/40" onClick={() => setMobileMenuOpen(false)}>
            <div className="absolute left-0 top-0 h-full w-64 bg-card border-r border-border p-5" onClick={e => e.stopPropagation()}>
              <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">Sections</p>
              {NAV_SECTIONS.map(s => (
                <button key={s.id} onClick={() => scrollTo(s.id)} type="button"
                  className={`w-full text-left px-3 py-2 rounded text-sm font-medium mb-0.5 transition-colors ${activeSection === s.id ? "bg-[#E6ECF8] text-[#001F6B]" : "text-foreground hover:bg-muted"}`}>
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Content ──────────────────────────────────────────────────── */}
        <main className="max-w-screen-xl mx-auto px-6 py-10">

          {/* Hero */}
          <div className="mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-[#C9A84C] mb-3">Foundation</p>
            <h1 className="text-4xl font-bold text-foreground tracking-tight leading-tight max-w-xl">
              Airavia<br />Design System
            </h1>
            <p className="mt-3 text-muted-foreground max-w-lg">
              A comprehensive component library for premium aviation experiences. Consistent, accessible, and crafted with precision.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <Badge variant="info">React 18</Badge>
              <Badge variant="neutral">Tailwind CSS 4</Badge>
              <Badge variant="success">Accessible</Badge>
              <Badge variant="neutral" dot>v2.1.0</Badge>
            </div>
          </div>

          {/* Colors */}
          <Section id="colors" title="Color System" subtitle="Cobalt-shifted palette. Each scale ships 7–10 steps for precise hierarchical application.">
            {Object.entries(COLORS).map(([group, swatches]) => (
              <div key={group} className="mb-8">
                <SectionLabel>{group}</SectionLabel>
                <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(76px, 1fr))" }}>
                  {swatches.map(s => <ColorSwatch key={s.name} {...s} />)}
                </div>
              </div>
            ))}
          </Section>

          {/* Typography */}
          <Section id="typography" title="Typography" subtitle="Hanken Grotesk — a humanist grotesque optimised for aviation UI legibility.">
            <div className="space-y-1">
              {[
                { label: "Display",     size: "text-5xl",  weight: "font-bold",     text: "Paris CDG · Terminal 2E",        desc: "48px · 700" },
                { label: "Heading 1",   size: "text-3xl",  weight: "font-bold",     text: "Book your next adventure",       desc: "30px · 700" },
                { label: "Heading 2",   size: "text-2xl",  weight: "font-semibold", text: "Upcoming Flights",               desc: "24px · 600" },
                { label: "Heading 3",   size: "text-xl",   weight: "font-semibold", text: "Seat Selection",                 desc: "20px · 600" },
                { label: "Heading 4",   size: "text-lg",   weight: "font-semibold", text: "Baggage Allowance",              desc: "18px · 600" },
                { label: "Body",        size: "text-base", weight: "font-normal",   text: "Experience world-class service on every Airavia flight — fully-flat beds, gourmet dining, and priority boarding.", desc: "16px · 400" },
                { label: "Body Small",  size: "text-sm",   weight: "font-normal",   text: "Ticket prices include checked baggage, in-flight meals, and lounge access for Business passengers.", desc: "14px · 400" },
                { label: "Caption",     size: "text-xs",   weight: "font-medium",   text: "Flight AB320 · Operated by Airavia International", desc: "12px · 500" },
                { label: "Overline",    size: "text-xs",   weight: "font-bold",     text: "FARE CONDITIONS · NON-REFUNDABLE", desc: "11px · 700 · caps", extra: "tracking-widest uppercase" },
                { label: "Mono",        size: "text-xs",   weight: "font-medium",   text: "--color-primary: #001F6B",        desc: "12px · JetBrains Mono", mono: true },
              ].map(t => (
                <div key={t.label} className="flex items-baseline gap-6 py-4 border-b border-border last:border-0">
                  <div className="w-28 shrink-0">
                    <p className="text-xs font-semibold text-muted-foreground">{t.label}</p>
                    <p className="font-[JetBrains_Mono,monospace] text-[10px] text-muted-foreground/60 mt-0.5">{t.desc}</p>
                  </div>
                  <p className={`${t.size} ${t.weight} text-foreground ${t.extra ?? ""} ${t.mono ? "font-[JetBrains_Mono,monospace] text-[#0057D9]" : ""} leading-tight`}>
                    {t.text}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* Buttons */}
          <Section id="buttons" title="Buttons" subtitle="Six variants across three sizes with icon support and interactive states.">
            <div className="space-y-8">
              <div>
                <SectionLabel>Variants</SectionLabel>
                <div className="flex flex-wrap gap-3">
                  <Btn variant="primary">Primary</Btn>
                  <Btn variant="secondary">Secondary</Btn>
                  <Btn variant="ghost">Ghost</Btn>
                  <Btn variant="outline">Outline</Btn>
                  <Btn variant="danger">Danger</Btn>
                  <Btn variant="gold">Gold</Btn>
                </div>
              </div>
              <div>
                <SectionLabel>Sizes</SectionLabel>
                <div className="flex flex-wrap items-center gap-3">
                  <Btn size="sm">Small</Btn>
                  <Btn size="md">Medium</Btn>
                  <Btn size="lg">Large</Btn>
                </div>
              </div>
              <div>
                <SectionLabel>With Icons</SectionLabel>
                <div className="flex flex-wrap gap-3">
                  <Btn icon={<Plane size={14} />}>Book Flight</Btn>
                  <Btn variant="outline" icon={<Search size={14} />}>Search</Btn>
                  <Btn variant="secondary" iconRight={<ChevronRight size={14} />}>Proceed</Btn>
                  <Btn variant="ghost" icon={<RefreshCw size={14} />} />
                  <Btn variant="outline" icon={<Bell size={14} />} />
                </div>
              </div>
              <div>
                <SectionLabel>States</SectionLabel>
                <div className="flex flex-wrap gap-3">
                  <Btn>Default</Btn>
                  <Btn loading={loadingDemo} onClick={() => { setLoadingDemo(true); setTimeout(() => setLoadingDemo(false), 2000); }}>
                    {loadingDemo ? "Processing…" : "Click to Load"}
                  </Btn>
                  <Btn disabled>Disabled</Btn>
                  <Btn variant="secondary" disabled>Disabled</Btn>
                </div>
              </div>
            </div>
          </Section>

          {/* Badges */}
          <Section id="badges" title="Badges & Tags" subtitle="Semantic status labels and aviation-specific cabin class indicators.">
            <div className="space-y-6">
              <div>
                <SectionLabel>Semantic</SectionLabel>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="info">Info</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="neutral">Neutral</Badge>
                </div>
              </div>
              <div>
                <SectionLabel>Cabin Class</SectionLabel>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="economy">Economy</Badge>
                  <Badge variant="business">Business</Badge>
                  <Badge variant="first">First Class</Badge>
                </div>
              </div>
              <div>
                <SectionLabel>Flight Status — Pill + Dot</SectionLabel>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="success" dot pill>On Time</Badge>
                  <Badge variant="warning" dot pill>Delayed 45 min</Badge>
                  <Badge variant="error" dot pill>Cancelled</Badge>
                  <Badge variant="info" dot pill>Boarding</Badge>
                  <Badge variant="neutral" dot pill>Scheduled</Badge>
                </div>
              </div>
            </div>
          </Section>

          {/* Forms */}
          <Section id="forms" title="Form Elements" subtitle="Inputs, selects, checkboxes, radios, and toggles with all interactive states.">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-5">
                <InputField label="Full Name" placeholder="Marie Dupont" />
                <InputField label="Email" placeholder="marie@airbridge.com" icon={<Search size={14} />} />
                <InputField label="Password" placeholder="Enter your password" />
                <InputField label="Destination" placeholder="Paris, CDG" error="Please enter a valid airport code." />
                <InputField label="Disabled Field" placeholder="Not editable" disabled />
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-foreground">Message</label>
                  <textarea
                    className="bg-card border border-border rounded px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground resize-none outline-none focus:ring-2 focus:ring-ring/30 focus:border-ring transition-all"
                    rows={3}
                    placeholder="Any special requirements for your flight…"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <SectionLabel>Select</SectionLabel>
                  <Select.Root defaultValue="business">
                    <Select.Trigger className="flex items-center justify-between w-full h-11 px-3 rounded border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 hover:border-[#001F6B]/40 transition-all">
                      <Select.Value />
                      <Select.Icon><ChevronDown size={14} className="text-muted-foreground" /></Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Content className="z-50 bg-card border border-border rounded shadow-lg overflow-hidden">
                        <Select.Viewport className="p-1">
                          {["Economy", "Premium Economy", "Business", "First Class"].map(opt => (
                            <Select.Item key={opt} value={opt.toLowerCase().replace(/ /g, "-")}
                              className="flex items-center gap-2 px-3 py-2 text-sm rounded text-foreground cursor-pointer hover:bg-[#E6ECF8] outline-none data-[highlighted]:bg-[#E6ECF8]">
                              <Select.ItemText>{opt}</Select.ItemText>
                              <Select.ItemIndicator className="ml-auto"><Check size={12} className="text-[#001F6B]" /></Select.ItemIndicator>
                            </Select.Item>
                          ))}
                        </Select.Viewport>
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>
                </div>
                <div>
                  <SectionLabel>Checkboxes</SectionLabel>
                  <div className="flex flex-col gap-2.5">
                    <CheckboxItem label="Add checked baggage (23 kg)" defaultChecked />
                    <CheckboxItem label="Priority boarding" />
                    <CheckboxItem label="Airport lounge access" defaultChecked />
                    <CheckboxItem label="Travel insurance" />
                  </div>
                </div>
                <div>
                  <SectionLabel>Radio Group</SectionLabel>
                  <RadioGroup options={["Economy", "Business", "First Class"]} />
                </div>
                <div>
                  <SectionLabel>Toggles</SectionLabel>
                  <div className="flex flex-col gap-3">
                    <Toggle label="Email notifications" />
                    <Toggle label="SMS flight alerts" />
                    <Toggle label="Marketing emails" />
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Cards */}
          <Section id="cards" title="Cards" subtitle="Flight, stat, and passenger cards with real aviation data.">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
              <FlightCard />
              <FlightCard origin="LHR" dest="DXB" dep="14:20" arr="23:40" duration="6h 20m" price="€890" cls="economy" />
              <div className="space-y-4">
                <StatCard label="Passengers Booked" value="12,840" delta="+8.4%" icon={<User size={16} />} />
                <StatCard label="On-time Performance" value="94.2%" delta="+1.1%" icon={<Clock size={16} />} />
                <StatCard label="Cancellations" value="23" delta="-12%" icon={<X size={16} />} />
              </div>
            </div>
            <SectionLabel>Passenger Card</SectionLabel>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Marie Dupont",   seat: "12A", cls: "business" as BadgeVariant, gate: "14" },
                { name: "Thomas Bernard", seat: "34C", cls: "economy"  as BadgeVariant, gate: "14" },
                { name: "Isabelle Martin",seat: "02B", cls: "first"    as BadgeVariant, gate: "14" },
              ].map(p => (
                <div key={p.name} className="bg-card border border-border rounded p-4 flex items-center gap-3">
                  <Avatar name={p.name} />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground truncate">{p.name}</p>
                    <p className="text-xs text-muted-foreground">Seat {p.seat} · Gate {p.gate}</p>
                  </div>
                  <Badge variant={p.cls} pill>
                    {p.cls === "economy" ? "Eco" : p.cls === "business" ? "Biz" : "1st"}
                  </Badge>
                </div>
              ))}
            </div>
          </Section>

          {/* Alerts */}
          <Section id="alerts" title="Alerts & Notifications" subtitle="Inline alerts and toast notifications for flight status communication.">
            <div className="space-y-3 mb-8">
              <AlertBox type="info" />
              <AlertBox type="success" />
              <AlertBox type="warning" />
              <AlertBox type="error" />
            </div>
            <SectionLabel>Toast Notifications</SectionLabel>
            <div className="flex flex-wrap gap-3">
              <Btn size="sm" variant="secondary" icon={<Info size={13} />} onClick={() => toast.info("Flight AB320 is now boarding at Gate 14.")}>Info</Btn>
              <Btn size="sm" variant="secondary" icon={<CheckCircle2 size={13} />} onClick={() => toast.success("Seat upgraded to Business 4A.")}>Success</Btn>
              <Btn size="sm" variant="secondary" icon={<AlertTriangle size={13} />} onClick={() => toast.warning("Check-in closes in 30 minutes.")}>Warning</Btn>
              <Btn size="sm" variant="secondary" icon={<AlertCircle size={13} />} onClick={() => toast.error("Failed to process upgrade. Try again.")}>Error</Btn>
            </div>
          </Section>

          {/* Navigation */}
          <Section id="navigation" title="Navigation & Tabs" subtitle="Tabs, breadcrumbs, pagination, and accordions.">
            <div className="space-y-10">
              <div>
                <SectionLabel>Tabs — Underline</SectionLabel>
                <Tabs.Root defaultValue="overview">
                  <Tabs.List className="flex border-b border-border">
                    {["Overview", "Seats", "Meals", "Baggage", "Extras"].map(t => (
                      <Tabs.Trigger key={t} value={t.toLowerCase()}
                        className="px-5 py-2.5 text-sm font-semibold text-muted-foreground border-b-2 border-transparent data-[state=active]:border-[#001F6B] data-[state=active]:text-[#001F6B] transition-colors hover:text-foreground">
                        {t}
                      </Tabs.Trigger>
                    ))}
                  </Tabs.List>
                  <div className="pt-5 text-sm text-muted-foreground">
                    <Tabs.Content value="overview">Flight AB320 · Paris CDG → New York JFK · 14 July 2025 · 7h 20m non-stop.</Tabs.Content>
                    <Tabs.Content value="seats">Choose from 240 available seats including exit row and premium economy options.</Tabs.Content>
                    <Tabs.Content value="meals">Select from 8 meal options: vegetarian, halal, gluten-free, and more.</Tabs.Content>
                    <Tabs.Content value="baggage">Your fare includes 1 carry-on (10 kg) and 1 checked bag (23 kg).</Tabs.Content>
                    <Tabs.Content value="extras">Add lounge access, fast-track security, or an airport transfer.</Tabs.Content>
                  </div>
                </Tabs.Root>
              </div>
              <div>
                <SectionLabel>Tabs — Pill</SectionLabel>
                <Tabs.Root defaultValue="departures">
                  <Tabs.List className="inline-flex gap-1 bg-muted p-1 rounded">
                    {["Departures", "Arrivals", "Connecting"].map(t => (
                      <Tabs.Trigger key={t} value={t.toLowerCase()}
                        className="px-4 py-1.5 text-sm font-semibold text-muted-foreground rounded data-[state=active]:bg-card data-[state=active]:text-[#001F6B] data-[state=active]:shadow-sm transition-all">
                        {t}
                      </Tabs.Trigger>
                    ))}
                  </Tabs.List>
                </Tabs.Root>
              </div>
              <div>
                <SectionLabel>Breadcrumbs</SectionLabel>
                <div className="flex items-center gap-1.5 text-sm flex-wrap">
                  {["Home", "Flights", "AB320", "Seat Selection"].map((c, i, arr) => (
                    <span key={c} className="flex items-center gap-1.5">
                      <span className={i === arr.length - 1 ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground cursor-pointer transition-colors"}>
                        {c}
                      </span>
                      {i < arr.length - 1 && <ChevronRight size={12} className="text-muted-foreground" />}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <SectionLabel>Pagination</SectionLabel>
                <Pagination />
              </div>
              <div>
                <SectionLabel>Accordion — FAQ</SectionLabel>
                <Accordion.Root type="single" collapsible className="border border-border rounded divide-y divide-border">
                  {[
                    { q: "What is the baggage allowance on Airavia flights?", a: "Economy passengers may check one bag up to 23 kg. Business passengers receive two bags up to 32 kg each. Oversized baggage fees apply beyond these limits." },
                    { q: "Can I change my seat after booking?", a: "Yes, seats can be changed up to 24 hours before departure via My Trips or the Airavia app. Seat change fees may apply depending on your fare." },
                    { q: "How early should I arrive at the airport?", a: "We recommend 2 hours before domestic and 3 hours before international flights. Online check-in opens 30 hours before departure." },
                    { q: "Is lounge access included in Business Class?", a: "Yes, Business Class passengers have complimentary access to Airavia lounges at participating airports. Lounge cards are issued at check-in." },
                  ].map(item => (
                    <Accordion.Item key={item.q} value={item.q}>
                      <Accordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-sm font-semibold text-foreground text-left hover:bg-muted/50 transition-colors [&[data-state=open]>svg]:rotate-180">
                        {item.q}
                        <ChevronDown size={15} className="text-muted-foreground transition-transform duration-200 shrink-0 ml-3" />
                      </Accordion.Trigger>
                      <Accordion.Content className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                        {item.a}
                      </Accordion.Content>
                    </Accordion.Item>
                  ))}
                </Accordion.Root>
              </div>
            </div>
          </Section>

          {/* Chat */}
          <Section id="chat" title="Conversational UI" subtitle="Sky — Airavia's AI assistant. Chat interface for booking support and in-app help.">
            <div className="grid lg:grid-cols-2 gap-8">
              <ChatUI />
              <div className="space-y-6">
                <div>
                  <SectionLabel>Inline Assistant Card</SectionLabel>
                  <div className="bg-card border border-border rounded p-4 flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-full bg-[#001F6B] flex items-center justify-center shrink-0">
                      <Bot size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#001F6B] mb-1">Sky · Airavia Assistant</p>
                      <p className="text-sm text-foreground">Your flight to JFK departs in 2 hours. Shall I send your boarding pass to your phone?</p>
                      <div className="flex gap-2 mt-3">
                        <Btn size="sm">Yes, send it</Btn>
                        <Btn size="sm" variant="ghost">Not now</Btn>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <SectionLabel>Floating Chat Button</SectionLabel>
                  <button type="button" className="flex items-center gap-2 bg-[#001F6B] text-white px-4 py-2.5 rounded-full shadow-lg text-sm font-semibold hover:bg-[#002B8F] transition-colors">
                    <Bot size={14} />
                    Chat with Sky
                    <span className="w-2 h-2 rounded-full bg-[#2EC074]" />
                  </button>
                </div>
                <div>
                  <SectionLabel>Notification Chip</SectionLabel>
                  <div className="inline-flex items-center gap-2 bg-[#E6ECF8] border border-border rounded px-3 py-2 text-sm">
                    <Bell size={13} className="text-[#001F6B]" />
                    <span className="text-foreground font-medium">New message from Sky</span>
                    <Badge variant="info" pill>1</Badge>
                  </div>
                </div>
                <div>
                  <SectionLabel>Quick Reply Chips</SectionLabel>
                  <div className="flex flex-wrap gap-2">
                    {["Check my flight status", "Upgrade my seat", "Add baggage", "Rebook flight", "Talk to an agent"].map(q => (
                      <button key={q} type="button" className="text-xs px-3 py-1.5 rounded-full border border-border bg-card text-foreground hover:bg-[#E6ECF8] hover:border-[#001F6B]/30 transition-colors font-medium">
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Mascot */}
          <Section id="mascot" title="Brand Mascot — Sky" subtitle="A minimalistic illustrated captain character embodying Airavia's approachable authority.">
            <div className="grid sm:grid-cols-3 gap-6 mb-6">
              {(["happy", "waving", "thinking"] as const).map(mood => (
                <div key={mood} className="bg-card border border-border rounded p-8 flex flex-col items-center gap-4 hover:shadow-md transition-shadow">
                  <AirbridgeMascot size={140} mood={mood} />
                  <div className="text-center">
                    <p className="text-sm font-semibold text-foreground capitalize">
                      {mood === "waving" ? "Welcome / Waving" : mood === "thinking" ? "Thinking / Loading" : "Default / Happy"}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {mood === "happy"    && "Standard greetings, confirmations"}
                      {mood === "waving"   && "Onboarding, first contact, celebrations"}
                      {mood === "thinking" && "Processing, loading, uncertainty"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#001F6B] rounded p-8 flex flex-col sm:flex-row items-center gap-6">
              <AirbridgeMascot size={100} mood="waving" />
              <div className="text-center sm:text-left">
                <div className="inline-flex mb-3">
                  <AiraviaLogo height={24} />
                </div>
                <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-1">Brand Character</p>
                <h3 className="text-xl font-bold text-white">Meet Sky</h3>
                <p className="text-white/70 text-sm mt-2 max-w-md leading-relaxed">
                  Sky is Airavia's guide — always at the gate, ready to help. A friendly face that makes flying feel effortless. Friendly without being frivolous, precise without being cold.
                </p>
              </div>
            </div>
          </Section>

          {/* Misc */}
          <Section id="misc" title="Miscellaneous" subtitle="Progress bars, skeletons, avatars, tooltips, and the icon library.">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <SectionLabel>Progress Bars</SectionLabel>
                  <div className="space-y-4">
                    <ProgressBar label="Boarding" value={68} max={100} color="#001F6B" />
                    <ProgressBar label="Baggage (kg)" value={18} max={23} color="#0057D9" />
                    <ProgressBar label="Miles Redeemed" value={42000} max={75000} color="#C9A84C" />
                    <ProgressBar label="Seats Filled" value={214} max={240} color="#0E7A44" />
                  </div>
                </div>
                <div>
                  <SectionLabel>Avatars</SectionLabel>
                  <div className="flex items-center gap-3 flex-wrap">
                    <Avatar name="Marie Dupont" size="lg" />
                    <Avatar name="Thomas Bernard" size="md" />
                    <Avatar name="Isabelle Martin" size="sm" />
                    <div className="flex -space-x-2">
                      {["A B", "C D", "E F", "G H"].map(n => (
                        <div key={n} className="ring-2 ring-background rounded-full"><Avatar name={n} size="sm" /></div>
                      ))}
                      <div className="ring-2 ring-background rounded-full w-7 h-7 bg-muted text-muted-foreground text-xs font-semibold flex items-center justify-center">+8</div>
                    </div>
                  </div>
                </div>
                <div>
                  <SectionLabel>Tooltips</SectionLabel>
                  <div className="flex gap-3 flex-wrap">
                    <TooltipPrimitive.Root>
                      <TooltipPrimitive.Trigger asChild>
                        <Btn variant="outline" size="sm" icon={<Info size={13} />}>Fare Details</Btn>
                      </TooltipPrimitive.Trigger>
                      <TooltipPrimitive.Content className="bg-[#09102B] text-white text-xs px-3 py-1.5 rounded shadow-lg max-w-xs z-50">
                        Non-refundable · No date changes · Baggage included
                        <TooltipPrimitive.Arrow className="fill-[#09102B]" />
                      </TooltipPrimitive.Content>
                    </TooltipPrimitive.Root>
                    <TooltipPrimitive.Root>
                      <TooltipPrimitive.Trigger asChild>
                        <Btn variant="ghost" size="sm" icon={<Settings size={13} />}>Settings</Btn>
                      </TooltipPrimitive.Trigger>
                      <TooltipPrimitive.Content className="bg-[#09102B] text-white text-xs px-3 py-1.5 rounded shadow-lg z-50">
                        Manage account preferences
                        <TooltipPrimitive.Arrow className="fill-[#09102B]" />
                      </TooltipPrimitive.Content>
                    </TooltipPrimitive.Root>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <SectionLabel>Skeleton Loaders</SectionLabel>
                  <div className="bg-card border border-border rounded p-5 space-y-3">
                    <div className="flex items-center gap-3">
                      <Skeleton className="w-9 h-9 rounded-full" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-3 w-32 rounded" />
                        <Skeleton className="h-2.5 w-20 rounded" />
                      </div>
                    </div>
                    <Skeleton className="h-3 w-full rounded" />
                    <Skeleton className="h-3 w-5/6 rounded" />
                    <Skeleton className="h-3 w-4/6 rounded" />
                    <div className="flex gap-2 pt-1">
                      <Skeleton className="h-8 w-24 rounded" />
                      <Skeleton className="h-8 w-20 rounded" />
                    </div>
                  </div>
                </div>
                <div>
                  <SectionLabel>Icon Library (Lucide)</SectionLabel>
                  <div className="grid grid-cols-8 gap-2">
                    {[Plane, MapPin, Calendar, Clock, Luggage, CreditCard, Star, Bell, Home, User, Search, Settings, Check, X, ChevronRight, MoreHorizontal].map((Icon, i) => (
                      <TooltipPrimitive.Root key={i}>
                        <TooltipPrimitive.Trigger asChild>
                          <div className="aspect-square bg-muted rounded flex items-center justify-center hover:bg-[#E6ECF8] transition-colors cursor-default">
                            <Icon size={16} className="text-[#001F6B]" />
                          </div>
                        </TooltipPrimitive.Trigger>
                        <TooltipPrimitive.Content className="bg-[#09102B] text-white text-[10px] px-2 py-1 rounded z-50">
                          {Icon.displayName ?? "icon"}
                        </TooltipPrimitive.Content>
                      </TooltipPrimitive.Root>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Footer */}
          <footer className="pt-10 pb-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground border-t border-border">
            <div className="flex items-center gap-3">
              <div className="bg-[#001F6B] rounded px-2.5 py-1 flex items-center">
                <AiraviaLogo height={18} />
              </div>
              <span className="text-muted-foreground">v2.1.0</span>
            </div>
            <span>Hanken Grotesk · Tailwind CSS 4 · Radix UI · Lucide</span>
          </footer>
        </main>
        </>}

      </div>
    </TooltipPrimitive.Provider>
  );
}
