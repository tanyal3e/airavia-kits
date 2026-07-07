<script setup lang="ts">
import { ref, onUnmounted, watch } from "vue";
import {
  Menu, Globe, Blocks, PanelLeftClose, PanelLeftOpen,
  Palette, Type, MousePointer, Tag, ListChecks, LayoutGrid,
  AlertTriangle, Compass, MessageSquare, Sparkles, MoreHorizontal,
} from "@lucide/vue";
import Toaster from "./components/Toaster.vue";
import AiraviaLogo from "./components/AiraviaLogo.vue";
import SiteTemplate from "./components/SiteTemplate.vue";
import DesignSystemPage from "./components/ds/DesignSystemPage.vue";

type AppView = "ds" | "site";

const NAV_SECTIONS = [
  { id: "colors", label: "Colors", icon: Palette },
  { id: "typography", label: "Typography", icon: Type },
  { id: "buttons", label: "Buttons", icon: MousePointer },
  { id: "badges", label: "Badges", icon: Tag },
  { id: "forms", label: "Forms", icon: ListChecks },
  { id: "cards", label: "Cards", icon: LayoutGrid },
  { id: "alerts", label: "Alerts", icon: AlertTriangle },
  { id: "navigation", label: "Navigation", icon: Compass },
  { id: "chat", label: "Conversational UI", icon: MessageSquare },
  { id: "mascot", label: "Mascot", icon: Sparkles },
  { id: "misc", label: "Misc", icon: MoreHorizontal },
];

