# Plan: Airline Design System — Air France Style

## Context
Build a comprehensive, interactive design system showcase page replicating the visual language of the Air France Storybook design system with a shifted blue hue. The page displays all foundational components in a single scrollable canvas, functioning as a living style guide. The blue hue shifts from AF's slightly cyan-leaning navy (#002157) toward a deeper cobalt-indigo (#001F6B / #0057D9) — preserving the premium aviation feel while differentiating.

## Aesthetic Stance
**Minimalist + precision-structured** — clean grid, sharp hierarchy, generous whitespace. Premium airline aesthetic: controlled, trustworthy, European.

## Design Tokens (`src/styles/theme.css`)
Update all `:root` and `.dark` values; preserve `@theme inline` contract:

```css
:root {
  --background: #F4F6FB;
  --foreground: #09102B;
  --card: #FFFFFF;
  --card-foreground: #09102B;
  --primary: #001F6B;       /* cobalt navy — shifted from AF's #002157 */
  --primary-foreground: #FFFFFF;
  --secondary: #E6ECF8;
  --secondary-foreground: #001F6B;
  --muted: #EDF0F7;
  --muted-foreground: #5B6580;
  --accent: #C9A84C;        /* warm gold accent */
  --accent-foreground: #001F6B;
  --destructive: #D0182E;
  --destructive-foreground: #FFFFFF;
  --border: rgba(0, 31, 107, 0.12);
  --input: transparent;
  --input-background: #EDF0F7;
  --ring: #0057D9;
  --radius: 0.25rem;        /* AF uses small radius ~4px */
}
```

## Typography (`src/styles/fonts.css`)
- **Primary**: `Hanken Grotesk` (wght 300–800) — clean contemporary grotesque, slightly premium, not overused
- **Mono**: `JetBrains Mono` (wght 400–500) — for token labels and code displays

## Component Sections in `App.tsx`

Build a single-page design system with a sticky top navigation, scrollable main canvas, and these sections:

### 1. Header / Navigation
- Logo mark (stylized aviation logo using SVG inline)  
- System name: "Airbridge Design System"
- Section nav links (Colors, Typography, Buttons, Forms, Cards, Alerts, Data)
- Active section indicator

