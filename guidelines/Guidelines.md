# Airavia Design System Guidelines

## Brand Identity

- **Brand name**: Airavia (never "Airbridge" — that is an old name)
- **Tagline**: Premium aviation experience
- **Voice**: Precise, confident, European — never casual, chatty, or playful
- **Mascot**: Sky (character asset in progress — always reference as "Sky" in UI copy)
- **Logo**: Always import from `@/imports/LogoColor/index` (mark only) or `@/imports/LogotypeColor/index` (full logotype). Never recreate the logo in SVG or CSS.

---

## Color Tokens

Always use Tailwind semantic classes or CSS custom properties. Avoid hardcoded hex values unless a semantic token does not exist for the use case.

### Semantic tokens (prefer these)

| Purpose | Tailwind class | Value |
|---|---|---|
| Primary navy | `bg-primary` / `text-primary` | `#001F6B` |
| On primary | `text-primary-foreground` | `#FFFFFF` |
| Gold accent | `bg-accent` / `text-accent` | `#C9A84C` |
| On accent | `text-accent-foreground` | `#001F6B` |
| Secondary surface | `bg-secondary` | `#E6ECF8` |
| On secondary | `text-secondary-foreground` | `#001F6B` |
| Muted surface | `bg-muted` | `#EDF0F7` |
| Muted text | `text-muted-foreground` | `#5B6580` |
| Page background | `bg-background` | `#F4F6FB` |
| Card / panel | `bg-card` | `#FFFFFF` |
| Border | `border-border` | `rgba(0,31,107,0.12)` |
| Focus ring | `ring-ring` | `#0057D9` |
| Error / danger | `bg-destructive` / `text-destructive` | `#D0182E` |

### Cobalt scale (for illustrative / decorative contexts)

| Step | Hex |
|---|---|
| Navy 50 | `#EDF1FC` |
| Navy 100 | `#D2DCFA` |
| Navy 200 | `#A5B8F5` |
| Navy 500 | `#0057D9` |
| Navy 800 | `#001F6B` |
| Navy 900 | `#000E3B` |

### Status colors (use raw values)

| Status | Hex | Light tint bg |
|---|---|---|
| Success | `#0E7A44` | `#D4F0E3` |
| Warning | `#E87D0D` | `#FEF0D9` |
| Error | `#D0182E` | `#FDDDDF` |
| Info | `#0057D9` | `#D2DCFA` |

---

## Typography

- **Primary font**: `Hanken Grotesk` — all UI text, headings, labels, buttons
- **Mono font**: `JetBrains Mono` — flight codes, token labels, code blocks, tabular data (`font-[JetBrains_Mono,monospace]`)
- Both fonts are already imported in `src/styles/fonts.css`

### Scale

| Label | Size | Weight | Notes |
|---|---|---|---|
| Display | `text-5xl` | 700 | `tracking-[-0.02em]` |
| H1 | `text-3xl` | 700 | `tracking-[-0.02em]` |
| H2 | `text-2xl` | 600 | `tracking-[-0.015em]` |
| H3 | `text-xl` | 600 | |
| H4 | `text-lg` | 600 | |
| Body | `text-base` | 400 | |
| Body Small | `text-sm` | 400 | |
| Caption | `text-xs` | 500 | |
| Overline | `text-xs` | 700 | `tracking-widest uppercase` |
| Mono | `text-xs` | 500 | JetBrains Mono |

### Copy conventions

- **Never** use lorem ipsum
- Passenger names: European — Marie Dupont, Thomas Bernard, Isabelle Martin, Léa Rousseau
- Flight codes: `AB` prefix — AB320, AB104, AB777
- Airport codes: real IATA — CDG, JFK, LHR, DXB, SIN, NRT
- Date format: `Mon 14 Jul`
- Time format: 24h — `08:35`, `16:30`
- Status copy: "On Time" · "Delayed 45 min" · "Cancelled" · "Boarding" · "Scheduled"

---

## Shape & Spacing

- Base radius: `rounded` = 4px — tight, structured, not bubbly
- `rounded-sm` → badges, chips, inputs
- `rounded` → buttons, cards, panels
- `rounded-lg` → modals, large overlays
- **Never** `rounded-full` on buttons
- Section spacing: `py-14` · Card padding: `p-5`
- Layout: CSS Grid for page structure, Flexbox for component internals