const view = ref<AppView>("ds");
const activeSection = ref("colors");
const mobileMenuOpen = ref(false);
const sidebarCollapsed = ref(false);

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
  <div class="min-h-screen bg-background flex">
    <!-- ── Sidebar (desktop) ──────────────────────────────────────── -->
    <aside
      :class="[
        'hidden lg:flex flex-col shrink-0 sticky top-0 h-screen bg-[#001F6B] border-r border-white/10 transition-[width] duration-200',
        sidebarCollapsed ? 'w-16' : 'w-60',
      ]"
    >
      <!-- Logo + collapse toggle -->
      <div :class="['flex items-center h-14 px-3 border-b border-white/10 shrink-0', sidebarCollapsed ? 'justify-center' : 'justify-between']">
        <AiraviaLogo v-if="!sidebarCollapsed" :height="22" />
        <button type="button" class="text-white/60 hover:text-white transition-colors shrink-0" title="Toggle sidebar" @click="sidebarCollapsed = !sidebarCollapsed">
          <PanelLeftOpen v-if="sidebarCollapsed" :size="18" />
          <PanelLeftClose v-else :size="18" />
        </button>
      </div>

      <!-- View switcher -->
      <div class="flex flex-col gap-1 p-2 border-b border-white/10 shrink-0">
        <button
          type="button"
          :class="['flex items-center gap-2.5 rounded text-xs font-semibold transition-all duration-150', sidebarCollapsed ? 'justify-center p-2' : 'px-3 py-2', view === 'ds' ? 'bg-white text-[#001F6B]' : 'text-white/55 hover:text-white hover:bg-white/10']"
          title="Design System"
          @click="view = 'ds'"
        >
          <Blocks :size="14" class="shrink-0" />
          <span v-if="!sidebarCollapsed">Design System</span>
        </button>
        <button
          type="button"
          :class="['flex items-center gap-2.5 rounded text-xs font-semibold transition-all duration-150', sidebarCollapsed ? 'justify-center p-2' : 'px-3 py-2', view === 'site' ? 'bg-white text-[#001F6B]' : 'text-white/55 hover:text-white hover:bg-white/10']"
          title="Site Template"
          @click="view = 'site'"
        >
          <Globe :size="14" class="shrink-0" />
          <span v-if="!sidebarCollapsed">Site Template</span>
        </button>
      </div>

      <!-- Section nav (DS mode only) -->
      <nav v-if="view === 'ds'" class="flex-1 overflow-y-auto p-2 flex flex-col gap-0.5">
        <button
          v-for="s in NAV_SECTIONS"
          :key="s.id"
          type="button"
          :class="['flex items-center gap-2.5 rounded text-xs font-semibold whitespace-nowrap transition-colors', sidebarCollapsed ? 'justify-center p-2' : 'px-3 py-2', activeSection === s.id ? 'bg-white/15 text-white' : 'text-white/50 hover:text-white hover:bg-white/10']"
          :title="s.label"
          @click="scrollTo(s.id)"
        >
          <component :is="s.icon" :size="14" class="shrink-0" />
          <span v-if="!sidebarCollapsed">{{ s.label }}</span>
        </button>
      </nav>
      <div v-else class="flex-1" />

      <!-- Footer -->
      <div class="p-3 border-t border-white/10 shrink-0 flex items-center justify-center">
        <span class="font-[JetBrains_Mono,monospace] text-white/30" :class="sidebarCollapsed ? 'text-[9px]' : 'text-[11px] self-start'">{{ sidebarCollapsed ? "v2" : "v2.1.0" }}</span>
      </div>
    </aside>

    <!-- ── Main column ──────────────────────────────────────────── -->
    <div class="flex-1 min-w-0">
      <!-- Mobile/tablet header (< lg) -->
      <header class="lg:hidden sticky top-0 z-50 bg-[#001F6B] border-b border-white/10 shadow-sm">
        <div class="px-4 sm:px-6 h-14 flex items-center gap-4">
          <div class="flex items-center gap-3 shrink-0">
            <AiraviaLogo :height="24" />
          </div>

          <div class="ml-auto flex items-center gap-3">
            <span v-if="view === 'ds'" class="hidden sm:inline font-[JetBrains_Mono,monospace] text-xs text-white/30">v2.1.0</span>
            <button v-if="view === 'ds'" class="text-white/70 hover:text-white" type="button" @click="mobileMenuOpen = !mobileMenuOpen">
              <Menu :size="20" />
            </button>
          </div>
        </div>

        <!-- View switcher (below logo) -->
        <div class="px-4 sm:px-6 pb-3 flex items-center gap-0.5 border-t border-white/10 pt-3">
          <button
            type="button"
            :class="['flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded transition-all duration-150', view === 'ds' ? 'bg-white text-[#001F6B]' : 'text-white/55 hover:text-white bg-white/5']"
            @click="view = 'ds'"
          >
            <Blocks :size="12" />
            Design System
          </button>
          <button
            type="button"
            :class="['flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded transition-all duration-150', view === 'site' ? 'bg-white text-[#001F6B]' : 'text-white/55 hover:text-white bg-white/5']"
            @click="view = 'site'"
          >
            <Globe :size="12" />
            Site Template
          </button>
        </div>
      </header>

      <!-- ── Site Template view ───────────────────────────────────── -->
      <SiteTemplate v-if="view === 'site'" />

      <!-- ── Design System view ───────────────────────────────────── -->
      <template v-if="view === 'ds'">
        <!-- Mobile menu -->
        <div v-if="mobileMenuOpen" class="lg:hidden fixed inset-0 z-50 bg-black/40" @click="mobileMenuOpen = false">
          <div class="absolute left-0 top-0 h-full w-64 bg-card border-r border-border p-5" @click.stop>
            <p class="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">Sections</p>
            <button
              v-for="s in NAV_SECTIONS"
              :key="s.id"
              type="button"
              :class="['w-full text-left px-3 py-2 rounded text-sm font-medium mb-0.5 transition-colors flex items-center gap-2.5', activeSection === s.id ? 'bg-[#E6ECF8] text-[#001F6B]' : 'text-foreground hover:bg-muted']"
              @click="scrollTo(s.id)"
            >
              <component :is="s.icon" :size="14" class="shrink-0" />
              {{ s.label }}
            </button>
          </div>
        </div>

        <DesignSystemPage />
      </template>
    </div>
  </div>
</template>