### 2. Color Palette
- Primary scale: Navy-100 → Navy-900 (cobalt family)
- Semantic: Success (#0E7A44), Warning (#E87D0D), Error (#D0182E), Info (#0057D9)
- Neutrals: Gray-50 through Gray-900
- Accent: Gold tones
- Each swatch shows: color block, token name, hex value

### 3. Typography Scale
- Display XL / Display L / H1-H4 / Body L / Body M / Body S / Caption / Overline / Label
- Show each in Hanken Grotesk at correct weight/size
- Side-by-side: token name, CSS value, usage note

### 4. Buttons
- Variants: Primary, Secondary, Ghost, Outline, Danger, Gold (accent)
- Sizes: sm / md / lg
- States: default, hover (CSS), focus, disabled, loading (spinner inline)
- Icon variants: icon-left, icon-right, icon-only
- Interactive: hover/active states via Tailwind

### 5. Badges & Tags
- Semantic: Info, Success, Warning, Error, Neutral
- Flight-specific: Economy, Business, First, Cancelled, On-time, Delayed
- Dot indicator variants
- Pill vs. rectangular

### 6. Form Elements
- Text input (default, filled, error, disabled states)
- Search input with icon
- Select / Dropdown (using Radix Select)
- Textarea
- Checkbox (default, checked, indeterminate, disabled)
- Radio group
- Toggle / Switch

### 7. Cards
- Basic info card
- Flight route card (origin → destination, date, duration, price)
- Stat card (metric + delta)
- Passenger card (avatar, name, seat class)

### 8. Alerts & Notifications
- Info / Success / Warning / Error variants
- With icon, title, description, dismiss button
- Toast demo (using Sonner)

### 9. Navigation & Tabs
- Tab bar (Radix Tabs): bordered variant + pill variant
- Breadcrumbs
- Pagination

### 10. Data & Misc
- Progress bar (boarding progress, baggage allowance)
- Skeleton loaders
- Avatar (initials + image variants, group)
- Tooltip (Radix Tooltip)
- Accordion (Radix Accordion) with FAQ content

## File Changes
1. **`src/styles/fonts.css`** — Add Google Fonts imports for Hanken Grotesk + JetBrains Mono
2. **`src/styles/theme.css`** — Update design tokens (preserve @theme inline contract)
3. **`src/app/App.tsx`** — Full design system showcase (single file, ~800-1000 lines)

## Implementation Notes
- Use `useState` for active nav section, tab state, accordion state, loading button state
- Use Radix primitives: `@radix-ui/react-tabs`, `@radix-ui/react-accordion`, `@radix-ui/react-tooltip`, `@radix-ui/react-select`
- Use `lucide-react` icons: Plane, ChevronRight, Check, X, AlertCircle, Info, Search, etc.
- Use `sonner` for toast notifications demo
- All component demos are self-contained within the page (no routing needed)
- Sticky sidebar nav on desktop (>1024px), scrollable sections
- Smooth scroll to sections via `id` anchors

## Logo Integration — Figma Imports (replaces previous PNG plan)

### What was imported
Four Figma-exported TSX logo components landed in `src/imports/` (read-only):

| Component | File | Contains |
|---|---|---|
| `LogoColor` | `@/imports/LogoColor/index.tsx` | Mark only — 3 ascending diagonal strokes in cobalt `#0044B0` + periwinkle `#6D8EEC` |
| `LogoColor-1` | `@/imports/LogoColor-1/index.tsx` | Identical to LogoColor (duplicate frame) |
| `LogotypeColor` | `@/imports/LogotypeColor/index.tsx` | Mark + "AIRBRIDGE" wordmark in color |
| `LogoBw` | `@/imports/LogoBw/index.tsx` | Mark + wordmark in black/grey |

Each component root is `<div className="bg-white relative size-full">` — it fills its container and uses absolute pixel coordinates from Figma. To render correctly I wrap each in a container whose dimensions match the Figma canvas, then CSS-scale that container down to the desired display size.

### Estimated Figma canvas sizes (from element positions in the imported code)
- **LogoColor / LogoColor-1**: mark spans left=178→1339, top=120→652 → canvas ~**1440 × 770 px**
- **LogotypeColor**: mark at x=144, "IR" at x=1143, "AVIA" at x=1685+1147=2832, text bottom at 402+251=653 → canvas ~**3000 × 780 px**
- **LogoBw**: same structure as LogotypeColor → canvas ~**3000 × 780 px**

### Two wrapper components to create inside `App.tsx`

```tsx
import LogoColorImport from "@/imports/LogoColor/index";
import LogotypeColorImport from "@/imports/LogotypeColor/index";

// Mark only — compact header / icon contexts
function AirbridgeMark({ height = 36 }: { height?: number }) {
  // Mark region in Figma canvas: left 178→1339, top 120→652 → 1161 × 532
  const REGION_W = 1161, REGION_H = 532;
  const CANVAS_W = 1440, CANVAS_H = 770;
  const scale = height / REGION_H;
  const displayW = Math.round(REGION_W * scale);
  return (
    <div style={{ width: displayW, height, overflow: "hidden", position: "relative", flexShrink: 0 }}>
      <div style={{
        position: "absolute",
        left: -178 * scale,
        top: -120 * scale,
        width: CANVAS_W,
        height: CANVAS_H,
        transform: `scale(${scale})`,
        transformOrigin: "top left",
      }}>
        <LogoColorImport />
      </div>
    </div>
  );
}

// Full color logotype (mark + wordmark) — header / footer / hero
function AirbridgeLogotype({ height = 40 }: { height?: number }) {
  // Full wordmark content: x 144→2832, y 124→653 → 2688 × 529
  const REGION_W = 2688, REGION_H = 529;
  const CANVAS_W = 3000, CANVAS_H = 780;
  const scale = height / REGION_H;
  const displayW = Math.round(REGION_W * scale);
  return (
    <div style={{ width: displayW, height, overflow: "hidden", position: "relative", flexShrink: 0 }}>
      <div style={{
        position: "absolute",
        left: -144 * scale,
        top: -124 * scale,
        width: CANVAS_W,
        height: CANVAS_H,
        transform: `scale(${scale})`,
        transformOrigin: "top left",
      }}>
        <LogotypeColorImport />
      </div>
    </div>
  );
}
```

### Where logos are used in `App.tsx`

| Location | Component | Height | Background context |
|---|---|---|---|
| **Header** (sticky dark navy bar) | `AirbridgeLogotype` | 28px | Wrap in `bg-white rounded px-2.5 py-1` pill |
| **Footer** | `AirbridgeLogotype` | 22px | On light `bg-background` — pill not needed |
| **Mascot section** brand callout | `AirbridgeMark` | 48px | On dark navy — wrap in white pill |

### Removals
- Delete `import airbridgeLogo from "@/imports/image.png"` 
- Delete `import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback"` (no longer used)
- Remove all `<ImageWithFallback src={airbridgeLogo} ...>` usages (header + footer)

### Montserrat font (for LogoBw wordmark)
`LogoBw` uses `Montserrat Regular` and `Montserrat ExtraBold`. Add to `fonts.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap');
```
(Only needed if `LogoBw` is rendered. If only `LogotypeColor` is used, skip — the wordmark there is SVG paths, not text.)

## Verification

The official Airbridge logo (`src/imports/image.png`) is an abstract geometric mark — ascending diagonal strokes in deep cobalt blue with a lighter periwinkle shadow layer, suggesting forward motion / flight.

### Changes to `src/app/App.tsx`
1. Add import at top:
   ```tsx
   import airbridgeLogo from "@/imports/image.png";
   import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
   ```
2. Replace the header logo area (currently a gold `<div>` with a `<Plane>` icon) with:
   ```tsx
   <ImageWithFallback src={airbridgeLogo} alt="Airbridge logo" className="h-7 w-auto object-contain" />
   ```
3. Replace the footer logo mark similarly with a smaller version (`h-5`).
4. The gold rounded square + Plane icon placeholder is removed entirely; the real logo is used on the white-text header (the PNG has a white background, so render it on a white/light pill or give the header a white logo zone, or use `mix-blend-multiply` to drop the white background visually).

   Since the header is dark navy (`#001F6B`), wrap the logo in a small white rounded pill so it reads correctly:
   ```tsx
   <div className="bg-white rounded px-2 py-1 flex items-center">
     <ImageWithFallback src={airbridgeLogo} alt="Airbridge logo" className="h-6 w-auto object-contain" />
   </div>
   ```

## Publish as Figma Make Kit

### Context
Figma Make reads `guidelines/Guidelines.md` at the start of every generation in a project with this kit applied. Populating it with the full Airavia system means any new Make prompt will automatically produce on-brand output — correct colors, fonts, component patterns, aviation language, and logo usage — without re-specifying it each time.

The `guidelines/Guidelines.md` currently contains only a blank template. `package.json` uses the placeholder name `@figma/my-make-file`.

### File 1: `guidelines/Guidelines.md`
Completely replace the template. Sections:

#### 1. Brand Identity
- Name: **Airavia** · Premium aviation experience
- Voice: precise, confident, European — never casual or playful
- Mascot: **Sky** (placeholder in progress — always reference as "Sky" in UI copy)

#### 2. Color Tokens (always use Tailwind classes / CSS vars, never raw hex)
| Purpose | Token / class | Value |
|---|---|---|
| Primary (navy) | `bg-primary` / `text-primary` | `#001F6B` |
| Gold accent | `bg-accent` / `text-accent` | `#C9A84C` |
| Secondary surface | `bg-secondary` | `#E6ECF8` |
| Muted surface | `bg-muted` | `#EDF0F7` |
| Page background | `bg-background` | `#F4F6FB` |
| Card surface | `bg-card` | `#FFFFFF` |
| Error / cancel | `text-destructive` | `#D0182E` |
| Success | — | `#0E7A44` |
| Warning | — | `#E87D0D` |

Cobalt scale: 50 `#EDF1FC` → 900 `#000E3B`. Use semantic tokens first; fallback to `#001F6B`/`#0057D9` raw values only when a token doesn't exist.

#### 3. Typography
- Primary: `font-[Hanken_Grotesk,system-ui,sans-serif]` — all UI text
- Mono: `font-[JetBrains_Mono,monospace]` — flight codes, token labels, data
- Weights: 700 Display/H1 · 600 H2–H4 · 500 labels · 400 body
- Tracking: `-0.02em` display · `-0.015em` H2 · `tracking-widest uppercase` for overlines
- Use real aviation copy: passenger names (French/European), IATA codes, flight numbers with `AB` prefix

#### 4. Shape & Spacing
- Base radius: `rounded` = 4px — tight and structured
- Badges/inputs: `rounded-sm` · Buttons/cards: `rounded` · Modals: `rounded-lg`
- Never use `rounded-full` on buttons
- Section spacing: `py-14` · Card padding: `p-5`
- Layout: CSS Grid for page structure, Flexbox for component internals

#### 5. Component Patterns

**Buttons**
- 6 variants: `primary` `secondary` `ghost` `outline` `danger` `gold`
- Primary: `bg-[#001F6B] text-white hover:bg-[#002B8F]` — one per section max
- Gold: `bg-[#C9A84C] text-[#3D2800]` — premium upgrade CTAs
- Sizes: `h-8` sm · `h-10` md · `h-12` lg
- Always `font-semibold`; include icon-left, icon-right, or icon-only variants

**Badges**
- Semantic: info (cobalt tint) · success (green tint) · warning (amber tint) · error (red tint)
- Cabin: Economy (neutral border) · Business (`bg-[#001F6B] text-white`) · First (`bg-[#C9A84C]`)
- Flight status: always dot + pill — `<dot> On Time` / `Delayed 45 min` / `Cancelled`

**Cards** (`bg-card border border-border rounded p-5 hover:shadow-md transition-shadow`)
- Flight card: route (origin → dest, bold 2xl codes), duration with `<Plane>` icon, price, Select CTA
- Stat card: label (sm muted) + value (2xl bold) + delta (xs colored ±%)
- Passenger card: `<Avatar>` initials + name + seat + cabin badge

**Forms**
- Input height: `h-11` · Border: `border-border` · Focus: `focus:ring-2 focus:ring-ring/30`
- Error: `border-destructive bg-[#FDDDDF]/30` + error message below
- Always show labels (`text-sm font-semibold text-foreground`)
- Use Radix Select for dropdowns

**Alerts** (4 types — info/success/warning/error)
- Structure: `[icon] [title bold] [body text] [× dismiss]`
- Toasts: Sonner, `position="top-right"`, `richColors`

**Tabs**
- Underline variant: `border-b-2 border-transparent data-[state=active]:border-[#001F6B] data-[state=active]:text-[#001F6B]`
- Pill variant: `bg-muted p-1` container · `data-[state=active]:bg-card shadow-sm` trigger

**Conversational UI / Sky assistant**
- Chat header: `bg-[#001F6B]`, gold circle avatar (`bg-[#C9A84C]`), "Sky — Airavia Assistant", green online dot
- User bubbles: `bg-[#001F6B] text-white rounded-tr-none`
- Bot bubbles: `bg-card border border-border rounded-tl-none shadow-sm`
- Typing: 3 dots with staggered `animate-bounce`
- Quick-reply chips: `rounded-full border border-border hover:bg-[#E6ECF8]`
- Floating button: `bg-[#001F6B] text-white rounded-full shadow-lg` + green status dot

#### 6. Logo Usage
- **Color mark only**: import `LogoColorImport from "@/imports/LogoColor/index"` — compact contexts
- **Full logotype**: import `LogotypeColorImport from "@/imports/LogotypeColor/index"` — header/footer
- Rendering: wrap in scaled container (see `AirbridgeLogotype` / `AirbridgeMark` wrapper pattern in App.tsx)
- On dark backgrounds (`bg-[#001F6B]`): always wrap logo in `bg-white rounded px-2.5 py-1`
- Never stretch, recolor, or recreate the logo in SVG/CSS

#### 7. Aviation Content Conventions
- Flight codes: `AB` prefix — AB320, AB104, AB777
- Airports: real IATA codes — CDG, JFK, LHR, DXB, SIN, NRT
- Date format: `Mon 14 Jul` (short weekday, day, short month)
- Time format: 24h — `08:35`, `16:30`
- Status copy: "On Time" · "Delayed 45 min" · "Cancelled" · "Boarding" · "Scheduled"
- Passenger names: use European/French names — Marie Dupont, Thomas Bernard, Isabelle Martin

#### 8. Don'ts
- Do not use `rounded-full` on buttons
- Do not use generic blue — use the cobalt palette tokens
- Do not use lorem ipsum or placeholder "John Doe" names
- Do not add more than one `primary` button per section
- Do not use inline `style={{ color: '#...' }}` for brand colors — use Tailwind classes
- Do not use gradients on buttons or navigation backgrounds

---

### File 2: `package.json`
Change `name` and `version`, remove `"private"`:
```json
{
  "name": "@airavia/design-system",
  "version": "1.0.0"
}
```
All other fields stay unchanged.

## Verification (App)
- App renders without errors in Vite dev server
- All sections are visible and correctly styled
- Interactive elements (tabs, accordion, buttons, select) function with React state
- Color tokens reflect the shifted cobalt-blue palette
- Typography renders in Hanken Grotesk (verify font loads from Google Fonts)
- Responsive: sidebar collapses on mobile, sections stack cleanly

## Verification (Make Kit)
- Open a new Figma Make prompt in this project — guidelines auto-apply
- Generate a simple flight booking card — output uses `#001F6B`, Hanken Grotesk, correct badge/button variants without being prompted
- `Guidelines.md` is scannable in under 2 minutes