---

## Component Patterns

### Buttons

Six variants. Maximum one `primary` per section.

| Variant | Key classes |
|---|---|
| primary | `bg-[#001F6B] text-white hover:bg-[#002B8F] active:bg-[#001A5C]` |
| secondary | `bg-[#E6ECF8] text-[#001F6B] hover:bg-[#D0DBF5]` |
| ghost | `bg-transparent text-[#001F6B] hover:bg-[#E6ECF8]` |
| outline | `border border-[#001F6B] text-[#001F6B] hover:bg-[#E6ECF8]` |
| danger | `bg-[#D0182E] text-white hover:bg-[#A81224]` |
| gold | `bg-[#C9A84C] text-[#3D2800] hover:bg-[#B8943D]` — premium upgrade CTAs |

Sizes: `h-8 px-3 text-xs rounded-sm` (sm) · `h-10 px-5 text-sm rounded` (md) · `h-12 px-7 text-base rounded` (lg)

Always: `font-semibold` · `transition-all duration-150` · `focus-visible:ring-2 focus-visible:ring-ring` · `disabled:opacity-40 disabled:cursor-not-allowed`

Support icon-left, icon-right, icon-only, and loading (Loader2 spinner) variants.

### Badges & Tags

```
px-2.5 py-0.5 text-xs font-semibold
rounded-sm (rectangular) or rounded-full (pill)
```

| Variant | Classes |
|---|---|
| info | `bg-[#D2DCFA] text-[#001F6B]` |
| success | `bg-[#D4F0E3] text-[#0E7A44]` |
| warning | `bg-[#FEF0D9] text-[#994F08]` |
| error | `bg-[#FDDDDF] text-[#A81224]` |
| neutral | `bg-[#EDF0F7] text-[#5B6580]` |
| Economy | `bg-[#EDF0F7] text-[#2E3452] border border-[#B8C3DC]` |
| Business | `bg-[#001F6B] text-white` |
| First Class | `bg-[#C9A84C] text-[#3D2800]` |

Flight status badges: always dot + pill — `<span class="w-1.5 h-1.5 rounded-full bg-current opacity-80" /> On Time`

### Cards

Base: `bg-card border border-border rounded p-5 hover:shadow-md transition-shadow`

**Flight card**: cabin badge + heart-save · route row (origin 2xl bold → Plane icon → dest 2xl bold) · departure/arrival times · price (xl bold) + Select CTA (border-t)

**Stat card**: label (sm muted) + icon (top-right muted) + value (2xl bold) + delta (xs colored ±%)

**Passenger card**: Avatar initials + name (sm semibold truncate) + seat/gate (xs muted) + cabin badge

### Forms

- Input: `h-11 px-3 rounded border border-border bg-card`
- Focus: `focus-within:ring-2 focus-within:ring-ring/30 focus-within:border-ring transition-all`
- Error: `border-destructive bg-[#FDDDDF]/30` + `<p class="text-xs text-destructive">` below
- Always show labels: `text-sm font-semibold text-foreground`
- Selects: use Radix `@radix-ui/react-select` — never native `<select>`
- Checkboxes: `w-[18px] h-[18px] rounded-sm border-2` · checked: `bg-[#001F6B] border-[#001F6B]`
- Toggles: `w-11 h-6 rounded-full` pill · navy (`bg-[#001F6B]`) when on

### Alerts

Four types: info / success / warning / error.

```
flex gap-3 p-4 rounded border [tinted-bg] [tinted-border] [colored-text]
  [Icon 16px mt-0.5 shrink-0]
  [div flex-1]
    [p text-sm font-semibold — title]
    [p text-sm opacity-80 — body]
  [X button shrink-0 opacity-60 hover:opacity-100]
```

Toasts: **Sonner** — `position="top-right"` `richColors`. Use `toast.info()`, `toast.success()`, `toast.warning()`, `toast.error()`.

### Tabs

**Underline**: `<Tabs.List class="flex border-b border-border">` · trigger: `px-5 py-2.5 text-sm font-semibold border-b-2 border-transparent data-[state=active]:border-[#001F6B] data-[state=active]:text-[#001F6B] text-muted-foreground hover:text-foreground transition-colors`

