# Flow Plan: Airavia Website — Multilingual Homepage

*Generated from: Guidelines.md + HomepageHero Figma import · 2026-07-01*

---

## Context

The current `App.tsx` is a design system showcase (components demo). The task is to replace it with a full Airavia website homepage — inspired by Lufthansa.com / KLM.de — targeting premium long-haul travellers (Business Class, lounges, corporate). The site must support four locales (NL · EN · DE · FR) across all copy throughout the booking funnel.

The Figma import (`src/imports/HomepageHero/index.tsx`) provides the hero section design: full-bleed image hero, global nav, 4-field booking widget, and locale switcher. That structure will be adapted to use design system tokens, the real logo wrapper, and localized strings.

---

## Architecture

### i18n Strategy
Simple React context (`LocaleContext`) — no external library needed.
- `locale: "en" | "nl" | "de" | "fr"` stored in root state, passed via context
- `useLocale()` hook returns `{ locale, setLocale, t }` where `t(key)` looks up a string dictionary
- String dictionaries colocated in `src/app/components/i18n.tsx`
- Locale persisted to `localStorage` for session persistence

### File plan

| File | Role |
|---|---|
| `src/app/App.tsx` | Root — assembles all sections, holds locale state, renders `<Toaster>` |
| `src/app/components/i18n.tsx` | `LocaleProvider`, `useLocale`, string dictionaries (EN/NL/DE/FR) |
| `src/app/components/GlobalNav.tsx` | Sticky nav: logo, main links, locale switcher, Sign In + Miles CTA |
| `src/app/components/HeroSection.tsx` | Full-bleed hero with overlay, headline, subtitle, `<BookingWidget>` |
| `src/app/components/BookingWidget.tsx` | 4-field search bar (origin, dest, dates, cabin+pax) + Search CTA |
| `src/app/components/PremiumSection.tsx` | 3-column feature cards: Business Class · Lounges · Corporate |
| `src/app/components/DestinationsSection.tsx` | Long-haul route cards: CDG–JFK, AMS–DXB, BRU–SIN, CDG–NRT, AMS–GRU |
| `src/app/components/MilesSection.tsx` | Dark navy miles program CTA with gold accents |
| `src/app/components/SiteFooter.tsx` | 4-column footer: About · Routes · Business · Support + legal + locale |
| `src/app/components/SkyChatFloat.tsx` | Fixed bottom-right Sky AI floating button |

---

## Section Details

### 1 · GlobalNav (`bg-[#001F6B]`, sticky, z-50)
- **Left**: `AirbridgeLogotype` in white-bg pill (height=28), then nav links: Destinations · Business Class · Lounges · Corporate · Book
- **Right**: locale switcher (NL · EN · DE · FR as text buttons, active underlined in gold `bg-[#C9A84C]`), Sign In (ghost/text), Miles Program (outline gold `border-[#C9A84C] text-[#C9A84C]`)
- Mobile: hamburger → slide-in drawer with all links + locale
- Nav links: `text-xs font-semibold uppercase text-white/80 hover:text-white tracking-wide`

### 2 · HeroSection (880px, full bleed)
- Background: `import imgHero from "../../imports/HomepageHero/bf677e7936a0f3eccce62e487ed5fef8a3cb40b9.png"` + `bg-black/40` overlay
- Display headline: `text-5xl font-bold text-white tracking-[-0.02em]` (Hanken Grotesk — design system standard). Note: Figma uses Fraunces Bold; we can add `@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@700')` to fonts.css and use `font-[Fraunces,serif]` for the hero headline only if the user prefers the original Figma look.
- Subtitle: `text-xl text-white/80`
- All copy pulled from `t()` — fully localized
- News ticker: gold dot + localized announcement

### 3 · BookingWidget (dark semi-transparent panel)
- `bg-[#080c14] border border-white/10 rounded`
- 4 cells (Origin / Destination / Dates / Passengers & Class) divided by `border-r border-white/10`
- Each cell: gold overline label + white value text
- Gold Search button: `bg-[#C9A84C] text-[#080c14] font-bold uppercase h-full`
- Labels and placeholder values localized

