<script setup lang="ts">
import { ref, onUnmounted, watch } from "vue";
import { Menu, Globe } from "@lucide/vue";
import Toaster from "./components/Toaster.vue";
import AiraviaLogo from "./components/AiraviaLogo.vue";
import SiteTemplate from "./components/SiteTemplate.vue";
import DesignSystemPage from "./components/ds/DesignSystemPage.vue";

type AppView = "ds" | "site";

const NAV_SECTIONS = [
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "buttons", label: "Buttons" },
  { id: "badges", label: "Badges" },
  { id: "forms", label: "Forms" },
  { id: "cards", label: "Cards" },
  { id: "alerts", label: "Alerts" },
  { id: "navigation", label: "Navigation" },
  { id: "chat", label: "Conversational UI" },
  { id: "mascot", label: "Mascot" },
  { id: "misc", label: "Misc" },
];

const view = ref<AppView>("ds");
const activeSection = ref("colors");
const mobileMenuOpen = ref(false);

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  activeSection.value = id;
  mobileMenuOpen.value = false;
}

function onScroll() {
  for (const s of [...NAV_SECTIONS].reverse()) {
    const el = document.getElementById(s.id);
    if (el && el.getBoundingClientRect().top <= 120) {
      activeSection.value = s.id;
      break;
    }
  }
}

watch(view, (v, _prev, onCleanup) => {
  if (v !== "ds") return;
  window.addEventListener("scroll", onScroll, { passive: true });
  onCleanup(() => window.removeEventListener("scroll", onScroll));
}, { immediate: true });

onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <Toaster />
  <div class="min-h-screen bg-background">
    <!-- ── Meta header ────────────────────────────────────────────── -->
    <header class="sticky top-0 z-50 bg-[#001F6B] border-b border-white/10 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-6 h-14 flex items-center gap-4">
        <!-- Logo -->
        <div class="flex items-center gap-3 shrink-0">
          <AiraviaLogo :height="28" />
        </div>

        <!-- View tabs -->
        <div class="flex items-center gap-0.5 border border-white/20 rounded p-0.5 shrink-0">
          <button
            type="button"
            :class="['px-3 py-1 text-xs font-semibold rounded transition-all duration-150', view === 'ds' ? 'bg-white text-[#001F6B]' : 'text-white/55 hover:text-white']"
            @click="view = 'ds'"
          >
            Design System
          </button>
          <button
            type="button"
            :class="['inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded transition-all duration-150', view === 'site' ? 'bg-white text-[#001F6B]' : 'text-white/55 hover:text-white']"
            @click="view = 'site'"
          >
            <Globe :size="11" />
            Site Template
          </button>
        </div>

        <!-- DS section nav (visible only in DS mode) -->
        <div v-if="view === 'ds'" class="hidden lg:flex items-center gap-0.5 ml-2 overflow-x-auto">
          <button
            v-for="s in NAV_SECTIONS"
            :key="s.id"
            type="button"
            :class="['px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors', activeSection === s.id ? 'bg-white/15 text-white' : 'text-white/50 hover:text-white hover:bg-white/10']"
            @click="scrollTo(s.id)"
          >
            {{ s.label }}
          </button>
        </div>

        <div class="ml-auto flex items-center gap-3">
          <span v-if="view === 'ds'" class="hidden sm:inline font-[JetBrains_Mono,monospace] text-xs text-white/30">v2.1.0</span>
          <button v-if="view === 'ds'" class="lg:hidden text-white/70 hover:text-white" type="button" @click="mobileMenuOpen = !mobileMenuOpen">
            <Menu :size="20" />
          </button>
        </div>
      </div>
    </header>

    <!-- ── Site Template view ─────────────────────────────────────── -->
    <SiteTemplate v-if="view === 'site'" />

    <!-- ── Design System view ─────────────────────────────────────── -->
    <template v-if="view === 'ds'">
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="lg:hidden fixed inset-0 z-50 bg-black/40" @click="mobileMenuOpen = false">
        <div class="absolute left-0 top-0 h-full w-64 bg-card border-r border-border p-5" @click.stop>
          <p class="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">Sections</p>
          <button
            v-for="s in NAV_SECTIONS"
            :key="s.id"
            type="button"
            :class="['w-full text-left px-3 py-2 rounded text-sm font-medium mb-0.5 transition-colors', activeSection === s.id ? 'bg-[#E6ECF8] text-[#001F6B]' : 'text-foreground hover:bg-muted']"
            @click="scrollTo(s.id)"
          >
            {{ s.label }}
          </button>
        </div>
      </div>

      <DesignSystemPage />
    </template>
  </div>
</template>
