<script setup lang="ts">
import {
  Info, Settings, Plane, MapPin, Calendar, Clock, Luggage, CreditCard,
  Star, Bell, Home, User, Search, Check, X, ChevronRight, MoreHorizontal,
} from "@lucide/vue";
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow } from "reka-ui";
import Section from "../Section.vue";
import SectionLabel from "../SectionLabel.vue";
import ProgressBar from "../ProgressBar.vue";
import Avatar from "../Avatar.vue";
import Skeleton from "../Skeleton.vue";
import Btn from "../Btn.vue";

const avatarStack = ["A B", "C D", "E F", "G H"];

const icons = [
  { component: Plane, name: "Plane" },
  { component: MapPin, name: "MapPin" },
  { component: Calendar, name: "Calendar" },
  { component: Clock, name: "Clock" },
  { component: Luggage, name: "Luggage" },
  { component: CreditCard, name: "CreditCard" },
  { component: Star, name: "Star" },
  { component: Bell, name: "Bell" },
  { component: Home, name: "Home" },
  { component: User, name: "User" },
  { component: Search, name: "Search" },
  { component: Settings, name: "Settings" },
  { component: Check, name: "Check" },
  { component: X, name: "X" },
  { component: ChevronRight, name: "ChevronRight" },
  { component: MoreHorizontal, name: "MoreHorizontal" },
];
</script>

<template>
  <Section id="misc" title="Miscellaneous" subtitle="Progress bars, skeletons, avatars, tooltips, and the icon library.">
    <TooltipProvider :delay-duration="200">
      <div class="grid md:grid-cols-2 gap-10">
        <div class="space-y-6">
          <div>
            <SectionLabel>Progress Bars</SectionLabel>
            <div class="space-y-4">
              <ProgressBar label="Boarding" :value="68" :max="100" color="#001F6B" />
              <ProgressBar label="Baggage (kg)" :value="18" :max="23" color="#0057D9" />
              <ProgressBar label="Miles Redeemed" :value="42000" :max="75000" color="#C9A84C" />
              <ProgressBar label="Seats Filled" :value="214" :max="240" color="#0E7A44" />
            </div>
          </div>
          <div>
            <SectionLabel>Avatars</SectionLabel>
            <div class="flex items-center gap-3 flex-wrap">
              <Avatar name="Marie Dupont" size="lg" />
              <Avatar name="Thomas Bernard" size="md" />
              <Avatar name="Isabelle Martin" size="sm" />
              <div class="flex -space-x-2">
                <div v-for="n in avatarStack" :key="n" class="ring-2 ring-background rounded-full"><Avatar :name="n" size="sm" /></div>
                <div class="ring-2 ring-background rounded-full w-7 h-7 bg-muted text-muted-foreground text-xs font-semibold flex items-center justify-center">+8</div>
              </div>
            </div>
          </div>
          <div>
            <SectionLabel>Tooltips</SectionLabel>
            <div class="flex gap-3 flex-wrap">
              <TooltipRoot>
                <TooltipTrigger as-child>
                  <Btn variant="outline" size="sm"><template #icon><Info :size="13" /></template>Fare Details</Btn>
                </TooltipTrigger>
                <TooltipPortal>
                  <TooltipContent class="bg-[#09102B] text-white text-xs px-3 py-1.5 rounded shadow-lg max-w-xs z-50">
                    Non-refundable · No date changes · Baggage included
                    <TooltipArrow class="fill-[#09102B]" />
                  </TooltipContent>
                </TooltipPortal>
              </TooltipRoot>
              <TooltipRoot>
                <TooltipTrigger as-child>
                  <Btn variant="ghost" size="sm"><template #icon><Settings :size="13" /></template>Settings</Btn>
                </TooltipTrigger>
                <TooltipPortal>
                  <TooltipContent class="bg-[#09102B] text-white text-xs px-3 py-1.5 rounded shadow-lg z-50">
                    Manage account preferences
                    <TooltipArrow class="fill-[#09102B]" />
                  </TooltipContent>
                </TooltipPortal>
              </TooltipRoot>
            </div>
          </div>
        </div>
        <div class="space-y-6">
          <div>
            <SectionLabel>Skeleton Loaders</SectionLabel>
            <div class="bg-card border border-border rounded p-5 space-y-3">
              <div class="flex items-center gap-3">
                <Skeleton class-name="w-9 h-9 rounded-full" />
                <div class="flex-1 space-y-2">
                  <Skeleton class-name="h-3 w-32 rounded" />
                  <Skeleton class-name="h-2.5 w-20 rounded" />
                </div>
              </div>
              <Skeleton class-name="h-3 w-full rounded" />
              <Skeleton class-name="h-3 w-5/6 rounded" />
              <Skeleton class-name="h-3 w-4/6 rounded" />
              <div class="flex gap-2 pt-1">
                <Skeleton class-name="h-8 w-24 rounded" />
                <Skeleton class-name="h-8 w-20 rounded" />
              </div>
            </div>
          </div>
          <div>
            <SectionLabel>Icon Library (Lucide)</SectionLabel>
            <div class="grid grid-cols-8 gap-2">
              <TooltipRoot v-for="icon in icons" :key="icon.name">
                <TooltipTrigger as-child>
                  <div class="aspect-square bg-muted rounded flex items-center justify-center hover:bg-[#E6ECF8] transition-colors cursor-default">
                    <component :is="icon.component" :size="16" class="text-[#001F6B]" />
                  </div>
                </TooltipTrigger>
                <TooltipPortal>
                  <TooltipContent class="bg-[#09102B] text-white text-[10px] px-2 py-1 rounded z-50">
                    {{ icon.name }}
                  </TooltipContent>
                </TooltipPortal>
              </TooltipRoot>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  </Section>
</template>
