<script setup lang="ts">
import { ref, computed } from "vue";
import { Menu, X } from "@lucide/vue";
import AiraviaLogo from "./AiraviaLogo.vue";
import { useLocale } from "@/composables/useLocale";

const { locale, setLocale, t, LOCALES, LOCALE_LABELS } = useLocale();
const mobileOpen = ref(false);

const navLinks = computed(() => [
  t("nav_destinations"), t("nav_business_class"), t("nav_lounges"), t("nav_corporate"), t("nav_book"),
]);
</script>

<template>
  <nav class="sticky top-0 z-40 bg-[rgba(0,31,107,0.95)] w-full shrink-0" style="border-bottom: 0.625px solid rgba(255,255,255,0.1)">
    <div class="flex gap-6 h-[72px] items-center max-w-[1280px] mx-auto px-6">
      <!-- Logo -->
      <div class="shrink-0">
        <AiraviaLogo :height="20" />
      </div>

      <!-- Main nav links -->
      <div class="hidden lg:flex items-center gap-6 flex-1 justify-center">
        <button
          v-for="label in navLinks"
          :key="label"
          type="button"
          class="text-[12px] font-semibold leading-4 tracking-[0.3px] uppercase text-white/75 hover:text-white transition-colors whitespace-nowrap"
        >
          {{ label }}
        </button>
      </div>

      <!-- Right: locale + sign in + miles -->
      <div class="hidden lg:flex items-center gap-4 ml-auto shrink-0">
        <!-- Locale switcher -->
        <div class="flex items-center gap-2.5">
          <button
            v-for="l in LOCALES"
            :key="l"
            type="button"
            class="flex flex-col items-center gap-[2px] group"
            @click="setLocale(l)"
          >
            <span :class="['text-[12px] font-semibold leading-4 transition-colors', locale === l ? 'text-white font-bold' : 'text-white/50 hover:text-white/80']">
              {{ LOCALE_LABELS[l] }}
            </span>
            <span :class="['h-[1.5px] w-3.5 rounded-full transition-all', locale === l ? 'bg-[#C9A84C]' : 'bg-transparent']" />
          </button>
        </div>

        <div class="bg-white/20 h-4 w-px" />

        <button type="button" class="text-[14px] font-semibold leading-5 text-white/80 hover:text-white transition-colors">
          {{ t("nav_signin") }}
        </button>

        <button
          type="button"
          class="flex items-center px-4 py-2 text-[#C9A84C] text-[12px] font-semibold uppercase tracking-[0.3px] rounded hover:bg-[#C9A84C]/10 transition-colors"
          style="border: 0.625px solid #C9A84C"
        >
          {{ t("nav_miles") }}
        </button>
      </div>

      <!-- Mobile hamburger -->
      <button type="button" class="lg:hidden text-white/80 hover:text-white p-1 ml-auto" @click="mobileOpen = !mobileOpen">
        <X v-if="mobileOpen" :size="22" />
        <Menu v-else :size="22" />
      </button>
    </div>
  </nav>

  <!-- Mobile drawer -->
  <div v-if="mobileOpen" class="lg:hidden fixed inset-0 z-50 bg-black/50" @click="mobileOpen = false">
    <div
      class="absolute right-0 top-0 h-full w-72 bg-[#001f6b] flex flex-col"
      style="border-left: 1px solid rgba(255,255,255,0.1)"
      @click.stop
    >
      <div class="flex items-center justify-between px-5 py-4" style="border-bottom: 1px solid rgba(255,255,255,0.1)">
        <AiraviaLogo :height="20" />
        <button type="button" class="text-white/60 hover:text-white" @click="mobileOpen = false"><X :size="18" /></button>
      </div>
      <div class="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-1">
        <button
          v-for="label in navLinks"
          :key="label"
          type="button"
          class="text-left py-3 text-[12px] font-semibold uppercase tracking-[0.3px] text-white/80 hover:text-white border-b border-white/10 last:border-0 transition-colors"
          @click="mobileOpen = false"
        >
          {{ label }}
        </button>
      </div>
      <div class="px-5 py-5 space-y-4" style="border-top: 1px solid rgba(255,255,255,0.1)">
        <div class="flex items-center gap-2">
          <button
            v-for="l in LOCALES"
            :key="l"
            type="button"
            :class="['text-xs font-semibold px-2 py-1 rounded transition-colors', locale === l ? 'bg-white text-[#001F6B]' : 'text-white/60 hover:text-white']"
            @click="setLocale(l)"
          >
            {{ LOCALE_LABELS[l] }}
          </button>
        </div>
        <button type="button" class="w-full py-2.5 text-sm font-semibold text-white/80 hover:text-white text-left transition-colors">{{ t("nav_signin") }}</button>
        <button
          type="button"
          class="w-full py-2.5 text-[12px] font-semibold uppercase tracking-[0.3px] text-[#C9A84C] rounded hover:bg-[#C9A84C]/10 transition-colors"
          style="border: 0.625px solid #C9A84C"
        >
          {{ t("nav_miles") }}
        </button>
      </div>
    </div>
  </div>
</template>