### 4 · PremiumSection (`py-14 bg-background`)
- Overline: localized
- H2: localized headline
- 3 cards (`bg-card border border-border rounded p-5 hover:shadow-md transition-shadow`):
  - **Business Class**: flat-bed icon, localized tagline, `→ Explore` ghost CTA
  - **Airport Lounges**: lounge icon, localized tagline, CTA
  - **Corporate Programs**: briefcase icon, localized tagline, CTA
- Each card uses real Airavia language (no lorem ipsum)

### 5 · DestinationsSection (`py-14`)
- Overline + H2 (localized)
- 5 route cards in a horizontal scroll / responsive grid:
  - CDG → JFK · From €1,240 · Business · Mon 14 Jul
  - AMS → DXB · From €890 · Business
  - BRU → SIN · From €1,460 · Business
  - CDG → NRT · From €1,680 · Business
  - AMS → GRU · From €1,100 · Business
- Each card: `ImageWithFallback` sourced from Unsplash (use `mcp__plugin_make_unsplash__search_photos`), route overlay, `Badge variant="business"`, price, Select CTA
- "View all routes" outline CTA

### 6 · MilesSection (`py-14 bg-[#001F6B]`)
- Gold overline, white H2, white/70 body (all localized)
- Stat row: 3 stats with gold values (e.g. "40+ destinations", "2M+ members", "25 partner lounges")
- Gold "Join Miles Program" CTA button + white "Learn more" ghost

### 7 · SiteFooter (`bg-[#001F6B] pt-14 pb-8`)
- Row 1: `AirbridgeLogotype` (height=22) + tagline "Premium aviation experience"
- Row 2: 4 link columns (About Airavia / Our Routes / Business & Corporate / Support)
- Row 3: divider + locale switcher (same as nav) + copyright + legal links
- All column headings and links localized

### 8 · SkyChatFloat
- Fixed `bottom-6 right-6 z-50`
- `bg-[#001F6B] text-white px-4 py-2.5 rounded-full shadow-lg font-semibold` + `<Bot>` icon + green status dot
- Opens a minimal chat drawer (reuse ChatUI pattern from existing App.tsx)

---

## i18n String Keys (sample)

```ts
const strings = {
  en: {
    nav_destinations: "Destinations",
    nav_business: "Business Class",
    nav_lounges: "Lounges",
    nav_corporate: "Corporate",
    nav_book: "Book",
    nav_signin: "Sign In",
    nav_miles: "Miles Program",
    hero_headline: "Where Business Meets the Sky",
    hero_subtitle: "Long-haul Business Class departing Amsterdam · Frankfurt · Brussels · Paris",
    booking_origin: "Origin",
    booking_destination: "Destination",
    booking_dates: "Dates",
    booking_pax: "Passengers & Class",
    booking_cta: "Search Flights",
    // … destinations, premium, miles, footer sections
  },
  nl: { hero_headline: "Waar Zaken de Lucht in Gaan", /* … */ },
  de: { hero_headline: "Wo Business auf den Himmel trifft", /* … */ },
  fr: { hero_headline: "Là où les affaires rencontrent le ciel", /* … */ },
}
```

---

## Design System Compliance Checklist

- Logo: `AirbridgeLogotype` wrapper only — never recreate as SVG/CSS
- Colors: semantic Tailwind classes (`bg-primary`, `text-accent`, etc.) or whitelisted raw hex values from guidelines
- Typography: Hanken Grotesk everywhere; JetBrains Mono for flight codes/prices
- Buttons: `Btn` component with correct variants — one `primary` max per section
- Badges: `Badge` component for cabin/status
- Radix: `Select` for cabin class dropdown in booking widget
- Sonner: toasts for booking confirmation
- No `rounded-full` on buttons; no gradients on nav; no lorem ipsum

---

## Verification

1. Switch each locale (NL → EN → DE → FR) and verify all visible copy updates
2. Fill booking widget fields → click Search → confirm toast fires
3. Confirm logo renders correctly at both nav (28px) and footer (22px) heights
4. Resize to mobile (375px) — nav collapses to hamburger, hero stack vertically, cards scroll horizontally
5. Click Sky chat float → chat drawer opens and is interactive
6. Confirm no hardcoded hex values outside the approved list from guidelines
