<script setup lang="ts">
import { computed } from "vue";
import AiraviaLogo from "./AiraviaLogo.vue";
import { useLocale } from "@/composables/useLocale";
import type { Locale } from "@/composables/locales/types";

type FooterCol = { heading: string; links: string[] };

const COLS_EN: FooterCol[] = [
  { heading: "About Airavia", links: ["Our Story", "Leadership", "Careers", "Sustainability", "FlyGO"] },
  { heading: "Our Routes", links: ["Flights to Barcelona", "Flights to Tokyo", "Flights to Copenhagen", "Flights to Amsterdam", "All Routes"] },
  { heading: "Business & Corporate", links: ["Corporate Programs", "Group Travel", "Travel Agents", "Partnership"] },
  { heading: "Stay Informed", links: ["Customer Support", "Newsletter", "Airavia App", "Flight Status", "Payments & Refunds"] },
];
const COLS_NL: FooterCol[] = [
  { heading: "Over Airavia", links: ["Ons Verhaal", "Leiderschap", "Vacatures", "Duurzaamheid", "FlyGO"] },
  { heading: "Onze Routes", links: ["Vluchten naar Barcelona", "Vluchten naar Tokyo", "Vluchten naar Kopenhagen", "Vluchten naar Amsterdam", "Alle Routes"] },
  { heading: "Zakelijk & Corporate", links: ["Corporate Programma's", "Groepsreizen", "Reisagenten", "Partnerschap"] },
  { heading: "Op de Hoogte Blijven", links: ["Klantenservice", "Nieuwsbrief", "Airavia App", "Vluchtstatus", "Betalingen & Terugbetalingen"] },
];
const COLS_DE: FooterCol[] = [
  { heading: "Über Airavia", links: ["Unsere Geschichte", "Führungsteam", "Karriere", "Nachhaltigkeit", "FlyGO"] },
  { heading: "Unsere Routen", links: ["Flüge nach Barcelona", "Flüge nach Tokio", "Flüge nach Kopenhagen", "Flüge nach Amsterdam", "Alle Routen"] },
  { heading: "Business & Corporate", links: ["Corporate-Programme", "Gruppenreisen", "Reisebüros", "Partnerschaft"] },
  { heading: "Bleiben Sie Informiert", links: ["Kundendienst", "Newsletter", "Airavia App", "Flugstatus", "Zahlungen & Rückerstattungen"] },
];
const COLS_FR: FooterCol[] = [
  { heading: "À propos d'Airavia", links: ["Notre Histoire", "Direction", "Carrières", "Durabilité", "FlyGO"] },
  { heading: "Nos Routes", links: ["Vols vers Barcelone", "Vols vers Tokyo", "Vols vers Copenhague", "Vols vers Amsterdam", "Toutes les routes"] },
  { heading: "Entreprises & Corporate", links: ["Programmes Entreprises", "Voyages de Groupe", "Agences de Voyage", "Partenariat"] },
  { heading: "Restez Informé", links: ["Service Client", "Newsletter", "Application Airavia", "Statut de Vol", "Paiements et Remboursements"] },
];
const COLS_MAP: Record<Locale, FooterCol[]> = { en: COLS_EN, nl: COLS_NL, de: COLS_DE, fr: COLS_FR };

const { locale, setLocale, t, LOCALES, LOCALE_LABELS } = useLocale();
const cols = computed(() => COLS_MAP[locale.value]);
const legalLinks = ["Privacy", "Terms", "Cookies"];
</script>

<template>
  <footer class="bg-[#001f6b] w-full shrink-0 relative" style="border-top: 0.625px solid rgba(255,255,255,0.1)">
    <div class="max-w-[1280px] mx-auto px-6 pt-14 pb-8">
      <!-- Top: brand + 4 link columns -->
      <div class="flex gap-6 pb-8" style="border-bottom: 0.625px solid rgba(255,255,255,0.1)">
        <!-- Brand col -->
        <div class="flex flex-col items-start gap-2 w-[389px] shrink-0 text-left">
          <AiraviaLogo :height="20" />
          <p class="text-[14px] font-normal leading-[22.75px] text-white/50">{{ t("footer_tagline") }}</p>
        </div>
        <!-- Link columns -->
        <div v-for="col in cols" :key="col.heading" class="flex flex-col gap-3 flex-1">
          <p class="text-[12px] font-bold leading-4 tracking-[1.2px] uppercase text-white/40 mb-1">{{ col.heading }}</p>
          <button
            v-for="(link, i) in col.links"
            :key="`${col.heading}-${i}`"
            type="button"
            class="text-[14px] font-semibold leading-5 text-white/60 hover:text-white transition-colors text-left"
          >
            {{ link }}
          </button>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="flex items-center justify-between pt-6">
        <p class="text-[12px] font-normal leading-4 text-white/30">© 2026 Airavia International. All rights reserved.</p>
        <div class="flex items-center gap-4">
          <!-- Locale -->
          <div class="flex items-center gap-2">
            <button
              v-for="l in LOCALES"
              :key="l"
              type="button"
              :class="['text-[12px] font-semibold transition-colors', locale === l ? 'text-[#C9A84C]' : 'text-white/30 hover:text-white/60']"
              @click="setLocale(l)"
            >
              {{ LOCALE_LABELS[l] }}
            </button>
          </div>
          <div class="w-px h-3 bg-white/20" />
          <div class="flex items-center gap-3">
            <button
              v-for="item in legalLinks"
              :key="item"
              type="button"
              class="text-[12px] font-semibold text-white/30 hover:text-white/60 transition-colors"
            >
              {{ item }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
