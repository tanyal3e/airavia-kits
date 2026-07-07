import { ref, computed } from "vue";
import type { Locale, Strings } from "./locales/types";
import { en } from "./locales/en";
import { nl } from "./locales/nl";
import { de } from "./locales/de";
import { fr } from "./locales/fr";

const dict: Record<Locale, Strings> = { en, nl, de, fr };

export const LOCALES: Locale[] = ["en", "nl", "de", "fr"];
export const LOCALE_LABELS: Record<Locale, string> = { en: "EN", nl: "NL", de: "DE", fr: "FR" };

function readInitial(): Locale {
  try {
    const stored = localStorage.getItem("airavia_locale") as Locale | null;
    return stored && LOCALES.includes(stored) ? stored : "en";
  } catch {
    return "en";
  }
}

const locale = ref<Locale>(readInitial());

function setLocale(l: Locale) {
  locale.value = l;
  try {
    localStorage.setItem("airavia_locale", l);
  } catch {}
}

export function useLocale() {
  const t = (key: keyof Strings): string => dict[locale.value][key];
  return { locale: computed(() => locale.value), setLocale, t, LOCALES, LOCALE_LABELS };
}