**Pill**: `<Tabs.List class="inline-flex gap-1 bg-muted p-1 rounded">` · trigger: `px-4 py-1.5 text-sm font-semibold rounded data-[state=active]:bg-card data-[state=active]:text-[#001F6B] data-[state=active]:shadow-sm`

### Navigation

**Breadcrumbs**: `flex items-center gap-1.5 text-sm` — last item `text-foreground font-medium`, others `text-muted-foreground hover:text-foreground cursor-pointer`

**Accordion** (Radix): `border border-border rounded divide-y divide-border` · trigger `px-5 py-4 text-sm font-semibold hover:bg-muted/50` · chevron `transition-transform [&[data-state=open]>svg]:rotate-180`

---

## Conversational UI — Sky Assistant

Sky is Airavia's AI travel assistant. Always labeled "Sky — Airavia Assistant".

### Chat widget layout

```
Header:        bg-[#001F6B] | gold avatar (bg-[#C9A84C]) + Bot icon | name text-white | green online dot
Messages:      bg-[#F4F6FB] flex-col gap-3 overflow-y-auto
  Bot bubble:  bg-card border border-border rounded rounded-tl-none shadow-sm px-3.5 py-2.5 text-sm
  User bubble: bg-[#001F6B] text-white rounded rounded-tr-none px-3.5 py-2.5 text-sm
  Typing:      3 × dot animate-bounce staggered 0 / 150 / 300ms
Quick replies: px-4 py-2 border-t flex gap-2 overflow-x-auto
  Chip:        text-xs px-3 py-1.5 rounded-full border border-border bg-card hover:bg-[#E6ECF8]
Input row:     px-3 pb-3 pt-1 border-t bg-card flex items-center gap-2
  [Paperclip] [Smile] [textarea bg-muted rounded] [Mic] [Send button primary sm]
```

### Inline variants

- **Inline card**: `bg-card border border-border rounded p-4 flex gap-3` — bot icon + "Sky · Airavia Assistant" label + message + action buttons
- **Floating button**: `bg-[#001F6B] text-white px-4 py-2.5 rounded-full shadow-lg font-semibold` + `<Bot>` icon + green status dot
- **Notification chip**: `bg-[#E6ECF8] border border-border rounded px-3 py-2 inline-flex items-center gap-2` + Bell icon + badge

---

## Logo Usage

### Import

```tsx
import LogoColorImport from "@/imports/LogoColor/index";         // mark only
import LogotypeColorImport from "@/imports/LogotypeColor/index"; // mark + wordmark
```

### Scaling wrapper (copy this pattern)

```tsx
function AirbridgeLogotype({ height = 40 }: { height?: number }) {
  const scale = height / 529;
  return (
    <div style={{ width: Math.round(2688 * scale), height, overflow: "hidden", position: "relative", flexShrink: 0 }}>
      <div style={{ position: "absolute", left: -144 * scale, top: -124 * scale, width: 3000, height: 780, transform: `scale(${scale})`, transformOrigin: "top left" }}>
        <LogotypeColorImport />
      </div>
    </div>
  );
}
```

### Placement rules

| Context | Component | Height | Wrap in |
|---|---|---|---|
| Header (dark navy) | `AirbridgeLogotype` | 28px | `bg-white rounded px-2.5 py-1` |
| Footer (light bg) | `AirbridgeLogotype` | 22px | None |
| Dark panel | `AirbridgeLogotype` | 24px | `bg-white rounded px-2.5 py-1` |
| Icon context | `AirbridgeMark` | 32–48px | White bg |

Never stretch, recolor, rotate, or recreate as code.

---

## Do / Don't

### Do
- `font-semibold` on all button and label text
- Real IATA codes and European names in all sample data
- `hover:shadow-md transition-shadow` on interactive cards
- `border-t border-border` for intra-card dividers
- Radix primitives for Select, Tooltip, Accordion, Tabs, Dialog
- Sonner for all toasts
- White pill wrapper around logos on dark backgrounds

### Don't
- `rounded-full` on buttons
- Generic blue — use cobalt tokens
- More than one `primary` button per section
- `style={{ color: '#...' }}` for brand colors — use Tailwind classes
- Gradients on buttons or the nav bar
- Lorem ipsum or "John Doe" names
- Inline `absolute` positioning for page layout — use Grid/Flex
- Recreate the logo as SVG or CSS art
